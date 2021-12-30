(this["webpackJsonpcorona-final-proj"]=this["webpackJsonpcorona-final-proj"]||[]).push([[0],{49:function(n,e,t){},75:function(n,e,t){"use strict";t.r(e);var a,i,c,r,o,d,l,s,b,u,j,f,h,x,g,O,m,p=t(2),v=t.n(p),y=t(36),w=t.n(y),D=(t(49),t(4)),k=t(3),C=t(37),z={variable:{blue:"#2962ff","blue-light":"#768fff","blue-dark":"#0039cb",gray:"#eceff1","gray-dark":"#babdbe",red:"#ff1744","red-light":"#ff616f","red-dark":"#c4001d",white:"#ffffff",black:"000"}},S={family:{base:"'Nanum Gothic', sans-serif"},size:{sm:"12px",md:"18px",lg:"20px",xl:"24px"},weight:{light:400,bold:700,"extra-bold":800}},A=Object(k.createGlobalStyle)(a||(a=Object(D.a)(["\n    ",";\n    \n    /* Additional Customizing reset CSS */\n    * {\n        margin: 0;\n        font-family: ",";\n        box-sizing: border-box;\n    }\n\n    html {\n        font-family: ",";\n        font-size: 16px;\n    }\n\n    body {\n        font-family: ",";\n        color: ",";\n    }\n\n    h1 {\n        margin: 0;\n    }\n\n    a {\n        color: inherit;\n        text-decoration: none;\n    }\n\n    button,\n    input,\n    select,\n    textarea {\n        background-color: transparent;\n        border: 0;\n    }\n\n    button:focus,\n    input:focus,\n    select:focus,\n    textarea:focus {\n        outline: none;\n        box-shadow: none;\n    }\n\n    a,\n    button {\n        cursor: pointer;\n    }\n\n    button {\n        padding: 0;\n    }\n\n    ul,\n    ol {\n        padding-left: 0;\n        list-style: none;\n    }\n    "])),C.normalize,S.family.base,S.family.base,S.family.base,z.variable.black),L=t(16),I=t.n(L),N=t(21),E=t(12),M=t(22),G=t.n(M),R=function(n){return"string"===typeof n?parseInt(n)<10?"0".concat(n):n:n<10?"0".concat(n):n.toString()},T=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new Date;e.setDate(e.getDate()-n);var t=e.toLocaleDateString();return t.split(".").map((function(n){return R(n.trim())})).join("")},U=T(),q=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U,t={baseURL:"/api",params:{serviceKey:"Pv8Jnb/3kJj6dJI0EM0Yq85NOSBmcDiXN5WNIcuUcrGGliYV34oMdCkMF7QoCbO5XLZnDiX3zjt23O0pClIGhA==",pageNo:1,numOfRows:10,startCreateDt:n,endCreateDt:e}};return G.a.create(t)},F=q(),J=q(T(6)),P=function(){var n=Object(p.useState)({}),e=Object(E.a)(n,2),t=e[0],a=e[1],i=function(){var n=Object(N.a)(I.a.mark((function n(){var e,t,i,c,r;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Promise.all([F.get("/gen-age"),J.get("/sido")]);case 3:e=n.sent,t=e.map((function(n){return n.data})),i=Object(E.a)(t,2),c=i[0],r=i[1],a({genAgeData:c,sidoData:r}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return Object(p.useEffect)((function(){i()}),[]),t},B={enableHighAccuracy:!0,timeout:5e4,maximumAge:3e5},_=function(n,e){navigator.geolocation?navigator.geolocation.getCurrentPosition(n,e,B):alert("Geolocation is not supported for this Browser/OS.")},K=function(n){var e=n.coords,t={baseURL:"https://dapi.kakao.com",params:{x:e.longitude,y:e.latitude},headers:{Authorization:"KakaoAK ".concat("1ce27555118612c1006a57ea28edfe8a")}};return G.a.create(t)},V=function(){var n=Object(p.useState)([]),e=Object(E.a)(n,2),t=e[0],a=e[1],i=function(){var n=Object(N.a)(I.a.mark((function n(e){var t,i,c,r;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=K(e),n.next=3,t.get("/v2/local/geo/coord2address.json");case 3:i=n.sent,c=i.data.documents,r=c[0].address.region_1depth_name,a(r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(n){switch(n.code){case n.PERMISSION_DENIED:alert("User denied the request for Geolocation.");break;case n.POSITION_UNAVAILABLE:alert("Location information is unavailable.");break;case n.TIMEOUT:alert("The request to get user location timed out.");break;default:alert("An unknown error occurred.")}};return Object(p.useEffect)((function(){_(i,c)}),[]),t},W=function(n,e){var t=Object(p.useState)({}),a=Object(E.a)(t,2),i=a[0],c=a[1];return Object(p.useEffect)((function(){!function(){if(n&&e){var t=n.filter((function(n){return e.includes(n.gubun)}));c(t)}}()}),[n,e]),i},X=768,Y=1200,H={gutter:20,columns:{sm:4,md:12,lg:12},margin:{sm:5,md:30},unit:{lg:75},"max-container-size":{md:960,lg:1140},device:{"above-tablet":"@media screen and (min-width: ".concat(X,"px)"),"above-desktop":"@media screen and (min-width: ".concat(Y,"px)")},range:{"sm-only":"\n      @media screen and (min-width: ".concat(X,"px) {\n        display: none !important;\n      }\n    "),"md-only":"\n      @media screen and (max-width: ".concat(X-1,"px) and (min-width: ").concat(Y,"px) {\n        display: none !important;\n      }\n    "),"lg-only":"\n      @media screen and (max-width: ".concat(Y-1,"px) {\n        display: none !important;\n      }\n    "),"sm-hidden":"\n      @media screen and (max-width: ".concat(X-1,"px) {\n        display: none !important;\n      }\n    "),"md-hidden":"\n      @media screen and (min-width: ".concat(X,"px) and (max-width: ").concat(Y-1,"px) {\n        display: none !important;\n      }\n    "),"lg-hidden":"\n      @media screen and (min-width: ".concat(Y,"px) {\n        display: none !important;\n      }\n    ")}},Q={padding:{sm:10,lg:20}},Z=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"center",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"center",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"row";return"\n        display: flex;\n        flex-direction: ".concat(t,";\n        justify-content: ").concat(n,";\n        align-items: ").concat(e,";\n    ")},$=t(1),nn=k.default.div(i||(i=Object(D.a)(["\n  ","\n\n  ","\n\n    ","\n"])),(function(n){return n.sm?"width: ".concat(n.sm/H.columns.sm*100,"%; "):null}),(function(n){return n.md?"".concat(H.device["above-tablet"]," {\n                width: ").concat(n.md/H.columns.md*100,"%; \n            } "):null}),(function(n){return n.lg?"".concat(H.device["above-desktop"]," {\n        width: ").concat((H.gutter+H.unit.lg)*n.lg,"px;\n    }"):null})),en=function(n){var e=n.sm,t=n.md,a=n.lg;return e||t||a?Object($.jsx)(nn,{sm:e,md:t,lg:a,children:n.children}):null},tn=k.default.div(c||(c=Object(D.a)(["\n  width: 100%;\n  padding: 0;\n  margin: 0 auto;\n\n  "," {\n    max-width: ","px;\n    padding: 0 ","px;\n  }\n\n  "," {\n    max-width: ","px;\n    padding: 0;\n  }\n"])),H.device["above-tablet"],H["max-container-size"].md,H.margin.md,H.device["above-desktop"],H["max-container-size"].lg),an=function(n){var e=n.children;return Object($.jsx)(tn,{children:e})},cn=k.default.div(r||(r=Object(D.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),rn=function(n){var e=n.children;return Object($.jsx)(cn,{children:e})},on=k.default.header(o||(o=Object(D.a)(["\n  height: 60px;\n  background-color: ",";\n  ","\n"])),z.variable["blue-dark"],Z()),dn=k.default.h1(d||(d=Object(D.a)(["\n  display: inline-block;\n  color: ",";\n  font-size: ",";\n  font-weight: 600;\n  margin-left: ","px;\n\n  "," {\n    font-size: ",";\n  }\n"])),z.variable.white,S.size.md,Q.padding.lg,H.device["above-tablet"],S.size.xl),ln=function(){return Object($.jsx)(on,{children:Object($.jsx)(an,{children:Object($.jsx)(rn,{children:Object($.jsx)(en,{sm:4,children:Object($.jsx)(dn,{children:"\ucf54\ub85c\ub098\ubc14\uc774\ub7ec\uc2a4\uac10\uc5fc\uc99d-19(COVID-19)"})})})})})},sn=k.default.p(l||(l=Object(D.a)(["\n  display: inline-block;\n  width: 100%;\n  font-size: ",";\n  margin-bottom: 15px;\n"])),S.size.sm),bn=function(n){var e=n.stdDay,t=n.unit;return Object($.jsxs)(sn,{children:["(","".concat(e||"-"," \uae30\uc900").concat(t&&", \ub2e8\uc704: ".concat(t)),")"]})},un=k.default.section(s||(s=Object(D.a)(["\n  width: 100%;\n  padding: 0 ","px;\n  margin-bottom: 50px;\n"])),Q.padding.lg),jn=k.default.h2(b||(b=Object(D.a)(["\n  font-size: ",";\n  margin-bottom: 5px;\n\n  "," {\n    font-size: ",";\n  }\n"])),S.size.md,H.device["above-tablet"],S.size.lg),fn=function(n){var e=n.title,t=n.children;return Object($.jsxs)(un,{children:[Object($.jsx)(jn,{children:e}),t]})},hn=Object(k.keyframes)(u||(u=Object(D.a)(["\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n"]))),xn=k.default.div(j||(j=Object(D.a)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 7px solid ",";\n  border-top: 7px solid ",";\n  animation: "," 800ms infinite linear;\n"])),z.variable["blue-dark"],z.variable.white,hn),gn=function(){return Object($.jsx)(xn,{})},On=k.default.div(f||(f=Object(D.a)(["\n  width: 100%;\n  height: 150px;\n  ","\n  background-color: ",";\n  border-radius: 5px;\n"])),Z("center","center","column"),z.variable.gray),mn=k.default.p(h||(h=Object(D.a)(["\n  font-weight: ",";\n  font-size: 34px;\n  margin-bottom: 15px;\n"])),S.weight.bold),pn=k.default.dl(x||(x=Object(D.a)([""]))),vn=k.default.div(g||(g=Object(D.a)(["\n  ","\n  margin-bottom: 5px;\n"])),Z("flex-start")),yn=k.default.dt(O||(O=Object(D.a)(['\n  &:after {\n    content: ":";\n    margin-right: 3px;\n  }\n']))),wn=k.default.dd(m||(m=Object(D.a)(["\n  strong {\n    color: ",";\n  }\n"])),z.variable.red),Dn=function(n){var e,t,a=n.sidoCovidData;return a&&(t=a[0]),Object($.jsxs)(fn,{title:"\uc9c0\uc5ed \ubc1c\uc0dd\ud604\ud669",children:[Object($.jsx)(bn,{stdDay:null===(e=t)||void 0===e?void 0:e.stdDay,unit:"\uba85"}),Object($.jsx)(On,{children:t?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(mn,{children:t.gubun}),Object($.jsxs)(pn,{children:[Object($.jsxs)(vn,{children:[Object($.jsx)(yn,{children:"\ub204\uc801\ud655\uc9c4\uc790"}),Object($.jsx)(wn,{children:t.defCnt.toLocaleString()})]}),Object($.jsxs)(vn,{children:[Object($.jsx)(yn,{children:"\uc2e0\uaddc\ud655\uc9c4\uc790"}),Object($.jsx)(wn,{children:Object($.jsxs)("strong",{children:[t.incDec.toLocaleString()," \u25b2"]})})]})]})]}):Object($.jsx)(gn,{})})]})},kn=t(23),Cn=t(8),zn=t(44);Cn.f.register(Cn.e,Cn.j,Cn.l,Cn.c,zn.a,Cn.p,Cn.q,Cn.h);var Sn,An,Ln,In,Nn,En,Mn,Gn={maintainAspectRatio:!1,plugins:{legend:{position:"top"},datalabels:{display:!0,color:"#000"}}},Rn={width:"100%",height:"100%"},Tn=function(n){var e=n.totalDefCntOfWeekData,t=null===e||void 0===e?void 0:e.map((function(n){var e=new Date(n.createDt);if(isNaN(e.getMonth())||isNaN(e.getDate())){var t=n.createDt.split(" "),a=Object(E.a)(t,2),i=a[0],c=(a[1],i.split("-")),r=Object(E.a)(c,3),o=(r[0],r[1]),d=r[2];return"".concat(o,".").concat(d)}return"".concat(e.getMonth()+1,".").concat(e.getDate())})),a=null===e||void 0===e?void 0:e.map((function(n){return n.incDec})),i={labels:null===t||void 0===t?void 0:t.reverse(),datasets:[{label:"\ud655\uc9c4\uc790 \uc218",data:null===a||void 0===a?void 0:a.reverse(),backgroundColor:"rgba(41, 143, 255, 0.5)"}]};return Object($.jsx)(kn.a,{options:Gn,data:i,style:Rn})},Un=k.default.div(Sn||(Sn=Object(D.a)(["\n  width: 100%;\n  height: 350px;\n  ","\n"])),Z()),qn=function(n){var e=n.weekCovidData,t=null===e||void 0===e?void 0:e.filter((function(n){return"\ud569\uacc4"===n.gubun})),a=e&&e[0].stdDay;return Object($.jsxs)(fn,{title:"\ucd5c\uadfc 7\uc77c \ud655\uc9c4\uc790 \ubc1c\uc0dd \ucd94\uc774",children:[Object($.jsx)(bn,{stdDay:a,unit:"\uba85"}),Object($.jsx)(Un,{children:t?Object($.jsx)(Tn,{totalDefCntOfWeekData:t}):Object($.jsx)(gn,{})})]})},Fn=k.default.div(An||(An=Object(D.a)(["\n  width: 100%;\n  height: 150px;\n  ","\n  background-color: ",";\n  border-radius: 5px;\n"])),Z("center","center","column"),z.variable.gray),Jn=k.default.p(Ln||(Ln=Object(D.a)(["\n  font-weight: ",";\n  font-size: 34px;\n  margin-bottom: 15px;\n"])),S.weight.bold),Pn=k.default.dl(In||(In=Object(D.a)([""]))),Bn=k.default.div(Nn||(Nn=Object(D.a)(["\n  ","\n  margin-bottom: 5px;\n"])),Z("flex-start")),_n=k.default.dt(En||(En=Object(D.a)(['\n  &:after {\n    content: ":";\n    margin-right: 3px;\n  }\n']))),Kn=k.default.dd(Mn||(Mn=Object(D.a)(["\n  strong {\n    color: ",";\n  }\n"])),z.variable.red),Vn=function(n){var e=n.todayCovidData,t=null===e||void 0===e?void 0:e.find((function(n){return"\ud569\uacc4"===n.gubun}));return Object($.jsxs)(fn,{title:"\uc804\uad6d \ubc1c\uc0dd\ud604\ud669",children:[Object($.jsx)(bn,{stdDay:t&&t.stdDay,unit:"\uba85"}),Object($.jsx)(Fn,{children:t?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Jn,{children:"\uc804\uad6d"}),Object($.jsxs)(Pn,{children:[Object($.jsxs)(Bn,{children:[Object($.jsx)(_n,{children:"\ub204\uc801\ud655\uc9c4\uc790"}),Object($.jsx)(Kn,{children:t.defCnt.toLocaleString()})]}),Object($.jsxs)(Bn,{children:[Object($.jsx)(_n,{children:"\uc2e0\uaddc\ud655\uc9c4\uc790"}),Object($.jsx)(Kn,{children:Object($.jsxs)("strong",{children:[t.incDec.toLocaleString()," \u25b2"]})})]})]})]}):Object($.jsx)(gn,{})})]})};Cn.f.register(Cn.a,Cn.p,Cn.q,Cn.h);var Wn,Xn,Yn,Hn,Qn,Zn,$n,ne,ee,te,ae,ie={width:"100%",height:"100%"},ce=function(n){var e=n.genCovidData,t={labels:["\uc5ec\uc131","\ub0a8\uc131"],datasets:[{label:"",data:null===e||void 0===e?void 0:e.map((function(n){return n.confCaseRate})),backgroundColor:["rgba(255, 23, 68, 0.3)","rgba(41, 143, 255, 0.5)"]}]};return Object($.jsx)(kn.b,{data:t,options:{maintainAspectRatio:!1},style:ie})},re=k.default.div(Wn||(Wn=Object(D.a)(["\n  width: 100%;\n  height: 350px;\n  ","\n"])),Z()),oe=function(n){var e,t=n.genAgeCovidData;e=t?null===t||void 0===t?void 0:t.filter((function(n){return"\uc5ec\uc131"===n.gubun||"\ub0a8\uc131"===n.gubun})):void 0;var a=new Date,i="".concat(a.getFullYear(),"\ub144 ").concat(a.getMonth()+1,"\uc6d4 ").concat(a.getDate(),"\uc77c");return Object($.jsxs)(fn,{title:"\uc131\ubcc4 \ud655\uc9c4\uc790 \ud604\ud669",children:[Object($.jsx)(bn,{stdDay:i,unit:"%"}),Object($.jsx)(re,{children:e?Object($.jsx)(ce,{genCovidData:e}):Object($.jsx)(gn,{})})]})},de=k.default.tbody(Xn||(Xn=Object(D.a)(["\n  text-align: center;\n"]))),le=k.default.tr(Yn||(Yn=Object(D.a)([""]))),se=k.default.td(Hn||(Hn=Object(D.a)(["\n  padding: ","px 0;\n  border-bottom: 1px solid ",";\n  font-size: ",";\n\n  &:nth-child(3) {\n    color: ",";\n    font-weight: 700;\n  }\n\n  "," {\n    font-size: ",";\n  }\n"])),Q.padding.sm,z.variable.gray,S.size.sm,z.variable.red,H.device["above-tablet"],S.size.md),be=function(n){var e=n.bodyData;return Object($.jsx)(de,{children:e.map((function(n,e){return Object($.jsxs)(le,{children:[Object($.jsx)(se,{children:n.gubun}),Object($.jsx)(se,{children:n.defCnt.toLocaleString()}),Object($.jsxs)(se,{children:[n.incDec.toLocaleString()," \u25b2"]})]},e)}))})},ue=k.default.thead(Qn||(Qn=Object(D.a)(["\n  background-color: ",";\n  color: ",";\n"])),z.variable["blue-dark"],z.variable.white),je=k.default.tr(Zn||(Zn=Object(D.a)([""]))),fe=k.default.th($n||($n=Object(D.a)(["\n  padding: ","px 0;\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n  font-size: ",";\n  font-weight: 500;\n\n  "," {\n    font-size: ",";\n  }\n"])),Q.padding.sm,z.variable.gray,z.variable.gray,S.size.sm,H.device["above-tablet"],S.size.md),he=function(n){var e=n.headLabels;return Object($.jsx)(ue,{children:Object($.jsx)(je,{children:e.map((function(n,e){return Object($.jsx)(fe,{children:n},e)}))})})},xe=k.default.table(ne||(ne=Object(D.a)(["\n  width: 100%;\n  border-collapse: collapse;\n"]))),ge=function(n){var e=n.sidoCovidDataOfToday,t=null===e||void 0===e?void 0:e.filter((function(n){return"\ud569\uacc4"!==n.gubun})).sort((function(n,e){return n.defCnt>e.defCnt?-1:1}));return t?Object($.jsxs)(xe,{children:[Object($.jsx)(he,{headLabels:["\uc704\uce58","\ub204\uc801\ud655\uc9c4","\uc2e0\uaddc\ud655\uc9c4"]}),Object($.jsx)(be,{bodyData:t})]}):Object($.jsx)(gn,{})},Oe=k.default.div(ee||(ee=Object(D.a)(["\n  width: 100%;\n  min-height: 100vh;\n  ","\n"])),Z()),me=function(n){var e=n.todayCovidData;return Object($.jsxs)(fn,{title:"\uc9c0\uc5ed\ubcc4 \ubc1c\uc0dd \ud604\ud669",children:[Object($.jsx)(bn,{stdDay:e&&e[0].stdDay,unit:"\uba85"}),Object($.jsx)(Oe,{children:e?Object($.jsx)(ge,{sidoCovidDataOfToday:e}):Object($.jsx)(gn,{})})]})},pe=t.p+"static/media/covid19-thumbnail.53727da9.png",ve=t(41),ye=k.default.div(te||(te=Object(D.a)(["\n  width: 100%;\n"]))),we=k.default.main(ae||(ae=Object(D.a)(["\n  margin: 30px 0;\n"]))),De=function(){var n=P(),e=n.genAgeData,t=n.sidoData,a=V(),i=W(t,a),c=null===t||void 0===t?void 0:t.slice(0,19);return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(ve.a,{children:Object($.jsx)("meta",{property:"og:image",content:pe})}),Object($.jsxs)(ye,{children:[Object($.jsx)(ln,{}),Object($.jsx)(we,{children:Object($.jsxs)(an,{children:[Object($.jsxs)(rn,{children:[Object($.jsx)(en,{sm:4,md:6,children:Object($.jsx)(Dn,{sidoCovidData:i})}),Object($.jsx)(en,{sm:4,md:6,children:Object($.jsx)(Vn,{todayCovidData:c})})]}),Object($.jsxs)(rn,{children:[Object($.jsx)(en,{sm:4,md:6,children:Object($.jsx)(qn,{weekCovidData:t})}),Object($.jsx)(en,{sm:4,md:6,children:Object($.jsx)(oe,{genAgeCovidData:e})})]}),Object($.jsx)(rn,{children:Object($.jsx)(en,{sm:4,children:Object($.jsx)(me,{todayCovidData:c})})})]})}),Object($.jsx)(A,{})]})]})};w.a.render(Object($.jsx)(v.a.StrictMode,{children:Object($.jsx)(De,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.5198226c.chunk.js.map