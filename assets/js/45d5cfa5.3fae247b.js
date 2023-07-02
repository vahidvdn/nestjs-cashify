"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[614],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,f=u["".concat(c,".").concat(d)]||u[d]||g[d]||s;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5317:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const s={sidebar_position:3},i="Parsing",o={unversionedId:"usage/parsing",id:"usage/parsing",title:"Parsing",description:"Parsing Strings",source:"@site/docs/usage/parsing.md",sourceDirName:"usage",slug:"/usage/parsing",permalink:"/nestjs-cashify/docs/usage/parsing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/parsing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Convert Currencies",permalink:"/nestjs-cashify/docs/usage/convert"},next:{title:"Congratulations",permalink:"/nestjs-cashify/docs/usage/congratulations"}},c={},l=[{value:"Parsing Strings",id:"parsing-strings",level:2},{value:"Basic parsing",id:"basic-parsing",level:3},{value:"Full parsing",id:"full-parsing",level:3}],p={toc:l},u="wrapper";function g(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"parsing"},"Parsing"),(0,a.kt)("h2",{id:"parsing-strings"},"Parsing Strings"),(0,a.kt)("p",null,"Cashify supports parsing, so you can pass a string to the amount argument and the from and/or to currency will be automatically detected:"),(0,a.kt)("h3",{id:"basic-parsing"},"Basic parsing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"this.cashifyService.convert('\u20ac10 EUR', {to: 'GBP'});\n")),(0,a.kt)("h3",{id:"full-parsing"},"Full parsing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"this.cashifyService.convert('10 EUR to GBP');\n")))}g.isMDXComponent=!0}}]);