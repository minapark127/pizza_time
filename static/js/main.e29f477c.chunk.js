(this.webpackJsonppizza_time=this.webpackJsonppizza_time||[]).push([[0],{36:function(e,n,t){e.exports=t.p+"static/media/noPoster.381db2c7.png"},48:function(e,n,t){e.exports=t(79)},78:function(e,n,t){e.exports=t.p+"static/media/noPoster-sml.f6566347.png"},79:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(37),o=t.n(i),c=t(12),l=t(4),u=t(2),s=t(1),p=t(38);function m(){var e=Object(u.a)(["\n  display: flex;\n  a {\n    width: 100px;\n  }\n  @media (max-width: 768px) {\n    display: none;\n    flex-direction: column;\n    a {\n      width: 30%;\n      align-self: flex-end;\n      box-shadow: 0px 4px 17px -6px rgba(0, 0, 0, 0.3);\n      background-color: rgba(33, 33, 33, 0.85);\n      backdrop-filter: saturate(180%) blur(10px);\n      z-index: 2;\n      height: 70px;\n    }\n    li {\n      width: 100%;\n      height: 100%;\n      text-align: right;\n      padding-right: 10px;\n      padding-top: 20px;\n    }\n  }\n  @media (max-width: 425px) {\n    a {\n      width: 50%;\n    }\n  }\n"]);return m=function(){return e},e}function d(){var e=Object(u.a)(["\n  width: 70px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 2.5px solid transparent;\n  border-bottom: 2.5px solid\n    ",";\n  &:hover {\n    border-bottom: 2.5px solid #f51406;\n  }\n  text-shadow: ",";\n  transition: border-bottom 0.35s ease-in, text-shadow 0.35s ease-in;\n"]);return d=function(){return e},e}function f(){var e=Object(u.a)(["\n  display: flex;\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n  .active {\n    display: flex !important;\n  }\n"]);return f=function(){return e},e}function g(){var e=Object(u.a)(["\n  position: absolute;\n  top: 15px;\n  right: 20px;\n  cursor: pointer;\n  display: none;\n  :hover {\n    color: rgb(245, 20, 6, 0.8);\n  }\n  svg {\n    font-size: 30px;\n  }\n  @media (max-width: 768px) {\n    display: block;\n  }\n"]);return g=function(){return e},e}function b(){var e=Object(u.a)(["\n  width: 100vw;\n  height: 60px;\n  padding: 10px;\n  font-size: 18px;\n  font-weight: 600;\n  text-transform: uppercase;\n  position: sticky;\n  top: -10px;\n  span {\n    font-size: 30px;\n  }\n  box-shadow: 0px 4px 17px -6px rgba(0, 0, 0, 0.3);\n  background-color: rgba(60, 63, 66, 0.5);\n  backdrop-filter: saturate(180%) blur(10px);\n  z-index: 2;\n"]);return b=function(){return e},e}var v=s.c.header(b()),h=s.c.a(g()),x=s.c.ul(f()),E=Object(s.c)(c.b)(d(),(function(e){return e.current?"#f51406":"transparent"}),(function(e){return e.current?"2.5px 2.5px 10px rgba(128, 128, 128, 1),\n    -3px -3px 10px rgba(128, 128, 128, 1)":"none"})),w=s.c.div(m()),y=Object(l.j)((function(e){var n=e.location.pathname;return a.a.createElement(v,null,a.a.createElement(x,null,a.a.createElement(E,{to:"/",current:"/"===n},a.a.createElement("li",null,a.a.createElement("span",{role:"img","aria-label":"pizza emoji"},"\ud83c\udf55"))),a.a.createElement(w,{className:"menu"},a.a.createElement(E,{to:"/movie",current:"/movie"===n},a.a.createElement("li",null,"Movie")),a.a.createElement(E,{to:"/tv",current:"/tv"===n},a.a.createElement("li",null,"TV")),a.a.createElement(E,{to:"/search",current:"/search"===n},a.a.createElement("li",null,"Search")))),a.a.createElement(h,{className:"toggleBtn",onClick:function(){document.querySelectorAll(".menu").forEach((function(e){return e.classList.toggle("active")}))}},a.a.createElement(p.a,{icon:"bars"})))})),j=t(6),O=t.n(j),_=t(14),k=t(13),z=t(42),S=t.n(z).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"5cef9d776768b9b6cc625230d88030bb",language:"en-US"}}),I=function(){return S.get("movie/now_playing")},R=function(){return S.get("movie/top_rated")},L=function(){return S.get("movie/upcoming")},M=function(e){return S.get("movie/".concat(e),{params:{append_to_response:"videos"}})},P=function(e){return S.get("search/movie",{params:{query:encodeURIComponent(e)}})},U=function(){return S.get("tv/on_the_air")},T=function(){return S.get("tv/top_rated")},C=function(){return S.get("tv/popular")},A=function(e){return S.get("tv/".concat(e),{params:{append_to_response:"videos"}})},F=function(e){return S.get("search/tv",{params:{query:encodeURIComponent(e)}})},B=function(){return S.get("trending/all/week")};var N=function(){var e=Object(r.useState)(!0),n=Object(k.a)(e,2),t=n[0],a=n[1],i=Object(r.useState)([]),o=Object(k.a)(i,2),c=o[0],l=o[1],u=Object(r.useState)(null),s=Object(k.a)(u,2),p=s[0],m=s[1],d=function(){var e=Object(_.a)(O.a.mark((function e(){var n,t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B();case 3:n=e.sent,t=n.data.results,l(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m("\u274ccannot find information on trending\u274c");case 11:return e.prev=11,a(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){d()}),[]),{loading:t,trending:c,error:p}};function D(){var e=Object(u.a)(["\n  input {\n    background-color: rgba(240, 226, 220, 0.95);\n    color: #3c3f42;\n    :hover {\n      background-color: rgba(240, 226, 220, 0.7);\n    }\n  }\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    input {\n      margin-bottom: 20px;\n    }\n  }\n"]);return D=function(){return e},e}function q(){var e=Object(u.a)(["\n  margin-bottom: 20px;\n  input {\n    background-color: rgba(245, 20, 6, 0.9);\n    color: #f0e2dc;\n  }\n"]);return q=function(){return e},e}function V(){var e=Object(u.a)(["\n  display: flex;\n  input {\n    all: unset;\n    margin-left: 20px;\n    border-radius: 10px;\n    padding: 15px 35px;\n    box-shadow: 0px 4px 20px -3px rgba(0, 0, 0, 0.35);\n    transition: transform 0.5s linear;\n    :hover {\n      cursor: pointer;\n      background-color: rgba(245, 20, 6, 0.7);\n    }\n    :active {\n      transform: scale(0.8);\n    }\n  }\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-end;\n  }\n"]);return V=function(){return e},e}function G(){var e=Object(u.a)(["\n  line-height: 1.2;\n  font-size: 70px;\n  font-weight: 600;\n  text-align: end;\n  text-transform: capitalize;\n  margin-bottom: 15px;\n  @media (max-width: 768px) {\n    font-size: 35px;\n    line-height: 1.5;\n  }\n"]);return G=function(){return e},e}function J(){var e=Object(u.a)(["\n  text-align: end;\n  font-size: 50px;\n  span {\n    text-shadow: 2.5px 2.5px 10px rgba(200, 200, 200, 1),\n      -3px -3px 10px rgba(200, 200, 200, 1);\n  }\n  h3 {\n    text-transform: uppercase;\n    font-size: 16px;\n    opacity: 0.9;\n    margin-top: 25px;\n    letter-spacing: 1.2px;\n  }\n"]);return J=function(){return e},e}function X(){var e=Object(u.a)(["\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n"]);return X=function(){return e},e}function Y(){var e=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  opacity: 0.4;\n  z-index: 0;\n"]);return Y=function(){return e},e}var H=s.c.div(Y(),(function(e){return e.bgUrl})),K=s.c.div(X()),Q=s.c.h2(J()),W=s.c.h2(G()),Z=s.c.div(V()),$=Object(s.c)(c.b)(q()),ee=s.c.section(D()),ne=function(e){var n=e.title,t=e.isMovie,r=e.id,i=e.backdropPath;return a.a.createElement(a.a.Fragment,null,a.a.createElement(H,{bgUrl:"https://image.tmdb.org/t/p/original".concat(i)}),a.a.createElement(K,null,a.a.createElement(Q,null,a.a.createElement("span",{role:"img","aria-label":"pizza"},"\ud83c\udf55"),a.a.createElement("h3",null,"tredning now")),a.a.createElement(W,null,n),a.a.createElement(Z,null,a.a.createElement($,{to:t?"/movie/".concat(r):"/tv/".concat(r)},a.a.createElement("input",{type:"button",value:"view detail"})),a.a.createElement(ee,null,a.a.createElement(c.b,{to:"/movie"},a.a.createElement("input",{type:"button",value:"\u25b6 more Movies"})),a.a.createElement(c.b,{to:"/tv"},a.a.createElement("input",{type:"button",value:"\u25b6 more TVs"}))))))};function te(){var e=Object(u.a)(["\n  font-size: 55px;\n  position: absolute;\n  text-shadow: 2.5px 2.5px 10px rgba(128, 128, 128, 1),\n    -3px -3px 10px rgba(128, 128, 128, 1);\n  :first-child {\n    animation: "," 1.6s 0s infinite ease-out;\n  }\n  :nth-child(2) {\n    animation: "," 1.6s -0.8s infinite ease-out;\n  }\n"]);return te=function(){return e},e}function re(){var e=Object(u.a)(["\n  width: 80px;\n  height: 80px;\n  position: relative;\n"]);return re=function(){return e},e}function ae(){var e=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ae=function(){return e},e}function ie(){var e=Object(u.a)(["\n  0%,\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  20% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 0;\n    transform: scale(0);\n  }\n"]);return ie=function(){return e},e}var oe=Object(s.d)(ie()),ce=s.c.div(ae()),le=s.c.div(re()),ue=s.c.div(te(),oe,oe),se=function(){return a.a.createElement(ce,null,a.a.createElement(le,null,a.a.createElement(ue,null,a.a.createElement("span",{role:"img","aria-label":"pizza"},"\ud83c\udf55")),a.a.createElement(ue,null,a.a.createElement("span",{role:"img","aria-label":"popcorn"},"\ud83c\udf7f"))))};function pe(){var e=Object(u.a)(["\n  color: ",";\n"]);return pe=function(){return e},e}function me(){var e=Object(u.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return me=function(){return e},e}var de=s.c.div(me()),fe=s.c.span(pe(),(function(e){return e.color})),ge=function(e){var n=e.text,t=e.color;return a.a.createElement(de,null,a.a.createElement(fe,{color:t},n))},be=t(10);function ve(){var e=Object(u.a)(["\n  width: 100vw;\n  height: calc(100vh - 100px);\n  padding: 30px;\n"]);return ve=function(){return e},e}var he=s.c.div(ve());var xe=function(){var e=N(),n=e.trending,t=e.isLoading,r=e.error,i=n[0];return a.a.createElement(a.a.Fragment,null,a.a.createElement(be.a,null,a.a.createElement("title",null,"Pizza Time")),t?a.a.createElement(se,null):a.a.createElement(he,null,i&&a.a.createElement(a.a.Fragment,null,a.a.createElement(ne,{title:i.title?i.title:i.name,isMovie:"movie"===i.media_type,id:i.id,backdropPath:i.backdrop_path})),r&&a.a.createElement(ge,{color:"#e74c3c",text:r})))},Ee=t(16),we=t(17),ye=t(19),je=t(18);function Oe(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 150px);\n  grid-gap: 25px 18px;\n  @media (max-width: 768px) {\n    grid-auto-flow: column;\n    overflow: scroll;\n  }\n"]);return Oe=function(){return e},e}function _e(){var e=Object(u.a)(["\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  @media (max-width: 768px) {\n    align-self: center;\n  }\n"]);return _e=function(){return e},e}function ke(){var e=Object(u.a)(["\n  width: 97vw;\n  margin: 0 auto;\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n  margin-top: 30px;\n  @media (max-width: 768px) {\n    width: 92vw;\n    height: 35vh;\n    display: grid;\n  }\n"]);return ke=function(){return e},e}var ze=s.c.section(ke()),Se=s.c.h2(_e()),Ie=s.c.div(Oe()),Re=function(e){var n=e.title,t=e.children;return a.a.createElement(ze,null,a.a.createElement(Se,null,n),a.a.createElement(Ie,null,t))};function Le(){var e=Object(u.a)(["\n  opacity: 0.8;\n  font-size: 14px;\n"]);return Le=function(){return e},e}function Me(){var e=Object(u.a)(["\n  font-weight: 600;\n  line-height: 1.2rem;\n"]);return Me=function(){return e},e}function Pe(){var e=Object(u.a)(["\n  margin-bottom: 5px;\n  &:hover {\n    "," {\n      opacity: 0.4;\n      transform: scale(1.05);\n    }\n\n    "," {\n      opacity: 1;\n    }\n  }\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0px 4px 20px -3px rgba(0, 0, 0, 0.3);\n"]);return Pe=function(){return e},e}function Ue(){var e=Object(u.a)(["\n  letter-spacing: 1.3px;\n  position: absolute;\n  bottom: 10px;\n  right: 5px;\n  font-weight: 600;\n  opacity: 0;\n  transition: opacity 0.3s linear;\n"]);return Ue=function(){return e},e}function Te(){var e=Object(u.a)(["\n  width: 100%;\n  height: 210px;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  transition: transform 0.3s linear;\n  @media (max-width: 768px) {\n    width: 150px;\n  }\n"]);return Te=function(){return e},e}function Ce(){var e=Object(u.a)([""]);return Ce=function(){return e},e}var Ae=s.c.section(Ce()),Fe=s.c.figure(Te(),(function(e){return e.bgUrl})),Be=s.c.div(Ue()),Ne=s.c.div(Pe(),Fe,Be),De=s.c.h3(Me()),qe=s.c.span(Le()),Ve=function(e){var n=e.id,r=e.rating,i=e.year,o=e.imgUrl,l=e.title,u=e.isMovie,s=void 0!==u&&u;return a.a.createElement(c.b,{to:s?"/movie/".concat(n):"/tv/".concat(n)},a.a.createElement(Ae,null,a.a.createElement(Ne,null,a.a.createElement(Fe,{bgUrl:o?"https://image.tmdb.org/t/p/w300".concat(o):t(36)}),a.a.createElement(Be,null,r>5?a.a.createElement("span",{role:"img","aria-label":"recommend"},"\ud83d\ude07"):a.a.createElement("span",{role:"img","aria-label":"bad"},"\ud83e\udd2c"),r,"/10")),a.a.createElement(De,null," ",l.length>14?"".concat(l.substring(0,14),"..."):l),a.a.createElement(qe,null,i)))};function Ge(){var e=Object(u.a)([""]);return Ge=function(){return e},e}var Je=s.c.section(Ge()),Xe=function(e){var n=e.nowPlaying,t=e.topRated,r=e.upcoming,i=e.isLoading,o=e.error;return a.a.createElement(a.a.Fragment,null,a.a.createElement(be.a,null,a.a.createElement("title",null,"Movie | Pizza Time")),i?a.a.createElement(se,null):a.a.createElement(Je,null,n&&n.length>0&&a.a.createElement(Re,{title:"Now Playing"},n.map((function(e){return a.a.createElement(Ve,{key:e.id,id:e.id,rating:e.vote_average,year:e.release_date.substring(0,4),imgUrl:e.poster_path,title:e.title,isMovie:!0})}))),t&&t.length>0&&a.a.createElement(Re,{title:"Top Rated"},t.map((function(e){return a.a.createElement(Ve,{key:e.id,id:e.id,rating:e.vote_average,year:e.release_date.substring(0,4),imgUrl:e.poster_path,title:e.title,isMovie:!0})}))),r&&r.length>0&&a.a.createElement(Re,{title:"Upcoming"},r.map((function(e){return a.a.createElement(Ve,{key:e.id,id:e.id,rating:e.vote_average,year:e.release_date.substring(0,4),imgUrl:e.poster_path,title:e.title,isMovie:!0})}))),o&&a.a.createElement(ge,{color:"#f51406",text:o})))},Ye=function(e){Object(ye.a)(t,e);var n=Object(je.a)(t);function t(){var e;Object(Ee.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state={nowPlaying:null,topRated:null,upcoming:null,isLoading:!0,error:null},e}return Object(we.a)(t,[{key:"componentDidMount",value:function(){var e=Object(_.a)(O.a.mark((function e(){var n,t,r,a,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I();case 3:return n=e.sent,t=n.data.results,e.next=7,R();case 7:return r=e.sent,a=r.data.results,e.next=11,L();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:t,topRated:a,upcoming:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"\u274ccannot find movie information\u274c"});case 19:return e.prev=19,this.setState({isLoading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.nowPlaying,t=e.topRated,r=e.upcoming,i=e.isLoading,o=e.error;return a.a.createElement(Xe,{nowPlaying:n,topRated:t,upcoming:r,isLoading:i,error:o})}}]),t}(a.a.Component);function He(){var e=Object(u.a)([""]);return He=function(){return e},e}var Ke=s.c.section(He()),Qe=function(e){var n=e.onTheAir,t=e.topRated,r=e.popular,i=e.isLoading,o=e.error;return a.a.createElement(a.a.Fragment,null,a.a.createElement(be.a,null,a.a.createElement("title",null,"TV | Pizza Time")),i?a.a.createElement(se,null):a.a.createElement(Ke,null,n&&n.length>0&&a.a.createElement(Re,{title:"On the Air"},n.map((function(e){return a.a.createElement(Ve,{key:e.id,id:e.id,rating:e.vote_average,year:e.first_air_date.substring(0,4),imgUrl:e.poster_path,title:e.name,isMovie:!1})}))),t&&t.length>0&&a.a.createElement(Re,{title:"Top Rated"},t.map((function(e){return a.a.createElement(Ve,{key:e.id,id:e.id,rating:e.vote_average,year:e.first_air_date.substring(0,4),imgUrl:e.poster_path,title:e.name,isMovie:!1})}))),r&&r.length>0&&a.a.createElement(Re,{title:"Popular"},r.map((function(e){return a.a.createElement(Ve,{key:e.id,id:e.id,rating:e.vote_average,year:e.first_air_date.substring(0,4),imgUrl:e.poster_path,title:e.name,isMovie:!1})}))),o&&a.a.createElement(ge,{color:"#f51406",text:o})))},We=function(e){Object(ye.a)(t,e);var n=Object(je.a)(t);function t(){var e;Object(Ee.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state={onTheAir:null,topRated:null,popular:null,isLoading:!0,error:null},e}return Object(we.a)(t,[{key:"componentDidMount",value:function(){var e=Object(_.a)(O.a.mark((function e(){var n,t,r,a,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:return n=e.sent,t=n.data.results,e.next=7,T();case 7:return r=e.sent,a=r.data.results,e.next=11,C();case 11:i=e.sent,o=i.data.results,this.setState({onTheAir:t,topRated:a,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"\u274ccannot find tv show information\u274c"});case 19:return e.prev=19,this.setState({isLoading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.onTheAir,t=e.topRated,r=e.popular,i=e.isLoading,o=e.error;return a.a.createElement(Qe,{onTheAir:n,topRated:t,popular:r,isLoading:i,error:o})}}]),t}(a.a.Component);function Ze(){var e=Object(u.a)(["\n  all: unset;\n  margin-left: 20px;\n  background-color: rgba(245, 20, 6, 0.8);\n  color: #f0e2dc;\n  border-radius: 7px;\n  padding: 10px 15px;\n  box-shadow: 0px 4px 20px -3px rgba(0, 0, 0, 0.35);\n  transition: transform 1s linear;\n  :hover {\n    cursor: pointer;\n    background-color: rgba(245, 20, 6, 0.6);\n  }\n  :active {\n    transform: scale(0.8);\n  }\n"]);return Ze=function(){return e},e}function $e(){var e=Object(u.a)(["\n  all: unset;\n  width: 300px;\n  border-bottom: 1px solid #f0e2dc;\n  padding: 10px;\n  :focus {\n    border-bottom: 1px solid #f51406;\n  }\n"]);return $e=function(){return e},e}function en(){var e=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n"]);return en=function(){return e},e}function nn(){var e=Object(u.a)(["\n  width: 97vw;\n  margin: 0 auto;\n  margin-top: 30px;\n"]);return nn=function(){return e},e}var tn=s.c.section(nn()),rn=s.c.form(en()),an=s.c.input($e()),on=s.c.input(Ze()),cn=function(e){var n=e.movieResult,t=e.tvResult,r=e.searchInput,i=e.submittedInput,o=e.isLoading,c=e.error,l=e.handleSubmit,u=e.updateInput;return a.a.createElement(tn,null,a.a.createElement(be.a,null,a.a.createElement("title",null,"Search | Pizza Time")),a.a.createElement(rn,{onSubmit:l},a.a.createElement(an,{placeholder:"search for movies or tv shows",value:r,onChange:u,autoFocus:!0}),a.a.createElement(on,{type:"button",value:"Search",onClick:l})),o?a.a.createElement(a.a.Fragment,null,a.a.createElement(se,null),a.a.createElement(be.a,null,a.a.createElement("title",null,"Searching... | Pizza Time"))):a.a.createElement(a.a.Fragment,null,n&&n.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(be.a,null,a.a.createElement("title",null,"Results on ",i," | Pizza Time")),a.a.createElement("h2",null,'Showing results for "',i,'"'),a.a.createElement(Re,{title:"Results on movies"},n.map((function(e){return a.a.createElement(Ve,{key:e.id,id:e.id,rating:e.vote_average,year:e.release_date?e.release_date.substring(0,4):"",imgUrl:e.poster_path,title:e.title,isMovie:!0})})))),t&&t.length>0&&a.a.createElement(Re,{title:"Results on tv shows"},t.map((function(e){return a.a.createElement(Ve,{key:e.id,id:e.id,rating:e.vote_average,year:e.first_air_date?e.first_air_date.substring(0,4):"",imgUrl:e.poster_path,title:e.name,isMovie:!1})}))),c&&a.a.createElement(ge,{color:"#e74c3c",text:c}),t&&n&&0===t.length&&0===n.length&&a.a.createElement(ge,{text:"Nothing found",color:"rgba(240, 226, 220, 0.5)"})))},ln=function(e){Object(ye.a)(t,e);var n=Object(je.a)(t);function t(){var e;Object(Ee.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).state={movieResult:null,tvResult:null,searchInput:"",submittedInput:"",isLoading:!1,error:null},e.handleSubmit=function(n){n.preventDefault();var t=e.state.searchInput;e.setState({submittedInput:t}),""!==t&&e.searchByInput()},e.updateInput=function(n){var t=n.target.value;e.setState({searchInput:t})},e.searchByInput=Object(_.a)(O.a.mark((function n(){var t,r,a,i,o;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.state.searchInput,e.setState({isLoading:!0}),n.prev=2,n.next=5,P(t);case 5:return r=n.sent,a=r.data.results,n.next=9,F(t);case 9:i=n.sent,o=i.data.results,e.setState({movieResult:a,tvResult:o}),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(2),e.setState({error:"\u274ccannot find results"});case 17:return n.prev=17,e.setState({isLoading:!1}),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[2,14,17,20]])}))),e}return Object(we.a)(t,[{key:"render",value:function(){var e=this.state,n=e.movieResult,t=e.tvResult,r=e.searchInput,i=e.submittedInput,o=e.isLoading,c=e.error;return a.a.createElement(cn,{movieResult:n,tvResult:t,searchInput:r,submittedInput:i,isLoading:o,error:c,handleSubmit:this.handleSubmit,updateInput:this.updateInput})}}]),t}(a.a.Component);function un(){var e=Object(u.a)(["\n  font-size: 18px;\n  margin-top: 15px;\n  width: 70%;\n  line-height: 1.5rem;\n  @media (max-width: 768px) {\n    width: 100%;\n    margin: 15px auto;\n    height: 120px;\n    overflow: scroll;\n  }\n"]);return un=function(){return e},e}function sn(){var e=Object(u.a)(["\n  margin-bottom: 70px;\n  span {\n    font-size: 0.95rem;\n    text-transform: uppercase;\n  }\n  @media (max-width: 768px) {\n    width: 70%;\n    margin-bottom: 20px;\n  }\n"]);return sn=function(){return e},e}function pn(){var e=Object(u.a)(["\n  margin-right: 10px;\n"]);return pn=function(){return e},e}function mn(){var e=Object(u.a)(["\n  display: flex;\n  margin-bottom: 30px;\n"]);return mn=function(){return e},e}function dn(){var e=Object(u.a)(["\n  display: flex;\n  li {\n    margin-right: 5px;\n  }\n  opacity: 0.8;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n"]);return dn=function(){return e},e}function fn(){var e=Object(u.a)(["\n  font-weight: 600;\n  font-size: 35px;\n  margin-bottom: 15px;\n"]);return fn=function(){return e},e}function gn(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  @media (max-width: 768px) {\n    margin-top: 20px;\n    align-items: center;\n  }\n"]);return gn=function(){return e},e}function bn(){var e=Object(u.a)(["\n  justify-self: end;\n  align-self: center;\n  @media (max-width: 768px) {\n    justify-self: center;\n  }\n"]);return bn=function(){return e},e}function vn(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1.8fr;\n  column-gap: 100px;\n  @media (max-width: 768px) {\n    grid-auto-flow: column;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 0.6fr;\n  }\n"]);return vn=function(){return e},e}function hn(){var e=Object(u.a)(["\n  z-index: 1;\n  width: 100%;\n  position: relative;\n  margin-bottom: 20px;\n"]);return hn=function(){return e},e}function xn(){var e=Object(u.a)(["\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  opacity: 0.3;\n  filter: blur(5px);\n  z-index: 0;\n"]);return xn=function(){return e},e}var En=s.c.div(xn(),(function(e){return e.bgUrl})),wn=s.c.div(hn()),yn=s.c.div(vn()),jn=s.c.img(bn()),On=s.c.div(gn()),_n=s.c.h2(fn()),kn=s.c.ul(dn()),zn=s.c.ul(mn()),Sn=s.c.li(pn()),In=s.c.div(sn()),Rn=s.c.p(un()),Ln=function(e){var n=e.backdropPath,r=e.poster_path,i=e.original_title,o=e.original_name,c=e.genres,l=e.release_date,u=e.first_air_date,s=e.runtime,p=e.episode_run_time,m=e.vote_average,d=e.imdb_id,f=e.overview;return a.a.createElement(a.a.Fragment,null,a.a.createElement(En,{bgUrl:"https://image.tmdb.org/t/p/original".concat(n)}),a.a.createElement(wn,null,a.a.createElement(yn,null,a.a.createElement(jn,{src:r?"https://image.tmdb.org/t/p/w300".concat(r):t(36),alt:"poster for ".concat(i||o),title:i||o}),a.a.createElement(On,null,a.a.createElement(_n,null,i||o),a.a.createElement(kn,null,c?c.map((function(e,n){return a.a.createElement("li",{key:n},0===n?e.name:" | ".concat(e.name))})):null),a.a.createElement(zn,null,a.a.createElement(Sn,null,l?l.substring(0,4):u.substring(0,4)),a.a.createElement(Sn,null,s||p[0],"\xa0min"),a.a.createElement(Sn,null,m&&m>5?a.a.createElement("span",{role:"img","aria-label":"good"},"\ud83d\ude07"):a.a.createElement("span",{role:"img","aria-label":"good"},"\ud83e\udd2c"),m," / 10"),a.a.createElement("div",null,d?a.a.createElement("a",{href:"https://www.imdb.com/title/".concat(d),target:"_blank",rel:"noopener noreferrer"},a.a.createElement(Sn,null,a.a.createElement("img",{src:"https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png",width:"40px",alt:"IMDB logo",title:"find on IMDB"}))):null)),a.a.createElement(In,null,a.a.createElement("span",null,"Summary"),a.a.createElement(Rn,null,f))))))};var Mn=function(){var e=Object(l.h)().pathname,n=Object(l.i)().id,t=Object(l.g)().push,a=Object(r.useState)(!0),i=Object(k.a)(a,2),o=i[0],c=i[1],u=Object(r.useState)([]),s=Object(k.a)(u,2),p=s[0],m=s[1],d=Object(r.useState)(null),f=Object(k.a)(d,2),g=f[0],b=f[1],v=Object(r.useState)(e.includes("/movie/")),h=Object(k.a)(v,1)[0],x=function(){var e=Object(_.a)(O.a.mark((function e(){var r,a,i,o,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=parseInt(n),!isNaN(r)){e.next=3;break}return e.abrupt("return",t("/"));case 3:if(e.prev=3,!h){e.next=12;break}return e.next=7,M(r);case 7:a=e.sent,i=a.data,m(i),e.next=17;break;case 12:return e.next=14,A(r);case 14:o=e.sent,l=o.data,m(l);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(3),b(e.t0);case 22:return e.prev=22,c(!1),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[3,19,22,25]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){x()}),[]),{isLoading:o,result:p,error:g}},Pn=t(45);function Un(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: minmax(1fr, 260px), 15px;\n  margin-right: 30px;\n  iframe,\n  img {\n    margin-bottom: 10px;\n    align-self: end;\n  }\n  span {\n    text-align: center;\n    font-size: 1rem;\n    text-transform: none;\n    letter-spacing: 0.8px;\n    align-self: end;\n  }\n  a {\n    :hover {\n      text-decoration: underline;\n    }\n  }\n"]);return Un=function(){return e},e}function Tn(){var e=Object(u.a)(["\n  display: flex;\n"]);return Tn=function(){return e},e}function Cn(){var e=Object(u.a)(["\n  height: 100%;\n  padding: 5px 20px;\n  background-color: rgba(33, 33, 33, 0.7);\n  box-shadow: 0px 4px 17px -6px rgba(0, 0, 0, 0.6);\n  align-self: center;\n  display: grid;\n  grid-auto-rows: 1fr;\n  align-items: center;\n  overflow: scroll;\n"]);return Cn=function(){return e},e}function An(){var e=Object(u.a)(["\n  all: unset;\n  text-align: center;\n  font-size: 1.2rem;\n  text-transform: capitalize;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  :hover {\n    border-bottom: 2px solid #f51406;\n    background-color: rgba(33, 33, 33, 0.7);\n  }\n  transition: border-bottom 0.37s ease-in;\n  width: 100%;\n  padding: 20px 0;\n  line-height: 1.5rem;\n"]);return An=function(){return e},e}function Fn(){var e=Object(u.a)(["\n  height: 100%;\n  .current {\n    border-bottom: 2px solid #f51406;\n    text-shadow: 2.5px 2.5px 10px rgba(128, 128, 128, 1),\n      -3px -3px 10px rgba(128, 128, 128, 1);\n    background-color: rgba(33, 33, 33, 0.7);\n  }\n  .notCurrent {\n    border-bottom: 2px solid transparent;\n  }\n  display: grid;\n  grid-template-columns:\n    minmax(min-content, 1fr)\n    minmax(min-content, 1fr)\n    minmax(min-content, 1fr);\n  background-color: rgba(60, 63, 66, 0.8);\n  border-bottom: 2px solid transparent;\n  transition: border-bottom 0.37s ease-in, text-shadow 0.35s ease-in;\n  box-shadow: 0px 4px 17px -6px rgba(0, 0, 0, 0.6);\n"]);return Fn=function(){return e},e}function Bn(){var e=Object(u.a)(["\n  position: relative;\n  z-index: 1;\n  width: 80%;\n  display: grid;\n  grid-template-rows: 0.5fr 4.5fr;\n  align-items: center;\n  margin-bottom: 30px;\n  @media (max-width: 768px) {\n    width: 95%;\n    height: 40vh;\n    grid-template-rows: 1fr 4fr;\n  }\n"]);return Bn=function(){return e},e}function Nn(){var e=Object(u.a)(["\n  height: 80%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 3fr 2fr;\n  justify-items: center;\n"]);return Nn=function(){return e},e}function Dn(){var e=Object(u.a)(["\n  width: 100vw;\n  height: calc(100vh - 60px);\n  padding: 30px;\n  /* overflow: hidden; */\n"]);return Dn=function(){return e},e}var qn=s.c.div(Dn()),Vn=s.c.section(Nn()),Gn=s.c.section(Bn()),Jn=s.c.div(Fn()),Xn=s.c.input(An()),Yn=s.c.div(Cn()),Hn=s.c.div(Tn()),Kn=s.c.div(Un());var Qn=function(){var e=Mn(),n=e.result,i=e.isLoading,o=e.error,c=[{tab:"featured videos",content:null},{tab:"production companies",content:null},{tab:"production countries",content:null},{tab:"seasons",content:null}];i||(n.videos?c[0].content=n.videos.results:c[0].content=null,n.production_companies?c[1].content=n.production_companies:c[1].content=null,n.production_countries?c[2].content=n.production_countries:c[2].content=null,n.seasons?c[3].content=n.seasons:c[3].content=null);var l=c.filter((function(e){return null!==e.cotent?e.content:null})),u=function(e,n){var t=Object(r.useState)(e),a=Object(k.a)(t,2),i=a[0],o=a[1];return{currentItem:n[i],changeItem:o}}(0,l),s=u.currentItem,p=u.changeItem;if(!i){var m=document.querySelector('input[value="'.concat(s.tab,'"]')),d=document.querySelectorAll('input[type="button"]');null!==m&&d.forEach((function(e){return e!==m?e.classList.add("notCurrent")||e.classList.replace("current","notCurrent"):e.classList.add("current")||e.classList.replace("notCurrent","current")}))}return i?a.a.createElement(se,null):a.a.createElement(qn,null,n&&a.a.createElement(a.a.Fragment,null,a.a.createElement(be.a,null,a.a.createElement("title",null,n.original_title?n.original_title:n.original_name," ","| Pizza Time")),a.a.createElement(Vn,null,a.a.createElement(Ln,{backdropPath:n.backdrop_path,poster_path:n.poster_path,original_title:n.original_title,original_name:n.original_name,genres:n.genres,release_date:n.release_date,first_air_date:n.first_air_date,runtime:n.runtime,episode_run_time:n.episode_run_time,vote_average:n.vote_average,imdb_id:n.imdb_id,overview:n.overview}),a.a.createElement(Gn,null,a.a.createElement(Jn,null,l&&l.map((function(e,n){return a.a.createElement(Xn,{key:n,type:"button",onClick:function(){return p(n)},value:e.tab,className:0===n?"current":null})}))),a.a.createElement(Yn,null,"featured videos"===s.tab&&a.a.createElement(Hn,null,s.content?s.content.slice(0,3).map((function(e,n){return a.a.createElement(Kn,{key:n},a.a.createElement("iframe",{src:"https://www.youtube.com/embed/".concat(e.key),width:"260px",height:"180px",title:e.name}),a.a.createElement("a",{href:"https://www.youtube.com/watch?v=".concat(e.key)},a.a.createElement("span",null,e.name.length>20?"".concat(e.name.substring(0,23)," ..."):e.name)))})):null),"production companies"===s.tab&&a.a.createElement(Hn,null,s.content?s.content.slice(0,3).map((function(e,n){return a.a.createElement(Kn,{key:n},a.a.createElement("img",{src:e.logo_path?"https://image.tmdb.org/t/p/w200".concat(e.logo_path):t(78),alt:e.name,title:e.name}),a.a.createElement("span",null,e.name))})):null),"production countries"===s.tab&&a.a.createElement(Hn,null,s.content?s.content.slice(0,3).map((function(e,n){return a.a.createElement(Kn,{key:n},a.a.createElement(Pn.a,{countryCode:e.iso_3166_1,svg:!0,style:{width:"260px",height:"140px"},title:e.iso_3166_1}),a.a.createElement("span",null,e.name))})):null),"seasons"===s.tab&&a.a.createElement(Hn,null,s.content?s.content.map((function(e,n){return a.a.createElement(Kn,{key:n},a.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),height:"180px",alt:e.name,title:e.name}),a.a.createElement("span",null,e.name))})):null)))),o&&a.a.createElement(ge,{color:"#e74c3c",text:o})))},Wn=function(){return a.a.createElement(c.a,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null),a.a.createElement(l.d,null,a.a.createElement(l.b,{path:"/",exact:!0,component:xe}),a.a.createElement(l.b,{path:"/movie",exact:!0,component:Ye}),a.a.createElement(l.b,{path:"/tv",exact:!0,component:We}),a.a.createElement(l.b,{path:"/search",component:ln}),a.a.createElement(l.b,{path:"/movie/:id",component:Qn}),a.a.createElement(l.b,{path:"/tv/:id",component:Qn}),a.a.createElement(l.a,{from:"*",to:"/"}))))},Zn=t(46);function $n(){var e=Object(u.a)(["\n",";\na{\n    text-decoration: none;\n    color: inherit;\n  }\n  *{\n    box-sizing: border-box;\n  }\n  body{\n    font-family: 'Raleway', sans-serif;\n    font-size: 16px;\n    background-color: #3C3F42;\n    color: #f0E2dc;\n  }\n"]);return $n=function(){return e},e}var et=Object(s.a)($n(),Zn.a),nt=t(22),tt=t(47);nt.b.add(tt.a);var rt=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(Wn,null),a.a.createElement(et,null))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(rt,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.e29f477c.chunk.js.map