"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[410],{1223:function(t,e,r){r.d(e,{Z:function(){return s}});var n=r(3504),a=r(6871),c=r(4067),u=r(184);function s(t){var e=t.movies,r=(0,a.TH)();return(0,u.jsx)("ul",{className:"movie__list",children:e.map((function(t){return(0,u.jsx)("li",{className:"movie-list__item",children:(0,u.jsxs)(n.rU,{to:"/movies/".concat(t.id),state:{from:r},children:[(0,u.jsx)("img",{className:"movie-poster",src:t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):c,alt:t.original_title}),(0,u.jsx)("h2",{className:"movie-title",children:t.title})]})},t.id)}))})}},4390:function(t,e,r){r.d(e,{Df:function(){return i},Pg:function(){return p},M1:function(){return h},gL:function(){return b},Ph:function(){return l}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),s=r.n(u)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"94f703750c3e0771d8c2babc592efc94"}});function i(t){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={page:e},t.next=3,s.get("/trending/movie/day",{params:r});case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return r={query:e},t.next=5,s.get("search/movie",{params:r});case 5:return n=t.sent,t.abrupt("return",n.data.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s("/movie/".concat(e,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},7030:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var n=r(8152),a=r(2791),c=r(6871),u=r(4390),s=r(1223);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r(1756);var f=r(184);function l(){var t=(0,a.useState)(""),e=(0,n.Z)(t,2),r=e[0],u=e[1],s=(0,c.s0)(),i=(0,c.TH)();return(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s(p(p({},i),{},{search:"query=".concat(r)})),u("")},children:[(0,f.jsx)("input",{type:"text",name:"query",onChange:function(t){var e=t.target.value;u(e)},value:r}),(0,f.jsx)("button",{className:"btn-sub",type:"submit",children:"Search"})]})}function m(){var t=(0,a.useState)(null),e=(0,n.Z)(t,2),r=e[0],i=e[1],o=(0,c.TH)(),p=new URLSearchParams(o.search).get("query");return(0,a.useEffect)((function(){(0,u.Ph)(p).then(i)}),[p]),(0,f.jsxs)("div",{children:[(0,f.jsx)(l,{}),r&&(0,f.jsx)(s.Z,{movies:r})]})}},1756:function(){},4067:function(t,e,r){t.exports=r.p+"static/media/No-image.25cd7a4bd235fb209fe1.jpg"}}]);
//# sourceMappingURL=MoviesPage.d5e79038.chunk.js.map