/*! For license information please see main.c744e920.js.LICENSE.txt */
(()=>{var e={730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),P=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),O=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var R=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var L=Symbol.iterator;function I(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=L&&e[L]||e["@@iterator"])?e:null}var D,F=Object.assign;function M(e){if(void 0===D)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var A=!1;function U(e,t){if(!e||A)return"";A=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),o=r.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do{if(i--,0>--l||a[i]!==o[l]){var s="\n"+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{A=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?M(e):""}function H(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=U(e.type,!1);case 11:return e=U(e.type.render,!1);case 1:return e=U(e.type,!0);default:return""}}function $(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case _:return"Profiler";case E:return"StrictMode";case T:return"Suspense";case z:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case N:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case j:return null!==(t=e.displayName||null)?t:$(e.type)||"Memo";case O:t=e._payload,e=e._init;try{return $(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function B(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function q(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=B(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function Z(e,t){X(e,t);var n=B(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,B(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+B(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:B(n)}}function oe(e,t){var n=B(t.value),r=B(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ee=null;function _e(e){if(e=ba(e)){if("function"!==typeof Se)throw Error(o(280));var t=e.stateNode;t&&(t=wa(t),Se(e.stateNode,e.type,t))}}function Ce(e){ke?Ee?Ee.push(e):Ee=[e]:ke=e}function Pe(){if(ke){var e=ke,t=Ee;if(Ee=ke=null,_e(e),t)for(e=0;e<t.length;e++)_e(t[e])}}function Ne(e,t){return e(t)}function Te(){}var ze=!1;function je(e,t,n){if(ze)return e(t,n);ze=!0;try{return Ne(e,t,n)}finally{ze=!1,(null!==ke||null!==Ee)&&(Te(),Pe())}}function Oe(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Re=!1;if(c)try{var Le={};Object.defineProperty(Le,"passive",{get:function(){Re=!0}}),window.addEventListener("test",Le,Le),window.removeEventListener("test",Le,Le)}catch(ce){Re=!1}function Ie(e,t,n,r,a,o,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var De=!1,Fe=null,Me=!1,Ae=null,Ue={onError:function(e){De=!0,Fe=e}};function He(e,t,n,r,a,o,i,l,s){De=!1,Fe=null,Ie.apply(Ue,arguments)}function $e(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Be(e){if($e(e)!==e)throw Error(o(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=$e(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Be(a),e;if(i===r)return Be(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var Qe=a.unstable_scheduleCallback,Ye=a.unstable_cancelCallback,qe=a.unstable_shouldYield,Ge=a.unstable_requestPaint,Xe=a.unstable_now,Ze=a.unstable_getCurrentPriorityLevel,Je=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,ot=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~a;0!==l?r=dt(l):0!==(o&=i)&&(r=dt(o))}else 0!==(i=n&~a)?r=dt(i):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-it(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,Et,_t,Ct=!1,Pt=[],Nt=null,Tt=null,zt=null,jt=new Map,Ot=new Map,Rt=[],Lt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function It(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":jt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(t.pointerId)}}function Dt(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=ba(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Ft(e){var t=ya(e.target);if(null!==t){var n=$e(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void _t(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Mt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ba(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function At(e,t,n){Mt(e)&&n.delete(t)}function Ut(){Ct=!1,null!==Nt&&Mt(Nt)&&(Nt=null),null!==Tt&&Mt(Tt)&&(Tt=null),null!==zt&&Mt(zt)&&(zt=null),jt.forEach(At),Ot.forEach(At)}function Ht(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ut)))}function $t(e){function t(t){return Ht(t,e)}if(0<Pt.length){Ht(Pt[0],e);for(var n=1;n<Pt.length;n++){var r=Pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Nt&&Ht(Nt,e),null!==Tt&&Ht(Tt,e),null!==zt&&Ht(zt,e),jt.forEach(t),Ot.forEach(t),n=0;n<Rt.length;n++)(r=Rt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&null===(n=Rt[0]).blockedOn;)Ft(n),null===n.blockedOn&&Rt.shift()}var Wt=x.ReactCurrentBatchConfig,Bt=!0;function Vt(e,t,n,r){var a=bt,o=Wt.transition;Wt.transition=null;try{bt=1,Qt(e,t,n,r)}finally{bt=a,Wt.transition=o}}function Kt(e,t,n,r){var a=bt,o=Wt.transition;Wt.transition=null;try{bt=4,Qt(e,t,n,r)}finally{bt=a,Wt.transition=o}}function Qt(e,t,n,r){if(Bt){var a=qt(e,t,n,r);if(null===a)Br(e,t,r,Yt,n),It(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Nt=Dt(Nt,e,t,n,r,a),!0;case"dragenter":return Tt=Dt(Tt,e,t,n,r,a),!0;case"mouseover":return zt=Dt(zt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return jt.set(o,Dt(jt.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Ot.set(o,Dt(Ot.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(It(e,r),4&t&&-1<Lt.indexOf(e)){for(;null!==a;){var o=ba(a);if(null!==o&&wt(o),null===(o=qt(e,t,n,r))&&Br(e,t,r,Yt,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Br(e,t,r,null,n)}}var Yt=null;function qt(e,t,n,r){if(Yt=null,null!==(e=ya(e=we(r))))if(null===(t=$e(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Zt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Zt,r=n.length,a="value"in Xt?Xt.value:Xt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Jt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=F({},un,{view:0,detail:0}),fn=an(dn),pn=F({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_n,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(pn),mn=an(F({},pn,{dataTransfer:0})),gn=an(F({},dn,{relatedTarget:0})),vn=an(F({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=F({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=an(yn),xn=an(F({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function _n(){return En}var Cn=F({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_n,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pn=an(Cn),Nn=an(F({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Tn=an(F({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_n})),zn=an(F({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),jn=F({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),On=an(jn),Rn=[9,13,27,32],Ln=c&&"CompositionEvent"in window,In=null;c&&"documentMode"in document&&(In=document.documentMode);var Dn=c&&"TextEvent"in window&&!In,Fn=c&&(!Ln||In&&8<In&&11>=In),Mn=String.fromCharCode(32),An=!1;function Un(e,t){switch(e){case"keyup":return-1!==Rn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var $n=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Vn(e,t,n,r){Ce(r),0<(t=Kr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Qn=null;function Yn(e){Mr(e,0)}function qn(e){if(Q(xa(e)))return e}function Gn(e,t){if("change"===e)return t}var Xn=!1;if(c){var Zn;if(c){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Zn=Jn}else Zn=!1;Xn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),Qn=Kn=null)}function nr(e){if("value"===e.propertyName&&qn(Qn)){var t=[];Vn(t,Qn,e,we(e)),je(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Qn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return qn(Qn)}function or(e,t){if("click"===e)return qn(t)}function ir(e,t){if("input"===e||"change"===e)return qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=cr(n,o);var i=cr(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,br=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==Y(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&sr(yr,r)||(yr=r,0<(r=Kr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Er={};function _r(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return kr[e]=n[t];return e}c&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var Cr=_r("animationend"),Pr=_r("animationiteration"),Nr=_r("animationstart"),Tr=_r("transitionend"),zr=new Map,jr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(e,t){zr.set(e,t),s(t,[e])}for(var Rr=0;Rr<jr.length;Rr++){var Lr=jr[Rr];Or(Lr.toLowerCase(),"on"+(Lr[0].toUpperCase()+Lr.slice(1)))}Or(Cr,"onAnimationEnd"),Or(Pr,"onAnimationIteration"),Or(Nr,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(Tr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function Fr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,l,s,u){if(He.apply(this,arguments),De){if(!De)throw Error(o(198));var c=Fe;De=!1,Fe=null,Me||(Me=!0,Ae=c)}}(r,t,void 0,e),e.currentTarget=null}function Mr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Fr(a,l,u),o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Fr(a,l,u),o=s}}}if(Me)throw e=Ae,Me=!1,Ae=null,e}function Ar(e,t){var n=t[ma];void 0===n&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Ur(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Hr="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[Hr]){e[Hr]=!0,i.forEach((function(t){"selectionchange"!==t&&(Dr.has(t)||Ur(t,!1,e),Ur(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Hr]||(t[Hr]=!0,Ur("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Gt(t)){case 1:var a=Vt;break;case 4:a=Kt;break;default:a=Qt}n=a.bind(null,t,n,e),a=void 0,!Re||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Br(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=ya(l)))return;if(5===(s=i.tag)||6===s){r=o=i;continue e}l=l.parentNode}}r=r.return}je((function(){var r=o,a=we(n),i=[];e:{var l=zr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Pn;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Tn;break;case Cr:case Pr:case Nr:s=vn;break;case Tr:s=zn;break;case"scroll":s=fn;break;case"wheel":s=On;break;case"copy":case"cut":case"paste":s=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Nn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Oe(h,f))&&c.push(Vr(h,m,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,a),i.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!ya(u)&&!u[ha])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?ya(u):null)&&(u!==(d=$e(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Nn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:xa(s),p=null==u?l:xa(u),(l=new c(m,h+"leave",s,n,a)).target=d,l.relatedTarget=p,m=null,ya(a)===r&&((c=new c(f,h+"enter",u,n,a)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Qr(p))h++;for(p=0,m=f;m;m=Qr(m))p++;for(;0<h-p;)c=Qr(c),h--;for(;0<p-h;)f=Qr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Qr(c),f=Qr(f)}c=null}else c=null;null!==s&&Yr(i,l,s,c,!1),null!==u&&null!==d&&Yr(i,d,u,c,!0)}if("select"===(s=(l=r?xa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Gn;else if(Bn(l))if(Xn)g=ir;else{g=ar;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=or);switch(g&&(g=g(e,r))?Vn(i,g,n,a):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?xa(r):window,e){case"focusin":(Bn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,xr(i,n,a);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(i,n,a)}var y;if(Ln)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else $n?Un(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Fn&&"ko"!==n.locale&&($n||"onCompositionStart"!==b?"onCompositionEnd"===b&&$n&&(y=en()):(Zt="value"in(Xt=a)?Xt.value:Xt.textContent,$n=!0)),0<(v=Kr(r,b)).length&&(b=new xn(b,e,null,n,a),i.push({event:b,listeners:v}),y?b.data=y:null!==(y=Hn(n))&&(b.data=y))),(y=Dn?function(e,t){switch(e){case"compositionend":return Hn(t);case"keypress":return 32!==t.which?null:(An=!0,Mn);case"textInput":return(e=t.data)===Mn&&An?null:e;default:return null}}(e,n):function(e,t){if($n)return"compositionend"===e||!Ln&&Un(e,t)?(e=en(),Jt=Zt=Xt=null,$n=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(a=new xn("onBeforeInput","beforeinput",null,n,a),i.push({event:a,listeners:r}),a.data=y))}Mr(i,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=Oe(e,n))&&r.unshift(Vr(e,o,a)),null!=(o=Oe(e,t))&&r.push(Vr(e,o,a))),e=e.return}return r}function Qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=Oe(n,o))&&i.unshift(Vr(n,s,l)):a||null!=(s=Oe(n,o))&&i.push(Vr(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var qr=/\r\n?/g,Gr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(qr,"\n").replace(Gr,"")}function Zr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(o(425))}function Jr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,oa="function"===typeof Promise?Promise:void 0,ia="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oa?function(e){return oa.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void $t(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);$t(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ha="__reactContainer$"+da,ma="__reactEvents$"+da,ga="__reactListeners$"+da,va="__reactHandles$"+da;function ya(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[fa])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function ba(e){return!(e=e[fa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wa(e){return e[pa]||null}var Sa=[],ka=-1;function Ea(e){return{current:e}}function _a(e){0>ka||(e.current=Sa[ka],Sa[ka]=null,ka--)}function Ca(e,t){ka++,Sa[ka]=e.current,e.current=t}var Pa={},Na=Ea(Pa),Ta=Ea(!1),za=Pa;function ja(e,t){var n=e.type.contextTypes;if(!n)return Pa;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oa(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ra(){_a(Ta),_a(Na)}function La(e,t,n){if(Na.current!==Pa)throw Error(o(168));Ca(Na,t),Ca(Ta,n)}function Ia(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,W(e)||"Unknown",a));return F({},n,r)}function Da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pa,za=Na.current,Ca(Na,e),Ca(Ta,Ta.current),!0}function Fa(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Ia(e,t,za),r.__reactInternalMemoizedMergedChildContext=e,_a(Ta),_a(Na),Ca(Na,e)):_a(Ta),Ca(Ta,n)}var Ma=null,Aa=!1,Ua=!1;function Ha(e){null===Ma?Ma=[e]:Ma.push(e)}function $a(){if(!Ua&&null!==Ma){Ua=!0;var e=0,t=bt;try{var n=Ma;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ma=null,Aa=!1}catch(a){throw null!==Ma&&(Ma=Ma.slice(e+1)),Qe(Je,$a),a}finally{bt=t,Ua=!1}}return null}var Wa=[],Ba=0,Va=null,Ka=0,Qa=[],Ya=0,qa=null,Ga=1,Xa="";function Za(e,t){Wa[Ba++]=Ka,Wa[Ba++]=Va,Va=e,Ka=t}function Ja(e,t,n){Qa[Ya++]=Ga,Qa[Ya++]=Xa,Qa[Ya++]=qa,qa=e;var r=Ga;e=Xa;var a=32-it(r)-1;r&=~(1<<a),n+=1;var o=32-it(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Ga=1<<32-it(t)+a|n<<a|r,Xa=o+e}else Ga=1<<o|n<<a|r,Xa=e}function eo(e){null!==e.return&&(Za(e,1),Ja(e,1,0))}function to(e){for(;e===Va;)Va=Wa[--Ba],Wa[Ba]=null,Ka=Wa[--Ba],Wa[Ba]=null;for(;e===qa;)qa=Qa[--Ya],Qa[Ya]=null,Xa=Qa[--Ya],Qa[Ya]=null,Ga=Qa[--Ya],Qa[Ya]=null}var no=null,ro=null,ao=!1,oo=null;function io(e,t){var n=ju(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==qa?{id:Ga,overflow:Xa}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=ju(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function so(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function uo(e){if(ao){var t=ro;if(t){var n=t;if(!lo(e,t)){if(so(e))throw Error(o(418));t=ua(n.nextSibling);var r=no;t&&lo(e,t)?io(r,n):(e.flags=-4097&e.flags|2,ao=!1,no=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,ao=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function fo(e){if(e!==no)return!1;if(!ao)return co(e),ao=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ro)){if(so(e))throw po(),Error(o(418));for(;t;)io(e,t),t=ua(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ua(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=ua(e.nextSibling)}function ho(){ro=no=null,ao=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=x.ReactCurrentBatchConfig;function vo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bo(e){return(0,e._init)(e._payload)}function xo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Ru(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Fu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===O&&bo(o)===t.type)?((r=a(t,n.props)).ref=vo(e,t,n),r.return=e,r):((r=Lu(n.type,n.key,n.props,null,e.mode,r)).ref=vo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Iu(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Fu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Lu(t.type,t.key,t.props,null,e.mode,n)).ref=vo(e,null,t),n.return=e,n;case S:return(t=Mu(t,e.mode,n)).return=e,t;case O:return f(e,(0,t._init)(t._payload),n)}if(te(t)||I(t))return(t=Iu(t,e.mode,n,null)).return=e,t;yo(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?u(e,t,n,r):null;case S:return n.key===a?c(e,t,n,r):null;case O:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||I(n))return null!==a?null:d(e,t,n,r,null);yo(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case O:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||I(r))return d(t,e=e.get(n)||null,r,a,null);yo(t,r)}return null}function m(a,o,l,s){for(var u=null,c=null,d=o,m=o=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(a,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(a,d),o=i(v,o,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===l.length)return n(a,d),ao&&Za(a,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(o=i(d,o,m),null===c?u=d:c.sibling=d,c=d);return ao&&Za(a,m),u}for(d=r(a,d);m<l.length;m++)null!==(g=h(d,a,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=i(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(a,e)})),ao&&Za(a,m),u}function g(a,l,s,u){var c=I(s);if("function"!==typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var d=c=null,m=l,g=l=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(a,m,y.value,u);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(a,m),l=i(b,l,g),null===d?c=b:d.sibling=b,d=b,m=v}if(y.done)return n(a,m),ao&&Za(a,g),c;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=f(a,y.value,u))&&(l=i(y,l,g),null===d?c=y:d.sibling=y,d=y);return ao&&Za(a,g),c}for(m=r(a,m);!y.done;g++,y=s.next())null!==(y=h(m,a,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),l=i(y,l,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(a,e)})),ao&&Za(a,g),c}return function e(r,o,i,s){if("object"===typeof i&&null!==i&&i.type===k&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var u=i.key,c=o;null!==c;){if(c.key===u){if((u=i.type)===k){if(7===c.tag){n(r,c.sibling),(o=a(c,i.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===O&&bo(u)===c.type){n(r,c.sibling),(o=a(c,i.props)).ref=vo(r,c,i),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}i.type===k?((o=Iu(i.props.children,r.mode,s,i.key)).return=r,r=o):((s=Lu(i.type,i.key,i.props,null,r.mode,s)).ref=vo(r,o,i),s.return=r,r=s)}return l(r);case S:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(r,o.sibling),(o=a(o,i.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Mu(i,r.mode,s)).return=r,r=o}return l(r);case O:return e(r,o,(c=i._init)(i._payload),s)}if(te(i))return m(r,o,i,s);if(I(i))return g(r,o,i,s);yo(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,i)).return=r,r=o):(n(r,o),(o=Fu(i,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var wo=xo(!0),So=xo(!1),ko=Ea(null),Eo=null,_o=null,Co=null;function Po(){Co=_o=Eo=null}function No(e){var t=ko.current;_a(ko),e._currentValue=t}function To(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zo(e,t){Eo=e,Co=_o=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bl=!0),e.firstContext=null)}function jo(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},null===_o){if(null===Eo)throw Error(o(308));_o=e,Eo.dependencies={lanes:0,firstContext:e}}else _o=_o.next=e;return t}var Oo=null;function Ro(e){null===Oo?Oo=[e]:Oo.push(e)}function Lo(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Ro(t)):(n.next=a.next,a.next=n),t.interleaved=n,Io(e,r)}function Io(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Do=!1;function Fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ao(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Uo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ns)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Io(e,n)}return null===(a=r.interleaved)?(t.next=t,Ro(r)):(t.next=a.next,a.next=t),r.interleaved=t,Io(e,n)}function Ho(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function $o(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wo(e,t,n,r){var a=e.updateQueue;Do=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?o=u:i.next=u,i=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,c=u=s=null,l=o;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=F({},d,f);break e;case 2:Do=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,i|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{i|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Ds|=i,e.lanes=i,e.memoizedState=d}}function Bo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var Vo={},Ko=Ea(Vo),Qo=Ea(Vo),Yo=Ea(Vo);function qo(e){if(e===Vo)throw Error(o(174));return e}function Go(e,t){switch(Ca(Yo,t),Ca(Qo,e),Ca(Ko,Vo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}_a(Ko),Ca(Ko,t)}function Xo(){_a(Ko),_a(Qo),_a(Yo)}function Zo(e){qo(Yo.current);var t=qo(Ko.current),n=se(t,e.type);t!==n&&(Ca(Qo,e),Ca(Ko,n))}function Jo(e){Qo.current===e&&(_a(Ko),_a(Qo))}var ei=Ea(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function ri(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var ai=x.ReactCurrentDispatcher,oi=x.ReactCurrentBatchConfig,ii=0,li=null,si=null,ui=null,ci=!1,di=!1,fi=0,pi=0;function hi(){throw Error(o(321))}function mi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,a,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=null===e||null===e.memoizedState?Ji:el,e=n(r,a),di){i=0;do{if(di=!1,fi=0,25<=i)throw Error(o(301));i+=1,ui=si=null,t.updateQueue=null,ai.current=tl,e=n(r,a)}while(di)}if(ai.current=Zi,t=null!==si&&null!==si.next,ii=0,ui=si=li=null,ci=!1,t)throw Error(o(300));return e}function vi(){var e=0!==fi;return fi=0,e}function yi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ui?li.memoizedState=ui=e:ui=ui.next=e,ui}function bi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ui?li.memoizedState:ui.next;if(null!==t)ui=t,si=e;else{if(null===e)throw Error(o(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ui?li.memoizedState=ui=e:ui=ui.next=e}return ui}function xi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=bi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=si,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((ii&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,li.lanes|=d,Ds|=d}c=c.next}while(null!==c&&c!==i);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(bl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,li.lanes|=i,Ds|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Si(e){var t=bi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);lr(i,t.memoizedState)||(bl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ki(){}function Ei(e,t){var n=li,r=bi(),a=t(),i=!lr(r.memoizedState,a);if(i&&(r.memoizedState=a,bl=!0),r=r.queue,Di(Pi.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ui&&1&ui.memoizedState.tag){if(n.flags|=2048,ji(9,Ci.bind(null,n,r,a,t),void 0,null),null===Ts)throw Error(o(349));0!==(30&ii)||_i(n,t,a)}return a}function _i(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ci(e,t,n,r){t.value=n,t.getSnapshot=r,Ni(t)&&Ti(e)}function Pi(e,t,n){return n((function(){Ni(t)&&Ti(e)}))}function Ni(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Ti(e){var t=Io(e,1);null!==t&&nu(t,e,1,-1)}function zi(e){var t=yi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=Yi.bind(null,li,e),[t.memoizedState,e]}function ji(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Oi(){return bi().memoizedState}function Ri(e,t,n,r){var a=yi();li.flags|=e,a.memoizedState=ji(1|t,n,void 0,void 0===r?null:r)}function Li(e,t,n,r){var a=bi();r=void 0===r?null:r;var o=void 0;if(null!==si){var i=si.memoizedState;if(o=i.destroy,null!==r&&mi(r,i.deps))return void(a.memoizedState=ji(t,n,o,r))}li.flags|=e,a.memoizedState=ji(1|t,n,o,r)}function Ii(e,t){return Ri(8390656,8,e,t)}function Di(e,t){return Li(2048,8,e,t)}function Fi(e,t){return Li(4,2,e,t)}function Mi(e,t){return Li(4,4,e,t)}function Ai(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ui(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Li(4,4,Ai.bind(null,t,e),n)}function Hi(){}function $i(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wi(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bi(e,t,n){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),li.lanes|=n,Ds|=n,e.baseState=!0),t)}function Vi(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=oi.transition;oi.transition={};try{e(!1),t()}finally{bt=n,oi.transition=r}}function Ki(){return bi().memoizedState}function Qi(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qi(e))Gi(t,n);else if(null!==(n=Lo(e,t,n,r))){nu(n,e,r,eu()),Xi(n,t,r)}}function Yi(e,t,n){var r=tu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qi(e))Gi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(a.next=a,Ro(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=Lo(e,t,a,r))&&(nu(n,e,r,a=eu()),Xi(n,t,r))}}function qi(e){var t=e.alternate;return e===li||null!==t&&t===li}function Gi(e,t){di=ci=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xi(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Zi={readContext:jo,useCallback:hi,useContext:hi,useEffect:hi,useImperativeHandle:hi,useInsertionEffect:hi,useLayoutEffect:hi,useMemo:hi,useReducer:hi,useRef:hi,useState:hi,useDebugValue:hi,useDeferredValue:hi,useTransition:hi,useMutableSource:hi,useSyncExternalStore:hi,useId:hi,unstable_isNewReconciler:!1},Ji={readContext:jo,useCallback:function(e,t){return yi().memoizedState=[e,void 0===t?null:t],e},useContext:jo,useEffect:Ii,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ri(4194308,4,Ai.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ri(4,2,e,t)},useMemo:function(e,t){var n=yi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qi.bind(null,li,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yi().memoizedState=e},useState:zi,useDebugValue:Hi,useDeferredValue:function(e){return yi().memoizedState=e},useTransition:function(){var e=zi(!1),t=e[0];return e=Vi.bind(null,e[1]),yi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=li,a=yi();if(ao){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Ts)throw Error(o(349));0!==(30&ii)||_i(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Ii(Pi.bind(null,r,i,e),[e]),r.flags|=2048,ji(9,Ci.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yi(),t=Ts.identifierPrefix;if(ao){var n=Xa;t=":"+t+"R"+(n=(Ga&~(1<<32-it(Ga)-1)).toString(32)+n),0<(n=fi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:jo,useCallback:$i,useContext:jo,useEffect:Di,useImperativeHandle:Ui,useInsertionEffect:Fi,useLayoutEffect:Mi,useMemo:Wi,useReducer:wi,useRef:Oi,useState:function(){return wi(xi)},useDebugValue:Hi,useDeferredValue:function(e){return Bi(bi(),si.memoizedState,e)},useTransition:function(){return[wi(xi)[0],bi().memoizedState]},useMutableSource:ki,useSyncExternalStore:Ei,useId:Ki,unstable_isNewReconciler:!1},tl={readContext:jo,useCallback:$i,useContext:jo,useEffect:Di,useImperativeHandle:Ui,useInsertionEffect:Fi,useLayoutEffect:Mi,useMemo:Wi,useReducer:Si,useRef:Oi,useState:function(){return Si(xi)},useDebugValue:Hi,useDeferredValue:function(e){var t=bi();return null===si?t.memoizedState=e:Bi(t,si.memoizedState,e)},useTransition:function(){return[Si(xi)[0],bi().memoizedState]},useMutableSource:ki,useSyncExternalStore:Ei,useId:Ki,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=F({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:F({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&$e(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Ao(r,a);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Uo(e,o,a))&&(nu(t,e,a,r),Ho(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Ao(r,a);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Uo(e,o,a))&&(nu(t,e,a,r),Ho(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),a=Ao(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Uo(e,a,r))&&(nu(t,e,r,n),Ho(t,e,r))}};function ol(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,o))}function il(e,t,n){var r=!1,a=Pa,o=t.contextType;return"object"===typeof o&&null!==o?o=jo(o):(a=Oa(t)?za:Na.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?ja(e,a):Pa),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Fo(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=jo(o):(o=Oa(t)?za:Na.current,a.context=ja(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rl(e,t,o,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Wo(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=H(r),r=r.return}while(r);var a=n}catch(o){a="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:a,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Ao(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bs||(Bs=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Ao(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ks?Ks=new Set([this]):Ks.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=_u.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ao(-1,1)).tag=2,Uo(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var yl=x.ReactCurrentOwner,bl=!1;function xl(e,t,n,r){t.child=null===e?So(t,null,n,r):wo(t,e.child,n,r)}function wl(e,t,n,r,a){n=n.render;var o=t.ref;return zo(t,a),r=gi(e,t,n,r,o,a),n=vi(),null===e||bl?(ao&&n&&eo(t),t.flags|=1,xl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Bl(e,t,a))}function Sl(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Ou(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Lu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,kl(e,t,o,r,a))}if(o=e.child,0===(e.lanes&a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return Bl(e,t,a)}return t.flags|=1,(e=Ru(o,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(bl=!1,t.pendingProps=r=o,0===(e.lanes&a))return t.lanes=e.lanes,Bl(e,t,a);0!==(131072&e.flags)&&(bl=!0)}}return Cl(e,t,n,r,a)}function El(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ca(Rs,Os),Os|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ca(Rs,Os),Os|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ca(Rs,Os),Os|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ca(Rs,Os),Os|=r;return xl(e,t,a,n),t.child}function _l(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,a){var o=Oa(n)?za:Na.current;return o=ja(t,o),zo(t,a),n=gi(e,t,n,r,o,a),r=vi(),null===e||bl?(ao&&r&&eo(t),t.flags|=1,xl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Bl(e,t,a))}function Pl(e,t,n,r,a){if(Oa(n)){var o=!0;Da(t)}else o=!1;if(zo(t,a),null===t.stateNode)Wl(e,t),il(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;"object"===typeof u&&null!==u?u=jo(u):u=ja(t,u=Oa(n)?za:Na.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,i,r,u),Do=!1;var f=t.memoizedState;i.state=f,Wo(t,r,i,a),s=t.memoizedState,l!==r||f!==s||Ta.current||Do?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Do||ol(t,n,l,r,f,s,u))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Mo(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),i.props=u,d=t.pendingProps,f=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=jo(s):s=ja(t,s=Oa(n)?za:Na.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,i,r,s),Do=!1,f=t.memoizedState,i.state=f,Wo(t,r,i,a);var h=t.memoizedState;l!==d||f!==h||Ta.current||Do?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(u=Do||ol(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=s,r=u):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Nl(e,t,n,r,o,a)}function Nl(e,t,n,r,a,o){_l(e,t);var i=0!==(128&t.flags);if(!r&&!i)return a&&Fa(t,n,!1),Bl(e,t,o);r=t.stateNode,yl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,l,o)):xl(e,t,l,o),t.memoizedState=r.state,a&&Fa(t,n,!0),t.child}function Tl(e){var t=e.stateNode;t.pendingContext?La(0,t.pendingContext,t.pendingContext!==t.context):t.context&&La(0,t.context,!1),Go(e,t.containerInfo)}function zl(e,t,n,r,a){return ho(),mo(a),t.flags|=256,xl(e,t,n,r),t.child}var jl,Ol,Rl,Ll,Il={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fl(e,t,n){var r,a=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Ca(ei,1&i),null===e)return uo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Du(s,a,0,null),e=Iu(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(n),t.memoizedState=Il,e):Ml(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,l){if(n)return 256&t.flags?(t.flags&=-257,Al(e,t,l,r=cl(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Du({mode:"visible",children:r.children},a,0,null),(i=Iu(i,a,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,l),t.child.memoizedState=Dl(l),t.memoizedState=Il,i);if(0===(1&t.mode))return Al(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Al(e,t,l,r=cl(i=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),bl||s){if(null!==(r=Ts)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Io(e,a),nu(r,e,a,-1))}return mu(),Al(e,t,l,r=cl(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Pu.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ro=ua(a.nextSibling),no=t,ao=!0,oo=null,null!==e&&(Qa[Ya++]=Ga,Qa[Ya++]=Xa,Qa[Ya++]=qa,Ga=e.id,Xa=e.overflow,qa=t),t=Ml(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,i,n);if(l){l=a.fallback,s=t.mode,r=(i=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Ru(i,u)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Ru(r,l):(l=Iu(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Dl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Il,a}return e=(l=e.child).sibling,a=Ru(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Ml(e,t){return(t=Du({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Al(e,t,n,r){return null!==r&&mo(r),wo(t,e.child,null,n),(e=Ml(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ul(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),To(e.return,t,n)}function Hl(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function $l(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=ei.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ul(e,n,t);else if(19===e.tag)Ul(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ca(ei,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===ti(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Hl(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ti(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Hl(t,!0,n,null,o);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ds|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Ru(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ru(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ao)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ql(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kl(t),null;case 1:case 17:return Oa(t.type)&&Ra(),Kl(t),null;case 3:return r=t.stateNode,Xo(),_a(Ta),_a(Na),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(iu(oo),oo=null))),Ol(e,t),Kl(t),null;case 5:Jo(t);var a=qo(Yo.current);if(n=t.type,null!==e&&null!=t.stateNode)Rl(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Kl(t),null}if(e=qo(Ko.current),fo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[fa]=t,r[pa]=i,e=0!==(1&t.mode),n){case"dialog":Ar("cancel",r),Ar("close",r);break;case"iframe":case"object":case"embed":Ar("load",r);break;case"video":case"audio":for(a=0;a<Ir.length;a++)Ar(Ir[a],r);break;case"source":Ar("error",r);break;case"img":case"image":case"link":Ar("error",r),Ar("load",r);break;case"details":Ar("toggle",r);break;case"input":G(r,i),Ar("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ar("invalid",r);break;case"textarea":ae(r,i),Ar("invalid",r)}for(var s in ye(n,i),a=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==i.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Ar("scroll",r)}switch(n){case"input":K(r),J(r,i,!0);break;case"textarea":K(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Jr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fa]=t,e[pa]=r,jl(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(n,r),n){case"dialog":Ar("cancel",e),Ar("close",e),a=r;break;case"iframe":case"object":case"embed":Ar("load",e),a=r;break;case"video":case"audio":for(a=0;a<Ir.length;a++)Ar(Ir[a],e);a=r;break;case"source":Ar("error",e),a=r;break;case"img":case"image":case"link":Ar("error",e),Ar("load",e),a=r;break;case"details":Ar("toggle",e),a=r;break;case"input":G(e,r),a=q(e,r),Ar("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=F({},r,{value:void 0}),Ar("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Ar("invalid",e)}for(i in ye(n,a),u=a)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?ge(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===i?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Ar("scroll",e):null!=c&&b(e,i,c,s))}switch(n){case"input":K(e),J(e,r,!1);break;case"textarea":K(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+B(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Kl(t),null;case 6:if(e&&null!=t.stateNode)Ll(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=qo(Yo.current),qo(Ko.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(i=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return Kl(t),null;case 13:if(_a(ei),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ao&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))po(),ho(),t.flags|=98560,i=!1;else if(i=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[fa]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Kl(t),i=!1}else null!==oo&&(iu(oo),oo=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===Ls&&(Ls=3):mu())),null!==t.updateQueue&&(t.flags|=4),Kl(t),null);case 4:return Xo(),Ol(e,t),null===e&&$r(t.stateNode.containerInfo),Kl(t),null;case 10:return No(t.type._context),Kl(t),null;case 19:if(_a(ei),null===(i=t.memoizedState))return Kl(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Vl(i,!1);else{if(0!==Ls||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Vl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ca(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Xe()>$s&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ti(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!ao)return Kl(t),null}else 2*Xe()-i.renderingStartTime>$s&&1073741824!==n&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Xe(),t.sibling=null,n=ei.current,Ca(ei,r?1&n|2:1&n),t):(Kl(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Os)&&(Kl(t),6&t.subtreeFlags&&(t.flags|=8192)):Kl(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Yl(e,t){switch(to(t),t.tag){case 1:return Oa(t.type)&&Ra(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xo(),_a(Ta),_a(Na),ri(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Jo(t),null;case 13:if(_a(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return _a(ei),null;case 4:return Xo(),null;case 10:return No(t.type._context),null;case 22:case 23:return du(),null;default:return null}}jl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ol=function(){},Rl=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,qo(Ko.current);var o,i=null;switch(n){case"input":a=q(e,a),r=q(e,r),i=[];break;case"select":a=F({},a,{value:void 0}),r=F({},r,{value:void 0}),i=[];break;case"textarea":a=re(e,a),r=re(e,r),i=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(c in ye(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(i=i||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(i=i||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Ar("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}},Ll=function(e,t,n,r){n!==r&&(t.flags|=4)};var ql=!1,Gl=!1,Xl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Eu(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Eu(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&es(t,n,o)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fa],delete t[pa],delete t[ma],delete t[ga],delete t[va])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:Gl||Jl(n,t);case 6:var r=cs,a=ds;cs=null,fs(e,t,n),ds=a,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),$t(e)):sa(cs,n.stateNode));break;case 4:r=cs,a=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=a;break;case 0:case 11:case 14:case 15:if(!Gl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!==(2&o)||0!==(4&o))&&es(n,t,i),a=a.next}while(a!==r)}fs(e,t,n);break;case 1:if(!Gl&&(Jl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Eu(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Gl=(r=Gl)||null!==n.memoizedState,fs(e,t,n),Gl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach((function(t){var r=Nu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(o(160));ps(i,l,a),cs=null,ds=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){Eu(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Eu(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Eu(e,e.return,g)}}break;case 1:ms(t,e),vs(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(ms(t,e),vs(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(g){Eu(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===i.type&&null!=i.name&&X(a,i),be(s,l);var c=be(s,i);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):b(a,d,f,c)}switch(s){case"input":Z(a,i);break;case"textarea":oe(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ne(a,!!i.multiple,h,!1):p!==!!i.multiple&&(null!=i.defaultValue?ne(a,!!i.multiple,i.defaultValue,!0):ne(a,!!i.multiple,i.multiple?[]:"",!1))}a[pa]=i}catch(g){Eu(e,e.return,g)}}break;case 6:if(ms(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(g){Eu(e,e.return,g)}}break;case 3:if(ms(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{$t(t.containerInfo)}catch(g){Eu(e,e.return,g)}break;case 4:default:ms(t,e),vs(e);break;case 13:ms(t,e),vs(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(Hs=Xe())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Gl=(c=Gl)||d,ms(t,e),Gl=c):ms(t,e),vs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Zl=e,d=e.child;null!==d;){for(f=Zl=d;null!==Zl;){switch(h=(p=Zl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Jl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Eu(r,n,g)}}break;case 5:Jl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Zl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",l))}catch(g){Eu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Eu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),vs(e),4&r&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),us(e,ls(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(o(161))}}catch(l){Eu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ys(e,t,n){Zl=e,bs(e,t,n)}function bs(e,t,n){for(var r=0!==(1&e.mode);null!==Zl;){var a=Zl,o=a.child;if(22===a.tag&&r){var i=null!==a.memoizedState||ql;if(!i){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Gl;l=ql;var u=Gl;if(ql=i,(Gl=s)&&!u)for(Zl=a;null!==Zl;)s=(i=Zl).child,22===i.tag&&null!==i.memoizedState?Ss(a):null!==s?(s.return=i,Zl=s):Ss(a);for(;null!==o;)Zl=o,bs(o,t,n),o=o.sibling;Zl=a,ql=l,Gl=u}xs(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,Zl=o):xs(e)}}function xs(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Gl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Bo(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Bo(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&$t(f)}}}break;default:throw Error(o(163))}Gl||512&t.flags&&as(t)}catch(p){Eu(t,t.return,p)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function ws(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function Ss(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Eu(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){Eu(t,a,s)}}var o=t.return;try{as(t)}catch(s){Eu(t,o,s)}break;case 5:var i=t.return;try{as(t)}catch(s){Eu(t,i,s)}}}catch(s){Eu(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var ks,Es=Math.ceil,_s=x.ReactCurrentDispatcher,Cs=x.ReactCurrentOwner,Ps=x.ReactCurrentBatchConfig,Ns=0,Ts=null,zs=null,js=0,Os=0,Rs=Ea(0),Ls=0,Is=null,Ds=0,Fs=0,Ms=0,As=null,Us=null,Hs=0,$s=1/0,Ws=null,Bs=!1,Vs=null,Ks=null,Qs=!1,Ys=null,qs=0,Gs=0,Xs=null,Zs=-1,Js=0;function eu(){return 0!==(6&Ns)?Xe():-1!==Zs?Zs:Zs=Xe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Ns)&&0!==js?js&-js:null!==go.transition?(0===Js&&(Js=mt()),Js):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function nu(e,t,n,r){if(50<Gs)throw Gs=0,Xs=null,Error(o(185));vt(e,n,r),0!==(2&Ns)&&e===Ts||(e===Ts&&(0===(2&Ns)&&(Fs|=n),4===Ls&&lu(e,js)),ru(e,r),1===n&&0===Ns&&0===(1&t.mode)&&($s=Xe()+500,Aa&&$a()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-it(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=pt(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=ft(e,e===Ts?js:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Aa=!0,Ha(e)}(su.bind(null,e)):Ha(su.bind(null,e)),ia((function(){0===(6&Ns)&&$a()})),n=null;else{switch(xt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Tu(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Zs=-1,Js=0,0!==(6&Ns))throw Error(o(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=ft(e,e===Ts?js:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var a=Ns;Ns|=2;var i=hu();for(Ts===e&&js===t||(Ws=null,$s=Xe()+500,fu(e,t));;)try{yu();break}catch(s){pu(e,s)}Po(),_s.current=i,Ns=a,null!==zs?t=0:(Ts=null,js=0,t=Ls)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=ou(e,a))),1===t)throw n=Is,fu(e,0),lu(e,r),ru(e,Xe()),n;if(6===t)lu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!lr(o(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gu(e,r))&&(0!==(i=ht(e))&&(r=i,t=ou(e,i))),1===t))throw n=Is,fu(e,0),lu(e,r),ru(e,Xe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wu(e,Us,Ws);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Hs+500-Xe())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(wu.bind(null,e,Us,Ws),t);break}wu(e,Us,Ws);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>a&&(a=l),r&=~i}if(r=a,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Es(r/1960))-r)){e.timeoutHandle=ra(wu.bind(null,e,Us,Ws),r);break}wu(e,Us,Ws);break;default:throw Error(o(329))}}}return ru(e,Xe()),e.callbackNode===n?au.bind(null,e):null}function ou(e,t){var n=As;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=Us,Us=n,null!==t&&iu(t)),e}function iu(e){null===Us?Us=e:Us.push.apply(Us,e)}function lu(e,t){for(t&=~Ms,t&=~Fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&Ns))throw Error(o(327));Su();var t=ft(e,0);if(0===(1&t))return ru(e,Xe()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Is,fu(e,0),lu(e,t),ru(e,Xe()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Us,Ws),ru(e,Xe()),null}function uu(e,t){var n=Ns;Ns|=1;try{return e(t)}finally{0===(Ns=n)&&($s=Xe()+500,Aa&&$a())}}function cu(e){null!==Ys&&0===Ys.tag&&0===(6&Ns)&&Su();var t=Ns;Ns|=1;var n=Ps.transition,r=bt;try{if(Ps.transition=null,bt=1,e)return e()}finally{bt=r,Ps.transition=n,0===(6&(Ns=t))&&$a()}}function du(){Os=Rs.current,_a(Rs)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==zs)for(n=zs.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ra();break;case 3:Xo(),_a(Ta),_a(Na),ri();break;case 5:Jo(r);break;case 4:Xo();break;case 13:case 19:_a(ei);break;case 10:No(r.type._context);break;case 22:case 23:du()}n=n.return}if(Ts=e,zs=e=Ru(e.current,null),js=Os=t,Ls=0,Is=null,Ms=Fs=Ds=0,Us=As=null,null!==Oo){for(t=0;t<Oo.length;t++)if(null!==(r=(n=Oo[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var i=o.next;o.next=a,r.next=i}n.pending=r}Oo=null}return e}function pu(e,t){for(;;){var n=zs;try{if(Po(),ai.current=Zi,ci){for(var r=li.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}ci=!1}if(ii=0,ui=si=li=null,di=!1,fi=0,Cs.current=null,null===n||null===n.return){Ls=1,Is=t,zs=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=js,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,vl(h,l,s,0,t),1&h.mode&&ml(i,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ml(i,c,t),mu();break e}u=Error(o(426))}else if(ao&&1&s.mode){var v=gl(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),mo(ul(u,s));break e}}i=u=ul(u,s),4!==Ls&&(Ls=2),null===As?As=[i]:As.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,$o(i,pl(0,u,t));break e;case 1:s=u;var y=i.type,b=i.stateNode;if(0===(128&i.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Ks||!Ks.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,$o(i,hl(i,s,t));break e}}i=i.return}while(null!==i)}xu(n)}catch(x){t=x,zs===n&&null!==n&&(zs=n=n.return);continue}break}}function hu(){var e=_s.current;return _s.current=Zi,null===e?Zi:e}function mu(){0!==Ls&&3!==Ls&&2!==Ls||(Ls=4),null===Ts||0===(268435455&Ds)&&0===(268435455&Fs)||lu(Ts,js)}function gu(e,t){var n=Ns;Ns|=2;var r=hu();for(Ts===e&&js===t||(Ws=null,fu(e,t));;)try{vu();break}catch(a){pu(e,a)}if(Po(),Ns=n,_s.current=r,null!==zs)throw Error(o(261));return Ts=null,js=0,Ls}function vu(){for(;null!==zs;)bu(zs)}function yu(){for(;null!==zs&&!qe();)bu(zs)}function bu(e){var t=ks(e.alternate,e,Os);e.memoizedProps=e.pendingProps,null===t?xu(e):zs=t,Cs.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ql(n,t,Os)))return void(zs=n)}else{if(null!==(n=Yl(n,t)))return n.flags&=32767,void(zs=n);if(null===e)return Ls=6,void(zs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(zs=t);zs=t=e}while(null!==t);0===Ls&&(Ls=5)}function wu(e,t,n){var r=bt,a=Ps.transition;try{Ps.transition=null,bt=1,function(e,t,n,r){do{Su()}while(null!==Ys);if(0!==(6&Ns))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-it(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,i),e===Ts&&(zs=Ts=null,js=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Qs||(Qs=!0,Tu(tt,(function(){return Su(),null}))),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=Ps.transition,Ps.transition=null;var l=bt;bt=1;var s=Ns;Ns|=4,Cs.current=null,function(e,t){if(ea=Bt,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===i&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Bt=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(o(163))}}catch(w){Eu(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(ta),Bt=!!ea,ta=ea=null,e.current=n,ys(n,e,a),Ge(),Ns=s,bt=l,Ps.transition=i}else e.current=n;if(Qs&&(Qs=!1,Ys=e,qs=a),i=e.pendingLanes,0===i&&(Ks=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Bs)throw Bs=!1,e=Vs,Vs=null,e;0!==(1&qs)&&0!==e.tag&&Su(),i=e.pendingLanes,0!==(1&i)?e===Xs?Gs++:(Gs=0,Xs=e):Gs=0,$a()}(e,t,n,r)}finally{Ps.transition=a,bt=r}return null}function Su(){if(null!==Ys){var e=xt(qs),t=Ps.transition,n=bt;try{if(Ps.transition=null,bt=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,qs=0,0!==(6&Ns))throw Error(o(331));var a=Ns;for(Ns|=4,Zl=e.current;null!==Zl;){var i=Zl,l=i.child;if(0!==(16&Zl.flags)){var s=i.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Zl=c;null!==Zl;){var d=Zl;switch(d.tag){case 0:case 11:case 15:ns(8,d,i)}var f=d.child;if(null!==f)f.return=d,Zl=f;else for(;null!==Zl;){var p=(d=Zl).sibling,h=d.return;if(os(d),d===c){Zl=null;break}if(null!==p){p.return=h,Zl=p;break}Zl=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Zl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(i=Zl).flags))switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,Zl=y;break e}Zl=i.return}}var b=e.current;for(Zl=b;null!==Zl;){var x=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Zl=x;else e:for(l=b;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){Eu(s,s.return,S)}if(s===l){Zl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Zl=w;break e}Zl=s.return}}if(Ns=a,$a(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(S){}r=!0}return r}finally{bt=n,Ps.transition=t}}return!1}function ku(e,t,n){e=Uo(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function Eu(e,t,n){if(3===e.tag)ku(e,e,n);else for(;null!==t;){if(3===t.tag){ku(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ks||!Ks.has(r))){t=Uo(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function _u(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Ts===e&&(js&n)===n&&(4===Ls||3===Ls&&(130023424&js)===js&&500>Xe()-Hs?fu(e,0):Ms|=n),ru(e,t)}function Cu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Io(e,t))&&(vt(e,t,n),ru(e,n))}function Pu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cu(e,n)}function Nu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Cu(e,n)}function Tu(e,t){return Qe(e,t)}function zu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ju(e,t,n,r){return new zu(e,t,n,r)}function Ou(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ru(e,t){var n=e.alternate;return null===n?((n=ju(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lu(e,t,n,r,a,i){var l=2;if(r=e,"function"===typeof e)Ou(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Iu(n.children,a,i,t);case E:l=8,a|=8;break;case _:return(e=ju(12,n,t,2|a)).elementType=_,e.lanes=i,e;case T:return(e=ju(13,n,t,a)).elementType=T,e.lanes=i,e;case z:return(e=ju(19,n,t,a)).elementType=z,e.lanes=i,e;case R:return Du(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case P:l=9;break e;case N:l=11;break e;case j:l=14;break e;case O:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=ju(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Iu(e,t,n,r){return(e=ju(7,e,r,t)).lanes=n,e}function Du(e,t,n,r){return(e=ju(22,e,r,t)).elementType=R,e.lanes=n,e.stateNode={isHidden:!1},e}function Fu(e,t,n){return(e=ju(6,e,null,t)).lanes=n,e}function Mu(e,t,n){return(t=ju(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Au(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Uu(e,t,n,r,a,o,i,l,s){return e=new Au(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=ju(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fo(o),e}function Hu(e){if(!e)return Pa;e:{if($e(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oa(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Oa(n))return Ia(e,n,t)}return t}function $u(e,t,n,r,a,o,i,l,s){return(e=Uu(n,r,!0,e,0,o,0,l,s)).context=Hu(null),n=e.current,(o=Ao(r=eu(),a=tu(n))).callback=void 0!==t&&null!==t?t:null,Uo(n,o,a),e.current.lanes=a,vt(e,a,r),ru(e,r),e}function Wu(e,t,n,r){var a=t.current,o=eu(),i=tu(a);return n=Hu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ao(o,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Uo(a,t,i))&&(nu(e,a,i,o),Ho(e,a,i)),i}function Bu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ku(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ta.current)bl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bl=!1,function(e,t,n){switch(t.tag){case 3:Tl(t),ho();break;case 5:Zo(t);break;case 1:Oa(t.type)&&Da(t);break;case 4:Go(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ca(ko,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ca(ei,1&ei.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Fl(e,t,n):(Ca(ei,1&ei.current),null!==(e=Bl(e,t,n))?e.sibling:null);Ca(ei,1&ei.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return $l(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ca(ei,ei.current),r)break;return null;case 22:case 23:return t.lanes=0,El(e,t,n)}return Bl(e,t,n)}(e,t,n);bl=0!==(131072&e.flags)}else bl=!1,ao&&0!==(1048576&t.flags)&&Ja(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var a=ja(t,Na.current);zo(t,n),a=gi(null,t,r,e,a,n);var i=vi();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oa(r)?(i=!0,Da(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Fo(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=Nl(null,t,r,!0,i,n)):(t.tag=0,ao&&i&&eo(t),xl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Ou(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===N)return 11;if(e===j)return 14}return 2}(r),e=nl(r,e),a){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=Pl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Cl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,Pl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(Tl(t),null===e)throw Error(o(387));r=t.pendingProps,a=(i=t.memoizedState).element,Mo(e,t),Wo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=zl(e,t,r,n,a=ul(Error(o(423)),t));break e}if(r!==a){t=zl(e,t,r,n,a=ul(Error(o(424)),t));break e}for(ro=ua(t.stateNode.containerInfo.firstChild),no=t,ao=!0,oo=null,n=So(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===a){t=Bl(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Zo(t),null===e&&uo(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==i&&na(r,i)&&(t.flags|=32),_l(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&uo(t),null;case 13:return Fl(e,t,n);case 4:return Go(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,wl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,Ca(ko,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===a.children&&!Ta.current){t=Bl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===i.tag){(u=Ao(-1,n&-n)).tag=2;var c=i.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,null!==(u=i.alternate)&&(u.lanes|=n),To(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),To(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}xl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,zo(t,n),r=r(a=jo(a)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),Sl(e,t,r,a=nl(r.type,a),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Wl(e,t),t.tag=1,Oa(r)?(e=!0,Da(t)):e=!1,zo(t,n),il(t,r,a),sl(t,r,a,n),Nl(null,t,r,!0,e,n);case 19:return $l(e,t,n);case 22:return El(e,t,n)}throw Error(o(156,t.tag))};var Qu="function"===typeof reportError?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}function qu(e){this._internalRoot=e}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function Ju(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if("function"===typeof a){var l=a;a=function(){var e=Bu(i);l.call(e)}}Wu(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"===typeof r){var o=r;r=function(){var e=Bu(i);o.call(e)}}var i=$u(t,r,e,0,null,!1,0,"",Zu);return e._reactRootContainer=i,e[ha]=i.current,$r(8===e.nodeType?e.parentNode:e),cu(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Bu(s);l.call(e)}}var s=Uu(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=s,e[ha]=s.current,$r(8===e.nodeType?e.parentNode:e),cu((function(){Wu(t,s,n,r)})),s}(n,t,e,a,r);return Bu(i)}qu.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Wu(e,t,null,null)},qu.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Wu(null,e,null,null)})),t[ha]=null}},qu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&0!==t&&t<Rt[n].priority;n++);Rt.splice(n,0,e),0===n&&Ft(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),ru(t,Xe()),0===(6&Ns)&&($s=Xe()+500,$a()))}break;case 13:cu((function(){var t=Io(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Ku(e,1)}},St=function(e){if(13===e.tag){var t=Io(e,134217728);if(null!==t)nu(t,e,134217728,eu());Ku(e,134217728)}},kt=function(e){if(13===e.tag){var t=tu(e),n=Io(e,t);if(null!==n)nu(n,e,t,eu());Ku(e,t)}},Et=function(){return bt},_t=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},Se=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(o(90));Q(r),Z(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Ne=uu,Te=cu;var ec={usingClientEntryPoint:!1,Events:[ba,xa,wa,Ce,Pe,uu]},tc={findFiberByHostInstance:ya,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{at=rc.inject(nc),ot=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gu(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Gu(e))throw Error(o(299));var n=!1,r="",a=Qu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Uu(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,$r(8===e.nodeType?e.parentNode:e),new Yu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Xu(t))throw Error(o(200));return Ju(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",l=Qu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=$u(t,null,e,1,null!=n?n:null,a,0,i,l),e[ha]=t.current,$r(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new qu(t)},t.render=function(e,t,n){if(!Xu(t))throw Error(o(200));return Ju(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xu(e))throw Error(o(40));return!!e._reactRootContainer&&(cu((function(){Ju(null,null,e,!1,(function(){e._reactRootContainer=null,e[ha]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xu(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Ju(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},153:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,a)&&!E.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:k.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function N(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+N(s,0):o,w(i)?(a="",null!=e&&(a=e.replace(P,"$&/")+"/"),T(i,t,a,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+N(l=e[u],u);s+=T(l,t,a,c,i)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=T(l=l.value,t,a,c=o+N(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function z(e,t,n){if(null==e)return e;var r=[],a=0;return T(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function j(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},R={transition:null},L={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:R,ReactCurrentOwner:k};function I(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:z,forEach:function(e,t,n){z(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return z(e,(function(){t++})),t},toArray:function(e){return z(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=i,t.PureComponent=b,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.act=I,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!E.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:o,ref:i,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:j}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=I,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},43:(e,t,n)=>{"use strict";e.exports=n(202)},579:(e,t,n)=>{"use strict";e.exports=n(153)},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,x(e),!m)if(null!==r(u))m=!0,R(S);else{var t=r(c);null!==t&&L(w,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,y(C),C=-1),h=!0;var o=p;try{for(x(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!T());){var i=f.callback;if("function"===typeof i){f.callback=null,p=f.priorityLevel;var l=i(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&a(u),x(n)}else a(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&L(w,d.startTime-n),s=!1}return s}finally{f=null,p=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,E=!1,_=null,C=-1,P=5,N=-1;function T(){return!(t.unstable_now()-N<P)}function z(){if(null!==_){var e=t.unstable_now();N=e;var n=!0;try{n=_(!0,e)}finally{n?k():(E=!1,_=null)}}else E=!1}if("function"===typeof b)k=function(){b(z)};else if("undefined"!==typeof MessageChannel){var j=new MessageChannel,O=j.port2;j.port1.onmessage=z,k=function(){O.postMessage(null)}}else k=function(){v(z,0)};function R(e){_=e,E||(E=!0,k())}function L(e,n){C=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,R(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(y(C),C=-1):g=!0,L(w,o-i))):(e.sortIndex=l,n(u,e),m||h||(m=!0,R(S))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853:(e,t,n)=>{"use strict";e.exports=n(234)},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var u=o[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".6a0d684f.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="home-page:";n.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[a];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/vighnesh/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var i=n.p+n.u(t),l=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,o,i=r[0],l=r[1],s=r[2],u=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkhome_page=self.webpackChunkhome_page||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n.t(e,2),r=n(391);var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};Object.create;function o(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var i=n(324),l=n.n(i),s="-ms-",u="-moz-",c="-webkit-",d="comm",f="rule",p="decl",h="@keyframes",m=Math.abs,g=String.fromCharCode,v=Object.assign;function y(e){return e.trim()}function b(e,t){return(e=t.exec(e))?e[0]:e}function x(e,t,n){return e.replace(t,n)}function w(e,t,n){return e.indexOf(t,n)}function S(e,t){return 0|e.charCodeAt(t)}function k(e,t,n){return e.slice(t,n)}function E(e){return e.length}function _(e){return e.length}function C(e,t){return t.push(e),e}function P(e,t){return e.filter((function(e){return!b(e,t)}))}var N=1,T=1,z=0,j=0,O=0,R="";function L(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:N,column:T,length:i,return:"",siblings:l}}function I(e,t){return v(L("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function D(e){for(;e.root;)e=I(e.root,{children:[e]});C(e,e.siblings)}function F(){return O=j>0?S(R,--j):0,T--,10===O&&(T=1,N--),O}function M(){return O=j<z?S(R,j++):0,T++,10===O&&(T=1,N++),O}function A(){return S(R,j)}function U(){return j}function H(e,t){return k(R,e,t)}function $(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W(e){return N=T=1,z=E(R=e),j=0,[]}function B(e){return R="",e}function V(e){return y(H(j-1,Y(91===e?e+2:40===e?e+1:e)))}function K(e){for(;(O=A())&&O<33;)M();return $(e)>2||$(O)>3?"":" "}function Q(e,t){for(;--t&&M()&&!(O<48||O>102||O>57&&O<65||O>70&&O<97););return H(e,U()+(t<6&&32==A()&&32==M()))}function Y(e){for(;M();)switch(O){case e:return j;case 34:case 39:34!==e&&39!==e&&Y(O);break;case 40:41===e&&Y(e);break;case 92:M()}return j}function q(e,t){for(;M()&&e+O!==57&&(e+O!==84||47!==A()););return"/*"+H(t,j-1)+"*"+g(47===e?e:M())}function G(e){for(;!$(A());)M();return H(e,j)}function X(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Z(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case p:return e.return=e.return||e.value;case d:return"";case h:return e.return=e.value+"{"+X(e.children,r)+"}";case f:if(!E(e.value=e.props.join(",")))return""}return E(n=X(e.children,r))?e.return=e.value+"{"+n+"}":""}function J(e,t,n){switch(function(e,t){return 45^S(e,0)?(((t<<2^S(e,0))<<2^S(e,1))<<2^S(e,2))<<2^S(e,3):0}(e,t)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+e+e;case 4789:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+u+e+s+e+e;case 5936:switch(S(e,t+11)){case 114:return c+e+s+x(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+s+x(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+s+x(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return c+e+s+e+e;case 6165:return c+e+s+"flex-"+e+e;case 5187:return c+e+x(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+s+"flex-$1$2")+e;case 5443:return c+e+s+"flex-item-"+x(e,/flex-|-self/g,"")+(b(e,/flex-|baseline/)?"":s+"grid-row-"+x(e,/flex-|-self/g,""))+e;case 4675:return c+e+s+"flex-line-pack"+x(e,/align-content|flex-|-self/g,"")+e;case 5548:return c+e+s+x(e,"shrink","negative")+e;case 5292:return c+e+s+x(e,"basis","preferred-size")+e;case 6060:return c+"box-"+x(e,"-grow","")+c+e+s+x(e,"grow","positive")+e;case 4554:return c+x(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return x(x(x(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return x(e,/(image-set\([^]*)/,c+"$1$`$1");case 4968:return x(x(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+s+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+e+e;case 4200:if(!b(e,/flex-|baseline/))return s+"grid-column-align"+k(e,t)+e;break;case 2592:case 3360:return s+x(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,b(e.props,/grid-\w+-end/)}))?~w(e+(n=n[t].value),"span",0)?e:s+x(e,"-start","")+e+s+"grid-row-span:"+(~w(n,"span",0)?b(n,/\d+/):+b(n,/\d+/)-+b(e,/\d+/))+";":s+x(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return b(e.props,/grid-\w+-start/)}))?e:s+x(x(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return x(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(E(e)-1-t>6)switch(S(e,t+1)){case 109:if(45!==S(e,t+4))break;case 102:return x(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3$1"+u+(108==S(e,t+3)?"$3":"$2-$3"))+e;case 115:return~w(e,"stretch",0)?J(x(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return x(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,o,i,l){return s+n+":"+r+l+(a?s+n+"-span:"+(o?i:+i-+r)+l:"")+e}));case 4949:if(121===S(e,t+6))return x(e,":",":"+c)+e;break;case 6444:switch(S(e,45===S(e,14)?18:11)){case 120:return x(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+c+(45===S(e,14)?"inline-":"")+"box$3$1"+c+"$2$3$1"+s+"$2box$3")+e;case 100:return x(e,":",":"+s)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return x(e,"scroll-","scroll-snap-")+e}return e}function ee(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case p:return void(e.return=J(e.value,e.length,n));case h:return X([I(e,{value:x(e.value,"@","@"+c)})],r);case f:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(b(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":D(I(e,{props:[x(t,/:(read-\w+)/,":-moz-$1")]})),D(I(e,{props:[t]})),v(e,{props:P(n,r)});break;case"::placeholder":D(I(e,{props:[x(t,/:(plac\w+)/,":"+c+"input-$1")]})),D(I(e,{props:[x(t,/:(plac\w+)/,":-moz-$1")]})),D(I(e,{props:[x(t,/:(plac\w+)/,s+"input-$1")]})),D(I(e,{props:[t]})),v(e,{props:P(n,r)})}return""}))}}function te(e){return B(ne("",null,null,null,[""],e=W(e),0,[0],e))}function ne(e,t,n,r,a,o,i,l,s){for(var u=0,c=0,d=i,f=0,p=0,h=0,v=1,y=1,b=1,k=0,_="",P=a,N=o,T=r,z=_;y;)switch(h=k,k=M()){case 40:if(108!=h&&58==S(z,d-1)){-1!=w(z+=x(V(k),"&","&\f"),"&\f",m(u?l[u-1]:0))&&(b=-1);break}case 34:case 39:case 91:z+=V(k);break;case 9:case 10:case 13:case 32:z+=K(h);break;case 92:z+=Q(U()-1,7);continue;case 47:switch(A()){case 42:case 47:C(ae(q(M(),U()),t,n,s),s);break;default:z+="/"}break;case 123*v:l[u++]=E(z)*b;case 125*v:case 59:case 0:switch(k){case 0:case 125:y=0;case 59+c:-1==b&&(z=x(z,/\f/g,"")),p>0&&E(z)-d&&C(p>32?oe(z+";",r,n,d-1,s):oe(x(z," ","")+";",r,n,d-2,s),s);break;case 59:z+=";";default:if(C(T=re(z,t,n,u,c,a,l,_,P=[],N=[],d,o),o),123===k)if(0===c)ne(z,t,T,T,P,o,d,l,N);else switch(99===f&&110===S(z,3)?100:f){case 100:case 108:case 109:case 115:ne(e,T,T,r&&C(re(e,T,T,0,0,a,l,_,a,P=[],d,N),N),a,N,d,l,r?P:N);break;default:ne(z,T,T,T,[""],N,0,l,N)}}u=c=p=0,v=b=1,_=z="",d=i;break;case 58:d=1+E(z),p=h;default:if(v<1)if(123==k)--v;else if(125==k&&0==v++&&125==F())continue;switch(z+=g(k),k*v){case 38:b=c>0?1:(z+="\f",-1);break;case 44:l[u++]=(E(z)-1)*b,b=1;break;case 64:45===A()&&(z+=V(M())),f=A(),c=d=E(_=z+=G(U())),k++;break;case 45:45===h&&2==E(z)&&(v=0)}}return o}function re(e,t,n,r,a,o,i,l,s,u,c,d){for(var p=a-1,h=0===a?o:[""],g=_(h),v=0,b=0,w=0;v<r;++v)for(var S=0,E=k(e,p+1,p=m(b=i[v])),C=e;S<g;++S)(C=y(b>0?h[S]+" "+E:x(E,/&\f/g,h[S])))&&(s[w++]=C);return L(e,t,n,0===a?f:l,s,u,c,d)}function ae(e,t,n,r){return L(e,t,n,d,g(O),k(e,2,-2),0,r)}function oe(e,t,n,r,a){return L(e,t,n,p,k(e,0,r),k(e,r+1,-1),r,a)}var ie={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},le="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/vighnesh",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/vighnesh",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/vighnesh",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",se="active",ue="data-styled-version",ce="6.1.13",de="/*!sc*/\n",fe="undefined"!=typeof window&&"HTMLElement"in window,pe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/vighnesh",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/vighnesh",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/vighnesh",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/vighnesh",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/vighnesh",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/vighnesh",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/vighnesh",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/vighnesh",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/vighnesh",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/vighnesh",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),he=(new Set,Object.freeze([])),me=Object.freeze({});function ge(e,t,n){return void 0===n&&(n=me),e.theme!==n.theme&&e.theme||t||n.theme}var ve=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ye=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,be=/(^-|-$)/g;function xe(e){return e.replace(ye,"-").replace(be,"")}var we=/(a)(d)/gi,Se=function(e){return String.fromCharCode(e+(e>25?39:97))};function ke(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Se(t%52)+n;return(Se(t%52)+n).replace(we,"$1-$2")}var Ee,_e=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ce=function(e){return _e(5381,e)};function Pe(e){return ke(Ce(e)>>>0)}function Ne(e){return e.displayName||e.name||"Component"}function Te(e){return"string"==typeof e&&!0}var ze="function"==typeof Symbol&&Symbol.for,je=ze?Symbol.for("react.memo"):60115,Oe=ze?Symbol.for("react.forward_ref"):60112,Re={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Le={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ie={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},De=((Ee={})[Oe]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ee[je]=Ie,Ee);function Fe(e){return("type"in(t=e)&&t.type.$$typeof)===je?Ie:"$$typeof"in e?De[e.$$typeof]:Re;var t}var Me=Object.defineProperty,Ae=Object.getOwnPropertyNames,Ue=Object.getOwnPropertySymbols,He=Object.getOwnPropertyDescriptor,$e=Object.getPrototypeOf,We=Object.prototype;function Be(e,t,n){if("string"!=typeof t){if(We){var r=$e(t);r&&r!==We&&Be(e,r,n)}var a=Ae(t);Ue&&(a=a.concat(Ue(t)));for(var o=Fe(e),i=Fe(t),l=0;l<a.length;++l){var s=a[l];if(!(s in Le||n&&n[s]||i&&s in i||o&&s in o)){var u=He(t,s);try{Me(e,s,u)}catch(e){}}}}return e}function Ve(e){return"function"==typeof e}function Ke(e){return"object"==typeof e&&"styledComponentId"in e}function Qe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ye(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function qe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ge(e,t,n){if(void 0===n&&(n=!1),!n&&!qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ge(e[r],t[r]);else if(qe(t))for(var r in t)e[r]=Ge(e[r],t[r]);return e}function Xe(e,t){Object.defineProperty(e,"toString",{value:t})}function Ze(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Je=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw Ze(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(de);return t},e}(),et=new Map,tt=new Map,nt=1,rt=function(e){if(et.has(e))return et.get(e);for(;tt.has(nt);)nt++;var t=nt++;return et.set(e,t),tt.set(t,e),t},at=function(e,t){nt=t+1,et.set(e,t),tt.set(t,e)},ot="style[".concat(le,"][").concat(ue,'="').concat(ce,'"]'),it=new RegExp("^".concat(le,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lt=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},st=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(de),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(it);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(at(c,u),lt(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},ut=function(e){for(var t=document.querySelectorAll(ot),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(le)!==se&&(st(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function ct(){return n.nc}var dt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(le,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(le,se),r.setAttribute(ue,ce);var i=ct();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},ft=function(){function e(e){this.element=dt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw Ze(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),pt=function(){function e(e){this.element=dt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ht=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),mt=fe,gt={isServer:!fe,useCSSOMInjection:!pe},vt=function(){function e(e,t,n){void 0===e&&(e=me),void 0===t&&(t={});var r=this;this.options=a(a({},gt),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&fe&&mt&&(mt=!1,ut(this)),Xe(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return tt.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(n);if(void 0===o||!o.size||0===i.length)return"continue";var l="".concat(le,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(de)},o=0;o<n;o++)a(o);return r}(r)}))}return e.registerId=function(e){return rt(e)},e.prototype.rehydrate=function(){!this.server&&fe&&ut(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(a(a({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new ht(n):t?new ft(n):new pt(n)}(this.options),new Je(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(rt(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(rt(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(rt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),yt=/&/g,bt=/^\s*\/\/.*$/gm;function xt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=xt(e.children,t)),e}))}function wt(e){var t,n,r,a=void 0===e?me:e,o=a.options,i=void 0===o?me:o,l=a.plugins,s=void 0===l?he:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===f&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(yt,n).replace(r,u))})),i.prefix&&c.push(ee),c.push(Z);var d=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(bt,""),u=te(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(u=xt(u,i.namespace));var d,f=[];return X(u,function(e){var t=_(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||Ze(15),_e(e,t.name)}),5381).toString():"",d}var St=new vt,kt=wt(),Et=e.createContext({shouldForwardProp:void 0,styleSheet:St,stylis:kt}),_t=(Et.Consumer,e.createContext(void 0));function Ct(){return(0,e.useContext)(Et)}function Pt(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],o=Ct().styleSheet,i=(0,e.useMemo)((function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,o]),s=(0,e.useMemo)((function(){return wt({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){l()(r,t.stylisPlugins)||a(t.stylisPlugins)}),[t.stylisPlugins]);var u=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:i,stylis:s}}),[t.shouldForwardProp,i,s]);return e.createElement(Et.Provider,{value:u},e.createElement(_t.Provider,{value:s},t.children))}var Nt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=kt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Xe(this,(function(){throw Ze(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=kt),this.name+e.hash},e}(),Tt=function(e){return e>="A"&&e<="Z"};function zt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Tt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var jt=function(e){return null==e||!1===e||""===e},Ot=function(e){var t,n,r=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!jt(i)&&(Array.isArray(i)&&i.isCss||Ve(i)?r.push("".concat(zt(a),":"),i,";"):qe(i)?r.push.apply(r,o(o(["".concat(a," {")],Ot(i),!1),["}"],!1)):r.push("".concat(zt(a),": ").concat((t=a,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ie||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Rt(e,t,n,r){return jt(e)?[]:Ke(e)?[".".concat(e.styledComponentId)]:Ve(e)?!Ve(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Rt(e(t),t,n,r):e instanceof Nt?n?(e.inject(n,r),[e.getName(r)]):[e]:qe(e)?Ot(e):Array.isArray(e)?Array.prototype.concat.apply(he,e.map((function(e){return Rt(e,t,n,r)}))):[e.toString()];var a}function Lt(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ve(n)&&!Ke(n))return!1}return!0}var It=Ce(ce),Dt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Lt(e),this.componentId=t,this.baseHash=_e(It,t),this.baseStyle=n,vt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Qe(r,this.staticRulesId);else{var a=Ye(Rt(this.rules,e,t,n)),o=ke(_e(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=Qe(r,o),this.staticRulesId=o}else{for(var l=_e(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Ye(Rt(c,e,t,n));l=_e(l,d+u),s+=d}}if(s){var f=ke(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Qe(r,f)}}return r},e}(),Ft=e.createContext(void 0);Ft.Consumer;var Mt={};new Set;function At(t,n,r){var o=Ke(t),i=t,l=!Te(t),s=n.attrs,u=void 0===s?he:s,c=n.componentId,d=void 0===c?function(e,t){var n="string"!=typeof e?"sc":xe(e);Mt[n]=(Mt[n]||0)+1;var r="".concat(n,"-").concat(Pe(ce+n+Mt[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,f=n.displayName,p=void 0===f?function(e){return Te(e)?"styled.".concat(e):"Styled(".concat(Ne(e),")")}(t):f,h=n.displayName&&n.componentId?"".concat(xe(n.displayName),"-").concat(n.componentId):n.componentId||d,m=o&&i.attrs?i.attrs.concat(u).filter(Boolean):u,g=n.shouldForwardProp;if(o&&i.shouldForwardProp){var v=i.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;g=function(e,t){return v(e,t)&&y(e,t)}}else g=v}var b=new Dt(r,h,o?i.componentStyle:void 0);function x(t,n){return function(t,n,r){var o=t.attrs,i=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,u=t.styledComponentId,c=t.target,d=e.useContext(Ft),f=Ct(),p=t.shouldForwardProp||f.shouldForwardProp,h=ge(n,d,l)||me,m=function(e,t,n){for(var r,o=a(a({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var l=Ve(r=e[i])?r(o):r;for(var s in l)o[s]="className"===s?Qe(o[s],l[s]):"style"===s?a(a({},o[s]),l[s]):l[s]}return t.className&&(o.className=Qe(o.className,t.className)),o}(o,n,h),g=m.as||c,v={};for(var y in m)void 0===m[y]||"$"===y[0]||"as"===y||"theme"===y&&m.theme===h||("forwardedAs"===y?v.as=m.forwardedAs:p&&!p(y,g)||(v[y]=m[y]));var b=function(e,t){var n=Ct();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,m),x=Qe(s,u);return b&&(x+=" "+b),m.className&&(x+=" "+m.className),v[Te(g)&&!ve.has(g)?"class":"className"]=x,v.ref=r,(0,e.createElement)(g,v)}(w,t,n)}x.displayName=p;var w=e.forwardRef(x);return w.attrs=m,w.componentStyle=b,w.displayName=p,w.shouldForwardProp=g,w.foldedComponentIds=o?Qe(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=h,w.target=o?i.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Ge(e,a[r],!0);return e}({},i.defaultProps,e):e}}),Xe(w,(function(){return".".concat(w.styledComponentId)})),l&&Be(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Ut(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Ht=function(e){return Object.assign(e,{isCss:!0})};function $t(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ve(e)||qe(e))return Ht(Rt(Ut(he,o([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Rt(r):Ht(Rt(Ut(r,t)))}function Wt(e,t,n){if(void 0===n&&(n=me),!t)throw Ze(1,t);var r=function(r){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,n,$t.apply(void 0,o([r],a,!1)))};return r.attrs=function(r){return Wt(e,t,a(a({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Wt(e,t,a(a({},n),r))},r}var Bt=function(e){return Wt(At,e)},Vt=Bt;ve.forEach((function(e){Vt[e]=Bt(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Lt(e),vt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var a=r(Ye(Rt(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&vt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ct(),r=Ye([n&&'nonce="'.concat(n,'"'),"".concat(le,'="true"'),"".concat(ue,'="').concat(ce,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw Ze(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw Ze(2);var r=t.instance.toString();if(!r)return[];var o=((n={})[le]="",n[ue]=ce,n.dangerouslySetInnerHTML={__html:r},n),i=ct();return i&&(o.nonce=i),[e.createElement("style",a({},o,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new vt({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw Ze(2);return e.createElement(Pt,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw Ze(3)}})(),"__sc-".concat(le,"__");const Kt=Vt.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(115deg, #1e1f31, #2c2f49);
  transition: background 0.2s ease-in-out;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.15),
      transparent 50%
    );
    background-size: cover;
    opacity: 0.9;
    mix-blend-mode: screen;
    animation: auroraFlow 10s infinite alternate ease-in-out;
  }

  &:after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
        circle at 30% 50%,
        rgba(255, 61, 99, 0.5),
        transparent 70%
      ),
      radial-gradient(
        circle at 70% 50%,
        rgba(61, 255, 193, 0.5),
        transparent 70%
      ),
      radial-gradient(
        circle at 50% 75%,
        rgba(135, 61, 255, 0.4),
        /* Elegant violet */ transparent 70%
      );
    mix-blend-mode: overlay;
    animation: auroraWave 12s infinite alternate ease-in-out,
      auroraPulse 6s infinite ease-in-out;
  }

  @keyframes auroraFlow {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    25% {
      transform: translate(-40%, -40%) scale(1.1);
    }
    50% {
      transform: translate(-50%, -60%) scale(1.3);
    }
    75% {
      transform: translate(-60%, -50%) scale(1.1);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @keyframes auroraWave {
    0% {
      transform: translate(0, 0) scale(1);
      filter: hue-rotate(0deg);
    }
    50% {
      transform: translate(20%, -20%) scale(1.4);
      filter: hue-rotate(60deg);
    }
    100% {
      transform: translate(-20%, 20%) scale(1);
      filter: hue-rotate(0deg);
    }
  }

  @keyframes auroraPulse {
    0%,
    100% {
      opacity: 0.7;
    }
    50% {
      opacity: 1.2;
    }
  }

  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Qt=Vt.section`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
  padding-top: 60px;

  h1 {
    font-size: 3.5rem;
    color: #c7d3fa;
    margin-bottom: 30px;
    animation: fadeIn 1s ease-out;
    font-family: "NTR";
    z-index: 100;
  }

  p {
    font-size: 1.15rem;
    text-align: center;
    max-width: 800px;
    color: #a6bce3;
    z-index: 100;
  }

  @media (max-width: 480px) {
    padding-top: 0;
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
    .skills ul {
      justify-content: center;
    }
  }

  p,
  h1 {
    opacity: 0;
    animation-fill-mode: forwards;
  }

  p.visible,
  h1.visible {
    animation: fadeSlideUp 0.8s ease-out forwards;
  }
`,Yt=Vt.section`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
  h1 {
    z-index: 100;
    font-size: 3.5rem;
    color: #c7d3fa;
    margin-bottom: 20px;
    font-family: "NTR";
    opacity: 0;
  }
  p {
    font-size: 1.15rem;
    max-width: 700px;
    color: #a6bce3;
    margin: 5px 0;
    line-height: 1.6;
    opacity: 0;
    z-index: 100;
  }
  .favorites {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 800px;
    margin-top: 40px;
    opacity: 0;
    z-index: 100;
    .favorite-item {
      background: rgba(255, 255, 255, 0.07);
      padding: 15px;
      border-radius: 12px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
      z-index: 100;
      cursor: pointer;
      position: relative;
      overflow: hidden;

      &:hover {
        transform: translateY(-12px) scale(1.03);
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);

        &::after {
          transform: translateY(0%);
          opacity: 0.07;
        }

        h3 {
          color: #5fc9f3;
          transform: translateY(-2px);
        }
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #69dbb7, #5fc9f3);
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.4s ease;
        transform: translateY(100%);
        z-index: -1;
      }

      h3 {
        font-size: 1.1rem;
        color: #69dbb7;
        margin-bottom: 8px;
        font-weight: 600;
        font-family: futura;
        transition: color 0.3s ease, transform 0.3s ease;
      }
      p,
      ul {
        font-size: 1rem;
        color: #c8d4f4;
        margin: 0;
        transition: color 0.3s ease;
      }
      p:hover {
        color: #5fc9f3;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        margin-bottom: 5px;
        align-items: center;
        position: relative;
        transition: transform 0.3s ease, color 0.3s ease;
        padding-left: 5px;

        &:hover {
          color: #5fc9f3;
          /* transform: translateX(5px); */
        }
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  p,
  .favorites {
    opacity: 0;
    animation-fill-mode: forwards;
  }

  h1.visible {
    animation: fadeIn 1s ease-out forwards;
  }

  p.visible,
  .favorites.visible {
    animation: fadeSlideUp 0.8s ease-out forwards;
  }
  .favorite-item {
    opacity: 0;
    animation-fill-mode: forwards;
  }
  .favorite-item.visible {
    animation: fadeSlideUp 0.8s ease-out forwards;
    animation-delay: calc(0.1s * var(--item-index, 0));
  }
  @media (min-width: 768px) {
    padding: 0 40px;
    padding-top: 45px;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 480px) {
    padding-top: 55px;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
    .favorite-item li {
      font-size: 0.9;
    }
  }
  @media (min-width: 1024px) {
    padding: 0 60px;
    padding-bottom: 60px;
    padding-top: 60px;
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.15rem;
    }
  }
`,qt=Vt.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  font-family: "NTR";

  h1 {
    font-size: 4.3rem;
    line-height: 1.2;
    color: #c7d3fa;
    margin-bottom: 10px;
    font-weight: normal;
    z-index: 100;
  }

  .name-text {
    color: #69dbb7;
    font-weight: 600;
  }

  .intro-text {
    font-size: 1.7rem;
    font-weight: 500;
    max-width: 700px;
    margin: 5px 0 15px;
    color: #a6bce3;
    opacity: 0;
    animation: fadeInUp 1.2s ease-out forwards;
    animation-delay: 0.3s;
  }

  .bio-text {
    font-size: 1.2rem;
    max-width: 600px;
    margin-top: 10px;
    color: #c8d4f4;
    font-family: "Nunito Sans", sans-serif;
    opacity: 0;
    animation: fadeInUp 1.2s ease-out forwards;
    animation-delay: 0.7s;
  }

  .cursor {
    animation: blink 1s steps(2) infinite;
    color: #69dbb7;
  }

  .skills {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Nunito Sans", sans-serif;
    z-index: 100;

    p {
      font-size: 1.15rem;
      margin-bottom: 25px;
      /* letter-spacing: 1px; */
      -webkit-background-clip: text;
      color: #a6bce3;
    }

    ul {
      display: flex;
      gap: 25px;
      list-style: none;
      padding: 0;
      margin: 0;
      flex-wrap: wrap;
    }

    li {
      font-size: 1rem;
      color: #69dbb7;
      /* background: linear-gradient(135deg, #333f58, #2e3547); */
      padding: 10px 18px;
      border-radius: 25px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease, background 0.3s ease;
      cursor: pointer;
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.07);

      &:hover {
        transform: translateY(-5px) scale(1.05);
        background: linear-gradient(135deg, #5fc9f3, #69dbb7);
        color: #fff;
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    50.1%,
    100% {
      opacity: 0;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    .intro-text {
      font-size: 1.5rem;
      max-width: 90%;
    }

    .bio-text {
      font-size: 1.2rem;
      max-width: 90%;
    }

    .skills {
      margin-top: 30px;
    }

    .skills p {
      font-size: 1.2rem;
    }

    li {
      font-size: 1rem;
      padding: 8px 14px;
    }
  }

  @media (max-width: 480px) {
    height: 70vh;
    padding-top: 40px;
    h1 {
      font-size: 2.5rem;
    }

    .intro-text {
      font-size: 1.3rem;
    }

    .bio-text {
      font-size: 1rem;
    }

    .skills p {
      font-size: 1rem;
    }
    .skills ul {
      justify-content: center;
    }

    li {
      font-size: 0.9rem;
      padding: 6px 12px;
    }
  }
`,Gt=Vt.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 60px 20px;
  color: #d5def5;
  min-height: 30vh;
  margin-bottom: 60px;
  position: relative;
  z-index: 100;

  h1 {
    font-size: 3.5rem;
    color: #c7d3fa;
    animation: fadeIn 1s ease-out;
    font-family: "NTR";
  }

  .content-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 100;
    width: 100%;
    max-width: 1200px;
    font-family: "Nunito Sans", sans-serif;
  }

  .content-box {
    padding-bottom: 25px;
  }

  .position-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .position-block {
    position: relative;
    padding: 10px 0;
    margin-bottom: 10px;
    transition: all 0.3s ease;

    /* &:hover {
      transform: translateX(5px);
    } */
  }

  .content-heading {
    display: flex;
    gap: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 23%;
    position: relative;
    border-right: 2px solid rgba(255, 255, 255, 0.1);
  }

  .tab-button {
    position: relative;
    padding: 1rem;
    background: transparent;
    color: #a6bce3;
    border: none;
    font-size: 1.2rem;
    text-align: left;
    cursor: pointer;
    transition: color 0.7s ease, border-color 0.7s ease, transform 0.3s ease;
    border-right: 4px solid transparent;

    &:hover {
      /* transform: translateX(1px); */
      color: #8eafd9;
    }

    &.active {
      color: #69dbb7;
      border-right-color: #69dbb7;
      font-weight: bold;
      transition: color 0.7s ease-in-out, border-right-color 0.7s ease-in-out;
    }
  }

  .content {
    flex: 1;
    padding-left: 80px;
    position: relative;

    .content-heading {
      display: flex;
      align-items: baseline;

      .work-ex-h2 {
        font-size: 1.3rem;
        color: #d5def5;
        margin: 0;
        white-space: nowrap;
        font-weight: 500;
      }

      .work-ex-h3 {
        font-size: 1.3rem;
        color: #69dbb7;
        margin: 0;
        white-space: nowrap;
      }
    }

    .time {
      font-size: 1rem;
      color: #c8d4f4;
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
      opacity: 0.6;
    }

    .description {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.1rem;
      line-height: 1.7;
      list-style-type: none;
      padding-left: 5px;
      color: #a6bce3;

      li {
        position: relative;
        padding-left: 2rem;
        transition: transform 0.3s ease;

        /* &:hover {
          transform: translateX(5px);
        } */

        &::before {
          content: "▹";
          color: #69dbb7;
          position: absolute;
          left: 0;
          font-size: 1.3rem;
        }
      }
    }
  }

  .tab-button {
    position: relative;
    overflow: hidden;

    .ripple {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300%;
      height: 300%;
      background: rgba(105, 219, 183, 0.5);
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(1.3);
      animation: rippleAnimation 0.9s ease-out;
    }
  }

  @keyframes rippleAnimation {
    from {
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .experience-content {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .experience-content.active {
    opacity: 1;
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    padding: 0 40px;

    h1 {
      font-size: 3rem;
    }

    .tab-button {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 0 60px;
    padding-top: 60px;

    h1 {
      font-size: 3.5rem;
    }

    .tab-button {
      font-size: 1.2rem;
    }

    .description {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 0;

    h1 {
      font-size: 2.5rem;
    }

    .content-wrapper {
      flex-direction: column;
      align-items: center;
      padding: 0 10px;
    }

    .sidebar {
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
      border-right: none;
      border-bottom: 2px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 20px;
    }

    .tab-button {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border-right: none;
      border-bottom: 4px solid transparent;
      text-align: center;
    }

    .tab-button.active {
      color: #69dbb7;
      border-bottom-color: #69dbb7;
      font-weight: bold;
    }

    .content {
      padding-left: 0;
      text-align: center;

      .time {
        font-size: 0.9rem;
      }
    }

    .content .content-heading {
      justify-content: center;

      .work-ex-h2 {
        font-size: 1rem;
        white-space: nowrap;
      }

      .work-ex-h3 {
        font-size: 1rem;
        white-space: nowrap;
      }
    }

    .description {
      text-align: left;
    }

    .description li {
      font-size: 1rem;
      padding-left: 1.5rem;
    }
  }

  .content-wrapper {
    opacity: 0;
    animation-fill-mode: forwards;
  }

  .content-wrapper.visible {
    animation: fadeSlideUp 0.8s ease-out forwards;
  }

  .sidebar,
  .content {
    opacity: 0;
    animation-fill-mode: forwards;
  }

  .sidebar.visible {
    animation: fadeSlideUp 0.8s ease-out forwards;
  }

  .content.visible {
    animation: fadeSlideUp 0.8s ease-out forwards;
    animation-delay: 0.2s;
  }
`,Xt=Vt.section`
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    width: 100%;
    background: linear-gradient(115deg, #1e1f31, #2c2f49);
    z-index: 1000;
    box-sizing: border-box;
    background: #1e1f31;
  }

  .navbar-left {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .navbar-left a.name {
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    color: #5fc9f3;
  }

  .navbar-left ul {
    list-style-type: none;
    display: flex;
    gap: 15px;
    margin: 0;
    padding: 0;
  }

  .navbar-left a {
    color: #d5def5;
    text-decoration: none;
    font-size: 0.9rem;
  }

  .navbar-left a.pages.active {
    color: #a4fbe3;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s;
  }

  .navbar-right {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .navbar-right a {
    color: #d5def5;
    text-decoration: none;
  }

  .navbar-right a .icons:hover {
    fill: #a4fbe3;
    transform: translateY(-1px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .navbar-right a svg.letterboxd-icons .letterboxd:hover {
    fill: #a4fbe3;
  }
  svg.letterboxd-icons:hover {
    transform: translateY(-1px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (max-width: 768px) {
    .navbar-container {
      padding: 20px;
    }

    .navbar-left {
      flex-direction: column;
      gap: 10px;
    }

    .navbar-left ul {
      flex-direction: column;
      gap: 10px;
    }

    .navbar-left a.name {
      font-size: 1.2rem;
    }

    .navbar-left a.pages {
      font-size: 1rem;
    }

    .navbar-right {
      margin-top: 10px;
    }

    .navbar-right a .icons {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 480px) {
    .navbar-container {
      background: transparent;
    }
  }
  .menu-icon {
    display: none;
    cursor: pointer;
  }

  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100vh;
    background: linear-gradient(115deg, #1e1f31, #2c2f49);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.15),
        transparent 50%
      );
      background-size: cover;
      opacity: 0.9;
      mix-blend-mode: screen;
      animation: auroraFlow 10s infinite alternate ease-in-out;
      z-index: -1;
    }

    &:after {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(
          circle at 30% 50%,
          rgba(255, 61, 99, 0.5),
          transparent 70%
        ),
        radial-gradient(
          circle at 70% 50%,
          rgba(61, 255, 193, 0.5),
          transparent 70%
        ),
        radial-gradient(
          circle at 50% 75%,
          rgba(135, 61, 255, 0.4),
          transparent 70%
        );
      mix-blend-mode: overlay;
      animation: auroraWave 12s infinite alternate ease-in-out,
        auroraPulse 6s infinite ease-in-out;
      z-index: -1;
    }

    @keyframes auroraFlow {
      0% {
        transform: translate(-50%, -50%) scale(1);
      }
      25% {
        transform: translate(-40%, -40%) scale(1.1);
      }
      50% {
        transform: translate(-50%, -60%) scale(1.3);
      }
      75% {
        transform: translate(-60%, -50%) scale(1.1);
      }
      100% {
        transform: translate(-50%, -50%) scale(1);
      }
    }

    @keyframes auroraWave {
      0% {
        transform: translate(0, 0) scale(1);
        filter: hue-rotate(0deg);
      }
      50% {
        transform: translate(20%, -20%) scale(1.4);
        filter: hue-rotate(60deg);
      }
      100% {
        transform: translate(-20%, 20%) scale(1);
        filter: hue-rotate(0deg);
      }
    }

    @keyframes auroraPulse {
      0%,
      100% {
        opacity: 0.7;
      }
      50% {
        opacity: 1.2;
      }
    }
    .name {
      color: #5fc9f3;
    }
  }

  .sidebar-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 0.7;
  }

  .sidebar-right {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .sidebar-left a,
  .sidebar-right a {
    color: #d5def5;
    text-decoration: none;
    font-size: 1.2rem;
    margin: 15px 0;
    transition: color 0.3s;

    &:hover {
      color: #69dbb7;
      cursor: grab;
    }
  }
  @media (max-width: 768px) {
    .menu-icon {
      display: block;
    }

    .navbar-container {
      justify-content: space-between;
    }

    .navbar-left {
      display: none;
    }

    .navbar-right {
      display: none;
    }
  }
`,Zt=Vt.footer`
  width: 100%;
  padding: 20px 0;
  color: #a6bce3;
  text-align: center;
  font-size: 0.8rem;
  bottom: 0;
  left: 0;

  a {
    text-decoration: none;
    color: #a4fbe3;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`,Jt=Vt.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); /* Reduced minimum width */
  gap: 20px;
  padding: 20px 0;

  .visible {
    animation: fadeSlideUp 0.8s ease-out forwards;
  }
`,en=Vt.div`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 20px;
  position: relative;
  text-align: left;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
  text-align: center;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #5fc9f3, #69dbb7);
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);

    &::before {
      transform: translateY(0);
    }

    h3 {
      color: #5fc9f3;
    }

    .tech-stack {
      color: #69dbb7;
    }

    /* .project-icon {
      transform: rotate(360deg) scale(1.2);
    } */
  }

  /* svg.project-icon {
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    fill: #c8d4f4;

    &:hover {
      fill: #69dbb7;
      transform: rotate(360deg) scale(1.3);
    }
  } */

  svg.project-icon {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      fill: #69dbb7;
      transform: translateY(-2px);
      /* filter: drop-shadow(0 2px 4px rgba(105, 219, 183, 0.3)); */
    }
  }

  .github-link {
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    padding-bottom: 10px;
    gap: 10px;
    align-items: center;
  }

  h3 {
    font-size: 1.1rem;
    color: #69dbb7;
    margin-bottom: 10px;
    transition: color 0.3s ease, transform 0.3s ease;
  }

  p {
    color: #a6bce3;
    font-size: 0.9rem;
    margin-bottom: 10px;
    transition: color 0.3s ease;
  }

  .tech-stack {
    font-size: 0.8rem;
    color: #5fc9f3;
    margin-top: 10px;
    transition: color 0.3s ease;
  }

  .icons {
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    gap: 10px;
    color: #69dbb7;

    a {
      color: inherit;
      font-size: 1.2rem;
      transition: transform 0.3s ease, color 0.3s ease;

      &:hover {
        color: #5fc9f3;
        transform: translateY(-3px);
      }
    }
  }

  opacity: 0;
  animation-fill-mode: forwards;
  &.visible {
    animation: fadeSlideUp 0.8s ease-out forwards;
    animation-delay: calc(0.1s * var(--item-index, 0));
  }
`;var tn=n(579);const nn=()=>{const[t,n]=(0,e.useState)(!1),[r,a]=(0,e.useState)(""),[o,i]=(0,e.useState)(!0),l="Hello there, I'm Vighnesh",[s,u]=(0,e.useState)(!1),[c,d]=(0,e.useState)(!1);(0,e.useEffect)((()=>{n(!0);let e=0;const t=setInterval((()=>{if(!(e<25)){clearInterval(t);const e=setInterval((()=>{i((e=>!e))}),500);return setTimeout((()=>{d((e=>!e))}),600),setTimeout((()=>{u(!0)}),800),()=>clearInterval(e)}a(l.substring(0,e+1)),e++}),100);return()=>clearInterval(t)}),[]);const f=e=>({fontSize:"1rem",color:"#69dbb7",padding:"10px 18px",borderRadius:"25px",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)",cursor:"pointer",background:"rgba(255, 255, 255, 0.07)",transition:"all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",animation:s?"fadeIn 0.6s forwards":"none",animationDelay:.2+.1*e+"s",opacity:0,transform:s?"translateY(0)":"translateY(15px)",display:"inline-block",margin:"5px"});return(0,tn.jsxs)(qt,{id:"home",children:[(0,tn.jsxs)("h1",{style:{position:"relative"},children:[(0,tn.jsx)("span",{children:(()=>{if(!r)return null;const e=l.indexOf("Vighnesh");return-1===e||r.length<=e?(0,tn.jsx)("span",{style:{color:"#c7d3fa"},children:r}):(0,tn.jsxs)(tn.Fragment,{children:[(0,tn.jsx)("span",{style:{color:"#c7d3fa"},children:r.substring(0,e)}),(0,tn.jsx)("span",{style:{color:"#69dbb7",fontWeight:"bold"},children:r.substring(e)})]})})()}),o&&(0,tn.jsx)("span",{style:{color:"#69dbb7",position:"absolute",marginLeft:"2px"},children:"|"})]}),(0,tn.jsx)("p",{className:"intro-text",children:"I make things. Sometimes, they even work."}),(0,tn.jsx)("p",{className:"bio-text",children:"Based in Bangalore, India, I'm a Software Engineer with over four years of experience with a flair for design and innovation. I build solutions that tackle real challenges and turn ideas into reality."}),(0,tn.jsxs)("div",{className:"skills",style:{opacity:c?1:0,animation:c?"fadeInUp 0.8s ease-out forwards":"none",minHeight:"200px"},children:[c&&(0,tn.jsx)("p",{children:"Here's a peek at the tech I love to work with"}),(0,tn.jsx)("ul",{children:["JavaScript ES6+","React","Python","TypeScript","Golang","Node.js","C++","SQL","MongoDB"].map(((e,t)=>(0,tn.jsx)("li",{style:f(t),onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-5px) scale(1.05)",e.currentTarget.style.background="rgba(105, 219, 183, 0.2)",e.currentTarget.style.color="#fff",e.currentTarget.style.boxShadow="0px 8px 15px rgba(0, 0, 0, 0.4)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0) scale(1)",e.currentTarget.style.background="rgba(255, 255, 255, 0.07)",e.currentTarget.style.color="#69dbb7",e.currentTarget.style.boxShadow="0px 4px 10px rgba(0, 0, 0, 0.3)"},children:e},t)))})]})]})};function rn(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];(0,e.useEffect)((()=>{const e=()=>{[document.querySelectorAll(".favorite-item"),document.querySelectorAll(".project-card")].forEach((e=>{const t=Array.from(e),n={};t.forEach((e=>{const t=e.parentElement;n[t]||(n[t]=[]),n[t].push(e)})),Object.values(n).forEach((e=>{e.forEach(((e,t)=>{e.style.setProperty("--item-index",t)}))}))}))},n=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(t.target.classList.add("visible"),(t.target.classList.contains("favorites")||t.target.parentElement.classList.contains("project-grid"))&&e())}))}),{threshold:.1,rootMargin:"0px 0px -10% 0px"}),r=[".favorite-item",".project-card",".content-wrapper",".sidebar",".content","h1","p",".favorites",".skills"],a=document.querySelectorAll([...r,...t].join(", "));a.forEach((e=>{n.observe(e)})),document.querySelectorAll([...r,...t].join(", ")).forEach((e=>{(e=>{const t=e.getBoundingClientRect();return t.top<=.8*(window.innerHeight||document.documentElement.clientHeight)&&t.bottom>=0})(e)&&(e.classList.add("visible"),e.classList.contains("favorite-item")||e.classList.contains("project-card"))&&Array.from(e.parentElement.children).forEach(((e,t)=>{e.style.setProperty("--item-index",t)}))})),e();return setTimeout((()=>{document.querySelectorAll(".project-card, .favorite-item").forEach((e=>{e.addEventListener("mousemove",(t=>{const{left:n,top:r,width:a,height:o}=e.getBoundingClientRect(),i=(t.clientX-n)/a-.5,l=(t.clientY-r)/o-.5;e.style.transform=`\n            translateY(${e.classList.contains("project-card")?"-10px":"-12px"}) \n            perspective(1000px) \n            rotateX(${5*l}deg) \n            rotateY(${-5*i}deg)\n            scale(${e.classList.contains("project-card")?"1.02":"1.03"})\n          `})),e.addEventListener("mouseleave",(()=>{e.style.transform=""}))}))}),500),()=>{a.forEach((e=>{n.unobserve(e)}));document.querySelectorAll(".project-card, .favorite-item").forEach((e=>{e.removeEventListener("mousemove",(()=>{})),e.removeEventListener("mouseleave",(()=>{}))}))}}),[t])}const an=function(){return rn(),(0,tn.jsxs)(Yt,{id:"about",children:[(0,tn.jsx)("h1",{children:"/ about me"}),(0,tn.jsx)("p",{children:"I\u2019m a Full Stack Engineer at View26, where I tackle challenges and design products that people love to use, focusing on creating seamless experiences that make a real impact."}),(0,tn.jsx)("p",{children:"When I\u2019m not coding, I enjoy music, books, movies, and video games. I\u2019m also a big sports fan, especially football and Formula 1."}),(0,tn.jsx)("p",{children:"Here are some of my favorite things:"}),(0,tn.jsxs)("div",{className:"favorites",children:[(0,tn.jsxs)("div",{className:"favorite-item",children:[(0,tn.jsx)("h3",{children:"Music Artists"}),(0,tn.jsxs)("ul",{children:[(0,tn.jsx)("li",{children:"Kendrick Lamar"}),(0,tn.jsx)("li",{children:"Twenty One Pilots"}),(0,tn.jsx)("li",{children:"Daft Punk"}),(0,tn.jsx)("li",{children:"Tame Impala"})]})]}),(0,tn.jsxs)("div",{className:"favorite-item",children:[(0,tn.jsx)("h3",{children:"Games"}),(0,tn.jsxs)("ul",{children:[(0,tn.jsx)("li",{children:"The Witcher 3"}),(0,tn.jsx)("li",{children:"Journey"}),(0,tn.jsx)("li",{children:"The Last of Us"}),(0,tn.jsx)("li",{children:"Uncharted 4"})]})]}),(0,tn.jsxs)("div",{className:"favorite-item",children:[(0,tn.jsx)("h3",{children:"Movies and Animes"}),(0,tn.jsxs)("ul",{children:[(0,tn.jsx)("li",{children:"Lord Of The Rings"}),(0,tn.jsx)("li",{children:"Harry Potter "}),(0,tn.jsx)("li",{children:"Cowboy Bebop"}),(0,tn.jsx)("li",{children:"Natsume Yuujinchou"}),(0,tn.jsx)("li",{children:"Bleach"})]})]}),(0,tn.jsxs)("div",{className:"favorite-item",children:[(0,tn.jsx)("h3",{children:"Books"}),(0,tn.jsxs)("ul",{children:[(0,tn.jsx)("li",{children:"Feluda"}),(0,tn.jsx)("li",{children:"Tomorrow, and Tomorrow, and Tomorrow"})]})]}),(0,tn.jsxs)("div",{className:"favorite-item",children:[(0,tn.jsx)("h3",{children:"Football"}),(0,tn.jsxs)("ul",{children:[(0,tn.jsx)("li",{children:"Manchester United"}),(0,tn.jsx)("li",{children:"Wayne Rooney"})]})]}),(0,tn.jsxs)("div",{className:"favorite-item",children:[(0,tn.jsx)("h3",{children:"Formula 1"}),(0,tn.jsxs)("ul",{children:[(0,tn.jsx)("li",{children:"Ferrari"}),(0,tn.jsx)("li",{children:"Lewis Hamilton"}),(0,tn.jsx)("li",{children:"Max Verstappen"})]})]})]})]})},on={experience1:{positions:[{role:"Full Stack Engineer @ ",company:"View26 GmbH / Actiotech LLP",time:"JAN 2025 - JUL 2025",description:["Designed and developed a product analytics application to provide comprehensive insights into app performance and user behavior.","Enabled detailed analysis of user interactions, feature utilization, and engagement trends to identify undervalued features and optimize value delivery.","Integrated churn prediction metrics with proactive protocols to mitigate risks and enhance user retention.","Migrated Charts & Reports from Atlassian Connect to Forge, delivering a production build ahead of schedule."]},{role:"Software Engineer @",company:"View26 GmbH / Actiotech LLP",time:"AUG 2021 - DEC 2024",description:["Developed and maintained a leading Atlassian Marketplace app, Charts & Reports for Jira Service Management, with 1,000+ active installs across enterprise clients.","Oversaw project planning, resource management, and quality assurance for various projects while mentoring junior developers in software design and development best practices.","Managed the codebase to ensure high quality and collaborated with product managers, designers, and stakeholders to gather and translate project requirements."]}],company:"View26 GmbH"},experience2:{positions:[{role:"Intern @ ",company:"Melwire Rolling (Pvt) Ltd",time:"JUN 2019 - JUL 2019",description:["Gained hands-on experience in key concepts such as Rolling Mill operations, Industrial Networking, PLC Programming, Instrumentation, and Industrial Automation.","Utilized technologies including Siemens PLC, Profibus, and Profinet to enhance understanding of automation processes."]}],company:"Melwire Rolling (Pvt) Ltd"}},ln=()=>{const[t,n]=(0,e.useState)("experience1"),[r,a]=(0,e.useState)(!0),o=(0,e.useRef)(null);(0,e.useEffect)((()=>{if(o.current){const e=document.createElement("span");e.classList.add("ripple"),o.current.appendChild(e),setTimeout((()=>{e.remove()}),500)}}),[t]);const i=on[t];return(0,tn.jsxs)(Gt,{id:"experience",children:[(0,tn.jsx)("h1",{children:"/ experience"}),(0,tn.jsxs)("div",{className:"content-wrapper",children:[(0,tn.jsx)("div",{className:"sidebar",children:Object.keys(on).map((e=>(0,tn.jsx)("button",{className:"tab-button "+(t===e?"active":""),onClick:()=>{var r;(r=e)!==t&&(a(!1),setTimeout((()=>{n(r),setTimeout((()=>{a(!0)}),20)}),200))},ref:t===e?o:null,children:on[e].company},e)))}),(0,tn.jsx)("div",{className:"content "+(r?"visible":""),children:(0,tn.jsx)("div",{className:"experience-content "+(r?"active":""),children:i.positions.map(((e,t)=>(0,tn.jsxs)("div",{className:"position-block",children:[(0,tn.jsxs)("div",{className:"content-heading",children:[(0,tn.jsx)("h2",{className:"work-ex-h2",children:e.role}),(0,tn.jsx)("h3",{className:"work-ex-h3",children:e.company})]}),(0,tn.jsx)("div",{className:"time",children:e.time}),(0,tn.jsx)("ul",{className:"description",children:e.description.map(((e,t)=>(0,tn.jsx)("li",{children:e},t)))})]},t)))})})]})]})};var sn;function un(){return un=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},un.apply(null,arguments)}function cn(t,n){let{title:r,titleId:a,...o}=t;return e.createElement("svg",un({className:"MuiSvgIcon-root",focusable:"false",fill:"#d5def5",viewBox:"0 0 24 24","aria-hidden":"true",style:{fontSize:19},ref:n,"aria-labelledby":a},o),r?e.createElement("title",{id:a},r):null,sn||(sn=e.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"})))}const dn=e.forwardRef(cn);n.p;var fn;function pn(){return pn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pn.apply(null,arguments)}function hn(t,n){let{title:r,titleId:a,...o}=t;return e.createElement("svg",pn({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#d5def5",ref:n,"aria-labelledby":a},o),r?e.createElement("title",{id:a},r):null,fn||(fn=e.createElement("path",{d:"M555.46-493v43.54q0 18.93 12.8 31.74 12.8 12.81 31.73 12.81 18.92 0 31.74-12.81 12.81-12.81 12.81-31.74v-149.58q0-19.16-13.17-32.33-13.17-13.17-32.33-13.17H449.46q-18.93 0-31.74 12.8-12.81 12.8-12.81 31.73 0 18.92 12.81 31.74 12.81 12.81 31.74 12.81H492L324.65-388.11q-12.43 12.32-12.43 30.79t12.43 31.67q13.2 13.43 31.85 13.31 18.65-.12 31.85-13.31L555.46-493ZM480-71.87q-84.91 0-159.34-32.12-74.44-32.12-129.5-87.17-55.05-55.06-87.17-129.5Q71.87-395.09 71.87-480t32.12-159.34q32.12-74.44 87.17-129.5 55.06-55.05 129.5-87.17 74.43-32.12 159.34-32.12t159.34 32.12q74.44 32.12 129.5 87.17 55.05 55.06 87.17 129.5 32.12 74.43 32.12 159.34t-32.12 159.34q-32.12 74.44-87.17 129.5-55.06 55.05-129.5 87.17Q564.91-71.87 480-71.87Zm0-91q133.04 0 225.09-92.04 92.04-92.05 92.04-225.09 0-133.04-92.04-225.09-92.05-92.04-225.09-92.04-133.04 0-225.09 92.04-92.04 92.05-92.04 225.09 0 133.04 92.04 225.09 92.05 92.04 225.09 92.04ZM480-480Z"})))}const mn=e.forwardRef(hn),gn=(n.p,[{title:"Anemoi",description:"A web-based interface using the FastF1 library to vizualize F1 telemetry, stats, and race data, offering real-time insights and interactive graphs.",tech:"React, JavaScript, Python, Render",github:"https://github.com/vighnesh-radhakrishnan/anemoi",appLink:"https://vighnesh-radhakrishnan.github.io/anemoi/"},{title:"Bon App\xe9tit",description:"My recipe keeper\u2014store, edit, and add new meals all in one place, making it easy to update and reference anytime.",tech:"React, JavaScript",github:"https://github.com/vighnesh-radhakrishnan/bon-appetit",appLink:"https://vighnesh-radhakrishnan.github.io/bon-appetit/"},{title:"SlitherScript",description:"A simple and fun retake on the classic snake game\u2014crafted for moments of nostalgia and a bit of a challenge!",tech:"JavaScript, HTML/CSS",github:"https://github.com/vighnesh-radhakrishnan/slither-script",appLink:"https://vighnesh-radhakrishnan.github.io/slither-script/"},{title:"Stock Average Calculator",description:"A React app to calculate the average price of stocks based on inputted prices and quantities, with options to delete purchases.",tech:"React, JavaScript, HTML/CSS",github:"https://github.com/vighnesh-radhakrishnan/stock-average-calculator",appLink:"https://vighnesh-radhakrishnan.github.io/stock-average-calculator/"},{title:"Taskatron",description:"A simple and interactive Telegram bot for setting reminders and scheduling sessions, designed to keep users organized.",tech:"Python",github:"https://github.com/vighnesh-radhakrishnan/vighnesh",appLink:""},{title:"Portfolio",description:"A digital portfolio showcasing my work, experiences, and a way to connect. Built with modern web technologies, it reflects my technical skills and creative side.",tech:"React, JavaScript, HTML/CSS",github:"https://github.com/vighnesh-radhakrishnan/vighnesh",appLink:""}]),vn=()=>(rn(),(0,tn.jsxs)(Qt,{id:"projects",children:[(0,tn.jsx)("h1",{children:"/ projects"}),(0,tn.jsx)("p",{children:"Check out some of the cool projects I've worked on!"}),(0,tn.jsx)(Jt,{children:gn.map(((e,t)=>(0,tn.jsxs)(en,{className:"project-card",children:[(0,tn.jsxs)("div",{className:"github-link",children:[""!==e.appLink&&(0,tn.jsx)("a",{href:e.appLink,target:"_blank",rel:"noopener noreferrer",children:(0,tn.jsx)(mn,{className:"project-icon",width:"30px",height:"29px"})}),(0,tn.jsx)("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",children:(0,tn.jsx)(dn,{className:"project-icon",width:"24px",height:"24px"})})]}),(0,tn.jsx)("h3",{children:e.title}),(0,tn.jsx)("p",{children:e.description}),(0,tn.jsx)("div",{className:"tech-stack",children:e.tech})]},t)))})]})),yn=()=>(0,tn.jsxs)(Zt,{children:["Built and designed by Vighnesh Radhakrishnan. All rights reserved. \xa9"," ",(new Date).getFullYear()]});var bn;function xn(){return xn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xn.apply(null,arguments)}function wn(t,n){let{title:r,titleId:a,...o}=t;return e.createElement("svg",xn({className:"MuiSvgIcon-root",focusable:"false",fill:"#d5def5",viewBox:"0 0 24 24","aria-hidden":"true",style:{fontSize:21},ref:n,"aria-labelledby":a},o),r?e.createElement("title",{id:a},r):null,bn||(bn=e.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"})))}const Sn=e.forwardRef(wn);n.p;var kn;function En(){return En=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},En.apply(null,arguments)}function _n(t,n){let{title:r,titleId:a,...o}=t;return e.createElement("svg",En({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#d5def5",ref:n,"aria-labelledby":a},o),r?e.createElement("title",{id:a},r):null,kn||(kn=e.createElement("path",{d:"M162.87-151.87q-37.78 0-64.39-26.61t-26.61-64.39v-474.26q0-37.78 26.61-64.39t64.39-26.61h634.26q37.78 0 64.39 26.61t26.61 64.39v474.26q0 37.78-26.61 64.39t-64.39 26.61H162.87ZM480-429.72l-317.13-200v386.85h634.26v-386.85L480-429.72Zm0-87.41 317.13-200H162.87l317.13 200ZM162.87-629.72v-87.41 474.26-386.85Z"})))}const Cn=e.forwardRef(_n);n.p;var Pn;function Nn(){return Nn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nn.apply(null,arguments)}function Tn(t,n){let{title:r,titleId:a,...o}=t;return e.createElement("svg",Nn({xmlns:"http://www.w3.org/2000/svg",height:"20px",viewBox:"0 -960 960 960",width:"20px",fill:"#d5def5",ref:n,"aria-labelledby":a},o),r?e.createElement("title",{id:a},r):null,Pn||(Pn=e.createElement("path",{d:"M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z"})))}const zn=e.forwardRef(Tn);n.p;var jn,On;function Rn(){return Rn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rn.apply(null,arguments)}function Ln(t,n){let{title:r,titleId:a,...o}=t;return e.createElement("svg",Rn({viewBox:"0 0 500 500",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":a},o),r?e.createElement("title",{id:a},r):null,jn||(jn=e.createElement("circle",{className:"letterboxd",fill:"#d5def5",cx:250,cy:250,r:250})),On||(On=e.createElement("g",{transform:"translate(61 180)"},e.createElement("circle",{fill:"#202830",cx:189,cy:70,r:70}),e.createElement("circle",{fill:"#202830",cx:308,cy:70,r:70}),e.createElement("circle",{fill:"#202830",cx:70,cy:70,r:70}),e.createElement("path",{d:"M129.54 107.06c-6.73-10.75-10.62-23.45-10.62-37.06 0-13.61 3.89-26.32 10.62-37.06 6.73 10.74 10.62 23.45 10.62 37.06 0 13.61-3.89 26.31-10.62 37.06",fill:"#d5def5"}),e.createElement("path",{d:"M248.46 32.94c6.73 10.75 10.62 23.45 10.62 37.06 0 13.61-3.89 26.32-10.62 37.06-6.73-10.75-10.62-23.45-10.62-37.06 0-13.61 3.89-26.32 10.62-37.06",fill:"#d5def5"}))))}const In=e.forwardRef(Ln),Dn=(n.p,()=>{const[t,n]=(0,e.useState)(""),[r,a]=(0,e.useState)(!1),o=()=>{a(!r)},i=()=>{const e=document.querySelectorAll("section");let t="";e.forEach((e=>{const n=e.getBoundingClientRect().top,r=e.getBoundingClientRect().bottom;(n>=0&&n<window.innerHeight/2||r>=100&&r<window.innerHeight/2)&&(t=e.getAttribute("id"))})),n(t)};return(0,e.useEffect)((()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)})),[]),(0,e.useEffect)((()=>{const e=()=>{window.innerWidth>768&&r&&a(!1)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[r]),(0,tn.jsxs)(Xt,{children:[(0,tn.jsxs)("nav",{className:"navbar-container",children:[(0,tn.jsx)(zn,{className:"menu-icon",onClick:o}),(0,tn.jsxs)("nav",{className:"navbar-left",children:[(0,tn.jsx)("a",{href:"#",className:"name",children:"Vighnesh"}),(0,tn.jsxs)("ul",{children:[(0,tn.jsx)("li",{children:(0,tn.jsx)("a",{className:"pages "+("home"===t?"active":""),href:"#home",children:"Home"})}),(0,tn.jsx)("li",{children:(0,tn.jsx)("a",{className:"pages "+("about"===t?"active":""),href:"#about",children:"About"})}),(0,tn.jsx)("li",{children:(0,tn.jsx)("a",{className:"pages "+("experience"===t?"active":""),href:"#experience",children:"Experience"})}),(0,tn.jsx)("li",{children:(0,tn.jsx)("a",{className:"pages "+("projects"===t?"active":""),href:"#projects",children:"Projects"})})]})]}),(0,tn.jsxs)("nav",{className:"navbar-right",children:[(0,tn.jsx)("a",{href:"https://github.com/vighnesh-radhakrishnan","aria-label":"GitHub",target:"_blank",rel:"noopener noreferrer",children:(0,tn.jsx)(dn,{className:"icons",width:"19px",height:"19px"})}),(0,tn.jsx)("a",{href:"https://www.linkedin.com/in/vighneshradhakrishnan","aria-label":"LinkedIn",target:"_blank",rel:"noopener noreferrer",children:(0,tn.jsx)(Sn,{className:"icons",width:"23px",height:"23px"})}),(0,tn.jsx)("a",{href:"https://letterboxd.com/ayakashi7v/","aria-label":"Letterboxd",target:"_blank",rel:"noopener noreferrer",children:(0,tn.jsx)(In,{className:"letterboxd-icons",width:"20px",height:"20px"})}),(0,tn.jsx)("a",{href:"mailto:vighnesh7radhakrishnan@gmail.com","aria-label":"Email",children:(0,tn.jsx)(Cn,{className:"icons",width:"25px",height:"25px"})})]})]}),r&&(0,tn.jsxs)("div",{className:"sidebar",children:[(0,tn.jsxs)("div",{className:"sidebar-left",children:[(0,tn.jsx)("a",{href:"#",className:"name",onClick:o,children:"Vighnesh"}),(0,tn.jsx)("a",{href:"#home",onClick:o,children:"Home"}),(0,tn.jsx)("a",{href:"#about",onClick:o,children:"About"}),(0,tn.jsx)("a",{href:"#experience",onClick:o,children:"Experience"}),(0,tn.jsx)("a",{href:"#projects",onClick:o,children:"Projects"})]}),(0,tn.jsxs)("div",{className:"sidebar-right",children:[(0,tn.jsx)("a",{href:"https://github.com/vighnesh-radhakrishnan","aria-label":"GitHub",target:"_blank",rel:"noopener noreferrer",children:(0,tn.jsx)(dn,{className:"icons",width:"19px",height:"19px"})}),(0,tn.jsx)("a",{href:"https://www.linkedin.com/in/vighneshradhakrishnan","aria-label":"LinkedIn",target:"_blank",rel:"noopener noreferrer",children:(0,tn.jsx)(Sn,{className:"icons",width:"23px",height:"23px"})}),(0,tn.jsx)("a",{href:"https://letterboxd.com/ayakashi7v/","aria-label":"Letterboxd",target:"_blank",rel:"noopener noreferrer",children:(0,tn.jsx)(In,{className:"letterboxd-icons",width:"20px",height:"20px"})}),(0,tn.jsx)("a",{href:"mailto:vighnesh7radhakrishnan@gmail.com","aria-label":"Email",children:(0,tn.jsx)(Cn,{width:"23px",height:"23px"})})]})]})]})});var Fn,Mn=n(950),An=n.t(Mn,2);function Un(){return Un=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Un.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(Fn||(Fn={}));const Hn="popstate";function $n(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function Wn(e,t){return{usr:e.state,key:e.key,idx:t}}function Bn(e,t,n,r){return void 0===n&&(n=null),Un({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?Kn(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function Vn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Qn(e,t,n,r){void 0===r&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,i=a.history,l=Fn.Pop,s=null,u=c();function c(){return(i.state||{idx:null}).idx}function d(){l=Fn.Pop;let e=c(),t=null==e?null:e-u;u=e,s&&s({action:l,location:p.location,delta:t})}function f(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:Vn(e);return n=n.replace(/ $/,"%20"),$n(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==u&&(u=0,i.replaceState(Un({},i.state,{idx:u}),""));let p={get action(){return l},get location(){return e(a,i)},listen(e){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(Hn,d),s=e,()=>{a.removeEventListener(Hn,d),s=null}},createHref:e=>t(a,e),createURL:f,encodeLocation(e){let t=f(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){l=Fn.Push;let r=Bn(p.location,e,t);n&&n(r,e),u=c()+1;let d=Wn(r,u),f=p.createHref(r);try{i.pushState(d,"",f)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;a.location.assign(f)}o&&s&&s({action:l,location:p.location,delta:1})},replace:function(e,t){l=Fn.Replace;let r=Bn(p.location,e,t);n&&n(r,e),u=c();let a=Wn(r,u),d=p.createHref(r);i.replaceState(a,"",d),o&&s&&s({action:l,location:p.location,delta:0})},go:e=>i.go(e)};return p}var Yn;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(Yn||(Yn={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function qn(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}Error;const Gn=["post","put","patch","delete"],Xn=(new Set(Gn),["get",...Gn]);new Set(Xn),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function Zn(){return Zn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zn.apply(this,arguments)}const Jn=e.createContext(null);const er=e.createContext(null);function tr(){return null!=e.useContext(er)}e.Component;t.startTransition;function nr(t){let{basename:n="/",children:r=null,location:a,navigationType:o=Fn.Pop,navigator:i,static:l=!1,future:s}=t;tr()&&$n(!1);let u=n.replace(/^\/*/,"/"),c=e.useMemo((()=>({basename:u,navigator:i,static:l,future:Zn({v7_relativeSplatPath:!1},s)})),[u,s,i,l]);"string"===typeof a&&(a=Kn(a));let{pathname:d="/",search:f="",hash:p="",state:h=null,key:m="default"}=a,g=e.useMemo((()=>{let e=qn(d,u);return null==e?null:{location:{pathname:e,search:f,hash:p,state:h,key:m},navigationType:o}}),[u,d,f,p,h,m,o]);return null==g?null:e.createElement(Jn.Provider,{value:c},e.createElement(er.Provider,{children:r,value:g}))}new Promise((()=>{}));e.Component;new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(ur){}new Map;const rr=t.startTransition;An.flushSync,t.useId;function ar(t){let{basename:n,children:r,future:a,window:o}=t,i=e.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:o,v5Compat:!0})&&(l={}),Qn((function(e,t){let{pathname:n,search:r,hash:a}=e.location;return Bn("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:Vn(t)}),null,l)));let s=i.current,[u,c]=e.useState({action:s.action,location:s.location}),{v7_startTransition:d}=a||{},f=e.useCallback((e=>{d&&rr?rr((()=>c(e))):c(e)}),[c,d]);return e.useLayoutEffect((()=>s.listen(f)),[s,f]),e.createElement(nr,{basename:n,children:r,location:u.location,navigationType:u.action,navigator:s,future:a})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var or,ir;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(or||(or={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(ir||(ir={}));const lr=()=>(0,tn.jsxs)(tn.Fragment,{children:[(0,tn.jsx)(Dn,{}),(0,tn.jsx)(Kt,{}),(0,tn.jsx)(ar,{children:(0,tn.jsxs)("div",{children:[(0,tn.jsx)(nn,{}),(0,tn.jsx)(an,{}),(0,tn.jsx)(ln,{}),(0,tn.jsx)(vn,{}),(0,tn.jsx)(yn,{})]})})]}),sr=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:o,getTTFB:i}=t;n(e),r(e),a(e),o(e),i(e)}))};r.createRoot(document.getElementById("root")).render((0,tn.jsx)(e.StrictMode,{children:(0,tn.jsx)(lr,{})})),sr(console.log)})()})();
//# sourceMappingURL=main.c744e920.js.map