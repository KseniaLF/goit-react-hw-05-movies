"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[882],{6548:function(n,e,t){t.d(e,{Hg:function(){return s},TP:function(){return p},V0:function(){return u},tx:function(){return d},zv:function(){return l}});var r=t(5861),a=t(7757),i=t.n(a),o=t(1243),c="02bcb177375afb51516704bac2617151",s=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.signal,n.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c),{signal:t});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.signal,n.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"),{signal:r});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.signal,n.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"),{signal:r});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.signal,n.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"),{signal:r});case 3:return a=n.sent,n.abrupt("return",a.data.cast);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.signal,n.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"),{signal:r});case 3:return a=n.sent,n.abrupt("return",a.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},5882:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,i,o,c,s,u=t(5861),p=t(9439),l=t(7757),d=t.n(l),g=t(6548),x=t(168),h=t(6444),f=t(8617),v=t(1087),m=t(184),w=(0,h.ZP)(v.rU)(r||(r=(0,x.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orange;\n  }\n"]))),b=function(n){var e=n.to,t=n.children;return(0,m.jsxs)(w,{to:e,children:[(0,m.jsx)(f.jTe,{size:"24"}),t]})},j=t(3614),k=t(2791),Z=t(7689),y=h.ZP.div(a||(a=(0,x.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"]))),_=(0,h.ZP)(v.OL)(i||(i=(0,x.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  :hover {\n    color: orange;\n  }\n\n  &.active {\n    color: white;\n    background-color: orange;\n  }\n"]))),P=function(){return(0,m.jsxs)("div",{children:[(0,m.jsxs)(y,{children:[(0,m.jsx)("b",{children:"Additional information: "}),(0,m.jsx)(_,{to:"cast",children:"Cast"}),(0,m.jsx)(_,{to:"reviews",children:"Reviews"})]}),(0,m.jsx)(k.Suspense,{fallback:(0,m.jsx)(j.a,{}),children:(0,m.jsx)(Z.j3,{})})]})},S=h.ZP.div(o||(o=(0,x.Z)(["\n  display: flex;\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n  @media (max-width: 700px) {\n    flex-wrap: wrap;\n  }\n"]))),U=h.ZP.div(c||(c=(0,x.Z)(["\n  width: 400px;\n  min-width: 400px;\n  margin-right: 20px;\n  img {\n    object-fit: cover;\n  }\n  @media (max-width: 700px) {\n    margin-right: 0;\n    min-width: 0;\n  }\n"]))),C=h.ZP.div(s||(s=(0,x.Z)(["\n  h2 {\n    color: orange;\n    margin-bottom: 10px;\n  }\n  p {\n    font-weight: 500;\n    margin: 10px 0;\n  }\n  ul {\n    /* background-color: orange; */\n    display: flex;\n    gap: 10px;\n    /* color: orange; */\n    li {\n      padding: 5px 10px;\n      background-color: orange;\n      border-radius: 5px;\n    }\n  }\n  @media (max-width: 700px) {\n    h2 {\n      text-align: center;\n      color: orange;\n    }\n  }\n"]))),D=function(n){var e=n.movieDetails,r=e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):t(4),a=Date.parse(e.release_date),i=new Date(a).getFullYear();return(0,m.jsxs)("div",{children:[(0,m.jsxs)(S,{children:[(0,m.jsx)(U,{children:(0,m.jsx)("img",{src:r,alt:e.title})}),(0,m.jsxs)(C,{children:[(0,m.jsxs)("h2",{children:[e.title," (",i,")"]}),(0,m.jsxs)("p",{children:["User Score: ",Math.round(e.vote_average),"/10"]}),(0,m.jsx)("p",{children:"Overview:"}),(0,m.jsx)("div",{children:e.overview}),(0,m.jsx)("p",{children:"Genres:"}),(0,m.jsx)("ul",{children:e.genres&&e.genres.map((function(n){return(0,m.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,m.jsx)(P,{})]})},T=function(){var n,e,t=(0,Z.UO)().movieId,r=(0,Z.TH)(),a=(0,k.useRef)(null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies"),i=(0,k.useState)(null),o=(0,p.Z)(i,2),c=o[0],s=o[1];return(0,k.useEffect)((function(){var n=new AbortController,e=function(){var e=(0,u.Z)(d().mark((function e(){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.TP)(t,n);case 3:r=e.sent,s(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){n.abort()}}),[t]),(0,m.jsxs)("div",{children:[(0,m.jsx)(b,{to:a.current,children:"Back to list"}),c&&(0,m.jsx)(D,{movieDetails:c})]})}},4:function(n,e,t){n.exports=t.p+"static/media/noImage.949669730a3e16f9c421.jpg"}}]);
//# sourceMappingURL=882.51fefab5.chunk.js.map