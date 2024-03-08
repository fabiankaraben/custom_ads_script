(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){A.e0(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else{s=a[b]}}finally{if(s===r){a[b]=null}a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.e2(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.bD(b)
return new t(c,this)}:function(){if(t===null)t=A.bD(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.bD(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
bI(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bF(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.bG==null){A.dQ()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.d(A.c_("Return interceptor for "+A.m(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.bf
if(p==null)p=$.bf=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.dW(a)
if(q!=null)return q
if(typeof a=="function")return B.p
t=Object.getPrototypeOf(a)
if(t==null)return B.e
if(t===Object.prototype)return B.e
if(typeof r=="function"){p=$.bf
if(p==null)p=$.bf=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.b,enumerable:false,writable:true,configurable:true})
return B.b}return B.b},
bS(a,b){a.fixed$length=Array
return a},
T(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.Z.prototype
return J.as.prototype}if(typeof a=="string")return J.N.prototype
if(a==null)return J.a_.prototype
if(typeof a=="boolean")return J.ar.prototype
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.C.prototype
if(typeof a=="symbol")return J.a1.prototype
if(typeof a=="bigint")return J.a0.prototype
return a}if(a instanceof A.h)return a
return J.bF(a)},
ct(a){if(typeof a=="string")return J.N.prototype
if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.C.prototype
if(typeof a=="symbol")return J.a1.prototype
if(typeof a=="bigint")return J.a0.prototype
return a}if(a instanceof A.h)return a
return J.bF(a)},
bE(a){if(a==null)return a
if(Array.isArray(a))return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.C.prototype
if(typeof a=="symbol")return J.a1.prototype
if(typeof a=="bigint")return J.a0.prototype
return a}if(a instanceof A.h)return a
return J.bF(a)},
cA(a,b){return J.bE(a).A(a,b)},
bK(a){return J.T(a).gn(a)},
cB(a){return J.bE(a).gq(a)},
bt(a){return J.ct(a).gj(a)},
cC(a){return J.T(a).gk(a)},
cD(a,b,c){return J.bE(a).B(a,b,c)},
am(a){return J.T(a).h(a)},
aq:function aq(){},
ar:function ar(){},
a_:function a_(){},
k:function k(){},
D:function D(){},
aE:function aE(){},
a8:function a8(){},
C:function C(){},
a0:function a0(){},
a1:function a1(){},
q:function q(a){this.$ti=a},
b_:function b_(a){this.$ti=a},
X:function X(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
at:function at(){},
Z:function Z(){},
as:function as(){},
N:function N(){}},A={bw:function bw(){},
bH(a){var t,s
for(t=$.t.length,s=0;s<t;++s)if(a===$.t[s])return!0
return!1},
cS(a,b,c,d){if(u.Q.b(a))return new A.Y(a,b,c.i("@<0>").t(d).i("Y<1,2>"))
return new A.I(a,b,c.i("@<0>").t(d).i("I<1,2>"))},
b0:function b0(a){this.a=a},
c:function c(){},
x:function x(){},
H:function H(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
I:function I(a,b,c){this.a=a
this.b=b
this.$ti=c},
Y:function Y(a,b,c){this.a=a
this.b=b
this.$ti=c},
a2:function a2(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
y:function y(a,b,c){this.a=a
this.b=b
this.$ti=c},
n:function n(){},
cy(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
ei(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
m(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.am(a)
return t},
aF(a){var t,s=$.bT
if(s==null)s=$.bT=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
b2(a){return A.cT(a)},
cT(a){var t,s,r,q
if(a instanceof A.h)return A.p(A.U(a),null)
t=J.T(a)
if(t===B.m||t===B.q||u.o.b(a)){s=B.c(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.p(A.U(a),null)},
cY(a){if(typeof a=="number"||A.bj(a))return J.am(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.G)return a.h(0)
return"Instance of '"+A.b2(a)+"'"},
Q(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
cX(a){var t=A.Q(a).getFullYear()+0
return t},
cW(a){var t=A.Q(a).getMonth()+1
return t},
cU(a){var t=A.Q(a).getDate()+0
return t},
bU(a){var t=A.Q(a).getHours()+0
return t},
bV(a){var t=A.Q(a).getMinutes()+0
return t},
bW(a){var t=A.Q(a).getSeconds()+0
return t},
cV(a){var t=A.Q(a).getMilliseconds()+0
return t},
v(a,b){if(a==null)J.bt(a)
throw A.d(A.cr(a,b))},
cr(a,b){var t,s="index"
if(!A.cl(b))return new A.W(!0,b,s,null)
t=J.bt(a)
if(b<0||b>=t)return A.cO(b,t,a,s)
return new A.aG(null,null,!0,b,s,"Value not in range")},
d(a){return A.cv(new Error(),a)},
cv(a,b){var t
if(b==null)b=new A.b6()
a.dartException=b
t=A.e3
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:t})
a.name=""}else a.toString=t
return a},
e3(){return J.am(this.dartException)},
bs(a){throw A.d(a)},
e1(a,b){throw A.cv(b,a)},
e_(a){throw A.d(A.aQ(a))},
bJ(a){if(a==null)return J.bK(a)
if(typeof a=="object")return A.aF(a)
return J.bK(a)},
cL(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.b4().constructor.prototype):Object.create(new A.ao(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.bP(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.cH(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.bP(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
cH(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.cF)}throw A.d("Error in functionType of tearoff")},
cI(a,b,c,d){var t=A.bO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
bP(a,b,c,d){if(c)return A.cK(a,b,d)
return A.cI(b.length,d,a,b)},
cJ(a,b,c,d){var t=A.bO,s=A.cG
switch(b?-1:a){case 0:throw A.d(new A.b3("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
cK(a,b,c){var t,s
if($.bM==null)$.bM=A.bL("interceptor")
if($.bN==null)$.bN=A.bL("receiver")
t=b.length
s=A.cJ(t,c,a,b)
return s},
bD(a){return A.cL(a)},
cF(a,b){return A.bh(v.typeUniverse,A.U(a.a),b)},
bO(a){return a.a},
cG(a){return a.b},
bL(a){var t,s,r,q=new A.ao("receiver","interceptor"),p=J.bS(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.d(A.cE("Field name "+a+" not found."))},
e0(a){throw A.d(new A.bd(a))},
dM(a){return v.getIsolateTag(a)},
dW(a){var t,s,r,q,p,o=A.cg($.cu.$1(a)),n=$.bl[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bp[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.dm($.cp.$2(a,o))
if(r!=null){n=$.bl[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bp[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.br(t)
$.bl[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.bp[o]=t
return t}if(q==="-"){p=A.br(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.cw(a,t)
if(q==="*")throw A.d(A.c_(o))
if(v.leafTags[o]===true){p=A.br(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.cw(a,t)},
cw(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.bI(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
br(a){return J.bI(a,!1,null,!!a.$ir)},
dY(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.br(t)
else return J.bI(t,c,null,null)},
dQ(){if(!0===$.bG)return
$.bG=!0
A.dR()},
dR(){var t,s,r,q,p,o,n,m
$.bl=Object.create(null)
$.bp=Object.create(null)
A.dP()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.cx.$1(p)
if(o!=null){n=A.dY(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
dP(){var t,s,r,q,p,o,n=B.f()
n=A.S(B.h,A.S(B.i,A.S(B.d,A.S(B.d,A.S(B.j,A.S(B.k,A.S(B.l(B.c),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.cu=new A.bm(q)
$.cp=new A.bn(p)
$.cx=new A.bo(o)},
S(a,b){return a(b)||b},
dL(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
G:function G(){},
aO:function aO(){},
b5:function b5(){},
b4:function b4(){},
ao:function ao(a,b){this.a=a
this.b=b},
bd:function bd(a){this.a=a},
b3:function b3(a){this.a=a},
bm:function bm(a){this.a=a},
bn:function bn(a){this.a=a},
bo:function bo(a){this.a=a},
K(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.cr(b,a))},
au:function au(){},
a5:function a5(){},
av:function av(){},
P:function P(){},
a3:function a3(){},
a4:function a4(){},
aw:function aw(){},
ax:function ax(){},
ay:function ay(){},
az:function az(){},
aA:function aA(){},
aB:function aB(){},
aC:function aC(){},
a6:function a6(){},
aD:function aD(){},
ad:function ad(){},
ae:function ae(){},
af:function af(){},
ag:function ag(){},
bX(a,b){var t=b.c
return t==null?b.c=A.bA(a,b.x,!0):t},
bx(a,b){var t=b.c
return t==null?b.c=A.ai(a,"bQ",[b.x]):t},
bY(a){var t=a.w
if(t===6||t===7||t===8)return A.bY(a.x)
return t===12||t===13},
d_(a){return a.as},
cs(a){return A.aK(v.typeUniverse,a,!1)},
F(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.F(a0,t,a2,a3)
if(s===t)return a1
return A.cc(a0,s,!0)
case 7:t=a1.x
s=A.F(a0,t,a2,a3)
if(s===t)return a1
return A.bA(a0,s,!0)
case 8:t=a1.x
s=A.F(a0,t,a2,a3)
if(s===t)return a1
return A.ca(a0,s,!0)
case 9:r=a1.y
q=A.R(a0,r,a2,a3)
if(q===r)return a1
return A.ai(a0,a1.x,q)
case 10:p=a1.x
o=A.F(a0,p,a2,a3)
n=a1.y
m=A.R(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.by(a0,o,m)
case 11:l=a1.x
k=a1.y
j=A.R(a0,k,a2,a3)
if(j===k)return a1
return A.cb(a0,l,j)
case 12:i=a1.x
h=A.F(a0,i,a2,a3)
g=a1.y
f=A.dI(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.c9(a0,h,f)
case 13:e=a1.y
a3+=e.length
d=A.R(a0,e,a2,a3)
p=a1.x
o=A.F(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.bz(a0,o,d,!0)
case 14:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.d(A.an("Attempted to substitute unexpected RTI kind "+a))}},
R(a,b,c,d){var t,s,r,q,p=b.length,o=A.bi(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.F(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
dJ(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bi(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.F(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
dI(a,b,c,d){var t,s=b.a,r=A.R(a,s,c,d),q=b.b,p=A.R(a,q,c,d),o=b.c,n=A.dJ(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.aI()
t.a=r
t.b=p
t.c=n
return t},
bk(a,b){a[v.arrayRti]=b
return a},
cq(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.dO(t)
return a.$S()}return null},
dS(a,b){var t
if(A.bY(b))if(a instanceof A.G){t=A.cq(a)
if(t!=null)return t}return A.U(a)},
U(a){if(a instanceof A.h)return A.aL(a)
if(Array.isArray(a))return A.ak(a)
return A.bB(J.T(a))},
ak(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
aL(a){var t=a.$ti
return t!=null?t:A.bB(a)},
bB(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.dv(a,t)},
dv(a,b){var t=a instanceof A.G?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.dh(v.typeUniverse,t.name)
b.$ccache=s
return s},
dO(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.aK(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
dN(a){return A.L(A.aL(a))},
dH(a){var t=a instanceof A.G?A.cq(a):null
if(t!=null)return t
if(u.R.b(a))return J.cC(a).a
if(Array.isArray(a))return A.ak(a)
return A.U(a)},
L(a){var t=a.r
return t==null?a.r=A.ch(a):t},
ch(a){var t,s,r=a.as,q=r.replace(/\*/g,"")
if(q===r)return a.r=new A.bg(a)
t=A.aK(v.typeUniverse,q,!0)
s=t.r
return s==null?t.r=A.ch(t):s},
w(a){return A.L(A.aK(v.typeUniverse,a,!1))},
du(a){var t,s,r,q,p,o,n=this
if(n===u.K)return A.A(n,a,A.dA)
if(!A.B(n))if(!(n===u._))t=!1
else t=!0
else t=!0
if(t)return A.A(n,a,A.dE)
t=n.w
if(t===7)return A.A(n,a,A.ds)
if(t===1)return A.A(n,a,A.cm)
s=t===6?n.x:n
r=s.w
if(r===8)return A.A(n,a,A.dw)
if(s===u.S)q=A.cl
else if(s===u.i||s===u.H)q=A.dz
else if(s===u.N)q=A.dC
else q=s===u.y?A.bj:null
if(q!=null)return A.A(n,a,q)
if(r===9){p=s.x
if(s.y.every(A.dT)){n.f="$i"+p
if(p==="j")return A.A(n,a,A.dy)
return A.A(n,a,A.dD)}}else if(r===11){o=A.dL(s.x,s.y)
return A.A(n,a,o==null?A.cm:o)}return A.A(n,a,A.dq)},
A(a,b,c){a.b=c
return a.b(b)},
dt(a){var t,s=this,r=A.dp
if(!A.B(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.dn
else if(s===u.K)r=A.dl
else{t=A.al(s)
if(t)r=A.dr}s.a=r
return s.a(a)},
aM(a){var t,s=a.w
if(!A.B(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.aM(a.x)))t=s===8&&A.aM(a.x)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
dq(a){var t=this
if(a==null)return A.aM(t)
return A.dU(v.typeUniverse,A.dS(a,t),t)},
ds(a){if(a==null)return!0
return this.x.b(a)},
dD(a){var t,s=this
if(a==null)return A.aM(s)
t=s.f
if(a instanceof A.h)return!!a[t]
return!!J.T(a)[t]},
dy(a){var t,s=this
if(a==null)return A.aM(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.h)return!!a[t]
return!!J.T(a)[t]},
dp(a){var t=this
if(a==null){if(A.al(t))return a}else if(t.b(a))return a
A.ci(a,t)},
dr(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.ci(a,t)},
ci(a,b){throw A.d(A.d7(A.c1(a,A.p(b,null))))},
c1(a,b){return A.aT(a)+": type '"+A.p(A.dH(a),null)+"' is not a subtype of type '"+b+"'"},
d7(a){return new A.aJ("TypeError: "+a)},
o(a,b){return new A.aJ("TypeError: "+A.c1(a,b))},
dw(a){var t=this,s=t.w===6?t.x:t
return s.x.b(a)||A.bx(v.typeUniverse,s).b(a)},
dA(a){return a!=null},
dl(a){if(a!=null)return a
throw A.d(A.o(a,"Object"))},
dE(a){return!0},
dn(a){return a},
cm(a){return!1},
bj(a){return!0===a||!1===a},
e8(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.o(a,"bool"))},
ea(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.o(a,"bool"))},
e9(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.o(a,"bool?"))},
eb(a){if(typeof a=="number")return a
throw A.d(A.o(a,"double"))},
ed(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.o(a,"double"))},
ec(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.o(a,"double?"))},
cl(a){return typeof a=="number"&&Math.floor(a)===a},
cf(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.o(a,"int"))},
ef(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.o(a,"int"))},
ee(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.o(a,"int?"))},
dz(a){return typeof a=="number"},
dj(a){if(typeof a=="number")return a
throw A.d(A.o(a,"num"))},
eg(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.o(a,"num"))},
dk(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.o(a,"num?"))},
dC(a){return typeof a=="string"},
cg(a){if(typeof a=="string")return a
throw A.d(A.o(a,"String"))},
eh(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.o(a,"String"))},
dm(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.o(a,"String?"))},
co(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.p(a[r],b)
return t},
dG(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.co(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.p(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
cj(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.bk([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.u(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.v(a4,k)
n=B.o.N(n+m,a4[k])
j=a5[q]
i=j.w
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.p(j,a4)}n+=">"}else{n=""
s=null}p=a3.x
h=a3.y
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.p(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.p(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.p(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.p(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
p(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6)return A.p(a.x,b)
if(m===7){t=a.x
s=A.p(t,b)
r=t.w
return(r===12||r===13?"("+s+")":s)+"?"}if(m===8)return"FutureOr<"+A.p(a.x,b)+">"
if(m===9){q=A.dK(a.x)
p=a.y
return p.length>0?q+("<"+A.co(p,b)+">"):q}if(m===11)return A.dG(a,b)
if(m===12)return A.cj(a,b,null)
if(m===13)return A.cj(a.x,b,a.y)
if(m===14){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.v(b,o)
return b[o]}return"?"},
dK(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
di(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
dh(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.aK(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aj(a,5,"#")
r=A.bi(t)
for(q=0;q<t;++q)r[q]=s
p=A.ai(a,b,r)
o[b]=p
return p}else return n},
df(a,b){return A.cd(a.tR,b)},
de(a,b){return A.cd(a.eT,b)},
aK(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.c7(A.c5(a,null,b,c))
s.set(b,t)
return t},
bh(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.c7(A.c5(a,b,c,!0))
r.set(c,s)
return s},
dg(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.by(a,b,c.w===10?c.y:[c])
q.set(t,r)
return r},
z(a,b){b.a=A.dt
b.b=A.du
return b},
aj(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.u(null,null)
t.w=b
t.as=c
s=A.z(a,t)
a.eC.set(c,s)
return s},
cc(a,b,c){var t,s=b.as+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.dc(a,b,s,c)
a.eC.set(s,t)
return t},
dc(a,b,c,d){var t,s,r
if(d){t=b.w
if(!A.B(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.u(null,null)
r.w=6
r.x=b
r.as=c
return A.z(a,r)},
bA(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.db(a,b,s,c)
a.eC.set(s,t)
return t},
db(a,b,c,d){var t,s,r,q
if(d){t=b.w
if(!A.B(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.al(b.x)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.x
if(r.w===8&&A.al(r.x))return r
else return A.bX(a,b)}}q=new A.u(null,null)
q.w=7
q.x=b
q.as=c
return A.z(a,q)},
ca(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.d9(a,b,s,c)
a.eC.set(s,t)
return t},
d9(a,b,c,d){var t,s
if(d){t=b.w
if(A.B(b)||b===u.K||b===u._)return b
else if(t===1)return A.ai(a,"bQ",[b])
else if(b===u.P||b===u.T)return u.W}s=new A.u(null,null)
s.w=8
s.x=b
s.as=c
return A.z(a,s)},
dd(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.u(null,null)
t.w=14
t.x=b
t.as=r
s=A.z(a,t)
a.eC.set(r,s)
return s},
ah(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
d8(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
ai(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.ah(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.u(null,null)
s.w=9
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.z(a,s)
a.eC.set(q,r)
return r},
by(a,b,c){var t,s,r,q,p,o
if(b.w===10){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.ah(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.u(null,null)
p.w=10
p.x=t
p.y=s
p.as=r
o=A.z(a,p)
a.eC.set(r,o)
return o},
cb(a,b,c){var t,s,r="+"+(b+"("+A.ah(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.u(null,null)
t.w=11
t.x=b
t.y=c
t.as=r
s=A.z(a,t)
a.eC.set(r,s)
return s},
c9(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.ah(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.ah(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.d8(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.u(null,null)
q.w=12
q.x=b
q.y=c
q.as=s
p=A.z(a,q)
a.eC.set(s,p)
return p},
bz(a,b,c,d){var t,s=b.as+("<"+A.ah(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.da(a,b,c,s,d)
a.eC.set(s,t)
return t},
da(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bi(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.F(a,b,s,0)
n=A.R(a,c,s,0)
return A.bz(a,o,n,c!==n)}}m=new A.u(null,null)
m.w=13
m.x=b
m.y=c
m.as=d
return A.z(a,m)},
c5(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
c7(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.d2(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.c6(a,s,m,l,!1)
else if(r===46)s=A.c6(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.E(a.u,a.e,l.pop()))
break
case 94:l.push(A.dd(a.u,l.pop()))
break
case 35:l.push(A.aj(a.u,5,"#"))
break
case 64:l.push(A.aj(a.u,2,"@"))
break
case 126:l.push(A.aj(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.d4(a,l)
break
case 38:A.d3(a,l)
break
case 42:q=a.u
l.push(A.cc(q,A.E(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.bA(q,A.E(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.ca(q,A.E(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.d1(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.c8(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.d6(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.E(a.u,a.e,n)},
d2(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
c6(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===10)p=p.x
o=A.di(t,p.x)[q]
if(o==null)A.bs('No "'+q+'" in "'+A.d_(p)+'"')
d.push(A.bh(t,p,o))}else d.push(q)
return n},
d4(a,b){var t,s=a.u,r=A.c4(a,b),q=b.pop()
if(typeof q=="string")b.push(A.ai(s,q,r))
else{t=A.E(s,a.e,q)
switch(t.w){case 12:b.push(A.bz(s,t,r,a.n))
break
default:b.push(A.by(s,t,r))
break}}},
d1(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
if(typeof m=="number")switch(m){case-1:t=b.pop()
s=o
break
case-2:s=b.pop()
t=o
break
default:b.push(m)
s=o
t=s
break}else{b.push(m)
s=o
t=s}r=A.c4(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.E(n,a.e,m)
p=new A.aI()
p.a=r
p.b=t
p.c=s
b.push(A.c9(n,q,p))
return
case-4:b.push(A.cb(n,b.pop(),r))
return
default:throw A.d(A.an("Unexpected state under `()`: "+A.m(m)))}},
d3(a,b){var t=b.pop()
if(0===t){b.push(A.aj(a.u,1,"0&"))
return}if(1===t){b.push(A.aj(a.u,4,"1&"))
return}throw A.d(A.an("Unexpected extended operation "+A.m(t)))},
c4(a,b){var t=b.splice(a.p)
A.c8(a.u,a.e,t)
a.p=b.pop()
return t},
E(a,b,c){if(typeof c=="string")return A.ai(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.d5(a,b,c)}else return c},
c8(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.E(a,b,c[t])},
d6(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.E(a,b,c[t])},
d5(a,b,c){var t,s,r=b.w
if(r===10){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==9)throw A.d(A.an("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.d(A.an("Bad index "+c+" for "+b.h(0)))},
dU(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.l(a,b,null,c,null,!1)?1:0
s.set(c,t)}if(0===t)return!1
if(1===t)return!0
return!0},
l(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.B(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.w
if(s===4)return!0
if(A.B(b))return!1
if(b.w!==1)t=!1
else t=!0
if(t)return!0
r=s===14
if(r)if(A.l(a,c[b.x],c,d,e,!1))return!0
q=d.w
t=b===u.P||b===u.T
if(t){if(q===8)return A.l(a,b,c,d.x,e,!1)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.l(a,b.x,c,d,e,!1)
if(s===6)return A.l(a,b.x,c,d,e,!1)
return s!==7}if(s===6)return A.l(a,b.x,c,d,e,!1)
if(q===6){t=A.bX(a,d)
return A.l(a,b,c,t,e,!1)}if(s===8){if(!A.l(a,b.x,c,d,e,!1))return!1
return A.l(a,A.bx(a,b),c,d,e,!1)}if(s===7){t=A.l(a,u.P,c,d,e,!1)
return t&&A.l(a,b.x,c,d,e,!1)}if(q===8){if(A.l(a,b,c,d.x,e,!1))return!0
return A.l(a,b,c,A.bx(a,d),e,!1)}if(q===7){t=A.l(a,b,c,u.P,e,!1)
return t||A.l(a,b,c,d.x,e,!1)}if(r)return!1
t=s!==12
if((!t||s===13)&&d===u.Z)return!0
p=s===11
if(p&&d===u.L)return!0
if(q===13){if(b===u.g)return!0
if(s!==13)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.l(a,k,c,j,e,!1)||!A.l(a,j,e,k,c,!1))return!1}return A.ck(a,b.x,c,d.x,e,!1)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.ck(a,b,c,d,e,!1)}if(s===9){if(q!==9)return!1
return A.dx(a,b,c,d,e,!1)}if(p&&q===11)return A.dB(a,b,c,d,e,!1)
return!1},
ck(a2,a3,a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.l(a2,a3.x,a4,a5.x,a6,!1))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.l(a2,q[i],a6,h,a4,!1))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.l(a2,q[p+i],a6,h,a4,!1))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.l(a2,l[i],a6,h,a4,!1))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.l(a2,f[b+2],a6,h,a4,!1))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
dx(a,b,c,d,e,f){var t,s,r,q,p,o=b.x,n=d.x
for(;o!==n;){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.bh(a,b,s[p])
return A.ce(a,q,null,c,d.y,e,!1)}return A.ce(a,b.y,null,c,d.y,e,!1)},
ce(a,b,c,d,e,f,g){var t,s=b.length
for(t=0;t<s;++t)if(!A.l(a,b[t],d,e[t],f,!1))return!1
return!0},
dB(a,b,c,d,e,f){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.l(a,s[t],c,r[t],e,!1))return!1
return!0},
al(a){var t,s=a.w
if(!(a===u.P||a===u.T))if(!A.B(a))if(s!==7)if(!(s===6&&A.al(a.x)))t=s===8&&A.al(a.x)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
dT(a){var t
if(!A.B(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
B(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
cd(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bi(a){return a>0?new Array(a):v.typeUniverse.sEA},
u:function u(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
aI:function aI(){this.c=this.b=this.a=null},
bg:function bg(a){this.a=a},
be:function be(){},
aJ:function aJ(a){this.a=a},
c2(a,b){var t=a[b]
return t===a?null:t},
c3(a,b,c){if(c==null)a[b]=a
else a[b]=c},
d0(){var t=Object.create(null)
A.c3(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
cR(a){var t,s={}
if(A.bH(a))return"{...}"
t=new A.aH("")
try{B.a.u($.t,a)
t.a+="{"
s.a=!0
a.M(0,new A.b1(s,t))
t.a+="}"}finally{if(0>=$.t.length)return A.v($.t,-1)
$.t.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
a9:function a9(){},
ac:function ac(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
aa:function aa(a,b){this.a=a
this.$ti=b},
ab:function ab(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
i:function i(){},
O:function O(){},
b1:function b1(a,b){this.a=a
this.b=b},
cQ(a,b,c){var t
if(a>4294967295)A.bs(A.cZ(a,0,4294967295,"length",null))
t=J.bS(A.bk(new Array(a),c.i("q<0>")),c)
return t},
bZ(a,b,c){var t=J.cB(b)
if(!t.l())return a
if(c.length===0){do a+=A.m(t.gm())
while(t.l())}else{a+=A.m(t.gm())
for(;t.l();)a=a+c+A.m(t.gm())}return a},
cM(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
cN(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ap(a){if(a>=10)return""+a
return"0"+a},
aT(a){if(typeof a=="number"||A.bj(a)||a==null)return J.am(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cY(a)},
an(a){return new A.aN(a)},
cE(a){return new A.W(!1,null,null,a)},
cZ(a,b,c,d,e){return new A.aG(b,c,!0,a,d,"Invalid value")},
cO(a,b,c,d){return new A.aW(b,!0,a,d,"Index out of range")},
c0(a){return new A.bc(a)},
c_(a){return new A.bb(a)},
aQ(a){return new A.aP(a)},
cP(a,b,c){var t,s
if(A.bH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.bk([],u.s)
B.a.u($.t,a)
try{A.dF(a,t)}finally{if(0>=$.t.length)return A.v($.t,-1)
$.t.pop()}s=A.bZ(b,u.V.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
bR(a,b,c){var t,s
if(A.bH(a))return b+"..."+c
t=new A.aH(b)
B.a.u($.t,a)
try{s=t
s.a=A.bZ(s.a,a,", ")}finally{if(0>=$.t.length)return A.v($.t,-1)
$.t.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dF(a,b){var t,s,r,q,p,o,n,m=a.gq(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.l())return
t=A.m(m.gm())
B.a.u(b,t)
l+=t.length+2;++k}if(!m.l()){if(k<=5)return
if(0>=b.length)return A.v(b,-1)
s=b.pop()
if(0>=b.length)return A.v(b,-1)
r=b.pop()}else{q=m.gm();++k
if(!m.l()){if(k<=4){B.a.u(b,A.m(q))
return}s=A.m(q)
if(0>=b.length)return A.v(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gm();++k
for(;m.l();q=p,p=o){o=m.gm();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return A.v(b,-1)
l-=b.pop().length+2;--k}B.a.u(b,"...")
return}}r=A.m(q)
s=A.m(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.v(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.a.u(b,n)
B.a.u(b,r)
B.a.u(b,s)},
aR:function aR(a,b){this.a=a
this.b=b},
aS:function aS(){},
aN:function aN(a){this.a=a},
b6:function b6(){},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aG:function aG(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aW:function aW(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bc:function bc(a){this.a=a},
bb:function bb(a){this.a=a},
aP:function aP(a){this.a=a},
b:function b(){},
a7:function a7(){},
h:function h(){},
aH:function aH(a){this.a=a},
cn(a){return a==null||A.bj(a)||typeof a=="number"||typeof a=="string"||u.U.b(a)||u.E.b(a)||u.f.b(a)||u.O.b(a)||u.D.b(a)||u.k.b(a)||u.v.b(a)||u.B.b(a)||u.q.b(a)||u.J.b(a)||u.Y.b(a)},
dV(a){if(A.cn(a))return a
return new A.bq(new A.ac(u.F)).$1(a)},
bq:function bq(a){this.a=a},
dZ(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
e2(a){A.e1(new A.b0("Field '"+a+"' has been assigned during initialization."),new Error())},
dX(){var t,s,r,q,p,o,n=self,m=u.e,l=u.G
if(l.a(m.a(n.document).head)!=null){t=m.a(m.a(n.document).createElement("link"))
t.setAttribute("rel","stylesheet")
t.setAttribute("type","text/css")
t.setAttribute("href","https://ads.esdocu.com/assets/css/custom-ads.css")
m.a(l.a(m.a(n.document).head).appendChild(t))}s=m.a(m.a(n.document).createElement("div"))
s.setAttribute("class","divAds")
r=l.a(l.a(m.a(n.document).body).querySelector("h1"))
r.toString
q=A.dV(s)
q.toString
r.append.apply(r,[q])
p=new A.aR(Date.now(),!1)
A.dZ(A.m(A.dj(l.a(m.a(n.window).visualViewport).height)))
o=l.a(m.a(n.document).querySelector("#output"))
if(o==null)o=m.a(o)
o.textContent="The time is "+A.bU(p)+":"+A.bV(p)+":"+A.bW(p)+" and your Dart web app is running!"}},B={}
var w=[A,J,B]
var $={}
A.bw.prototype={}
J.aq.prototype={
gn(a){return A.aF(a)},
h(a){return"Instance of '"+A.b2(a)+"'"},
gk(a){return A.L(A.bB(this))}}
J.ar.prototype={
h(a){return String(a)},
gn(a){return a?519018:218159},
gk(a){return A.L(u.y)},
$ie:1,
$ibC:1}
J.a_.prototype={
h(a){return"null"},
gn(a){return 0},
$ie:1}
J.k.prototype={}
J.D.prototype={
gn(a){return 0},
h(a){return String(a)}}
J.aE.prototype={}
J.a8.prototype={}
J.C.prototype={
h(a){var t=a[$.cz()]
if(t==null)return this.O(a)
return"JavaScript function for "+J.am(t)}}
J.a0.prototype={
gn(a){return 0},
h(a){return String(a)}}
J.a1.prototype={
gn(a){return 0},
h(a){return String(a)}}
J.q.prototype={
u(a,b){A.ak(a).c.a(b)
if(!!a.fixed$length)A.bs(A.c0("add"))
a.push(b)},
U(a,b){var t
A.ak(a).i("b<1>").a(b)
if(!!a.fixed$length)A.bs(A.c0("addAll"))
for(t=b.gq(b);t.l();)a.push(t.gm())},
B(a,b,c){var t=A.ak(a)
return new A.y(a,t.t(c).i("1(2)").a(b),t.i("@<1>").t(c).i("y<1,2>"))},
A(a,b){if(!(b<a.length))return A.v(a,b)
return a[b]},
h(a){return A.bR(a,"[","]")},
gq(a){return new J.X(a,a.length,A.ak(a).i("X<1>"))},
gn(a){return A.aF(a)},
gj(a){return a.length},
$ic:1,
$ib:1,
$ij:1}
J.b_.prototype={}
J.X.prototype={
gm(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.e_(r)
throw A.d(r)}t=s.c
if(t>=q){s.sK(null)
return!1}s.sK(r[t]);++s.c
return!0},
sK(a){this.d=this.$ti.i("1?").a(a)},
$iM:1}
J.at.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gn(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
T(a,b){var t
if(a>0)t=this.S(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
S(a,b){return b>31?0:a>>>b},
gk(a){return A.L(u.H)},
$if:1,
$iV:1}
J.Z.prototype={
gk(a){return A.L(u.S)},
$ie:1,
$ia:1}
J.as.prototype={
gk(a){return A.L(u.i)},
$ie:1}
J.N.prototype={
N(a,b){return a+b},
h(a){return a},
gn(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gk(a){return A.L(u.N)},
gj(a){return a.length},
$ie:1,
$iJ:1}
A.b0.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.c.prototype={}
A.x.prototype={
gq(a){return new A.H(this,this.gj(0),this.$ti.i("H<x.E>"))},
B(a,b,c){var t=this.$ti
return new A.y(this,t.t(c).i("1(x.E)").a(b),t.i("@<x.E>").t(c).i("y<1,2>"))}}
A.H.prototype={
gm(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t,s=this,r=s.a,q=J.ct(r),p=q.gj(r)
if(s.b!==p)throw A.d(A.aQ(r))
t=s.c
if(t>=p){s.sv(null)
return!1}s.sv(q.A(r,t));++s.c
return!0},
sv(a){this.d=this.$ti.i("1?").a(a)},
$iM:1}
A.I.prototype={
gq(a){var t=this.a,s=A.aL(this)
return new A.a2(t.gq(t),this.b,s.i("@<1>").t(s.y[1]).i("a2<1,2>"))},
gj(a){var t=this.a
return t.gj(t)}}
A.Y.prototype={$ic:1}
A.a2.prototype={
l(){var t=this,s=t.b
if(s.l()){t.sv(t.c.$1(s.gm()))
return!0}t.sv(null)
return!1},
gm(){var t=this.a
return t==null?this.$ti.y[1].a(t):t},
sv(a){this.a=this.$ti.i("2?").a(a)},
$iM:1}
A.y.prototype={
gj(a){return J.bt(this.a)},
A(a,b){return this.b.$1(J.cA(this.a,b))}}
A.n.prototype={}
A.G.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.cy(s==null?"unknown":s)+"'"},
gW(){return this},
$C:"$1",
$R:1,
$D:null}
A.aO.prototype={$C:"$2",$R:2}
A.b5.prototype={}
A.b4.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.cy(t)+"'"}}
A.ao.prototype={
gn(a){return(A.bJ(this.a)^A.aF(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.b2(this.a)+"'")}}
A.bd.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.b3.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bm.prototype={
$1(a){return this.a(a)},
$S:0}
A.bn.prototype={
$2(a,b){return this.a(a,b)},
$S:1}
A.bo.prototype={
$1(a){return this.a(A.cg(a))},
$S:2}
A.au.prototype={
gk(a){return B.r},
$ie:1,
$ibu:1}
A.a5.prototype={}
A.av.prototype={
gk(a){return B.t},
$ie:1,
$ibv:1}
A.P.prototype={
gj(a){return a.length},
$ir:1}
A.a3.prototype={
p(a,b){A.K(b,a,a.length)
return a[b]},
$ic:1,
$ib:1,
$ij:1}
A.a4.prototype={$ic:1,$ib:1,$ij:1}
A.aw.prototype={
gk(a){return B.u},
$ie:1,
$iaU:1}
A.ax.prototype={
gk(a){return B.v},
$ie:1,
$iaV:1}
A.ay.prototype={
gk(a){return B.w},
p(a,b){A.K(b,a,a.length)
return a[b]},
$ie:1,
$iaX:1}
A.az.prototype={
gk(a){return B.x},
p(a,b){A.K(b,a,a.length)
return a[b]},
$ie:1,
$iaY:1}
A.aA.prototype={
gk(a){return B.y},
p(a,b){A.K(b,a,a.length)
return a[b]},
$ie:1,
$iaZ:1}
A.aB.prototype={
gk(a){return B.z},
p(a,b){A.K(b,a,a.length)
return a[b]},
$ie:1,
$ib7:1}
A.aC.prototype={
gk(a){return B.A},
p(a,b){A.K(b,a,a.length)
return a[b]},
$ie:1,
$ib8:1}
A.a6.prototype={
gk(a){return B.B},
gj(a){return a.length},
p(a,b){A.K(b,a,a.length)
return a[b]},
$ie:1,
$ib9:1}
A.aD.prototype={
gk(a){return B.C},
gj(a){return a.length},
p(a,b){A.K(b,a,a.length)
return a[b]},
$ie:1,
$iba:1}
A.ad.prototype={}
A.ae.prototype={}
A.af.prototype={}
A.ag.prototype={}
A.u.prototype={
i(a){return A.bh(v.typeUniverse,this,a)},
t(a){return A.dg(v.typeUniverse,this,a)}}
A.aI.prototype={}
A.bg.prototype={
h(a){return A.p(this.a,null)}}
A.be.prototype={
h(a){return this.a}}
A.aJ.prototype={}
A.a9.prototype={
gj(a){return this.a},
gG(){return new A.aa(this,this.$ti.i("aa<1>"))},
V(a){var t,s
if(typeof a=="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.P(a)},
P(a){var t=this.d
if(t==null)return!1
return this.E(this.L(t,a),a)>=0},
p(a,b){var t,s,r
if(typeof b=="string"&&b!=="__proto__"){t=this.b
s=t==null?null:A.c2(t,b)
return s}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
s=r==null?null:A.c2(r,b)
return s}else return this.R(b)},
R(a){var t,s,r=this.d
if(r==null)return null
t=this.L(r,a)
s=this.E(t,a)
return s<0?null:t[s+1]},
H(a,b,c){var t,s,r,q,p=this,o=p.$ti
o.c.a(b)
o.y[1].a(c)
t=p.d
if(t==null)t=p.d=A.d0()
s=A.bJ(b)&1073741823
r=t[s]
if(r==null){A.c3(t,s,[b,c]);++p.a
p.e=null}else{q=p.E(r,b)
if(q>=0)r[q+1]=c
else{r.push(b,c);++p.a
p.e=null}}},
M(a,b){var t,s,r,q,p,o,n=this,m=n.$ti
m.i("~(1,2)").a(b)
t=n.J()
for(s=t.length,r=m.c,m=m.y[1],q=0;q<s;++q){p=t[q]
r.a(p)
o=n.p(0,p)
b.$2(p,o==null?m.a(o):o)
if(t!==n.e)throw A.d(A.aQ(n))}},
J(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
i=A.cQ(j.a,null,u.z)
t=j.b
if(t!=null){s=Object.getOwnPropertyNames(t)
r=s.length
for(q=0,p=0;p<r;++p){i[q]=s[p];++q}}else q=0
o=j.c
if(o!=null){s=Object.getOwnPropertyNames(o)
r=s.length
for(p=0;p<r;++p){i[q]=+s[p];++q}}n=j.d
if(n!=null){s=Object.getOwnPropertyNames(n)
r=s.length
for(p=0;p<r;++p){m=n[s[p]]
l=m.length
for(k=0;k<l;k+=2){i[q]=m[k];++q}}}return j.e=i},
L(a,b){return a[A.bJ(b)&1073741823]}}
A.ac.prototype={
E(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2){r=a[s]
if(r==null?b==null:r===b)return s}return-1}}
A.aa.prototype={
gj(a){return this.a.a},
gq(a){var t=this.a
return new A.ab(t,t.J(),this.$ti.i("ab<1>"))}}
A.ab.prototype={
gm(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw A.d(A.aQ(q))
else if(r>=s.length){t.sI(null)
return!1}else{t.sI(s[r])
t.c=r+1
return!0}},
sI(a){this.d=this.$ti.i("1?").a(a)},
$iM:1}
A.i.prototype={
gq(a){return new A.H(a,this.gj(a),A.U(a).i("H<i.E>"))},
A(a,b){return this.p(a,b)},
B(a,b,c){var t=A.U(a)
return new A.y(a,t.t(c).i("1(i.E)").a(b),t.i("@<i.E>").t(c).i("y<1,2>"))},
h(a){return A.bR(a,"[","]")}}
A.O.prototype={
M(a,b){var t,s,r,q=A.aL(this)
q.i("~(1,2)").a(b)
for(t=this.gG(),t=t.gq(t),q=q.y[1];t.l();){s=t.gm()
r=this.p(0,s)
b.$2(s,r==null?q.a(r):r)}},
gj(a){var t=this.gG()
return t.gj(t)},
h(a){return A.cR(this)}}
A.b1.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.m(a)
s.a=t+": "
s.a+=A.m(b)},
$S:3}
A.aR.prototype={
gn(a){var t=this.a
return(t^B.n.T(t,30))&1073741823},
h(a){var t=this,s=A.cM(A.cX(t)),r=A.ap(A.cW(t)),q=A.ap(A.cU(t)),p=A.ap(A.bU(t)),o=A.ap(A.bV(t)),n=A.ap(A.bW(t)),m=A.cN(A.cV(t))
return s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m}}
A.aS.prototype={}
A.aN.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.aT(t)
return"Assertion failed"}}
A.b6.prototype={}
A.W.prototype={
gD(){return"Invalid argument"+(!this.a?"(s)":"")},
gC(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gD()+r+p
if(!t.a)return o
return o+t.gC()+": "+A.aT(t.gF())},
gF(){return this.b}}
A.aG.prototype={
gF(){return A.dk(this.b)},
gD(){return"RangeError"},
gC(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.m(r):""
else if(r==null)t=": Not greater than or equal to "+A.m(s)
else if(r>s)t=": Not in inclusive range "+A.m(s)+".."+A.m(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.m(s)
return t}}
A.aW.prototype={
gF(){return A.cf(this.b)},
gD(){return"RangeError"},
gC(){if(A.cf(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gj(a){return this.f}}
A.bc.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bb.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aP.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.aT(t)+"."}}
A.b.prototype={
B(a,b,c){var t=A.aL(this)
return A.cS(this,t.t(c).i("1(b.E)").a(b),t.i("b.E"),c)},
gj(a){var t,s=this.gq(this)
for(t=0;s.l();)++t
return t},
h(a){return A.cP(this,"(",")")}}
A.a7.prototype={
gn(a){return A.h.prototype.gn.call(this,0)},
h(a){return"null"}}
A.h.prototype={$ih:1,
gn(a){return A.aF(this)},
h(a){return"Instance of '"+A.b2(this)+"'"},
gk(a){return A.dN(this)},
toString(){return this.h(this)}}
A.aH.prototype={
gj(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.bq.prototype={
$1(a){var t,s,r,q
if(A.cn(a))return a
t=this.a
if(t.V(a))return t.p(0,a)
if(a instanceof A.O){s={}
t.H(0,a,s)
for(t=a.gG(),t=t.gq(t);t.l();){r=t.gm()
s[r]=this.$1(a.p(0,r))}return s}else if(u.x.b(a)){q=[]
t.H(0,a,q)
B.a.U(q,J.cD(a,this,u.z))
return q}else return a},
$S:4};(function aliases(){var t=J.D.prototype
t.O=t.h})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.h,null)
r(A.h,[A.bw,J.aq,J.X,A.aS,A.b,A.H,A.a2,A.n,A.G,A.u,A.aI,A.bg,A.O,A.ab,A.i,A.aR,A.a7,A.aH])
r(J.aq,[J.ar,J.a_,J.k,J.a0,J.a1,J.at,J.N])
r(J.k,[J.D,J.q,A.au,A.a5])
r(J.D,[J.aE,J.a8,J.C])
s(J.b_,J.q)
r(J.at,[J.Z,J.as])
r(A.aS,[A.b0,A.bd,A.b3,A.be,A.aN,A.b6,A.W,A.bc,A.bb,A.aP])
r(A.b,[A.c,A.I])
r(A.c,[A.x,A.aa])
s(A.Y,A.I)
s(A.y,A.x)
r(A.G,[A.aO,A.b5,A.bm,A.bo,A.bq])
r(A.b5,[A.b4,A.ao])
r(A.aO,[A.bn,A.b1])
r(A.a5,[A.av,A.P])
r(A.P,[A.ad,A.af])
s(A.ae,A.ad)
s(A.a3,A.ae)
s(A.ag,A.af)
s(A.a4,A.ag)
r(A.a3,[A.aw,A.ax])
r(A.a4,[A.ay,A.az,A.aA,A.aB,A.aC,A.a6,A.aD])
s(A.aJ,A.be)
s(A.a9,A.O)
s(A.ac,A.a9)
r(A.W,[A.aG,A.aW])
t(A.ad,A.i)
t(A.ae,A.n)
t(A.af,A.i)
t(A.ag,A.n)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",f:"double",V:"num",J:"String",bC:"bool",a7:"Null",j:"List",h:"Object",e6:"Map"},mangledNames:{},types:["@(@)","@(@,J)","@(J)","~(h?,h?)","h?(h?)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.df(v.typeUniverse,JSON.parse('{"aE":"D","a8":"D","C":"D","ar":{"bC":[],"e":[]},"a_":{"e":[]},"D":{"k":[]},"q":{"j":["1"],"k":[],"c":["1"],"b":["1"]},"b_":{"q":["1"],"j":["1"],"k":[],"c":["1"],"b":["1"]},"X":{"M":["1"]},"at":{"f":[],"V":[]},"Z":{"f":[],"a":[],"V":[],"e":[]},"as":{"f":[],"V":[],"e":[]},"N":{"J":[],"e":[]},"c":{"b":["1"]},"x":{"c":["1"],"b":["1"]},"H":{"M":["1"]},"I":{"b":["2"],"b.E":"2"},"Y":{"I":["1","2"],"c":["2"],"b":["2"],"b.E":"2"},"a2":{"M":["2"]},"y":{"x":["2"],"c":["2"],"b":["2"],"b.E":"2","x.E":"2"},"au":{"k":[],"bu":[],"e":[]},"a5":{"k":[]},"av":{"k":[],"bv":[],"e":[]},"P":{"r":["1"],"k":[]},"a3":{"i":["f"],"j":["f"],"r":["f"],"k":[],"c":["f"],"b":["f"],"n":["f"]},"a4":{"i":["a"],"j":["a"],"r":["a"],"k":[],"c":["a"],"b":["a"],"n":["a"]},"aw":{"i":["f"],"aU":[],"j":["f"],"r":["f"],"k":[],"c":["f"],"b":["f"],"n":["f"],"e":[],"i.E":"f"},"ax":{"i":["f"],"aV":[],"j":["f"],"r":["f"],"k":[],"c":["f"],"b":["f"],"n":["f"],"e":[],"i.E":"f"},"ay":{"i":["a"],"aX":[],"j":["a"],"r":["a"],"k":[],"c":["a"],"b":["a"],"n":["a"],"e":[],"i.E":"a"},"az":{"i":["a"],"aY":[],"j":["a"],"r":["a"],"k":[],"c":["a"],"b":["a"],"n":["a"],"e":[],"i.E":"a"},"aA":{"i":["a"],"aZ":[],"j":["a"],"r":["a"],"k":[],"c":["a"],"b":["a"],"n":["a"],"e":[],"i.E":"a"},"aB":{"i":["a"],"b7":[],"j":["a"],"r":["a"],"k":[],"c":["a"],"b":["a"],"n":["a"],"e":[],"i.E":"a"},"aC":{"i":["a"],"b8":[],"j":["a"],"r":["a"],"k":[],"c":["a"],"b":["a"],"n":["a"],"e":[],"i.E":"a"},"a6":{"i":["a"],"b9":[],"j":["a"],"r":["a"],"k":[],"c":["a"],"b":["a"],"n":["a"],"e":[],"i.E":"a"},"aD":{"i":["a"],"ba":[],"j":["a"],"r":["a"],"k":[],"c":["a"],"b":["a"],"n":["a"],"e":[],"i.E":"a"},"a9":{"O":["1","2"]},"ac":{"a9":["1","2"],"O":["1","2"]},"aa":{"c":["1"],"b":["1"],"b.E":"1"},"ab":{"M":["1"]},"f":{"V":[]},"a":{"V":[]},"aZ":{"j":["a"],"c":["a"],"b":["a"]},"ba":{"j":["a"],"c":["a"],"b":["a"]},"b9":{"j":["a"],"c":["a"],"b":["a"]},"aX":{"j":["a"],"c":["a"],"b":["a"]},"b7":{"j":["a"],"c":["a"],"b":["a"]},"aY":{"j":["a"],"c":["a"],"b":["a"]},"b8":{"j":["a"],"c":["a"],"b":["a"]},"aU":{"j":["f"],"c":["f"],"b":["f"]},"aV":{"j":["f"],"c":["f"],"b":["f"]}}'))
A.de(v.typeUniverse,JSON.parse('{"c":1,"P":1}'))
var u=(function rtii(){var t=A.cs
return{J:t("bu"),Y:t("bv"),Q:t("c<@>"),B:t("aU"),q:t("aV"),Z:t("e5"),O:t("aX"),k:t("aY"),U:t("aZ"),V:t("b<@>"),x:t("b<h?>"),s:t("q<J>"),b:t("q<@>"),T:t("a_"),g:t("C"),p:t("r<@>"),e:t("k"),P:t("a7"),K:t("h"),L:t("e7"),N:t("J"),R:t("e"),D:t("b7"),v:t("b8"),f:t("b9"),E:t("ba"),o:t("a8"),F:t("ac<h?,h?>"),y:t("bC"),i:t("f"),z:t("@"),S:t("a"),A:t("0&*"),_:t("h*"),W:t("bQ<a7>?"),G:t("k?"),X:t("h?"),H:t("V")}})();(function constants(){B.m=J.aq.prototype
B.a=J.q.prototype
B.n=J.Z.prototype
B.o=J.N.prototype
B.p=J.C.prototype
B.q=J.k.prototype
B.e=J.aE.prototype
B.b=J.a8.prototype
B.c=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.f=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.l=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.h=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.k=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.j=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.i=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.d=function(hooks) { return hooks; }

B.r=A.w("bu")
B.t=A.w("bv")
B.u=A.w("aU")
B.v=A.w("aV")
B.w=A.w("aX")
B.x=A.w("aY")
B.y=A.w("aZ")
B.z=A.w("b7")
B.A=A.w("b8")
B.B=A.w("b9")
B.C=A.w("ba")})();(function staticFields(){$.bf=null
$.t=A.bk([],A.cs("q<h>"))
$.bT=null
$.bN=null
$.bM=null
$.cu=null
$.cp=null
$.cx=null
$.bl=null
$.bp=null
$.bG=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"e4","cz",()=>A.dM("_$dart_dartClosure"))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.au,ArrayBufferView:A.a5,DataView:A.av,Float32Array:A.aw,Float64Array:A.ax,Int16Array:A.ay,Int32Array:A.az,Int8Array:A.aA,Uint16Array:A.aB,Uint32Array:A.aC,Uint8ClampedArray:A.a6,CanvasPixelArray:A.a6,Uint8Array:A.aD})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.P.$nativeSuperclassTag="ArrayBufferView"
A.ad.$nativeSuperclassTag="ArrayBufferView"
A.ae.$nativeSuperclassTag="ArrayBufferView"
A.a3.$nativeSuperclassTag="ArrayBufferView"
A.af.$nativeSuperclassTag="ArrayBufferView"
A.ag.$nativeSuperclassTag="ArrayBufferView"
A.a4.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$1$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.dX
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=main.dart.js.map
