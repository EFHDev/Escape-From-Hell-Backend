(this["webpackJsonpnew-item-finder-website"]=this["webpackJsonpnew-item-finder-website"]||[]).push([[0],{134:function(e,t,r){"use strict";r.r(t);var n,a,c=r(0),o=r.n(c),i=r(42),s=r.n(i),l=r(9),u=r(205),d=r(206),f=r(207),b=r(198),h=r(1),p=Object(b.a)((function(){return{footerHolder:{display:"flex",flex:"0 1 3vh",flexDirection:"row",alignItems:"center",justifyContent:"center",padding:"0 10vw 0 10vw"}}})),m=function(){var e=p();return Object(h.jsx)(d.a,{className:e.footerHolder,children:Object(h.jsx)(f.a,{id:"footer",children:"SPT-Aki \xa92021 Created by Rev and Shirito"})})},j=r(213),v=r(16),O=r.n(v),x=r(25),g=r(100),w=r.n(g),k=r(43),y=function(){var e=Object(x.a)(O.a.mark((function e(t,r){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,Object(k.a)(Object(k.a)({},r),{},{mode:"cors"}));case 3:if(200!==(n=e.sent).status){e.next=11;break}return e.next=7,n.json();case 7:return a=e.sent,e.abrupt("return",void 0!==a?a:null);case 11:n.status>=400&&console.warn(n);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.warn(e.t0);case 17:return e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,r){return e.apply(this,arguments)}}(),E=function(){var e=Object(x.a)(O.a.mark((function e(t,r){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("".concat("http://localhost:6969/db-website","/api/search"),{mode:"cors",method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(r?{query:t,locale:r}:{query:t})});case 2:if(e.t1=n=e.sent,e.t0=null===e.t1,e.t0){e.next=6;break}e.t0=void 0===n;case 6:if(!e.t0){e.next=10;break}e.t2=void 0,e.next=11;break;case 10:e.t2=n.items;case 11:return e.abrupt("return",e.t2);case 12:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),C=function(){var e=Object(x.a)(O.a.mark((function e(t,r){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("http://localhost:6969/db-website","/api/item?id=").concat(t),r&&(n="".concat(n,"&locale=").concat(r)),e.next=4,y(n,{mode:"cors"});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),L=function(){var e=Object(x.a)(O.a.mark((function e(t,r){var n,a,c,o,i,s,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},a=null===t||void 0===t?void 0:t._id,c=R.getState().itemsHierarchy,o=!0;case 4:if(!a){e.next=13;break}if(a in c){e.next=8;break}return o=!1,e.abrupt("break",13);case 8:s=R.getState().itemsHierarchy[a],n[s.item._id]=s,a=null===s||void 0===s||null===(i=s.item)||void 0===i?void 0:i._parent,e.next=4;break;case 13:if(!o){e.next=15;break}return e.abrupt("return",n);case 15:return l="".concat("http://localhost:6969/db-website","/api/item/hierarchy?id=").concat(t._id),r&&(l="".concat(l,"&locale=").concat(r)),e.next=19,y(l,{mode:"cors"});case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),I=function(){var e=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("".concat("http://localhost:6969/db-website","/api/locales"),{mode:"cors"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!function(e){e.PREFERED_COLOR_SCHEME="db.sp-tarkov.com-prefered-color-scheme",e.PREFERED_JSON_THEME="db.sp-tarkov.com-prefered-json-theme",e.PREFERED_LOCALE="db.sp-tarkov.com-prefered-locale"}(n||(n={})),function(e){e.LOCALES="db.sp-tarkov.com-locales",e.ITEMS_HIERARCHY="db.sp-tarkov.com-items-hierarchy"}(a||(a={}));var S,N=["apathy","apathy:inverted","ashes","bespin","brewer","bright:inverted","bright","chalk","codeschool","colors","eighties","embers","flat","google","grayscale","grayscale:inverted","greenscreen","harmonic","hopscotch","isotope","marrakesh","mocha","monokai","ocean","paraiso","pop","railscasts","rjv-default","shapeshifter","shapeshifter:inverted","solarized","summerfruit","summerfruit:inverted","threezerotwofour","tomorrow","tube","twilight"];!function(e){e.LIGHT_MODE="light",e.DARK_MODE="dark"}(S||(S={}));var _=localStorage.getItem(n.PREFERED_LOCALE),D=localStorage.getItem(n.PREFERED_JSON_THEME),H=localStorage.getItem(n.PREFERED_COLOR_SCHEME),R=w()((function(e){return{sptarkovWebsiteUrl:"https://www.sp-tarkov.com/",sptarkovWorkshopUrl:"https://mods.sp-tarkov.com/",sptarkovDocumentationUrl:"https://docs.sp-tarkov.com/",preferedLocale:_||"en",setPreferedLocale:function(t){localStorage.setItem(n.PREFERED_LOCALE,t),e((function(e){return{preferedLocale:t}}))},localesList:[],refreshLocalesList:function(){var t=Object(x.a)(O.a.mark((function t(){var r,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===(r=sessionStorage.getItem(a.LOCALES))||void 0===r||"undefined"===r||"null"===r){t.next=5;break}t.t0=JSON.parse(r),t.next=8;break;case 5:return t.next=7,I();case 7:t.t0=t.sent;case 8:n=t.t0,r||sessionStorage.setItem(a.LOCALES,JSON.stringify(n||null)),e((function(e){return{localesList:n||[]}}));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),preferedJsonViewerTheme:D&&N.includes(D)?D:N[0],setPreferedJsonViewerTheme:function(t){localStorage.setItem(n.PREFERED_JSON_THEME,t),e((function(e){return{preferedJsonViewerTheme:t}}))},preferedColorScheme:H||S.DARK_MODE,setPreferedColorScheme:function(t){localStorage.setItem(n.PREFERED_COLOR_SCHEME,t),e((function(e){return{preferedColorScheme:t}}))},searchInput:"",setSearchInput:function(t){return e((function(e){return{searchInput:t}}))},desiredSearchInput:"",setDesiredSearchInput:function(t){return e((function(e){return{desiredSearchInput:t}}))},itemsHierarchy:{},initHierarchy:function(){var t=sessionStorage.getItem(a.ITEMS_HIERARCHY);null!==t&&void 0!==t&&"undefined"!==t&&e((function(e){return{itemsHierarchy:JSON.parse(t)}}))},setHierarchy:function(t){e((function(e){var r=Object.assign({},e.itemsHierarchy,t);return sessionStorage.setItem(a.ITEMS_HIERARCHY,JSON.stringify(r||null)),{itemsHierarchy:r}}))},selectedItem:void 0,setSelectedItem:function(t){return e((function(e){return{selectedItem:t}}))}}})),M=r(208),T=r(38),F=r(102),G=r.n(F),P=r(101),A=r.n(P),J=Object(b.a)((function(e){return{modeToggleButtonHolder:{display:"flex",alignItems:"center",justifyContent:"center",color:"primary",flexGrow:1},iconButton:{ml:1}}})),B=function(){var e=Object(T.a)(),t=J(),r=R(Object(c.useCallback)((function(e){return[e.preferedColorScheme,e.setPreferedColorScheme]}),[])),n=Object(l.a)(r,2),a=n[0],o=n[1];return Object(h.jsxs)(d.a,{className:t.modeToggleButtonHolder,id:"modeToggleButtonHolder",children:[e.palette.mode," mode",Object(h.jsx)(M.a,{className:t.iconButton,sx:{ml:1},onClick:function(){var e=a===S.LIGHT_MODE?S.DARK_MODE:S.LIGHT_MODE;o(e)},color:"inherit",id:"modeToggleButton",children:"dark"===e.palette.mode?Object(h.jsx)(A.a,{}):Object(h.jsx)(G.a,{})})]})},V=r(209),W=r(199),K=r(202),U=Object(b.a)((function(e){return{localeHolder:{display:"flex",flexGrow:1,padding:"0 0.5vw 0 0.5vw"},select:{display:"flex",flexGrow:1}}})),z=function(){var e=U(),t=R(Object(c.useCallback)((function(e){return[e.preferedLocale,e.setPreferedLocale]}),[])),r=Object(l.a)(t,2),n=r[0],a=r[1],o=R(Object(c.useCallback)((function(e){return[e.localesList,e.refreshLocalesList]}),[])),i=Object(l.a)(o,2),s=i[0],u=i[1];return Object(c.useEffect)((function(){return u()}),[u]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(d.a,{className:e.localeHolder,children:Object(h.jsx)(V.a,{fullWidth:!0,variant:"standard",children:Object(h.jsxs)(W.a,{displayEmpty:!0,className:e.select,labelId:"prefered-locale",value:s.length>0?n:"",onChange:function(e){a(e.target.value)},id:"locale-selector",children:[Object(h.jsx)(K.a,{disabled:!0,value:"",children:Object(h.jsx)("em",{children:"Language"})}),s.map((function(e,t){return Object(h.jsx)(K.a,{value:e,children:e},t)}))]})})})})},Y=Object(b.a)((function(e){return{jsonHolder:{display:"flex",flexGrow:1,padding:"0 0.5vw 0 0.5vw"},select:{display:"flex",flexGrow:1}}})),q=function(){var e=Y(),t=R(Object(c.useCallback)((function(e){return[e.preferedJsonViewerTheme,e.setPreferedJsonViewerTheme]}),[])),r=Object(l.a)(t,2),a=r[0],o=r[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(d.a,{className:e.jsonHolder,children:Object(h.jsx)(V.a,{fullWidth:!0,variant:"standard",children:Object(h.jsxs)(W.a,{displayEmpty:!0,className:e.select,labelId:"react-json-view-theme",value:a,label:"JSON theme",onChange:function(e){o(e.target.value),localStorage.setItem(n.PREFERED_JSON_THEME,e.target.value)},id:"json-selector",children:[Object(h.jsx)(K.a,{disabled:!0,value:"",children:Object(h.jsx)("em",{children:"JSON theme"})}),N.map((function(e,t){return Object(h.jsx)(K.a,{value:e,children:e},t)}))]})})})})},Q=Object(b.a)((function(e){return{form:{display:"flex",flexDirection:"row",flexGrow:1,justifyContent:"flex-end",height:"100%"}}})),X=function(){var e=Q();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{className:e.form,children:[Object(h.jsx)(B,{}),Object(h.jsx)(z,{}),Object(h.jsx)(q,{})]})})},Z=Object(b.a)((function(e){return{headerContainer:{display:"flex",flex:"0 1 3vh",flexDirection:"row",backgroundColor:e.palette.background.paper,alignItems:"center",padding:"0 10vw 0 10vw"},linksContainer:{display:"flex",flexGrow:2,flexDirection:"row",alignItems:"center",height:"100%"},formContainer:{display:"flex",flexGrow:1,flexDirection:"row",alignItems:"center",height:"100%"},link:{display:"flex",padding:"0 1vw 0 1vw",height:"100%",alignItems:"center",borderBottom:"1px solid transparent","&:hover":{borderBottom:"1px solid ".concat(e.palette.action.hover)}}}})),$=function(){var e=Z(),t=R(Object(c.useCallback)((function(e){return e.sptarkovWebsiteUrl}),[])),r=R(Object(c.useCallback)((function(e){return e.sptarkovWorkshopUrl}),[])),n=R(Object(c.useCallback)((function(e){return e.sptarkovDocumentationUrl}),[]));return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(d.a,{className:e.headerContainer,children:[Object(h.jsxs)(d.a,{className:e.linksContainer,children:[Object(h.jsx)(j.a,{underline:"hover",color:"inherit",id:"website-link",href:t,className:e.link,children:"Website"}),Object(h.jsx)(j.a,{underline:"hover",color:"inherit",id:"workshop-link",href:r,className:e.link,children:"Workshop"}),Object(h.jsx)(j.a,{underline:"hover",color:"inherit",id:"documentation-link",href:n,className:e.link,children:"Documentation"})]}),Object(h.jsx)(d.a,{className:e.formContainer,children:Object(h.jsx)(X,{})})]})})},ee=r(84),te=r(14),re=r(203),ne=Object(b.a)((function(e){return{breadcrumbHolder:{display:"flex",flex:"0 1 3vh",flexDirection:"row",alignItems:"center",padding:"0 10vw 0 10vw",borderBottom:"1px solid ".concat(e.palette.background.paper)},breadcrumb:{display:"flex",flex:"0 1 3vh",flexDirection:"row",flexGrow:1},link:{color:e.palette.text.secondary,display:"flex",padding:"0 1vw 0 1vw",height:"100%",alignItems:"center",borderBottom:"1px solid transparent","&:hover":{color:e.palette.action.hover,cursor:"pointer"}},currentItem:{cursor:"default",borderBottom:"1px solid ".concat(e.palette.action.hover)}}})),ae=function(){var e=ne(),t=R((function(e){return e.setSelectedItem})),r=R((function(e){return e.itemsHierarchy})),n=R((function(e){return[e.searchInput,e.setSearchInput]})),a=Object(l.a)(n,2),o=a[0],i=a[1],s=R((function(e){return e.selectedItem})),u=Object(c.useState)([]),b=Object(l.a)(u,2),p=b[0],m=b[1];Object(c.useEffect)((function(){var e;if(s){for(var t=[s],n=null===s||void 0===s||null===(e=s.item)||void 0===e?void 0:e._parent;n;){var a,c=r[n];t.push(c),n=null===c||void 0===c||null===(a=c.item)||void 0===a?void 0:a._parent}m(t.filter((function(e){return void 0!==e&&null!==e})).reverse())}}),[s,r]);return Object(h.jsx)(d.a,{className:e.breadcrumbHolder,children:Object(h.jsxs)(re.a,{"aria-label":"breadcrumb",className:e.breadcrumb,id:"navigation-breadcrumb",children:[Object(h.jsx)(j.a,{underline:"hover",color:"inherit",href:"/db-website",id:"home-breadcrumb",className:e.link,children:Object(h.jsx)(f.a,{variant:"body2",children:"Home"})},"home"),p.map((function(r,n){return function(r,n){return o===r.locale.Name||o===r.item._id||o===r.item._name?Object(h.jsx)(f.a,{variant:"body2",className:e.currentItem,children:r.locale.Name?r.locale.Name:r.item._name},r.item._id):Object(h.jsx)(j.a,{underline:"hover",color:"inherit",onClick:function(){i(r.item._id),t(void 0)},className:e.link,children:Object(h.jsx)(f.a,{variant:"body2",children:r.locale.Name?r.locale.Name:r.item._name})},n)}(r,n.toString())}))]})})},ce=r(214),oe=r(197),ie=r(201),se=r(103),le=r.n(se),ue=Object(b.a)((function(e){return{searchAreaHolder:{display:"flex",flexGrow:1,flexDirection:"column",background:e.palette.background.paper,padding:"2vh 2vw 2vh 2vw"},jsonHolder:{display:"flex",flexGrow:1,alignItems:"center",flexDirection:"column",background:e.palette.background.paper,maxHeight:"80vh"},autocomplete:{}}})),de=function(){var e=ue(),t=Object(te.h)(),r=Object(te.g)(),n=R((function(e){return e.preferedLocale})),a=R(Object(c.useCallback)((function(e){return e.preferedJsonViewerTheme}),[])),o=R((function(e){return[e.searchInput,e.setSearchInput]})),i=Object(l.a)(o,2),s=i[0],u=i[1],b=R((function(e){return[e.setHierarchy,e.initHierarchy]})),p=Object(l.a)(b,2),m=p[0],j=p[1],v=R((function(e){return[e.selectedItem,e.setSelectedItem]})),g=Object(l.a)(v,2),w=g[0],y=g[1],I=Object(c.useState)([]),S=Object(l.a)(I,2),N=S[0],_=S[1],D=Object(c.useState)(!1),H=Object(l.a)(D,2),M=H[0],T=H[1],F=Object(c.useCallback)(function(){var e=Object(x.a)(O.a.mark((function e(t){var r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,n);case 2:r=e.sent,a=null===r||void 0===r?void 0:r.map((function(e){return{id:e.item._id,name:e.locale.Name?e.locale.Name:e.item._name,shortName:JSON.stringify(e.locale.ShortName)}})),_(a||[]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n]),G=Object(c.useCallback)(function(){var e=Object(x.a)(O.a.mark((function e(t){var r,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t,n);case 2:if(r=e.sent){e.next=7;break}return y(void 0),u(""),e.abrupt("return");case 7:return y(r),a={id:r.item._id,name:r.locale.Name?r.locale.Name:r.item._name,shortName:r.locale.ShortName},_([a]),u(a.name),e.next=13,L(r.item,n);case 13:c=e.sent,m(c||{});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);Object(c.useEffect)((function(){return j()}),[j]),Object(c.useEffect)((function(){w&&r("/db-website/search/".concat(w.item._id))}),[w,r]),Object(c.useEffect)((function(){s&&s.match(/([a-z0-9]{24})/)&&G(s)}),[G,s]);var P=Object(c.useCallback)(function(){var e=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!t||t.length<3||M)){e.next=5;break}return y(void 0),_([]),T(!1),e.abrupt("return");case 5:if(T(!0),!t.match(/([a-z0-9]{24})/)){e.next=11;break}return e.next=9,G(t);case 9:e.next=13;break;case 11:return e.next=13,F(t);case 13:T(!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[G,F,M,y]);Object(c.useEffect)((function(){if(!s&&t.id){var e=t.id.trim();console.log(e),u(e),Object(x.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}}),[t,s,u,P,r]);return Object(h.jsxs)(d.a,{className:e.searchAreaHolder,children:[Object(h.jsx)(oe.a,{id:"search-autocomplete",options:N.map((function(e){return{name:e.name,shortName:e.shortName,id:e.id}})),getOptionLabel:function(e){return e.name?e.name:e.id},isOptionEqualToValue:function(e,t){return function(e,t){var r,n,a,c,o,i;return(null===(r=e.name)||void 0===r?void 0:r.toLocaleLowerCase())===(null===(n=t.name)||void 0===n?void 0:n.toLocaleLowerCase())||(null===(a=e.id)||void 0===a?void 0:a.toLocaleLowerCase())===(null===(c=t.id)||void 0===c?void 0:c.toLocaleLowerCase())||(null===(o=e.shortName)||void 0===o?void 0:o.toLocaleLowerCase())===(null===(i=t.shortName)||void 0===i?void 0:i.toLocaleLowerCase())}(e,t)},open:!M&&s.length>=3&&s!==(null===w||void 0===w?void 0:w.locale.Name)&&s!==(null===w||void 0===w?void 0:w.item._name),className:e.autocomplete,inputValue:s||"",onInputChange:function(){var e=Object(x.a)(O.a.mark((function e(t,r){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return y(void 0),u(r),e.next=6,P(r.trim());case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),value:function(){var e=N.find((function(e){return e.id===s||e.name===s}));return e||null}(),onChange:function(){var e=Object(x.a)(O.a.mark((function e(t,r){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=5;break}if(!(n=N.find((function(e){return e.name===r.name})))){e.next=5;break}return e.next=5,G(n.id);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),renderInput:function(e){return Object(h.jsx)(ie.a,Object(k.a)(Object(k.a)({},e),{},{label:"Search by name or ID"}))},renderOption:function(e,t){return Object(c.createElement)("li",Object(k.a)(Object(k.a)({},e),{},{key:t.id}),Object(h.jsx)(f.a,{children:t.name}))},filterOptions:function(e,t){return e.filter((function(e){var r,n,a;return(null===(r=e.name)||void 0===r?void 0:r.toLocaleLowerCase().includes(t.inputValue.toLocaleLowerCase()))||(null===(n=e.id)||void 0===n?void 0:n.toLocaleLowerCase().includes(t.inputValue.toLocaleLowerCase()))||(null===(a=e.shortName)||void 0===a?void 0:a.toLocaleLowerCase().includes(t.inputValue.toLocaleLowerCase()))}))},filterSelectedOptions:!0}),Object(h.jsx)(d.a,{className:e.jsonHolder,children:M?Object(h.jsx)(ce.a,{size:100}):w?Object(h.jsx)(le.a,{src:w,theme:a,style:{marginTop:"2vh",width:"100%",overflowY:"auto",display:"flex"}}):Object(h.jsx)(f.a,{id:"search-no-data",children:"No data to display"})})]})},fe=Object(b.a)((function(){return{searchContainer:{display:"flex",flexDirection:"row",flexGrow:1,padding:"2vh 2vw 1vh 2vw"}}})),be=function(){var e=fe();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(ae,{}),Object(h.jsx)(d.a,{className:e.searchContainer,children:Object(h.jsx)(de,{})})]})},he=Object(b.a)((function(e){return{searchContainer:{display:"flex",flexDirection:"row",flexGrow:1,padding:"2vh 2vw 1vh 2vw"},notFoundAreaHolder:{display:"flex",flexGrow:1,flexDirection:"column",background:e.palette.background.paper,padding:"2vh 2vw 2vh 2vw"},notFoundContainer:{display:"flex",flexGrow:1,flexDirection:"column",width:"100%",alignItems:"center",paddingTop:"10vh"}}})),pe=function(){var e=he();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(ae,{}),Object(h.jsx)(d.a,{className:e.searchContainer,children:Object(h.jsx)(d.a,{className:e.notFoundAreaHolder,children:Object(h.jsx)(d.a,{className:e.notFoundContainer,children:Object(h.jsx)(f.a,{id:"not-found-message",variant:"h3",children:"This page does not exist !"})})})})]})},me=Object(b.a)((function(){return{container:{background:"background.default",display:"flex",flexDirection:"column",flexGrow:1,height:"100vh",maxheight:"100vh"}}})),je=function(){var e=me();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(d.a,{className:e.container,children:[Object(h.jsx)($,{}),Object(h.jsx)(ee.a,{children:Object(h.jsxs)(te.d,{children:[Object(h.jsx)(te.b,{path:"/db-website/search",element:Object(h.jsx)(be,{})}),Object(h.jsx)(te.b,{path:"/db-website/search/:id",element:Object(h.jsx)(be,{})}),Object(h.jsx)(te.b,{path:"/db-website/404",element:Object(h.jsx)(pe,{})}),Object(h.jsx)(te.b,{path:"/",element:Object(h.jsx)(te.a,{replace:!0,to:"/db-website/search"})}),Object(h.jsx)(te.b,{path:"*",element:Object(h.jsx)(te.a,{replace:!0,to:"/db-website/404"})})]})}),Object(h.jsx)(m,{})]})})},ve=r(195),Oe=r(196),xe=r(98),ge=r(58),we=r(49),ke=r(194),ye=r(54),Ee=Object(ye.a)({mode:S.DARK_MODE,background:{default:xe.a[900],paper:"#121212"},text:{primary:ge.a.white,secondary:"#8894a2",disabled:we.a[100]},action:{hover:ke.a[700]}}),Ce=r(48),Le=Object(ye.a)({mode:S.LIGHT_MODE,background:{default:xe.a[100],paper:xe.a[300]},text:{primary:ge.a.black,secondary:Ce.a[500],disabled:xe.a[600]},action:{hover:Ce.a[500]}}),Ie=r(104),Se=function(){var e,t=Object(ve.a)("(prefers-color-scheme: dark)"),r=R((function(e){return[e.preferedColorScheme,e.setPreferedColorScheme]})),a=Object(l.a)(r,2),o=a[0],i=a[1];return Object(c.useEffect)((function(){var e=localStorage.getItem(n.PREFERED_COLOR_SCHEME);if(e)i(e);else{var r=t?S.DARK_MODE:S.LIGHT_MODE;i(r)}}),[t]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(u.a,{theme:(e=o===S.DARK_MODE?Ee:Le,Object(Ie.a)({palette:e,components:{MuiLink:{styleOverrides:{root:{"&:hover":{textDecoration:"none"}}}},MuiInput:{styleOverrides:{root:{"&:before":{borderColor:"transparent"},"&:after":{borderColor:"transparent"},"&:hover:not(.Mui-disabled):before":{borderColor:e.action.hover}},input:{"&:focus":{backgroundColor:"transparent"}}}},MuiTextField:{styleOverrides:{root:{"& label.Mui-focused":{color:e.action.hover},"& .MuiFilledInput-underline:after":{borderBottomColor:e.action.hover}}}},MuiInputBase:{styleOverrides:{root:{"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"".concat(e.action.hover," !important")}}}},MuiFormLabel:{styleOverrides:{root:{"&.Mui-focused .MuiInputLabel":{color:e.action.hover}}}}}})),children:[Object(h.jsx)(Oe.a,{}),Object(h.jsx)(je,{})]})})},Ne=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,215)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),c(e),o(e)}))};s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(Se,{})}),document.getElementById("root")),Ne()}},[[134,1,2]]]);
//# sourceMappingURL=main.8f5d3e82.chunk.js.map