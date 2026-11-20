(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function gg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var zu={exports:{}},Va={},Hu={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function kv(){if(rm)return Mt;rm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function g(D){return D===null||typeof D!="object"?null:(D=y&&D[y]||D["@@iterator"],typeof D=="function"?D:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function _(D,re,Me){this.props=D,this.context=re,this.refs=T,this.updater=Me||S}_.prototype.isReactComponent={},_.prototype.setState=function(D,re){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,re,"setState")},_.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function v(){}v.prototype=_.prototype;function N(D,re,Me){this.props=D,this.context=re,this.refs=T,this.updater=Me||S}var k=N.prototype=new v;k.constructor=N,E(k,_.prototype),k.isPureReactComponent=!0;var C=Array.isArray,L=Object.prototype.hasOwnProperty,P={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function w(D,re,Me){var Ue,ve={},ye=null,$=null;if(re!=null)for(Ue in re.ref!==void 0&&($=re.ref),re.key!==void 0&&(ye=""+re.key),re)L.call(re,Ue)&&!F.hasOwnProperty(Ue)&&(ve[Ue]=re[Ue]);var ce=arguments.length-2;if(ce===1)ve.children=Me;else if(1<ce){for(var _e=Array(ce),Ve=0;Ve<ce;Ve++)_e[Ve]=arguments[Ve+2];ve.children=_e}if(D&&D.defaultProps)for(Ue in ce=D.defaultProps,ce)ve[Ue]===void 0&&(ve[Ue]=ce[Ue]);return{$$typeof:s,type:D,key:ye,ref:$,props:ve,_owner:P.current}}function I(D,re){return{$$typeof:s,type:D.type,key:re,ref:D.ref,props:D.props,_owner:D._owner}}function V(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function q(D){var re={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Me){return re[Me]})}var J=/\/+/g;function Q(D,re){return typeof D=="object"&&D!==null&&D.key!=null?q(""+D.key):re.toString(36)}function X(D,re,Me,Ue,ve){var ye=typeof D;(ye==="undefined"||ye==="boolean")&&(D=null);var $=!1;if(D===null)$=!0;else switch(ye){case"string":case"number":$=!0;break;case"object":switch(D.$$typeof){case s:case e:$=!0}}if($)return $=D,ve=ve($),D=Ue===""?"."+Q($,0):Ue,C(ve)?(Me="",D!=null&&(Me=D.replace(J,"$&/")+"/"),X(ve,re,Me,"",function(Ve){return Ve})):ve!=null&&(V(ve)&&(ve=I(ve,Me+(!ve.key||$&&$.key===ve.key?"":(""+ve.key).replace(J,"$&/")+"/")+D)),re.push(ve)),1;if($=0,Ue=Ue===""?".":Ue+":",C(D))for(var ce=0;ce<D.length;ce++){ye=D[ce];var _e=Ue+Q(ye,ce);$+=X(ye,re,Me,_e,ve)}else if(_e=g(D),typeof _e=="function")for(D=_e.call(D),ce=0;!(ye=D.next()).done;)ye=ye.value,_e=Ue+Q(ye,ce++),$+=X(ye,re,Me,_e,ve);else if(ye==="object")throw re=String(D),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return $}function te(D,re,Me){if(D==null)return D;var Ue=[],ve=0;return X(D,Ue,"","",function(ye){return re.call(Me,ye,ve++)}),Ue}function pe(D){if(D._status===-1){var re=D._result;re=re(),re.then(function(Me){(D._status===0||D._status===-1)&&(D._status=1,D._result=Me)},function(Me){(D._status===0||D._status===-1)&&(D._status=2,D._result=Me)}),D._status===-1&&(D._status=0,D._result=re)}if(D._status===1)return D._result.default;throw D._result}var ne={current:null},Z={transition:null},j={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:Z,ReactCurrentOwner:P};function B(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:te,forEach:function(D,re,Me){te(D,function(){re.apply(this,arguments)},Me)},count:function(D){var re=0;return te(D,function(){re++}),re},toArray:function(D){return te(D,function(re){return re})||[]},only:function(D){if(!V(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Mt.Component=_,Mt.Fragment=n,Mt.Profiler=o,Mt.PureComponent=N,Mt.StrictMode=r,Mt.Suspense=h,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,Mt.act=B,Mt.cloneElement=function(D,re,Me){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ue=E({},D.props),ve=D.key,ye=D.ref,$=D._owner;if(re!=null){if(re.ref!==void 0&&(ye=re.ref,$=P.current),re.key!==void 0&&(ve=""+re.key),D.type&&D.type.defaultProps)var ce=D.type.defaultProps;for(_e in re)L.call(re,_e)&&!F.hasOwnProperty(_e)&&(Ue[_e]=re[_e]===void 0&&ce!==void 0?ce[_e]:re[_e])}var _e=arguments.length-2;if(_e===1)Ue.children=Me;else if(1<_e){ce=Array(_e);for(var Ve=0;Ve<_e;Ve++)ce[Ve]=arguments[Ve+2];Ue.children=ce}return{$$typeof:s,type:D.type,key:ve,ref:ye,props:Ue,_owner:$}},Mt.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},Mt.createElement=w,Mt.createFactory=function(D){var re=w.bind(null,D);return re.type=D,re},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(D){return{$$typeof:d,render:D}},Mt.isValidElement=V,Mt.lazy=function(D){return{$$typeof:x,_payload:{_status:-1,_result:D},_init:pe}},Mt.memo=function(D,re){return{$$typeof:p,type:D,compare:re===void 0?null:re}},Mt.startTransition=function(D){var re=Z.transition;Z.transition={};try{D()}finally{Z.transition=re}},Mt.unstable_act=B,Mt.useCallback=function(D,re){return ne.current.useCallback(D,re)},Mt.useContext=function(D){return ne.current.useContext(D)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(D){return ne.current.useDeferredValue(D)},Mt.useEffect=function(D,re){return ne.current.useEffect(D,re)},Mt.useId=function(){return ne.current.useId()},Mt.useImperativeHandle=function(D,re,Me){return ne.current.useImperativeHandle(D,re,Me)},Mt.useInsertionEffect=function(D,re){return ne.current.useInsertionEffect(D,re)},Mt.useLayoutEffect=function(D,re){return ne.current.useLayoutEffect(D,re)},Mt.useMemo=function(D,re){return ne.current.useMemo(D,re)},Mt.useReducer=function(D,re,Me){return ne.current.useReducer(D,re,Me)},Mt.useRef=function(D){return ne.current.useRef(D)},Mt.useState=function(D){return ne.current.useState(D)},Mt.useSyncExternalStore=function(D,re,Me){return ne.current.useSyncExternalStore(D,re,Me)},Mt.useTransition=function(){return ne.current.useTransition()},Mt.version="18.3.1",Mt}var sm;function pd(){return sm||(sm=1,Hu.exports=kv()),Hu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function Ov(){if(am)return Va;am=1;var s=pd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,p){var x,y={},g=null,S=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(S=h.ref);for(x in h)r.call(h,x)&&!l.hasOwnProperty(x)&&(y[x]=h[x]);if(d&&d.defaultProps)for(x in h=d.defaultProps,h)y[x]===void 0&&(y[x]=h[x]);return{$$typeof:e,type:d,key:g,ref:S,props:y,_owner:o.current}}return Va.Fragment=n,Va.jsx=u,Va.jsxs=u,Va}var om;function Bv(){return om||(om=1,zu.exports=Ov()),zu.exports}var R=Bv(),at=pd();const zv=gg(at);var hl={},Vu={exports:{}},Wn={},Gu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function Hv(){return lm||(lm=1,(function(s){function e(Z,j){var B=Z.length;Z.push(j);e:for(;0<B;){var D=B-1>>>1,re=Z[D];if(0<o(re,j))Z[D]=j,Z[B]=re,B=D;else break e}}function n(Z){return Z.length===0?null:Z[0]}function r(Z){if(Z.length===0)return null;var j=Z[0],B=Z.pop();if(B!==j){Z[0]=B;e:for(var D=0,re=Z.length,Me=re>>>1;D<Me;){var Ue=2*(D+1)-1,ve=Z[Ue],ye=Ue+1,$=Z[ye];if(0>o(ve,B))ye<re&&0>o($,ve)?(Z[D]=$,Z[ye]=B,D=ye):(Z[D]=ve,Z[Ue]=B,D=Ue);else if(ye<re&&0>o($,B))Z[D]=$,Z[ye]=B,D=ye;else break e}}return j}function o(Z,j){var B=Z.sortIndex-j.sortIndex;return B!==0?B:Z.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],p=[],x=1,y=null,g=3,S=!1,E=!1,T=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(Z){for(var j=n(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=Z)r(p),j.sortIndex=j.expirationTime,e(h,j);else break;j=n(p)}}function C(Z){if(T=!1,k(Z),!E)if(n(h)!==null)E=!0,pe(L);else{var j=n(p);j!==null&&ne(C,j.startTime-Z)}}function L(Z,j){E=!1,T&&(T=!1,v(w),w=-1),S=!0;var B=g;try{for(k(j),y=n(h);y!==null&&(!(y.expirationTime>j)||Z&&!q());){var D=y.callback;if(typeof D=="function"){y.callback=null,g=y.priorityLevel;var re=D(y.expirationTime<=j);j=s.unstable_now(),typeof re=="function"?y.callback=re:y===n(h)&&r(h),k(j)}else r(h);y=n(h)}if(y!==null)var Me=!0;else{var Ue=n(p);Ue!==null&&ne(C,Ue.startTime-j),Me=!1}return Me}finally{y=null,g=B,S=!1}}var P=!1,F=null,w=-1,I=5,V=-1;function q(){return!(s.unstable_now()-V<I)}function J(){if(F!==null){var Z=s.unstable_now();V=Z;var j=!0;try{j=F(!0,Z)}finally{j?Q():(P=!1,F=null)}}else P=!1}var Q;if(typeof N=="function")Q=function(){N(J)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,te=X.port2;X.port1.onmessage=J,Q=function(){te.postMessage(null)}}else Q=function(){_(J,0)};function pe(Z){F=Z,P||(P=!0,Q())}function ne(Z,j){w=_(function(){Z(s.unstable_now())},j)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Z){Z.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,pe(L))},s.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Z?Math.floor(1e3/Z):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(Z){switch(g){case 1:case 2:case 3:var j=3;break;default:j=g}var B=g;g=j;try{return Z()}finally{g=B}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Z,j){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var B=g;g=Z;try{return j()}finally{g=B}},s.unstable_scheduleCallback=function(Z,j,B){var D=s.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?D+B:D):B=D,Z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=B+re,Z={id:x++,callback:j,priorityLevel:Z,startTime:B,expirationTime:re,sortIndex:-1},B>D?(Z.sortIndex=B,e(p,Z),n(h)===null&&Z===n(p)&&(T?(v(w),w=-1):T=!0,ne(C,B-D))):(Z.sortIndex=re,e(h,Z),E||S||(E=!0,pe(L))),Z},s.unstable_shouldYield=q,s.unstable_wrapCallback=function(Z){var j=g;return function(){var B=g;g=j;try{return Z.apply(this,arguments)}finally{g=B}}}})(Wu)),Wu}var cm;function Vv(){return cm||(cm=1,Gu.exports=Hv()),Gu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function Gv(){if(um)return Wn;um=1;var s=pd(),e=Vv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},y={};function g(t){return h.call(y,t)?!0:h.call(x,t)?!1:p.test(t)?y[t]=!0:(x[t]=!0,!1)}function S(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,a,c){if(i===null||typeof i>"u"||S(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,a,c,f,m,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=A}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,N);_[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,N);_[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,N);_[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function k(t,i,a,c){var f=_.hasOwnProperty(i)?_[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,c)&&(a=null),c||f===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),P=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),q=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),Z=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var B=Object.assign,D;function re(t){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+t}var Me=!1;function Ue(t,i){if(!t||Me)return"";Me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(he){var c=he}Reflect.construct(t,[],i)}else{try{i.call()}catch(he){c=he}t.call(i.prototype)}else{try{throw Error()}catch(he){c=he}t()}}catch(he){if(he&&c&&typeof he.stack=="string"){for(var f=he.stack.split(`
`),m=c.stack.split(`
`),A=f.length-1,O=m.length-1;1<=A&&0<=O&&f[A]!==m[O];)O--;for(;1<=A&&0<=O;A--,O--)if(f[A]!==m[O]){if(A!==1||O!==1)do if(A--,O--,0>O||f[A]!==m[O]){var H=`
`+f[A].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=A&&0<=O);break}}}finally{Me=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?re(t):""}function ve(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=Ue(t.type,!1),t;case 11:return t=Ue(t.type.render,!1),t;case 1:return t=Ue(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case P:return"Portal";case I:return"Profiler";case w:return"StrictMode";case Q:return"Suspense";case X:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q:return(t.displayName||"Context")+".Consumer";case V:return(t._context.displayName||"Context")+".Provider";case J:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case te:return i=t.displayName||null,i!==null?i:ye(t.type)||"Memo";case pe:i=t._payload,t=t._init;try{return ye(t(i))}catch{}}return null}function $(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ce(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _e(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ve(t){var i=_e(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(A){c=""+A,m.call(this,A)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ie(t){t._valueTracker||(t._valueTracker=Ve(t))}function it(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=_e(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function Pt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ut(t,i){var a=i.checked;return B({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function dt(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ce(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function rt(t,i){i=i.checked,i!=null&&k(t,"checked",i,!1)}function nt(t,i){rt(t,i);var a=ce(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,a):i.hasOwnProperty("defaultValue")&&wt(t,i.type,ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function vt(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function wt(t,i,a){(i!=="number"||Pt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var st=Array.isArray;function ot(t,i,a,c){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&c&&(t[a].defaultSelected=!0)}else{for(a=""+ce(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Tt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return B({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function G(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(st(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:ce(a)}}function Ht(t,i){var a=ce(i.value),c=ce(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function xt(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function U(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?U(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var K,le=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function me(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(be).forEach(function(t){Ne.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),be[i]=be[t]})});function ge(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||be.hasOwnProperty(t)&&be[t]?(""+i).trim():i+"px"}function se(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=ge(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,f):t[a]=f}}var fe=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Re(t,i){if(i){if(fe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ee(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function He(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $e=null,Xe=null,z=null;function Le(t){if(t=ba(t)){if(typeof $e!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Co(i),$e(t.stateNode,t.type,i))}}function xe(t){Xe?z?z.push(t):z=[t]:Xe=t}function De(){if(Xe){var t=Xe,i=z;if(z=Xe=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function ke(t,i){return t(i)}function Se(){}var Je=!1;function qe(t,i,a){if(Je)return t(i,a);Je=!0;try{return ke(t,i,a)}finally{Je=!1,(Xe!==null||z!==null)&&(Se(),De())}}function Dt(t,i){var a=t.stateNode;if(a===null)return null;var c=Co(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Nt=!1;if(d)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){Nt=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{Nt=!1}function ni(t,i,a,c,f,m,A,O,H){var he=Array.prototype.slice.call(arguments,3);try{i.apply(a,he)}catch(Ae){this.onError(Ae)}}var Dr=!1,cs=null,Ir=!1,Ur=null,cc={onError:function(t){Dr=!0,cs=t}};function co(t,i,a,c,f,m,A,O,H){Dr=!1,cs=null,ni.apply(cc,arguments)}function uo(t,i,a,c,f,m,A,O,H){if(co.apply(this,arguments),Dr){if(Dr){var he=cs;Dr=!1,cs=null}else throw Error(n(198));Ir||(Ir=!0,Ur=he)}}function Dn(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function us(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function aa(t){if(Dn(t)!==t)throw Error(n(188))}function fo(t){var i=t.alternate;if(!i){if(i=Dn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return aa(f),t;if(m===c)return aa(f),i;m=m.sibling}throw Error(n(188))}if(a.return!==c.return)a=f,c=m;else{for(var A=!1,O=f.child;O;){if(O===a){A=!0,a=f,c=m;break}if(O===c){A=!0,c=f,a=m;break}O=O.sibling}if(!A){for(O=m.child;O;){if(O===a){A=!0,a=m,c=f;break}if(O===c){A=!0,c=m,a=f;break}O=O.sibling}if(!A)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Fr(t){return t=fo(t),t!==null?oa(t):null}function oa(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=oa(t);if(i!==null)return i;t=t.sibling}return null}var kr=e.unstable_scheduleCallback,la=e.unstable_cancelCallback,ho=e.unstable_shouldYield,uc=e.unstable_requestPaint,qt=e.unstable_now,fc=e.unstable_getCurrentPriorityLevel,ca=e.unstable_ImmediatePriority,ua=e.unstable_UserBlockingPriority,b=e.unstable_NormalPriority,W=e.unstable_LowPriority,de=e.unstable_IdlePriority,ae=null,ie=null;function Be(t){if(ie&&typeof ie.onCommitFiberRoot=="function")try{ie.onCommitFiberRoot(ae,t,void 0,(t.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:et,Oe=Math.log,Ke=Math.LN2;function et(t){return t>>>=0,t===0?32:31-(Oe(t)/Ke|0)|0}var pt=64,_t=4194304;function je(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function At(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,f=t.suspendedLanes,m=t.pingedLanes,A=a&268435455;if(A!==0){var O=A&~f;O!==0?c=je(O):(m&=A,m!==0&&(c=je(m)))}else A=a&~f,A!==0?c=je(A):m!==0&&(c=je(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-Fe(i),f=1<<a,c|=t[a],i&=~f;return c}function Zt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes;0<m;){var A=31-Fe(m),O=1<<A,H=f[A];H===-1?((O&a)===0||(O&c)!==0)&&(f[A]=Zt(O,i)):H<=i&&(t.expiredLanes|=O),m&=~O}}function kt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ln(){var t=pt;return pt<<=1,(pt&4194240)===0&&(pt=64),t}function Ge(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function tn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Fe(i),t[i]=a}function bt(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-Fe(a),m=1<<f;i[f]=0,c[f]=-1,t[f]=-1,a&=~m}}function Tn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-Fe(a),f=1<<c;f&i|t[c]&i&&(t[c]|=i),a&=~f}}var St=0;function pi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Gi,It,Xt,mi,Ot,ii=!1,gi=[],vi=null,or=null,lr=null,fa=new Map,da=new Map,cr=[],s0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hd(t,i){switch(t){case"focusin":case"focusout":vi=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":fa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(i.pointerId)}}function ha(t,i,a,c,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=ba(i),i!==null&&It(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function a0(t,i,a,c,f){switch(i){case"focusin":return vi=ha(vi,t,i,a,c,f),!0;case"dragenter":return or=ha(or,t,i,a,c,f),!0;case"mouseover":return lr=ha(lr,t,i,a,c,f),!0;case"pointerover":var m=f.pointerId;return fa.set(m,ha(fa.get(m)||null,t,i,a,c,f)),!0;case"gotpointercapture":return m=f.pointerId,da.set(m,ha(da.get(m)||null,t,i,a,c,f)),!0}return!1}function Vd(t){var i=Or(t.target);if(i!==null){var a=Dn(i);if(a!==null){if(i=a.tag,i===13){if(i=us(a),i!==null){t.blockedOn=i,Ot(t.priority,function(){Xt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function po(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=hc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);we=c,a.target.dispatchEvent(c),we=null}else return i=ba(a),i!==null&&It(i),t.blockedOn=a,!1;i.shift()}return!0}function Gd(t,i,a){po(t)&&a.delete(i)}function o0(){ii=!1,vi!==null&&po(vi)&&(vi=null),or!==null&&po(or)&&(or=null),lr!==null&&po(lr)&&(lr=null),fa.forEach(Gd),da.forEach(Gd)}function pa(t,i){t.blockedOn===i&&(t.blockedOn=null,ii||(ii=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,o0)))}function ma(t){function i(f){return pa(f,t)}if(0<gi.length){pa(gi[0],t);for(var a=1;a<gi.length;a++){var c=gi[a];c.blockedOn===t&&(c.blockedOn=null)}}for(vi!==null&&pa(vi,t),or!==null&&pa(or,t),lr!==null&&pa(lr,t),fa.forEach(i),da.forEach(i),a=0;a<cr.length;a++)c=cr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)Vd(a),a.blockedOn===null&&cr.shift()}var fs=C.ReactCurrentBatchConfig,mo=!0;function l0(t,i,a,c){var f=St,m=fs.transition;fs.transition=null;try{St=1,dc(t,i,a,c)}finally{St=f,fs.transition=m}}function c0(t,i,a,c){var f=St,m=fs.transition;fs.transition=null;try{St=4,dc(t,i,a,c)}finally{St=f,fs.transition=m}}function dc(t,i,a,c){if(mo){var f=hc(t,i,a,c);if(f===null)Pc(t,i,c,go,a),Hd(t,c);else if(a0(f,t,i,a,c))c.stopPropagation();else if(Hd(t,c),i&4&&-1<s0.indexOf(t)){for(;f!==null;){var m=ba(f);if(m!==null&&Gi(m),m=hc(t,i,a,c),m===null&&Pc(t,i,c,go,a),m===f)break;f=m}f!==null&&c.stopPropagation()}else Pc(t,i,c,null,a)}}var go=null;function hc(t,i,a,c){if(go=null,t=He(c),t=Or(t),t!==null)if(i=Dn(t),i===null)t=null;else if(a=i.tag,a===13){if(t=us(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return go=t,null}function Wd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fc()){case ca:return 1;case ua:return 4;case b:case W:return 16;case de:return 536870912;default:return 16}default:return 16}}var ur=null,pc=null,vo=null;function Xd(){if(vo)return vo;var t,i=pc,a=i.length,c,f="value"in ur?ur.value:ur.textContent,m=f.length;for(t=0;t<a&&i[t]===f[t];t++);var A=a-t;for(c=1;c<=A&&i[a-c]===f[m-c];c++);return vo=f.slice(t,1<c?1-c:void 0)}function xo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function _o(){return!0}function jd(){return!1}function $n(t){function i(a,c,f,m,A){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=A,this.currentTarget=null;for(var O in t)t.hasOwnProperty(O)&&(a=t[O],this[O]=a?a(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?_o:jd,this.isPropagationStopped=jd,this}return B(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),i}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=$n(ds),ga=B({},ds,{view:0,detail:0}),u0=$n(ga),gc,vc,va,So=B({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(gc=t.screenX-va.screenX,vc=t.screenY-va.screenY):vc=gc=0,va=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:vc}}),Yd=$n(So),f0=B({},So,{dataTransfer:0}),d0=$n(f0),h0=B({},ga,{relatedTarget:0}),xc=$n(h0),p0=B({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),m0=$n(p0),g0=B({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),v0=$n(g0),x0=B({},ds,{data:0}),qd=$n(x0),_0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=y0[t])?!!i[t]:!1}function _c(){return M0}var E0=B({},ga,{key:function(t){if(t.key){var i=_0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?S0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(t){return t.type==="keypress"?xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w0=$n(E0),T0=B({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=$n(T0),A0=B({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),b0=$n(A0),C0=B({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),R0=$n(C0),P0=B({},So,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N0=$n(P0),L0=[9,13,27,32],Sc=d&&"CompositionEvent"in window,xa=null;d&&"documentMode"in document&&(xa=document.documentMode);var D0=d&&"TextEvent"in window&&!xa,Kd=d&&(!Sc||xa&&8<xa&&11>=xa),Zd=" ",Jd=!1;function Qd(t,i){switch(t){case"keyup":return L0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function I0(t,i){switch(t){case"compositionend":return eh(i);case"keypress":return i.which!==32?null:(Jd=!0,Zd);case"textInput":return t=i.data,t===Zd&&Jd?null:t;default:return null}}function U0(t,i){if(hs)return t==="compositionend"||!Sc&&Qd(t,i)?(t=Xd(),vo=pc=ur=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Kd&&i.locale!=="ko"?null:i.data;default:return null}}var F0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function th(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!F0[t.type]:i==="textarea"}function nh(t,i,a,c){xe(c),i=To(i,"onChange"),0<i.length&&(a=new mc("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var _a=null,Sa=null;function k0(t){Sh(t,0)}function yo(t){var i=xs(t);if(it(i))return t}function O0(t,i){if(t==="change")return i}var ih=!1;if(d){var yc;if(d){var Mc="oninput"in document;if(!Mc){var rh=document.createElement("div");rh.setAttribute("oninput","return;"),Mc=typeof rh.oninput=="function"}yc=Mc}else yc=!1;ih=yc&&(!document.documentMode||9<document.documentMode)}function sh(){_a&&(_a.detachEvent("onpropertychange",ah),Sa=_a=null)}function ah(t){if(t.propertyName==="value"&&yo(Sa)){var i=[];nh(i,Sa,t,He(t)),qe(k0,i)}}function B0(t,i,a){t==="focusin"?(sh(),_a=i,Sa=a,_a.attachEvent("onpropertychange",ah)):t==="focusout"&&sh()}function z0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yo(Sa)}function H0(t,i){if(t==="click")return yo(i)}function V0(t,i){if(t==="input"||t==="change")return yo(i)}function G0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var xi=typeof Object.is=="function"?Object.is:G0;function ya(t,i){if(xi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!h.call(i,f)||!xi(t[f],i[f]))return!1}return!0}function oh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lh(t,i){var a=oh(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=oh(a)}}function ch(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?ch(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function uh(){for(var t=window,i=Pt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Pt(t.document)}return i}function Ec(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function W0(t){var i=uh(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&ch(a.ownerDocument.documentElement,a)){if(c!==null&&Ec(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!t.extend&&m>c&&(f=c,c=m,m=f),f=lh(a,m);var A=lh(a,c);f&&A&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==A.node||t.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),m>c?(t.addRange(i),t.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var X0=d&&"documentMode"in document&&11>=document.documentMode,ps=null,wc=null,Ma=null,Tc=!1;function fh(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tc||ps==null||ps!==Pt(c)||(c=ps,"selectionStart"in c&&Ec(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ma&&ya(Ma,c)||(Ma=c,c=To(wc,"onSelect"),0<c.length&&(i=new mc("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=ps)))}function Mo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ms={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},Ac={},dh={};d&&(dh=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Eo(t){if(Ac[t])return Ac[t];if(!ms[t])return t;var i=ms[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in dh)return Ac[t]=i[a];return t}var hh=Eo("animationend"),ph=Eo("animationiteration"),mh=Eo("animationstart"),gh=Eo("transitionend"),vh=new Map,xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,i){vh.set(t,i),l(i,[t])}for(var bc=0;bc<xh.length;bc++){var Cc=xh[bc],j0=Cc.toLowerCase(),Y0=Cc[0].toUpperCase()+Cc.slice(1);fr(j0,"on"+Y0)}fr(hh,"onAnimationEnd"),fr(ph,"onAnimationIteration"),fr(mh,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(gh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function _h(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,uo(c,i,void 0,t),t.currentTarget=null}function Sh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var A=c.length-1;0<=A;A--){var O=c[A],H=O.instance,he=O.currentTarget;if(O=O.listener,H!==m&&f.isPropagationStopped())break e;_h(f,O,he),m=H}else for(A=0;A<c.length;A++){if(O=c[A],H=O.instance,he=O.currentTarget,O=O.listener,H!==m&&f.isPropagationStopped())break e;_h(f,O,he),m=H}}}if(Ir)throw t=Ur,Ir=!1,Ur=null,t}function Gt(t,i){var a=i[Fc];a===void 0&&(a=i[Fc]=new Set);var c=t+"__bubble";a.has(c)||(yh(i,t,2,!1),a.add(c))}function Rc(t,i,a){var c=0;i&&(c|=4),yh(a,t,c,i)}var wo="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[wo]){t[wo]=!0,r.forEach(function(a){a!=="selectionchange"&&(q0.has(a)||Rc(a,!1,t),Rc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[wo]||(i[wo]=!0,Rc("selectionchange",!1,i))}}function yh(t,i,a,c){switch(Wd(i)){case 1:var f=l0;break;case 4:f=c0;break;default:f=dc}a=f.bind(null,i,a,t),f=void 0,!Nt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function Pc(t,i,a,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var O=c.stateNode.containerInfo;if(O===f||O.nodeType===8&&O.parentNode===f)break;if(A===4)for(A=c.return;A!==null;){var H=A.tag;if((H===3||H===4)&&(H=A.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;A=A.return}for(;O!==null;){if(A=Or(O),A===null)return;if(H=A.tag,H===5||H===6){c=m=A;continue e}O=O.parentNode}}c=c.return}qe(function(){var he=m,Ae=He(a),Ce=[];e:{var Te=vh.get(t);if(Te!==void 0){var We=mc,Ze=t;switch(t){case"keypress":if(xo(a)===0)break e;case"keydown":case"keyup":We=w0;break;case"focusin":Ze="focus",We=xc;break;case"focusout":Ze="blur",We=xc;break;case"beforeblur":case"afterblur":We=xc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=b0;break;case hh:case ph:case mh:We=m0;break;case gh:We=R0;break;case"scroll":We=u0;break;case"wheel":We=N0;break;case"copy":case"cut":case"paste":We=v0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=$d}var Qe=(i&4)!==0,nn=!Qe&&t==="scroll",oe=Qe?Te!==null?Te+"Capture":null:Te;Qe=[];for(var Y=he,ue;Y!==null;){ue=Y;var Pe=ue.stateNode;if(ue.tag===5&&Pe!==null&&(ue=Pe,oe!==null&&(Pe=Dt(Y,oe),Pe!=null&&Qe.push(Ta(Y,Pe,ue)))),nn)break;Y=Y.return}0<Qe.length&&(Te=new We(Te,Ze,null,a,Ae),Ce.push({event:Te,listeners:Qe}))}}if((i&7)===0){e:{if(Te=t==="mouseover"||t==="pointerover",We=t==="mouseout"||t==="pointerout",Te&&a!==we&&(Ze=a.relatedTarget||a.fromElement)&&(Or(Ze)||Ze[Wi]))break e;if((We||Te)&&(Te=Ae.window===Ae?Ae:(Te=Ae.ownerDocument)?Te.defaultView||Te.parentWindow:window,We?(Ze=a.relatedTarget||a.toElement,We=he,Ze=Ze?Or(Ze):null,Ze!==null&&(nn=Dn(Ze),Ze!==nn||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(We=null,Ze=he),We!==Ze)){if(Qe=Yd,Pe="onMouseLeave",oe="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(Qe=$d,Pe="onPointerLeave",oe="onPointerEnter",Y="pointer"),nn=We==null?Te:xs(We),ue=Ze==null?Te:xs(Ze),Te=new Qe(Pe,Y+"leave",We,a,Ae),Te.target=nn,Te.relatedTarget=ue,Pe=null,Or(Ae)===he&&(Qe=new Qe(oe,Y+"enter",Ze,a,Ae),Qe.target=ue,Qe.relatedTarget=nn,Pe=Qe),nn=Pe,We&&Ze)t:{for(Qe=We,oe=Ze,Y=0,ue=Qe;ue;ue=gs(ue))Y++;for(ue=0,Pe=oe;Pe;Pe=gs(Pe))ue++;for(;0<Y-ue;)Qe=gs(Qe),Y--;for(;0<ue-Y;)oe=gs(oe),ue--;for(;Y--;){if(Qe===oe||oe!==null&&Qe===oe.alternate)break t;Qe=gs(Qe),oe=gs(oe)}Qe=null}else Qe=null;We!==null&&Mh(Ce,Te,We,Qe,!1),Ze!==null&&nn!==null&&Mh(Ce,nn,Ze,Qe,!0)}}e:{if(Te=he?xs(he):window,We=Te.nodeName&&Te.nodeName.toLowerCase(),We==="select"||We==="input"&&Te.type==="file")var tt=O0;else if(th(Te))if(ih)tt=V0;else{tt=z0;var lt=B0}else(We=Te.nodeName)&&We.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(tt=H0);if(tt&&(tt=tt(t,he))){nh(Ce,tt,a,Ae);break e}lt&&lt(t,Te,he),t==="focusout"&&(lt=Te._wrapperState)&&lt.controlled&&Te.type==="number"&&wt(Te,"number",Te.value)}switch(lt=he?xs(he):window,t){case"focusin":(th(lt)||lt.contentEditable==="true")&&(ps=lt,wc=he,Ma=null);break;case"focusout":Ma=wc=ps=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,fh(Ce,a,Ae);break;case"selectionchange":if(X0)break;case"keydown":case"keyup":fh(Ce,a,Ae)}var ct;if(Sc)e:{switch(t){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else hs?Qd(t,a)&&(ht="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ht="onCompositionStart");ht&&(Kd&&a.locale!=="ko"&&(hs||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&hs&&(ct=Xd()):(ur=Ae,pc="value"in ur?ur.value:ur.textContent,hs=!0)),lt=To(he,ht),0<lt.length&&(ht=new qd(ht,t,null,a,Ae),Ce.push({event:ht,listeners:lt}),ct?ht.data=ct:(ct=eh(a),ct!==null&&(ht.data=ct)))),(ct=D0?I0(t,a):U0(t,a))&&(he=To(he,"onBeforeInput"),0<he.length&&(Ae=new qd("onBeforeInput","beforeinput",null,a,Ae),Ce.push({event:Ae,listeners:he}),Ae.data=ct))}Sh(Ce,i)})}function Ta(t,i,a){return{instance:t,listener:i,currentTarget:a}}function To(t,i){for(var a=i+"Capture",c=[];t!==null;){var f=t,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=Dt(t,a),m!=null&&c.unshift(Ta(t,m,f)),m=Dt(t,i),m!=null&&c.push(Ta(t,m,f))),t=t.return}return c}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mh(t,i,a,c,f){for(var m=i._reactName,A=[];a!==null&&a!==c;){var O=a,H=O.alternate,he=O.stateNode;if(H!==null&&H===c)break;O.tag===5&&he!==null&&(O=he,f?(H=Dt(a,m),H!=null&&A.unshift(Ta(a,H,O))):f||(H=Dt(a,m),H!=null&&A.push(Ta(a,H,O)))),a=a.return}A.length!==0&&t.push({event:i,listeners:A})}var $0=/\r\n?/g,K0=/\u0000|\uFFFD/g;function Eh(t){return(typeof t=="string"?t:""+t).replace($0,`
`).replace(K0,"")}function Ao(t,i,a){if(i=Eh(i),Eh(t)!==i&&a)throw Error(n(425))}function bo(){}var Nc=null,Lc=null;function Dc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,Z0=typeof clearTimeout=="function"?clearTimeout:void 0,wh=typeof Promise=="function"?Promise:void 0,J0=typeof queueMicrotask=="function"?queueMicrotask:typeof wh<"u"?function(t){return wh.resolve(null).then(t).catch(Q0)}:Ic;function Q0(t){setTimeout(function(){throw t})}function Uc(t,i){var a=i,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){t.removeChild(f),ma(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);ma(i)}function dr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Th(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var vs=Math.random().toString(36).slice(2),Pi="__reactFiber$"+vs,Aa="__reactProps$"+vs,Wi="__reactContainer$"+vs,Fc="__reactEvents$"+vs,ev="__reactListeners$"+vs,tv="__reactHandles$"+vs;function Or(t){var i=t[Pi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Wi]||a[Pi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Th(t);t!==null;){if(a=t[Pi])return a;t=Th(t)}return i}t=a,a=t.parentNode}return null}function ba(t){return t=t[Pi]||t[Wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Co(t){return t[Aa]||null}var kc=[],_s=-1;function hr(t){return{current:t}}function Wt(t){0>_s||(t.current=kc[_s],kc[_s]=null,_s--)}function Vt(t,i){_s++,kc[_s]=t.current,t.current=i}var pr={},An=hr(pr),Bn=hr(!1),Br=pr;function Ss(t,i){var a=t.type.contextTypes;if(!a)return pr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function zn(t){return t=t.childContextTypes,t!=null}function Ro(){Wt(Bn),Wt(An)}function Ah(t,i,a){if(An.current!==pr)throw Error(n(168));Vt(An,i),Vt(Bn,a)}function bh(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(n(108,$(t)||"Unknown",f));return B({},a,c)}function Po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Br=An.current,Vt(An,t),Vt(Bn,Bn.current),!0}function Ch(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=bh(t,i,Br),c.__reactInternalMemoizedMergedChildContext=t,Wt(Bn),Wt(An),Vt(An,t)):Wt(Bn),Vt(Bn,a)}var Xi=null,No=!1,Oc=!1;function Rh(t){Xi===null?Xi=[t]:Xi.push(t)}function nv(t){No=!0,Rh(t)}function mr(){if(!Oc&&Xi!==null){Oc=!0;var t=0,i=St;try{var a=Xi;for(St=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Xi=null,No=!1}catch(f){throw Xi!==null&&(Xi=Xi.slice(t+1)),kr(ca,mr),f}finally{St=i,Oc=!1}}return null}var ys=[],Ms=0,Lo=null,Do=0,ri=[],si=0,zr=null,ji=1,Yi="";function Hr(t,i){ys[Ms++]=Do,ys[Ms++]=Lo,Lo=t,Do=i}function Ph(t,i,a){ri[si++]=ji,ri[si++]=Yi,ri[si++]=zr,zr=t;var c=ji;t=Yi;var f=32-Fe(c)-1;c&=~(1<<f),a+=1;var m=32-Fe(i)+f;if(30<m){var A=f-f%5;m=(c&(1<<A)-1).toString(32),c>>=A,f-=A,ji=1<<32-Fe(i)+f|a<<f|c,Yi=m+t}else ji=1<<m|a<<f|c,Yi=t}function Bc(t){t.return!==null&&(Hr(t,1),Ph(t,1,0))}function zc(t){for(;t===Lo;)Lo=ys[--Ms],ys[Ms]=null,Do=ys[--Ms],ys[Ms]=null;for(;t===zr;)zr=ri[--si],ri[si]=null,Yi=ri[--si],ri[si]=null,ji=ri[--si],ri[si]=null}var Kn=null,Zn=null,jt=!1,_i=null;function Nh(t,i){var a=ci(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Lh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Kn=t,Zn=dr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Kn=t,Zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=zr!==null?{id:ji,overflow:Yi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ci(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Kn=t,Zn=null,!0):!1;default:return!1}}function Hc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vc(t){if(jt){var i=Zn;if(i){var a=i;if(!Lh(t,i)){if(Hc(t))throw Error(n(418));i=dr(a.nextSibling);var c=Kn;i&&Lh(t,i)?Nh(c,a):(t.flags=t.flags&-4097|2,jt=!1,Kn=t)}}else{if(Hc(t))throw Error(n(418));t.flags=t.flags&-4097|2,jt=!1,Kn=t}}}function Dh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kn=t}function Io(t){if(t!==Kn)return!1;if(!jt)return Dh(t),jt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Dc(t.type,t.memoizedProps)),i&&(i=Zn)){if(Hc(t))throw Ih(),Error(n(418));for(;i;)Nh(t,i),i=dr(i.nextSibling)}if(Dh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Zn=dr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Zn=null}}else Zn=Kn?dr(t.stateNode.nextSibling):null;return!0}function Ih(){for(var t=Zn;t;)t=dr(t.nextSibling)}function Es(){Zn=Kn=null,jt=!1}function Gc(t){_i===null?_i=[t]:_i.push(t)}var iv=C.ReactCurrentBatchConfig;function Ca(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var f=c,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(A){var O=f.refs;A===null?delete O[m]:O[m]=A},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Uo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Uh(t){var i=t._init;return i(t._payload)}function Fh(t){function i(oe,Y){if(t){var ue=oe.deletions;ue===null?(oe.deletions=[Y],oe.flags|=16):ue.push(Y)}}function a(oe,Y){if(!t)return null;for(;Y!==null;)i(oe,Y),Y=Y.sibling;return null}function c(oe,Y){for(oe=new Map;Y!==null;)Y.key!==null?oe.set(Y.key,Y):oe.set(Y.index,Y),Y=Y.sibling;return oe}function f(oe,Y){return oe=Er(oe,Y),oe.index=0,oe.sibling=null,oe}function m(oe,Y,ue){return oe.index=ue,t?(ue=oe.alternate,ue!==null?(ue=ue.index,ue<Y?(oe.flags|=2,Y):ue):(oe.flags|=2,Y)):(oe.flags|=1048576,Y)}function A(oe){return t&&oe.alternate===null&&(oe.flags|=2),oe}function O(oe,Y,ue,Pe){return Y===null||Y.tag!==6?(Y=Iu(ue,oe.mode,Pe),Y.return=oe,Y):(Y=f(Y,ue),Y.return=oe,Y)}function H(oe,Y,ue,Pe){var tt=ue.type;return tt===F?Ae(oe,Y,ue.props.children,Pe,ue.key):Y!==null&&(Y.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===pe&&Uh(tt)===Y.type)?(Pe=f(Y,ue.props),Pe.ref=Ca(oe,Y,ue),Pe.return=oe,Pe):(Pe=sl(ue.type,ue.key,ue.props,null,oe.mode,Pe),Pe.ref=Ca(oe,Y,ue),Pe.return=oe,Pe)}function he(oe,Y,ue,Pe){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ue.containerInfo||Y.stateNode.implementation!==ue.implementation?(Y=Uu(ue,oe.mode,Pe),Y.return=oe,Y):(Y=f(Y,ue.children||[]),Y.return=oe,Y)}function Ae(oe,Y,ue,Pe,tt){return Y===null||Y.tag!==7?(Y=$r(ue,oe.mode,Pe,tt),Y.return=oe,Y):(Y=f(Y,ue),Y.return=oe,Y)}function Ce(oe,Y,ue){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=Iu(""+Y,oe.mode,ue),Y.return=oe,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case L:return ue=sl(Y.type,Y.key,Y.props,null,oe.mode,ue),ue.ref=Ca(oe,null,Y),ue.return=oe,ue;case P:return Y=Uu(Y,oe.mode,ue),Y.return=oe,Y;case pe:var Pe=Y._init;return Ce(oe,Pe(Y._payload),ue)}if(st(Y)||j(Y))return Y=$r(Y,oe.mode,ue,null),Y.return=oe,Y;Uo(oe,Y)}return null}function Te(oe,Y,ue,Pe){var tt=Y!==null?Y.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return tt!==null?null:O(oe,Y,""+ue,Pe);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case L:return ue.key===tt?H(oe,Y,ue,Pe):null;case P:return ue.key===tt?he(oe,Y,ue,Pe):null;case pe:return tt=ue._init,Te(oe,Y,tt(ue._payload),Pe)}if(st(ue)||j(ue))return tt!==null?null:Ae(oe,Y,ue,Pe,null);Uo(oe,ue)}return null}function We(oe,Y,ue,Pe,tt){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return oe=oe.get(ue)||null,O(Y,oe,""+Pe,tt);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case L:return oe=oe.get(Pe.key===null?ue:Pe.key)||null,H(Y,oe,Pe,tt);case P:return oe=oe.get(Pe.key===null?ue:Pe.key)||null,he(Y,oe,Pe,tt);case pe:var lt=Pe._init;return We(oe,Y,ue,lt(Pe._payload),tt)}if(st(Pe)||j(Pe))return oe=oe.get(ue)||null,Ae(Y,oe,Pe,tt,null);Uo(Y,Pe)}return null}function Ze(oe,Y,ue,Pe){for(var tt=null,lt=null,ct=Y,ht=Y=0,mn=null;ct!==null&&ht<ue.length;ht++){ct.index>ht?(mn=ct,ct=null):mn=ct.sibling;var Ut=Te(oe,ct,ue[ht],Pe);if(Ut===null){ct===null&&(ct=mn);break}t&&ct&&Ut.alternate===null&&i(oe,ct),Y=m(Ut,Y,ht),lt===null?tt=Ut:lt.sibling=Ut,lt=Ut,ct=mn}if(ht===ue.length)return a(oe,ct),jt&&Hr(oe,ht),tt;if(ct===null){for(;ht<ue.length;ht++)ct=Ce(oe,ue[ht],Pe),ct!==null&&(Y=m(ct,Y,ht),lt===null?tt=ct:lt.sibling=ct,lt=ct);return jt&&Hr(oe,ht),tt}for(ct=c(oe,ct);ht<ue.length;ht++)mn=We(ct,oe,ht,ue[ht],Pe),mn!==null&&(t&&mn.alternate!==null&&ct.delete(mn.key===null?ht:mn.key),Y=m(mn,Y,ht),lt===null?tt=mn:lt.sibling=mn,lt=mn);return t&&ct.forEach(function(wr){return i(oe,wr)}),jt&&Hr(oe,ht),tt}function Qe(oe,Y,ue,Pe){var tt=j(ue);if(typeof tt!="function")throw Error(n(150));if(ue=tt.call(ue),ue==null)throw Error(n(151));for(var lt=tt=null,ct=Y,ht=Y=0,mn=null,Ut=ue.next();ct!==null&&!Ut.done;ht++,Ut=ue.next()){ct.index>ht?(mn=ct,ct=null):mn=ct.sibling;var wr=Te(oe,ct,Ut.value,Pe);if(wr===null){ct===null&&(ct=mn);break}t&&ct&&wr.alternate===null&&i(oe,ct),Y=m(wr,Y,ht),lt===null?tt=wr:lt.sibling=wr,lt=wr,ct=mn}if(Ut.done)return a(oe,ct),jt&&Hr(oe,ht),tt;if(ct===null){for(;!Ut.done;ht++,Ut=ue.next())Ut=Ce(oe,Ut.value,Pe),Ut!==null&&(Y=m(Ut,Y,ht),lt===null?tt=Ut:lt.sibling=Ut,lt=Ut);return jt&&Hr(oe,ht),tt}for(ct=c(oe,ct);!Ut.done;ht++,Ut=ue.next())Ut=We(ct,oe,ht,Ut.value,Pe),Ut!==null&&(t&&Ut.alternate!==null&&ct.delete(Ut.key===null?ht:Ut.key),Y=m(Ut,Y,ht),lt===null?tt=Ut:lt.sibling=Ut,lt=Ut);return t&&ct.forEach(function(Fv){return i(oe,Fv)}),jt&&Hr(oe,ht),tt}function nn(oe,Y,ue,Pe){if(typeof ue=="object"&&ue!==null&&ue.type===F&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case L:e:{for(var tt=ue.key,lt=Y;lt!==null;){if(lt.key===tt){if(tt=ue.type,tt===F){if(lt.tag===7){a(oe,lt.sibling),Y=f(lt,ue.props.children),Y.return=oe,oe=Y;break e}}else if(lt.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===pe&&Uh(tt)===lt.type){a(oe,lt.sibling),Y=f(lt,ue.props),Y.ref=Ca(oe,lt,ue),Y.return=oe,oe=Y;break e}a(oe,lt);break}else i(oe,lt);lt=lt.sibling}ue.type===F?(Y=$r(ue.props.children,oe.mode,Pe,ue.key),Y.return=oe,oe=Y):(Pe=sl(ue.type,ue.key,ue.props,null,oe.mode,Pe),Pe.ref=Ca(oe,Y,ue),Pe.return=oe,oe=Pe)}return A(oe);case P:e:{for(lt=ue.key;Y!==null;){if(Y.key===lt)if(Y.tag===4&&Y.stateNode.containerInfo===ue.containerInfo&&Y.stateNode.implementation===ue.implementation){a(oe,Y.sibling),Y=f(Y,ue.children||[]),Y.return=oe,oe=Y;break e}else{a(oe,Y);break}else i(oe,Y);Y=Y.sibling}Y=Uu(ue,oe.mode,Pe),Y.return=oe,oe=Y}return A(oe);case pe:return lt=ue._init,nn(oe,Y,lt(ue._payload),Pe)}if(st(ue))return Ze(oe,Y,ue,Pe);if(j(ue))return Qe(oe,Y,ue,Pe);Uo(oe,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,Y!==null&&Y.tag===6?(a(oe,Y.sibling),Y=f(Y,ue),Y.return=oe,oe=Y):(a(oe,Y),Y=Iu(ue,oe.mode,Pe),Y.return=oe,oe=Y),A(oe)):a(oe,Y)}return nn}var ws=Fh(!0),kh=Fh(!1),Fo=hr(null),ko=null,Ts=null,Wc=null;function Xc(){Wc=Ts=ko=null}function jc(t){var i=Fo.current;Wt(Fo),t._currentValue=i}function Yc(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function As(t,i){ko=t,Wc=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Hn=!0),t.firstContext=null)}function ai(t){var i=t._currentValue;if(Wc!==t)if(t={context:t,memoizedValue:i,next:null},Ts===null){if(ko===null)throw Error(n(308));Ts=t,ko.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return i}var Vr=null;function qc(t){Vr===null?Vr=[t]:Vr.push(t)}function Oh(t,i,a,c){var f=i.interleaved;return f===null?(a.next=a,qc(i)):(a.next=f.next,f.next=a),i.interleaved=a,qi(t,c)}function qi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var gr=!1;function $c(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $i(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function vr(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Lt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,qi(t,a)}return f=c.interleaved,f===null?(i.next=i,qc(c)):(i.next=f.next,f.next=i),c.interleaved=i,qi(t,a)}function Oo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Tn(t,a)}}function zh(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var A={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=A:m=m.next=A,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Bo(t,i,a,c){var f=t.updateQueue;gr=!1;var m=f.firstBaseUpdate,A=f.lastBaseUpdate,O=f.shared.pending;if(O!==null){f.shared.pending=null;var H=O,he=H.next;H.next=null,A===null?m=he:A.next=he,A=H;var Ae=t.alternate;Ae!==null&&(Ae=Ae.updateQueue,O=Ae.lastBaseUpdate,O!==A&&(O===null?Ae.firstBaseUpdate=he:O.next=he,Ae.lastBaseUpdate=H))}if(m!==null){var Ce=f.baseState;A=0,Ae=he=H=null,O=m;do{var Te=O.lane,We=O.eventTime;if((c&Te)===Te){Ae!==null&&(Ae=Ae.next={eventTime:We,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Ze=t,Qe=O;switch(Te=i,We=a,Qe.tag){case 1:if(Ze=Qe.payload,typeof Ze=="function"){Ce=Ze.call(We,Ce,Te);break e}Ce=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=Qe.payload,Te=typeof Ze=="function"?Ze.call(We,Ce,Te):Ze,Te==null)break e;Ce=B({},Ce,Te);break e;case 2:gr=!0}}O.callback!==null&&O.lane!==0&&(t.flags|=64,Te=f.effects,Te===null?f.effects=[O]:Te.push(O))}else We={eventTime:We,lane:Te,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Ae===null?(he=Ae=We,H=Ce):Ae=Ae.next=We,A|=Te;if(O=O.next,O===null){if(O=f.shared.pending,O===null)break;Te=O,O=Te.next,Te.next=null,f.lastBaseUpdate=Te,f.shared.pending=null}}while(!0);if(Ae===null&&(H=Ce),f.baseState=H,f.firstBaseUpdate=he,f.lastBaseUpdate=Ae,i=f.shared.interleaved,i!==null){f=i;do A|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Xr|=A,t.lanes=A,t.memoizedState=Ce}}function Hh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(n(191,f));f.call(c)}}}var Ra={},Ni=hr(Ra),Pa=hr(Ra),Na=hr(Ra);function Gr(t){if(t===Ra)throw Error(n(174));return t}function Kc(t,i){switch(Vt(Na,i),Vt(Pa,t),Vt(Ni,Ra),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=M(i,t)}Wt(Ni),Vt(Ni,i)}function bs(){Wt(Ni),Wt(Pa),Wt(Na)}function Vh(t){Gr(Na.current);var i=Gr(Ni.current),a=M(i,t.type);i!==a&&(Vt(Pa,t),Vt(Ni,a))}function Zc(t){Pa.current===t&&(Wt(Ni),Wt(Pa))}var $t=hr(0);function zo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Jc=[];function Qc(){for(var t=0;t<Jc.length;t++)Jc[t]._workInProgressVersionPrimary=null;Jc.length=0}var Ho=C.ReactCurrentDispatcher,eu=C.ReactCurrentBatchConfig,Wr=0,Kt=null,cn=null,hn=null,Vo=!1,La=!1,Da=0,rv=0;function bn(){throw Error(n(321))}function tu(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!xi(t[a],i[a]))return!1;return!0}function nu(t,i,a,c,f,m){if(Wr=m,Kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ho.current=t===null||t.memoizedState===null?lv:cv,t=a(c,f),La){m=0;do{if(La=!1,Da=0,25<=m)throw Error(n(301));m+=1,hn=cn=null,i.updateQueue=null,Ho.current=uv,t=a(c,f)}while(La)}if(Ho.current=Xo,i=cn!==null&&cn.next!==null,Wr=0,hn=cn=Kt=null,Vo=!1,i)throw Error(n(300));return t}function iu(){var t=Da!==0;return Da=0,t}function Li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Kt.memoizedState=hn=t:hn=hn.next=t,hn}function oi(){if(cn===null){var t=Kt.alternate;t=t!==null?t.memoizedState:null}else t=cn.next;var i=hn===null?Kt.memoizedState:hn.next;if(i!==null)hn=i,cn=t;else{if(t===null)throw Error(n(310));cn=t,t={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},hn===null?Kt.memoizedState=hn=t:hn=hn.next=t}return hn}function Ia(t,i){return typeof i=="function"?i(t):i}function ru(t){var i=oi(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=cn,f=c.baseQueue,m=a.pending;if(m!==null){if(f!==null){var A=f.next;f.next=m.next,m.next=A}c.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,c=c.baseState;var O=A=null,H=null,he=m;do{var Ae=he.lane;if((Wr&Ae)===Ae)H!==null&&(H=H.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),c=he.hasEagerState?he.eagerState:t(c,he.action);else{var Ce={lane:Ae,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};H===null?(O=H=Ce,A=c):H=H.next=Ce,Kt.lanes|=Ae,Xr|=Ae}he=he.next}while(he!==null&&he!==m);H===null?A=c:H.next=O,xi(c,i.memoizedState)||(Hn=!0),i.memoizedState=c,i.baseState=A,i.baseQueue=H,a.lastRenderedState=c}if(t=a.interleaved,t!==null){f=t;do m=f.lane,Kt.lanes|=m,Xr|=m,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function su(t){var i=oi(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var A=f=f.next;do m=t(m,A.action),A=A.next;while(A!==f);xi(m,i.memoizedState)||(Hn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Gh(){}function Wh(t,i){var a=Kt,c=oi(),f=i(),m=!xi(c.memoizedState,f);if(m&&(c.memoizedState=f,Hn=!0),c=c.queue,au(Yh.bind(null,a,c,t),[t]),c.getSnapshot!==i||m||hn!==null&&hn.memoizedState.tag&1){if(a.flags|=2048,Ua(9,jh.bind(null,a,c,f,i),void 0,null),pn===null)throw Error(n(349));(Wr&30)!==0||Xh(a,i,f)}return f}function Xh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function jh(t,i,a,c){i.value=a,i.getSnapshot=c,qh(i)&&$h(t)}function Yh(t,i,a){return a(function(){qh(i)&&$h(t)})}function qh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!xi(t,a)}catch{return!0}}function $h(t){var i=qi(t,1);i!==null&&Ei(i,t,1,-1)}function Kh(t){var i=Li();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},i.queue=t,t=t.dispatch=ov.bind(null,Kt,t),[i.memoizedState,t]}function Ua(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function Zh(){return oi().memoizedState}function Go(t,i,a,c){var f=Li();Kt.flags|=t,f.memoizedState=Ua(1|i,a,void 0,c===void 0?null:c)}function Wo(t,i,a,c){var f=oi();c=c===void 0?null:c;var m=void 0;if(cn!==null){var A=cn.memoizedState;if(m=A.destroy,c!==null&&tu(c,A.deps)){f.memoizedState=Ua(i,a,m,c);return}}Kt.flags|=t,f.memoizedState=Ua(1|i,a,m,c)}function Jh(t,i){return Go(8390656,8,t,i)}function au(t,i){return Wo(2048,8,t,i)}function Qh(t,i){return Wo(4,2,t,i)}function ep(t,i){return Wo(4,4,t,i)}function tp(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function np(t,i,a){return a=a!=null?a.concat([t]):null,Wo(4,4,tp.bind(null,i,t),a)}function ou(){}function ip(t,i){var a=oi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&tu(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function rp(t,i){var a=oi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&tu(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function sp(t,i,a){return(Wr&21)===0?(t.baseState&&(t.baseState=!1,Hn=!0),t.memoizedState=a):(xi(a,i)||(a=ln(),Kt.lanes|=a,Xr|=a,t.baseState=!0),i)}function sv(t,i){var a=St;St=a!==0&&4>a?a:4,t(!0);var c=eu.transition;eu.transition={};try{t(!1),i()}finally{St=a,eu.transition=c}}function ap(){return oi().memoizedState}function av(t,i,a){var c=yr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},op(t))lp(i,a);else if(a=Oh(t,i,a,c),a!==null){var f=Un();Ei(a,t,c,f),cp(a,i,c)}}function ov(t,i,a){var c=yr(t),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(op(t))lp(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var A=i.lastRenderedState,O=m(A,a);if(f.hasEagerState=!0,f.eagerState=O,xi(O,A)){var H=i.interleaved;H===null?(f.next=f,qc(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}a=Oh(t,i,f,c),a!==null&&(f=Un(),Ei(a,t,c,f),cp(a,i,c))}}function op(t){var i=t.alternate;return t===Kt||i!==null&&i===Kt}function lp(t,i){La=Vo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function cp(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Tn(t,a)}}var Xo={readContext:ai,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},lv={readContext:ai,useCallback:function(t,i){return Li().memoizedState=[t,i===void 0?null:i],t},useContext:ai,useEffect:Jh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Go(4194308,4,tp.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Go(4194308,4,t,i)},useInsertionEffect:function(t,i){return Go(4,2,t,i)},useMemo:function(t,i){var a=Li();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=Li();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=av.bind(null,Kt,t),[c.memoizedState,t]},useRef:function(t){var i=Li();return t={current:t},i.memoizedState=t},useState:Kh,useDebugValue:ou,useDeferredValue:function(t){return Li().memoizedState=t},useTransition:function(){var t=Kh(!1),i=t[0];return t=sv.bind(null,t[1]),Li().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=Kt,f=Li();if(jt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),pn===null)throw Error(n(349));(Wr&30)!==0||Xh(c,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,Jh(Yh.bind(null,c,m,t),[t]),c.flags|=2048,Ua(9,jh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var t=Li(),i=pn.identifierPrefix;if(jt){var a=Yi,c=ji;a=(c&~(1<<32-Fe(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Da++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=rv++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},cv={readContext:ai,useCallback:ip,useContext:ai,useEffect:au,useImperativeHandle:np,useInsertionEffect:Qh,useLayoutEffect:ep,useMemo:rp,useReducer:ru,useRef:Zh,useState:function(){return ru(Ia)},useDebugValue:ou,useDeferredValue:function(t){var i=oi();return sp(i,cn.memoizedState,t)},useTransition:function(){var t=ru(Ia)[0],i=oi().memoizedState;return[t,i]},useMutableSource:Gh,useSyncExternalStore:Wh,useId:ap,unstable_isNewReconciler:!1},uv={readContext:ai,useCallback:ip,useContext:ai,useEffect:au,useImperativeHandle:np,useInsertionEffect:Qh,useLayoutEffect:ep,useMemo:rp,useReducer:su,useRef:Zh,useState:function(){return su(Ia)},useDebugValue:ou,useDeferredValue:function(t){var i=oi();return cn===null?i.memoizedState=t:sp(i,cn.memoizedState,t)},useTransition:function(){var t=su(Ia)[0],i=oi().memoizedState;return[t,i]},useMutableSource:Gh,useSyncExternalStore:Wh,useId:ap,unstable_isNewReconciler:!1};function Si(t,i){if(t&&t.defaultProps){i=B({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function lu(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:B({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var jo={isMounted:function(t){return(t=t._reactInternals)?Dn(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=Un(),f=yr(t),m=$i(c,f);m.payload=i,a!=null&&(m.callback=a),i=vr(t,m,f),i!==null&&(Ei(i,t,f,c),Oo(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=Un(),f=yr(t),m=$i(c,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=vr(t,m,f),i!==null&&(Ei(i,t,f,c),Oo(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Un(),c=yr(t),f=$i(a,c);f.tag=2,i!=null&&(f.callback=i),i=vr(t,f,c),i!==null&&(Ei(i,t,c,a),Oo(i,t,c))}};function up(t,i,a,c,f,m,A){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,A):i.prototype&&i.prototype.isPureReactComponent?!ya(a,c)||!ya(f,m):!0}function fp(t,i,a){var c=!1,f=pr,m=i.contextType;return typeof m=="object"&&m!==null?m=ai(m):(f=zn(i)?Br:An.current,c=i.contextTypes,m=(c=c!=null)?Ss(t,f):pr),i=new i(a,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=jo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=m),i}function dp(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&jo.enqueueReplaceState(i,i.state,null)}function cu(t,i,a,c){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},$c(t);var m=i.contextType;typeof m=="object"&&m!==null?f.context=ai(m):(m=zn(i)?Br:An.current,f.context=Ss(t,m)),f.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(lu(t,i,m,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&jo.enqueueReplaceState(f,f.state,null),Bo(t,a,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,i){try{var a="",c=i;do a+=ve(c),c=c.return;while(c);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:f,digest:null}}function uu(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function fu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var fv=typeof WeakMap=="function"?WeakMap:Map;function hp(t,i,a){a=$i(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Qo||(Qo=!0,Au=c),fu(t,i)},a}function pp(t,i,a){a=$i(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){fu(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){fu(t,i),typeof c!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),a}function mp(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new fv;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),t=Tv.bind(null,t,i,a),i.then(t,t))}function gp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function vp(t,i,a,c,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=$i(-1,1),i.tag=2,vr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var dv=C.ReactCurrentOwner,Hn=!1;function In(t,i,a,c){i.child=t===null?kh(i,null,a,c):ws(i,t.child,a,c)}function xp(t,i,a,c,f){a=a.render;var m=i.ref;return As(i,f),c=nu(t,i,a,c,m,f),a=iu(),t!==null&&!Hn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ki(t,i,f)):(jt&&a&&Bc(i),i.flags|=1,In(t,i,c,f),i.child)}function _p(t,i,a,c,f){if(t===null){var m=a.type;return typeof m=="function"&&!Du(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Sp(t,i,m,c,f)):(t=sl(a.type,null,c,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&f)===0){var A=m.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(A,c)&&t.ref===i.ref)return Ki(t,i,f)}return i.flags|=1,t=Er(m,c),t.ref=i.ref,t.return=i,i.child=t}function Sp(t,i,a,c,f){if(t!==null){var m=t.memoizedProps;if(ya(m,c)&&t.ref===i.ref)if(Hn=!1,i.pendingProps=c=m,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Hn=!0);else return i.lanes=t.lanes,Ki(t,i,f)}return du(t,i,a,c,f)}function yp(t,i,a){var c=i.pendingProps,f=c.children,m=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Ps,Jn),Jn|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Vt(Ps,Jn),Jn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Vt(Ps,Jn),Jn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Vt(Ps,Jn),Jn|=c;return In(t,i,f,a),i.child}function Mp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function du(t,i,a,c,f){var m=zn(a)?Br:An.current;return m=Ss(i,m),As(i,f),a=nu(t,i,a,c,m,f),c=iu(),t!==null&&!Hn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ki(t,i,f)):(jt&&c&&Bc(i),i.flags|=1,In(t,i,a,f),i.child)}function Ep(t,i,a,c,f){if(zn(a)){var m=!0;Po(i)}else m=!1;if(As(i,f),i.stateNode===null)qo(t,i),fp(i,a,c),cu(i,a,c,f),c=!0;else if(t===null){var A=i.stateNode,O=i.memoizedProps;A.props=O;var H=A.context,he=a.contextType;typeof he=="object"&&he!==null?he=ai(he):(he=zn(a)?Br:An.current,he=Ss(i,he));var Ae=a.getDerivedStateFromProps,Ce=typeof Ae=="function"||typeof A.getSnapshotBeforeUpdate=="function";Ce||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==c||H!==he)&&dp(i,A,c,he),gr=!1;var Te=i.memoizedState;A.state=Te,Bo(i,c,A,f),H=i.memoizedState,O!==c||Te!==H||Bn.current||gr?(typeof Ae=="function"&&(lu(i,a,Ae,c),H=i.memoizedState),(O=gr||up(i,a,O,c,Te,H,he))?(Ce||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),A.props=c,A.state=H,A.context=he,c=O):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{A=i.stateNode,Bh(t,i),O=i.memoizedProps,he=i.type===i.elementType?O:Si(i.type,O),A.props=he,Ce=i.pendingProps,Te=A.context,H=a.contextType,typeof H=="object"&&H!==null?H=ai(H):(H=zn(a)?Br:An.current,H=Ss(i,H));var We=a.getDerivedStateFromProps;(Ae=typeof We=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==Ce||Te!==H)&&dp(i,A,c,H),gr=!1,Te=i.memoizedState,A.state=Te,Bo(i,c,A,f);var Ze=i.memoizedState;O!==Ce||Te!==Ze||Bn.current||gr?(typeof We=="function"&&(lu(i,a,We,c),Ze=i.memoizedState),(he=gr||up(i,a,he,c,Te,Ze,H)||!1)?(Ae||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,Ze,H),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,Ze,H)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||O===t.memoizedProps&&Te===t.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&Te===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ze),A.props=c,A.state=Ze,A.context=H,c=he):(typeof A.componentDidUpdate!="function"||O===t.memoizedProps&&Te===t.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&Te===t.memoizedState||(i.flags|=1024),c=!1)}return hu(t,i,a,c,m,f)}function hu(t,i,a,c,f,m){Mp(t,i);var A=(i.flags&128)!==0;if(!c&&!A)return f&&Ch(i,a,!1),Ki(t,i,m);c=i.stateNode,dv.current=i;var O=A&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&A?(i.child=ws(i,t.child,null,m),i.child=ws(i,null,O,m)):In(t,i,O,m),i.memoizedState=c.state,f&&Ch(i,a,!0),i.child}function wp(t){var i=t.stateNode;i.pendingContext?Ah(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Ah(t,i.context,!1),Kc(t,i.containerInfo)}function Tp(t,i,a,c,f){return Es(),Gc(f),i.flags|=256,In(t,i,a,c),i.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ap(t,i,a){var c=i.pendingProps,f=$t.current,m=!1,A=(i.flags&128)!==0,O;if((O=A)||(O=t!==null&&t.memoizedState===null?!1:(f&2)!==0),O?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Vt($t,f&1),t===null)return Vc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=c.children,t=c.fallback,m?(c=i.mode,m=i.child,A={mode:"hidden",children:A},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=A):m=al(A,c,0,null),t=$r(t,c,a,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=mu(a),i.memoizedState=pu,t):gu(i,A));if(f=t.memoizedState,f!==null&&(O=f.dehydrated,O!==null))return hv(t,i,A,c,O,f,a);if(m){m=c.fallback,A=i.mode,f=t.child,O=f.sibling;var H={mode:"hidden",children:c.children};return(A&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=Er(f,H),c.subtreeFlags=f.subtreeFlags&14680064),O!==null?m=Er(O,m):(m=$r(m,A,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,A=t.child.memoizedState,A=A===null?mu(a):{baseLanes:A.baseLanes|a,cachePool:null,transitions:A.transitions},m.memoizedState=A,m.childLanes=t.childLanes&~a,i.memoizedState=pu,c}return m=t.child,t=m.sibling,c=Er(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function gu(t,i){return i=al({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Yo(t,i,a,c){return c!==null&&Gc(c),ws(i,t.child,null,a),t=gu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function hv(t,i,a,c,f,m,A){if(a)return i.flags&256?(i.flags&=-257,c=uu(Error(n(422))),Yo(t,i,A,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=al({mode:"visible",children:c.children},f,0,null),m=$r(m,f,A,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&ws(i,t.child,null,A),i.child.memoizedState=mu(A),i.memoizedState=pu,m);if((i.mode&1)===0)return Yo(t,i,A,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var O=c.dgst;return c=O,m=Error(n(419)),c=uu(m,c,void 0),Yo(t,i,A,c)}if(O=(A&t.childLanes)!==0,Hn||O){if(c=pn,c!==null){switch(A&-A){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|A))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,qi(t,f),Ei(c,t,f,-1))}return Lu(),c=uu(Error(n(421))),Yo(t,i,A,c)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=Av.bind(null,t),f._reactRetry=i,null):(t=m.treeContext,Zn=dr(f.nextSibling),Kn=i,jt=!0,_i=null,t!==null&&(ri[si++]=ji,ri[si++]=Yi,ri[si++]=zr,ji=t.id,Yi=t.overflow,zr=i),i=gu(i,c.children),i.flags|=4096,i)}function bp(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Yc(t.return,i,a)}function vu(t,i,a,c,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=f)}function Cp(t,i,a){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(In(t,i,c.children,a),c=$t.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bp(t,a,i);else if(t.tag===19)bp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Vt($t,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&zo(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),vu(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&zo(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}vu(i,!0,a,null,m);break;case"together":vu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ki(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Xr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Er(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Er(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function pv(t,i,a){switch(i.tag){case 3:wp(i),Es();break;case 5:Vh(i);break;case 1:zn(i.type)&&Po(i);break;case 4:Kc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Vt(Fo,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Vt($t,$t.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Ap(t,i,a):(Vt($t,$t.current&1),t=Ki(t,i,a),t!==null?t.sibling:null);Vt($t,$t.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return Cp(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Vt($t,$t.current),c)break;return null;case 22:case 23:return i.lanes=0,yp(t,i,a)}return Ki(t,i,a)}var Rp,xu,Pp,Np;Rp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},xu=function(){},Pp=function(t,i,a,c){var f=t.memoizedProps;if(f!==c){t=i.stateNode,Gr(Ni.current);var m=null;switch(a){case"input":f=ut(t,f),c=ut(t,c),m=[];break;case"select":f=B({},f,{value:void 0}),c=B({},c,{value:void 0}),m=[];break;case"textarea":f=Tt(t,f),c=Tt(t,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=bo)}Re(a,c);var A;a=null;for(he in f)if(!c.hasOwnProperty(he)&&f.hasOwnProperty(he)&&f[he]!=null)if(he==="style"){var O=f[he];for(A in O)O.hasOwnProperty(A)&&(a||(a={}),a[A]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(o.hasOwnProperty(he)?m||(m=[]):(m=m||[]).push(he,null));for(he in c){var H=c[he];if(O=f!=null?f[he]:void 0,c.hasOwnProperty(he)&&H!==O&&(H!=null||O!=null))if(he==="style")if(O){for(A in O)!O.hasOwnProperty(A)||H&&H.hasOwnProperty(A)||(a||(a={}),a[A]="");for(A in H)H.hasOwnProperty(A)&&O[A]!==H[A]&&(a||(a={}),a[A]=H[A])}else a||(m||(m=[]),m.push(he,a)),a=H;else he==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,O=O?O.__html:void 0,H!=null&&O!==H&&(m=m||[]).push(he,H)):he==="children"?typeof H!="string"&&typeof H!="number"||(m=m||[]).push(he,""+H):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(o.hasOwnProperty(he)?(H!=null&&he==="onScroll"&&Gt("scroll",t),m||O===H||(m=[])):(m=m||[]).push(he,H))}a&&(m=m||[]).push("style",a);var he=m;(i.updateQueue=he)&&(i.flags|=4)}},Np=function(t,i,a,c){a!==c&&(i.flags|=4)};function Fa(t,i){if(!jt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function mv(t,i,a){var c=i.pendingProps;switch(zc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(i),null;case 1:return zn(i.type)&&Ro(),Cn(i),null;case 3:return c=i.stateNode,bs(),Wt(Bn),Wt(An),Qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Io(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_i!==null&&(Ru(_i),_i=null))),xu(t,i),Cn(i),null;case 5:Zc(i);var f=Gr(Na.current);if(a=i.type,t!==null&&i.stateNode!=null)Pp(t,i,a,c,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return Cn(i),null}if(t=Gr(Ni.current),Io(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Pi]=i,c[Aa]=m,t=(i.mode&1)!==0,a){case"dialog":Gt("cancel",c),Gt("close",c);break;case"iframe":case"object":case"embed":Gt("load",c);break;case"video":case"audio":for(f=0;f<Ea.length;f++)Gt(Ea[f],c);break;case"source":Gt("error",c);break;case"img":case"image":case"link":Gt("error",c),Gt("load",c);break;case"details":Gt("toggle",c);break;case"input":dt(c,m),Gt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Gt("invalid",c);break;case"textarea":G(c,m),Gt("invalid",c)}Re(a,m),f=null;for(var A in m)if(m.hasOwnProperty(A)){var O=m[A];A==="children"?typeof O=="string"?c.textContent!==O&&(m.suppressHydrationWarning!==!0&&Ao(c.textContent,O,t),f=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(m.suppressHydrationWarning!==!0&&Ao(c.textContent,O,t),f=["children",""+O]):o.hasOwnProperty(A)&&O!=null&&A==="onScroll"&&Gt("scroll",c)}switch(a){case"input":Ie(c),vt(c,m,!0);break;case"textarea":Ie(c),xt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=bo)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{A=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=U(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=A.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=A.createElement(a,{is:c.is}):(t=A.createElement(a),a==="select"&&(A=t,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):t=A.createElementNS(t,a),t[Pi]=i,t[Aa]=c,Rp(t,i,!1,!1),i.stateNode=t;e:{switch(A=Ee(a,c),a){case"dialog":Gt("cancel",t),Gt("close",t),f=c;break;case"iframe":case"object":case"embed":Gt("load",t),f=c;break;case"video":case"audio":for(f=0;f<Ea.length;f++)Gt(Ea[f],t);f=c;break;case"source":Gt("error",t),f=c;break;case"img":case"image":case"link":Gt("error",t),Gt("load",t),f=c;break;case"details":Gt("toggle",t),f=c;break;case"input":dt(t,c),f=ut(t,c),Gt("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=B({},c,{value:void 0}),Gt("invalid",t);break;case"textarea":G(t,c),f=Tt(t,c),Gt("invalid",t);break;default:f=c}Re(a,f),O=f;for(m in O)if(O.hasOwnProperty(m)){var H=O[m];m==="style"?se(t,H):m==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&le(t,H)):m==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&me(t,H):typeof H=="number"&&me(t,""+H):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?H!=null&&m==="onScroll"&&Gt("scroll",t):H!=null&&k(t,m,H,A))}switch(a){case"input":Ie(t),vt(t,c,!1);break;case"textarea":Ie(t),xt(t);break;case"option":c.value!=null&&t.setAttribute("value",""+ce(c.value));break;case"select":t.multiple=!!c.multiple,m=c.value,m!=null?ot(t,!!c.multiple,m,!1):c.defaultValue!=null&&ot(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=bo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Cn(i),null;case 6:if(t&&i.stateNode!=null)Np(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=Gr(Na.current),Gr(Ni.current),Io(i)){if(c=i.stateNode,a=i.memoizedProps,c[Pi]=i,(m=c.nodeValue!==a)&&(t=Kn,t!==null))switch(t.tag){case 3:Ao(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ao(c.nodeValue,a,(t.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Pi]=i,i.stateNode=c}return Cn(i),null;case 13:if(Wt($t),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(jt&&Zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ih(),Es(),i.flags|=98560,m=!1;else if(m=Io(i),c!==null&&c.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[Pi]=i}else Es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Cn(i),m=!1}else _i!==null&&(Ru(_i),_i=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||($t.current&1)!==0?un===0&&(un=3):Lu())),i.updateQueue!==null&&(i.flags|=4),Cn(i),null);case 4:return bs(),xu(t,i),t===null&&wa(i.stateNode.containerInfo),Cn(i),null;case 10:return jc(i.type._context),Cn(i),null;case 17:return zn(i.type)&&Ro(),Cn(i),null;case 19:if(Wt($t),m=i.memoizedState,m===null)return Cn(i),null;if(c=(i.flags&128)!==0,A=m.rendering,A===null)if(c)Fa(m,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(A=zo(t),A!==null){for(i.flags|=128,Fa(m,!1),c=A.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,t=c,m.flags&=14680066,A=m.alternate,A===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=A.childLanes,m.lanes=A.lanes,m.child=A.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=A.memoizedProps,m.memoizedState=A.memoizedState,m.updateQueue=A.updateQueue,m.type=A.type,t=A.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Vt($t,$t.current&1|2),i.child}t=t.sibling}m.tail!==null&&qt()>Ns&&(i.flags|=128,c=!0,Fa(m,!1),i.lanes=4194304)}else{if(!c)if(t=zo(A),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Fa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!A.alternate&&!jt)return Cn(i),null}else 2*qt()-m.renderingStartTime>Ns&&a!==1073741824&&(i.flags|=128,c=!0,Fa(m,!1),i.lanes=4194304);m.isBackwards?(A.sibling=i.child,i.child=A):(a=m.last,a!==null?a.sibling=A:i.child=A,m.last=A)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=qt(),i.sibling=null,a=$t.current,Vt($t,c?a&1|2:a&1),i):(Cn(i),null);case 22:case 23:return Nu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Jn&1073741824)!==0&&(Cn(i),i.subtreeFlags&6&&(i.flags|=8192)):Cn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function gv(t,i){switch(zc(i),i.tag){case 1:return zn(i.type)&&Ro(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return bs(),Wt(Bn),Wt(An),Qc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Zc(i),null;case 13:if(Wt($t),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Es()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Wt($t),null;case 4:return bs(),null;case 10:return jc(i.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var $o=!1,Rn=!1,vv=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Rs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Jt(t,i,c)}else a.current=null}function _u(t,i,a){try{a()}catch(c){Jt(t,i,c)}}var Lp=!1;function xv(t,i){if(Nc=mo,t=uh(),Ec(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var A=0,O=-1,H=-1,he=0,Ae=0,Ce=t,Te=null;t:for(;;){for(var We;Ce!==a||f!==0&&Ce.nodeType!==3||(O=A+f),Ce!==m||c!==0&&Ce.nodeType!==3||(H=A+c),Ce.nodeType===3&&(A+=Ce.nodeValue.length),(We=Ce.firstChild)!==null;)Te=Ce,Ce=We;for(;;){if(Ce===t)break t;if(Te===a&&++he===f&&(O=A),Te===m&&++Ae===c&&(H=A),(We=Ce.nextSibling)!==null)break;Ce=Te,Te=Ce.parentNode}Ce=We}a=O===-1||H===-1?null:{start:O,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lc={focusedElem:t,selectionRange:a},mo=!1,Ye=i;Ye!==null;)if(i=Ye,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ye=t;else for(;Ye!==null;){i=Ye;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var Qe=Ze.memoizedProps,nn=Ze.memoizedState,oe=i.stateNode,Y=oe.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:Si(i.type,Qe),nn);oe.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ue=i.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Pe){Jt(i,i.return,Pe)}if(t=i.sibling,t!==null){t.return=i.return,Ye=t;break}Ye=i.return}return Ze=Lp,Lp=!1,Ze}function ka(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var m=f.destroy;f.destroy=void 0,m!==void 0&&_u(i,a,m)}f=f.next}while(f!==c)}}function Ko(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Su(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function Dp(t){var i=t.alternate;i!==null&&(t.alternate=null,Dp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Pi],delete i[Aa],delete i[Fc],delete i[ev],delete i[tv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ip(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ip(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=bo));else if(c!==4&&(t=t.child,t!==null))for(yu(t,i,a),t=t.sibling;t!==null;)yu(t,i,a),t=t.sibling}function Mu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Mu(t,i,a),t=t.sibling;t!==null;)Mu(t,i,a),t=t.sibling}var Mn=null,yi=!1;function xr(t,i,a){for(a=a.child;a!==null;)Fp(t,i,a),a=a.sibling}function Fp(t,i,a){if(ie&&typeof ie.onCommitFiberUnmount=="function")try{ie.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 5:Rn||Rs(a,i);case 6:var c=Mn,f=yi;Mn=null,xr(t,i,a),Mn=c,yi=f,Mn!==null&&(yi?(t=Mn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Mn.removeChild(a.stateNode));break;case 18:Mn!==null&&(yi?(t=Mn,a=a.stateNode,t.nodeType===8?Uc(t.parentNode,a):t.nodeType===1&&Uc(t,a),ma(t)):Uc(Mn,a.stateNode));break;case 4:c=Mn,f=yi,Mn=a.stateNode.containerInfo,yi=!0,xr(t,i,a),Mn=c,yi=f;break;case 0:case 11:case 14:case 15:if(!Rn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,A=m.destroy;m=m.tag,A!==void 0&&((m&2)!==0||(m&4)!==0)&&_u(a,i,A),f=f.next}while(f!==c)}xr(t,i,a);break;case 1:if(!Rn&&(Rs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(O){Jt(a,i,O)}xr(t,i,a);break;case 21:xr(t,i,a);break;case 22:a.mode&1?(Rn=(c=Rn)||a.memoizedState!==null,xr(t,i,a),Rn=c):xr(t,i,a);break;default:xr(t,i,a)}}function kp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new vv),i.forEach(function(c){var f=bv.bind(null,t,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Mi(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var m=t,A=i,O=A;e:for(;O!==null;){switch(O.tag){case 5:Mn=O.stateNode,yi=!1;break e;case 3:Mn=O.stateNode.containerInfo,yi=!0;break e;case 4:Mn=O.stateNode.containerInfo,yi=!0;break e}O=O.return}if(Mn===null)throw Error(n(160));Fp(m,A,f),Mn=null,yi=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(he){Jt(f,i,he)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Op(i,t),i=i.sibling}function Op(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mi(i,t),Di(t),c&4){try{ka(3,t,t.return),Ko(3,t)}catch(Qe){Jt(t,t.return,Qe)}try{ka(5,t,t.return)}catch(Qe){Jt(t,t.return,Qe)}}break;case 1:Mi(i,t),Di(t),c&512&&a!==null&&Rs(a,a.return);break;case 5:if(Mi(i,t),Di(t),c&512&&a!==null&&Rs(a,a.return),t.flags&32){var f=t.stateNode;try{me(f,"")}catch(Qe){Jt(t,t.return,Qe)}}if(c&4&&(f=t.stateNode,f!=null)){var m=t.memoizedProps,A=a!==null?a.memoizedProps:m,O=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{O==="input"&&m.type==="radio"&&m.name!=null&&rt(f,m),Ee(O,A);var he=Ee(O,m);for(A=0;A<H.length;A+=2){var Ae=H[A],Ce=H[A+1];Ae==="style"?se(f,Ce):Ae==="dangerouslySetInnerHTML"?le(f,Ce):Ae==="children"?me(f,Ce):k(f,Ae,Ce,he)}switch(O){case"input":nt(f,m);break;case"textarea":Ht(f,m);break;case"select":var Te=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var We=m.value;We!=null?ot(f,!!m.multiple,We,!1):Te!==!!m.multiple&&(m.defaultValue!=null?ot(f,!!m.multiple,m.defaultValue,!0):ot(f,!!m.multiple,m.multiple?[]:"",!1))}f[Aa]=m}catch(Qe){Jt(t,t.return,Qe)}}break;case 6:if(Mi(i,t),Di(t),c&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,m=t.memoizedProps;try{f.nodeValue=m}catch(Qe){Jt(t,t.return,Qe)}}break;case 3:if(Mi(i,t),Di(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ma(i.containerInfo)}catch(Qe){Jt(t,t.return,Qe)}break;case 4:Mi(i,t),Di(t);break;case 13:Mi(i,t),Di(t),f=t.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Tu=qt())),c&4&&kp(t);break;case 22:if(Ae=a!==null&&a.memoizedState!==null,t.mode&1?(Rn=(he=Rn)||Ae,Mi(i,t),Rn=he):Mi(i,t),Di(t),c&8192){if(he=t.memoizedState!==null,(t.stateNode.isHidden=he)&&!Ae&&(t.mode&1)!==0)for(Ye=t,Ae=t.child;Ae!==null;){for(Ce=Ye=Ae;Ye!==null;){switch(Te=Ye,We=Te.child,Te.tag){case 0:case 11:case 14:case 15:ka(4,Te,Te.return);break;case 1:Rs(Te,Te.return);var Ze=Te.stateNode;if(typeof Ze.componentWillUnmount=="function"){c=Te,a=Te.return;try{i=c,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(Qe){Jt(c,a,Qe)}}break;case 5:Rs(Te,Te.return);break;case 22:if(Te.memoizedState!==null){Hp(Ce);continue}}We!==null?(We.return=Te,Ye=We):Hp(Ce)}Ae=Ae.sibling}e:for(Ae=null,Ce=t;;){if(Ce.tag===5){if(Ae===null){Ae=Ce;try{f=Ce.stateNode,he?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(O=Ce.stateNode,H=Ce.memoizedProps.style,A=H!=null&&H.hasOwnProperty("display")?H.display:null,O.style.display=ge("display",A))}catch(Qe){Jt(t,t.return,Qe)}}}else if(Ce.tag===6){if(Ae===null)try{Ce.stateNode.nodeValue=he?"":Ce.memoizedProps}catch(Qe){Jt(t,t.return,Qe)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===t)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===t)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===t)break e;Ae===Ce&&(Ae=null),Ce=Ce.return}Ae===Ce&&(Ae=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:Mi(i,t),Di(t),c&4&&kp(t);break;case 21:break;default:Mi(i,t),Di(t)}}function Di(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Ip(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(me(f,""),c.flags&=-33);var m=Up(t);Mu(t,m,f);break;case 3:case 4:var A=c.stateNode.containerInfo,O=Up(t);yu(t,O,A);break;default:throw Error(n(161))}}catch(H){Jt(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function _v(t,i,a){Ye=t,Bp(t)}function Bp(t,i,a){for(var c=(t.mode&1)!==0;Ye!==null;){var f=Ye,m=f.child;if(f.tag===22&&c){var A=f.memoizedState!==null||$o;if(!A){var O=f.alternate,H=O!==null&&O.memoizedState!==null||Rn;O=$o;var he=Rn;if($o=A,(Rn=H)&&!he)for(Ye=f;Ye!==null;)A=Ye,H=A.child,A.tag===22&&A.memoizedState!==null?Vp(f):H!==null?(H.return=A,Ye=H):Vp(f);for(;m!==null;)Ye=m,Bp(m),m=m.sibling;Ye=f,$o=O,Rn=he}zp(t)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Ye=m):zp(t)}}function zp(t){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Rn||Ko(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Rn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:Si(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Hh(i,m,c);break;case 3:var A=i.updateQueue;if(A!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Hh(i,A,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var he=i.alternate;if(he!==null){var Ae=he.memoizedState;if(Ae!==null){var Ce=Ae.dehydrated;Ce!==null&&ma(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Rn||i.flags&512&&Su(i)}catch(Te){Jt(i,i.return,Te)}}if(i===t){Ye=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function Hp(t){for(;Ye!==null;){var i=Ye;if(i===t){Ye=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function Vp(t){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ko(4,i)}catch(H){Jt(i,a,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(H){Jt(i,f,H)}}var m=i.return;try{Su(i)}catch(H){Jt(i,m,H)}break;case 5:var A=i.return;try{Su(i)}catch(H){Jt(i,A,H)}}}catch(H){Jt(i,i.return,H)}if(i===t){Ye=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Ye=O;break}Ye=i.return}}var Sv=Math.ceil,Zo=C.ReactCurrentDispatcher,Eu=C.ReactCurrentOwner,li=C.ReactCurrentBatchConfig,Lt=0,pn=null,sn=null,En=0,Jn=0,Ps=hr(0),un=0,Oa=null,Xr=0,Jo=0,wu=0,Ba=null,Vn=null,Tu=0,Ns=1/0,Zi=null,Qo=!1,Au=null,_r=null,el=!1,Sr=null,tl=0,za=0,bu=null,nl=-1,il=0;function Un(){return(Lt&6)!==0?qt():nl!==-1?nl:nl=qt()}function yr(t){return(t.mode&1)===0?1:(Lt&2)!==0&&En!==0?En&-En:iv.transition!==null?(il===0&&(il=ln()),il):(t=St,t!==0||(t=window.event,t=t===void 0?16:Wd(t.type)),t)}function Ei(t,i,a,c){if(50<za)throw za=0,bu=null,Error(n(185));tn(t,a,c),((Lt&2)===0||t!==pn)&&(t===pn&&((Lt&2)===0&&(Jo|=a),un===4&&Mr(t,En)),Gn(t,c),a===1&&Lt===0&&(i.mode&1)===0&&(Ns=qt()+500,No&&mr()))}function Gn(t,i){var a=t.callbackNode;zt(t,i);var c=At(t,t===pn?En:0);if(c===0)a!==null&&la(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&la(a),i===1)t.tag===0?nv(Wp.bind(null,t)):Rh(Wp.bind(null,t)),J0(function(){(Lt&6)===0&&mr()}),a=null;else{switch(pi(c)){case 1:a=ca;break;case 4:a=ua;break;case 16:a=b;break;case 536870912:a=de;break;default:a=b}a=Jp(a,Gp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Gp(t,i){if(nl=-1,il=0,(Lt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ls()&&t.callbackNode!==a)return null;var c=At(t,t===pn?En:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=rl(t,c);else{i=c;var f=Lt;Lt|=2;var m=jp();(pn!==t||En!==i)&&(Zi=null,Ns=qt()+500,Yr(t,i));do try{Ev();break}catch(O){Xp(t,O)}while(!0);Xc(),Zo.current=m,Lt=f,sn!==null?i=0:(pn=null,En=0,i=un)}if(i!==0){if(i===2&&(f=kt(t),f!==0&&(c=f,i=Cu(t,f))),i===1)throw a=Oa,Yr(t,0),Mr(t,c),Gn(t,qt()),a;if(i===6)Mr(t,c);else{if(f=t.current.alternate,(c&30)===0&&!yv(f)&&(i=rl(t,c),i===2&&(m=kt(t),m!==0&&(c=m,i=Cu(t,m))),i===1))throw a=Oa,Yr(t,0),Mr(t,c),Gn(t,qt()),a;switch(t.finishedWork=f,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:qr(t,Vn,Zi);break;case 3:if(Mr(t,c),(c&130023424)===c&&(i=Tu+500-qt(),10<i)){if(At(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Un(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Ic(qr.bind(null,t,Vn,Zi),i);break}qr(t,Vn,Zi);break;case 4:if(Mr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,f=-1;0<c;){var A=31-Fe(c);m=1<<A,A=i[A],A>f&&(f=A),c&=~m}if(c=f,c=qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Sv(c/1960))-c,10<c){t.timeoutHandle=Ic(qr.bind(null,t,Vn,Zi),c);break}qr(t,Vn,Zi);break;case 5:qr(t,Vn,Zi);break;default:throw Error(n(329))}}}return Gn(t,qt()),t.callbackNode===a?Gp.bind(null,t):null}function Cu(t,i){var a=Ba;return t.current.memoizedState.isDehydrated&&(Yr(t,i).flags|=256),t=rl(t,i),t!==2&&(i=Vn,Vn=a,i!==null&&Ru(i)),t}function Ru(t){Vn===null?Vn=t:Vn.push.apply(Vn,t)}function yv(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],m=f.getSnapshot;f=f.value;try{if(!xi(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Mr(t,i){for(i&=~wu,i&=~Jo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Fe(i),c=1<<a;t[a]=-1,i&=~c}}function Wp(t){if((Lt&6)!==0)throw Error(n(327));Ls();var i=At(t,0);if((i&1)===0)return Gn(t,qt()),null;var a=rl(t,i);if(t.tag!==0&&a===2){var c=kt(t);c!==0&&(i=c,a=Cu(t,c))}if(a===1)throw a=Oa,Yr(t,0),Mr(t,i),Gn(t,qt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,qr(t,Vn,Zi),Gn(t,qt()),null}function Pu(t,i){var a=Lt;Lt|=1;try{return t(i)}finally{Lt=a,Lt===0&&(Ns=qt()+500,No&&mr())}}function jr(t){Sr!==null&&Sr.tag===0&&(Lt&6)===0&&Ls();var i=Lt;Lt|=1;var a=li.transition,c=St;try{if(li.transition=null,St=1,t)return t()}finally{St=c,li.transition=a,Lt=i,(Lt&6)===0&&mr()}}function Nu(){Jn=Ps.current,Wt(Ps)}function Yr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Z0(a)),sn!==null)for(a=sn.return;a!==null;){var c=a;switch(zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ro();break;case 3:bs(),Wt(Bn),Wt(An),Qc();break;case 5:Zc(c);break;case 4:bs();break;case 13:Wt($t);break;case 19:Wt($t);break;case 10:jc(c.type._context);break;case 22:case 23:Nu()}a=a.return}if(pn=t,sn=t=Er(t.current,null),En=Jn=i,un=0,Oa=null,wu=Jo=Xr=0,Vn=Ba=null,Vr!==null){for(i=0;i<Vr.length;i++)if(a=Vr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,m=a.pending;if(m!==null){var A=m.next;m.next=f,c.next=A}a.pending=c}Vr=null}return t}function Xp(t,i){do{var a=sn;try{if(Xc(),Ho.current=Xo,Vo){for(var c=Kt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Vo=!1}if(Wr=0,hn=cn=Kt=null,La=!1,Da=0,Eu.current=null,a===null||a.return===null){un=1,Oa=i,sn=null;break}e:{var m=t,A=a.return,O=a,H=i;if(i=En,O.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var he=H,Ae=O,Ce=Ae.tag;if((Ae.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var Te=Ae.alternate;Te?(Ae.updateQueue=Te.updateQueue,Ae.memoizedState=Te.memoizedState,Ae.lanes=Te.lanes):(Ae.updateQueue=null,Ae.memoizedState=null)}var We=gp(A);if(We!==null){We.flags&=-257,vp(We,A,O,m,i),We.mode&1&&mp(m,he,i),i=We,H=he;var Ze=i.updateQueue;if(Ze===null){var Qe=new Set;Qe.add(H),i.updateQueue=Qe}else Ze.add(H);break e}else{if((i&1)===0){mp(m,he,i),Lu();break e}H=Error(n(426))}}else if(jt&&O.mode&1){var nn=gp(A);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),vp(nn,A,O,m,i),Gc(Cs(H,O));break e}}m=H=Cs(H,O),un!==4&&(un=2),Ba===null?Ba=[m]:Ba.push(m),m=A;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var oe=hp(m,H,i);zh(m,oe);break e;case 1:O=H;var Y=m.type,ue=m.stateNode;if((m.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(_r===null||!_r.has(ue)))){m.flags|=65536,i&=-i,m.lanes|=i;var Pe=pp(m,O,i);zh(m,Pe);break e}}m=m.return}while(m!==null)}qp(a)}catch(tt){i=tt,sn===a&&a!==null&&(sn=a=a.return);continue}break}while(!0)}function jp(){var t=Zo.current;return Zo.current=Xo,t===null?Xo:t}function Lu(){(un===0||un===3||un===2)&&(un=4),pn===null||(Xr&268435455)===0&&(Jo&268435455)===0||Mr(pn,En)}function rl(t,i){var a=Lt;Lt|=2;var c=jp();(pn!==t||En!==i)&&(Zi=null,Yr(t,i));do try{Mv();break}catch(f){Xp(t,f)}while(!0);if(Xc(),Lt=a,Zo.current=c,sn!==null)throw Error(n(261));return pn=null,En=0,un}function Mv(){for(;sn!==null;)Yp(sn)}function Ev(){for(;sn!==null&&!ho();)Yp(sn)}function Yp(t){var i=Zp(t.alternate,t,Jn);t.memoizedProps=t.pendingProps,i===null?qp(t):sn=i,Eu.current=null}function qp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=mv(a,i,Jn),a!==null){sn=a;return}}else{if(a=gv(a,i),a!==null){a.flags&=32767,sn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{un=6,sn=null;return}}if(i=i.sibling,i!==null){sn=i;return}sn=i=t}while(i!==null);un===0&&(un=5)}function qr(t,i,a){var c=St,f=li.transition;try{li.transition=null,St=1,wv(t,i,a,c)}finally{li.transition=f,St=c}return null}function wv(t,i,a,c){do Ls();while(Sr!==null);if((Lt&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(bt(t,m),t===pn&&(sn=pn=null,En=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||el||(el=!0,Jp(b,function(){return Ls(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=li.transition,li.transition=null;var A=St;St=1;var O=Lt;Lt|=4,Eu.current=null,xv(t,a),Op(a,t),W0(Lc),mo=!!Nc,Lc=Nc=null,t.current=a,_v(a),uc(),Lt=O,St=A,li.transition=m}else t.current=a;if(el&&(el=!1,Sr=t,tl=f),m=t.pendingLanes,m===0&&(_r=null),Be(a.stateNode),Gn(t,qt()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Qo)throw Qo=!1,t=Au,Au=null,t;return(tl&1)!==0&&t.tag!==0&&Ls(),m=t.pendingLanes,(m&1)!==0?t===bu?za++:(za=0,bu=t):za=0,mr(),null}function Ls(){if(Sr!==null){var t=pi(tl),i=li.transition,a=St;try{if(li.transition=null,St=16>t?16:t,Sr===null)var c=!1;else{if(t=Sr,Sr=null,tl=0,(Lt&6)!==0)throw Error(n(331));var f=Lt;for(Lt|=4,Ye=t.current;Ye!==null;){var m=Ye,A=m.child;if((Ye.flags&16)!==0){var O=m.deletions;if(O!==null){for(var H=0;H<O.length;H++){var he=O[H];for(Ye=he;Ye!==null;){var Ae=Ye;switch(Ae.tag){case 0:case 11:case 15:ka(8,Ae,m)}var Ce=Ae.child;if(Ce!==null)Ce.return=Ae,Ye=Ce;else for(;Ye!==null;){Ae=Ye;var Te=Ae.sibling,We=Ae.return;if(Dp(Ae),Ae===he){Ye=null;break}if(Te!==null){Te.return=We,Ye=Te;break}Ye=We}}}var Ze=m.alternate;if(Ze!==null){var Qe=Ze.child;if(Qe!==null){Ze.child=null;do{var nn=Qe.sibling;Qe.sibling=null,Qe=nn}while(Qe!==null)}}Ye=m}}if((m.subtreeFlags&2064)!==0&&A!==null)A.return=m,Ye=A;else e:for(;Ye!==null;){if(m=Ye,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ka(9,m,m.return)}var oe=m.sibling;if(oe!==null){oe.return=m.return,Ye=oe;break e}Ye=m.return}}var Y=t.current;for(Ye=Y;Ye!==null;){A=Ye;var ue=A.child;if((A.subtreeFlags&2064)!==0&&ue!==null)ue.return=A,Ye=ue;else e:for(A=Y;Ye!==null;){if(O=Ye,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Ko(9,O)}}catch(tt){Jt(O,O.return,tt)}if(O===A){Ye=null;break e}var Pe=O.sibling;if(Pe!==null){Pe.return=O.return,Ye=Pe;break e}Ye=O.return}}if(Lt=f,mr(),ie&&typeof ie.onPostCommitFiberRoot=="function")try{ie.onPostCommitFiberRoot(ae,t)}catch{}c=!0}return c}finally{St=a,li.transition=i}}return!1}function $p(t,i,a){i=Cs(a,i),i=hp(t,i,1),t=vr(t,i,1),i=Un(),t!==null&&(tn(t,1,i),Gn(t,i))}function Jt(t,i,a){if(t.tag===3)$p(t,t,a);else for(;i!==null;){if(i.tag===3){$p(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(_r===null||!_r.has(c))){t=Cs(a,t),t=pp(i,t,1),i=vr(i,t,1),t=Un(),i!==null&&(tn(i,1,t),Gn(i,t));break}}i=i.return}}function Tv(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=Un(),t.pingedLanes|=t.suspendedLanes&a,pn===t&&(En&a)===a&&(un===4||un===3&&(En&130023424)===En&&500>qt()-Tu?Yr(t,0):wu|=a),Gn(t,i)}function Kp(t,i){i===0&&((t.mode&1)===0?i=1:(i=_t,_t<<=1,(_t&130023424)===0&&(_t=4194304)));var a=Un();t=qi(t,i),t!==null&&(tn(t,i,a),Gn(t,a))}function Av(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Kp(t,a)}function bv(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Kp(t,a)}var Zp;Zp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Bn.current)Hn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Hn=!1,pv(t,i,a);Hn=(t.flags&131072)!==0}else Hn=!1,jt&&(i.flags&1048576)!==0&&Ph(i,Do,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;qo(t,i),t=i.pendingProps;var f=Ss(i,An.current);As(i,a),f=nu(null,i,c,t,f,a);var m=iu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,zn(c)?(m=!0,Po(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,$c(i),f.updater=jo,i.stateNode=f,f._reactInternals=i,cu(i,c,t,a),i=hu(null,i,c,!0,m,a)):(i.tag=0,jt&&m&&Bc(i),In(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(qo(t,i),t=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=Rv(c),t=Si(c,t),f){case 0:i=du(null,i,c,t,a);break e;case 1:i=Ep(null,i,c,t,a);break e;case 11:i=xp(null,i,c,t,a);break e;case 14:i=_p(null,i,c,Si(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Si(c,f),du(t,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Si(c,f),Ep(t,i,c,f,a);case 3:e:{if(wp(i),t===null)throw Error(n(387));c=i.pendingProps,m=i.memoizedState,f=m.element,Bh(t,i),Bo(i,c,null,a);var A=i.memoizedState;if(c=A.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Cs(Error(n(423)),i),i=Tp(t,i,c,a,f);break e}else if(c!==f){f=Cs(Error(n(424)),i),i=Tp(t,i,c,a,f);break e}else for(Zn=dr(i.stateNode.containerInfo.firstChild),Kn=i,jt=!0,_i=null,a=kh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Es(),c===f){i=Ki(t,i,a);break e}In(t,i,c,a)}i=i.child}return i;case 5:return Vh(i),t===null&&Vc(i),c=i.type,f=i.pendingProps,m=t!==null?t.memoizedProps:null,A=f.children,Dc(c,f)?A=null:m!==null&&Dc(c,m)&&(i.flags|=32),Mp(t,i),In(t,i,A,a),i.child;case 6:return t===null&&Vc(i),null;case 13:return Ap(t,i,a);case 4:return Kc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=ws(i,null,c,a):In(t,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Si(c,f),xp(t,i,c,f,a);case 7:return In(t,i,i.pendingProps,a),i.child;case 8:return In(t,i,i.pendingProps.children,a),i.child;case 12:return In(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,A=f.value,Vt(Fo,c._currentValue),c._currentValue=A,m!==null)if(xi(m.value,A)){if(m.children===f.children&&!Bn.current){i=Ki(t,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var O=m.dependencies;if(O!==null){A=m.child;for(var H=O.firstContext;H!==null;){if(H.context===c){if(m.tag===1){H=$i(-1,a&-a),H.tag=2;var he=m.updateQueue;if(he!==null){he=he.shared;var Ae=he.pending;Ae===null?H.next=H:(H.next=Ae.next,Ae.next=H),he.pending=H}}m.lanes|=a,H=m.alternate,H!==null&&(H.lanes|=a),Yc(m.return,a,i),O.lanes|=a;break}H=H.next}}else if(m.tag===10)A=m.type===i.type?null:m.child;else if(m.tag===18){if(A=m.return,A===null)throw Error(n(341));A.lanes|=a,O=A.alternate,O!==null&&(O.lanes|=a),Yc(A,a,i),A=m.sibling}else A=m.child;if(A!==null)A.return=m;else for(A=m;A!==null;){if(A===i){A=null;break}if(m=A.sibling,m!==null){m.return=A.return,A=m;break}A=A.return}m=A}In(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,As(i,a),f=ai(f),c=c(f),i.flags|=1,In(t,i,c,a),i.child;case 14:return c=i.type,f=Si(c,i.pendingProps),f=Si(c.type,f),_p(t,i,c,f,a);case 15:return Sp(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Si(c,f),qo(t,i),i.tag=1,zn(c)?(t=!0,Po(i)):t=!1,As(i,a),fp(i,c,f),cu(i,c,f,a),hu(null,i,c,!0,t,a);case 19:return Cp(t,i,a);case 22:return yp(t,i,a)}throw Error(n(156,i.tag))};function Jp(t,i){return kr(t,i)}function Cv(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,i,a,c){return new Cv(t,i,a,c)}function Du(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Rv(t){if(typeof t=="function")return Du(t)?1:0;if(t!=null){if(t=t.$$typeof,t===J)return 11;if(t===te)return 14}return 2}function Er(t,i){var a=t.alternate;return a===null?(a=ci(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function sl(t,i,a,c,f,m){var A=2;if(c=t,typeof t=="function")Du(t)&&(A=1);else if(typeof t=="string")A=5;else e:switch(t){case F:return $r(a.children,f,m,i);case w:A=8,f|=8;break;case I:return t=ci(12,a,i,f|2),t.elementType=I,t.lanes=m,t;case Q:return t=ci(13,a,i,f),t.elementType=Q,t.lanes=m,t;case X:return t=ci(19,a,i,f),t.elementType=X,t.lanes=m,t;case ne:return al(a,f,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V:A=10;break e;case q:A=9;break e;case J:A=11;break e;case te:A=14;break e;case pe:A=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ci(A,a,i,f),i.elementType=t,i.type=c,i.lanes=m,i}function $r(t,i,a,c){return t=ci(7,t,c,i),t.lanes=a,t}function al(t,i,a,c){return t=ci(22,t,c,i),t.elementType=ne,t.lanes=a,t.stateNode={isHidden:!1},t}function Iu(t,i,a){return t=ci(6,t,null,i),t.lanes=a,t}function Uu(t,i,a){return i=ci(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Pv(t,i,a,c,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ge(0),this.expirationTimes=Ge(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ge(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Fu(t,i,a,c,f,m,A,O,H){return t=new Pv(t,i,a,O,H),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ci(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(m),t}function Nv(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function Qp(t){if(!t)return pr;t=t._reactInternals;e:{if(Dn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(zn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(zn(a))return bh(t,a,i)}return i}function em(t,i,a,c,f,m,A,O,H){return t=Fu(a,c,!0,t,f,m,A,O,H),t.context=Qp(null),a=t.current,c=Un(),f=yr(a),m=$i(c,f),m.callback=i??null,vr(a,m,f),t.current.lanes=f,tn(t,f,c),Gn(t,c),t}function ol(t,i,a,c){var f=i.current,m=Un(),A=yr(f);return a=Qp(a),i.context===null?i.context=a:i.pendingContext=a,i=$i(m,A),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=vr(f,i,A),t!==null&&(Ei(t,f,A,m),Oo(t,f,A)),A}function ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tm(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function ku(t,i){tm(t,i),(t=t.alternate)&&tm(t,i)}function Lv(){return null}var nm=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ou(t){this._internalRoot=t}cl.prototype.render=Ou.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ol(t,i,null,null)},cl.prototype.unmount=Ou.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;jr(function(){ol(null,t,null,null)}),i[Wi]=null}};function cl(t){this._internalRoot=t}cl.prototype.unstable_scheduleHydration=function(t){if(t){var i=mi();t={blockedOn:null,target:t,priority:i};for(var a=0;a<cr.length&&i!==0&&i<cr[a].priority;a++);cr.splice(a,0,t),a===0&&Vd(t)}};function Bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function im(){}function Dv(t,i,a,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var he=ll(A);m.call(he)}}var A=em(i,c,t,0,null,!1,!1,"",im);return t._reactRootContainer=A,t[Wi]=A.current,wa(t.nodeType===8?t.parentNode:t),jr(),A}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var O=c;c=function(){var he=ll(H);O.call(he)}}var H=Fu(t,0,!1,null,null,!1,!1,"",im);return t._reactRootContainer=H,t[Wi]=H.current,wa(t.nodeType===8?t.parentNode:t),jr(function(){ol(i,H,a,c)}),H}function fl(t,i,a,c,f){var m=a._reactRootContainer;if(m){var A=m;if(typeof f=="function"){var O=f;f=function(){var H=ll(A);O.call(H)}}ol(i,A,t,f)}else A=Dv(a,i,t,f,c);return ll(A)}Gi=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=je(i.pendingLanes);a!==0&&(Tn(i,a|1),Gn(i,qt()),(Lt&6)===0&&(Ns=qt()+500,mr()))}break;case 13:jr(function(){var c=qi(t,1);if(c!==null){var f=Un();Ei(c,t,1,f)}}),ku(t,1)}},It=function(t){if(t.tag===13){var i=qi(t,134217728);if(i!==null){var a=Un();Ei(i,t,134217728,a)}ku(t,134217728)}},Xt=function(t){if(t.tag===13){var i=yr(t),a=qi(t,i);if(a!==null){var c=Un();Ei(a,t,i,c)}ku(t,i)}},mi=function(){return St},Ot=function(t,i){var a=St;try{return St=t,i()}finally{St=a}},$e=function(t,i,a){switch(i){case"input":if(nt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var f=Co(c);if(!f)throw Error(n(90));it(c),nt(c,f)}}}break;case"textarea":Ht(t,a);break;case"select":i=a.value,i!=null&&ot(t,!!a.multiple,i,!1)}},ke=Pu,Se=jr;var Iv={usingClientEntryPoint:!1,Events:[ba,xs,Co,xe,De,Pu]},Ha={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uv={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fr(t),t===null?null:t.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||Lv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{ae=dl.inject(Uv),ie=dl}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iv,Wn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bu(i))throw Error(n(200));return Nv(t,i,null,a)},Wn.createRoot=function(t,i){if(!Bu(t))throw Error(n(299));var a=!1,c="",f=nm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Fu(t,1,!1,null,null,a,!1,c,f),t[Wi]=i.current,wa(t.nodeType===8?t.parentNode:t),new Ou(i)},Wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Fr(i),t=t===null?null:t.stateNode,t},Wn.flushSync=function(t){return jr(t)},Wn.hydrate=function(t,i,a){if(!ul(i))throw Error(n(200));return fl(null,t,i,!0,a)},Wn.hydrateRoot=function(t,i,a){if(!Bu(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,f=!1,m="",A=nm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(A=a.onRecoverableError)),i=em(i,null,t,1,a??null,f,!1,m,A),t[Wi]=i.current,wa(t),c)for(t=0;t<c.length;t++)a=c[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new cl(i)},Wn.render=function(t,i,a){if(!ul(i))throw Error(n(200));return fl(null,t,i,!1,a)},Wn.unmountComponentAtNode=function(t){if(!ul(t))throw Error(n(40));return t._reactRootContainer?(jr(function(){fl(null,null,t,!1,function(){t._reactRootContainer=null,t[Wi]=null})}),!0):!1},Wn.unstable_batchedUpdates=Pu,Wn.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!ul(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return fl(t,i,a,!1,c)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var fm;function Wv(){if(fm)return Vu.exports;fm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Vu.exports=Gv(),Vu.exports}var dm;function Xv(){if(dm)return hl;dm=1;var s=Wv();return hl.createRoot=s.createRoot,hl.hydrateRoot=s.hydrateRoot,hl}var jv=Xv();const Yv=gg(jv);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vg=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=at.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},h)=>at.createElement("svg",{ref:h,...$v,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:vg("lucide",o),...d},[...u.map(([p,x])=>at.createElement(p,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=(s,e)=>{const n=at.forwardRef(({className:r,...o},l)=>at.createElement(Kv,{ref:l,iconNode:e,className:vg(`lucide-${qv(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=Ln("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=Ln("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=Ln("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=Ln("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=Ln("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=Ln("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=Ln("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=Ln("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=Ln("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=Ln("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=Ln("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=Ln("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=Ln("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=Ln("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=Ln("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=Ln("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),rn={profile:{name:"Biamtiero Amiral Kalman",role:"Full-Stack Web Developer",location:"Indonesia (UTC+7)",bio:"Saya adalah Full-Stack Developer yang menggabungkan ketelitian arsitektur backend dengan antarmuka frontend yang bersih, cepat, dan interaktif. Saya senang memecahkan masalah kompleks menjadi produk digital yang mudah digunakan.",email:"biamtieroamiral@gmail.com",github:"https://github.com/biamtiero",linkedin:"https://www.linkedin.com/in/biam-tiero-a43113334/",instagram:"https://instagram.com/btiero_"},projects:[{id:"proj-1",code:"PROJECT 01",title:"NexaFlow — Workspace Manajemen Proyek & Kolaborasi Tim",category:"Full-Stack Web App",year:"2026",accentHex:"#38BDF8",summary:"Platform kolaborasi tim modern dengan papan Kanban interaktif, pelacakan progres real-time, analitik sprint, dan manajemen dokumen terpusat.",highlights:["Interaksi drag-and-drop mulus dengan pembaruan status real-time","Arsitektur full-stack TypeScript dengan waktu respons API < 35ms"],techStack:["Next.js","TypeScript","Tailwind CSS","Node.js","PostgreSQL"],demoUrl:"https://github.com/biamtiero",repoUrl:"https://github.com/biamtiero"},{id:"proj-2",code:"PROJECT 02",title:"Lumina Commerce — Platform E-Commerce & Dashboard Inventaris",category:"E-Commerce Platform",year:"2025",accentHex:"#34D399",summary:"Aplikasi toko online berkecepatan tinggi dengan fitur pencarian instan, keranjang belanja persisten, integrasi payment gateway, dan panel admin lengkap.",highlights:["Skor performa Google Lighthouse 99/100 di perangkat mobile & desktop","Manajemen stok otomatis dan laporan penjualan visual real-time"],techStack:["React","TypeScript","Prisma ORM","PostgreSQL","Midtrans API"],demoUrl:"https://github.com/biamtiero",repoUrl:"https://github.com/biamtiero"},{id:"proj-3",code:"PROJECT 03",title:"AskDoc AI — Asisten Riset & Analisis Dokumen Pintar",category:"AI & Backend Application",year:"2025",accentHex:"#818CF8",summary:"Aplikasi berbasis AI yang memungkinkan pengguna mengunggah dokumen PDF dan melakukan tanya-jawab instan lengkap dengan rujukan halaman kutipan.",highlights:["Pencarian semantik berbasis vektor untuk akurasi jawaban tinggi","Antarmuka pembaca dokumen berdampingan dengan asisten chat AI"],techStack:["Python","FastAPI","React","TypeScript","Vector Search"],demoUrl:"https://github.com/biamtiero",repoUrl:"https://github.com/biamtiero"},{id:"proj-4",code:"PROJECT 04",title:"PulseMetric — Real-Time Cloud Telemetry & API Monitor",category:"DevOps & Analytics",year:"2025",accentHex:"#F472B6",summary:"Dashboard observabilitas real-time untuk memantau latensi endpoint API, kesehatan server, log terdistribusi, serta peringatan insiden otomatis.",highlights:["Streaming metrik WebSocket langsung dengan visualisasi grafik 60fps","Sistem notifikasi anomali otomatis via Webhook & Telegram"],techStack:["TypeScript","Node.js","WebSockets","Redis","React"],demoUrl:"https://github.com/biamtiero",repoUrl:"https://github.com/biamtiero"},{id:"proj-5",code:"PROJECT 05",title:"Aether Studio — Interactive 3D WebGL Product Configurator",category:"Creative 3D & WebGL",year:"2024",accentHex:"#FBBF24",summary:"Pengalaman web 3D interaktif yang memungkinkan pengguna memutar, mengganti material shader, dan mengatur pencahayaan produk secara real-time di browser.",highlights:["Custom GLSL shader dengan pantulan PBR yang ringan di perangkat mobile","Transisi kamera sinematik berbasis kurva halus tanpa jeda"],techStack:["Three.js","WebGL / GLSL","React","TypeScript","Vite"],demoUrl:"https://github.com/biamtiero",repoUrl:"https://github.com/biamtiero"},{id:"proj-6",code:"PROJECT 06",title:"FinVault — Sistem Ledger Keuangan & Invoicing Otomatis",category:"Fintech Web System",year:"2024",accentHex:"#2DD4BF",summary:"Platform manajemen arus kas, pembuatan faktur multi-mata uang, rekonsiliasi transaksi otomatis, dan laporan audit keuangan terenkripsi.",highlights:["Arsitektur transaksi double-entry yang presisi dan aman (RBAC + JWT)","Ekspor laporan PDF/CSV instan dengan filter periode dinamis"],techStack:["Next.js","TypeScript","PostgreSQL","Prisma","Docker"],demoUrl:"https://github.com/biamtiero",repoUrl:"https://github.com/biamtiero"}]};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vd="186",lx=0,hm=1,cx=2,Wl=1,ux=2,Ka=3,rs=0,Yn=1,jn=2,rr=0,Ja=1,ki=2,pm=3,mm=4,fx=5,Ys=100,dx=101,hx=102,px=103,mx=104,gx=200,vx=201,xx=202,_x=203,_g=204,Sg=205,Sx=206,yx=207,Mx=208,Ex=209,wx=210,Tx=211,Ax=212,bx=213,Cx=214,Af=0,bf=1,Cf=2,eo=3,Rf=4,Pf=5,Nf=6,Lf=7,yg=0,Rx=1,Px=2,zi=0,Mg=1,Eg=2,wg=3,Tg=4,Ag=5,bg=6,Cg=7,Rg=300,ss=301,ea=302,Xu=303,ju=304,sc=306,Df=1e3,ir=1001,If=1002,wn=1003,Nx=1004,pl=1005,on=1006,Yu=1007,ts=1008,di=1009,Pg=1010,Ng=1011,to=1012,xd=1013,Hi=1014,Oi=1015,Vi=1016,_d=1017,Sd=1018,no=1020,Lg=35902,Dg=35899,Ig=1021,Ug=1022,Ci=1023,ar=1026,ns=1027,Fg=1028,yd=1029,as=1030,Md=1031,Ed=1033,Xl=33776,jl=33777,Yl=33778,ql=33779,Uf=35840,Ff=35841,kf=35842,Of=35843,Bf=36196,zf=37492,Hf=37496,Vf=37488,Gf=37489,Kl=37490,Wf=37491,Xf=37808,jf=37809,Yf=37810,qf=37811,$f=37812,Kf=37813,Zf=37814,Jf=37815,Qf=37816,ed=37817,td=37818,nd=37819,id=37820,rd=37821,sd=36492,ad=36494,od=36495,ld=36283,cd=36284,Zl=36285,ud=36286,Lx=3200,gm=0,Dx=1,Nr="",fi="srgb",Jl="srgb-linear",Ql="linear",Bt="srgb",qu=7680,Ix=519,Ux=512,Fx=513,kx=514,wd=515,Ox=516,Bx=517,Td=518,zx=519,Hx=35044,vm="300 es",Bi=2e3,ec=2001;function Vx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function io(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gx(){const s=io("canvas");return s.style.display="block",s}const xm={};function _m(...s){const e="THREE."+s.shift();console.log(e,...s)}function kg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ft(...s){s=kg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Ft(...s){s=kg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function Zs(...s){const e=s.join(" ");e in xm||(xm[e]=!0,ft(...s))}function Wx(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const Xx={[Af]:bf,[Cf]:Nf,[Rf]:Lf,[eo]:Pf,[bf]:Af,[Nf]:Cf,[Lf]:Rf,[Pf]:eo};class ls{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sm=1234567;const Js=Math.PI/180,ro=180/Math.PI;function na(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function Et(s,e,n){return Math.max(e,Math.min(n,s))}function Ad(s,e){return(s%e+e)%e}function jx(s,e,n,r,o){return r+(s-e)*(o-r)/(n-e)}function Yx(s,e,n){return s!==e?(n-s)/(e-s):0}function Qa(s,e,n){return(1-n)*s+n*e}function qx(s,e,n,r){return Qa(s,e,1-Math.exp(-n*r))}function $x(s,e=1){return e-Math.abs(Ad(s,e*2)-e)}function Kx(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function Zx(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function Jx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Qx(s,e){return s+Math.random()*(e-s)}function e_(s){return s*(.5-Math.random())}function t_(s){s!==void 0&&(Sm=s);let e=Sm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function n_(s){return s*Js}function i_(s){return s*ro}function r_(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function s_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function a_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function o_(s,e,n,r,o){const l=Math.cos,u=Math.sin,d=l(n/2),h=u(n/2),p=l((e+r)/2),x=u((e+r)/2),y=l((e-r)/2),g=u((e-r)/2),S=l((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":s.set(d*x,h*y,h*g,d*p);break;case"YZY":s.set(h*g,d*x,h*y,d*p);break;case"ZXZ":s.set(h*y,h*g,d*x,d*p);break;case"XZX":s.set(d*x,h*E,h*S,d*p);break;case"YXY":s.set(h*S,d*x,h*E,d*p);break;case"ZYZ":s.set(h*E,h*S,d*x,d*p);break;default:ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function qs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const bi={DEG2RAD:Js,RAD2DEG:ro,generateUUID:na,clamp:Et,euclideanModulo:Ad,mapLinear:jx,inverseLerp:Yx,lerp:Qa,damp:qx,pingpong:$x,smoothstep:Kx,smootherstep:Zx,randInt:Jx,randFloat:Qx,randFloatSpread:e_,seededRandom:t_,degToRad:n_,radToDeg:i_,isPowerOfTwo:r_,ceilPowerOfTwo:s_,floorPowerOfTwo:a_,setQuaternionFromProperEuler:o_,normalize:Fn,denormalize:qs},Fd=class Fd{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fd.prototype.isVector2=!0;let Rt=Fd;class ia{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,d){let h=r[o+0],p=r[o+1],x=r[o+2],y=r[o+3],g=l[u+0],S=l[u+1],E=l[u+2],T=l[u+3];if(y!==T||h!==g||p!==S||x!==E){let _=h*g+p*S+x*E+y*T;_<0&&(g=-g,S=-S,E=-E,T=-T,_=-_);let v=1-d;if(_<.9995){const N=Math.acos(_),k=Math.sin(N);v=Math.sin(v*N)/k,d=Math.sin(d*N)/k,h=h*v+g*d,p=p*v+S*d,x=x*v+E*d,y=y*v+T*d}else{h=h*v+g*d,p=p*v+S*d,x=x*v+E*d,y=y*v+T*d;const N=1/Math.sqrt(h*h+p*p+x*x+y*y);h*=N,p*=N,x*=N,y*=N}}e[n]=h,e[n+1]=p,e[n+2]=x,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,o,l,u){const d=r[o],h=r[o+1],p=r[o+2],x=r[o+3],y=l[u],g=l[u+1],S=l[u+2],E=l[u+3];return e[n]=d*E+x*y+h*S-p*g,e[n+1]=h*E+x*g+p*y-d*S,e[n+2]=p*E+x*S+d*g-h*y,e[n+3]=x*E-d*y-h*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,p=d(r/2),x=d(o/2),y=d(l/2),g=h(r/2),S=h(o/2),E=h(l/2);switch(u){case"XYZ":this._x=g*x*y+p*S*E,this._y=p*S*y-g*x*E,this._z=p*x*E+g*S*y,this._w=p*x*y-g*S*E;break;case"YXZ":this._x=g*x*y+p*S*E,this._y=p*S*y-g*x*E,this._z=p*x*E-g*S*y,this._w=p*x*y+g*S*E;break;case"ZXY":this._x=g*x*y-p*S*E,this._y=p*S*y+g*x*E,this._z=p*x*E+g*S*y,this._w=p*x*y-g*S*E;break;case"ZYX":this._x=g*x*y-p*S*E,this._y=p*S*y+g*x*E,this._z=p*x*E-g*S*y,this._w=p*x*y+g*S*E;break;case"YZX":this._x=g*x*y+p*S*E,this._y=p*S*y+g*x*E,this._z=p*x*E-g*S*y,this._w=p*x*y-g*S*E;break;case"XZY":this._x=g*x*y-p*S*E,this._y=p*S*y-g*x*E,this._z=p*x*E+g*S*y,this._w=p*x*y+g*S*E;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],d=n[5],h=n[9],p=n[2],x=n[6],y=n[10],g=r+d+y;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(x-h)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(r>d&&r>y){const S=2*Math.sqrt(1+r-d-y);this._w=(x-h)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(d>y){const S=2*Math.sqrt(1+d-r-y);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(h+x)/S}else{const S=2*Math.sqrt(1+y-r-d);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(h+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,d=n._x,h=n._y,p=n._z,x=n._w;return this._x=r*x+u*d+o*p-l*h,this._y=o*x+u*h+l*d-r*p,this._z=l*x+u*p+r*h-o*d,this._w=u*x-r*d-o*h-l*p,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let h=1-n;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);h=Math.sin(h*p)/x,n=Math.sin(n*p)/x,this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+l*n,this._w=this._w*h+u*n,this._onChangeCallback()}else this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+l*n,this._w=this._w*h+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const kd=class kd{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ym.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ym.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,h=e.w,p=2*(u*o-d*r),x=2*(d*n-l*o),y=2*(l*r-u*n);return this.x=n+h*p+u*y-d*x,this.y=r+h*x+d*p-l*y,this.z=o+h*y+l*x-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,d=n.y,h=n.z;return this.x=o*h-l*d,this.y=l*u-r*h,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return $u.copy(this).projectOnVector(e),this.sub($u)}reflect(e){return this.sub($u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kd.prototype.isVector3=!0;let ee=kd;const $u=new ee,ym=new ia,Od=class Od{constructor(e,n,r,o,l,u,d,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,d,h,p)}set(e,n,r,o,l,u,d,h,p){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=n,x[4]=l,x[5]=h,x[6]=r,x[7]=u,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],d=r[3],h=r[6],p=r[1],x=r[4],y=r[7],g=r[2],S=r[5],E=r[8],T=o[0],_=o[3],v=o[6],N=o[1],k=o[4],C=o[7],L=o[2],P=o[5],F=o[8];return l[0]=u*T+d*N+h*L,l[3]=u*_+d*k+h*P,l[6]=u*v+d*C+h*F,l[1]=p*T+x*N+y*L,l[4]=p*_+x*k+y*P,l[7]=p*v+x*C+y*F,l[2]=g*T+S*N+E*L,l[5]=g*_+S*k+E*P,l[8]=g*v+S*C+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],x=e[8];return n*u*x-n*d*p-r*l*x+r*d*h+o*l*p-o*u*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],x=e[8],y=x*u-d*p,g=d*h-x*l,S=p*l-u*h,E=n*y+r*g+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=y*T,e[1]=(o*p-x*r)*T,e[2]=(d*r-o*u)*T,e[3]=g*T,e[4]=(x*n-o*h)*T,e[5]=(o*l-d*n)*T,e[6]=S*T,e[7]=(r*h-p*n)*T,e[8]=(u*n-r*l)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,d){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*d)+u+e,-o*p,o*h,-o*(-p*u+h*d)+d+n,0,0,1),this}scale(e,n){return Zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ku.makeScale(e,n)),this}rotate(e){return Zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ku.makeRotation(-e)),this}translate(e,n){return Zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ku.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Od.prototype.isMatrix3=!0;let gt=Od;const Ku=new gt,Mm=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Em=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l_(){const s={enabled:!0,workingColorSpace:Jl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Bt&&(o.r=sr(o.r),o.g=sr(o.g),o.b=sr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Bt&&(o.r=Qs(o.r),o.g=Qs(o.g),o.b=Qs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Nr?Ql:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Jl]:{primaries:e,whitePoint:r,transfer:Ql,toXYZ:Mm,fromXYZ:Em,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:Mm,fromXYZ:Em,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const Ct=l_();function sr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ds;class c_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ds===void 0&&(Ds=io("canvas")),Ds.width=e.width,Ds.height=e.height;const o=Ds.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ds}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=io("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=sr(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(sr(n[r]/255)*255):n[r]=sr(n[r]);return{data:n,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u_=0;class bd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=na(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Zu(o[u].image)):l.push(Zu(o[u]))}else l=Zu(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function Zu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?c_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let f_=0;const Ju=new ee;class _n extends ls{constructor(e=_n.DEFAULT_IMAGE,n=_n.DEFAULT_MAPPING,r=ir,o=ir,l=on,u=ts,d=Ci,h=di,p=_n.DEFAULT_ANISOTROPY,x=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=na(),this.name="",this.source=new bd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ju).x}get height(){return this.source.getSize(Ju).y}get depth(){return this.source.getSize(Ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ft(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Df:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case If:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Df:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case If:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Rg;_n.DEFAULT_ANISOTROPY=1;const Bd=class Bd{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const h=e.elements,p=h[0],x=h[4],y=h[8],g=h[1],S=h[5],E=h[9],T=h[2],_=h[6],v=h[10];if(Math.abs(x-g)<.01&&Math.abs(y-T)<.01&&Math.abs(E-_)<.01){if(Math.abs(x+g)<.1&&Math.abs(y+T)<.1&&Math.abs(E+_)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const k=(p+1)/2,C=(S+1)/2,L=(v+1)/2,P=(x+g)/4,F=(y+T)/4,w=(E+_)/4;return k>C&&k>L?k<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(k),o=P/r,l=F/r):C>L?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=P/o,l=w/o):L<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(L),r=F/l,o=w/l),this.set(r,o,l,n),this}let N=Math.sqrt((_-E)*(_-E)+(y-T)*(y-T)+(g-x)*(g-x));return Math.abs(N)<.001&&(N=1),this.x=(_-E)/N,this.y=(y-T)/N,this.z=(g-x)/N,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this.w=Et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this.w=Et(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bd.prototype.isVector4=!0;let Qt=Bd;class d_ extends ls{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Qt(0,0,e,n),this.scissorTest=!1,this.viewport=new Qt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},l=new _n(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new bd(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends d_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Og extends _n{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h_ extends _n{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const rc=class rc{constructor(e,n,r,o,l,u,d,h,p,x,y,g,S,E,T,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,d,h,p,x,y,g,S,E,T,_)}set(e,n,r,o,l,u,d,h,p,x,y,g,S,E,T,_){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=d,v[13]=h,v[2]=p,v[6]=x,v[10]=y,v[14]=g,v[3]=S,v[7]=E,v[11]=T,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rc().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Is.setFromMatrixColumn(e,0).length(),l=1/Is.setFromMatrixColumn(e,1).length(),u=1/Is.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(o),p=Math.sin(o),x=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const g=u*x,S=u*y,E=d*x,T=d*y;n[0]=h*x,n[4]=-h*y,n[8]=p,n[1]=S+E*p,n[5]=g-T*p,n[9]=-d*h,n[2]=T-g*p,n[6]=E+S*p,n[10]=u*h}else if(e.order==="YXZ"){const g=h*x,S=h*y,E=p*x,T=p*y;n[0]=g+T*d,n[4]=E*d-S,n[8]=u*p,n[1]=u*y,n[5]=u*x,n[9]=-d,n[2]=S*d-E,n[6]=T+g*d,n[10]=u*h}else if(e.order==="ZXY"){const g=h*x,S=h*y,E=p*x,T=p*y;n[0]=g-T*d,n[4]=-u*y,n[8]=E+S*d,n[1]=S+E*d,n[5]=u*x,n[9]=T-g*d,n[2]=-u*p,n[6]=d,n[10]=u*h}else if(e.order==="ZYX"){const g=u*x,S=u*y,E=d*x,T=d*y;n[0]=h*x,n[4]=E*p-S,n[8]=g*p+T,n[1]=h*y,n[5]=T*p+g,n[9]=S*p-E,n[2]=-p,n[6]=d*h,n[10]=u*h}else if(e.order==="YZX"){const g=u*h,S=u*p,E=d*h,T=d*p;n[0]=h*x,n[4]=T-g*y,n[8]=E*y+S,n[1]=y,n[5]=u*x,n[9]=-d*x,n[2]=-p*x,n[6]=S*y+E,n[10]=g-T*y}else if(e.order==="XZY"){const g=u*h,S=u*p,E=d*h,T=d*p;n[0]=h*x,n[4]=-y,n[8]=p*x,n[1]=g*y+T,n[5]=u*x,n[9]=S*y-E,n[2]=E*y-S,n[6]=d*x,n[10]=T*y+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p_,e,m_)}lookAt(e,n,r){const o=this.elements;return Qn.subVectors(e,n),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Tr.crossVectors(r,Qn),Tr.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Tr.crossVectors(r,Qn)),Tr.normalize(),ml.crossVectors(Qn,Tr),o[0]=Tr.x,o[4]=ml.x,o[8]=Qn.x,o[1]=Tr.y,o[5]=ml.y,o[9]=Qn.y,o[2]=Tr.z,o[6]=ml.z,o[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],d=r[4],h=r[8],p=r[12],x=r[1],y=r[5],g=r[9],S=r[13],E=r[2],T=r[6],_=r[10],v=r[14],N=r[3],k=r[7],C=r[11],L=r[15],P=o[0],F=o[4],w=o[8],I=o[12],V=o[1],q=o[5],J=o[9],Q=o[13],X=o[2],te=o[6],pe=o[10],ne=o[14],Z=o[3],j=o[7],B=o[11],D=o[15];return l[0]=u*P+d*V+h*X+p*Z,l[4]=u*F+d*q+h*te+p*j,l[8]=u*w+d*J+h*pe+p*B,l[12]=u*I+d*Q+h*ne+p*D,l[1]=x*P+y*V+g*X+S*Z,l[5]=x*F+y*q+g*te+S*j,l[9]=x*w+y*J+g*pe+S*B,l[13]=x*I+y*Q+g*ne+S*D,l[2]=E*P+T*V+_*X+v*Z,l[6]=E*F+T*q+_*te+v*j,l[10]=E*w+T*J+_*pe+v*B,l[14]=E*I+T*Q+_*ne+v*D,l[3]=N*P+k*V+C*X+L*Z,l[7]=N*F+k*q+C*te+L*j,l[11]=N*w+k*J+C*pe+L*B,l[15]=N*I+k*Q+C*ne+L*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],h=e[9],p=e[13],x=e[2],y=e[6],g=e[10],S=e[14],E=e[3],T=e[7],_=e[11],v=e[15],N=h*S-p*g,k=d*S-p*y,C=d*g-h*y,L=u*S-p*x,P=u*g-h*x,F=u*y-d*x;return n*(T*N-_*k+v*C)-r*(E*N-_*L+v*P)+o*(E*k-T*L+v*F)-l*(E*C-T*P+_*F)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[1],u=e[5],d=e[9],h=e[2],p=e[6],x=e[10];return n*(u*x-d*p)-r*(l*x-d*h)+o*(l*p-u*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],x=e[8],y=e[9],g=e[10],S=e[11],E=e[12],T=e[13],_=e[14],v=e[15],N=n*d-r*u,k=n*h-o*u,C=n*p-l*u,L=r*h-o*d,P=r*p-l*d,F=o*p-l*h,w=x*T-y*E,I=x*_-g*E,V=x*v-S*E,q=y*_-g*T,J=y*v-S*T,Q=g*v-S*_,X=N*Q-k*J+C*q+L*V-P*I+F*w;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=1/X;return e[0]=(d*Q-h*J+p*q)*te,e[1]=(o*J-r*Q-l*q)*te,e[2]=(T*F-_*P+v*L)*te,e[3]=(g*P-y*F-S*L)*te,e[4]=(h*V-u*Q-p*I)*te,e[5]=(n*Q-o*V+l*I)*te,e[6]=(_*C-E*F-v*k)*te,e[7]=(x*F-g*C+S*k)*te,e[8]=(u*J-d*V+p*w)*te,e[9]=(r*V-n*J-l*w)*te,e[10]=(E*P-T*C+v*N)*te,e[11]=(y*C-x*P-S*N)*te,e[12]=(d*I-u*q-h*w)*te,e[13]=(n*q-r*I+o*w)*te,e[14]=(T*k-E*L-_*N)*te,e[15]=(x*L-y*k+g*N)*te,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,d=e.y,h=e.z,p=l*u,x=l*d;return this.set(p*u+r,p*d-o*h,p*h+o*d,0,p*d+o*h,x*d+r,x*h-o*u,0,p*h-o*d,x*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,d=n._z,h=n._w,p=l+l,x=u+u,y=d+d,g=l*p,S=l*x,E=l*y,T=u*x,_=u*y,v=d*y,N=h*p,k=h*x,C=h*y,L=r.x,P=r.y,F=r.z;return o[0]=(1-(T+v))*L,o[1]=(S+C)*L,o[2]=(E-k)*L,o[3]=0,o[4]=(S-C)*P,o[5]=(1-(g+v))*P,o[6]=(_+N)*P,o[7]=0,o[8]=(E+k)*F,o[9]=(_-N)*F,o[10]=(1-(g+T))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),n.identity(),this;let u=Is.set(o[0],o[1],o[2]).length();const d=Is.set(o[4],o[5],o[6]).length(),h=Is.set(o[8],o[9],o[10]).length();l<0&&(u=-u),wi.copy(this);const p=1/u,x=1/d,y=1/h;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=x,wi.elements[5]*=x,wi.elements[6]*=x,wi.elements[8]*=y,wi.elements[9]*=y,wi.elements[10]*=y,n.setFromRotationMatrix(wi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,n,r,o,l,u,d=Bi,h=!1){const p=this.elements,x=2*l/(n-e),y=2*l/(r-o),g=(n+e)/(n-e),S=(r+o)/(r-o);let E,T;if(h)E=l/(u-l),T=u*l/(u-l);else if(d===Bi)E=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(d===ec)E=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=y,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,l,u,d=Bi,h=!1){const p=this.elements,x=2/(n-e),y=2/(r-o),g=-(n+e)/(n-e),S=-(r+o)/(r-o);let E,T;if(h)E=1/(u-l),T=u/(u-l);else if(d===Bi)E=-2/(u-l),T=-(u+l)/(u-l);else if(d===ec)E=-1/(u-l),T=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=y,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};rc.prototype.isMatrix4=!0;let en=rc;const Is=new ee,wi=new en,p_=new ee(0,0,0),m_=new ee(1,1,1),Tr=new ee,ml=new ee,Qn=new ee,wm=new en,Tm=new ia;class os{constructor(e=0,n=0,r=0,o=os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],h=o[1],p=o[5],x=o[9],y=o[2],g=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Et(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Tm.setFromEuler(this),this.setFromQuaternion(Tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}os.DEFAULT_ORDER="XYZ";class Bg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g_=0;const Am=new ee,Us=new ia,Ji=new en,gl=new ee,Ga=new ee,v_=new ee,x_=new ia,bm=new ee(1,0,0),Cm=new ee(0,1,0),Rm=new ee(0,0,1),Pm={type:"added"},__={type:"removed"},Fs={type:"childadded",child:null},Qu={type:"childremoved",child:null};class On extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new ee,n=new os,r=new ia,o=new ee(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new en},normalMatrix:{value:new gt}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(bm,e)}rotateY(e){return this.rotateOnAxis(Cm,e)}rotateZ(e){return this.rotateOnAxis(Rm,e)}translateOnAxis(e,n){return Am.copy(e).applyQuaternion(this.quaternion),this.position.add(Am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bm,e)}translateY(e){return this.translateOnAxis(Cm,e)}translateZ(e){return this.translateOnAxis(Rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?gl.copy(e):gl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Ga,gl,this.up):Ji.lookAt(gl,Ga,this.up),this.quaternion.setFromRotationMatrix(Ji),o&&(Ji.extractRotation(o.matrixWorld),Us.setFromRotationMatrix(Ji),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(__),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,v_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,x_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*r-l[8]*o,l[13]+=r-l[1]*n-l[5]*r-l[9]*o,l[14]+=o-l[2]*n-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,x=h.length;p<x;p++){const y=h[p];l(e.shapes,y)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(n){const d=u(e.geometries),h=u(e.materials),p=u(e.textures),x=u(e.images),y=u(e.shapes),g=u(e.skeletons),S=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),y.length>0&&(r.shapes=y),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const h=[];for(const p in d){const x=d[p];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}On.DEFAULT_UP=new ee(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $s extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S_={type:"move"};class ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const _=n.getJointPose(T,r),v=this._getHandJoint(p,T);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const x=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],g=x.position.distanceTo(y.position),S=.02,E=.005;p.inputState.pinching&&g>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(S_)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new $s;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},vl={h:0,s:0,l:0};function tf(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class mt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ct.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Ct.workingColorSpace){if(e=Ad(e,1),n=Et(n,0,1),r=Et(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=tf(u,l,e+1/3),this.g=tf(u,l,e),this.b=tf(u,l,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,n=fi){function r(l){l!==void 0&&parseFloat(l)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:ft("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=fi){const r=zg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Ct.workingToColorSpace(Nn.copy(this),e),Math.round(Et(Nn.r*255,0,255))*65536+Math.round(Et(Nn.g*255,0,255))*256+Math.round(Et(Nn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.workingToColorSpace(Nn.copy(this),n);const r=Nn.r,o=Nn.g,l=Nn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let h,p;const x=(d+u)/2;if(d===u)h=0,p=0;else{const y=u-d;switch(p=x<=.5?y/(u+d):y/(2-u-d),u){case r:h=(o-l)/y+(o<l?6:0);break;case o:h=(l-r)/y+2;break;case l:h=(r-o)/y+4;break}h/=6}return e.h=h,e.s=p,e.l=x,e}getRGB(e,n=Ct.workingColorSpace){return Ct.workingToColorSpace(Nn.copy(this),n),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=fi){Ct.workingToColorSpace(Nn.copy(this),e);const n=Nn.r,r=Nn.g,o=Nn.b;return e!==fi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+n,Ar.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Ar),e.getHSL(vl);const r=Qa(Ar.h,vl.h,n),o=Qa(Ar.s,vl.s,n),l=Qa(Ar.l,vl.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new mt;mt.NAMES=zg;class ac{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new mt(e),this.density=n}clone(){return new ac(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Cd extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ti=new ee,Qi=new ee,nf=new ee,er=new ee,ks=new ee,Os=new ee,Nm=new ee,rf=new ee,sf=new ee,af=new ee,of=new Qt,lf=new Qt,cf=new Qt;class hi{constructor(e=new ee,n=new ee,r=new ee){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Ti.subVectors(e,n),o.cross(Ti);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){Ti.subVectors(o,n),Qi.subVectors(r,n),nf.subVectors(e,n);const u=Ti.dot(Ti),d=Ti.dot(Qi),h=Ti.dot(nf),p=Qi.dot(Qi),x=Qi.dot(nf),y=u*p-d*d;if(y===0)return l.set(0,0,0),null;const g=1/y,S=(p*h-d*x)*g,E=(u*x-d*h)*g;return l.set(1-S-E,E,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,n,r,o,l,u,d,h){return this.getBarycoord(e,n,r,o,er)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,er.x),h.addScaledVector(u,er.y),h.addScaledVector(d,er.z),h)}static getInterpolatedAttribute(e,n,r,o,l,u){return of.setScalar(0),lf.setScalar(0),cf.setScalar(0),of.fromBufferAttribute(e,n),lf.fromBufferAttribute(e,r),cf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(of,l.x),u.addScaledVector(lf,l.y),u.addScaledVector(cf,l.z),u}static isFrontFacing(e,n,r,o){return Ti.subVectors(r,n),Qi.subVectors(e,n),Ti.cross(Qi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Ti.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return hi.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,d;ks.subVectors(o,r),Os.subVectors(l,r),rf.subVectors(e,r);const h=ks.dot(rf),p=Os.dot(rf);if(h<=0&&p<=0)return n.copy(r);sf.subVectors(e,o);const x=ks.dot(sf),y=Os.dot(sf);if(x>=0&&y<=x)return n.copy(o);const g=h*y-x*p;if(g<=0&&h>=0&&x<=0)return u=h/(h-x),n.copy(r).addScaledVector(ks,u);af.subVectors(e,l);const S=ks.dot(af),E=Os.dot(af);if(E>=0&&S<=E)return n.copy(l);const T=S*p-h*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),n.copy(r).addScaledVector(Os,d);const _=x*E-S*y;if(_<=0&&y-x>=0&&S-E>=0)return Nm.subVectors(l,o),d=(y-x)/(y-x+(S-E)),n.copy(o).addScaledVector(Nm,d);const v=1/(_+T+g);return u=T*v,d=g*v,n.copy(r).addScaledVector(ks,u).addScaledVector(Os,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ao{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Ai):Ai.fromBufferAttribute(l,u),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xl.copy(r.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wa),_l.subVectors(this.max,Wa),Bs.subVectors(e.a,Wa),zs.subVectors(e.b,Wa),Hs.subVectors(e.c,Wa),br.subVectors(zs,Bs),Cr.subVectors(Hs,zs),Kr.subVectors(Bs,Hs);let n=[0,-br.z,br.y,0,-Cr.z,Cr.y,0,-Kr.z,Kr.y,br.z,0,-br.x,Cr.z,0,-Cr.x,Kr.z,0,-Kr.x,-br.y,br.x,0,-Cr.y,Cr.x,0,-Kr.y,Kr.x,0];return!uf(n,Bs,zs,Hs,_l)||(n=[1,0,0,0,1,0,0,0,1],!uf(n,Bs,zs,Hs,_l))?!1:(Sl.crossVectors(br,Cr),n=[Sl.x,Sl.y,Sl.z],uf(n,Bs,zs,Hs,_l))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const tr=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Ai=new ee,xl=new ao,Bs=new ee,zs=new ee,Hs=new ee,br=new ee,Cr=new ee,Kr=new ee,Wa=new ee,_l=new ee,Sl=new ee,Zr=new ee;function uf(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Zr.fromArray(s,l);const d=o.x*Math.abs(Zr.x)+o.y*Math.abs(Zr.y)+o.z*Math.abs(Zr.z),h=e.dot(Zr),p=n.dot(Zr),x=r.dot(Zr);if(Math.max(-Math.max(h,p,x),Math.min(h,p,x))>d)return!1}return!0}const an=new ee,yl=new Rt;let y_=0;class ti extends ls{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:y_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Hx,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)yl.fromBufferAttribute(this,n),yl.applyMatrix3(e),this.setXY(n,yl.x,yl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)an.fromBufferAttribute(this,n),an.applyMatrix3(e),this.setXYZ(n,an.x,an.y,an.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)an.fromBufferAttribute(this,n),an.applyMatrix4(e),this.setXYZ(n,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)an.fromBufferAttribute(this,n),an.applyNormalMatrix(e),this.setXYZ(n,an.x,an.y,an.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)an.fromBufferAttribute(this,n),an.transformDirection(e),this.setXYZ(n,an.x,an.y,an.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=qs(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),o=Fn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),o=Fn(o,this.array),l=Fn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Hg extends ti{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Vg extends ti{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Yt extends ti{constructor(e,n,r){super(new Float32Array(e),n,r)}}const M_=new ao,Xa=new ee,ff=new ee;class oo{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):M_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xa.subVectors(e,this.center);const n=Xa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Xa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ff.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xa.copy(e.center).add(ff)),this.expandByPoint(Xa.copy(e.center).sub(ff))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let E_=0;const ui=new en,df=new On,Vs=new ee,ei=new ao,ja=new ao,gn=new ee;class Sn extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vx(e)?Vg:Hg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new gt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,n,r){return ui.makeTranslation(e,n,r),this.applyMatrix4(ui),this}scale(e,n,r){return ui.makeScale(e,n,r),this.applyMatrix4(ui),this}lookAt(e){return df.lookAt(e),df.updateMatrix(),this.applyMatrix4(df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Yt(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const d=n[l];ja.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(ei.min,ja.min),ei.expandByPoint(gn),gn.addVectors(ei.max,ja.max),ei.expandByPoint(gn)):(ei.expandByPoint(ja.min),ei.expandByPoint(ja.max))}ei.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)gn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(gn));if(n)for(let l=0,u=n.length;l<u;l++){const d=n[l],h=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)gn.fromBufferAttribute(d,p),h&&(Vs.fromBufferAttribute(e,p),gn.add(Vs)),o=Math.max(o,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ti(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],h=[];for(let w=0;w<r.count;w++)d[w]=new ee,h[w]=new ee;const p=new ee,x=new ee,y=new ee,g=new Rt,S=new Rt,E=new Rt,T=new ee,_=new ee;function v(w,I,V){p.fromBufferAttribute(r,w),x.fromBufferAttribute(r,I),y.fromBufferAttribute(r,V),g.fromBufferAttribute(l,w),S.fromBufferAttribute(l,I),E.fromBufferAttribute(l,V),x.sub(p),y.sub(p),S.sub(g),E.sub(g);const q=1/(S.x*E.y-E.x*S.y);isFinite(q)&&(T.copy(x).multiplyScalar(E.y).addScaledVector(y,-S.y).multiplyScalar(q),_.copy(y).multiplyScalar(S.x).addScaledVector(x,-E.x).multiplyScalar(q),d[w].add(T),d[I].add(T),d[V].add(T),h[w].add(_),h[I].add(_),h[V].add(_))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let w=0,I=N.length;w<I;++w){const V=N[w],q=V.start,J=V.count;for(let Q=q,X=q+J;Q<X;Q+=3)v(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const k=new ee,C=new ee,L=new ee,P=new ee;function F(w){L.fromBufferAttribute(o,w),P.copy(L);const I=d[w];k.copy(I),k.sub(L.multiplyScalar(L.dot(I))).normalize(),C.crossVectors(P,I);const q=C.dot(h[w])<0?-1:1;u.setXYZW(w,k.x,k.y,k.z,q)}for(let w=0,I=N.length;w<I;++w){const V=N[w],q=V.start,J=V.count;for(let Q=q,X=q+J;Q<X;Q+=3)F(e.getX(Q+0)),F(e.getX(Q+1)),F(e.getX(Q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new ee,l=new ee,u=new ee,d=new ee,h=new ee,p=new ee,x=new ee,y=new ee;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),T=e.getX(g+1),_=e.getX(g+2);o.fromBufferAttribute(n,E),l.fromBufferAttribute(n,T),u.fromBufferAttribute(n,_),x.subVectors(u,l),y.subVectors(o,l),x.cross(y),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,T),p.fromBufferAttribute(r,_),d.add(x),h.add(x),p.add(x),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(_,p.x,p.y,p.z)}else for(let g=0,S=n.count;g<S;g+=3)o.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),x.subVectors(u,l),y.subVectors(o,l),x.cross(y),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)gn.fromBufferAttribute(e,n),gn.normalize(),e.setXYZ(n,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,h){const p=d.array,x=d.itemSize,y=d.normalized,g=new p.constructor(h.length*x);let S=0,E=0;for(let T=0,_=h.length;T<_;T++){d.isInterleavedBufferAttribute?S=h[T]*d.data.stride+d.offset:S=h[T]*x;for(let v=0;v<x;v++)g[E++]=p[S++]}return new ti(g,x,y)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Sn,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],p=e(h,r);n.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const h=[],p=l[d];for(let x=0,y=p.length;x<y;x++){const g=p[x],S=e(g,r);h.push(S)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],x=[];for(let y=0,g=p.length;y<g;y++){const S=p[y];x.push(S.toJSON(e.data))}x.length>0&&(o[h]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(n))}const l=e.morphAttributes;for(const p in l){const x=[],y=l[p];for(let g=0,S=y.length;g<S;g++)x.push(y[g].clone(n));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,x=u.length;p<x;p++){const y=u[p];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hf=new ee,w_=new ee,T_=new gt;class Pr{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=hf.subVectors(r,n).cross(w_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(hf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||T_.getNormalMatrix(e),o=this.coplanarPoint(hf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let A_=0;class ra extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=na(),this.name="",this.type="Material",this.blending=Ja,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_g,this.blendDst=Sg,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ix,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qu,this.stencilZFail=qu,this.stencilZPass=qu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ft(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Pr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Rt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const nr=new ee,pf=new ee,Ml=new ee,El=new ee;class Rd{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=nr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,n),nr.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){pf.copy(e).add(n).multiplyScalar(.5),Ml.copy(n).sub(e).normalize(),El.copy(this.origin).sub(pf);const l=e.distanceTo(n)*.5,u=-this.direction.dot(Ml),d=El.dot(this.direction),h=-El.dot(Ml),p=El.lengthSq(),x=Math.abs(1-u*u);let y,g,S,E;if(x>0)if(y=u*h-d,g=u*d-h,E=l*x,y>=0)if(g>=-E)if(g<=E){const T=1/x;y*=T,g*=T,S=y*(y+u*g+2*d)+g*(u*y+g+2*h)+p}else g=l,y=Math.max(0,-(u*g+d)),S=-y*y+g*(g+2*h)+p;else g=-l,y=Math.max(0,-(u*g+d)),S=-y*y+g*(g+2*h)+p;else g<=-E?(y=Math.max(0,-(-u*l+d)),g=y>0?-l:Math.min(Math.max(-l,-h),l),S=-y*y+g*(g+2*h)+p):g<=E?(y=0,g=Math.min(Math.max(-l,-h),l),S=g*(g+2*h)+p):(y=Math.max(0,-(u*l+d)),g=y>0?l:Math.min(Math.max(-l,-h),l),S=-y*y+g*(g+2*h)+p);else g=u>0?-l:l,y=Math.max(0,-(u*g+d)),S=-y*y+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(pf).addScaledVector(Ml,g),S}intersectSphere(e,n){if(e.radius<0)return null;nr.subVectors(e.center,this.origin);const r=nr.dot(this.direction),o=nr.dot(nr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,d,h;const p=1/this.direction.x,x=1/this.direction.y,y=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),x>=0?(l=(e.min.y-g.y)*x,u=(e.max.y-g.y)*x):(l=(e.max.y-g.y)*x,u=(e.min.y-g.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),y>=0?(d=(e.min.z-g.z)*y,h=(e.max.z-g.z)*y):(d=(e.max.z-g.z)*y,h=(e.min.z-g.z)*y),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,n,r,o,l){const u=this.origin,d=this.direction,h=d.x,p=d.y,x=d.z,y=e.x-u.x,g=e.y-u.y,S=e.z-u.z,E=n.x-u.x,T=n.y-u.y,_=n.z-u.z,v=r.x-u.x,N=r.y-u.y,k=r.z-u.z,C=Math.abs(h),L=Math.abs(p),P=Math.abs(x);let F,w,I,V,q,J,Q,X,te,pe,ne,Z;if(C>=L&&C>=P?(I=h,J=y,te=E,Z=v,h>=0?(F=p,w=x,V=g,q=S,Q=T,X=_,pe=N,ne=k):(F=x,w=p,V=S,q=g,Q=_,X=T,pe=k,ne=N)):L>=P?(I=p,J=g,te=T,Z=N,p>=0?(F=x,w=h,V=S,q=y,Q=_,X=E,pe=k,ne=v):(F=h,w=x,V=y,q=S,Q=E,X=_,pe=v,ne=k)):(I=x,J=S,te=_,Z=k,x>=0?(F=h,w=p,V=y,q=g,Q=E,X=T,pe=v,ne=N):(F=p,w=h,V=g,q=y,Q=T,X=E,pe=N,ne=v)),I===0)return null;const j=F/I,B=w/I,D=1/I,re=V-j*J,Me=q-B*J,Ue=Q-j*te,ve=X-B*te,ye=pe-j*Z,$=ne-B*Z,ce=ye*ve-$*Ue,_e=re*$-Me*ye,Ve=Ue*Me-ve*re;if(o){if(ce<0||_e<0||Ve<0)return null}else if((ce<0||_e<0||Ve<0)&&(ce>0||_e>0||Ve>0))return null;const Ie=ce+_e+Ve;if(Ie===0)return null;const it=D*(ce*J+_e*te+Ve*Z);return(Ie>0?it<0:it>0)?null:this.at(it/Ie,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class is extends ra{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lm=new en,Jr=new Rd,wl=new oo,Dm=new ee,Tl=new ee,Al=new ee,bl=new ee,mf=new ee,Cl=new ee,Im=new ee,Rl=new ee;class xn extends On{constructor(e=new Sn,n=new is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Cl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const x=d[h],y=l[h];x!==0&&(mf.fromBufferAttribute(y,e),u?Cl.addScaledVector(mf,x):Cl.addScaledVector(mf.sub(n),x))}n.add(Cl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(l),Jr.copy(e.ray).recast(e.near),!(wl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(wl,Dm)===null||Jr.origin.distanceToSquared(Dm)>(e.far-e.near)**2))&&(Lm.copy(l).invert(),Jr.copy(e.ray).applyMatrix4(Lm),!(r.boundingBox!==null&&Jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Jr)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,p=l.attributes.uv,x=l.attributes.uv1,y=l.attributes.normal,g=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,T=g.length;E<T;E++){const _=g[E],v=u[_.materialIndex],N=Math.max(_.start,S.start),k=Math.min(d.count,Math.min(_.start+_.count,S.start+S.count));for(let C=N,L=k;C<L;C+=3){const P=d.getX(C),F=d.getX(C+1),w=d.getX(C+2);o=Pl(this,v,e,r,p,x,y,P,F,w),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let _=E,v=T;_<v;_+=3){const N=d.getX(_),k=d.getX(_+1),C=d.getX(_+2);o=Pl(this,u,e,r,p,x,y,N,k,C),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,T=g.length;E<T;E++){const _=g[E],v=u[_.materialIndex],N=Math.max(_.start,S.start),k=Math.min(h.count,Math.min(_.start+_.count,S.start+S.count));for(let C=N,L=k;C<L;C+=3){const P=C,F=C+1,w=C+2;o=Pl(this,v,e,r,p,x,y,P,F,w),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let _=E,v=T;_<v;_+=3){const N=_,k=_+1,C=_+2;o=Pl(this,u,e,r,p,x,y,N,k,C),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}}}function b_(s,e,n,r,o,l,u,d){let h;if(e.side===Yn?h=r.intersectTriangle(u,l,o,!0,d):h=r.intersectTriangle(o,l,u,e.side===rs,d),h===null)return null;Rl.copy(d),Rl.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(Rl);return p<n.near||p>n.far?null:{distance:p,point:Rl.clone(),object:s}}function Pl(s,e,n,r,o,l,u,d,h,p){s.getVertexPosition(d,Tl),s.getVertexPosition(h,Al),s.getVertexPosition(p,bl);const x=b_(s,e,n,r,Tl,Al,bl,Im);if(x){const y=new ee;hi.getBarycoord(Im,Tl,Al,bl,y),o&&(x.uv=hi.getInterpolatedAttribute(o,d,h,p,y,new Rt)),l&&(x.uv1=hi.getInterpolatedAttribute(l,d,h,p,y,new Rt)),u&&(x.normal=hi.getInterpolatedAttribute(u,d,h,p,y,new ee),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:d,b:h,c:p,normal:new ee,materialIndex:0};hi.getNormal(Tl,Al,bl,g.normal),x.face=g,x.barycoord=y}return x}class C_ extends _n{constructor(e=null,n=1,r=1,o,l,u,d,h,p=wn,x=wn,y,g){super(null,u,d,h,p,x,o,l,y,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qr=new oo,R_=new Rt(.5,.5),Nl=new ee;class Gg{constructor(e=new Pr,n=new Pr,r=new Pr,o=new Pr,l=new Pr,u=new Pr){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Bi,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],p=l[3],x=l[4],y=l[5],g=l[6],S=l[7],E=l[8],T=l[9],_=l[10],v=l[11],N=l[12],k=l[13],C=l[14],L=l[15];if(o[0].setComponents(p-u,S-x,v-E,L-N).normalize(),o[1].setComponents(p+u,S+x,v+E,L+N).normalize(),o[2].setComponents(p+d,S+y,v+T,L+k).normalize(),o[3].setComponents(p-d,S-y,v-T,L-k).normalize(),r)o[4].setComponents(h,g,_,C).normalize(),o[5].setComponents(p-h,S-g,v-_,L-C).normalize();else if(o[4].setComponents(p-h,S-g,v-_,L-C).normalize(),n===Bi)o[5].setComponents(p+h,S+g,v+_,L+C).normalize();else if(n===ec)o[5].setComponents(h,g,_,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const n=R_.distanceTo(e.center);return Qr.radius=.7071067811865476+n,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Nl.x=o.normal.x>0?e.max.x:e.min.x,Nl.y=o.normal.y>0?e.max.y:e.min.y,Nl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wg extends ra{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tc=new ee,nc=new ee,Um=new en,Ya=new Rd,Ll=new oo,gf=new ee,Fm=new ee;class P_ extends On{constructor(e=new Sn,n=new Wg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,l=n.count;o<l;o++)tc.fromBufferAttribute(n,o-1),nc.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=tc.distanceTo(nc);e.setAttribute("lineDistance",new Yt(r,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(o),Ll.radius+=l,e.ray.intersectsSphere(Ll)===!1)return;Um.copy(o).invert(),Ya.copy(e.ray).applyMatrix4(Um);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=this.isLineSegments?2:1,x=r.index,g=r.attributes.position;if(x!==null){const S=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let T=S,_=E-1;T<_;T+=p){const v=x.getX(T),N=x.getX(T+1),k=Dl(this,e,Ya,h,v,N,T);k&&n.push(k)}if(this.isLineLoop){const T=x.getX(E-1),_=x.getX(S),v=Dl(this,e,Ya,h,T,_,E-1);v&&n.push(v)}}else{const S=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let T=S,_=E-1;T<_;T+=p){const v=Dl(this,e,Ya,h,T,T+1,T);v&&n.push(v)}if(this.isLineLoop){const T=Dl(this,e,Ya,h,E-1,S,E-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Dl(s,e,n,r,o,l,u){const d=s.geometry.attributes.position;if(tc.fromBufferAttribute(d,o),nc.fromBufferAttribute(d,l),n.distanceSqToSegment(tc,nc,gf,Fm)>r)return;gf.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(gf);if(!(p<e.near||p>e.far))return{distance:p,point:Fm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const km=new ee,Om=new ee;class N_ extends P_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let o=0,l=n.count;o<l;o+=2)km.fromBufferAttribute(n,o),Om.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+km.distanceTo(Om);e.setAttribute("lineDistance",new Yt(r,1))}else ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pd extends ra{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bm=new en,fd=new Rd,Il=new oo,Ul=new ee;class Xg extends On{constructor(e=new Sn,n=new Pd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Il.copy(r.boundingSphere),Il.applyMatrix4(o),Il.radius+=l,e.ray.intersectsSphere(Il)===!1)return;Bm.copy(o).invert(),fd.copy(e.ray).applyMatrix4(Bm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=r.index,y=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let E=g,T=S;E<T;E++){const _=p.getX(E);Ul.fromBufferAttribute(y,_),zm(Ul,_,h,o,e,n,this)}}else{const g=Math.max(0,u.start),S=Math.min(y.count,u.start+u.count);for(let E=g,T=S;E<T;E++)Ul.fromBufferAttribute(y,E),zm(Ul,E,h,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function zm(s,e,n,r,o,l,u){const d=fd.distanceSqToPoint(s);if(d<n){const h=new ee;fd.closestPointToPoint(s,h),h.applyMatrix4(r);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class jg extends _n{constructor(e=[],n=ss,r,o,l,u,d,h,p,x){super(e,n,r,o,l,u,d,h,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L_ extends _n{constructor(e,n,r,o,l,u,d,h,p){super(e,n,r,o,l,u,d,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class so extends _n{constructor(e,n,r=Hi,o,l,u,d=wn,h=wn,p,x=ar,y=1){if(x!==ar&&x!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:y};super(g,o,l,u,d,h,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class D_ extends so{constructor(e,n=Hi,r=ss,o,l,u=wn,d=wn,h,p=ar){const x={width:e,height:e,depth:1},y=[x,x,x,x,x,x];super(e,e,n,r,o,l,u,d,h,p),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yg extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lo extends Sn{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],x=[],y=[];let g=0,S=0;E("z","y","x",-1,-1,r,n,e,u,l,0),E("z","y","x",1,-1,r,n,-e,u,l,1),E("x","z","y",1,1,e,r,n,o,u,2),E("x","z","y",1,-1,e,r,-n,o,u,3),E("x","y","z",1,-1,e,n,r,o,l,4),E("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(y,2));function E(T,_,v,N,k,C,L,P,F,w,I){const V=C/F,q=L/w,J=C/2,Q=L/2,X=P/2,te=F+1,pe=w+1;let ne=0,Z=0;const j=new ee;for(let B=0;B<pe;B++){const D=B*q-Q;for(let re=0;re<te;re++){const Me=re*V-J;j[T]=Me*N,j[_]=D*k,j[v]=X,p.push(j.x,j.y,j.z),j[T]=0,j[_]=0,j[v]=P>0?1:-1,x.push(j.x,j.y,j.z),y.push(re/F),y.push(1-B/w),ne+=1}}for(let B=0;B<w;B++)for(let D=0;D<F;D++){const re=g+D+te*B,Me=g+D+te*(B+1),Ue=g+(D+1)+te*(B+1),ve=g+(D+1)+te*B;h.push(re,Me,ve),h.push(Me,Ue,ve),Z+=6}d.addGroup(S,Z,I),S+=Z,g+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const Fl=new ee,kl=new ee,vf=new ee,Ol=new hi;class I_ extends Sn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const o=Math.pow(10,4),l=Math.cos(Js*n),u=e.getIndex(),d=e.getAttribute("position"),h=u?u.count:d.count,p=[0,0,0],x=["a","b","c"],y=new Array(3),g={},S=[];for(let E=0;E<h;E+=3){u?(p[0]=u.getX(E),p[1]=u.getX(E+1),p[2]=u.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:T,b:_,c:v}=Ol;if(T.fromBufferAttribute(d,p[0]),_.fromBufferAttribute(d,p[1]),v.fromBufferAttribute(d,p[2]),Ol.getNormal(vf),y[0]=`${Math.round(T.x*o)},${Math.round(T.y*o)},${Math.round(T.z*o)}`,y[1]=`${Math.round(_.x*o)},${Math.round(_.y*o)},${Math.round(_.z*o)}`,y[2]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,!(y[0]===y[1]||y[1]===y[2]||y[2]===y[0]))for(let N=0;N<3;N++){const k=(N+1)%3,C=y[N],L=y[k],P=Ol[x[N]],F=Ol[x[k]],w=`${C}_${L}`,I=`${L}_${C}`;I in g&&g[I]?(vf.dot(g[I].normal)<=l&&(S.push(P.x,P.y,P.z),S.push(F.x,F.y,F.z)),g[I]=null):w in g||(g[w]={index0:p[N],index1:p[k],normal:vf.clone()})}}for(const E in g)if(g[E]){const{index0:T,index1:_}=g[E];Fl.fromBufferAttribute(d,T),kl.fromBufferAttribute(d,_),S.push(Fl.x,Fl.y,Fl.z),S.push(kl.x,kl.y,kl.z)}this.setAttribute("position",new Yt(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Lr extends Sn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,d=Math.floor(r),h=Math.floor(o),p=d+1,x=h+1,y=e/d,g=n/h,S=[],E=[],T=[],_=[];for(let v=0;v<x;v++){const N=v*g-u;for(let k=0;k<p;k++){const C=k*y-l;E.push(C,-N,0),T.push(0,0,1),_.push(k/d),_.push(1-v/h)}}for(let v=0;v<h;v++)for(let N=0;N<d;N++){const k=N+p*v,C=N+p*(v+1),L=N+1+p*(v+1),P=N+1+p*v;S.push(k,C,P),S.push(C,L,P)}this.setIndex(S),this.setAttribute("position",new Yt(E,3)),this.setAttribute("normal",new Yt(T,3)),this.setAttribute("uv",new Yt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nd extends Sn{constructor(e=.5,n=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const d=[],h=[],p=[],x=[];let y=e;const g=(n-e)/o,S=new ee,E=new Rt;for(let T=0;T<=o;T++){for(let _=0;_<=r;_++){const v=l+_/r*u;S.x=y*Math.cos(v),S.y=y*Math.sin(v),h.push(S.x,S.y,S.z),p.push(0,0,1),E.x=(S.x/n+1)/2,E.y=(S.y/n+1)/2,x.push(E.x,E.y)}y+=g}for(let T=0;T<o;T++){const _=T*(r+1);for(let v=0;v<r;v++){const N=v+_,k=N,C=N+r+1,L=N+r+2,P=N+1;d.push(k,C,P),d.push(C,L,P)}}this.setIndex(d),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(p,3)),this.setAttribute("uv",new Yt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ld extends Sn{constructor(e=1,n=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+d,Math.PI);let p=0;const x=[],y=new ee,g=new ee,S=[],E=[],T=[],_=[];for(let v=0;v<=r;v++){const N=[],k=v/r,C=u+k*d,L=e*Math.cos(C),P=Math.sqrt(e*e-L*L);let F=0;v===0&&u===0?F=.5/n:v===r&&h===Math.PI&&(F=-.5/n);for(let w=0;w<=n;w++){const I=w/n,V=o+I*l;y.x=-P*Math.cos(V),y.y=L,y.z=P*Math.sin(V),E.push(y.x,y.y,y.z),g.copy(y).normalize(),T.push(g.x,g.y,g.z),_.push(I+F,1-k),N.push(p++)}x.push(N)}for(let v=0;v<r;v++)for(let N=0;N<n;N++){const k=x[v][N+1],C=x[v][N],L=x[v+1][N],P=x[v+1][N+1];(v!==0||u>0)&&S.push(k,C,P),(v!==r-1||h<Math.PI)&&S.push(C,L,P)}this.setIndex(S),this.setAttribute("position",new Yt(E,3)),this.setAttribute("normal",new Yt(T,3)),this.setAttribute("uv",new Yt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ld(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ic extends Sn{constructor(e=1,n=.4,r=12,o=48,l=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:d},r=Math.floor(r),o=Math.floor(o);const h=[],p=[],x=[],y=[],g=new ee,S=new ee,E=new ee;for(let T=0;T<=r;T++){const _=u+T/r*d;for(let v=0;v<=o;v++){const N=v/o*l;S.x=(e+n*Math.cos(_))*Math.cos(N),S.y=(e+n*Math.cos(_))*Math.sin(N),S.z=n*Math.sin(_),p.push(S.x,S.y,S.z),g.x=e*Math.cos(N),g.y=e*Math.sin(N),E.subVectors(S,g).normalize(),x.push(E.x,E.y,E.z),y.push(v/o),y.push(T/r)}}for(let T=1;T<=r;T++)for(let _=1;_<=o;_++){const v=(o+1)*T+_-1,N=(o+1)*(T-1)+_-1,k=(o+1)*(T-1)+_,C=(o+1)*T+_;h.push(v,N,C),h.push(N,k,C)}this.setIndex(h),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Dd extends Sn{constructor(e=1,n=.4,r=64,o=8,l=2,u=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:r,radialSegments:o,p:l,q:u},r=Math.floor(r),o=Math.floor(o);const d=[],h=[],p=[],x=[],y=new ee,g=new ee,S=new ee,E=new ee,T=new ee,_=new ee,v=new ee;for(let k=0;k<=r;++k){const C=k/r*l*Math.PI*2;N(C,l,u,e,S),N(C+.01,l,u,e,E),_.subVectors(E,S),v.addVectors(E,S),T.crossVectors(_,v),v.crossVectors(T,_),T.normalize(),v.normalize();for(let L=0;L<=o;++L){const P=L/o*Math.PI*2,F=-n*Math.cos(P),w=n*Math.sin(P);y.x=S.x+(F*v.x+w*T.x),y.y=S.y+(F*v.y+w*T.y),y.z=S.z+(F*v.z+w*T.z),h.push(y.x,y.y,y.z),g.subVectors(y,S).normalize(),p.push(g.x,g.y,g.z),x.push(k/r),x.push(L/o)}}for(let k=1;k<=r;k++)for(let C=1;C<=o;C++){const L=(o+1)*(k-1)+(C-1),P=(o+1)*k+(C-1),F=(o+1)*k+C,w=(o+1)*(k-1)+C;d.push(L,P,w),d.push(P,F,w)}this.setIndex(d),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(p,3)),this.setAttribute("uv",new Yt(x,2));function N(k,C,L,P,F){const w=Math.cos(k),I=Math.sin(k),V=L/C*k,q=Math.cos(V);F.x=P*(2+q)*.5*w,F.y=P*(2+q)*I*.5,F.z=P*Math.sin(V)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dd(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function ta(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(Hm(o))o.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(Hm(o[0])){const l=[];for(let u=0,d=o.length;u<d;u++)l[u]=o[u].clone();e[n][r]=l}else e[n][r]=o.slice();else e[n][r]=o}}return e}function kn(s){const e={};for(let n=0;n<s.length;n++){const r=ta(s[n]);for(const o in r)e[o]=r[o]}return e}function Hm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function U_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function qg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const F_={clone:ta,merge:kn};var k_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends ra{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k_,this.fragmentShader=O_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=U_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new mt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Rt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ee().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Qt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new gt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new en().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class B_ extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class z_ extends ra{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H_ extends ra{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xf={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Vm(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Vm(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Vm(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class V_{constructor(e,n,r){const o=this;let l=!1,u=0,d=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this._abortController=null,this.itemStart=function(x){d++,l===!1&&o.onStart!==void 0&&o.onStart(x,u,d),l=!0},this.itemEnd=function(x){u++,o.onProgress!==void 0&&o.onProgress(x,u,d),u===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(x){o.onError!==void 0&&o.onError(x)},this.resolveURL=function(x){return x=x.normalize("NFC"),h?h(x):x},this.setURLModifier=function(x){return h=x,this},this.addHandler=function(x,y){return p.push(x,y),this},this.removeHandler=function(x){const y=p.indexOf(x);return y!==-1&&p.splice(y,2),this},this.getHandler=function(x){for(let y=0,g=p.length;y<g;y+=2){const S=p[y],E=p[y+1];if(S.global&&(S.lastIndex=0),S.test(x))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const G_=new V_;class Id{constructor(e){this.manager=e!==void 0?e:G_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const r=this;return new Promise(function(o,l){r.load(e,o,n,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Id.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gs=new WeakMap;class W_ extends Id{constructor(e){super(e)}load(e,n,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=xf.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){n&&n(u),l.manager.itemEnd(e)},0);else{let y=Gs.get(u);y===void 0&&(y=[],Gs.set(u,y)),y.push({onLoad:n,onError:o})}return u}const d=io("img");function h(){x(),n&&n(this);const y=Gs.get(this)||[];for(let g=0;g<y.length;g++){const S=y[g];S.onLoad&&S.onLoad(this)}Gs.delete(this),l.manager.itemEnd(e)}function p(y){x(),o&&o(y),xf.remove(`image:${e}`);const g=Gs.get(this)||[];for(let S=0;S<g.length;S++){const E=g[S];E.onError&&E.onError(y)}Gs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function x(){d.removeEventListener("load",h,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",h,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),xf.add(`image:${e}`,d),l.manager.itemStart(e),d.src=e,d}}class X_ extends Id{constructor(e){super(e)}load(e,n,r,o){const l=new _n,u=new W_(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){l.image=d,l.needsUpdate=!0,n!==void 0&&n(l)},r,o),l}}const Bl=new ee,zl=new ia,Ii=new ee;class $g extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bl,zl,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,zl,Ii.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Bl,zl,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,zl,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new ee,Gm=new Rt,Wm=new Rt;class Xn extends $g{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,n){return this.getViewBounds(e,Gm,Wm),n.subVectors(Wm,Gm)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Js*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,n-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Kg extends $g{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=x*this.view.offsetY,h=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ws=-90,Xs=1;class j_ extends On{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Xn(Ws,Xs,e,n);o.layers=this.layers,this.add(o);const l=new Xn(Ws,Xs,e,n);l.layers=this.layers,this.add(l);const u=new Xn(Ws,Xs,e,n);u.layers=this.layers,this.add(u);const d=new Xn(Ws,Xs,e,n);d.layers=this.layers,this.add(d);const h=new Xn(Ws,Xs,e,n);h.layers=this.layers,this.add(h);const p=new Xn(Ws,Xs,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,d,h]=n;for(const p of n)this.remove(p);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ec)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,p,x]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(r,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(y,g,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Y_ extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class q_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ft("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const zd=class zd{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const l=this.elements;return l[0]=e,l[2]=n,l[1]=r,l[3]=o,this}};zd.prototype.isMatrix2=!0;let Xm=zd;function jm(s,e,n,r){const o=$_(r);switch(n){case Ig:return s*e;case Fg:return s*e/o.components*o.byteLength;case yd:return s*e/o.components*o.byteLength;case as:return s*e*2/o.components*o.byteLength;case Md:return s*e*2/o.components*o.byteLength;case Ug:return s*e*3/o.components*o.byteLength;case Ci:return s*e*4/o.components*o.byteLength;case Ed:return s*e*4/o.components*o.byteLength;case Xl:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yl:case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ff:case Of:return Math.max(s,16)*Math.max(e,8)/4;case Uf:case kf:return Math.max(s,8)*Math.max(e,8)/2;case Bf:case zf:case Vf:case Gf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hf:case Kl:case Wf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Yf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case qf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case $f:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Qf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ed:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case td:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case nd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case id:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case rd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case sd:case ad:case od:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ld:case cd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zl:case ud:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $_(s){switch(s){case di:case Pg:return{byteLength:1,components:1};case to:case Ng:case Vi:return{byteLength:2,components:1};case _d:case Sd:return{byteLength:2,components:4};case Hi:case xd:case Oi:return{byteLength:4,components:1};case Lg:case Dg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vd}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zg(){let s=null,e=!1,n=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),n(l,u)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function K_(s){const e=new WeakMap;function n(d,h){const p=d.array,x=d.usage,y=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,x),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,h,p){const x=h.array,y=h.updateRanges;if(s.bindBuffer(p,d),y.length===0)s.bufferSubData(p,0,x);else{y.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<y.length;S++){const E=y[g],T=y[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++g,y[g]=T)}y.length=g+1;for(let S=0,E=y.length;S<E;S++){const T=y[S];s.bufferSubData(p,T.start*x.BYTES_PER_ELEMENT,x,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,h),p.version=d.version}}return{get:o,remove:l,update:u}}var Z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J_=`#ifdef USE_ALPHAHASH
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
#endif`,Q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iS=`#ifdef USE_AOMAP
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
#endif`,rS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sS=`#ifdef USE_BATCHING
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
#endif`,aS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uS=`#ifdef USE_IRIDESCENCE
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
#endif`,fS=`#ifdef USE_BUMPMAP
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
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_S=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,SS=`#define PI 3.141592653589793
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
} // validated`,yS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,MS=`vec3 transformedNormal = objectNormal;
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
#endif`,ES=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bS="gl_FragColor = linearToOutputTexel( gl_FragColor );",CS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RS=`#ifdef USE_ENVMAP
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
#endif`,PS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NS=`#ifdef USE_ENVMAP
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
#endif`,LS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
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
#endif`,IS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,US=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OS=`#ifdef USE_GRADIENTMAP
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
}`,BS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,GS=`#ifdef USE_ENVMAP
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
#endif`,WS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qS=`PhysicalMaterial material;
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
#endif`,$S=`uniform sampler2D dfgLUT;
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
}`,KS=`
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
#endif`,ZS=`#if defined( RE_IndirectDiffuse )
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
#endif`,JS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oy=`#if defined( USE_POINTS_UV )
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
#endif`,ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hy=`#ifdef USE_MORPHTARGETS
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
#endif`,py=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sy=`#ifdef USE_NORMALMAP
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
#endif`,yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,My=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ay=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,by=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Py=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fy=`float getShadowMask() {
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
}`,ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oy=`#ifdef USE_SKINNING
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
#endif`,By=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zy=`#ifdef USE_SKINNING
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
#endif`,Hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xy=`#ifdef USE_TRANSMISSION
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
#endif`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jy=`uniform sampler2D t2D;
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
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`#include <common>
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
}`,rM=`#if DEPTH_PACKING == 3200
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
}`,sM=`#define DISTANCE
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
}`,aM=`#define DISTANCE
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`uniform float scale;
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
}`,uM=`uniform vec3 diffuse;
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
}`,fM=`#include <common>
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
}`,dM=`uniform vec3 diffuse;
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
}`,hM=`#define LAMBERT
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
}`,pM=`#define LAMBERT
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
}`,mM=`#define MATCAP
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
}`,gM=`#define MATCAP
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
}`,vM=`#define NORMAL
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
}`,xM=`#define NORMAL
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
}`,_M=`#define PHONG
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
}`,SM=`#define PHONG
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
}`,yM=`#define STANDARD
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
}`,MM=`#define STANDARD
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
}`,EM=`#define TOON
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
}`,wM=`#define TOON
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
}`,TM=`uniform float size;
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
}`,AM=`uniform vec3 diffuse;
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
}`,bM=`#include <common>
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
}`,CM=`uniform vec3 color;
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
}`,RM=`uniform float rotation;
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
}`,PM=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:Z_,alphahash_pars_fragment:J_,alphamap_fragment:Q_,alphamap_pars_fragment:eS,alphatest_fragment:tS,alphatest_pars_fragment:nS,aomap_fragment:iS,aomap_pars_fragment:rS,batching_pars_vertex:sS,batching_vertex:aS,begin_vertex:oS,beginnormal_vertex:lS,bsdfs:cS,iridescence_fragment:uS,bumpmap_pars_fragment:fS,clipping_planes_fragment:dS,clipping_planes_pars_fragment:hS,clipping_planes_pars_vertex:pS,clipping_planes_vertex:mS,color_fragment:gS,color_pars_fragment:vS,color_pars_vertex:xS,color_vertex:_S,common:SS,cube_uv_reflection_fragment:yS,defaultnormal_vertex:MS,displacementmap_pars_vertex:ES,displacementmap_vertex:wS,emissivemap_fragment:TS,emissivemap_pars_fragment:AS,colorspace_fragment:bS,colorspace_pars_fragment:CS,envmap_fragment:RS,envmap_common_pars_fragment:PS,envmap_pars_fragment:NS,envmap_pars_vertex:LS,envmap_physical_pars_fragment:GS,envmap_vertex:DS,fog_vertex:IS,fog_pars_vertex:US,fog_fragment:FS,fog_pars_fragment:kS,gradientmap_pars_fragment:OS,lightmap_pars_fragment:BS,lights_lambert_fragment:zS,lights_lambert_pars_fragment:HS,lights_pars_begin:VS,lights_toon_fragment:WS,lights_toon_pars_fragment:XS,lights_phong_fragment:jS,lights_phong_pars_fragment:YS,lights_physical_fragment:qS,lights_physical_pars_fragment:$S,lights_fragment_begin:KS,lights_fragment_maps:ZS,lights_fragment_end:JS,lightprobes_pars_fragment:QS,logdepthbuf_fragment:ey,logdepthbuf_pars_fragment:ty,logdepthbuf_pars_vertex:ny,logdepthbuf_vertex:iy,map_fragment:ry,map_pars_fragment:sy,map_particle_fragment:ay,map_particle_pars_fragment:oy,metalnessmap_fragment:ly,metalnessmap_pars_fragment:cy,morphinstance_vertex:uy,morphcolor_vertex:fy,morphnormal_vertex:dy,morphtarget_pars_vertex:hy,morphtarget_vertex:py,normal_fragment_begin:my,normal_fragment_maps:gy,normal_pars_fragment:vy,normal_pars_vertex:xy,normal_vertex:_y,normalmap_pars_fragment:Sy,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:My,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:wy,opaque_fragment:Ty,packing:Ay,premultiplied_alpha_fragment:by,project_vertex:Cy,dithering_fragment:Ry,dithering_pars_fragment:Py,roughnessmap_fragment:Ny,roughnessmap_pars_fragment:Ly,shadowmap_pars_fragment:Dy,shadowmap_pars_vertex:Iy,shadowmap_vertex:Uy,shadowmask_pars_fragment:Fy,skinbase_vertex:ky,skinning_pars_vertex:Oy,skinning_vertex:By,skinnormal_vertex:zy,specularmap_fragment:Hy,specularmap_pars_fragment:Vy,tonemapping_fragment:Gy,tonemapping_pars_fragment:Wy,transmission_fragment:Xy,transmission_pars_fragment:jy,uv_pars_fragment:Yy,uv_pars_vertex:qy,uv_vertex:$y,worldpos_vertex:Ky,background_vert:Zy,background_frag:Jy,backgroundCube_vert:Qy,backgroundCube_frag:eM,cube_vert:tM,cube_frag:nM,depth_vert:iM,depth_frag:rM,distance_vert:sM,distance_frag:aM,equirect_vert:oM,equirect_frag:lM,linedashed_vert:cM,linedashed_frag:uM,meshbasic_vert:fM,meshbasic_frag:dM,meshlambert_vert:hM,meshlambert_frag:pM,meshmatcap_vert:mM,meshmatcap_frag:gM,meshnormal_vert:vM,meshnormal_frag:xM,meshphong_vert:_M,meshphong_frag:SM,meshphysical_vert:yM,meshphysical_frag:MM,meshtoon_vert:EM,meshtoon_frag:wM,points_vert:TM,points_frag:AM,shadow_vert:bM,shadow_frag:CM,sprite_vert:RM,sprite_frag:PM},ze={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Fi={basic:{uniforms:kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:kn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:kn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:kn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new mt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:kn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:kn([ze.points,ze.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:kn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:kn([ze.common,ze.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:kn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:kn([ze.sprite,ze.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:kn([ze.common,ze.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:kn([ze.lights,ze.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Fi.physical={uniforms:kn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Hl={r:0,b:0,g:0},NM=new en,Jg=new gt;Jg.set(-1,0,0,0,1,0,0,0,1);function LM(s,e,n,r,o,l){const u=new mt(0);let d=o===!0?0:1,h,p,x=null,y=0,g=null;function S(N){let k=N.isScene===!0?N.background:null;if(k&&k.isTexture){const C=N.backgroundBlurriness>0;k=e.get(k,C)}return k}function E(N){let k=!1;const C=S(N);C===null?_(u,d):C&&C.isColor&&(_(C,1),k=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||k)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function T(N,k){const C=S(k);C&&(C.isCubeTexture||C.mapping===sc)?(p===void 0&&(p=new xn(new lo(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:ta(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(NM.makeRotationFromEuler(k.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Jg),p.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Bt,(x!==C||y!==C.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,x=C,y=C.version,g=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new xn(new Lr(2,2),new qn({name:"BackgroundMaterial",uniforms:ta(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Bt,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||y!==C.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,x=C,y=C.version,g=s.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null))}function _(N,k){N.getRGB(Hl,qg(s)),n.buffers.color.setClear(Hl.r,Hl.g,Hl.b,k,l)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(N,k=1){u.set(N),d=k,_(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(N){d=N,_(u,d)},render:E,addToRenderList:T,dispose:v}}function DM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function d(q,J,Q,X,te){let pe=!1;const ne=y(q,X,Q,J);l!==ne&&(l=ne,p(l.object)),pe=S(q,X,Q,te),pe&&E(q,X,Q,te),te!==null&&e.update(te,s.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,C(q,J,Q,X),te!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function h(){return s.createVertexArray()}function p(q){return s.bindVertexArray(q)}function x(q){return s.deleteVertexArray(q)}function y(q,J,Q,X){const te=X.wireframe===!0;let pe=r[J.id];pe===void 0&&(pe={},r[J.id]=pe);const ne=q.isInstancedMesh===!0?q.id:0;let Z=pe[ne];Z===void 0&&(Z={},pe[ne]=Z);let j=Z[Q.id];j===void 0&&(j={},Z[Q.id]=j);let B=j[te];return B===void 0&&(B=g(h()),j[te]=B),B}function g(q){const J=[],Q=[],X=[];for(let te=0;te<n;te++)J[te]=0,Q[te]=0,X[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:Q,attributeDivisors:X,object:q,attributes:{},index:null}}function S(q,J,Q,X){const te=l.attributes,pe=J.attributes;let ne=0;const Z=Q.getAttributes();for(const j in Z)if(Z[j].location>=0){const D=te[j];let re=pe[j];if(re===void 0&&(j==="instanceMatrix"&&q.instanceMatrix&&(re=q.instanceMatrix),j==="instanceColor"&&q.instanceColor&&(re=q.instanceColor)),D===void 0||D.attribute!==re||re&&D.data!==re.data)return!0;ne++}return l.attributesNum!==ne||l.index!==X}function E(q,J,Q,X){const te={},pe=J.attributes;let ne=0;const Z=Q.getAttributes();for(const j in Z)if(Z[j].location>=0){let D=pe[j];D===void 0&&(j==="instanceMatrix"&&q.instanceMatrix&&(D=q.instanceMatrix),j==="instanceColor"&&q.instanceColor&&(D=q.instanceColor));const re={};re.attribute=D,D&&D.data&&(re.data=D.data),te[j]=re,ne++}l.attributes=te,l.attributesNum=ne,l.index=X}function T(){const q=l.newAttributes;for(let J=0,Q=q.length;J<Q;J++)q[J]=0}function _(q){v(q,0)}function v(q,J){const Q=l.newAttributes,X=l.enabledAttributes,te=l.attributeDivisors;Q[q]=1,X[q]===0&&(s.enableVertexAttribArray(q),X[q]=1),te[q]!==J&&(s.vertexAttribDivisor(q,J),te[q]=J)}function N(){const q=l.newAttributes,J=l.enabledAttributes;for(let Q=0,X=J.length;Q<X;Q++)J[Q]!==q[Q]&&(s.disableVertexAttribArray(Q),J[Q]=0)}function k(q,J,Q,X,te,pe,ne){ne===!0?s.vertexAttribIPointer(q,J,Q,te,pe):s.vertexAttribPointer(q,J,Q,X,te,pe)}function C(q,J,Q,X){T();const te=X.attributes,pe=Q.getAttributes(),ne=J.defaultAttributeValues;for(const Z in pe){const j=pe[Z];if(j.location>=0){let B=te[Z];if(B===void 0&&(Z==="instanceMatrix"&&q.instanceMatrix&&(B=q.instanceMatrix),Z==="instanceColor"&&q.instanceColor&&(B=q.instanceColor)),B!==void 0){const D=B.normalized,re=B.itemSize,Me=e.get(B);if(Me===void 0)continue;const Ue=Me.buffer,ve=Me.type,ye=Me.bytesPerElement,$=ve===s.INT||ve===s.UNSIGNED_INT||B.gpuType===xd;if(B.isInterleavedBufferAttribute){const ce=B.data,_e=ce.stride,Ve=B.offset;if(ce.isInstancedInterleavedBuffer){for(let Ie=0;Ie<j.locationSize;Ie++)v(j.location+Ie,ce.meshPerAttribute);q.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ie=0;Ie<j.locationSize;Ie++)_(j.location+Ie);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Ie=0;Ie<j.locationSize;Ie++)k(j.location+Ie,re/j.locationSize,ve,D,_e*ye,(Ve+re/j.locationSize*Ie)*ye,$)}else{if(B.isInstancedBufferAttribute){for(let ce=0;ce<j.locationSize;ce++)v(j.location+ce,B.meshPerAttribute);q.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ce=0;ce<j.locationSize;ce++)_(j.location+ce);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let ce=0;ce<j.locationSize;ce++)k(j.location+ce,re/j.locationSize,ve,D,re*ye,re/j.locationSize*ce*ye,$)}}else if(ne!==void 0){const D=ne[Z];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(j.location,D);break;case 3:s.vertexAttrib3fv(j.location,D);break;case 4:s.vertexAttrib4fv(j.location,D);break;default:s.vertexAttrib1fv(j.location,D)}}}}N()}function L(){I();for(const q in r){const J=r[q];for(const Q in J){const X=J[Q];for(const te in X){const pe=X[te];for(const ne in pe)x(pe[ne].object),delete pe[ne];delete X[te]}}delete r[q]}}function P(q){if(r[q.id]===void 0)return;const J=r[q.id];for(const Q in J){const X=J[Q];for(const te in X){const pe=X[te];for(const ne in pe)x(pe[ne].object),delete pe[ne];delete X[te]}}delete r[q.id]}function F(q){for(const J in r){const Q=r[J];for(const X in Q){const te=Q[X];if(te[q.id]===void 0)continue;const pe=te[q.id];for(const ne in pe)x(pe[ne].object),delete pe[ne];delete te[q.id]}}}function w(q){for(const J in r){const Q=r[J],X=q.isInstancedMesh===!0?q.id:0,te=Q[X];if(te!==void 0){for(const pe in te){const ne=te[pe];for(const Z in ne)x(ne[Z].object),delete ne[Z];delete te[pe]}delete Q[X],Object.keys(Q).length===0&&delete r[J]}}}function I(){V(),u=!0,l!==o&&(l=o,p(l.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:I,resetDefaultState:V,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:_,disableUnusedAttributes:N}}function IM(s,e,n){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),n.update(p,r,1)}function u(h,p,x){x!==0&&(s.drawArraysInstanced(r,h,p,x),n.update(p,r,x))}function d(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,x);let g=0;for(let S=0;S<x;S++)g+=p[S];n.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function UM(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Ci&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const w=F===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==di&&F!==Oi&&!w&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const x=h(p);x!==p&&(ft("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const y=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),k=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:N,maxVaryings:k,maxFragmentUniforms:C,maxSamples:L,samples:P}}function FM(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new Pr,d=new gt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const S=y.length!==0||g||r!==0||o;return o=g,r=y.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,g){n=x(y,g,0)},this.setState=function(y,g,S){const E=y.clippingPlanes,T=y.clipIntersection,_=y.clipShadows,v=s.get(y);if(!o||E===null||E.length===0||l&&!_)l?x(null):p();else{const N=l?0:r,k=N*4;let C=v.clippingState||null;h.value=C,C=x(E,g,k,S);for(let L=0;L!==k;++L)C[L]=n[L];v.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function p(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(y,g,S,E){const T=y!==null?y.length:0;let _=null;if(T!==0){if(_=h.value,E!==!0||_===null){const v=S+T*4,N=g.matrixWorldInverse;d.getNormalMatrix(N),(_===null||_.length<v)&&(_=new Float32Array(v));for(let k=0,C=S;k!==T;++k,C+=4)u.copy(y[k]).applyMatrix4(N,d),u.normal.toArray(_,C),_[C+3]=u.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,_}}const Ks=4,kM=6,OM=20,BM=256,qa=new Kg,Ym=new mt;let _f=null,Sf=0,yf=0,Mf=!1;const zM=new ee,es=new ee;class qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:u=256,position:d=zM}=l;_f=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,d),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_f,Sf,yf),this._renderer.xr.enabled=Mf,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ss||e.mapping===ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_f=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),yf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:on,minFilter:on,generateMipmaps:!1,type:Vi,format:Ci,colorSpace:Jl,depthBuffer:!1},o=$m(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$m(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=HM(l)),this._blurMaterial=GM(l,e,n),this._ggxMaterial=VM(l,e,n)}return o}_compileMaterial(e){const n=new xn(new Sn,e);this._renderer.compile(n,qa)}_sceneToCubeUV(e,n,r,o,l){const h=new Xn(90,1,n,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,S=y.toneMapping;y.getClearColor(Ym),y.toneMapping=zi,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xn(new lo,new is({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,_=T.material;let v=!1;const N=e.background;N?N.isColor&&(_.color.copy(N),e.background=null,v=!0):(_.color.copy(Ym),v=!0);for(let k=0;k<6;k++){const C=k%3;C===0?(h.up.set(0,p[k],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+x[k],l.y,l.z)):C===1?(h.up.set(0,0,p[k]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+x[k],l.z)):(h.up.set(0,p[k],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+x[k]));const L=this._cubeSize;js(o,C*L,k>2?L:0,L,L),y.setRenderTarget(o),v&&y.render(T,h),y.render(e,h)}y.toneMapping=S,y.autoClear=g,e.background=N}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ss||e.mapping===ea;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Km());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;js(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,qa)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),y=Math.sqrt(p*p-x*x),g=p*1.25,S=y*g,{_lodMax:E}=this,T=this._sizeLods[r],_=3*T*(r>E-Ks?r-E+Ks:0),v=4*(this._cubeSize-T);h.envMap.value=e.texture,h.roughness.value=S,h.mipInt.value=E-n,js(l,_,v,3*T,2*T),o.setRenderTarget(l),o.render(d,qa),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=E-r,js(e,_,v,3*T,2*T),o.setRenderTarget(e),o.render(d,qa)}_blur(e,n,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,n,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,n,r,o,l){const u=this._renderer,d=this._blurMaterial,h=this._lodMeshes[o];h.material=d;const p=d.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-r;const x=this._sizeLods[o],y=3*x*(o>this._lodMax-Ks?o-this._lodMax+Ks:0),g=4*(this._cubeSize-x);js(n,y,g,3*x,2*x),u.setRenderTarget(n),u.render(h,qa)}}function HM(s){const e=[],n=[];let r=s;const o=s-Ks+1+kM;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const d=1/(u-2),h=-d,p=1+d,x=[h,h,p,h,p,p,h,h,p,p,h,p],y=6,g=6,S=3,E=new Float32Array(S*g*y),T=new Float32Array(S*g*y);for(let v=0;v<y;v++){const N=v%3*2/3-1,k=v>2?0:-1,C=[N,k,0,N+2/3,k,0,N+2/3,k+1,0,N,k,0,N+2/3,k+1,0,N,k+1,0];E.set(C,S*g*v);for(let L=0;L<g;L++){const P=x[L*2]*2-1,F=x[L*2+1]*2-1;v===0?es.set(1,F,P):v===1?es.set(-P,1,-F):v===2?es.set(-P,F,1):v===3?es.set(-1,F,-P):v===4?es.set(-P,-1,F):es.set(P,F,-1),es.toArray(T,(v*g+L)*S)}}const _=new Sn;_.setAttribute("position",new ti(E,S)),_.setAttribute("outputDirection",new ti(T,S)),n.push(new xn(_,null)),r>Ks&&r--}return{lodMeshes:n,sizeLods:e}}function $m(s,e,n){const r=new Ri(s,e,n);return r.texture.mapping=sc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function js(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function VM(s,e,n){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function GM(s,e,n){return new qn({name:"SphericalGaussianBlur",defines:{SAMPLES:OM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Km(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Zm(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Qg extends Ri{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new jg(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new lo(5,5,5),l=new qn({name:"CubemapFromEquirect",uniforms:ta(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:rr});l.uniforms.tEquirect.value=n;const u=new xn(o,l),d=n.minFilter;return n.minFilter===ts&&(n.minFilter=on),new j_(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}function WM(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?u(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===Xu||S===ju)if(e.has(g)){const E=e.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const T=new Qg(E.height);return T.fromEquirectangularTexture(s,g),e.set(g,T),g.addEventListener("dispose",p),d(T.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,E=S===Xu||S===ju,T=S===ss||S===ea;if(E||T){let _=n.get(g);const v=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new qm(s)),_=E?r.fromEquirectangular(g,_):r.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),_.texture;if(_!==void 0)return _.texture;{const N=g.image;return E&&N&&N.height>0||T&&N&&h(N)?(r===null&&(r=new qm(s)),_=E?r.fromEquirectangular(g):r.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),g.addEventListener("dispose",x),_.texture):null}}}return g}function d(g,S){return S===Xu?g.mapping=ss:S===ju&&(g.mapping=ea),g}function h(g){let S=0;const E=6;for(let T=0;T<E;T++)g[T]!==void 0&&S++;return S===E}function p(g){const S=g.target;S.removeEventListener("dispose",p);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function x(g){const S=g.target;S.removeEventListener("dispose",x);const E=n.get(S);E!==void 0&&(n.delete(S),E.dispose())}function y(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:y}}function XM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Zs("WebGLRenderer: "+r+" extension not supported."),o}}}function jM(s,e,n,r){const o={},l=new WeakMap;function u(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function d(y,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function h(y){const g=y.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function p(y){const g=[],S=y.index,E=y.attributes.position;let T=0;if(E===void 0)return;if(S!==null){const N=S.array;T=S.version;for(let k=0,C=N.length;k<C;k+=3){const L=N[k+0],P=N[k+1],F=N[k+2];g.push(L,P,P,F,F,L)}}else{const N=E.array;T=E.version;for(let k=0,C=N.length/3-1;k<C;k+=3){const L=k+0,P=k+1,F=k+2;g.push(L,P,P,F,F,L)}}const _=new(E.count>=65535?Vg:Hg)(g,1);_.version=T;const v=l.get(y);v&&e.remove(v),l.set(y,_)}function x(y){const g=l.get(y);if(g){const S=y.index;S!==null&&g.version<S.version&&p(y)}else p(y);return l.get(y)}return{get:d,update:h,getWireframeAttribute:x}}function YM(s,e,n){let r;function o(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function h(y,g){s.drawElements(r,g,l,y*u),n.update(g,r,1)}function p(y,g,S){S!==0&&(s.drawElementsInstanced(r,g,l,y*u,S),n.update(g,r,S))}function x(y,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,y,0,S);let T=0;for(let _=0;_<S;_++)T+=g[_];n.update(T,r,1)}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=x}function qM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:Ft("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function $M(s,e,n){const r=new WeakMap,o=new Qt;function l(u,d,h){const p=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=x!==void 0?x.length:0;let g=r.get(d);if(g===void 0||g.count!==y){let V=function(){w.dispose(),r.delete(d),d.removeEventListener("dispose",V)};var S=V;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],k=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),_===!0&&(C=3);let L=d.attributes.position.count*C,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const F=new Float32Array(L*P*4*y),w=new Og(F,L,P,y);w.type=Oi,w.needsUpdate=!0;const I=C*4;for(let q=0;q<y;q++){const J=v[q],Q=N[q],X=k[q],te=L*P*4*q;for(let pe=0;pe<J.count;pe++){const ne=pe*I;E===!0&&(o.fromBufferAttribute(J,pe),F[te+ne+0]=o.x,F[te+ne+1]=o.y,F[te+ne+2]=o.z,F[te+ne+3]=0),T===!0&&(o.fromBufferAttribute(Q,pe),F[te+ne+4]=o.x,F[te+ne+5]=o.y,F[te+ne+6]=o.z,F[te+ne+7]=0),_===!0&&(o.fromBufferAttribute(X,pe),F[te+ne+8]=o.x,F[te+ne+9]=o.y,F[te+ne+10]=o.z,F[te+ne+11]=X.itemSize===4?o.w:1)}}g={count:y,texture:w,size:new Rt(L,P)},r.set(d,g),d.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let _=0;_<p.length;_++)E+=p[_];const T=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function KM(s,e,n,r,o){let l=new WeakMap;function u(p){const x=o.render.frame,y=p.geometry,g=e.get(p,y);if(l.get(g)!==x&&(e.update(g),l.set(g,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==x&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,x))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==x&&(S.update(),l.set(S,x))}return g}function d(){l=new WeakMap}function h(p){const x=p.target;x.removeEventListener("dispose",h),r.releaseStatesOfObject(x),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:u,dispose:d}}const ZM={[Mg]:"LINEAR_TONE_MAPPING",[Eg]:"REINHARD_TONE_MAPPING",[wg]:"CINEON_TONE_MAPPING",[Tg]:"ACES_FILMIC_TONE_MAPPING",[bg]:"AGX_TONE_MAPPING",[Cg]:"NEUTRAL_TONE_MAPPING",[Ag]:"CUSTOM_TONE_MAPPING"};function JM(s,e,n,r,o,l){const u=new Ri(e,n,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,h=null;const p=new Sn;p.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Yt([0,2,0,0,2,0],2));const x=new B_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new xn(p,x),g=new Kg(-1,1,1,-1,0,1);let S=null,E=null,T=!1,_,v=null,N=[],k=!1;this.setSize=function(C,L){u.setSize(C,L),d!==null&&d.setSize(C,L),h!==null&&h.setSize(C,L);for(let P=0;P<N.length;P++){const F=N[P];F.setSize&&F.setSize(C,L)}},this.setEffects=function(C){N=C,k=N.length>0&&N[0].isRenderPass===!0;const L=u.width,P=u.height;N.length>0&&d===null&&(d=new Ri(L,P,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),h=new Ri(L,P,{type:Vi,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<N.length;F++){const w=N[F];w.setSize&&w.setSize(L,P)}},this.begin=function(C,L){if(T||C.toneMapping===zi&&N.length===0)return!1;if(v=L,L!==null){const P=L.width,F=L.height;(u.width!==P||u.height!==F)&&this.setSize(P,F)}return k===!1&&C.setRenderTarget(u),_=C.toneMapping,C.toneMapping=zi,!0},this.hasRenderPass=function(){return k},this.end=function(C,L){C.toneMapping=_,T=!0;let P=u,F=d;for(let w=0;w<N.length;w++){const I=N[w];I.enabled!==!1&&(I.render(C,F,P,L),I.needsSwap!==!1&&(P=F,F=F===d?h:d))}if(S!==C.outputColorSpace||E!==C.toneMapping){S=C.outputColorSpace,E=C.toneMapping,x.defines={},Ct.getTransfer(S)===Bt&&(x.defines.SRGB_TRANSFER="");const w=ZM[E];w&&(x.defines[w]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(v),C.render(y,g),v=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),h!==null&&h.dispose(),p.dispose(),x.dispose()}}const e0=new _n,dd=new so(1,1),t0=new Og,n0=new h_,i0=new jg,Jm=[],Qm=[],eg=new Float32Array(16),tg=new Float32Array(9),ng=new Float32Array(4);function sa(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=Jm[o];if(l===void 0&&(l=new Float32Array(o),Jm[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(l,d)}return l}function fn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function dn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function lc(s,e){let n=Qm[e];n===void 0&&(n=new Int32Array(e),Qm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function QM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function eE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;s.uniform2fv(this.addr,e),dn(n,e)}}function tE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(fn(n,e))return;s.uniform3fv(this.addr,e),dn(n,e)}}function nE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;s.uniform4fv(this.addr,e),dn(n,e)}}function iE(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(fn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(n,e)}else{if(fn(n,r))return;ng.set(r),s.uniformMatrix2fv(this.addr,!1,ng),dn(n,r)}}function rE(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(fn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(n,e)}else{if(fn(n,r))return;tg.set(r),s.uniformMatrix3fv(this.addr,!1,tg),dn(n,r)}}function sE(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(fn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(n,e)}else{if(fn(n,r))return;eg.set(r),s.uniformMatrix4fv(this.addr,!1,eg),dn(n,r)}}function aE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function oE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;s.uniform2iv(this.addr,e),dn(n,e)}}function lE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(fn(n,e))return;s.uniform3iv(this.addr,e),dn(n,e)}}function cE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;s.uniform4iv(this.addr,e),dn(n,e)}}function uE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function fE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;s.uniform2uiv(this.addr,e),dn(n,e)}}function dE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(fn(n,e))return;s.uniform3uiv(this.addr,e),dn(n,e)}}function hE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;s.uniform4uiv(this.addr,e),dn(n,e)}}function pE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(dd.compareFunction=n.isReversedDepthBuffer()?Td:wd,l=dd):l=e0,n.setTexture2D(e||l,o)}function mE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||n0,o)}function gE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||i0,o)}function vE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||t0,o)}function xE(s){switch(s){case 5126:return QM;case 35664:return eE;case 35665:return tE;case 35666:return nE;case 35674:return iE;case 35675:return rE;case 35676:return sE;case 5124:case 35670:return aE;case 35667:case 35671:return oE;case 35668:case 35672:return lE;case 35669:case 35673:return cE;case 5125:return uE;case 36294:return fE;case 36295:return dE;case 36296:return hE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return mE;case 35680:case 36300:case 36308:case 36293:return gE;case 36289:case 36303:case 36311:case 36292:return vE}}function _E(s,e){s.uniform1fv(this.addr,e)}function SE(s,e){const n=sa(e,this.size,2);s.uniform2fv(this.addr,n)}function yE(s,e){const n=sa(e,this.size,3);s.uniform3fv(this.addr,n)}function ME(s,e){const n=sa(e,this.size,4);s.uniform4fv(this.addr,n)}function EE(s,e){const n=sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function wE(s,e){const n=sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function TE(s,e){const n=sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function AE(s,e){s.uniform1iv(this.addr,e)}function bE(s,e){s.uniform2iv(this.addr,e)}function CE(s,e){s.uniform3iv(this.addr,e)}function RE(s,e){s.uniform4iv(this.addr,e)}function PE(s,e){s.uniform1uiv(this.addr,e)}function NE(s,e){s.uniform2uiv(this.addr,e)}function LE(s,e){s.uniform3uiv(this.addr,e)}function DE(s,e){s.uniform4uiv(this.addr,e)}function IE(s,e,n){const r=this.cache,o=e.length,l=lc(n,o);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=dd:u=e0;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,l[d])}function UE(s,e,n){const r=this.cache,o=e.length,l=lc(n,o);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||n0,l[u])}function FE(s,e,n){const r=this.cache,o=e.length,l=lc(n,o);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||i0,l[u])}function kE(s,e,n){const r=this.cache,o=e.length,l=lc(n,o);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||t0,l[u])}function OE(s){switch(s){case 5126:return _E;case 35664:return SE;case 35665:return yE;case 35666:return ME;case 35674:return EE;case 35675:return wE;case 35676:return TE;case 5124:case 35670:return AE;case 35667:case 35671:return bE;case 35668:case 35672:return CE;case 35669:case 35673:return RE;case 5125:return PE;case 36294:return NE;case 36295:return LE;case 36296:return DE;case 35678:case 36198:case 36298:case 36306:case 35682:return IE;case 35679:case 36299:case 36307:return UE;case 35680:case 36300:case 36308:case 36293:return FE;case 36289:case 36303:case 36311:case 36292:return kE}}class BE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=xE(n.type)}}class zE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=OE(n.type)}}class HE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,n[d.id],r)}}}const Ef=/(\w+)(\])?(\[|\.)?/g;function ig(s,e){s.seq.push(e),s.map[e.id]=e}function VE(s,e,n){const r=s.name,o=r.length;for(Ef.lastIndex=0;;){const l=Ef.exec(r),u=Ef.lastIndex;let d=l[1];const h=l[2]==="]",p=l[3];if(h&&(d=d|0),p===void 0||p==="["&&u+2===o){ig(n,p===void 0?new BE(d,s,e):new zE(d,s,e));break}else{let y=n.map[d];y===void 0&&(y=new HE(d),ig(n,y)),n=y}}}class $l{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(n,u),h=e.getUniformLocation(n,d.name);VE(d,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const d=n[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function rg(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const GE=37297;let WE=0;function XE(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const sg=new gt;function jE(s){Ct._getMatrix(sg,Ct.workingColorSpace,s);const e=`mat3( ${sg.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(s)){case Ql:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ag(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+XE(s.getShaderSource(e),d)}else return l}function YE(s,e){const n=jE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const qE={[Mg]:"Linear",[Eg]:"Reinhard",[wg]:"Cineon",[Tg]:"ACESFilmic",[bg]:"AgX",[Cg]:"Neutral",[Ag]:"Custom"};function $E(s,e){const n=qE[e];return n===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Vl=new ee;function KE(){Ct.getLuminanceCoefficients(Vl);const s=Vl.x.toFixed(4),e=Vl.y.toFixed(4),n=Vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function JE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function QE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function Za(s){return s!==""}function og(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e1=/^[ \t]*#include +<([\w\d./]+)>/gm;function hd(s){return s.replace(e1,n1)}const t1=new Map;function n1(s,e){let n=yt[e];if(n===void 0){const r=t1.get(e);if(r!==void 0)n=yt[r],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return hd(n)}const i1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cg(s){return s.replace(i1,r1)}function r1(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function ug(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const s1={[Wl]:"SHADOWMAP_TYPE_PCF",[Ka]:"SHADOWMAP_TYPE_VSM"};function a1(s){return s1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const o1={[ss]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE",[sc]:"ENVMAP_TYPE_CUBE_UV"};function l1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":o1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const c1={[ea]:"ENVMAP_MODE_REFRACTION"};function u1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":c1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const f1={[yg]:"ENVMAP_BLENDING_MULTIPLY",[Rx]:"ENVMAP_BLENDING_MIX",[Px]:"ENVMAP_BLENDING_ADD"};function d1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":f1[s.combine]||"ENVMAP_BLENDING_NONE"}function h1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function p1(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,d=n.fragmentShader;const h=a1(n),p=l1(n),x=u1(n),y=d1(n),g=h1(n),S=ZE(n),E=JE(l),T=o.createProgram();let _,v,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Za).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Za).join(`
`),v.length>0&&(v+=`
`)):(_=[ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),v=[ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+x:"",n.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zi?"#define TONE_MAPPING":"",n.toneMapping!==zi?yt.tonemapping_pars_fragment:"",n.toneMapping!==zi?$E("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,YE("linearToOutputTexel",n.outputColorSpace),KE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Za).join(`
`)),u=hd(u),u=og(u,n),u=lg(u,n),d=hd(d),d=og(d,n),d=lg(d,n),u=cg(u),d=cg(d),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",n.glslVersion===vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const k=N+_+u,C=N+v+d,L=rg(o,o.VERTEX_SHADER,k),P=rg(o,o.FRAGMENT_SHADER,C);o.attachShader(T,L),o.attachShader(T,P),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function F(q){if(s.debug.checkShaderErrors){const J=o.getProgramInfoLog(T)||"",Q=o.getShaderInfoLog(L)||"",X=o.getShaderInfoLog(P)||"",te=J.trim(),pe=Q.trim(),ne=X.trim();let Z=!0,j=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,L,P);else{const B=ag(o,L,"vertex"),D=ag(o,P,"fragment");Ft("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+te+`
`+B+`
`+D)}else te!==""?ft("WebGLProgram: Program Info Log:",te):(pe===""||ne==="")&&(j=!1);j&&(q.diagnostics={runnable:Z,programLog:te,vertexShader:{log:pe,prefix:_},fragmentShader:{log:ne,prefix:v}})}o.deleteShader(L),o.deleteShader(P),w=new $l(o,T),I=QE(o,T)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(T,GE)),V},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=WE++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=L,this.fragmentShader=P,this}let m1=0;class g1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new v1(e),n.set(e,r)),r}}class v1{constructor(e){this.id=m1++,this.code=e,this.usedTimes=0}}function x1(s){return s===as||s===Kl||s===Zl}function _1(s,e,n,r,o,l){const u=new Bg,d=new g1,h=new Set,p=[],x=new Map,y=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return h.add(w),w===0?"uv":`uv${w}`}function T(w,I,V,q,J,Q){const X=q.fog,te=J.geometry,pe=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?q.environment:null,ne=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Z=e.get(w.envMap||pe,ne),j=Z&&Z.mapping===sc?Z.image.height:null,B=S[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&ft("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const D=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,re=D!==void 0?D.length:0;let Me=0;te.morphAttributes.position!==void 0&&(Me=1),te.morphAttributes.normal!==void 0&&(Me=2),te.morphAttributes.color!==void 0&&(Me=3);let Ue,ve,ye,$;if(B){const Dt=Fi[B];Ue=Dt.vertexShader,ve=Dt.fragmentShader}else{Ue=w.vertexShader,ve=w.fragmentShader;const Dt=d.getVertexShaderStage(w),Nt=d.getFragmentShaderStage(w);d.update(w,Dt,Nt),ye=Dt.id,$=Nt.id}const ce=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Ve=J.isInstancedMesh===!0,Ie=J.isBatchedMesh===!0,it=!!w.map,Pt=!!w.matcap,ut=!!Z,dt=!!w.aoMap,rt=!!w.lightMap,nt=!!w.bumpMap&&w.wireframe===!1,vt=!!w.normalMap,wt=!!w.displacementMap,st=!!w.emissiveMap,ot=!!w.metalnessMap,Tt=!!w.roughnessMap,G=w.anisotropy>0,Ht=w.clearcoat>0,xt=w.dispersion>0,U=w.retroreflectivity>0,M=w.iridescence>0,K=w.sheen>0,le=w.transmission>0,me=G&&!!w.anisotropyMap,be=Ht&&!!w.clearcoatMap,Ne=Ht&&!!w.clearcoatNormalMap,ge=Ht&&!!w.clearcoatRoughnessMap,se=M&&!!w.iridescenceMap,fe=M&&!!w.iridescenceThicknessMap,Re=K&&!!w.sheenColorMap,Ee=K&&!!w.sheenRoughnessMap,we=!!w.specularMap,He=!!w.specularColorMap,$e=!!w.specularIntensityMap,Xe=le&&!!w.transmissionMap,z=le&&!!w.thicknessMap,Le=!!w.gradientMap,xe=!!w.alphaMap,De=w.alphaTest>0,ke=!!w.alphaHash,Se=!!w.extensions;let Je=zi;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Je=s.toneMapping);const qe={shaderID:B,shaderType:w.type,shaderName:w.name,vertexShader:Ue,fragmentShader:ve,defines:w.defines,customVertexShaderID:ye,customFragmentShaderID:$,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Ie,batchingColor:Ie&&J._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&J.instanceColor!==null,instancingMorph:Ve&&J.morphTexture!==null,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:it,matcap:Pt,envMap:ut,envMapMode:ut&&Z.mapping,envMapCubeUVHeight:j,aoMap:dt,lightMap:rt,bumpMap:nt,normalMap:vt,displacementMap:wt,emissiveMap:st,normalMapObjectSpace:vt&&w.normalMapType===Dx,normalMapTangentSpace:vt&&w.normalMapType===gm,packedNormalMap:vt&&w.normalMapType===gm&&x1(w.normalMap.format),metalnessMap:ot,roughnessMap:Tt,anisotropy:G,anisotropyMap:me,clearcoat:Ht,clearcoatMap:be,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ge,dispersion:xt,retroreflection:U,iridescence:M,iridescenceMap:se,iridescenceThicknessMap:fe,sheen:K,sheenColorMap:Re,sheenRoughnessMap:Ee,specularMap:we,specularColorMap:He,specularIntensityMap:$e,transmission:le,transmissionMap:Xe,thicknessMap:z,gradientMap:Le,opaque:w.transparent===!1&&w.blending===Ja&&w.alphaToCoverage===!1,alphaMap:xe,alphaTest:De,alphaHash:ke,combine:w.combine,mapUv:it&&E(w.map.channel),aoMapUv:dt&&E(w.aoMap.channel),lightMapUv:rt&&E(w.lightMap.channel),bumpMapUv:nt&&E(w.bumpMap.channel),normalMapUv:vt&&E(w.normalMap.channel),displacementMapUv:wt&&E(w.displacementMap.channel),emissiveMapUv:st&&E(w.emissiveMap.channel),metalnessMapUv:ot&&E(w.metalnessMap.channel),roughnessMapUv:Tt&&E(w.roughnessMap.channel),anisotropyMapUv:me&&E(w.anisotropyMap.channel),clearcoatMapUv:be&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&E(w.sheenRoughnessMap.channel),specularMapUv:we&&E(w.specularMap.channel),specularColorMapUv:He&&E(w.specularColorMap.channel),specularIntensityMapUv:$e&&E(w.specularIntensityMap.channel),transmissionMapUv:Xe&&E(w.transmissionMap.channel),thicknessMapUv:z&&E(w.thicknessMap.channel),alphaMapUv:xe&&E(w.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(vt||G),vertexNormals:!!te.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!te.attributes.uv&&(it||xe),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||te.attributes.normal===void 0&&vt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:_e,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:te.attributes.position!==void 0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Me,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Je,decodeVideoTexture:it&&w.map.isVideoTexture===!0&&Ct.getTransfer(w.map.colorSpace)===Bt,decodeVideoTextureEmissive:st&&w.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(w.emissiveMap.colorSpace)===Bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===jn,flipSided:w.side===Yn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Se&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&w.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return qe.vertexUv1s=h.has(1),qe.vertexUv2s=h.has(2),qe.vertexUv3s=h.has(3),h.clear(),qe}function _(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)I.push(V),I.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(v(I,w),N(I,w),I.push(s.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function v(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapCubeUVHeight),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.morphAttributeCount),w.push(I.numSunLights),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numSunLightShadows),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.numLightProbes),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function N(w,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.retroreflection&&u.enable(24),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),I.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function k(w){const I=S[w.type];let V;if(I){const q=Fi[I];V=F_.clone(q.uniforms)}else V=w.uniforms;return V}function C(w,I){let V=x.get(I);return V!==void 0?++V.usedTimes:(V=new p1(s,I,w,o),p.push(V),x.set(I,V)),V}function L(w){if(--w.usedTimes===0){const I=p.indexOf(w);p[I]=p[p.length-1],p.pop(),x.delete(w.cacheKey),w.destroy()}}function P(w){d.remove(w)}function F(){d.dispose()}return{getParameters:T,getProgramCacheKey:_,getUniforms:k,acquireProgram:C,releaseProgram:L,releaseShaderCache:P,programs:p,dispose:F}}function S1(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function y1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function fg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function dg(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function d(g,S,E,T,_,v){let N=s[e];return N===void 0?(N={id:g.id,object:g,geometry:S,material:E,materialVariant:u(g),groupOrder:T,renderOrder:g.renderOrder,z:_,group:v},s[e]=N):(N.id=g.id,N.object=g,N.geometry=S,N.material=E,N.materialVariant=u(g),N.groupOrder=T,N.renderOrder=g.renderOrder,N.z=_,N.group=v),e++,N}function h(g,S,E,T,_,v,N){N.reversedDepth===!0&&(_=-_);const k=d(g,S,E,T,_,v);E.transmission>0?r.push(k):E.transparent===!0?o.push(k):n.push(k)}function p(g,S,E,T,_,v){const N=d(g,S,E,T,_,v);E.transmission>0?r.unshift(N):E.transparent===!0?o.unshift(N):n.unshift(N)}function x(g,S){n.length>1&&n.sort(g||y1),r.length>1&&r.sort(S||fg),o.length>1&&o.sort(S||fg)}function y(){for(let g=e,S=s.length;g<S;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:y,sort:x}}function M1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new dg,s.set(r,[u])):o>=l.length?(u=new dg,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function E1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new ee,color:new mt};break;case"SpotLight":n={position:new ee,direction:new ee,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":n={color:new mt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=n,n}}}function w1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let T1=0;function A1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function b1(s){const e=new E1,n=w1(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ee);const o=new ee,l=new en,u=new en;function d(p){let x=0,y=0,g=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let S=0,E=0,T=0,_=0,v=0,N=0,k=0,C=0,L=0,P=0,F=0,w=0,I=0,V=0;p.sort(A1);for(let J=0,Q=p.length;J<Q;J++){const X=p[J],te=X.color,pe=X.intensity,ne=X.distance;let Z=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===as?Z=X.shadow.map.texture:Z=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)x+=te.r*pe,y+=te.g*pe,g+=te.b*pe;else if(X.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(X.sh.coefficients[j],pe);V++}else if(X.isSunLight){const j=e.get(X);if(j.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const B=X.shadow,D=n.get(X);D.shadowIntensity=B.intensity,D.shadowBias=B.bias,D.shadowNormalBias=B.normalBias,D.shadowRadius=B.radius,D.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),r.sunShadow[E]=D,r.sunShadowMap[E]=Z;const re=B.getViewportCount();for(let Me=0;Me<re;Me++)r.sunShadowMatrix[T+Me]=B.getMatrix(Me),r.sunShadowCascade[T+Me]=B._cascadeData[Me];T+=re,E++}r.sun[S]=j,S++}else if(X.isDirectionalLight){const j=e.get(X);if(j.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const B=X.shadow,D=n.get(X);D.shadowIntensity=B.intensity,D.shadowBias=B.bias,D.shadowNormalBias=B.normalBias,D.shadowRadius=B.radius,D.shadowMapSize=B.mapSize,r.directionalShadow[_]=D,r.directionalShadowMap[_]=Z,r.directionalShadowMatrix[_]=X.shadow.matrix,L++}r.directional[_]=j,_++}else if(X.isSpotLight){const j=e.get(X);j.position.setFromMatrixPosition(X.matrixWorld),j.color.copy(te).multiplyScalar(pe),j.distance=ne,j.coneCos=Math.cos(X.angle),j.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),j.decay=X.decay,r.spot[N]=j;const B=X.shadow;if(X.map&&(r.spotLightMap[w]=X.map,w++,B.updateMatrices(X),X.castShadow&&I++),r.spotLightMatrix[N]=B.matrix,X.castShadow){const D=n.get(X);D.shadowIntensity=B.intensity,D.shadowBias=B.bias,D.shadowNormalBias=B.normalBias,D.shadowRadius=B.radius,D.shadowMapSize=B.mapSize,r.spotShadow[N]=D,r.spotShadowMap[N]=Z,F++}N++}else if(X.isRectAreaLight){const j=e.get(X);j.color.copy(te).multiplyScalar(pe),j.halfWidth.set(X.width*.5,0,0),j.halfHeight.set(0,X.height*.5,0),r.rectArea[k]=j,k++}else if(X.isPointLight){const j=e.get(X);if(j.color.copy(X.color).multiplyScalar(X.intensity),j.distance=X.distance,j.decay=X.decay,X.castShadow){const B=X.shadow,D=n.get(X);D.shadowIntensity=B.intensity,D.shadowBias=B.bias,D.shadowNormalBias=B.normalBias,D.shadowRadius=B.radius,D.shadowMapSize=B.mapSize,D.shadowCameraNear=B.camera.near,D.shadowCameraFar=B.camera.far,r.pointShadow[v]=D,r.pointShadowMap[v]=Z,r.pointShadowMatrix[v]=X.shadow.matrix,P++}r.point[v]=j,v++}else if(X.isHemisphereLight){const j=e.get(X);j.skyColor.copy(X.color).multiplyScalar(pe),j.groundColor.copy(X.groundColor).multiplyScalar(pe),r.hemi[C]=j,C++}}k>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=y,r.ambient[2]=g;const q=r.hash;(q.sunLength!==S||q.directionalLength!==_||q.pointLength!==v||q.spotLength!==N||q.rectAreaLength!==k||q.hemiLength!==C||q.numSunShadows!==E||q.numDirectionalShadows!==L||q.numPointShadows!==P||q.numSpotShadows!==F||q.numSpotMaps!==w||q.numLightProbes!==V)&&(r.sun.length=S,r.directional.length=_,r.spot.length=N,r.rectArea.length=k,r.point.length=v,r.hemi.length=C,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=T,r.sunShadowCascade.length=T,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.directionalShadowMatrix.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.pointShadowMatrix.length=P,r.spotShadow.length=F,r.spotShadowMap.length=F,r.spotLightMatrix.length=F+w-I,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=V,q.sunLength=S,q.directionalLength=_,q.pointLength=v,q.spotLength=N,q.rectAreaLength=k,q.hemiLength=C,q.numSunShadows=E,q.numDirectionalShadows=L,q.numPointShadows=P,q.numSpotShadows=F,q.numSpotMaps=w,q.numLightProbes=V,r.version=T1++)}function h(p,x){let y=0,g=0,S=0,E=0,T=0,_=0;const v=x.matrixWorldInverse;for(let N=0,k=p.length;N<k;N++){const C=p[N];if(C.isSunLight){const L=r.sun[y];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(v),y++}else if(C.isDirectionalLight){const L=r.directional[g];L.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(v),g++}else if(C.isSpotLight){const L=r.spot[E];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(v),L.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(v),E++}else if(C.isRectAreaLight){const L=r.rectArea[T];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(v),u.identity(),l.copy(C.matrixWorld),l.premultiply(v),u.extractRotation(l),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),T++}else if(C.isPointLight){const L=r.point[S];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(v),S++}else if(C.isHemisphereLight){const L=r.hemi[_];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(v),_++}}}return{setup:d,setupView:h,state:r}}function hg(s){const e=new b1(s),n=[],r=[],o=[];function l(g){y.camera=g,n.length=0,r.length=0,o.length=0}function u(g){n.push(g)}function d(g){r.push(g)}function h(g){o.push(g)}function p(){e.setup(n)}function x(g){e.setupView(n,g)}const y={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:p,setupLightsView:x,pushLight:u,pushShadow:d,pushLightProbeGrid:h}}function C1(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new hg(s),e.set(o,[d])):l>=u.length?(d=new hg(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const R1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P1=`uniform sampler2D shadow_pass;
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
}`,N1=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],L1=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],pg=new en,$a=new ee,wf=new ee;function D1(s,e,n){let r=new Gg;const o=new Rt,l=new Rt,u=new Qt,d=new z_,h=new H_,p={},x=n.maxTextureSize,y={[rs]:Yn,[Yn]:rs,[jn]:jn},g=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:R1,fragmentShader:P1}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new Sn;E.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new xn(E,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let v=this.type;this.render=function(P,F,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;this.type===ux&&(ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wl);const I=s.getRenderTarget(),V=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),J=s.state;J.setBlending(rr),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Q=v!==this.type;Q&&F.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(te=>te.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,te=P.length;X<te;X++){const pe=P[X],ne=pe.shadow;if(ne===void 0){ft("WebGLShadowMap:",pe,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;o.copy(ne.mapSize);const Z=ne.getFrameExtents();o.multiply(Z),l.copy(ne.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/Z.x),o.x=l.x*Z.x,ne.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/Z.y),o.y=l.y*Z.y,ne.mapSize.y=l.y));const j=s.state.buffers.depth.getReversed();if(ne.camera._reversedDepth=j,ne.map===null||Q===!0){if(ne.map!==null&&(ne.map.depthTexture!==null&&(ne.map.depthTexture.dispose(),ne.map.depthTexture=null),ne.map.dispose()),this.type===Ka){if(pe.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ne.map=new Ri(o.x,o.y,{format:as,type:Vi,minFilter:on,magFilter:on,generateMipmaps:!1}),ne.map.texture.name=pe.name+".shadowMap",ne.map.depthTexture=new so(o.x,o.y,Oi),ne.map.depthTexture.name=pe.name+".shadowMapDepth",ne.map.depthTexture.format=ar,ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=wn,ne.map.depthTexture.magFilter=wn}else pe.isPointLight?(ne.map=new Qg(o.x),ne.map.depthTexture=new D_(o.x,Hi)):(ne.map=new Ri(o.x,o.y),ne.map.depthTexture=new so(o.x,o.y,Hi)),ne.map.depthTexture.name=pe.name+".shadowMap",ne.map.depthTexture.format=ar,this.type===Wl?(ne.map.depthTexture.compareFunction=j?Td:wd,ne.map.depthTexture.minFilter=on,ne.map.depthTexture.magFilter=on):(ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=wn,ne.map.depthTexture.magFilter=wn);ne.camera.updateProjectionMatrix()}ne.map.isWebGLCubeRenderTarget!==!0&&(ne.map.width!==o.x||ne.map.height!==o.y)&&ne.map.setSize(o.x,o.y);const B=ne.map.isWebGLCubeRenderTarget?6:ne.getViewportCount();pe.isPointLight!==!0&&ne.updateMatrices(pe,w);for(let D=0;D<B;D++){const re=ne.getCamera(D);if(pe.isPointLight){const Me=ne.camera,Ue=ne.matrix,ve=pe.distance||Me.far;ve!==Me.far&&(Me.far=ve,Me.updateProjectionMatrix()),$a.setFromMatrixPosition(pe.matrixWorld),Me.position.copy($a),wf.copy(Me.position),wf.add(N1[D]),Me.up.copy(L1[D]),Me.lookAt(wf),Me.updateMatrixWorld(),Ue.makeTranslation(-$a.x,-$a.y,-$a.z),pg.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),ne._frustum.setFromProjectionMatrix(pg,Me.coordinateSystem,Me.reversedDepth)}if(ne.map.isWebGLCubeRenderTarget)s.setRenderTarget(ne.map,D),s.clear();else{D===0&&(s.setRenderTarget(ne.map),s.clear());const Me=ne.getViewport(D);u.set(l.x*Me.x,l.y*Me.y,l.x*Me.z,l.y*Me.w),J.viewport(u)}r=ne.getFrustum(D),C(F,w,re,pe,this.type)}ne.isPointLightShadow!==!0&&this.type===Ka&&N(ne,w),ne.needsUpdate=!1}v=this.type,_.needsUpdate=!1,s.setRenderTarget(I,V,q)};function N(P,F){const w=e.update(T);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null?P.mapPass=new Ri(o.x,o.y,{format:as,type:Vi}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value.set(P.map.width,P.map.height),g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(F,null,w,g,T,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value.set(P.map.width,P.map.height),S.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(F,null,w,S,T,null)}function k(P,F,w,I){let V=null;const q=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(q!==void 0)V=q;else if(V=w.isPointLight===!0?h:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const J=V.uuid,Q=F.uuid;let X=p[J];X===void 0&&(X={},p[J]=X);let te=X[Q];te===void 0&&(te=V.clone(),X[Q]=te,F.addEventListener("dispose",L)),V=te}if(V.visible=F.visible,V.wireframe=F.wireframe,I===Ka?V.side=F.shadowSide!==null?F.shadowSide:F.side:V.side=F.shadowSide!==null?F.shadowSide:y[F.side],V.alphaMap=F.alphaMap,V.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,V.map=F.map,V.clipShadows=F.clipShadows,V.clippingPlanes=F.clippingPlanes,V.clipIntersection=F.clipIntersection,V.displacementMap=F.displacementMap,V.displacementScale=F.displacementScale,V.displacementBias=F.displacementBias,V.wireframeLinewidth=F.wireframeLinewidth,V.linewidth=F.linewidth,w.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const J=s.properties.get(V);J.light=w}return V}function C(P,F,w,I,V){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&V===Ka)&&(!P.frustumCulled||P.intersectsFrustum(r))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const Q=e.update(P),X=P.material;if(Array.isArray(X)){const te=Q.groups;for(let pe=0,ne=te.length;pe<ne;pe++){const Z=te[pe],j=X[Z.materialIndex];if(j&&j.visible){const B=k(P,j,I,V);P.onBeforeShadow(s,P,F,w,Q,B,Z),s.renderBufferDirect(w,null,Q,B,P,Z),P.onAfterShadow(s,P,F,w,Q,B,Z)}}}else if(X.visible){const te=k(P,X,I,V);P.onBeforeShadow(s,P,F,w,Q,te,null),s.renderBufferDirect(w,null,Q,te,P,null),P.onAfterShadow(s,P,F,w,Q,te,null)}}const J=P.children;for(let Q=0,X=J.length;Q<X;Q++)C(J[Q],F,w,I,V)}function L(P){P.target.removeEventListener("dispose",L);for(const w in p){const I=p[w],V=P.target.uuid;V in I&&(I[V].dispose(),delete I[V])}}}function I1(s,e){function n(){let z=!1;const Le=new Qt;let xe=null;const De=new Qt(0,0,0,0);return{setMask:function(ke){xe!==ke&&!z&&(s.colorMask(ke,ke,ke,ke),xe=ke)},setLocked:function(ke){z=ke},setClear:function(ke,Se,Je,qe,Dt){Dt===!0&&(ke*=qe,Se*=qe,Je*=qe),Le.set(ke,Se,Je,qe),De.equals(Le)===!1&&(s.clearColor(ke,Se,Je,qe),De.copy(Le))},reset:function(){z=!1,xe=null,De.set(-1,0,0,0)}}}function r(){let z=!1,Le=!1,xe=null,De=null,ke=null;return{setReversed:function(Se){if(Le!==Se){const Je=e.get("EXT_clip_control");Se?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Le=Se;const qe=ke;ke=null,this.setClear(qe)}},getReversed:function(){return Le},setTest:function(Se){Se?ce(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(Se){xe!==Se&&!z&&(s.depthMask(Se),xe=Se)},setFunc:function(Se){if(Le&&(Se=Xx[Se]),De!==Se){switch(Se){case Af:s.depthFunc(s.NEVER);break;case bf:s.depthFunc(s.ALWAYS);break;case Cf:s.depthFunc(s.LESS);break;case eo:s.depthFunc(s.LEQUAL);break;case Rf:s.depthFunc(s.EQUAL);break;case Pf:s.depthFunc(s.GEQUAL);break;case Nf:s.depthFunc(s.GREATER);break;case Lf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=Se}},setLocked:function(Se){z=Se},setClear:function(Se){ke!==Se&&(ke=Se,Le&&(Se=1-Se),s.clearDepth(Se))},reset:function(){z=!1,xe=null,De=null,ke=null,Le=!1}}}function o(){let z=!1,Le=null,xe=null,De=null,ke=null,Se=null,Je=null,qe=null,Dt=null;return{setTest:function(Nt){z||(Nt?ce(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(Nt){Le!==Nt&&!z&&(s.stencilMask(Nt),Le=Nt)},setFunc:function(Nt,yn,ni){(xe!==Nt||De!==yn||ke!==ni)&&(s.stencilFunc(Nt,yn,ni),xe=Nt,De=yn,ke=ni)},setOp:function(Nt,yn,ni){(Se!==Nt||Je!==yn||qe!==ni)&&(s.stencilOp(Nt,yn,ni),Se=Nt,Je=yn,qe=ni)},setLocked:function(Nt){z=Nt},setClear:function(Nt){Dt!==Nt&&(s.clearStencil(Nt),Dt=Nt)},reset:function(){z=!1,Le=null,xe=null,De=null,ke=null,Se=null,Je=null,qe=null,Dt=null}}}const l=new n,u=new r,d=new o,h=new WeakMap,p=new WeakMap;let x={},y={},g={},S=new WeakMap,E=[],T=null,_=!1,v=null,N=null,k=null,C=null,L=null,P=null,F=null,w=new mt(0,0,0),I=0,V=!1,q=null,J=null,Q=null,X=null,te=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,Z=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),ne=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ne=Z>=2);let B=null,D={};const re=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),Ue=new Qt().fromArray(re),ve=new Qt().fromArray(Me);function ye(z,Le,xe,De){const ke=new Uint8Array(4),Se=s.createTexture();s.bindTexture(z,Se),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<xe;Je++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Le+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return Se}const $={};$[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ce(s.DEPTH_TEST),u.setFunc(eo),nt(!1),vt(hm),ce(s.CULL_FACE),dt(rr);function ce(z){x[z]!==!0&&(s.enable(z),x[z]=!0)}function _e(z){x[z]!==!1&&(s.disable(z),x[z]=!1)}function Ve(z,Le){return g[z]!==Le?(s.bindFramebuffer(z,Le),g[z]=Le,z===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Le),z===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ie(z,Le){let xe=E,De=!1;if(z){xe=S.get(Le),xe===void 0&&(xe=[],S.set(Le,xe));const ke=z.textures;if(xe.length!==ke.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,Je=ke.length;Se<Je;Se++)xe[Se]=s.COLOR_ATTACHMENT0+Se;xe.length=ke.length,De=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,De=!0);De&&s.drawBuffers(xe)}function it(z){return T!==z?(s.useProgram(z),T=z,!0):!1}const Pt={[Ys]:s.FUNC_ADD,[dx]:s.FUNC_SUBTRACT,[hx]:s.FUNC_REVERSE_SUBTRACT};Pt[px]=s.MIN,Pt[mx]=s.MAX;const ut={[gx]:s.ZERO,[vx]:s.ONE,[xx]:s.SRC_COLOR,[_g]:s.SRC_ALPHA,[wx]:s.SRC_ALPHA_SATURATE,[Mx]:s.DST_COLOR,[Sx]:s.DST_ALPHA,[_x]:s.ONE_MINUS_SRC_COLOR,[Sg]:s.ONE_MINUS_SRC_ALPHA,[Ex]:s.ONE_MINUS_DST_COLOR,[yx]:s.ONE_MINUS_DST_ALPHA,[Tx]:s.CONSTANT_COLOR,[Ax]:s.ONE_MINUS_CONSTANT_COLOR,[bx]:s.CONSTANT_ALPHA,[Cx]:s.ONE_MINUS_CONSTANT_ALPHA};function dt(z,Le,xe,De,ke,Se,Je,qe,Dt,Nt){if(z===rr){_===!0&&(_e(s.BLEND),_=!1);return}if(_===!1&&(ce(s.BLEND),_=!0),z!==fx){if(z!==v||Nt!==V){if((N!==Ys||L!==Ys)&&(s.blendEquation(s.FUNC_ADD),N=Ys,L=Ys),Nt)switch(z){case Ja:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ki:s.blendFunc(s.ONE,s.ONE);break;case pm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ft("WebGLState: Invalid blending: ",z);break}else switch(z){case Ja:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ki:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case pm:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mm:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",z);break}k=null,C=null,P=null,F=null,w.set(0,0,0),I=0,v=z,V=Nt}return}ke=ke||Le,Se=Se||xe,Je=Je||De,(Le!==N||ke!==L)&&(s.blendEquationSeparate(Pt[Le],Pt[ke]),N=Le,L=ke),(xe!==k||De!==C||Se!==P||Je!==F)&&(s.blendFuncSeparate(ut[xe],ut[De],ut[Se],ut[Je]),k=xe,C=De,P=Se,F=Je),(qe.equals(w)===!1||Dt!==I)&&(s.blendColor(qe.r,qe.g,qe.b,Dt),w.copy(qe),I=Dt),v=z,V=!1}function rt(z,Le){z.side===jn?_e(s.CULL_FACE):ce(s.CULL_FACE);let xe=z.side===Yn;Le&&(xe=!xe),nt(xe),z.blending===Ja&&z.transparent===!1?dt(rr):dt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),u.setFunc(z.depthFunc),u.setTest(z.depthTest),u.setMask(z.depthWrite),l.setMask(z.colorWrite);const De=z.stencilWrite;d.setTest(De),De&&(d.setMask(z.stencilWriteMask),d.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),d.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),st(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(z){q!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),q=z)}function vt(z){z!==lx?(ce(s.CULL_FACE),z!==J&&(z===hm?s.cullFace(s.BACK):z===cx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),J=z}function wt(z){z!==Q&&(ne&&s.lineWidth(z),Q=z)}function st(z,Le,xe){z?(ce(s.POLYGON_OFFSET_FILL),(X!==Le||te!==xe)&&(X=Le,te=xe,u.getReversed()&&(Le=-Le),s.polygonOffset(Le,xe))):_e(s.POLYGON_OFFSET_FILL)}function ot(z){z?ce(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function Tt(z){z===void 0&&(z=s.TEXTURE0+pe-1),B!==z&&(s.activeTexture(z),B=z)}function G(z,Le,xe){xe===void 0&&(B===null?xe=s.TEXTURE0+pe-1:xe=B);let De=D[xe];De===void 0&&(De={type:void 0,texture:void 0},D[xe]=De),(De.type!==z||De.texture!==Le)&&(B!==xe&&(s.activeTexture(xe),B=xe),s.bindTexture(z,Le||$[z]),De.type=z,De.texture=Le)}function Ht(){const z=D[B];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function xt(){try{s.compressedTexImage2D(...arguments)}catch(z){Ft("WebGLState:",z)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(z){Ft("WebGLState:",z)}}function M(){try{s.texSubImage2D(...arguments)}catch(z){Ft("WebGLState:",z)}}function K(){try{s.texSubImage3D(...arguments)}catch(z){Ft("WebGLState:",z)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(z){Ft("WebGLState:",z)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(z){Ft("WebGLState:",z)}}function be(){try{s.texStorage2D(...arguments)}catch(z){Ft("WebGLState:",z)}}function Ne(){try{s.texStorage3D(...arguments)}catch(z){Ft("WebGLState:",z)}}function ge(){try{s.texImage2D(...arguments)}catch(z){Ft("WebGLState:",z)}}function se(){try{s.texImage3D(...arguments)}catch(z){Ft("WebGLState:",z)}}function fe(z){return y[z]!==void 0?y[z]:s.getParameter(z)}function Re(z,Le){y[z]!==Le&&(s.pixelStorei(z,Le),y[z]=Le)}function Ee(z){Ue.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Ue.copy(z))}function we(z){ve.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),ve.copy(z))}function He(z,Le){let xe=p.get(Le);xe===void 0&&(xe=new WeakMap,p.set(Le,xe));let De=xe.get(z);De===void 0&&(De=s.getUniformBlockIndex(Le,z.name),xe.set(z,De))}function $e(z,Le){const De=p.get(Le).get(z);h.get(Le)!==De&&(s.uniformBlockBinding(Le,De,z.__bindingPointIndex),h.set(Le,De))}function Xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},y={},B=null,D={},g={},S=new WeakMap,E=[],T=null,_=!1,v=null,N=null,k=null,C=null,L=null,P=null,F=null,w=new mt(0,0,0),I=0,V=!1,q=null,J=null,Q=null,X=null,te=null,Ue.set(0,0,s.canvas.width,s.canvas.height),ve.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ce,disable:_e,bindFramebuffer:Ve,drawBuffers:Ie,useProgram:it,setBlending:dt,setMaterial:rt,setFlipSided:nt,setCullFace:vt,setLineWidth:wt,setPolygonOffset:st,setScissorTest:ot,activeTexture:Tt,bindTexture:G,unbindTexture:Ht,compressedTexImage2D:xt,compressedTexImage3D:U,texImage2D:ge,texImage3D:se,pixelStorei:Re,getParameter:fe,updateUBOMapping:He,uniformBlockBinding:$e,texStorage2D:be,texStorage3D:Ne,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:Ee,viewport:we,reset:Xe}}function U1(s,e,n,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Rt,x=new WeakMap,y=new Set;let g;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,M){return E?new OffscreenCanvas(U,M):io("canvas")}function _(U,M,K){let le=1;const me=xt(U);if((me.width>K||me.height>K)&&(le=K/Math.max(me.width,me.height)),le<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const be=Math.floor(le*me.width),Ne=Math.floor(le*me.height);g===void 0&&(g=T(be,Ne));const ge=M?T(be,Ne):g;return ge.width=be,ge.height=Ne,ge.getContext("2d").drawImage(U,0,0,be,Ne),ft("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+be+"x"+Ne+")."),ge}else return"data"in U&&ft("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),U;return U}function v(U){return U.generateMipmaps}function N(U){s.generateMipmap(U)}function k(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(U,M,K,le,me,be=!1){if(U!==null){if(s[U]!==void 0)return s[U];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ne;le&&(Ne=e.get("EXT_texture_norm16"),Ne||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=M;if(M===s.RED&&(K===s.FLOAT&&(ge=s.R32F),K===s.HALF_FLOAT&&(ge=s.R16F),K===s.UNSIGNED_BYTE&&(ge=s.R8),K===s.UNSIGNED_SHORT&&Ne&&(ge=Ne.R16_EXT),K===s.SHORT&&Ne&&(ge=Ne.R16_SNORM_EXT)),M===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ge=s.R8UI),K===s.UNSIGNED_SHORT&&(ge=s.R16UI),K===s.UNSIGNED_INT&&(ge=s.R32UI),K===s.BYTE&&(ge=s.R8I),K===s.SHORT&&(ge=s.R16I),K===s.INT&&(ge=s.R32I)),M===s.RG&&(K===s.FLOAT&&(ge=s.RG32F),K===s.HALF_FLOAT&&(ge=s.RG16F),K===s.UNSIGNED_BYTE&&(ge=s.RG8),K===s.UNSIGNED_SHORT&&Ne&&(ge=Ne.RG16_EXT),K===s.SHORT&&Ne&&(ge=Ne.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ge=s.RG8UI),K===s.UNSIGNED_SHORT&&(ge=s.RG16UI),K===s.UNSIGNED_INT&&(ge=s.RG32UI),K===s.BYTE&&(ge=s.RG8I),K===s.SHORT&&(ge=s.RG16I),K===s.INT&&(ge=s.RG32I)),M===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),K===s.UNSIGNED_INT&&(ge=s.RGB32UI),K===s.BYTE&&(ge=s.RGB8I),K===s.SHORT&&(ge=s.RGB16I),K===s.INT&&(ge=s.RGB32I)),M===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),K===s.UNSIGNED_INT&&(ge=s.RGBA32UI),K===s.BYTE&&(ge=s.RGBA8I),K===s.SHORT&&(ge=s.RGBA16I),K===s.INT&&(ge=s.RGBA32I)),M===s.RGB&&(K===s.UNSIGNED_SHORT&&Ne&&(ge=Ne.RGB16_EXT),K===s.SHORT&&Ne&&(ge=Ne.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(ge=s.R11F_G11F_B10F)),M===s.RGBA){const se=be?Ql:Ct.getTransfer(me);K===s.FLOAT&&(ge=s.RGBA32F),K===s.HALF_FLOAT&&(ge=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ge=se===Bt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Ne&&(ge=Ne.RGBA16_EXT),K===s.SHORT&&Ne&&(ge=Ne.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function L(U,M){let K;return U?M===null||M===Hi||M===no?K=s.DEPTH24_STENCIL8:M===Oi?K=s.DEPTH32F_STENCIL8:M===to&&(K=s.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hi||M===no?K=s.DEPTH_COMPONENT24:M===Oi?K=s.DEPTH_COMPONENT32F:M===to&&(K=s.DEPTH_COMPONENT16),K}function P(U,M){return v(U)===!0||U.isFramebufferTexture&&U.minFilter!==wn&&U.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?M.mipmaps.length:1}function F(U){const M=U.target;M.removeEventListener("dispose",F),I(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&y.delete(M)}function w(U){const M=U.target;M.removeEventListener("dispose",w),q(M)}function I(U){const M=r.get(U);if(M.__webglInit===void 0)return;const K=U.source,le=S.get(K);if(le){const me=le[M.__cacheKey];me.usedTimes--,me.usedTimes===0&&V(U),Object.keys(le).length===0&&S.delete(K)}r.remove(U)}function V(U){const M=r.get(U);s.deleteTexture(M.__webglTexture);const K=U.source,le=S.get(K);delete le[M.__cacheKey],u.memory.textures--}function q(U){const M=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(M.__webglFramebuffer[le]))for(let me=0;me<M.__webglFramebuffer[le].length;me++)s.deleteFramebuffer(M.__webglFramebuffer[le][me]);else s.deleteFramebuffer(M.__webglFramebuffer[le]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[le])}else{if(Array.isArray(M.__webglFramebuffer))for(let le=0;le<M.__webglFramebuffer.length;le++)s.deleteFramebuffer(M.__webglFramebuffer[le]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let le=0;le<M.__webglColorRenderbuffer.length;le++)M.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[le]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=U.textures;for(let le=0,me=K.length;le<me;le++){const be=r.get(K[le]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),u.memory.textures--),r.remove(K[le])}r.remove(U)}let J=0;function Q(){J=0}function X(){return J}function te(U){J=U}function pe(){const U=J;return U>=o.maxTextures&&ft("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+o.maxTextures),J+=1,U}function ne(U){const M=[];return M.push(U.wrapS),M.push(U.wrapT),M.push(U.wrapR||0),M.push(U.magFilter),M.push(U.minFilter),M.push(U.anisotropy),M.push(U.internalFormat),M.push(U.format),M.push(U.type),M.push(U.generateMipmaps),M.push(U.premultiplyAlpha),M.push(U.flipY),M.push(U.unpackAlignment),M.push(U.colorSpace),M.join()}function Z(U,M){const K=r.get(U);if(U.isVideoTexture&&G(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){const le=U.image;if(le===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(K,U,M);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+M)}function j(U,M){const K=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){_e(K,U,M);return}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+M)}function B(U,M){const K=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){_e(K,U,M);return}n.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+M)}function D(U,M){const K=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&K.__version!==U.version){Ve(K,U,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+M)}const re={[Df]:s.REPEAT,[ir]:s.CLAMP_TO_EDGE,[If]:s.MIRRORED_REPEAT},Me={[wn]:s.NEAREST,[Nx]:s.NEAREST_MIPMAP_NEAREST,[pl]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[Yu]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},Ue={[Ux]:s.NEVER,[zx]:s.ALWAYS,[Fx]:s.LESS,[wd]:s.LEQUAL,[kx]:s.EQUAL,[Td]:s.GEQUAL,[Ox]:s.GREATER,[Bx]:s.NOTEQUAL};function ve(U,M){if(M.type===Oi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===on||M.magFilter===Yu||M.magFilter===pl||M.magFilter===ts||M.minFilter===on||M.minFilter===Yu||M.minFilter===pl||M.minFilter===ts)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,re[M.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,re[M.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,re[M.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Me[M.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Me[M.minFilter]),M.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==pl&&M.minFilter!==ts||M.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function ye(U,M){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,M.addEventListener("dispose",F));const le=M.source;let me=S.get(le);me===void 0&&(me={},S.set(le,me));const be=ne(M);if(be!==U.__cacheKey){me[be]===void 0&&(me[be]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,K=!0),me[be].usedTimes++;const Ne=me[U.__cacheKey];Ne!==void 0&&(me[U.__cacheKey].usedTimes--,Ne.usedTimes===0&&V(M)),U.__cacheKey=be,U.__webglTexture=me[be].texture}return K}function $(U,M,K){return Math.floor(Math.floor(U/K)/M)}function ce(U,M,K,le){const be=U.updateRanges;if(be.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,K,le,M.data);else{be.sort((Re,Ee)=>Re.start-Ee.start);let Ne=0;for(let Re=1;Re<be.length;Re++){const Ee=be[Ne],we=be[Re],He=Ee.start+Ee.count,$e=$(we.start,M.width,4),Xe=$(Ee.start,M.width,4);we.start<=He+1&&$e===Xe&&$(we.start+we.count-1,M.width,4)===$e?Ee.count=Math.max(Ee.count,we.start+we.count-Ee.start):(++Ne,be[Ne]=we)}be.length=Ne+1;const ge=n.getParameter(s.UNPACK_ROW_LENGTH),se=n.getParameter(s.UNPACK_SKIP_PIXELS),fe=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Re=0,Ee=be.length;Re<Ee;Re++){const we=be[Re],He=Math.floor(we.start/4),$e=Math.ceil(we.count/4),Xe=He%M.width,z=Math.floor(He/M.width),Le=$e,xe=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(s.UNPACK_SKIP_ROWS,z),n.texSubImage2D(s.TEXTURE_2D,0,Xe,z,Le,xe,K,le,M.data)}U.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,ge),n.pixelStorei(s.UNPACK_SKIP_PIXELS,se),n.pixelStorei(s.UNPACK_SKIP_ROWS,fe)}}function _e(U,M,K){let le=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=s.TEXTURE_3D);const me=ye(U,M),be=M.source;n.bindTexture(le,U.__webglTexture,s.TEXTURE0+K);const Ne=r.get(be);if(be.version!==Ne.__version||me===!0){if(n.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const xe=Ct.getPrimaries(Ct.workingColorSpace),De=M.colorSpace===Nr?null:Ct.getPrimaries(M.colorSpace),ke=M.colorSpace===Nr||xe===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}n.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let se=_(M.image,!1,o.maxTextureSize);se=Ht(M,se);const fe=l.convert(M.format,M.colorSpace),Re=l.convert(M.type);let Ee=C(M.internalFormat,fe,Re,M.normalized,M.colorSpace,M.isVideoTexture);ve(le,M);let we;const He=M.mipmaps,$e=M.isVideoTexture!==!0,Xe=Ne.__version===void 0||me===!0,z=be.dataReady,Le=P(M,se);if(M.isDepthTexture)Ee=L(M.format===ns,M.type),Xe&&($e?n.texStorage2D(s.TEXTURE_2D,1,Ee,se.width,se.height):n.texImage2D(s.TEXTURE_2D,0,Ee,se.width,se.height,0,fe,Re,null));else if(M.isDataTexture)if(He.length>0){$e&&Xe&&n.texStorage2D(s.TEXTURE_2D,Le,Ee,He[0].width,He[0].height);for(let xe=0,De=He.length;xe<De;xe++)we=He[xe],$e?z&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,we.width,we.height,fe,Re,we.data):n.texImage2D(s.TEXTURE_2D,xe,Ee,we.width,we.height,0,fe,Re,we.data);M.generateMipmaps=!1}else $e?(Xe&&n.texStorage2D(s.TEXTURE_2D,Le,Ee,se.width,se.height),z&&ce(M,se,fe,Re)):n.texImage2D(s.TEXTURE_2D,0,Ee,se.width,se.height,0,fe,Re,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&Xe&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Ee,He[0].width,He[0].height,se.depth);for(let xe=0,De=He.length;xe<De;xe++)if(we=He[xe],M.format!==Ci)if(fe!==null)if($e){if(z)if(M.layerUpdates.size>0){const ke=jm(we.width,we.height,M.format,M.type);for(const Se of M.layerUpdates){const Je=we.data.subarray(Se*ke/we.data.BYTES_PER_ELEMENT,(Se+1)*ke/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,Se,we.width,we.height,1,fe,Je)}}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,we.width,we.height,se.depth,fe,we.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,Ee,we.width,we.height,se.depth,0,we.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?z&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,we.width,we.height,se.depth,fe,Re,we.data):n.texImage3D(s.TEXTURE_2D_ARRAY,xe,Ee,we.width,we.height,se.depth,0,fe,Re,we.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{$e&&Xe&&n.texStorage2D(s.TEXTURE_2D,Le,Ee,He[0].width,He[0].height);for(let xe=0,De=He.length;xe<De;xe++)we=He[xe],M.format!==Ci?fe!==null?$e?z&&n.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,we.width,we.height,fe,we.data):n.compressedTexImage2D(s.TEXTURE_2D,xe,Ee,we.width,we.height,0,we.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?z&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,we.width,we.height,fe,Re,we.data):n.texImage2D(s.TEXTURE_2D,xe,Ee,we.width,we.height,0,fe,Re,we.data)}else if(M.isDataArrayTexture)if($e){if(Xe&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Ee,se.width,se.height,se.depth),z)if(M.layerUpdates.size>0){const xe=jm(se.width,se.height,M.format,M.type);for(const De of M.layerUpdates){const ke=se.data.subarray(De*xe/se.data.BYTES_PER_ELEMENT,(De+1)*xe/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,De,se.width,se.height,1,fe,Re,ke)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,fe,Re,se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,se.width,se.height,se.depth,0,fe,Re,se.data);else if(M.isData3DTexture)$e?(Xe&&n.texStorage3D(s.TEXTURE_3D,Le,Ee,se.width,se.height,se.depth),z&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,fe,Re,se.data)):n.texImage3D(s.TEXTURE_3D,0,Ee,se.width,se.height,se.depth,0,fe,Re,se.data);else if(M.isFramebufferTexture){if(Xe)if($e)n.texStorage2D(s.TEXTURE_2D,Le,Ee,se.width,se.height);else{let xe=se.width,De=se.height;for(let ke=0;ke<Le;ke++)n.texImage2D(s.TEXTURE_2D,ke,Ee,xe,De,0,fe,Re,null),xe>>=1,De>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const xe=s.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),se.parentNode!==xe){xe.appendChild(se),y.add(M),xe.onpaint=De=>{const ke=De.changedElements;for(const Se of y)ke.includes(Se.image)&&(Se.needsUpdate=!0)},xe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,se);else{const ke=s.RGBA,Se=s.RGBA,Je=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ke,Se,Je,se)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(He.length>0){if($e&&Xe){const xe=xt(He[0]);n.texStorage2D(s.TEXTURE_2D,Le,Ee,xe.width,xe.height)}for(let xe=0,De=He.length;xe<De;xe++)we=He[xe],$e?z&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,fe,Re,we):n.texImage2D(s.TEXTURE_2D,xe,Ee,fe,Re,we);M.generateMipmaps=!1}else if($e){if(Xe){const xe=xt(se);n.texStorage2D(s.TEXTURE_2D,Le,Ee,xe.width,xe.height)}z&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,Re,se)}else n.texImage2D(s.TEXTURE_2D,0,Ee,fe,Re,se);v(M)&&N(le),Ne.__version=be.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function Ve(U,M,K){if(M.image.length!==6)return;const le=ye(U,M),me=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+K);const be=r.get(me);if(me.version!==be.__version||le===!0){n.activeTexture(s.TEXTURE0+K);const Ne=Ct.getPrimaries(Ct.workingColorSpace),ge=M.colorSpace===Nr?null:Ct.getPrimaries(M.colorSpace),se=M.colorSpace===Nr||Ne===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const fe=M.isCompressedTexture||M.image[0].isCompressedTexture,Re=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let Se=0;Se<6;Se++)!fe&&!Re?Ee[Se]=_(M.image[Se],!0,o.maxCubemapSize):Ee[Se]=Re?M.image[Se].image:M.image[Se],Ee[Se]=Ht(M,Ee[Se]);const we=Ee[0],He=l.convert(M.format,M.colorSpace),$e=l.convert(M.type),Xe=C(M.internalFormat,He,$e,M.normalized,M.colorSpace),z=M.isVideoTexture!==!0,Le=be.__version===void 0||le===!0,xe=me.dataReady;let De=P(M,we);ve(s.TEXTURE_CUBE_MAP,M);let ke;if(fe){z&&Le&&n.texStorage2D(s.TEXTURE_CUBE_MAP,De,Xe,we.width,we.height);for(let Se=0;Se<6;Se++){ke=Ee[Se].mipmaps;for(let Je=0;Je<ke.length;Je++){const qe=ke[Je];M.format!==Ci?He!==null?z?xe&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,0,0,qe.width,qe.height,He,qe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,Xe,qe.width,qe.height,0,qe.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?xe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,0,0,qe.width,qe.height,He,$e,qe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,Xe,qe.width,qe.height,0,He,$e,qe.data)}}}else{if(ke=M.mipmaps,z&&Le){ke.length>0&&De++;const Se=xt(Ee[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,De,Xe,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Re){z?xe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ee[Se].width,Ee[Se].height,He,$e,Ee[Se].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Xe,Ee[Se].width,Ee[Se].height,0,He,$e,Ee[Se].data);for(let Je=0;Je<ke.length;Je++){const Dt=ke[Je].image[Se].image;z?xe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,0,0,Dt.width,Dt.height,He,$e,Dt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,Xe,Dt.width,Dt.height,0,He,$e,Dt.data)}}else{z?xe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,He,$e,Ee[Se]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Xe,He,$e,Ee[Se]);for(let Je=0;Je<ke.length;Je++){const qe=ke[Je];z?xe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,0,0,He,$e,qe.image[Se]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,Xe,He,$e,qe.image[Se])}}}v(M)&&N(s.TEXTURE_CUBE_MAP),be.__version=me.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function Ie(U,M,K,le,me,be){const Ne=l.convert(K.format,K.colorSpace),ge=l.convert(K.type),se=C(K.internalFormat,Ne,ge,K.normalized,K.colorSpace),fe=r.get(M),Re=r.get(K);if(Re.__renderTarget=M,!fe.__hasExternalTextures){const Ee=Math.max(1,M.width>>be),we=Math.max(1,M.height>>be);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?n.texImage3D(me,be,se,Ee,we,M.depth,0,Ne,ge,null):n.texImage2D(me,be,se,Ee,we,0,Ne,ge,null)}n.bindFramebuffer(s.FRAMEBUFFER,U),Tt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,me,Re.__webglTexture,0,ot(M)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,le,me,Re.__webglTexture,be),n.bindFramebuffer(s.FRAMEBUFFER,null)}function it(U,M,K){if(s.bindRenderbuffer(s.RENDERBUFFER,U),M.depthBuffer){const le=M.depthTexture,me=le&&le.isDepthTexture?le.type:null,be=L(M.stencilBuffer,me),Ne=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Tt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot(M),be,M.width,M.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot(M),be,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,be,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,U)}else{const le=M.textures;for(let me=0;me<le.length;me++){const be=le[me],Ne=l.convert(be.format,be.colorSpace),ge=l.convert(be.type),se=C(be.internalFormat,Ne,ge,be.normalized,be.colorSpace);Tt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot(M),se,M.width,M.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot(M),se,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,se,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(U,M,K){const le=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,U),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(M.depthTexture);if(me.__renderTarget=M,(!me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le){if(me.__webglInit===void 0&&(me.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ve(s.TEXTURE_CUBE_MAP,M.depthTexture);const fe=l.convert(M.depthTexture.format),Re=l.convert(M.depthTexture.type);let Ee;M.depthTexture.format===ar?Ee=s.DEPTH_COMPONENT24:M.depthTexture.format===ns&&(Ee=s.DEPTH24_STENCIL8);for(let we=0;we<6;we++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ee,M.width,M.height,0,fe,Re,null)}}else Z(M.depthTexture,0);const be=me.__webglTexture,Ne=ot(M),ge=le?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,se=M.depthTexture.format===ns?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===ar)Tt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,ge,be,0,Ne):s.framebufferTexture2D(s.FRAMEBUFFER,se,ge,be,0);else if(M.depthTexture.format===ns)Tt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,ge,be,0,Ne):s.framebufferTexture2D(s.FRAMEBUFFER,se,ge,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(U){const M=r.get(U),K=U.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==U.depthTexture){const le=U.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",me)};le.addEventListener("dispose",me),M.__depthDisposeCallback=me}M.__boundDepthTexture=le}if(U.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let le=0;le<6;le++)Pt(M.__webglFramebuffer[le],U,le);else{const le=U.texture.mipmaps;le&&le.length>0?Pt(M.__webglFramebuffer[0],U,0):Pt(M.__webglFramebuffer,U,0)}else if(K){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=s.createRenderbuffer(),it(M.__webglDepthbuffer[le],U,!1);else{const me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=M.__webglDepthbuffer[le];s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,be)}}else{const le=U.texture.mipmaps;if(le&&le.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),it(M.__webglDepthbuffer,U,!1);else{const me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,be)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(U,M,K){const le=r.get(U);M!==void 0&&Ie(le.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&ut(U)}function rt(U){const M=U.texture,K=r.get(U),le=r.get(M);U.addEventListener("dispose",w);const me=U.textures,be=U.isWebGLCubeRenderTarget===!0,Ne=me.length>1;if(Ne||(le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture()),le.__version=M.version,u.memory.textures++),be){K.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[ge]=[];for(let se=0;se<M.mipmaps.length;se++)K.__webglFramebuffer[ge][se]=s.createFramebuffer()}else K.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)K.__webglFramebuffer[ge]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Ne)for(let ge=0,se=me.length;ge<se;ge++){const fe=r.get(me[ge]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&Tt(U)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ge=0;ge<me.length;ge++){const se=me[ge];K.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[ge]);const fe=l.convert(se.format,se.colorSpace),Re=l.convert(se.type),Ee=C(se.internalFormat,fe,Re,se.normalized,se.colorSpace,U.isXRRenderTarget===!0),we=ot(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,Ee,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,K.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),it(K.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(be){n.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),ve(s.TEXTURE_CUBE_MAP,M);for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0)for(let se=0;se<M.mipmaps.length;se++)Ie(K.__webglFramebuffer[ge][se],U,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,se);else Ie(K.__webglFramebuffer[ge],U,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);v(M)&&N(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ne){for(let ge=0,se=me.length;ge<se;ge++){const fe=me[ge],Re=r.get(fe);let Ee=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ee=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ee,Re.__webglTexture),ve(Ee,fe),Ie(K.__webglFramebuffer,U,fe,s.COLOR_ATTACHMENT0+ge,Ee,0),v(fe)&&N(Ee)}n.unbindTexture()}else{let ge=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ge=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(ge,le.__webglTexture),ve(ge,M),M.mipmaps&&M.mipmaps.length>0)for(let se=0;se<M.mipmaps.length;se++)Ie(K.__webglFramebuffer[se],U,M,s.COLOR_ATTACHMENT0,ge,se);else Ie(K.__webglFramebuffer,U,M,s.COLOR_ATTACHMENT0,ge,0);v(M)&&N(ge),n.unbindTexture()}U.depthBuffer&&ut(U)}function nt(U){const M=U.textures;for(let K=0,le=M.length;K<le;K++){const me=M[K];if(v(me)){const be=k(U),Ne=r.get(me).__webglTexture;n.bindTexture(be,Ne),N(be),n.unbindTexture()}}}const vt=[],wt=[];function st(U){if(U.samples>0){if(Tt(U)===!1){const M=U.textures,K=U.width,le=U.height;let me=s.COLOR_BUFFER_BIT;const be=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=r.get(U),ge=M.length>1;if(ge)for(let fe=0;fe<M.length;fe++)n.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const se=U.texture.mipmaps;se&&se.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[fe]);const Re=r.get(M[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,K,le,0,0,K,le,me,s.NEAREST),h===!0&&(vt.length=0,wt.length=0,vt.push(s.COLOR_ATTACHMENT0+fe),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(vt.push(be),wt.push(be),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,wt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,vt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let fe=0;fe<M.length;fe++){n.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[fe]);const Re=r.get(M[fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,Re,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&h){const M=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function ot(U){return Math.min(o.maxSamples,U.samples)}function Tt(U){const M=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function G(U){const M=u.render.frame;x.get(U)!==M&&(x.set(U,M),U.update())}function Ht(U,M){const K=U.colorSpace,le=U.format,me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==Jl&&K!==Nr&&(Ct.getTransfer(K)===Bt?(le!==Ci||me!==di)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",K)),M}function xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=pe,this.resetTextureUnits=Q,this.getTextureUnits=X,this.setTextureUnits=te,this.setTexture2D=Z,this.setTexture2DArray=j,this.setTexture3D=B,this.setTextureCube=D,this.rebindTextures=dt,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function F1(s,e){function n(r,o=Nr){let l;const u=Ct.getTransfer(o);if(r===di)return s.UNSIGNED_BYTE;if(r===_d)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Sd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Lg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Dg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Pg)return s.BYTE;if(r===Ng)return s.SHORT;if(r===to)return s.UNSIGNED_SHORT;if(r===xd)return s.INT;if(r===Hi)return s.UNSIGNED_INT;if(r===Oi)return s.FLOAT;if(r===Vi)return s.HALF_FLOAT;if(r===Ig)return s.ALPHA;if(r===Ug)return s.RGB;if(r===Ci)return s.RGBA;if(r===ar)return s.DEPTH_COMPONENT;if(r===ns)return s.DEPTH_STENCIL;if(r===Fg)return s.RED;if(r===yd)return s.RED_INTEGER;if(r===as)return s.RG;if(r===Md)return s.RG_INTEGER;if(r===Ed)return s.RGBA_INTEGER;if(r===Xl||r===jl||r===Yl||r===ql)if(u===Bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Xl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Xl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uf||r===Ff||r===kf||r===Of)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Uf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ff)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Of)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bf||r===zf||r===Hf||r===Vf||r===Gf||r===Kl||r===Wf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Bf||r===zf)return u===Bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Hf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Vf)return l.COMPRESSED_R11_EAC;if(r===Gf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Kl)return l.COMPRESSED_RG11_EAC;if(r===Wf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Xf||r===jf||r===Yf||r===qf||r===$f||r===Kf||r===Zf||r===Jf||r===Qf||r===ed||r===td||r===nd||r===id||r===rd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Xf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$f)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ed)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===td)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===id)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sd||r===ad||r===od)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===sd)return u===Bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ad)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===od)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ld||r===cd||r===Zl||r===ud)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===ld)return l.COMPRESSED_RED_RGTC1_EXT;if(r===cd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ud)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===no?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const k1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O1=`
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

}`;class B1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Yg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new qn({vertexShader:k1,fragmentShader:O1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xn(new Lr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z1 extends ls{constructor(e,n){super();const r=this;let o=null,l=1,u=null,d="local-floor",h=1,p=null,x=null,y=null,g=null,S=null,E=null;const T=typeof XRWebGLBinding<"u",_=new B1,v={},N=n.getContextAttributes();let k=null,C=null;const L=[],P=[],F=new Rt;let w=null,I=null;const V=new Xn;V.viewport=new Qt;const q=new Xn;q.viewport=new Qt;const J=[V,q],Q=new Y_;let X=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ce=L[$];return ce===void 0&&(ce=new ef,L[$]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function($){let ce=L[$];return ce===void 0&&(ce=new ef,L[$]=ce),ce.getGripSpace()},this.getHand=function($){let ce=L[$];return ce===void 0&&(ce=new ef,L[$]=ce),ce.getHandSpace()};function pe($){const ce=P.indexOf($.inputSource);if(ce===-1)return;const _e=L[ce];_e!==void 0&&(_e.update($.inputSource,$.frame,p||u),_e.dispatchEvent({type:$.type,data:$.inputSource}))}function ne(){o.removeEventListener("select",pe),o.removeEventListener("selectstart",pe),o.removeEventListener("selectend",pe),o.removeEventListener("squeeze",pe),o.removeEventListener("squeezestart",pe),o.removeEventListener("squeezeend",pe),o.removeEventListener("end",ne),o.removeEventListener("inputsourceschange",Z);for(let $=0;$<L.length;$++){const ce=P[$];ce!==null&&(P[$]=null,L[$].disconnect(ce))}X=null,te=null,_.reset();for(const $ in v)delete v[$];if(e.setRenderTarget(k),S=null,g=null,y=null,o=null,C=null,ye.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),I!==null){const $=I.camera;$.fov=I.fov,$.zoom=I.zoom,$.updateProjectionMatrix(),I=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){l=$,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return y===null&&T&&(y=new XRWebGLBinding(o,n)),y},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function($){if(o=$,o!==null){if(k=e.getRenderTarget(),o.addEventListener("select",pe),o.addEventListener("selectstart",pe),o.addEventListener("selectend",pe),o.addEventListener("squeeze",pe),o.addEventListener("squeezestart",pe),o.addEventListener("squeezeend",pe),o.addEventListener("end",ne),o.addEventListener("inputsourceschange",Z),N.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ve=null,Ie=null;N.depth&&(Ie=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=N.stencil?ns:ar,Ve=N.stencil?no:Hi);const it={colorFormat:n.RGBA8,depthFormat:Ie,scaleFactor:l};y=this.getBinding(),g=y.createProjectionLayer(it),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Ri(g.textureWidth,g.textureHeight,{format:Ci,type:di,depthTexture:new so(g.textureWidth,g.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const _e={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,n,_e),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new Ri(S.framebufferWidth,S.framebufferHeight,{format:Ci,type:di,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(d),ye.setContext(o),ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z($){for(let ce=0;ce<$.removed.length;ce++){const _e=$.removed[ce],Ve=P.indexOf(_e);Ve>=0&&(P[Ve]=null,L[Ve].disconnect(_e))}for(let ce=0;ce<$.added.length;ce++){const _e=$.added[ce];let Ve=P.indexOf(_e);if(Ve===-1){for(let it=0;it<L.length;it++)if(it>=P.length){P.push(_e),Ve=it;break}else if(P[it]===null){P[it]=_e,Ve=it;break}if(Ve===-1)break}const Ie=L[Ve];Ie&&Ie.connect(_e)}}const j=new ee,B=new ee;function D($,ce,_e){j.setFromMatrixPosition(ce.matrixWorld),B.setFromMatrixPosition(_e.matrixWorld);const Ve=j.distanceTo(B),Ie=ce.projectionMatrix.elements,it=_e.projectionMatrix.elements,Pt=Ie[14]/(Ie[10]-1),ut=Ie[14]/(Ie[10]+1),dt=(Ie[9]+1)/Ie[5],rt=(Ie[9]-1)/Ie[5],nt=(Ie[8]-1)/Ie[0],vt=(it[8]+1)/it[0],wt=Pt*nt,st=Pt*vt,ot=Ve/(-nt+vt),Tt=ot*-nt;if(ce.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Tt),$.translateZ(ot),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ie[10]===-1)$.projectionMatrix.copy(ce.projectionMatrix),$.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const G=Pt+ot,Ht=ut+ot,xt=wt-Tt,U=st+(Ve-Tt),M=dt*ut/Ht*G,K=rt*ut/Ht*G;$.projectionMatrix.makePerspective(xt,U,M,K,G,Ht),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function re($,ce){ce===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ce.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(o===null)return;let ce=$.near,_e=$.far;_.texture!==null&&(_.depthNear>0&&(ce=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),Q.near=q.near=V.near=ce,Q.far=q.far=V.far=_e,(X!==Q.near||te!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),X=Q.near,te=Q.far),Q.layers.mask=$.layers.mask|6,V.layers.mask=Q.layers.mask&-5,q.layers.mask=Q.layers.mask&-3;const Ve=$.parent,Ie=Q.cameras;re(Q,Ve);for(let it=0;it<Ie.length;it++)re(Ie[it],Ve);Ie.length===2?D(Q,V,q):Q.projectionMatrix.copy(V.projectionMatrix),I===null&&$.isPerspectiveCamera&&(I={camera:$,fov:$.fov,zoom:$.zoom}),Me($,Q,Ve)};function Me($,ce,_e){_e===null?$.matrix.copy(ce.matrixWorld):($.matrix.copy(_e.matrixWorld),$.matrix.invert(),$.matrix.multiply(ce.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ce.projectionMatrix),$.projectionMatrixInverse.copy(ce.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ro*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&S===null))return h},this.setFoveation=function($){h=$,g!==null&&(g.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(Q)},this.getCameraTexture=function($){return v[$]};let Ue=null;function ve($,ce){if(x=ce.getViewerPose(p||u),E=ce,x!==null){const _e=x.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let Ve=!1;_e.length!==Q.cameras.length&&(Q.cameras.length=0,Ve=!0);for(let ut=0;ut<_e.length;ut++){const dt=_e[ut];let rt=null;if(S!==null)rt=S.getViewport(dt);else{const vt=y.getViewSubImage(g,dt);rt=vt.viewport,ut===0&&(e.setRenderTargetTextures(C,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(C))}let nt=J[ut];nt===void 0&&(nt=new Xn,nt.layers.enable(ut),nt.viewport=new Qt,J[ut]=nt),nt.matrix.fromArray(dt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(dt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(rt.x,rt.y,rt.width,rt.height),ut===0&&(Q.matrix.copy(nt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ve===!0&&Q.cameras.push(nt)}const Ie=o.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){y=r.getBinding();const ut=y.getDepthInformation(_e[0]);ut&&ut.isValid&&ut.texture&&_.init(ut,o.renderState)}if(Ie&&Ie.includes("camera-access")&&T){e.state.unbindTexture(),y=r.getBinding();for(let ut=0;ut<_e.length;ut++){const dt=_e[ut].camera;if(dt){let rt=v[dt];rt||(rt=new Yg,v[dt]=rt);const nt=y.getCameraImage(dt);rt.sourceTexture=nt}}}}for(let _e=0;_e<L.length;_e++){const Ve=P[_e],Ie=L[_e];Ve!==null&&Ie!==void 0&&Ie.update(Ve,ce,p||u)}Ue&&Ue($,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),E=null}const ye=new Zg;ye.setAnimationLoop(ve),this.setAnimationLoop=function($){Ue=$},this.dispose=function(){}}}const H1=new en,r0=new gt;r0.set(-1,0,0,0,1,0,0,0,1);function V1(s,e){function n(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function r(_,v){v.color.getRGB(_.fogColor.value,qg(s)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function o(_,v,N,k,C){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(_,v):v.isMeshLambertMaterial?(l(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(_,v),y(_,v)):v.isMeshPhongMaterial?(l(_,v),x(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(_,v),g(_,v),v.isMeshPhysicalMaterial&&S(_,v,C)):v.isMeshMatcapMaterial?(l(_,v),E(_,v)):v.isMeshDepthMaterial?l(_,v):v.isMeshDistanceMaterial?(l(_,v),T(_,v)):v.isMeshNormalMaterial?l(_,v):v.isLineBasicMaterial?(u(_,v),v.isLineDashedMaterial&&d(_,v)):v.isPointsMaterial?h(_,v,N,k):v.isSpriteMaterial?p(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,n(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Yn&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,n(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Yn&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,n(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,n(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const N=e.get(v),k=N.envMap,C=N.envMapRotation;k&&(_.envMap.value=k,_.envMapRotation.value.setFromMatrix4(H1.makeRotationFromEuler(C)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(r0),_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,_.aoMapTransform))}function u(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform))}function d(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function h(_,v,N,k){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*N,_.scale.value=k*.5,v.map&&(_.map.value=v.map,n(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function p(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function x(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function y(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function g(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function S(_,v,N){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Yn&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.retroreflectivity>0&&(_.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=N.texture,_.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,v){v.matcap&&(_.matcap.value=v.matcap)}function T(_,v){const N=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(N.matrixWorld),_.nearDistance.value=N.shadow.camera.near,_.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function G1(s,e,n,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,L){const P=L.program;r.uniformBlockBinding(C,P)}function p(C,L){let P=o[C.id];P===void 0&&(_(C),P=x(C),o[C.id]=P,C.addEventListener("dispose",N));const F=L.program;r.updateUBOMapping(C,F);const w=e.render.frame;l[C.id]!==w&&(g(C),l[C.id]=w)}function x(C){const L=y();C.__bindingPointIndex=L;const P=s.createBuffer(),F=C.__size,w=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,F,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function y(){for(let C=0;C<d;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const L=o[C.id],P=C.uniforms,F=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let w=0,I=P.length;w<I;w++){const V=P[w];if(Array.isArray(V))for(let q=0,J=V.length;q<J;q++)S(V[q],w,q,F);else S(V,w,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(C,L,P,F){if(T(C,L,P,F)===!0){const w=C.__offset,I=C.value;if(Array.isArray(I)){let V=0;for(let q=0;q<I.length;q++){const J=I[q],Q=v(J);E(J,C.__data,V),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(V+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(I,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,C.__data)}}function E(C,L,P){typeof C=="number"||typeof C=="boolean"?L[0]=C:C.isMatrix3?(L[0]=C.elements[0],L[1]=C.elements[1],L[2]=C.elements[2],L[3]=0,L[4]=C.elements[3],L[5]=C.elements[4],L[6]=C.elements[5],L[7]=0,L[8]=C.elements[6],L[9]=C.elements[7],L[10]=C.elements[8],L[11]=0):ArrayBuffer.isView(C)?L.set(new C.constructor(C.buffer,C.byteOffset,L.length)):C.toArray(L,P)}function T(C,L,P,F){const w=C.value,I=L+"_"+P;if(F[I]===void 0)return typeof w=="number"||typeof w=="boolean"?F[I]=w:ArrayBuffer.isView(w)?F[I]=w.slice():F[I]=w.clone(),!0;{const V=F[I];if(typeof w=="number"||typeof w=="boolean"){if(V!==w)return F[I]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(V.equals(w)===!1)return V.copy(w),!0}}return!1}function _(C){const L=C.uniforms;let P=0;const F=16;for(let I=0,V=L.length;I<V;I++){const q=Array.isArray(L[I])?L[I]:[L[I]];for(let J=0,Q=q.length;J<Q;J++){const X=q[J],te=Array.isArray(X.value)?X.value:[X.value];for(let pe=0,ne=te.length;pe<ne;pe++){const Z=te[pe],j=v(Z),B=P%F,D=B%j.boundary,re=B+D;P+=D,re!==0&&F-re<j.storage&&(P+=F-re),X.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=P,P+=j.storage}}}const w=P%F;return w>0&&(P+=F-w),C.__size=P,C.__cache={},this}function v(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",C),L}function N(C){const L=C.target;L.removeEventListener("dispose",N);const P=u.indexOf(L.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function k(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:h,update:p,dispose:k}}const W1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ui=null;function X1(){return Ui===null&&(Ui=new C_(W1,16,16,as,Vi),Ui.name="DFG_LUT",Ui.minFilter=on,Ui.magFilter=on,Ui.wrapS=ir,Ui.wrapT=ir,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}class Ud{constructor(e={}){const{canvas:n=Gx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:S=di}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const T=S,_=new Set([Ed,Md,yd]),v=new Set([di,Hi,to,no,_d,Sd]),N=new Uint32Array(4),k=new Int32Array(4),C=new ee;let L=null,P=null;const F=[],w=[];let I=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let q=!1,J=null,Q=null,X=null,te=null;this._outputColorSpace=fi;let pe=0,ne=0,Z=null,j=-1,B=null;const D=new Qt,re=new Qt;let Me=null;const Ue=new mt(0);let ve=0,ye=n.width,$=n.height,ce=1,_e=null,Ve=null;const Ie=new Qt(0,0,ye,$),it=new Qt(0,0,ye,$);let Pt=!1;const ut=new Gg;let dt=!1,rt=!1;const nt=new en,vt=new ee,wt=new Qt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Tt(){return Z===null?ce:1}let G=r;function Ht(b,W){return n.getContext(b,W)}let xt,U,M,K,le,me,be,Ne,ge,se,fe,Re,Ee,we,He,$e,Xe,z,Le,xe,De,ke,Se;try{const b={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vd}`),n.addEventListener("webglcontextlost",Dt,!1),n.addEventListener("webglcontextrestored",Nt,!1),n.addEventListener("webglcontextcreationerror",yn,!1),G===null){const W="webgl2";if(G=Ht(W,b),G===null)throw Ht(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(b){throw n.removeEventListener("webglcontextlost",Dt,!1),n.removeEventListener("webglcontextrestored",Nt,!1),n.removeEventListener("webglcontextcreationerror",yn,!1),Ft("WebGLRenderer: "+b.message),b}function Je(){xt=new XM(G),xt.init(),De=new F1(G,xt),U=new UM(G,xt,e,De),M=new I1(G,xt),U.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),Q=G.createFramebuffer(),X=G.createFramebuffer(),te=G.createFramebuffer(),K=new qM(G),le=new S1,me=new U1(G,xt,M,le,U,De,K),be=new WM(V),Ne=new K_(G),ke=new DM(G,Ne),ge=new jM(G,Ne,K,ke),se=new KM(G,ge,Ne,ke,K),z=new $M(G,U,me),He=new FM(le),fe=new _1(V,be,xt,U,ke,He),Re=new V1(V,le),Ee=new M1,we=new C1(xt),Xe=new LM(V,be,M,se,E,h),$e=new D1(V,se,U),Se=new G1(G,K,U,M),Le=new IM(G,xt,K),xe=new YM(G,xt,K),K.programs=fe.programs,V.capabilities=U,V.extensions=xt,V.properties=le,V.renderLists=Ee,V.shadowMap=$e,V.state=M,V.info=K}T!==di&&(I=new JM(T,n.width,n.height,d,o,l));const qe=new z1(V,G);this.xr=qe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=xt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=xt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(b){b!==void 0&&(ce=b,this.setSize(ye,$,!1))},this.getSize=function(b){return b.set(ye,$)},this.setSize=function(b,W,de=!0){if(qe.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=b,$=W,n.width=Math.floor(b*ce),n.height=Math.floor(W*ce),de===!0&&(n.style.width=b+"px",n.style.height=W+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(ye*ce,$*ce).floor()},this.setDrawingBufferSize=function(b,W,de){ye=b,$=W,ce=de,n.width=Math.floor(b*de),n.height=Math.floor(W*de),this.setViewport(0,0,b,W)},this.setEffects=function(b){if(T===di){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let W=0;W<b.length;W++)if(b[W].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(Ie)},this.setViewport=function(b,W,de,ae){b.isVector4?Ie.set(b.x,b.y,b.z,b.w):Ie.set(b,W,de,ae),M.viewport(D.copy(Ie).multiplyScalar(ce).round())},this.getScissor=function(b){return b.copy(it)},this.setScissor=function(b,W,de,ae){b.isVector4?it.set(b.x,b.y,b.z,b.w):it.set(b,W,de,ae),M.scissor(re.copy(it).multiplyScalar(ce).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(b){M.setScissorTest(Pt=b)},this.setOpaqueSort=function(b){_e=b},this.setTransparentSort=function(b){Ve=b},this.getClearColor=function(b){return b.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(b=!0,W=!0,de=!0){let ae=0;if(b){let ie=!1;if(Z!==null){const Be=Z.texture.format;ie=_.has(Be)}if(ie){const Be=Z.texture.type,Fe=v.has(Be),Oe=Xe.getClearColor(),Ke=Xe.getClearAlpha(),et=Oe.r,pt=Oe.g,_t=Oe.b;Fe?(N[0]=et,N[1]=pt,N[2]=_t,N[3]=Ke,G.clearBufferuiv(G.COLOR,0,N)):(k[0]=et,k[1]=pt,k[2]=_t,k[3]=Ke,G.clearBufferiv(G.COLOR,0,k))}else ae|=G.COLOR_BUFFER_BIT}W&&(ae|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ae|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&G.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),J=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Dt,!1),n.removeEventListener("webglcontextrestored",Nt,!1),n.removeEventListener("webglcontextcreationerror",yn,!1),Xe.dispose(),Ee.dispose(),we.dispose(),le.dispose(),be.dispose(),se.dispose(),ke.dispose(),Se.dispose(),fe.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",co),qe.removeEventListener("sessionend",uo),Dn.stop()};function Dt(b){b.preventDefault(),_m("WebGLRenderer: Context Lost."),q=!0}function Nt(){_m("WebGLRenderer: Context Restored."),q=!1;const b=K.autoReset,W=$e.enabled,de=$e.autoUpdate,ae=$e.needsUpdate,ie=$e.type;Je(),K.autoReset=b,$e.enabled=W,$e.autoUpdate=de,$e.needsUpdate=ae,$e.type=ie}function yn(b){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ni(b){const W=b.target;W.removeEventListener("dispose",ni),Dr(W)}function Dr(b){cs(b),le.remove(b)}function cs(b){const W=le.get(b).programs;W!==void 0&&(W.forEach(function(de){fe.releaseProgram(de)}),b.isShaderMaterial&&fe.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,de,ae,ie,Be){W===null&&(W=st);const Fe=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Oe=qt(b,W,de,ae,ie);M.setMaterial(ae,Fe);let Ke=de.index,et=1;if(ae.wireframe===!0){if(Ke=ge.getWireframeAttribute(de),Ke===void 0)return;et=2}const pt=de.drawRange,_t=de.attributes.position;let je=pt.start*et,At=(pt.start+pt.count)*et;Be!==null&&(je=Math.max(je,Be.start*et),At=Math.min(At,(Be.start+Be.count)*et)),Ke!==null?(je=Math.max(je,0),At=Math.min(At,Ke.count)):_t!=null&&(je=Math.max(je,0),At=Math.min(At,_t.count));const Zt=At-je;if(Zt<0||Zt===1/0)return;ke.setup(ie,ae,Oe,de,Ke);let zt,kt=Le;if(Ke!==null&&(zt=Ne.get(Ke),kt=xe,kt.setIndex(zt)),ie.isMesh)ae.wireframe===!0?(M.setLineWidth(ae.wireframeLinewidth*Tt()),kt.setMode(G.LINES)):kt.setMode(G.TRIANGLES);else if(ie.isLine){let ln=ae.linewidth;ln===void 0&&(ln=1),M.setLineWidth(ln*Tt()),ie.isLineSegments?kt.setMode(G.LINES):ie.isLineLoop?kt.setMode(G.LINE_LOOP):kt.setMode(G.LINE_STRIP)}else ie.isPoints?kt.setMode(G.POINTS):ie.isSprite&&kt.setMode(G.TRIANGLES);if(ie.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))kt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const ln=ie._multiDrawStarts,Ge=ie._multiDrawCounts,tn=ie._multiDrawCount,bt=Ke?Ne.get(Ke).bytesPerElement:1,Tn=le.get(ae).currentProgram.getUniforms();for(let St=0;St<tn;St++)Tn.setValue(G,"_gl_DrawID",St),kt.render(ln[St]/bt,Ge[St])}else if(ie.isInstancedMesh)kt.renderInstances(je,Zt,ie.count);else if(de.isInstancedBufferGeometry){const ln=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Ge=Math.min(de.instanceCount,ln);kt.renderInstances(je,Zt,Ge)}else kt.render(je,Zt)};function Ir(b,W,de,ae){J!==null&&b.isNodeMaterial&&J.setObject(ae,b),dt===!0&&He.setState(b,de,!1),b.transparent===!0&&b.side===jn&&b.forceSinglePass===!1?(b.side=Yn,b.needsUpdate=!0,kr(b,W,ae),b.side=rs,b.needsUpdate=!0,kr(b,W,ae),b.side=jn):kr(b,W,ae)}this.compile=function(b,W,de=null){de===null&&(de=b),J!==null&&J.renderStart(b,W,de),P=we.get(de),P.init(W),w.push(P),de.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(P.pushLight(ie),ie.castShadow&&P.pushShadow(ie))}),b!==de&&b.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(P.pushLight(ie),ie.castShadow&&P.pushShadow(ie))}),P.setupLights(),J!==null&&J.updateLights(P.state.lightsArray),rt=this.localClippingEnabled,dt=He.init(this.clippingPlanes,rt),dt===!0&&He.setGlobalState(this.clippingPlanes,W),J!==null&&$e.render(P.state.shadowsArray,de,W);const ae=new Set;return b.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Be=ie.material;if(Be)if(Array.isArray(Be))for(let Fe=0;Fe<Be.length;Fe++){const Oe=Be[Fe];Ir(Oe,de,W,ie),ae.add(Oe)}else Ir(Be,de,W,ie),ae.add(Be)}),P=w.pop(),J!==null&&J.renderEnd(),ae},this.compileAsync=function(b,W,de=null){const ae=this.compile(b,W,de);return new Promise(ie=>{function Be(){if(ae.forEach(function(Fe){const Ke=le.get(Fe).currentProgram;(Ke===void 0||Ke.isReady())&&ae.delete(Fe)}),ae.size===0){ie(b);return}setTimeout(Be,10)}xt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Ur=null;function cc(b){Ur&&Ur(b)}function co(){Dn.stop()}function uo(){Dn.start()}const Dn=new Zg;Dn.setAnimationLoop(cc),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(b){Ur=b,qe.setAnimationLoop(b),b===null?Dn.stop():Dn.start()},qe.addEventListener("sessionstart",co),qe.addEventListener("sessionend",uo),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;J!==null&&J.renderStart(b,W);const de=qe.enabled===!0&&qe.isPresenting===!0,ae=I!==null&&(Z===null||de)&&I.begin(V,Z);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(W),W=qe.getCamera()),b.isScene===!0&&b.onBeforeRender(V,b,W,Z),P=we.get(b,w.length),P.init(W),P.state.textureUnits=me.getTextureUnits(),w.push(P),nt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ut.setFromProjectionMatrix(nt,Bi,W.reversedDepth),rt=this.localClippingEnabled,dt=He.init(this.clippingPlanes,rt),L=Ee.get(b,F.length),L.init(),F.push(L),qe.enabled===!0&&qe.isPresenting===!0){const Fe=V.xr.getDepthSensingMesh();Fe!==null&&us(Fe,W,-1/0,V.sortObjects)}us(b,W,0,V.sortObjects),L.finish(),J!==null&&J.updateLights(P.state.lightsArray),V.sortObjects===!0&&L.sort(_e,Ve),ot=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,ot&&Xe.addToRenderList(L,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&He.beginShadows();const ie=P.state.shadowsArray;if($e.render(ie,b,W),dt===!0&&He.endShadows(),(ae&&I.hasRenderPass())===!1){const Fe=L.opaque,Oe=L.transmissive;if(P.setupLights(),W.isArrayCamera){const Ke=W.cameras;if(Oe.length>0)for(let et=0,pt=Ke.length;et<pt;et++){const _t=Ke[et];fo(Fe,Oe,b,_t)}ot&&Xe.render(b);for(let et=0,pt=Ke.length;et<pt;et++){const _t=Ke[et];aa(L,b,_t,_t.viewport)}}else Oe.length>0&&fo(Fe,Oe,b,W),ot&&Xe.render(b),aa(L,b,W)}Z!==null&&ne===0&&(me.updateMultisampleRenderTarget(Z),me.updateRenderTargetMipmap(Z)),ae&&I.end(V),b.isScene===!0&&b.onAfterRender(V,b,W),ke.resetDefaultState(),j=-1,B=null,w.pop(),w.length>0?(P=w[w.length-1],me.setTextureUnits(P.state.textureUnits),dt===!0&&He.setGlobalState(V.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?L=F[F.length-1]:L=null,J!==null&&J.renderEnd()};function us(b,W,de,ae){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)de=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLightProbeGrid)P.pushLightProbeGrid(b);else if(b.isLight)P.pushLight(b),b.castShadow&&P.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(ut)){ae&&wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(nt);const Fe=se.update(b),Oe=b.material;Oe.visible&&L.push(b,Fe,Oe,de,wt.z,null,W)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(ut))){const Fe=se.update(b),Oe=b.material;if(ae&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),wt.copy(b.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),wt.copy(Fe.boundingSphere.center)),wt.applyMatrix4(b.matrixWorld).applyMatrix4(nt)),Array.isArray(Oe)){const Ke=Fe.groups;for(let et=0,pt=Ke.length;et<pt;et++){const _t=Ke[et],je=Oe[_t.materialIndex];je&&je.visible&&L.push(b,Fe,je,de,wt.z,_t,W)}}else Oe.visible&&L.push(b,Fe,Oe,de,wt.z,null,W)}}const Be=b.children;for(let Fe=0,Oe=Be.length;Fe<Oe;Fe++)us(Be[Fe],W,de,ae)}function aa(b,W,de,ae){const{opaque:ie,transmissive:Be,transparent:Fe}=b;P.setupLightsView(de),dt===!0&&He.setGlobalState(V.clippingPlanes,de),ae&&M.viewport(D.copy(ae)),ie.length>0&&Fr(ie,W,de),Be.length>0&&Fr(Be,W,de),Fe.length>0&&Fr(Fe,W,de),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function fo(b,W,de,ae){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ae.id]===void 0){const je=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ae.id]=new Ri(1,1,{generateMipmaps:!0,type:je?Vi:di,minFilter:ts,samples:Math.max(4,U.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Be=P.state.transmissionRenderTarget[ae.id],Fe=ae.viewport||D;Be.setSize(Fe.z*V.transmissionResolutionScale,Fe.w*V.transmissionResolutionScale);const Oe=V.getRenderTarget(),Ke=V.getActiveCubeFace(),et=V.getActiveMipmapLevel();V.setRenderTarget(Be),V.getClearColor(Ue),ve=V.getClearAlpha(),ve<1&&V.setClearColor(16777215,.5),V.clear(),ot&&Xe.render(de);const pt=V.toneMapping;V.toneMapping=zi;const _t=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),P.setupLightsView(ae),dt===!0&&He.setGlobalState(V.clippingPlanes,ae),Fr(b,de,ae),me.updateMultisampleRenderTarget(Be),me.updateRenderTargetMipmap(Be),xt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let At=0,Zt=W.length;At<Zt;At++){const zt=W[At],{object:kt,geometry:ln,material:Ge,group:tn}=zt;if(Ge.side===jn&&kt.layers.test(ae.layers)){const bt=Ge.side;Ge.side=Yn,Ge.needsUpdate=!0,oa(kt,de,ae,ln,Ge,tn),Ge.side=bt,Ge.needsUpdate=!0,je=!0}}je===!0&&(me.updateMultisampleRenderTarget(Be),me.updateRenderTargetMipmap(Be))}V.setRenderTarget(Oe,Ke,et),V.setClearColor(Ue,ve),_t!==void 0&&(ae.viewport=_t),V.toneMapping=pt}function Fr(b,W,de){const ae=W.isScene===!0?W.overrideMaterial:null;for(let ie=0,Be=b.length;ie<Be;ie++){const Fe=b[ie],{object:Oe,geometry:Ke,group:et}=Fe;let pt=Fe.material;pt.allowOverride===!0&&ae!==null&&(pt=ae),Oe.layers.test(de.layers)&&oa(Oe,W,de,Ke,pt,et)}}function oa(b,W,de,ae,ie,Be){J!==null&&ie.isNodeMaterial&&J.setObject(b,ie),b.onBeforeRender(V,W,de,ae,ie,Be),b.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ie.onBeforeRender(V,W,de,ae,b,Be),ie.transparent===!0&&ie.side===jn&&ie.forceSinglePass===!1?(ie.side=Yn,ie.needsUpdate=!0,V.renderBufferDirect(de,W,ae,ie,b,Be),ie.side=rs,ie.needsUpdate=!0,V.renderBufferDirect(de,W,ae,ie,b,Be),ie.side=jn):V.renderBufferDirect(de,W,ae,ie,b,Be),b.onAfterRender(V,W,de,ae,ie,Be)}function kr(b,W,de){W.isScene!==!0&&(W=st);const ae=le.get(b),ie=P.state.lights,Be=P.state.shadowsArray,Fe=ie.state.version,Oe=fe.getParameters(b,ie.state,Be,W,de,P.state.lightProbeGridArray),Ke=fe.getProgramCacheKey(Oe);let et=ae.programs;ae.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?W.environment:null,ae.fog=W.fog;const pt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ae.envMap=be.get(b.envMap||ae.environment,pt),ae.envMapRotation=ae.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,et===void 0&&(b.addEventListener("dispose",ni),et=new Map,ae.programs=et);let _t=et.get(Ke);if(_t!==void 0){if(ae.currentProgram===_t&&ae.lightsStateVersion===Fe)return ho(b,Oe),_t}else Oe.uniforms=fe.getUniforms(b),J!==null&&b.isNodeMaterial&&J.build(b,de,Oe),b.onBeforeCompile(Oe,V),_t=fe.acquireProgram(Oe,Ke),et.set(Ke,_t),ae.uniforms=Oe.uniforms;const je=ae.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(je.clippingPlanes=He.uniform),ho(b,Oe),ae.needsLights=ca(b),ae.lightsStateVersion=Fe,ae.needsLights&&(je.ambientLightColor.value=ie.state.ambient,je.lightProbe.value=ie.state.probe,je.sunLights.value=ie.state.sun,je.sunLightShadows.value=ie.state.sunShadow,je.directionalLights.value=ie.state.directional,je.directionalLightShadows.value=ie.state.directionalShadow,je.spotLights.value=ie.state.spot,je.spotLightShadows.value=ie.state.spotShadow,je.rectAreaLights.value=ie.state.rectArea,je.ltc_1.value=ie.state.rectAreaLTC1,je.ltc_2.value=ie.state.rectAreaLTC2,je.pointLights.value=ie.state.point,je.pointLightShadows.value=ie.state.pointShadow,je.hemisphereLights.value=ie.state.hemi,je.sunShadowMatrix.value=ie.state.sunShadowMatrix,je.sunShadowCascade.value=ie.state.sunShadowCascade,je.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,je.spotLightMatrix.value=ie.state.spotLightMatrix,je.spotLightMap.value=ie.state.spotLightMap,je.pointShadowMatrix.value=ie.state.pointShadowMatrix),ae.lightProbeGrid=P.state.lightProbeGridArray.length>0,ae.currentProgram=_t,ae.uniformsList=null,_t}function la(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=$l.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function ho(b,W){const de=le.get(b);de.outputColorSpace=W.outputColorSpace,de.batching=W.batching,de.batchingColor=W.batchingColor,de.instancing=W.instancing,de.instancingColor=W.instancingColor,de.instancingMorph=W.instancingMorph,de.skinning=W.skinning,de.morphTargets=W.morphTargets,de.morphNormals=W.morphNormals,de.morphColors=W.morphColors,de.morphTargetsCount=W.morphTargetsCount,de.numClippingPlanes=W.numClippingPlanes,de.numIntersection=W.numClipIntersection,de.vertexAlphas=W.vertexAlphas,de.vertexTangents=W.vertexTangents,de.toneMapping=W.toneMapping}function uc(b,W){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;C.setFromMatrixPosition(W.matrixWorld);for(let de=0,ae=b.length;de<ae;de++){const ie=b[de];if(ie.texture!==null&&ie.boundingBox.containsPoint(C))return ie}return null}function qt(b,W,de,ae,ie){W.isScene!==!0&&(W=st),me.resetTextureUnits();const Be=W.fog,Fe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?W.environment:null,Oe=Z===null?V.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ct.workingColorSpace,Ke=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,et=be.get(ae.envMap||Fe,Ke),pt=ae.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,_t=!!de.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),je=!!de.morphAttributes.position,At=!!de.morphAttributes.normal,Zt=!!de.morphAttributes.color;let zt=zi;ae.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(zt=V.toneMapping);const kt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,ln=kt!==void 0?kt.length:0,Ge=le.get(ae),tn=P.state.lights;if(dt===!0&&(rt===!0||b!==B)){const Ot=b===B&&ae.id===j;He.setState(ae,b,Ot)}let bt=!1;ae.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==tn.state.version||Ge.outputColorSpace!==Oe||ie.isBatchedMesh&&Ge.batching===!1||!ie.isBatchedMesh&&Ge.batching===!0||ie.isBatchedMesh&&Ge.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&Ge.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&Ge.instancing===!1||!ie.isInstancedMesh&&Ge.instancing===!0||ie.isSkinnedMesh&&Ge.skinning===!1||!ie.isSkinnedMesh&&Ge.skinning===!0||ie.isInstancedMesh&&Ge.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ge.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ge.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ge.instancingMorph===!1&&ie.morphTexture!==null||Ge.envMap!==et||ae.fog===!0&&Ge.fog!==Be||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==He.numPlanes||Ge.numIntersection!==He.numIntersection)||Ge.vertexAlphas!==pt||Ge.vertexTangents!==_t||Ge.morphTargets!==je||Ge.morphNormals!==At||Ge.morphColors!==Zt||Ge.toneMapping!==zt||Ge.morphTargetsCount!==ln||!!Ge.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,Ge.__version=ae.version);let Tn=Ge.currentProgram;bt===!0&&(Tn=kr(ae,W,ie),J&&ae.isNodeMaterial&&J.onUpdateProgram(ae,Tn,Ge));let St=!1,pi=!1,Gi=!1;const It=Tn.getUniforms(),Xt=Ge.uniforms;if(M.useProgram(Tn.program)&&(St=!0,pi=!0,Gi=!0),ae.id!==j&&(j=ae.id,pi=!0),Ge.needsLights){const Ot=uc(P.state.lightProbeGridArray,ie);Ge.lightProbeGrid!==Ot&&(Ge.lightProbeGrid=Ot,pi=!0)}if(St||B!==b){M.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),It.setValue(G,"projectionMatrix",b.projectionMatrix),It.setValue(G,"viewMatrix",b.matrixWorldInverse);const ii=It.map.cameraPosition;ii!==void 0&&ii.setValue(G,vt.setFromMatrixPosition(b.matrixWorld)),U.logarithmicDepthBuffer&&It.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&It.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,pi=!0,Gi=!0)}if(Ge.needsLights&&(tn.state.sunShadowMap.length>0&&It.setValue(G,"sunShadowMap",tn.state.sunShadowMap,me),tn.state.directionalShadowMap.length>0&&It.setValue(G,"directionalShadowMap",tn.state.directionalShadowMap,me),tn.state.spotShadowMap.length>0&&It.setValue(G,"spotShadowMap",tn.state.spotShadowMap,me),tn.state.pointShadowMap.length>0&&It.setValue(G,"pointShadowMap",tn.state.pointShadowMap,me)),ie.isSkinnedMesh){It.setOptional(G,ie,"bindMatrix"),It.setOptional(G,ie,"bindMatrixInverse");const Ot=ie.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),It.setValue(G,"boneTexture",Ot.boneTexture,me))}ie.isBatchedMesh&&(It.setOptional(G,ie,"batchingTexture"),It.setValue(G,"batchingTexture",ie._matricesTexture,me),It.setOptional(G,ie,"batchingIdTexture"),It.setValue(G,"batchingIdTexture",ie._indirectTexture,me),It.setOptional(G,ie,"batchingColorTexture"),ie._colorsTexture!==null&&It.setValue(G,"batchingColorTexture",ie._colorsTexture,me));const mi=de.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&z.update(ie,de,Tn),(pi||Ge.receiveShadow!==ie.receiveShadow)&&(Ge.receiveShadow=ie.receiveShadow,It.setValue(G,"receiveShadow",ie.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&W.environment!==null&&(Xt.envMapIntensity.value=W.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=X1()),pi){if(It.setValue(G,"toneMappingExposure",V.toneMappingExposure),Ge.needsLights&&fc(Xt,Gi),Be&&ae.fog===!0&&Re.refreshFogUniforms(Xt,Be),Re.refreshMaterialUniforms(Xt,ae,ce,$,P.state.transmissionRenderTarget[b.id]),Ge.needsLights&&Ge.lightProbeGrid){const Ot=Ge.lightProbeGrid;Xt.probesSH.value=Ot.texture,Xt.probesMin.value.copy(Ot.boundingBox.min),Xt.probesMax.value.copy(Ot.boundingBox.max),Xt.probesResolution.value.copy(Ot.resolution)}$l.upload(G,la(Ge),Xt,me)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&($l.upload(G,la(Ge),Xt,me),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&It.setValue(G,"center",ie.center),It.setValue(G,"modelViewMatrix",ie.modelViewMatrix),It.setValue(G,"normalMatrix",ie.normalMatrix),It.setValue(G,"modelMatrix",ie.matrixWorld),ae.uniformsGroups!==void 0){const Ot=ae.uniformsGroups;for(let ii=0,gi=Ot.length;ii<gi;ii++){const vi=Ot[ii];Se.update(vi,Tn),Se.bind(vi,Tn)}}return Tn}function fc(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.sunLights.needsUpdate=W,b.sunLightShadows.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function ca(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return pe},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(b,W,de){const ae=le.get(b);ae.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),le.get(b.texture).__webglTexture=W,le.get(b.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:de,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,W){const de=le.get(b);de.__webglFramebuffer=W,de.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,de=0){Z=b,pe=W,ne=de;let ae=null,ie=!1,Be=!1;if(b){const Oe=le.get(b);if(Oe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(G.FRAMEBUFFER,Oe.__webglFramebuffer),D.copy(b.viewport),re.copy(b.scissor),Me=b.scissorTest,M.viewport(D),M.scissor(re),M.setScissorTest(Me),j=-1;return}else if(Oe.__webglFramebuffer===void 0)me.setupRenderTarget(b);else if(Oe.__hasExternalTextures)me.rebindTextures(b,le.get(b.texture).__webglTexture,le.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const pt=b.depthTexture;if(Oe.__boundDepthTexture!==pt){if(pt!==null&&le.has(pt)&&(b.width!==pt.image.width||b.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(b)}}const Ke=b.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Be=!0);const et=le.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(et[W])?ae=et[W][de]:ae=et[W],ie=!0):b.samples>0&&me.useMultisampledRTT(b)===!1?ae=le.get(b).__webglMultisampledFramebuffer:Array.isArray(et)?ae=et[de]:ae=et,D.copy(b.viewport),re.copy(b.scissor),Me=b.scissorTest}else D.copy(Ie).multiplyScalar(ce).floor(),re.copy(it).multiplyScalar(ce).floor(),Me=Pt;if(de!==0&&(ae=Q),M.bindFramebuffer(G.FRAMEBUFFER,ae)&&M.drawBuffers(b,ae),M.viewport(D),M.scissor(re),M.setScissorTest(Me),ie){const Oe=le.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,de)}else if(Be){const Oe=W;for(let Ke=0;Ke<b.textures.length;Ke++){const et=le.get(b.textures[Ke]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ke,et.__webglTexture,de,Oe)}}else if(b!==null&&de!==0){const Oe=le.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Oe.__webglTexture,de)}j=-1};function ua(b){const W=le.get(b);return(W.__readFormat!==b.format||W.__readType!==b.type)&&(W.__readFormat=b.format,W.__readType=b.type,W.__formatReadable=U.textureFormatReadable(b.format),W.__typeReadable=U.textureTypeReadable(b.type)),W}this.readRenderTargetPixels=function(b,W,de,ae,ie,Be,Fe,Oe=0){if(!(b&&b.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ke=Ke[Fe]),Ke){M.bindFramebuffer(G.FRAMEBUFFER,Ke);try{const et=b.textures[Oe],pt=et.format,_t=et.type;b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe);const je=ua(et);if(je.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(je.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-ae&&de>=0&&de<=b.height-ie&&G.readPixels(W,de,ae,ie,De.convert(pt),De.convert(_t),Be)}finally{const et=Z!==null?le.get(Z).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(b,W,de,ae,ie,Be,Fe,Oe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ke=Ke[Fe]),Ke)if(W>=0&&W<=b.width-ae&&de>=0&&de<=b.height-ie){M.bindFramebuffer(G.FRAMEBUFFER,Ke);const et=b.textures[Oe],pt=et.format,_t=et.type;b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe);const je=ua(et);if(je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,At),G.bufferData(G.PIXEL_PACK_BUFFER,Be.byteLength,G.STREAM_READ),G.readPixels(W,de,ae,ie,De.convert(pt),De.convert(_t),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);const Zt=Z!==null?le.get(Z).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Zt);const zt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Wx(G,zt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,At),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Be),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(At),G.deleteSync(zt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,W=null,de=0){const ae=Math.pow(2,-de),ie=Math.floor(b.image.width*ae),Be=Math.floor(b.image.height*ae),Fe=W!==null?W.x:0,Oe=W!==null?W.y:0;me.setTexture2D(b,0),G.copyTexSubImage2D(G.TEXTURE_2D,de,0,0,Fe,Oe,ie,Be),M.unbindTexture()},this.copyTextureToTexture=function(b,W,de=null,ae=null,ie=0,Be=0){let Fe,Oe,Ke,et,pt,_t,je,At,Zt;const zt=b.isCompressedTexture?b.mipmaps[Be]:b.image;if(de!==null)Fe=de.max.x-de.min.x,Oe=de.max.y-de.min.y,Ke=de.isBox3?de.max.z-de.min.z:1,et=de.min.x,pt=de.min.y,_t=de.isBox3?de.min.z:0;else{const Xt=Math.pow(2,-ie);Fe=Math.floor(zt.width*Xt),Oe=Math.floor(zt.height*Xt),b.isDataArrayTexture?Ke=zt.depth:b.isData3DTexture?Ke=Math.floor(zt.depth*Xt):Ke=1,et=0,pt=0,_t=0}ae!==null?(je=ae.x,At=ae.y,Zt=ae.z):(je=0,At=0,Zt=0);const kt=De.convert(W.format),ln=De.convert(W.type);let Ge;W.isData3DTexture?(me.setTexture3D(W,0),Ge=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(me.setTexture2DArray(W,0),Ge=G.TEXTURE_2D_ARRAY):(me.setTexture2D(W,0),Ge=G.TEXTURE_2D),M.activeTexture(G.TEXTURE0),M.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),M.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),M.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const tn=M.getParameter(G.UNPACK_ROW_LENGTH),bt=M.getParameter(G.UNPACK_IMAGE_HEIGHT),Tn=M.getParameter(G.UNPACK_SKIP_PIXELS),St=M.getParameter(G.UNPACK_SKIP_ROWS),pi=M.getParameter(G.UNPACK_SKIP_IMAGES);M.pixelStorei(G.UNPACK_ROW_LENGTH,zt.width),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,zt.height),M.pixelStorei(G.UNPACK_SKIP_PIXELS,et),M.pixelStorei(G.UNPACK_SKIP_ROWS,pt),M.pixelStorei(G.UNPACK_SKIP_IMAGES,_t);const Gi=b.isDataArrayTexture||b.isData3DTexture,It=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){const Xt=le.get(b),mi=le.get(W),Ot=le.get(Xt.__renderTarget),ii=le.get(mi.__renderTarget);M.bindFramebuffer(G.READ_FRAMEBUFFER,Ot.__webglFramebuffer),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let gi=0;gi<Ke;gi++)Gi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,le.get(b).__webglTexture,ie,_t+gi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,le.get(W).__webglTexture,Be,Zt+gi)),G.blitFramebuffer(et,pt,Fe,Oe,je,At,Fe,Oe,G.DEPTH_BUFFER_BIT,G.NEAREST);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ie!==0||b.isRenderTargetTexture||le.has(b)){const Xt=le.get(b),mi=le.get(W);M.bindFramebuffer(G.READ_FRAMEBUFFER,X),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,te);for(let Ot=0;Ot<Ke;Ot++)Gi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xt.__webglTexture,ie,_t+Ot):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Xt.__webglTexture,ie),It?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,mi.__webglTexture,Be,Zt+Ot):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,mi.__webglTexture,Be),ie!==0?G.blitFramebuffer(et,pt,Fe,Oe,je,At,Fe,Oe,G.COLOR_BUFFER_BIT,G.NEAREST):It?G.copyTexSubImage3D(Ge,Be,je,At,Zt+Ot,et,pt,Fe,Oe):G.copyTexSubImage2D(Ge,Be,je,At,et,pt,Fe,Oe);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else It?b.isDataTexture||b.isData3DTexture?G.texSubImage3D(Ge,Be,je,At,Zt,Fe,Oe,Ke,kt,ln,zt.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(Ge,Be,je,At,Zt,Fe,Oe,Ke,kt,zt.data):G.texSubImage3D(Ge,Be,je,At,Zt,Fe,Oe,Ke,kt,ln,zt):b.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Be,je,At,Fe,Oe,kt,ln,zt.data):b.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Be,je,At,zt.width,zt.height,kt,zt.data):G.texSubImage2D(G.TEXTURE_2D,Be,je,At,Fe,Oe,kt,ln,zt);M.pixelStorei(G.UNPACK_ROW_LENGTH,tn),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,bt),M.pixelStorei(G.UNPACK_SKIP_PIXELS,Tn),M.pixelStorei(G.UNPACK_SKIP_ROWS,St),M.pixelStorei(G.UNPACK_SKIP_IMAGES,pi),Be===0&&W.generateMipmaps&&G.generateMipmap(Ge),M.unbindTexture()},this.initRenderTarget=function(b){le.get(b).__webglFramebuffer===void 0&&me.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?me.setTextureCube(b,0):b.isData3DTexture?me.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?me.setTexture2DArray(b,0):me.setTexture2D(b,0),M.unbindTexture()},this.resetState=function(){pe=0,ne=0,Z=null,M.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}const j1=`
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;
  uniform float uTime;
  uniform vec3 uMouseWorld;
  uniform float uMouseInfluence;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    
    vec3 pos = position;
    // Harmonic fluid wave displacement
    float wave1 = sin(pos.x * 0.12 + uTime * 1.4) * cos(pos.y * 0.14 + uTime * 1.1);
    float wave2 = cos(pos.z * 0.15 + uTime * 1.6) * sin(pos.y * 0.11 + uTime * 0.9);
    float disp = (wave1 + wave2) * 1.85;

    // Fluid mouse repulsion/attraction
    vec3 worldP = (modelMatrix * vec4(pos, 1.0)).xyz;
    float dist = distance(worldP, uMouseWorld);
    float mouseWave = smoothstep(45.0, 0.0, dist) * uMouseInfluence * 2.2;
    pos += normal * (disp + mouseWave);

    vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,Y1=`
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;

  uniform vec3 uBaseColor;
  uniform vec3 uRimColor;
  uniform vec3 uAccentColor;
  uniform float uTime;

  void main() {
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    vec3 n = normalize(vNormal);

    // Fresnel rim glow
    float fresnel = 1.0 - max(dot(n, viewDir), 0.0);
    float rim = pow(fresnel, 3.2);
    float deepRim = pow(fresnel, 1.4);

    // Internal fluid chromatic shift
    float wavePattern = sin(vWorldPos.y * 0.1 + uTime * 0.8) * 0.5 + 0.5;
    vec3 internalGlow = mix(uBaseColor, uAccentColor, wavePattern * 0.4);

    vec3 finalColor = internalGlow * 0.45 + uRimColor * rim * 1.85 + uAccentColor * deepRim * 0.35;
    float alpha = clamp(0.22 + rim * 0.78, 0.0, 1.0);

    gl_FragColor = vec4(finalColor, alpha);
  }
`,q1=`
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;
  uniform float uCurve;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    
    vec3 pos = position;
    // Gentle natural curvature
    vec2 ndc = (uv - 0.5) * 2.0;
    pos.z -= dot(ndc, ndc) * uCurve;

    vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,$1=`
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;

  uniform sampler2D tMap;
  uniform vec2 uMouseNorm;
  uniform float uGlare;

  void main() {
    vec2 uv = vUv;
    
    // Subtle chromatic aberration on edges
    vec2 offset = (uv - 0.5) * 0.0035;
    float r = texture2D(tMap, uv + offset).r;
    float g = texture2D(tMap, uv).g;
    float b = texture2D(tMap, uv - offset).b;
    vec3 texColor = vec3(r, g, b);

    // Specular light sweep based on mouse position
    vec2 glarePos = uMouseNorm * 0.5 + 0.5;
    float distToGlare = distance(uv, glarePos);
    float glare = smoothstep(0.42, 0.0, distToGlare) * uGlare;

    // Elegant chamfer vignette
    vec2 d = abs(uv - 0.5) * 2.0;
    float edgeVignette = smoothstep(0.96, 0.75, max(d.x, d.y));

    vec3 finalColor = texColor * edgeVignette + vec3(0.85, 0.95, 1.0) * glare * 0.45;
    gl_FragColor = vec4(finalColor, 1.0);
  }
`,K1=({revealKey:s=0,onNavigateHome:e,onOpenWorks:n,onNavigateContact:r})=>{const o=at.useRef(null),l=at.useRef(null),[u,d]=at.useState(!1),[h,p]=at.useState(0),[x,y]=at.useState(!1),[g,S]=at.useState("sapphire"),E=at.useRef({normX:0,normY:0,targetTiltX:0,targetTiltY:0,currentTiltX:0,currentTiltY:0,coreRotX:0,coreRotY:0,clock:0});at.useEffect(()=>{s>0&&(d(!0),p(_=>_+1))},[s]),at.useEffect(()=>{const _=o.current;if(!_)return;const v=new IntersectionObserver(N=>{N.forEach(k=>{k.isIntersecting&&!u&&(d(!0),p(C=>C+1))})},{threshold:.15});return v.observe(_),()=>v.disconnect()},[u]);const T=()=>{var _;(_=navigator.clipboard)==null||_.writeText(rn.profile.email).catch(()=>{}),y(!0),setTimeout(()=>y(!1),2400)};return at.useEffect(()=>{const _=o.current,v=l.current;if(!_||!v)return;let N=_.clientWidth||window.innerWidth,k=_.clientHeight||window.innerHeight;const C=new Cd;C.fog=new ac(132114,.007);const L=new Xn(45,N/k,.1,1e3);L.position.set(0,0,78);const P=new Ud({canvas:v,antialias:!0,alpha:!0,powerPreference:"high-performance"});P.setSize(N,k),P.setPixelRatio(Math.min(window.devicePixelRatio,2));const F=650,w=new Sn,I=new Float32Array(F*3),V=new Float32Array(F*3),q=new mt("#38bdf8"),J=new mt("#818cf8"),Q=new mt("#34d399");for(let st=0;st<F;st++){const ot=st*3;I[ot]=(Math.random()-.5)*260,I[ot+1]=(Math.random()-.5)*180,I[ot+2]=-15-Math.random()*120;const Tt=Math.random(),G=Tt<.55?q:Tt<.85?J:Q;V[ot]=G.r,V[ot+1]=G.g,V[ot+2]=G.b}w.setAttribute("position",new ti(I,3)),w.setAttribute("color",new ti(V,3));const X=new Pd({size:1.35,vertexColors:!0,transparent:!0,opacity:.65,blending:ki}),te=new Xg(w,X);C.add(te);const pe=g==="sapphire",ne={uTime:{value:0},uMouseWorld:{value:new ee(0,0,0)},uMouseInfluence:{value:0},uBaseColor:{value:new mt("#030b1e")},uRimColor:{value:new mt(pe?"#38bdf8":"#34d399")},uAccentColor:{value:new mt(pe?"#818cf8":"#2dd4bf")}},Z=new Dd(16,4.2,140,32,2,3),j=new qn({vertexShader:j1,fragmentShader:Y1,uniforms:ne,transparent:!0,blending:ki,side:jn,depthWrite:!1}),B=new xn(Z,j);B.position.set(-20,-5,-8),C.add(B);const D=new Nd(24,24.6,64),re=new is({color:pe?3718648:3462041,transparent:!0,opacity:.28,side:jn,blending:ki}),Me=new xn(D,re);Me.rotation.x=Math.PI*.42,B.add(Me);const Ue=new $s;Ue.position.set(22,4,10),Ue.rotation.set(.04,-.28,0),C.add(Ue);const ve=new Lr(33,26,16,16),ye=new is({color:397606,transparent:!0,opacity:.72,side:jn}),$=new xn(ve,ye);$.position.z=-.4,Ue.add($);const ce=new I_(ve),_e=new Wg({color:8246268,transparent:!0,opacity:.45,blending:ki}),Ve=new N_(ce,_e);$.add(Ve);const Ie={tMap:{value:new _n},uCurve:{value:1.8},uMouseNorm:{value:new Rt(0,0)},uGlare:{value:.65}};new X_().load("/hero-biamtiero.jpg",st=>{st.minFilter=on,st.magFilter=on,st.needsUpdate=!0,Ie.tMap.value=st});const Pt=new Lr(32,25,48,36),ut=new qn({vertexShader:q1,fragmentShader:$1,uniforms:Ie,side:jn}),dt=new xn(Pt,ut);Ue.add(dt);const rt=st=>{const ot=_.getBoundingClientRect(),Tt=st.clientX-ot.left,G=st.clientY-ot.top;E.current.normX=Tt/N*2-1,E.current.normY=-(G/k)*2+1,E.current.targetTiltX=E.current.normY*.35,E.current.targetTiltY=-E.current.normX*.42};_.addEventListener("pointermove",rt);const nt=()=>{_&&(N=_.clientWidth||window.innerWidth,k=_.clientHeight||window.innerHeight,L.aspect=N/k,N<768?(L.position.z=100,Ue.position.set(0,16,0),Ue.scale.set(.72,.72,.72),B.position.set(0,-22,-10),B.scale.set(.8,.8,.8)):(L.position.z=78,Ue.position.set(22,4,10),Ue.scale.set(1,1,1),B.position.set(-20,-5,-8),B.scale.set(1,1,1)),L.updateProjectionMatrix(),P.setSize(N,k))};window.addEventListener("resize",nt),nt();let vt=0;const wt=()=>{E.current.clock+=.016;const st=E.current.clock;ne.uTime.value=st;const ot=new ee(E.current.normX*35,E.current.normY*25,0);ne.uMouseWorld.value.lerp(ot,.08),ne.uMouseInfluence.value=bi.lerp(ne.uMouseInfluence.value,Math.hypot(E.current.normX,E.current.normY),.05),B.rotation.x=Math.sin(st*.35)*.2+E.current.normY*.25,B.rotation.y+=.007,B.rotation.z=Math.cos(st*.28)*.15,Me.rotation.z+=.004,E.current.currentTiltX=bi.lerp(E.current.currentTiltX,E.current.targetTiltX,.065),E.current.currentTiltY=bi.lerp(E.current.currentTiltY,E.current.targetTiltY,.065),Ue.rotation.x=E.current.currentTiltX+Math.sin(st*.8)*.02,Ue.rotation.y=-.28+E.current.currentTiltY+Math.cos(st*.7)*.02,Ue.position.y=(N<768?16:4)+Math.sin(st*1.2)*1.1,Ie.uMouseNorm.value.set(E.current.normX,E.current.normY),te.rotation.y=st*.018,P.render(C,L),vt=requestAnimationFrame(wt)};return wt(),()=>{cancelAnimationFrame(vt),_.removeEventListener("pointermove",rt),window.removeEventListener("resize",nt),P.dispose(),w.dispose(),X.dispose(),Z.dispose(),j.dispose(),D.dispose(),re.dispose(),ve.dispose(),ye.dispose(),Pt.dispose(),ut.dispose()}},[g]),R.jsxs("section",{id:"tentang",ref:o,className:"relative min-h-screen w-full overflow-hidden bg-[#020412] text-white select-none",children:[R.jsx("canvas",{ref:l,className:"pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"}),R.jsx("div",{className:"pointer-events-none absolute inset-0 z-[1]",style:{background:"radial-gradient(ellipse 70% 60% at 75% 35%, rgba(56, 189, 248, 0.08) 0%, transparent 70%), linear-gradient(180deg, rgba(2,4,18,0.92) 0%, rgba(2,4,18,0.3) 25%, rgba(2,4,18,0.3) 75%, rgba(2,4,18,0.96) 100%)"}}),R.jsx("div",{className:"pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent"}),R.jsxs("div",{className:"relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-6 py-8 sm:px-10 sm:py-10",children:[R.jsxs("div",{className:`flex flex-wrap items-center justify-between gap-4 ${u?"reveal-fade-active":"opacity-0"}`,style:{animationDelay:"0.12s"},children:[R.jsxs("div",{className:"flex items-center gap-6 sm:gap-10",children:[R.jsxs("a",{href:"#beranda",onClick:e,className:"font-display text-base font-bold tracking-tight text-white hover:opacity-80 transition",children:["Biamtiero",R.jsx("span",{className:"text-sky-400",children:"."})]}),R.jsxs("a",{href:"#beranda",onClick:e,className:"hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white transition",children:[R.jsx("span",{children:"←"}),R.jsx("span",{className:"underline underline-offset-4",children:"Index"})]})]}),R.jsxs("div",{className:"flex items-center gap-3 sm:gap-5 text-xs font-medium",children:[n&&R.jsxs("button",{type:"button",onClick:_=>n(_),className:"glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sky-300 hover:text-white hover:bg-white/10 transition cursor-pointer",children:[R.jsx("span",{children:"Projects"}),R.jsx(vn,{className:"h-3.5 w-3.5"})]}),R.jsx("button",{type:"button",onClick:T,className:"glass-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-white/85 hover:text-white hover:bg-white/10 transition cursor-pointer",title:"Salin email ke clipboard",children:x?R.jsxs(R.Fragment,{children:[R.jsx(md,{className:"h-3.5 w-3.5 text-emerald-400"}),R.jsx("span",{className:"text-emerald-300",children:"Email disalin!"})]}):R.jsxs(R.Fragment,{children:[R.jsx(gd,{className:"h-3.5 w-3.5 opacity-60"}),R.jsx("span",{children:"Contact"})]})}),R.jsxs("button",{type:"button",onClick:()=>S(_=>_==="sapphire"?"emerald":"sapphire"),className:"glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-white/80 hover:text-white hover:bg-white/10 transition cursor-pointer",title:"Ganti nuansa pendaran 3D",children:[R.jsx("span",{className:`h-2 w-2 rounded-full transition-colors ${g==="sapphire"?"bg-sky-400 shadow-[0_0_8px_#38bdf8]":"bg-emerald-400 shadow-[0_0_8px_#34d399]"}`}),R.jsx("span",{className:"hidden md:inline",children:g==="sapphire"?"Sapphire Glow":"Emerald Glow"})]})]})]}),R.jsx("div",{className:"my-auto py-10 lg:py-14",children:R.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[R.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[R.jsxs("div",{className:`glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 ${u?"reveal-fade-active":"opacity-0"}`,style:{animationDelay:"0.08s"},children:[R.jsx(xg,{className:"h-3.5 w-3.5 text-sky-400"}),R.jsx("span",{children:"01 // ABOUT ME"})]}),R.jsx("div",{className:"overflow-hidden",children:R.jsxs("h2",{className:`font-display text-[clamp(2.25rem,5vw,4rem)] font-bold tracking-[-0.035em] leading-[1.08] text-white ${u?"reveal-title-active":"opacity-0"}`,style:{animationDelay:"0.14s"},children:["Membangun arsitektur yang tangguh"," ",R.jsx("span",{className:"font-light text-slate-300",children:"dengan pengalaman digital yang berjiwa."})]})}),R.jsxs("div",{className:`type-prose space-y-4 text-slate-200/90 ${u?"reveal-fade-active":"opacity-0"}`,style:{animationDelay:"0.24s"},children:[R.jsxs("p",{children:["Halo, saya ",R.jsx("strong",{className:"font-semibold text-white",children:"Biamtiero Amiral Kalman"}),". Saya seorang Full-Stack Developer & Creative Technologist asal Indonesia yang mendedikasikan waktu untuk merancang dan membangun produk digital dari gagasan awal hingga siap beroperasi di skala nyata."]}),R.jsx("p",{className:"text-slate-300/80",children:"Saya memandang teknologi bukan sekadar kumpulan kode, melainkan medium pemecahan masalah manusia. Dari arsitektur backend yang aman dan efisien, hingga interaksi 3D spasial di peramban yang terasa luwes dan responsif — setiap detail dibangun dengan kehati-hatian, presisi, dan integritas tinggi."})]}),R.jsxs("div",{className:`flex flex-wrap items-center gap-3 pt-2 ${u?"reveal-fade-active":"opacity-0"}`,style:{animationDelay:"0.30s"},children:[R.jsxs("a",{href:"#kontak",onClick:r,className:"inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98]",children:[R.jsx("span",{children:"Mulai Diskusi Proyek"}),R.jsx(vn,{className:"h-4 w-4"})]}),n&&R.jsxs("button",{type:"button",onClick:_=>n(_),className:"glass-pill inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium text-white transition hover:bg-white/10",children:[R.jsx("span",{children:"Lihat Hasil Karya"}),R.jsx(vn,{className:"h-4 w-4 text-sky-300"})]})]})]}),R.jsx("div",{className:"lg:col-span-5 pointer-events-none min-h-[140px] lg:min-h-[380px]"})]})}),R.jsxs("div",{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-white/10 ${u?"reveal-fade-active":"opacity-0"}`,style:{animationDelay:"0.36s"},children:[R.jsxs("div",{className:"glass-pill rounded-2xl p-5 backdrop-blur-md",children:[R.jsxs("div",{className:"flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-sky-300/80",children:[R.jsx(ax,{className:"h-4 w-4"}),R.jsx("span",{children:"Domisili"})]}),R.jsx("div",{className:"mt-2.5 text-sm sm:text-base font-semibold text-white",children:"Indonesia (UTC+7)"}),R.jsx("p",{className:"mt-1 text-xs text-slate-300/70",children:"Terbuka untuk remote & kolaborasi global tanpa batas wilayah."})]}),R.jsxs("div",{className:"glass-pill rounded-2xl p-5 backdrop-blur-md",children:[R.jsxs("div",{className:"flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-sky-300/80",children:[R.jsx(nx,{className:"h-4 w-4"}),R.jsx("span",{children:"Latar Belakang"})]}),R.jsx("div",{className:"mt-2.5 text-sm sm:text-base font-semibold text-white",children:"S1 Teknik Informatika"}),R.jsx("p",{className:"mt-1 text-xs text-slate-300/70",children:"3+ tahun berfokus pada rekayasa web, arsitektur data, dan pengalaman interaktif."})]}),R.jsxs("div",{className:"glass-pill rounded-2xl p-5 backdrop-blur-md",children:[R.jsxs("div",{className:"flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-sky-300/80",children:[R.jsx(tx,{className:"h-4 w-4"}),R.jsx("span",{children:"Prinsip Karya"})]}),R.jsx("div",{className:"mt-2.5 text-sm sm:text-base font-semibold text-white",children:"Presisi & Skalabilitas"}),R.jsx("p",{className:"mt-1 text-xs text-slate-300/70",children:"Struktur modular, kode bersih, dan performa tinggi yang tahan uji waktu."})]}),R.jsxs("div",{className:"glass-pill rounded-2xl p-5 backdrop-blur-md",children:[R.jsxs("div",{className:"flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-400",children:[R.jsx(ex,{className:"h-4 w-4"}),R.jsx("span",{children:"Status Ketersediaan"})]}),R.jsxs("div",{className:"mt-2.5 flex items-center gap-2 text-sm sm:text-base font-semibold text-white",children:[R.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"}),R.jsx("span",{children:"Open for Projects — 2026"})]}),R.jsx("p",{className:"mt-1 text-xs text-slate-300/70",children:"Siap berkolaborasi untuk mewujudkan ide produk digital Anda."})]})]})]},`about-stage-${h}`)]})},Z1=({revealKey:s=0,onNavigate:e,onOpenWorks:n})=>{const r=at.useRef(null),o=at.useRef(null),[l,u]=at.useState(!1),[d,h]=at.useState(0),[p,x]=at.useState(!1),[y,g]=at.useState(""),S=at.useRef({clock:0,normX:0,normY:0,camX:0,camY:0,pulseEnergy:0,targetPulseEnergy:0,rippleOrigin:new Rt(0,0)});at.useEffect(()=>{const v=()=>{try{const k=new Date,C=new Intl.DateTimeFormat("id-ID",{timeZone:"Asia/Jakarta",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(k);g(`${C} WIB (UTC+7)`)}catch{g("UTC+7 · Indonesia")}};v();const N=setInterval(v,1e3);return()=>clearInterval(N)},[]),at.useEffect(()=>{s>0&&(u(!0),h(v=>v+1))},[s]),at.useEffect(()=>{const v=r.current;if(!v)return;const N=new IntersectionObserver(k=>{k.forEach(C=>{C.isIntersecting&&!l&&(u(!0),h(L=>L+1))})},{threshold:.18});return N.observe(v),()=>N.disconnect()},[l]);const E=()=>{var v;(v=navigator.clipboard)==null||v.writeText(rn.profile.email).catch(()=>{}),x(!0),S.current.targetPulseEnergy=1,setTimeout(()=>x(!1),2400)},T=()=>{S.current.targetPulseEnergy=.85};at.useEffect(()=>{const v=r.current,N=o.current;if(!v||!N)return;let k=v.clientWidth||window.innerWidth,C=v.clientHeight||window.innerHeight;const L=new Cd;L.fog=new ac(132114,.009);const P=new Xn(50,k/C,.1,1e3);P.position.set(0,22,60),P.lookAt(0,0,0);const F=new Ud({canvas:N,antialias:!0,alpha:!0,powerPreference:"high-performance"});F.setSize(k,C),F.setPixelRatio(Math.min(window.devicePixelRatio,2));const w=70,I=70,V=w*I,q=2.4,J=new Sn,Q=new Float32Array(V*3),X=new Float32Array(V*3),te=new Float32Array(V*3),pe=new mt("#0e2a47"),ne=new mt("#38bdf8"),Z=new mt("#2dd4bf");new mt("#ffffff");let j=0;for(let rt=0;rt<w;rt++)for(let nt=0;nt<I;nt++){const vt=(rt-w/2)*q,wt=(nt-I/2)*q,st=0;Q[j*3]=vt,Q[j*3+1]=st,Q[j*3+2]=wt,X[j*3]=vt,X[j*3+1]=st,X[j*3+2]=wt,te[j*3]=pe.r,te[j*3+1]=pe.g,te[j*3+2]=pe.b,j++}J.setAttribute("position",new ti(Q,3)),J.setAttribute("color",new ti(te,3));const B=new Pd({size:1.6,vertexColors:!0,transparent:!0,opacity:.78,blending:ki,depthWrite:!1}),D=new Xg(J,B);D.position.set(0,-12,-8),D.rotation.x=-.22,L.add(D);const re=new $s;re.position.set(0,4,-20),L.add(re);const Me=new ic(18,.22,16,100),Ue=new is({color:3718648,transparent:!0,opacity:.45,blending:ki}),ve=new xn(Me,Ue);ve.rotation.x=Math.PI*.45,re.add(ve);const ye=new ic(26,.16,16,120),$=new is({color:3003583,transparent:!0,opacity:.32,blending:ki}),ce=new xn(ye,$);ce.rotation.y=Math.PI*.25,re.add(ce);const _e=new Ld(3.5,32,32),Ve=new is({color:165063,transparent:!0,opacity:.55,blending:ki}),Ie=new xn(_e,Ve);re.add(Ie);const it=rt=>{const nt=v.getBoundingClientRect(),vt=rt.clientX-nt.left,wt=rt.clientY-nt.top;S.current.normX=vt/k*2-1,S.current.normY=-(wt/C)*2+1,S.current.rippleOrigin.set(S.current.normX*30,-S.current.normY*30)};v.addEventListener("pointermove",it);const Pt=()=>{v&&(k=v.clientWidth||window.innerWidth,C=v.clientHeight||window.innerHeight,P.aspect=k/C,P.updateProjectionMatrix(),F.setSize(k,C))};window.addEventListener("resize",Pt),Pt();let ut=0;const dt=()=>{S.current.clock+=.018;const rt=S.current.clock;S.current.pulseEnergy=bi.lerp(S.current.pulseEnergy,S.current.targetPulseEnergy,.12),S.current.targetPulseEnergy=bi.lerp(S.current.targetPulseEnergy,0,.04),S.current.camX=bi.lerp(S.current.camX,S.current.normX*12,.05),S.current.camY=bi.lerp(S.current.camY,22+S.current.normY*6,.05),P.position.x=S.current.camX,P.position.y=S.current.camY,P.lookAt(0,-2,-10);const nt=J.attributes.position,vt=J.attributes.color,wt=nt.array,st=vt.array,ot=S.current.pulseEnergy,Tt=S.current.rippleOrigin;for(let Ht=0;Ht<V;Ht++){const xt=Ht*3,U=X[xt],M=X[xt+2],K=Math.sin(U*.07+rt*1.6)*Math.cos(M*.07+rt*1.3),le=Math.cos((U+M)*.05+rt*1.2)*2.2,me=U-Tt.x,be=M-Tt.y,Ne=Math.hypot(me,be),ge=Math.sin(Ne*.25-rt*3.5)*Math.exp(-Ne*.05)*2.8,se=Math.hypot(U,M),fe=Math.sin(se*.2-rt*5)*Math.exp(-se*.035)*(ot*9.5),Re=K*3.2+le+ge+fe;wt[xt+1]=Re;const Ee=bi.clamp((Re+6)/12,0,1),we=ot>.05?Z:ne,He=bi.lerp(pe.r,we.r,Ee)+ot*.4,$e=bi.lerp(pe.g,we.g,Ee)+ot*.6,Xe=bi.lerp(pe.b,we.b,Ee)+ot*.8;st[xt]=He,st[xt+1]=$e,st[xt+2]=Xe}nt.needsUpdate=!0,vt.needsUpdate=!0,ve.rotation.z+=.006,ve.rotation.y=Math.sin(rt*.6)*.35,ce.rotation.z-=.004,ce.rotation.x=Math.PI*.35+Math.cos(rt*.5)*.25;const G=1+Math.sin(rt*2.2)*.12+ot*.8;Ie.scale.set(G,G,G),F.render(L,P),ut=requestAnimationFrame(dt)};return dt(),()=>{cancelAnimationFrame(ut),v.removeEventListener("pointermove",it),window.removeEventListener("resize",Pt),F.dispose(),J.dispose(),B.dispose(),Me.dispose(),Ue.dispose(),ye.dispose(),$.dispose(),_e.dispose(),Ve.dispose()}},[]);const _=[{label:"GitHub",href:rn.profile.github},{label:"LinkedIn",href:rn.profile.linkedin},{label:"Instagram",href:rn.profile.instagram}];return R.jsxs("section",{id:"kontak",ref:r,className:"relative min-h-screen w-full overflow-hidden bg-[#020412] text-white select-none",children:[R.jsx("canvas",{ref:o,className:"pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"}),R.jsx("div",{className:"pointer-events-none absolute inset-0 z-[1]",style:{background:"radial-gradient(ellipse 90% 50% at 50% 100%, rgba(14, 165, 233, 0.14) 0%, rgba(2, 4, 18, 0) 75%), linear-gradient(180deg, rgba(2,4,18,0.92) 0%, rgba(2,4,18,0.3) 25%, rgba(2,4,18,0.3) 70%, rgba(2,4,18,0.98) 100%)"}}),R.jsx("div",{className:"pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/25 to-transparent"}),R.jsxs("div",{className:"relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-6 py-8 sm:px-10 sm:py-10",children:[R.jsxs("div",{className:`flex flex-wrap items-center justify-between gap-4 ${l?"reveal-fade-active":"opacity-0"}`,style:{animationDelay:"0.12s"},children:[R.jsxs("div",{className:"flex items-center gap-4 sm:gap-8",children:[R.jsxs("span",{className:"glass-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300",children:[R.jsx(xg,{className:"h-3.5 w-3.5 text-sky-400"}),R.jsx("span",{children:"02 // CONTACT"})]}),R.jsxs("span",{className:"hidden sm:inline-flex items-center gap-2 text-xs font-medium text-slate-300",children:[R.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"}),R.jsx("span",{children:y||"Asia/Jakarta (UTC+7)"})]})]}),R.jsxs("div",{className:"flex items-center gap-3 sm:gap-5 text-xs font-medium",children:[n&&R.jsxs("button",{type:"button",onClick:v=>n(v),className:"glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sky-300 hover:text-white hover:bg-white/10 transition cursor-pointer",children:[R.jsx("span",{children:"Projects"}),R.jsx(vn,{className:"h-3.5 w-3.5"})]}),R.jsx("a",{href:"#tentang",onClick:v=>e==null?void 0:e("tentang",v),className:"glass-pill inline-flex items-center rounded-full px-4 py-2 text-slate-200 hover:text-white hover:bg-white/10 transition",children:"About"}),R.jsxs("a",{href:"#beranda",onClick:v=>e==null?void 0:e("beranda",v),className:"glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-slate-200 hover:text-white hover:bg-white/10 transition",children:[R.jsx("span",{children:"←"}),R.jsx("span",{children:"Home"})]})]})]}),R.jsx("div",{className:"my-auto py-12 lg:py-16",children:R.jsxs("div",{className:"max-w-4xl space-y-6",children:[R.jsxs("div",{className:`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 ${l?"reveal-fade-active":"opacity-0"}`,style:{animationDelay:"0.08s"},children:[R.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"}),R.jsx("span",{children:"Terbuka untuk Kolaborasi Baru"})]}),R.jsxs("div",{className:"overflow-hidden space-y-1",children:[R.jsx("h2",{className:`font-display text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-[-0.035em] leading-[1.04] text-white ${l?"reveal-title-active":"opacity-0"}`,style:{animationDelay:"0.14s"},children:"LET'S BUILD SOMETHING"}),R.jsx("h2",{className:`font-display text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-[-0.035em] leading-[1.04] text-sky-300 ${l?"reveal-title-active":"opacity-0"}`,style:{animationDelay:"0.22s"},children:"EXTRAORDINARY."})]}),R.jsx("p",{className:`type-prose text-slate-300/90 ${l?"reveal-fade-active":"opacity-0"}`,style:{animationDelay:"0.30s"},children:"Punya konsep produk digital, proyek aplikasi web, arsitektur sistem berskala tinggi, atau sekadar ingin bertukar gagasan kreatif? Pintu komunikasi selalu terbuka."}),R.jsxs("div",{className:`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 ${l?"reveal-fade-active":"opacity-0"}`,style:{animationDelay:"0.38s"},children:[R.jsxs("button",{type:"button",onClick:E,onMouseEnter:T,className:"glass-pill group relative flex items-center justify-between gap-6 rounded-full px-6 py-4 sm:px-7 sm:py-4.5 backdrop-blur-md transition-all duration-300 hover:border-sky-400/50 hover:bg-white/10 active:scale-[0.99] cursor-pointer",title:"Klik untuk menyalin email dan memicu sinyal 3D",children:[R.jsxs("div",{className:"flex items-center gap-3.5",children:[R.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sky-300 group-hover:bg-sky-400/25 group-hover:text-white transition",children:p?R.jsx(md,{className:"h-4 w-4 text-emerald-400"}):R.jsx(gd,{className:"h-4 w-4"})}),R.jsxs("div",{className:"text-left",children:[R.jsx("span",{className:"block text-[11px] font-medium uppercase tracking-wider text-slate-400",children:p?"Tersalin ke Clipboard!":"Klik untuk Salin Email"}),R.jsx("span",{className:"text-base sm:text-xl font-semibold tracking-tight text-white",children:rn.profile.email})]})]}),R.jsx("span",{className:"hidden sm:inline-flex h-2.5 w-2.5 rounded-full bg-sky-400/60 transition-transform group-hover:scale-125 group-hover:bg-sky-300"})]}),R.jsxs("a",{href:`mailto:${rn.profile.email}`,onMouseEnter:T,className:"group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm sm:text-base font-semibold text-slate-950 shadow-[0_0_30px_rgba(255,255,255,0.22)] transition-all duration-300 hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98]",children:[R.jsx(ox,{className:"h-4 w-4 text-slate-950"}),R.jsx("span",{children:"Kirim Email Langsung"}),R.jsxs("span",{className:"jesper-arrow-box",children:[R.jsx(vn,{className:"jesper-arrow-primary h-4 w-4"}),R.jsx(vn,{className:"jesper-arrow-secondary h-4 w-4"})]})]})]})]})}),R.jsxs("div",{className:`flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10 ${l?"reveal-fade-active":"opacity-0"}`,style:{animationDelay:"0.46s"},children:[R.jsx("div",{className:"flex flex-wrap items-center gap-3",children:_.map(v=>R.jsxs("a",{href:v.href,target:"_blank",rel:"noreferrer",onMouseEnter:T,className:"glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-slate-200 hover:text-white hover:bg-white/10 transition",children:[R.jsx("span",{children:v.label}),R.jsx(vn,{className:"h-3 w-3 text-sky-400"})]},v.label))}),R.jsxs("div",{className:"flex items-center gap-6 text-xs text-slate-400",children:[R.jsx("span",{children:"© 2026 Biamtiero Amiral Kalman"}),R.jsxs("button",{type:"button",onClick:v=>e==null?void 0:e("beranda",v),className:"glass-pill inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-slate-200 hover:text-white hover:bg-white/10 transition cursor-pointer",children:[R.jsx("span",{children:"Back to Top"}),R.jsx(Jv,{className:"h-3.5 w-3.5"})]})]})]})]},`contact-stage-${d}`)]})},J1=`
  uniform float uScrollOffset;
  uniform float uCardBaseX;
  uniform float uTotalWidth;
  uniform float uVelocity;
  uniform float uTime;
  uniform float uHover;
  uniform float uSheetP;     // 1.0 = on 3D S-curve ribbon, 0.0 = flat
  uniform float uWhite;      // 0.0 = artwork card, 1.0 = white pill/sheet
  uniform float uIntroP;     // 0.0 = small horizontal white bar in center, 1.0 = full 3D card on ribbon
  uniform vec2 uIntroBarPos; // Starting center X,Y of the small white boot bar

  varying vec2 vUv;
  varying float vWorldX;
  varying float vWaveZ;
  varying float vSlope;

  #define PI 3.14159265359
  #define SHEET_TAIL 0.38
  #define SHEET_BANK 0.24
  #define SHEET_DIAG -0.042
  #define SHEET_WAVE 0.065

  // Jesper Landberg's exact S-curve with Gaussian tail
  float sheetShape(float q) {
    return sin(PI * q) * exp(-SHEET_TAIL * q * q);
  }

  float sheetShapeSlope(float q) {
    float g = exp(-SHEET_TAIL * q * q);
    return (PI * cos(PI * q) - 2.0 * SHEET_TAIL * q * sin(PI * q)) * g;
  }

  float sheetDome(vec2 uv) {
    vec2 q = uv * 2.0 - 1.0;
    return (1.0 - q.x * q.x) * (1.0 - q.y * q.y);
  }

  void main() {
    vUv = uv;

    // Wrap card center X infinitely within [-uTotalWidth/2, uTotalWidth/2]
    float halfSpan = uTotalWidth * 0.5;
    float wrappedCenterX = mod(uCardBaseX - uScrollOffset + halfSpan, uTotalWidth) - halfSpan;

    // Morph geometry scale from small horizontal pill bar (width 0.14, height 0.032) -> full 3D card (1.0, 1.0)
    vec3 barPos = vec3(
      uIntroBarPos.x + position.x * 0.135,
      uIntroBarPos.y + position.y * 0.032,
      0.0
    );

    vec3 pos = position;
    float worldX = wrappedCenterX + pos.x;
    vWorldX = worldX;

    // Normalized viewport width coordinate q
    float sheetW = 6.2;
    float q = worldX / sheetW;
    float slope = sheetShapeSlope(q);
    vSlope = slope;

    float activeRibbon = uSheetP * uIntroP;

    // 1. Ribbon Roll (sheetWind): roll (y, z) around the ribbon centreline (y=0, z=0)
    float rollAngle = SHEET_BANK * (slope / PI) * activeRibbon;
    // Velocity edge twist on top of resting bank
    float dynVel = clamp(uVelocity, -2.0, 2.0);
    rollAngle += 0.14 * dynVel * smoothstep(0.25, 0.9, abs(q)) * sign(q) * activeRibbon;

    float s = sin(rollAngle);
    float c = cos(rollAngle);
    float wy = pos.y * c;
    float wz = pos.y * s;

    // 2. Primary S-Curve Depth Sweep (sheetZ)
    float depthAmp = 1.18 * (1.0 + 0.22 * abs(dynVel));
    wz += -depthAmp * sheetShape(q) * activeRibbon;

    // 3. Diagonal slope & vertical wave (AFTER the wind, just like Jesper's sheet())
    wy += SHEET_DIAG * worldX * activeRibbon;
    wy += SHEET_WAVE * sheetW * sin(PI * (q * 0.85 + 0.18)) * activeRibbon;

    // 4. Velocity rear-up on the left side during scroll
    float leftMask = 1.0 - smoothstep(-1.0, 0.3, q);
    wy += 0.05 * sheetW * abs(dynVel) * leftMask * activeRibbon;
    wz += 0.08 * sheetW * abs(dynVel) * leftMask * activeRibbon;

    // 5. Hover dome dent (pushes center of hovered card subtly like a tactile membrane)
    float dome = sheetDome(uv);
    wz -= uHover * 0.16 * dome * activeRibbon;

    vWaveZ = wz;

    vec3 landedWorldPos = vec3(worldX, wy, wz);
    vec3 finalWorldPos = mix(barPos, landedWorldPos, uIntroP);
    gl_Position = projectionMatrix * viewMatrix * vec4(finalWorldPos, 1.0);
  }
`,Q1=`
  uniform sampler2D uTexture;
  uniform float uHover;
  uniform float uSheetP;
  uniform float uWhite;
  uniform float uIntroP;
  uniform float uAlpha;

  varying vec2 vUv;
  varying float vWorldX;
  varying float vWaveZ;
  varying float vSlope;

  float sdRoundedBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
  }

  void main() {
    // Morph aspect & corner radius from a fully-rounded pill bar (uIntroP = 0) to 16:9.5 card (uIntroP = 1)
    vec2 aspect = mix(vec2(4.2, 1.0), vec2(1.72, 1.0), uIntroP);
    vec2 p = (vUv - 0.5) * aspect;
    vec2 halfSize = aspect * 0.5;
    float cornerRadius = mix(0.48, 0.058, uIntroP);

    float d = sdRoundedBox(p, halfSize, cornerRadius);
    float aa = max(fwidth(d), 0.003);
    float mask = 1.0 - smoothstep(-aa, aa, d);
    if (mask < 0.01) discard;

    vec4 texColor = texture2D(uTexture, vUv);

    // Trough shading & analytical specular sheen across the S-curve wave
    float troughShade = clamp(0.88 + vWaveZ * 0.16, 0.58, 1.08);
    float gloss = pow(clamp(1.0 - abs(vSlope) * 0.28, 0.0, 1.0), 4.0) * 0.05 * uSheetP;

    vec3 cardRgb = texColor.rgb * mix(1.0, troughShade, uSheetP) + vec3(gloss);

    // Starts pure white as the 3 boot bars (1.0 - uIntroP), and also turns pure white when clicked into the detail sheet (uWhite)!
    float whiteMix = clamp(max(1.0 - pow(uIntroP, 0.75), uWhite), 0.0, 1.0);
    vec3 finalRgb = mix(cardRgb, vec3(1.0), whiteMix);

    gl_FragColor = vec4(finalRgb, mask * uAlpha);
  }
`,ew=`
  varying vec3 vWorldPos;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,tw=`
  uniform float uScrollOffset;
  uniform float uFloorAlpha;
  uniform vec3 uActiveAccent;

  varying vec3 vWorldPos;
  varying vec2 vUv;

  void main() {
    if (uFloorAlpha < 0.005) discard;

    vec2 coord = vec2(vWorldPos.x + uScrollOffset * 0.9, vWorldPos.z);

    // Crisp architectural wireframe grid cells (Jesper Landberg floor)
    vec2 grid = abs(fract(coord * 0.48 - 0.5) - 0.5) / fwidth(coord * 0.48);
    float line = min(grid.x, grid.y);
    float gridMask = 1.0 - min(line, 1.0);

    // Distance fade into pitch-black horizon
    float dist = length(vec2(vWorldPos.x * 0.052, (vWorldPos.z + 1.2) * 0.085));
    float fade = pow(clamp(1.0 - dist, 0.0, 1.0), 1.6);

    // Subtle soft reflection pool beneath the S-curve ribbon
    float reflPool = exp(-(vWorldPos.x * vWorldPos.x * 0.045 + (vWorldPos.z + 0.4) * (vWorldPos.z + 0.4) * 0.12));

    vec3 gridCol = mix(vec3(0.20, 0.20, 0.22), vec3(0.34, 0.35, 0.38), reflPool);
    float alpha = (gridMask * 0.52 + reflPool * 0.06) * fade * uFloorAlpha;

    gl_FragColor = vec4(gridCol, clamp(alpha, 0.0, 1.0));
  }
`,Gl=["/hero-warrior.jpg","/hero-hands.jpg","/hero-biamtiero.jpg"];function nw(s,e,n,r,o,l){s.beginPath(),s.moveTo(e+l,n),s.lineTo(e+r-l,n),s.quadraticCurveTo(e+r,n,e+r,n+l),s.lineTo(e+r,n+o-l),s.quadraticCurveTo(e+r,n+o,e+r-l,n+o),s.lineTo(e+l,n+o),s.quadraticCurveTo(e,n+o,e,n+o-l),s.lineTo(e,n+l),s.quadraticCurveTo(e,n,e+l,n),s.closePath()}function mg(s,e,n){var L;const r=document.createElement("canvas"),o=1600,l=930;r.width=o,r.height=l;const u=r.getContext("2d"),d=s.title.split("—")[0].trim(),h=((L=s.title.split("—")[1])==null?void 0:L.trim())||s.category,p=[{bg0:"#1c1510",bg1:"#5c3d28",bg2:"#120d0a",serifTitle:!0},{bg0:"#d8dadf",bg1:"#b8bcc4",bg2:"#8c9099",serifTitle:!1,lightTheme:!0},{bg0:"#091526",bg1:"#16325c",bg2:"#050b14",serifTitle:!0},{bg0:"#1f1124",bg1:"#4a1d54",bg2:"#0d0710",serifTitle:!1},{bg0:"#0d211d",bg1:"#19473e",bg2:"#06110f",serifTitle:!0},{bg0:"#21180b",bg1:"#523916",bg2:"#120c05",serifTitle:!1}],x=p[e%p.length],y=u.createLinearGradient(0,0,o,l);if(y.addColorStop(0,x.bg0),y.addColorStop(.55,x.bg1),y.addColorStop(1,x.bg2),u.fillStyle=y,u.fillRect(0,0,o,l),n&&n.complete&&n.naturalWidth>0){u.save(),u.globalAlpha=x.lightTheme?.22:.42;const P=n.naturalWidth/n.naturalHeight,F=o/l;let w=o,I=l;P>F?(I=l,w=l*P):(w=o,I=o/P),u.drawImage(n,(o-w)*.5,(l-I)*.5,w,I),u.restore()}u.save();const g=x.lightTheme?"rgba(15,15,18,0.72)":"rgba(255,255,255,0.72)";u.fillStyle=s.accentHex,u.beginPath(),u.arc(54,48,7,0,Math.PI*2),u.fill(),u.font="500 18px Inter, sans-serif",u.fillStyle=g,u.fillText("Overview",72,54),u.fillStyle=x.lightTheme?"rgba(15,15,18,0.45)":"rgba(255,255,255,0.45)",u.fillText("Architecture",180,54),u.fillText("Stack",312,54),u.fillText("Live Demo",395,54),u.font="500 20px Georgia, serif",u.textAlign="center",u.fillStyle=g,u.fillText(d.toUpperCase(),o*.5,54),nw(u,o-210,30,165,36,18),u.fillStyle=x.lightTheme?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.12)",u.fill(),u.font="500 15px Inter, sans-serif",u.fillStyle=g,u.fillText(`${s.category.split(" ")[0]} · ${s.year}`,o-127,53),u.restore(),u.save();const S=o*.5,E=l*.56,T=u.createRadialGradient(S-30,E-30,15,S,E,175);T.addColorStop(0,"#fde68a"),T.addColorStop(.55,s.accentHex),T.addColorStop(1,"rgba(0,0,0,0)"),u.fillStyle=T,u.beginPath(),u.arc(S,E,175,0,Math.PI*2),u.fill(),u.strokeStyle=x.lightTheme?"rgba(0,0,0,0.16)":"rgba(255,255,255,0.22)",u.lineWidth=18,u.beginPath(),u.ellipse(S,E+115,340,68,0,0,Math.PI*2),u.stroke(),u.textAlign="center",u.font=x.serifTitle?'italic 400 215px "Instrument Serif", Georgia, serif':"800 155px Syne, Inter, sans-serif",u.fillStyle=x.lightTheme?"#111318":"rgba(245, 242, 235, 0.92)",u.fillText(d,o*.5,l*.54),u.font="400 24px Inter, sans-serif",u.fillStyle=x.lightTheme?"rgba(17,19,24,0.68)":"rgba(255,255,255,0.72)",u.fillText(h,o*.5,l*.62),u.restore();const _=u.createLinearGradient(0,l*.68,0,l);_.addColorStop(0,"rgba(0,0,0,0)"),_.addColorStop(1,"rgba(0,0,0,0.65)"),u.fillStyle=_,u.fillRect(0,l*.68,o,l*.32),u.save(),u.textAlign="left",u.font="500 42px Inter, sans-serif",u.fillStyle="#ffffff",u.fillText(d,52,l-46);const v=o-68,N=l-58,k=28;u.beginPath(),u.arc(v,N,k,0,Math.PI*2),u.fillStyle="#000000",u.fill(),u.strokeStyle="#ffffff",u.lineWidth=2.6,u.lineCap="round",u.lineJoin="round",u.beginPath(),u.moveTo(v-8,N),u.lineTo(v+8,N),u.moveTo(v+2,N-6),u.lineTo(v+8,N),u.lineTo(v+2,N+6),u.stroke(),u.restore();const C=new L_(r);return C.minFilter=on,C.magFilter=on,C.anisotropy=4,C.needsUpdate=!0,C}const iw=({onNavigateToSection:s})=>{var Ue;const e=at.useRef(null),n=at.useRef(null),r=rn.projects,[o,l]=at.useState("featured"),[u,d]=at.useState(0),[h,p]=at.useState(null),[x,y]=at.useState("closed"),[g,S]=at.useState(null),[E,T]=at.useState(0),[_,v]=at.useState(0),[N,k]=at.useState(null),[C,L]=at.useState("none"),[P,F]=at.useState(!1),[w,I]=at.useState(!1),[V,q]=at.useState(0),J=4.65,Q=at.useRef({currentScroll:0,targetScroll:0,velocity:0,isDragging:!1,dragStartX:0,dragStartScroll:0,pointerDownPos:{x:0,y:0},hoveredCardIndex:-1,activeCardIndex:0,sheetOpenTarget:0,sheetOpenCurrent:0,clickedCardIndex:-1,getCardScreenRect:null}),X=ve=>{const ye=Q.current;ye.clickedCardIndex=ve,ye.sheetOpenTarget=1;const $=ye.getCardScreenRect?ye.getCardScreenRect(ve):{left:window.innerWidth*.2,top:window.innerHeight*.22,width:window.innerWidth*.6,height:window.innerHeight*.56};S($),L("none"),p(ve),T(0),y("opening"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{y("open")})})},te=()=>{if(x==="closed"||x==="closing")return;const ve=Q.current;h!==null&&(ne(h,!0),ve.getCardScreenRect&&S(ve.getCardScreenRect(h))),ve.sheetOpenTarget=0,y("closing"),k(null),setTimeout(()=>{y("closed"),p(null),ve.clickedCardIndex=-1},680)},pe=ve=>{if(h===null)return;const ye=r.length,$=ve==="prev"?(h-1+ye)%ye:(h+1)%ye;L(ve),k(null),p($),T(0),ne($,!0),n.current&&n.current.scrollTo({top:0,behavior:"instant"})},ne=(ve,ye=!1)=>{const $=Q.current,_e=r.length*J,Ve=ve*J,Ie=($.targetScroll%_e+_e)%_e;let it=Ve-Ie;it>_e*.5&&(it-=_e),it<-_e*.5&&(it+=_e),$.targetScroll+=it,ye?$.currentScroll=$.targetScroll:$.velocity+=Math.sign(it)*1.25},Z=at.useRef(0),j=ve=>{const ye=ve.currentTarget,$=Math.max(1,ye.scrollHeight-ye.clientHeight),ce=Math.min(1,Math.max(0,ye.scrollTop/$)),_e=ye.scrollTop-Z.current;Z.current=ye.scrollTop,T(ce),v(Math.max(-18,Math.min(18,_e*.35)))};at.useEffect(()=>{if(Math.abs(_)<.1)return;const ve=setTimeout(()=>v(ye=>ye*.7),32);return()=>clearTimeout(ve)},[_]),at.useEffect(()=>{const ve=e.current;if(!ve)return;let ye=ve.clientWidth||window.innerWidth,$=ve.clientHeight||window.innerHeight;const ce=new Cd;ce.background=new mt("#000000");const _e=new Xn(36,ye/$,.1,100);_e.position.set(0,.08,7.8),_e.lookAt(0,-.05,0);const Ve=new Ud({antialias:!0,powerPreference:"high-performance"});Ve.setSize(ye,$),Ve.setPixelRatio(Math.min(window.devicePixelRatio,2)),ve.innerHTML="",ve.appendChild(Ve.domElement);const Ie={uScrollOffset:{value:0},uFloorAlpha:{value:1},uActiveAccent:{value:new mt(r[0].accentHex)}},it=new Lr(60,38,1,1),Pt=new qn({vertexShader:ew,fragmentShader:tw,uniforms:Ie,transparent:!0,depthWrite:!1}),ut=new xn(it,Pt);ut.rotation.x=-Math.PI*.5,ut.position.set(0,-1.95,-1),ce.add(ut);const dt=r.length,rt=dt*J,nt=4.15,vt=2.42,wt=new Lr(nt,vt,64,32),st=[];r.forEach((se,fe)=>{const Re=mg(se,fe),Ee=fe===dt-1?-1:fe===0?0:fe===1?1:fe-1,we=new qn({vertexShader:J1,fragmentShader:Q1,uniforms:{uTexture:{value:Re},uScrollOffset:{value:0},uCardBaseX:{value:fe*J},uTotalWidth:{value:rt},uVelocity:{value:0},uTime:{value:0},uHover:{value:0},uSheetP:{value:1},uWhite:{value:0},uIntroP:{value:0},uIntroBarPos:{value:new Rt(Ee*.68,0)},uAlpha:{value:1}},transparent:!0,side:jn}),He=new xn(wt,we);He.frustumCulled=!1,ce.add(He),st.push(we)}),Gl.forEach((se,fe)=>{const Re=new Image;Re.crossOrigin="anonymous",Re.onload=()=>{r.forEach((Ee,we)=>{if(we%Gl.length===fe&&st[we]){const He=st[we].uniforms.uTexture.value,$e=mg(Ee,we,Re);st[we].uniforms.uTexture.value=$e,He.dispose()}})},Re.src=se});const ot=(se,fe)=>{const Re=rt*.5;return((se*J-fe+Re)%rt+rt)%rt-Re},Tt=se=>{const fe=Q.current.currentScroll,Re=ot(se,fe),Ee=Re/6.2,we=-1.18*Math.sin(Math.PI*Ee)*Math.exp(-.38*Ee*Ee),He=-.042*Re+.065*6.2*Math.sin(Math.PI*(Ee*.85+.18)),$e=new ee(Re-nt*.5,He+vt*.5,we).project(_e),Xe=new ee(Re+nt*.5,He-vt*.5,we).project(_e),z=($e.x+1)*.5*ye,Le=(Xe.x+1)*.5*ye,xe=(-$e.y+1)*.5*$,De=(-Xe.y+1)*.5*$;return{left:z,top:xe,width:Math.max(240,Math.abs(Le-z)),height:Math.max(150,Math.abs(De-xe))}};Q.current.getCardScreenRect=Tt;const G=(se,fe)=>{for(let Re=0;Re<dt;Re++){const Ee=Tt(Re);if(se>=Ee.left&&se<=Ee.left+Ee.width&&fe>=Ee.top&&fe<=Ee.top+Ee.height)return Re}return-1},Ht=se=>{if(Q.current.sheetOpenTarget>.5)return;se.preventDefault();const fe=Math.abs(se.deltaX)>Math.abs(se.deltaY)?se.deltaX:se.deltaY;Q.current.targetScroll+=fe*.0046},xt=se=>{if(se.button!==0||Q.current.sheetOpenTarget>.5)return;const fe=Q.current;fe.isDragging=!0,fe.dragStartX=se.clientX,fe.dragStartScroll=fe.targetScroll,fe.pointerDownPos={x:se.clientX,y:se.clientY},ve.style.cursor="grabbing"},U=se=>{const fe=Q.current;if(!(fe.sheetOpenTarget>.5))if(fe.isDragging){const Re=se.clientX-fe.dragStartX;fe.targetScroll=fe.dragStartScroll-Re*.011}else{const Re=G(se.clientX,se.clientY);fe.hoveredCardIndex=Re,ve.style.cursor=Re!==-1?"pointer":"grab"}},M=se=>{const fe=Q.current;if(!fe.isDragging)return;if(fe.isDragging=!1,ve.style.cursor=fe.hoveredCardIndex!==-1?"pointer":"grab",Math.hypot(se.clientX-fe.pointerDownPos.x,se.clientY-fe.pointerDownPos.y)<8&&fe.sheetOpenTarget<.5){const Ee=G(se.clientX,se.clientY);Ee!==-1&&X(Ee)}},K=se=>{se.key==="Escape"?Q.current.sheetOpenTarget>.5?te():F(!1):Q.current.sheetOpenTarget<.5&&(se.key==="ArrowRight"?Q.current.targetScroll+=J:se.key==="ArrowLeft"&&(Q.current.targetScroll-=J))},le=()=>{ve&&(ye=ve.clientWidth||window.innerWidth,$=ve.clientHeight||window.innerHeight,_e.aspect=ye/$,_e.position.z=ye<768?9.8:7.8,_e.updateProjectionMatrix(),Ve.setSize(ye,$))};le();const me=Ve.domElement;me.addEventListener("wheel",Ht,{passive:!1}),me.addEventListener("pointerdown",xt),window.addEventListener("pointermove",U),window.addEventListener("pointerup",M),window.addEventListener("keydown",K),window.addEventListener("resize",le);let be=0;const Ne=new q_,ge=()=>{be=requestAnimationFrame(ge);const se=Ne.getElapsedTime(),fe=Q.current,Re=fe.currentScroll;fe.currentScroll+=(fe.targetScroll-fe.currentScroll)*.085;const Ee=(fe.currentScroll-Re)*14;fe.velocity+=(Ee-fe.velocity)*.15,fe.sheetOpenCurrent+=(fe.sheetOpenTarget-fe.sheetOpenCurrent)*.11;let we=0,He=1/0;for(let Xe=0;Xe<dt;Xe++){const z=Math.abs(ot(Xe,fe.currentScroll));z<He&&(He=z,we=Xe)}we!==fe.activeCardIndex&&(fe.activeCardIndex=we,d(we));const $e=Math.min(1,Math.max(0,(se-.35)/.9));Ie.uScrollOffset.value=fe.currentScroll,Ie.uFloorAlpha.value=$e*(1-fe.sheetOpenCurrent);for(let Xe=0;Xe<dt;Xe++){const z=st[Xe];z.uniforms.uScrollOffset.value=fe.currentScroll,z.uniforms.uVelocity.value=fe.velocity*(1-fe.sheetOpenCurrent),z.uniforms.uTime.value=se;const Le=Xe===dt-1?0:Xe===0?1:Xe===1?2:3,xe=.16+Le*.085,De=Math.min(1,Math.max(0,(se-xe)/1.05)),ke=De===1?1:1-Math.pow(2,-10*De);z.uniforms.uIntroP.value=ke;const Se=fe.hoveredCardIndex===Xe&&fe.sheetOpenTarget<.5?1:0;z.uniforms.uHover.value+=(Se-z.uniforms.uHover.value)*.12,z.uniforms.uSheetP.value=1-fe.sheetOpenCurrent;const Je=fe.clickedCardIndex===Xe;z.uniforms.uWhite.value=Je?fe.sheetOpenCurrent:0;const qe=Le<=2?1:ke;z.uniforms.uAlpha.value=qe*(Je?1-fe.sheetOpenCurrent*.85:1-fe.sheetOpenCurrent)}Ve.render(ce,_e)};return be=requestAnimationFrame(ge),()=>{cancelAnimationFrame(be),me.removeEventListener("wheel",Ht),me.removeEventListener("pointerdown",xt),window.removeEventListener("pointermove",U),window.removeEventListener("pointerup",M),window.removeEventListener("keydown",K),window.removeEventListener("resize",le),wt.dispose(),it.dispose(),Pt.dispose(),st.forEach(se=>{var fe;(fe=se.uniforms.uTexture.value)==null||fe.dispose(),se.dispose()}),Ve.dispose()}},[r]);const B=h!==null?r[h]:null,D=h!==null?r[(h-1+r.length)%r.length]:null,re=h!==null?r[(h+1)%r.length]:null,Me=x==="open";return R.jsxs("div",{className:"relative h-screen w-screen overflow-hidden bg-black text-white select-none",children:[R.jsx("div",{ref:e,className:`absolute inset-0 z-0 h-full w-full transition-opacity duration-500 ${o==="featured"?"opacity-100 pointer-events-auto":"opacity-15 pointer-events-none"}`}),x!=="closed"&&B&&R.jsxs("main",{className:"pointer-events-none fixed inset-0 z-30 overflow-hidden",children:[D&&R.jsx("div",{onMouseEnter:()=>k("prev"),onMouseLeave:()=>k(null),onClick:()=>pe("prev"),title:`Previous project: ${D.title.split("—")[0].trim()}`,className:`pointer-events-auto fixed inset-y-16 sm:inset-y-24 left-0 w-[75vw] rounded-[18px] sm:rounded-[20px] bg-white cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${Me?N==="prev"?"-translate-x-[calc(100%-2.6rem)] sm:-translate-x-[calc(100%-3.4rem)] opacity-60":"-translate-x-[calc(100%-1.5rem)] sm:-translate-x-[calc(100%-2.2rem)] opacity-30":"-translate-x-[120%] opacity-0"}`}),re&&R.jsx("div",{onMouseEnter:()=>k("next"),onMouseLeave:()=>k(null),onClick:()=>pe("next"),title:`Next project: ${re.title.split("—")[0].trim()}`,className:`pointer-events-auto fixed inset-y-16 sm:inset-y-24 right-0 w-[75vw] rounded-[18px] sm:rounded-[20px] bg-white cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${Me?N==="next"?"translate-x-[calc(100%-2.6rem)] sm:translate-x-[calc(100%-3.4rem)] opacity-60":"translate-x-[calc(100%-1.5rem)] sm:translate-x-[calc(100%-2.2rem)] opacity-30":"translate-x-[120%] opacity-0"}`}),R.jsxs("div",{style:Me?{left:window.innerWidth<640?"16px":"52px",top:window.innerWidth<640?"16px":"20px",width:window.innerWidth<640?"calc(100vw - 32px)":"calc(100vw - 104px)",height:window.innerWidth<640?"calc(100vh - 32px)":"calc(100vh - 40px)",borderRadius:"20px"}:{left:`${(g==null?void 0:g.left)??window.innerWidth*.2}px`,top:`${(g==null?void 0:g.top)??window.innerHeight*.22}px`,width:`${(g==null?void 0:g.width)??window.innerWidth*.6}px`,height:`${(g==null?void 0:g.height)??window.innerHeight*.56}px`,borderRadius:"18px"},className:"pointer-events-auto fixed overflow-hidden bg-white text-black shadow-[0_30px_120px_rgba(0,0,0,0.85)] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]",children:[R.jsxs("div",{className:`flex h-full w-full flex-col lg:flex-row lg:items-start gap-y-8 lg:gap-x-16 xl:gap-x-24 px-5 pt-7 lg:pt-11 lg:pl-11 lg:pr-28 transition-opacity duration-500 ${Me?"opacity-100":"opacity-0"}`,children:[R.jsxs("div",{className:"flex flex-col items-start lg:flex-1 shrink-0 lg:sticky lg:top-0",children:[R.jsx("div",{className:"overflow-hidden pb-1",children:R.jsx("h1",{className:"reveal-title-active font-sans text-[34px] sm:text-[46px] font-normal leading-none tracking-[-0.05em] text-black",children:B.title.split("—")[0].trim()})}),R.jsxs("div",{className:"reveal-fade-active mt-4 sm:mt-5 max-w-[38rem] text-[14px] sm:text-[16px] leading-[1.52] tracking-[-0.025em] text-black/85 space-y-3",style:{animationDelay:"0.08s"},children:[R.jsx("p",{className:"font-medium text-black",children:((Ue=B.title.split("—")[1])==null?void 0:Ue.trim())||B.category}),R.jsx("p",{children:B.summary}),R.jsx("ul",{className:"pt-2 space-y-1.5 text-[13px] sm:text-[14px] text-black/70",children:B.highlights.map((ve,ye)=>R.jsxs("li",{className:"flex items-start gap-2",children:[R.jsx("span",{className:"mt-1.5 h-1.5 w-1.5 rounded-full bg-black/45 shrink-0"}),R.jsx("span",{children:ve})]},ye))})]}),R.jsxs("div",{className:"reveal-fade-active mt-7 sm:mt-10 flex flex-wrap items-center gap-2.5",style:{animationDelay:"0.16s"},children:[R.jsx("a",{href:B.demoUrl,target:"_blank",rel:"noreferrer","aria-label":`Visit ${B.title}`,className:"group relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 hover:scale-110",children:R.jsx(vn,{className:"h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})}),R.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[B.techStack.map(ve=>R.jsx("span",{className:"inline-flex h-9 items-center rounded-full bg-[#eeeeee] px-4 text-xs font-medium tracking-[-0.01em] text-black transition-colors duration-300 hover:bg-black hover:text-white",children:ve},ve)),R.jsx("span",{className:"inline-flex h-9 items-center rounded-full bg-[#eeeeee] px-4 text-xs font-semibold text-black",children:B.year}),R.jsxs("a",{href:B.repoUrl,target:"_blank",rel:"noreferrer",className:"inline-flex h-9 items-center gap-1.5 rounded-full bg-[#eeeeee] px-4 text-xs font-medium text-black transition-colors duration-300 hover:bg-black hover:text-white",children:[R.jsx(Tf,{className:"h-3.5 w-3.5"}),R.jsx("span",{children:"Source"})]})]}),R.jsx("div",{className:"ml-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[#d9a441]",title:"Featured Engineering Showcase",children:R.jsx("svg",{viewBox:"0 0 24 24",className:"h-5 w-5 animate-spin",style:{animationDuration:"9s"},fill:"currentColor",children:R.jsx("path",{d:"M12 1L14.8 8.5L22.5 9.2L16.5 14.2L18.5 21.8L12 17.5L5.5 21.8L7.5 14.2L1.5 9.2L9.2 8.5L12 1Z"})})})]}),R.jsxs("div",{className:"reveal-fade-active hidden lg:flex items-center gap-4 mt-12 pt-6 border-t border-black/10 text-xs font-medium text-black/50",style:{animationDelay:"0.24s"},children:[R.jsxs("button",{type:"button",onClick:()=>pe("prev"),className:"hover:text-black transition cursor-pointer",children:["← Prev: ",D==null?void 0:D.title.split("—")[0].trim()]}),R.jsx("span",{children:"·"}),R.jsxs("button",{type:"button",onClick:()=>pe("next"),className:"hover:text-black transition cursor-pointer",children:["Next: ",re==null?void 0:re.title.split("—")[0].trim()," →"]})]})]}),R.jsxs("div",{ref:n,onScroll:j,className:"flex h-full w-full lg:w-[56%] shrink-0 flex-col items-center gap-y-7 sm:gap-y-11 overflow-y-auto pb-20 pr-1",style:{scrollbarWidth:"none"},children:[R.jsxs("div",{style:{transform:`perspective(1000px) rotateX(${_*.25}deg)`,transition:"transform 0.15s ease-out"},className:"relative w-full flex-none overflow-hidden rounded-[14px] border border-black/10 bg-[#0b101d] aspect-[2048/1204] shadow-lg",children:[R.jsx("img",{src:Gl[(h??0)%Gl.length],alt:B.title,className:"absolute inset-0 h-full w-full object-cover opacity-40"}),R.jsx("div",{className:"absolute inset-0",style:{background:`radial-gradient(circle at 70% 30%, ${B.accentHex}44, rgba(8,12,24,0.88) 75%)`}}),R.jsxs("div",{className:"relative z-10 flex h-full flex-col justify-between p-6 sm:p-10 text-white",children:[R.jsxs("div",{className:"flex items-center justify-between",children:[R.jsxs("span",{className:"rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-white/90 backdrop-blur-md",children:["01 / Main Interface — ",B.code]}),R.jsx("span",{className:"font-mono text-xs text-white/60",children:B.year})]}),R.jsxs("div",{children:[R.jsx("div",{className:"font-serif-editorial italic text-4xl sm:text-6xl text-white",children:B.title.split("—")[0].trim()}),R.jsx("p",{className:"mt-2 max-w-md text-xs sm:text-sm text-white/75",children:B.summary})]})]})]}),R.jsxs("div",{style:{transform:`perspective(1000px) rotateX(${_*.25}deg)`,transition:"transform 0.15s ease-out"},className:"relative w-full flex-none overflow-hidden rounded-[14px] border border-black/10 bg-[#090d16] aspect-[1280/596] p-6 sm:p-9 text-white shadow-lg flex flex-col justify-between",children:[R.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[R.jsx("span",{className:"font-mono text-[11px] uppercase tracking-widest text-white/55",children:"02 / Architecture & Performance Highlights"}),R.jsx("span",{className:"h-2.5 w-2.5 rounded-full",style:{backgroundColor:B.accentHex}})]}),R.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto py-3",children:B.highlights.map((ve,ye)=>R.jsxs("div",{className:"rounded-xl border border-white/10 bg-white/[0.04] p-4",children:[R.jsxs("div",{className:"font-mono text-[11px] font-bold uppercase",style:{color:B.accentHex},children:["Key Metric 0",ye+1]}),R.jsx("p",{className:"mt-1.5 text-xs sm:text-sm leading-relaxed text-white/90",children:ve})]},ye))})]}),R.jsxs("div",{style:{transform:`perspective(1000px) rotateX(${_*.25}deg)`,transition:"transform 0.15s ease-out"},className:"relative w-full flex-none overflow-hidden rounded-[14px] border border-black/10 bg-[#f5f5f7] aspect-[1280/644] p-6 sm:p-10 text-black shadow-sm flex flex-col justify-between",children:[R.jsxs("div",{className:"flex items-center justify-between border-b border-black/10 pb-3",children:[R.jsx("span",{className:"font-mono text-[11px] uppercase tracking-widest text-black/50",children:"03 / Production Stack & Repository"}),R.jsx("span",{className:"font-mono text-xs font-semibold text-black/60",children:B.category})]}),R.jsxs("div",{className:"my-auto",children:[R.jsx("div",{className:"text-xs font-semibold uppercase tracking-wider text-black/45 mb-3",children:"Built With"}),R.jsx("div",{className:"flex flex-wrap gap-2",children:B.techStack.map(ve=>R.jsx("span",{className:"rounded-full border border-black/15 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-black shadow-2xs",children:ve},ve))})]}),R.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-black/10",children:[R.jsxs("a",{href:B.demoUrl,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-semibold text-white hover:opacity-85 transition",children:[R.jsx("span",{children:"Buka Live Demo"}),R.jsx(vn,{className:"h-3.5 w-3.5"})]}),R.jsxs("a",{href:B.repoUrl,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-xs font-semibold text-black hover:underline",children:[R.jsx(Tf,{className:"h-4 w-4"}),R.jsx("span",{children:"Lihat Kode Sumber di GitHub"})]})]})]})]})]},B.id),R.jsxs("button",{type:"button",onClick:te,"aria-label":"Close project",className:"group absolute top-5 right-5 sm:top-7 sm:right-7 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer",children:[R.jsxs("svg",{className:"pointer-events-none absolute -inset-1.5 h-14 w-14 -rotate-90",viewBox:"0 0 56 56",children:[R.jsx("circle",{cx:"28",cy:"28",r:"24",fill:"none",stroke:"rgba(0,0,0,0.12)",strokeWidth:"1.5"}),R.jsx("circle",{cx:"28",cy:"28",r:"24",fill:"none",stroke:"#000000",strokeWidth:"1.8",strokeDasharray:2*Math.PI*24,strokeDashoffset:2*Math.PI*24*(1-E),strokeLinecap:"round",className:"transition-all duration-150"})]}),R.jsxs("span",{className:"relative block h-3.5 w-3.5",children:[R.jsx("span",{className:"absolute top-1/2 left-0 h-[1.8px] w-full -translate-y-1/2 rotate-45 bg-white transition-transform duration-300 group-hover:rotate-135"}),R.jsx("span",{className:"absolute top-1/2 left-0 h-[1.8px] w-full -translate-y-1/2 -rotate-45 bg-white transition-transform duration-300 group-hover:rotate-45"})]})]})]})]}),o==="full"&&x==="closed"&&R.jsx("div",{className:"relative z-10 mx-auto flex h-full w-full max-w-[1360px] flex-col justify-center px-6 pt-24 pb-24 sm:px-16 overflow-y-auto",children:R.jsx("div",{className:"divide-y divide-white/12 border-y border-white/12",children:r.map((ve,ye)=>{const $=V===ye;return R.jsxs("div",{onMouseEnter:()=>q(ye),onClick:()=>X(ye),style:{animationDelay:`${ye*.05}s`},className:"archive-row-enter group flex items-center justify-between py-5 sm:py-6 px-3 cursor-pointer transition-all duration-300 hover:px-6 hover:bg-white/[0.04]",children:[R.jsxs("div",{className:"flex items-baseline gap-6 sm:gap-10",children:[R.jsxs("span",{className:"font-mono text-xs text-white/40",children:["0",ye+1]}),R.jsx("h3",{className:`text-2xl sm:text-4xl font-normal tracking-[-0.04em] transition-transform duration-300 ${$?"translate-x-2 text-white":"text-white/80"}`,children:ve.title.split("—")[0].trim()})]}),R.jsxs("div",{className:"flex items-center gap-6 sm:gap-12",children:[R.jsx("span",{className:"hidden md:inline text-xs font-medium text-white/50",children:ve.category}),R.jsx("span",{className:"font-mono text-xs text-white/45",children:ve.year}),R.jsx("span",{className:"inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-black transition",children:R.jsx(vn,{className:"h-4 w-4"})})]})]},ve.id)})})}),P&&x==="closed"&&R.jsx("div",{onClick:()=>F(!1),className:"fixed inset-0 z-30 flex items-center justify-center bg-black/80 backdrop-blur-xl px-6 animate-fadeIn",children:R.jsxs("div",{onClick:ve=>ve.stopPropagation(),className:"max-w-[42rem] text-center text-white",children:[R.jsxs("p",{className:"text-[15px] sm:text-[17px] leading-[1.6] tracking-[-0.02em] text-white/95",children:[rn.profile.name,", ",rn.profile.role," berbasis di"," ",rn.profile.location,". ",rn.profile.bio]}),R.jsx("p",{className:"mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/50",children:"3+ Tahun Pengalaman — 15+ Produk Digital — Full-Stack & Interactive 3D Web"}),R.jsxs("div",{className:"mt-7 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-[0.18em]",children:[R.jsx("a",{href:rn.profile.github,target:"_blank",rel:"noreferrer",className:"text-white/80 hover:text-white transition",children:"GitHub"}),R.jsx("a",{href:rn.profile.linkedin,target:"_blank",rel:"noreferrer",className:"text-white/80 hover:text-white transition",children:"LinkedIn"}),R.jsx("a",{href:rn.profile.instagram,target:"_blank",rel:"noreferrer",className:"text-white/80 hover:text-white transition",children:"Instagram"}),R.jsx("button",{type:"button",onClick:()=>{var ve;(ve=navigator.clipboard)==null||ve.writeText(rn.profile.email).catch(()=>{}),I(!0),setTimeout(()=>I(!1),2e3)},className:"inline-flex items-center gap-1.5 text-white/80 hover:text-white transition cursor-pointer",children:w?R.jsxs(R.Fragment,{children:[R.jsx(md,{className:"h-3.5 w-3.5 text-emerald-400"}),R.jsx("span",{className:"text-emerald-300",children:"Copied"})]}):R.jsxs(R.Fragment,{children:[R.jsx(gd,{className:"h-3.5 w-3.5"}),R.jsx("span",{children:"Email"})]})})]})]})}),R.jsxs("div",{className:`pointer-events-none fixed inset-0 z-20 flex flex-col justify-between px-6 py-6 sm:px-14 sm:py-9 transition-opacity duration-400 ${x!=="closed"?"opacity-0":"opacity-100"}`,children:[R.jsxs("div",{className:"flex items-start justify-between",children:[R.jsx("div",{className:"pointer-events-auto flex items-center gap-6",children:R.jsxs("button",{type:"button",onClick:ve=>s("beranda",ve),className:"group inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-white hover:opacity-70 transition cursor-pointer",children:[R.jsx(Zv,{className:"h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"}),R.jsx("span",{children:rn.profile.name})]})}),R.jsx("div",{className:"pointer-events-auto flex items-center gap-6",children:R.jsx("button",{type:"button",onClick:()=>F(ve=>!ve),className:"text-[12px] font-semibold uppercase tracking-[0.08em] text-white hover:opacity-60 transition cursor-pointer",children:P?"Close":"Profile"})})]}),R.jsxs("div",{className:"flex items-end justify-between",children:[R.jsxs("nav",{"aria-label":"Project views",className:"pointer-events-auto flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.08em]",children:[R.jsx("button",{type:"button",onClick:()=>{F(!1),l("featured")},className:`transition-opacity duration-300 cursor-pointer ${o==="featured"?"text-white opacity-100":"text-white opacity-45 hover:opacity-100"}`,children:"Featured"}),R.jsx("span",{className:"text-white/45",children:"/"}),R.jsx("button",{type:"button",onClick:()=>{F(!1),l("full")},className:`transition-opacity duration-300 cursor-pointer ${o==="full"?"text-white opacity-100":"text-white opacity-45 hover:opacity-100"}`,children:"Full"})]}),R.jsx("button",{type:"button",onClick:ve=>s("kontak",ve),className:"pointer-events-auto text-[12px] font-semibold uppercase tracking-[0.08em] text-white hover:opacity-60 transition cursor-pointer",children:"Contact"})]})]})]})};function rw(){const s=at.useRef(null),[e,n]=at.useState("main"),[r,o]=at.useState(0),[l,u]=at.useState(0),[d,h]=at.useState(0),[p,x]=at.useState(0),[y,g]=at.useState(null);at.useEffect(()=>{if(e!=="main")return;const T=s.current;T&&(T.muted=!0,T.defaultMuted=!0,T.play().catch(()=>{}))},[e,r]);const S=(T,_)=>{_&&_.preventDefault();const v=N=>{const k=document.getElementById(T);k&&window.scrollTo({top:k.offsetTop,behavior:N?"instant":"smooth"}),T==="beranda"?o(C=>C+1):T==="tentang"?u(C=>C+1):T==="kontak"&&h(C=>C+1)};e!=="main"?(n("main"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{v(!0)})})):v(!1)},E=T=>{T&&T.preventDefault(),window.scrollTo({top:0,behavior:"instant"}),x(_=>_+1),n("works")};return R.jsx("div",{className:"relative min-h-screen w-full overflow-x-hidden bg-[#020412] text-white select-none",children:e==="works"?R.jsx(iw,{onNavigateToSection:(T,_)=>S(T,_)},`works-boot-${p}`):R.jsxs(R.Fragment,{children:[R.jsxs("section",{id:"beranda",className:"relative flex h-screen w-screen flex-col justify-between overflow-hidden bg-black",children:[R.jsxs("div",{className:`absolute inset-0 z-0 overflow-hidden bg-black ${r>0?"hero-frame-enter":""}`,children:[R.jsx("video",{ref:s,src:"/hero-video.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",className:"h-full w-full object-cover object-center",children:R.jsx("source",{src:"/hero-video.mp4",type:"video/mp4"})}),R.jsx("div",{className:"pointer-events-none absolute inset-0",style:{background:"radial-gradient(circle at 50% 50%, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.55) 100%), linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.0) 25%, rgba(0,0,0,0.0) 75%, rgba(2,4,18,0.98) 100%)"}})]},`hero-frame-${r}`),R.jsxs("header",{className:`relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10 ${r>0?"hero-topbar-enter":""}`,children:[R.jsxs("a",{href:"#beranda",onClick:T=>S("beranda",T),className:"font-display text-lg font-bold tracking-tight text-white drop-shadow-sm hover:opacity-80 transition",children:["Biamtiero",R.jsx("span",{className:"text-sky-400",children:"."})]}),R.jsxs("nav",{className:"glass-pill hidden md:flex items-center gap-7 rounded-full px-6 py-2.5 text-xs font-medium tracking-wide text-slate-200",children:[R.jsx("a",{href:"#beranda",onClick:T=>S("beranda",T),className:"text-white font-semibold",children:"Home"}),R.jsx("a",{href:"#tentang",onClick:T=>S("tentang",T),className:"hover:text-white transition",children:"About"}),R.jsx("a",{href:"#works",onClick:T=>E(T),className:"hover:text-white transition",children:"Projects"}),R.jsx("a",{href:"#kontak",onClick:T=>S("kontak",T),className:"hover:text-white transition",children:"Contact"})]}),R.jsxs("a",{href:"#kontak",onClick:T=>S("kontak",T),className:"glass-pill group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white hover:bg-white/15 transition",children:[R.jsx("span",{children:"Let's Talk"}),R.jsxs("span",{className:"jesper-arrow-box text-sky-300",children:[R.jsx(vn,{className:"jesper-arrow-primary h-3.5 w-3.5"}),R.jsx(vn,{className:"jesper-arrow-secondary h-3.5 w-3.5"})]})]})]},`hero-top-${r}`),R.jsxs("div",{className:`relative z-20 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 text-center sm:px-10 ${r>0?"hero-center-enter":""}`,children:[R.jsxs("div",{className:"glass-pill inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-slate-100",children:[R.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]"}),R.jsx("span",{children:rn.profile.role})]}),R.jsxs("h1",{className:"mt-5 font-display text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-[-0.035em] leading-[1.06] text-white drop-shadow-lg",children:["Biamtiero"," ",R.jsx("span",{className:"font-light text-slate-200",children:"Amiral Kalman"})]}),R.jsx("p",{className:"type-prose mt-4 text-slate-200/90 drop-shadow",children:"Membangun aplikasi web modern dengan arsitektur yang tangguh, performa cepat, dan pengalaman digital yang berkarakter."}),R.jsxs("div",{className:"mt-8 flex flex-wrap items-center justify-center gap-3.5",children:[R.jsxs("a",{href:"#tentang",onMouseEnter:()=>g("about"),onMouseLeave:()=>g(null),onClick:T=>S("tentang",T),className:"group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-300 hover:bg-slate-100 hover:scale-[1.03] active:scale-[0.98]",children:[R.jsxs("svg",{viewBox:"-2 -2 104 104",className:"h-4 w-4 transition-transform duration-500 group-hover:rotate-45","aria-hidden":"true",children:[R.jsxs("mask",{id:"hero-segerman-eclipse",children:[R.jsx("rect",{x:"-2",y:"-2",width:"104",height:"104",fill:"#fff"}),R.jsx("circle",{cx:y==="about"?"38":"65",cy:"34",r:"34",fill:"#000",className:"transition-all duration-500"})]}),R.jsx("circle",{cx:"50",cy:"50",r:"48",fill:"#020412",mask:"url(#hero-segerman-eclipse)"})]}),R.jsx("span",{children:"Tentang Saya"}),R.jsxs("span",{className:"jesper-arrow-box",children:[R.jsx(vn,{className:"jesper-arrow-primary h-4 w-4"}),R.jsx(vn,{className:"jesper-arrow-secondary h-4 w-4"})]})]}),R.jsxs("a",{href:"#works",onMouseEnter:()=>g("works"),onMouseLeave:()=>g(null),onClick:T=>E(T),className:"glass-pill group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-xs sm:text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.03] active:scale-[0.98]",children:[R.jsxs("span",{className:"inline-flex items-center gap-[3px]",children:[R.jsx("span",{className:`h-2.5 w-1.5 rounded-[2px] bg-current transition-all duration-300 ${y==="works"?"-translate-y-[2px] -rotate-6 scale-y-110":"scale-y-50"}`}),R.jsx("span",{className:`h-2.5 w-1.5 rounded-[2px] bg-current transition-all duration-300 ${y==="works"?"scale-y-125":"scale-y-50"}`}),R.jsx("span",{className:`h-2.5 w-1.5 rounded-[2px] bg-current transition-all duration-300 ${y==="works"?"translate-y-[2px] rotate-6 scale-y-110":"scale-y-50"}`})]}),R.jsx("span",{children:"Hasil Karya"}),R.jsxs("span",{className:"jesper-arrow-box",children:[R.jsx(vn,{className:"jesper-arrow-primary h-4 w-4"}),R.jsx(vn,{className:"jesper-arrow-secondary h-4 w-4"})]})]}),R.jsxs("a",{href:"#kontak",onMouseEnter:()=>g("contact"),onMouseLeave:()=>g(null),onClick:T=>S("kontak",T),className:"glass-pill group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-xs sm:text-sm font-medium text-white transition-all duration-300 hover:bg-white/15 hover:scale-[1.03] active:scale-[0.98]",children:[R.jsx("span",{className:"h-2 w-2 rounded-full bg-sky-300 transition-transform duration-300 group-hover:scale-125 group-hover:bg-emerald-400"}),R.jsx("span",{children:"Hubungi Saya"}),R.jsxs("span",{className:"jesper-arrow-box",children:[R.jsx(vn,{className:"jesper-arrow-primary h-4 w-4"}),R.jsx(vn,{className:"jesper-arrow-secondary h-4 w-4"})]})]})]})]},`hero-center-${r}`),R.jsxs("footer",{className:"relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 pb-7 sm:px-10",children:[R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx("a",{href:rn.profile.github,target:"_blank",rel:"noreferrer",className:"glass-pill flex h-9 w-9 items-center justify-center rounded-full text-slate-200 hover:text-white hover:bg-white/15 transition",title:"GitHub",children:R.jsx(Tf,{className:"h-4 w-4"})}),R.jsx("a",{href:rn.profile.linkedin,target:"_blank",rel:"noreferrer",className:"glass-pill flex h-9 w-9 items-center justify-center rounded-full text-slate-200 hover:text-white hover:bg-white/15 transition",title:"LinkedIn",children:R.jsx(rx,{className:"h-4 w-4"})}),R.jsx("a",{href:rn.profile.instagram,target:"_blank",rel:"noreferrer",className:"glass-pill flex h-9 w-9 items-center justify-center rounded-full text-slate-200 hover:text-white hover:bg-white/15 transition",title:"Instagram",children:R.jsx(ix,{className:"h-4 w-4"})}),R.jsx("a",{href:"#kontak",onClick:T=>S("kontak",T),className:"glass-pill flex h-9 w-9 items-center justify-center rounded-full text-slate-200 hover:text-white hover:bg-white/15 transition",title:"Contact",children:R.jsx(sx,{className:"h-4 w-4"})})]}),R.jsxs("a",{href:"#tentang",onClick:T=>S("tentang",T),className:"glass-pill hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-slate-200 hover:text-white transition",children:[R.jsx("span",{children:"Scroll Down"}),R.jsx(Qv,{className:"h-3.5 w-3.5 animate-bounce"})]})]})]}),R.jsx(K1,{revealKey:l,onNavigateHome:T=>S("beranda",T),onOpenWorks:T=>E(T),onNavigateContact:T=>S("kontak",T)}),R.jsx(Z1,{revealKey:d,onNavigate:(T,_)=>S(T,_),onOpenWorks:T=>E(T)})]})})}Yv.createRoot(document.getElementById("root")).render(R.jsx(zv.StrictMode,{children:R.jsx(rw,{})}));
