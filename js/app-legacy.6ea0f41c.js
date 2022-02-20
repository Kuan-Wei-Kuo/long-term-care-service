(function(){"use strict";var e={4662:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{color:"primary",app:"","clipped-left":"",dark:"",dense:"",flat:""}},[n("v-app-bar-nav-icon",{attrs:{variant:"text"},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v(e._s(e.title))])],1),n("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",[n("v-list-item-group",e._l(e.drawerItems,(function(t,r){return n("v-list-item",{key:r,attrs:{to:t.path},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[e._v(e._s(t.name))])})),1)],1)],1),n("v-main",[n("router-view")],1),n("v-footer",{attrs:{app:""}},[e._v("此應用僅為測試使用，請勿用於生產環境。")])],1)},i=[],a={name:"App",data:function(){return{drawer:!1,drawerItems:[{name:"首頁",path:"/"},{name:"照護服務計畫",path:"/plan"}],title:"長期照護服務"}}},u=a,c=n(1001),f=n(3453),l=n.n(f),s=n(7524),p=n(8320),d=n(5206),v=n(899),m=n(6816),h=n(7620),g=n(3249),b=n(7877),y=n(3347),w=n(7921),_=(0,c.Z)(u,o,i,!1,null,null,null),k=_.exports;l()(_,{VApp:s.Z,VAppBar:p.Z,VAppBarNavIcon:d.Z,VFooter:v.Z,VList:m.Z,VListItem:h.Z,VListItemGroup:g.Z,VMain:b.Z,VNavigationDrawer:y.Z,VToolbarTitle:w.qW});n(1539),n(8783),n(3948);var Z=n(8345);r.Z.use(Z.Z);var O=[{path:"/",name:"home",component:function(){return n.e(218).then(n.bind(n,4218))}},{path:"/plan",name:"plan",component:function(){return n.e(847).then(n.bind(n,3847))}}],A=new Z.Z({mode:"history",base:"long-term-care-service/",routes:O}),C=A,j=n(9132);r.Z.use(j.Z);var E=new j.Z({});r.Z.config.productionTip=!1,new r.Z({router:C,vuetify:E,render:function(e){return e(k)}}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var f=o();void 0!==f&&(t=f)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{218:"ac332799",847:"8d7bd50d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".fefb5f46.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="long-term-care-service:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+i){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="long-term-care-service/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={847:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],f=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(t&&t(r);f<a.length;f++)i=a[f],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunklong_term_care_service"]=self["webpackChunklong_term_care_service"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4662)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.6ea0f41c.js.map