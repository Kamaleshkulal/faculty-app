(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6879],{31932:function(e,t,r){"use strict";var i=r(10954),o=r(89823);let n=["src","srcSet","sizes","height","width","decoding","className","style","fetchPriority","placeholder","loading","unoptimized","fill","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","sizesInput","onLoad","onError"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){o(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return S}});let a=r(75336),c=r(10865),u=r(651),d=c._(r(92379)),f=a._(r(95295)),p=a._(r(91058)),g=r(30114),h=r(37322),m=r(29957);r(30940);let b=r(45770),y=a._(r(42517)),v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function w(e,t,r,i,o,n,s){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current(l(l({},t),{},{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}}))}function j(e){let[t,r]=d.version.split(".",2),i=parseInt(t,10),o=parseInt(r,10);return i>18||18===i&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let O=(0,d.forwardRef)((e,t)=>{let{src:r,srcSet:o,sizes:s,height:a,width:c,decoding:f,className:p,style:g,fetchPriority:h,placeholder:m,loading:b,unoptimized:y,fill:v,onLoadRef:O,onLoadingCompleteRef:P,setBlurComplete:S,setShowAltText:z,sizesInput:_,onLoad:x,onError:C}=e,E=i(e,n);return(0,u.jsx)("img",l(l(l({},E),j(h)),{},{loading:b,width:c,height:a,decoding:f,"data-nimg":v?"fill":"1",className:p,style:g,sizes:s,srcSet:o,src:r,ref:(0,d.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&w(e,m,O,P,S,y,_))},[r,m,O,P,S,C,y,_,t]),onLoad:e=>{w(e.currentTarget,m,O,P,S,y,_)},onError:e=>{z(!0),"empty"!==m&&S(!0),C&&C(e)}}))});function P(e){let{isAppRouter:t,imgAttributes:r}=e,i=l({as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy},j(r.fetchPriority));return t&&f.default.preload?(f.default.preload(r.src,i),null):(0,u.jsx)(p.default,{children:(0,u.jsx)("link",l({rel:"preload",href:r.srcSet?void 0:r.src},i),"__nimg-"+r.src+r.srcSet+r.sizes)})}let S=(0,d.forwardRef)((e,t)=>{let r=(0,d.useContext)(b.RouterContext),i=(0,d.useContext)(m.ImageConfigContext),o=(0,d.useMemo)(()=>{let e=v||i||h.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return l(l({},e),{},{allSizes:t,deviceSizes:r})},[i]),{onLoad:n,onLoadingComplete:s}=e,a=(0,d.useRef)(n);(0,d.useEffect)(()=>{a.current=n},[n]);let c=(0,d.useRef)(s);(0,d.useEffect)(()=>{c.current=s},[s]);let[f,p]=(0,d.useState)(!1),[w,j]=(0,d.useState)(!1),{props:S,meta:z}=(0,g.getImgProps)(e,{defaultLoader:y.default,imgConf:o,blurComplete:f,showAltText:w});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(O,l(l({},S),{},{unoptimized:z.unoptimized,placeholder:z.placeholder,fill:z.fill,onLoadRef:a,onLoadingCompleteRef:c,setBlurComplete:p,setShowAltText:j,sizesInput:e.sizes,ref:t})),z.priority?(0,u.jsx)(P,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30114:function(e,t,r){"use strict";var i=r(89823),o=r(10954);let n=["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","overrideSrc","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"],s=["config"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return p}}),r(30940);let c=r(77531),u=r(37322);function d(e){return void 0!==e.default}function f(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t){var r;let i,l,p,{src:g,sizes:h,unoptimized:m=!1,priority:b=!1,loading:y,className:v,quality:w,width:j,height:O,fill:P=!1,style:S,overrideSrc:z,onLoad:_,onLoadingComplete:x,placeholder:C="empty",blurDataURL:E,fetchPriority:R,layout:I,objectFit:D,objectPosition:M,lazyBoundary:k,lazyRoot:L}=e,N=o(e,n),{imgConf:A,showAltText:B,blurComplete:F,defaultLoader:G}=t,W=A||u.imageConfigDefault;if("allSizes"in W)i=W;else{let e=[...W.deviceSizes,...W.imageSizes].sort((e,t)=>e-t),t=W.deviceSizes.sort((e,t)=>e-t);i=a(a({},W),{},{allSizes:e,deviceSizes:t})}if(void 0===G)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let T=N.loader||G;delete N.loader,delete N.srcSet;let U="__next_img_default"in T;if(U){if("custom"===i.loader)throw Error('Image with src "'+g+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:r}=t;return e(o(t,s))}}if(I){"fill"===I&&(P=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(S=a(a({},S),e));let t={responsive:"100vw",fill:"100vw"}[I];t&&!h&&(h=t)}let q="",V=f(j),J=f(O);if("object"==typeof(r=g)&&(d(r)||void 0!==r.src)){let e=d(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,p=e.blurHeight,E=E||e.blurDataURL,q=e.src,!P){if(V||J){if(V&&!J){let t=V/e.width;J=Math.round(e.height*t)}else if(!V&&J){let t=J/e.height;V=Math.round(e.width*t)}}else V=e.width,J=e.height}}let Y=!b&&("lazy"===y||void 0===y);(!(g="string"==typeof g?g:q)||g.startsWith("data:")||g.startsWith("blob:"))&&(m=!0,Y=!1),i.unoptimized&&(m=!0),U&&g.endsWith(".svg")&&!i.dangerouslyAllowSVG&&(m=!0),b&&(R="high");let H=f(w),$=Object.assign(P?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:D,objectPosition:M}:{},B?{}:{color:"transparent"},S),K=F||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,c.getImageBlurSvg)({widthInt:V,heightInt:J,blurWidth:l,blurHeight:p,blurDataURL:E||"",objectFit:$.objectFit})+'")':'url("'+C+'")',Q=K?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},X=function(e){let{config:t,src:r,unoptimized:i,width:o,quality:n,sizes:s,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,s),u=a.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:a.map((e,i)=>l({config:t,src:r,quality:n,width:e})+" "+("w"===c?e:i+1)+c).join(", "),src:l({config:t,src:r,quality:n,width:a[u]})}}({config:i,src:g,unoptimized:m,width:V,quality:H,sizes:h,loader:T});return{props:a(a({},N),{},{loading:Y?"lazy":y,fetchPriority:R,width:V,height:J,decoding:"async",className:v,style:a(a({},$),Q),sizes:X.sizes,srcSet:X.srcSet,src:z||X.src}),meta:{unoptimized:m,priority:b,placeholder:C,fill:P}}}},77531:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:o,blurDataURL:n,objectFit:s}=e,l=i?40*i:t,a=o?40*o:r,c=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},51038:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return l}});let i=r(75336),o=r(30114),n=r(31932),s=i._(r(42517));function l(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=n.Image},42517:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},66879:function(e,t,r){e.exports=r(51038)}}]);
//# sourceMappingURL=6879-973a04b14be2e0f4.js.map