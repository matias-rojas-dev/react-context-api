(this["webpackJsonpcontext-api-tarea-02"]=this["webpackJsonpcontext-api-tarea-02"]||[]).push([[0],{75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(8),s=c.n(a),i=c(27),r=c(12),j=c(108),o=c(112),l=c(113),d=c(2),u=function(){return Object(d.jsx)(j.a,{className:"header",color:"secondary",position:"sticky",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)("h2",{className:"header-title",children:"Anime API"}),Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)(l.a,{className:"toggle-button",children:"Home"})}),Object(d.jsx)(i.b,{to:"/search",children:Object(d.jsx)(l.a,{children:"Search"})})]})})},b=function(){return Object(d.jsx)(o.a,{className:"toolbar",children:Object(d.jsx)("h2",{className:"header-title",children:"\xa9Designed by Mat\xedas Rojas"})})},h=c(23),O="https://kitsu.io/api/edge",m=Object(n.createContext)(),x=function(e){var t=e.children,c=Object(n.useState)(),a=Object(h.a)(c,2),s=a[0],i=a[1],r=Object(n.useState)([]),j=Object(h.a)(r,2),o=j[0],l=j[1];Object(n.useEffect)((function(){return u()}),[]);var u=function(){fetch("".concat(O).concat("/anime?page[limit]=15")).then((function(e){return e.json()})).then((function(e){i(!0),l(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))};return Object(d.jsx)(m.Provider,{value:{doneFetch:s,animes:o},children:t})};x.displayName="AnimesContextProvider";var f=x,p=function(e){var t=e.title;return Object(d.jsx)("h1",{className:"title",children:t})},v=c(114),g=function(e){e.id;var t=e.synopsis,c=e.titleEn,n=e.titleJp,a=e.image;return Object(d.jsxs)("div",{className:"anime-section",children:[Object(d.jsx)("img",{className:"anime-s-img",src:a,alt:c}),Object(d.jsxs)("div",{className:"anime-content",children:[Object(d.jsx)("h3",{className:"title principal",children:c}),Object(d.jsx)("h3",{className:"title subtitle",children:n}),Object(d.jsx)("h3",{className:"title synopsis",children:t})]})]})},y=function(e){var t=e.animesList;return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(p,{title:"\u30a2\u30cb\u30e1"}),Object(d.jsx)("div",{className:"animeList",children:Object(d.jsx)(v.a,{container:!0,spacing:3,justicy:"center",children:t.map((function(e){var t=e.id,c=e.attributes;return Object(d.jsx)(g,{titleEn:c.titles.en,titleJp:c.titles.ja_jp,image:c.posterImage.medium},t)}))})})]})},N=c(115),F=function(){return Object(d.jsx)("div",{className:"progressBar",children:Object(d.jsx)(N.a,{variant:"determinate",value:50,color:"secondary"})})},S=function(){var e=Object(n.useContext)(m),t=e.doneFetch,c=e.animes;return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{title:"Welcome to Anime API"}),t&&c.length?Object(d.jsx)(y,{animesList:c}):Object(d.jsx)(F,{})]})},k=c(116),A=function(){return Object(d.jsxs)("div",{className:"notFound",children:[Object(d.jsxs)("div",{className:"notFound-content",children:[Object(d.jsx)("h1",{children:"404: Not found "}),Object(d.jsx)(k.a,{href:"/",className:"",children:"Back home"})]}),Object(d.jsx)("img",{src:"https://i.pinimg.com/originals/d9/2a/1c/d92a1cf8aef657f514349872e882dae6.gif",alt:"Not Found",width:"300"})]})},C=Object(n.createContext)(),P=function(e){var t=e.children,c=Object(n.useState)(!0),a=Object(h.a)(c,2),s=a[0],i=a[1],r=Object(n.useState)([]),j=Object(h.a)(r,2),o=j[0],l=j[1],u=Object(n.useState)(""),b=Object(h.a)(u,2),m=b[0],x=b[1],f=function(e){fetch(function(e){return"".concat(O).concat("/anime?filter[text]=").concat(e)}(e)).then((function(e){return e.json()})).then((function(e){i(!0),l(e.data)})).catch((function(e){return console.log(e)}))};return Object(d.jsx)(C.Provider,{value:{doneFetch:s,element:o,validateQuery:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.querySelector("#query").value.toLowerCase().trim();if("keypress"!==e.type||"Enter"===e.key){var c=t.match(/\w+/g);(t=c&&c.join("-"))&&t!==m&&(x(t),i(!1),f(t))}}},children:t})},w=function(e){var t=e.element;return Object(d.jsx)(n.Fragment,{children:Object(d.jsx)("div",{className:"animeList",children:Object(d.jsx)(v.a,{container:!0,spacing:3,justify:"center",children:t.map((function(e){var t=e.id,c=e.attributes;return Object(d.jsx)(g,{titleEn:c.titles.en,titleJp:c.titles.ja_jp,image:c.posterImage.medium,synopsis:c.synopsis},t)}))})})})},E=c(77),J=c(118),L=c(117),q=c(57),I=c.n(q),Q=function(e){var t=e.validateQuery;return Object(d.jsxs)(E.a,{className:"paper defaultPaper",children:[Object(d.jsx)(J.a,{id:"query",label:"Anime",margin:"normal",variant:"standard",onKeyPress:function(e){return t(e)}}),Object(d.jsx)(L.a,{color:"secondary",size:"medium",onClick:function(e){return t(e)},children:Object(d.jsx)(I.a,{})})]})},B=function(){var e=Object(n.useContext)(C),t=e.doneFetch,c=e.element,a=e.validateQuery;return Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(p,{title:"Search Anime"}),Object(d.jsx)(Q,{validateQuery:a}),t?c.length?Object(d.jsx)(w,{element:c}):Object(d.jsx)("h2",{}):Object(d.jsx)(F,{})]})},_=(c(75),function(){return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(u,{}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/",children:Object(d.jsx)(f,{children:Object(d.jsx)(S,{})})}),Object(d.jsx)(r.a,{exact:!0,path:"/search",children:Object(d.jsx)(P,{children:Object(d.jsx)(B,{})})}),Object(d.jsx)(r.a,{component:A})]}),Object(d.jsx)(b,{})]})});s.a.render(Object(d.jsx)(_,{}),document.querySelector("#root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.f5a60e76.chunk.js.map