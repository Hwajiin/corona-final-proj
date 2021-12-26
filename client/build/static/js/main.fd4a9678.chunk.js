(this["webpackJsonpcorona-final-proj"]=this["webpackJsonpcorona-final-proj"]||[]).push([[0],{45:function(n,t,e){},68:function(n,t,e){"use strict";e.r(t);var a,i,c,r,o,d,l,s,b,u,j,f,h,x,g,O,m,p=e(2),v=e.n(p),y=e(35),w=e.n(y),D=(e(45),e(4)),k=e(3),C=e(36),z={variable:{blue:"#2962ff","blue-light":"#768fff","blue-dark":"#0039cb",gray:"#eceff1","gray-dark":"#babdbe",red:"#ff1744","red-light":"#ff616f","red-dark":"#c4001d",white:"#ffffff",black:"000"}},S={family:{base:"'Nanum Gothic', sans-serif"},size:{sm:"12px",md:"18px",lg:"20px",xl:"24px"},weight:{light:400,bold:700,"extra-bold":800}},L=Object(k.createGlobalStyle)(a||(a=Object(D.a)(["\n    ",";\n    \n    /* Additional Customizing reset CSS */\n    * {\n        margin: 0;\n        font-family: ",";\n        box-sizing: border-box;\n    }\n\n    html {\n        font-family: ",";\n        font-size: 16px;\n    }\n\n    body {\n        font-family: ",";\n        color: ",";\n    }\n\n    h1 {\n        margin: 0;\n    }\n\n    a {\n        color: inherit;\n        text-decoration: none;\n    }\n\n    button,\n    input,\n    select,\n    textarea {\n        background-color: transparent;\n        border: 0;\n    }\n\n    button:focus,\n    input:focus,\n    select:focus,\n    textarea:focus {\n        outline: none;\n        box-shadow: none;\n    }\n\n    a,\n    button {\n        cursor: pointer;\n    }\n\n    button {\n        padding: 0;\n    }\n\n    ul,\n    ol {\n        padding-left: 0;\n        list-style: none;\n    }\n    "])),C.normalize,S.family.base,S.family.base,S.family.base,z.variable.black),A=e(15),N=e.n(A),E=e(19),M=e(11),G=e(20),I=e.n(G),R=function(n){return"string"===typeof n?parseInt(n)<10?"0".concat(n):n:n<10?"0".concat(n):n.toString()},J=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=new Date;t.setDate(t.getDate()-n);var e=t.toLocaleDateString();return e.split(".").map((function(n){return R(n.trim())})).join("")},F=J(),q=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F,e={baseURL:"/api",params:{serviceKey:"Pv8Jnb/3kJj6dJI0EM0Yq85NOSBmcDiXN5WNIcuUcrGGliYV34oMdCkMF7QoCbO5XLZnDiX3zjt23O0pClIGhA==",pageNo:1,numOfRows:10,startCreateDt:n,endCreateDt:t}};return I.a.create(e)},B=q(),K=q(J(6)),P=function(){var n=Object(p.useState)({}),t=Object(M.a)(n,2),e=t[0],a=t[1],i=function(){var n=Object(E.a)(N.a.mark((function n(){var t,e,i,c,r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Promise.all([B.get("/gen-age"),K.get("/sido")]);case 3:t=n.sent,e=t.map((function(n){return n.data})),i=Object(M.a)(e,2),c=i[0],r=i[1],a({genAgeData:c,sidoData:r}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return Object(p.useEffect)((function(){i()}),[]),e},U={maximumAge:3e5,timeout:1e4},W=function(n,t){navigator.geolocation?navigator.geolocation.getCurrentPosition(n,t,U):console.log("Geolocation is not supported for this Browser/OS.")},X=function(n){var t=n.coords,e={baseURL:"https://dapi.kakao.com",params:{x:t.longitude,y:t.latitude},headers:{Authorization:"KakaoAK ".concat("1ce27555118612c1006a57ea28edfe8a")}};return I.a.create(e)},Y=function(){var n=Object(p.useState)([]),t=Object(M.a)(n,2),e=t[0],a=t[1],i=function(){var n=Object(E.a)(N.a.mark((function n(t){var e,i,c,r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=X(t),n.next=3,e.get("/v2/local/geo/coord2address.json");case 3:i=n.sent,c=i.data.documents,r=c[0].address.region_1depth_name,a(r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),c=function(n){console.log("Error occured. Error code: ".concat(n.code))};return Object(p.useEffect)((function(){W(i,c)}),[]),e},T=function(n,t){var e=Object(p.useState)({}),a=Object(M.a)(e,2),i=a[0],c=a[1];return Object(p.useEffect)((function(){!function(){if(n&&t){var e=n.filter((function(n){return t.includes(n.gubun)}));c(e)}}()}),[n,t]),i},V=768,_=1200,Q={gutter:20,columns:{sm:4,md:12,lg:12},margin:{sm:5,md:30},unit:{lg:75},"max-container-size":{md:960,lg:1140},device:{"above-tablet":"@media screen and (min-width: ".concat(V,"px)"),"above-desktop":"@media screen and (min-width: ".concat(_,"px)")},range:{"sm-only":"\n      @media screen and (min-width: ".concat(V,"px) {\n        display: none !important;\n      }\n    "),"md-only":"\n      @media screen and (max-width: ".concat(V-1,"px) and (min-width: ").concat(_,"px) {\n        display: none !important;\n      }\n    "),"lg-only":"\n      @media screen and (max-width: ".concat(_-1,"px) {\n        display: none !important;\n      }\n    "),"sm-hidden":"\n      @media screen and (max-width: ".concat(V-1,"px) {\n        display: none !important;\n      }\n    "),"md-hidden":"\n      @media screen and (min-width: ".concat(V,"px) and (max-width: ").concat(_-1,"px) {\n        display: none !important;\n      }\n    "),"lg-hidden":"\n      @media screen and (min-width: ".concat(_,"px) {\n        display: none !important;\n      }\n    ")}},Z={padding:{sm:10,lg:20}},H=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"center",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"center",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"row";return"\n        display: flex;\n        flex-direction: ".concat(e,";\n        justify-content: ").concat(n,";\n        align-items: ").concat(t,";\n    ")},$=e(1),nn=k.default.div(i||(i=Object(D.a)(["\n  ","\n\n  ","\n\n    ","\n"])),(function(n){return n.sm?"width: ".concat(n.sm/Q.columns.sm*100,"%; "):null}),(function(n){return n.md?"".concat(Q.device["above-tablet"]," {\n                width: ").concat(n.md/Q.columns.md*100,"%; \n            } "):null}),(function(n){return n.lg?"".concat(Q.device["above-desktop"]," {\n        width: ").concat((Q.gutter+Q.unit.lg)*n.lg,"px;\n    }"):null})),tn=function(n){var t=n.sm,e=n.md,a=n.lg;return t||e||a?Object($.jsx)(nn,{sm:t,md:e,lg:a,children:n.children}):null},en=k.default.div(c||(c=Object(D.a)(["\n  width: 100%;\n  padding: 0;\n  margin: 0 auto;\n\n  "," {\n    max-width: ","px;\n    padding: 0 ","px;\n  }\n\n  "," {\n    max-width: ","px;\n    padding: 0;\n  }\n"])),Q.device["above-tablet"],Q["max-container-size"].md,Q.margin.md,Q.device["above-desktop"],Q["max-container-size"].lg),an=function(n){var t=n.children;return Object($.jsx)(en,{children:t})},cn=k.default.div(r||(r=Object(D.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),rn=function(n){var t=n.children;return Object($.jsx)(cn,{children:t})},on=k.default.header(o||(o=Object(D.a)(["\n  height: 60px;\n  background-color: ",";\n  ","\n"])),z.variable["blue-dark"],H()),dn=k.default.h1(d||(d=Object(D.a)(["\n  display: inline-block;\n  color: ",";\n  font-size: ",";\n  font-weight: 600;\n  margin-left: ","px;\n\n  "," {\n    font-size: ",";\n  }\n"])),z.variable.white,S.size.md,Z.padding.lg,Q.device["above-tablet"],S.size.xl),ln=function(){return Object($.jsx)(on,{children:Object($.jsx)(an,{children:Object($.jsx)(rn,{children:Object($.jsx)(tn,{sm:4,children:Object($.jsx)(dn,{children:"\ucf54\ub85c\ub098\ubc14\uc774\ub7ec\uc2a4\uac10\uc5fc\uc99d-19(COVID-19)"})})})})})},sn=k.default.p(l||(l=Object(D.a)(["\n  display: inline-block;\n  width: 100%;\n  font-size: ",";\n  margin-bottom: 15px;\n"])),S.size.sm),bn=function(n){var t=n.stdDay,e=n.unit;return Object($.jsxs)(sn,{children:["(","".concat(t||"-"," \uae30\uc900").concat(e&&", \ub2e8\uc704: ".concat(e)),")"]})},un=k.default.section(s||(s=Object(D.a)(["\n  width: 100%;\n  padding: 0 ","px;\n  margin-bottom: 50px;\n"])),Z.padding.lg),jn=k.default.h2(b||(b=Object(D.a)(["\n  font-size: ",";\n  margin-bottom: 5px;\n\n  "," {\n    font-size: ",";\n  }\n"])),S.size.md,Q.device["above-tablet"],S.size.lg),fn=function(n){var t=n.title,e=n.children;return Object($.jsxs)(un,{children:[Object($.jsx)(jn,{children:t}),e]})},hn=Object(k.keyframes)(u||(u=Object(D.a)(["\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n"]))),xn=k.default.div(j||(j=Object(D.a)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 7px solid ",";\n  border-top: 7px solid ",";\n  animation: "," 800ms infinite linear;\n"])),z.variable["blue-dark"],z.variable.white,hn),gn=function(){return Object($.jsx)(xn,{})},On=k.default.div(f||(f=Object(D.a)(["\n  width: 100%;\n  height: 150px;\n  ","\n  background-color: ",";\n  border-radius: 5px;\n"])),H("center","center","column"),z.variable.gray),mn=k.default.p(h||(h=Object(D.a)(["\n  font-weight: ",";\n  font-size: 34px;\n  margin-bottom: 15px;\n"])),S.weight.bold),pn=k.default.dl(x||(x=Object(D.a)([""]))),vn=k.default.div(g||(g=Object(D.a)(["\n  ","\n  margin-bottom: 5px;\n"])),H("flex-start")),yn=k.default.dt(O||(O=Object(D.a)(['\n  &:after {\n    content: ":";\n    margin-right: 3px;\n  }\n']))),wn=k.default.dd(m||(m=Object(D.a)(["\n  strong {\n    color: ",";\n  }\n"])),z.variable.red),Dn=function(n){var t,e,a=n.sidoCovidData;return a&&(e=a[0]),Object($.jsxs)(fn,{title:"\uc9c0\uc5ed \ubc1c\uc0dd\ud604\ud669",children:[Object($.jsx)(bn,{stdDay:null===(t=e)||void 0===t?void 0:t.stdDay,unit:"\uba85"}),Object($.jsx)(On,{children:e?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(mn,{children:e.gubun}),Object($.jsxs)(pn,{children:[Object($.jsxs)(vn,{children:[Object($.jsx)(yn,{children:"\ub204\uc801\ud655\uc9c4\uc790"}),Object($.jsx)(wn,{children:e.defCnt.toLocaleString()})]}),Object($.jsxs)(vn,{children:[Object($.jsx)(yn,{children:"\uc2e0\uaddc\ud655\uc9c4\uc790"}),Object($.jsx)(wn,{children:Object($.jsxs)("strong",{children:[e.incDec.toLocaleString()," \u25b2"]})})]})]})]}):Object($.jsx)(gn,{})})]})},kn=e(21),Cn=e(8),zn=e(40);Cn.f.register(Cn.e,Cn.j,Cn.l,Cn.c,zn.a,Cn.p,Cn.q,Cn.h);var Sn,Ln,An,Nn,En,Mn,Gn,In={maintainAspectRatio:!1,plugins:{legend:{position:"top"},datalabels:{display:!0,color:"#000"}}},Rn={width:"100%",height:"100%"},Jn=function(n){var t=n.totalDefCntOfWeekData,e=null===t||void 0===t?void 0:t.map((function(n){var t=new Date(n.createDt);if(isNaN(t.getMonth())||isNaN(t.getDate())){var e=n.createDt.split(" "),a=Object(M.a)(e,2),i=a[0],c=(a[1],i.split("-")),r=Object(M.a)(c,3),o=(r[0],r[1]),d=r[2];return"".concat(o,".").concat(d)}return"".concat(t.getMonth()+1,".").concat(t.getDate())})),a=null===t||void 0===t?void 0:t.map((function(n){return n.incDec})),i={labels:null===e||void 0===e?void 0:e.reverse(),datasets:[{label:"\ud655\uc9c4\uc790 \uc218",data:null===a||void 0===a?void 0:a.reverse(),backgroundColor:"rgba(41, 143, 255, 0.5)"}]};return Object($.jsx)(kn.a,{options:In,data:i,style:Rn})},Fn=k.default.div(Sn||(Sn=Object(D.a)(["\n  width: 100%;\n  height: 350px;\n  ","\n"])),H()),qn=function(n){var t=n.weekCovidData,e=null===t||void 0===t?void 0:t.filter((function(n){return"\ud569\uacc4"===n.gubun})),a=t&&t[0].stdDay;return Object($.jsxs)(fn,{title:"\ucd5c\uadfc 7\uc77c \ud655\uc9c4\uc790 \ubc1c\uc0dd \ucd94\uc774",children:[Object($.jsx)(bn,{stdDay:a,unit:"\uba85"}),Object($.jsx)(Fn,{children:e?Object($.jsx)(Jn,{totalDefCntOfWeekData:e}):Object($.jsx)(gn,{})})]})},Bn=k.default.div(Ln||(Ln=Object(D.a)(["\n  width: 100%;\n  height: 150px;\n  ","\n  background-color: ",";\n  border-radius: 5px;\n"])),H("center","center","column"),z.variable.gray),Kn=k.default.p(An||(An=Object(D.a)(["\n  font-weight: ",";\n  font-size: 34px;\n  margin-bottom: 15px;\n"])),S.weight.bold),Pn=k.default.dl(Nn||(Nn=Object(D.a)([""]))),Un=k.default.div(En||(En=Object(D.a)(["\n  ","\n  margin-bottom: 5px;\n"])),H("flex-start")),Wn=k.default.dt(Mn||(Mn=Object(D.a)(['\n  &:after {\n    content: ":";\n    margin-right: 3px;\n  }\n']))),Xn=k.default.dd(Gn||(Gn=Object(D.a)(["\n  strong {\n    color: ",";\n  }\n"])),z.variable.red),Yn=function(n){var t=n.todayCovidData,e=null===t||void 0===t?void 0:t.find((function(n){return"\ud569\uacc4"===n.gubun}));return Object($.jsxs)(fn,{title:"\uc804\uad6d \ubc1c\uc0dd\ud604\ud669",children:[Object($.jsx)(bn,{stdDay:e&&e.stdDay,unit:"\uba85"}),Object($.jsx)(Bn,{children:e?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Kn,{children:"\uc804\uad6d"}),Object($.jsxs)(Pn,{children:[Object($.jsxs)(Un,{children:[Object($.jsx)(Wn,{children:"\ub204\uc801\ud655\uc9c4\uc790"}),Object($.jsx)(Xn,{children:e.defCnt.toLocaleString()})]}),Object($.jsxs)(Un,{children:[Object($.jsx)(Wn,{children:"\uc2e0\uaddc\ud655\uc9c4\uc790"}),Object($.jsx)(Xn,{children:Object($.jsxs)("strong",{children:[e.incDec.toLocaleString()," \u25b2"]})})]})]})]}):Object($.jsx)(gn,{})})]})};Cn.f.register(Cn.a,Cn.p,Cn.q,Cn.h);var Tn,Vn,_n,Qn,Zn,Hn,$n,nt,tt,et,at,it={width:"100%",height:"100%"},ct=function(n){var t=n.genCovidData,e={labels:["\uc5ec\uc131","\ub0a8\uc131"],datasets:[{label:"",data:null===t||void 0===t?void 0:t.map((function(n){return n.confCaseRate})),backgroundColor:["rgba(255, 23, 68, 0.3)","rgba(41, 143, 255, 0.5)"]}]};return Object($.jsx)(kn.b,{data:e,options:{maintainAspectRatio:!1},style:it})},rt=k.default.div(Tn||(Tn=Object(D.a)(["\n  width: 100%;\n  height: 350px;\n  ","\n"])),H()),ot=function(n){var t=n.genAgeCovidData,e=null===t||void 0===t?void 0:t.filter((function(n){return"\uc5ec\uc131"===n.gubun||"\ub0a8\uc131"===n.gubun})),a=new Date,i="".concat(a.getFullYear(),"\ub144 ").concat(a.getMonth()+1,"\uc6d4 ").concat(a.getDate(),"\uc77c");return Object($.jsxs)(fn,{title:"\uc131\ubcc4 \ud655\uc9c4\uc790 \ud604\ud669",children:[Object($.jsx)(bn,{stdDay:i,unit:"%"}),Object($.jsx)(rt,{children:e?Object($.jsx)(ct,{genCovidData:e}):Object($.jsx)(gn,{})})]})},dt=k.default.tbody(Vn||(Vn=Object(D.a)(["\n  text-align: center;\n"]))),lt=k.default.tr(_n||(_n=Object(D.a)([""]))),st=k.default.td(Qn||(Qn=Object(D.a)(["\n  padding: ","px 0;\n  border-bottom: 1px solid ",";\n  font-size: ",";\n\n  &:nth-child(3) {\n    color: ",";\n    font-weight: 700;\n  }\n\n  "," {\n    font-size: ",";\n  }\n"])),Z.padding.sm,z.variable.gray,S.size.sm,z.variable.red,Q.device["above-tablet"],S.size.md),bt=function(n){var t=n.bodyData;return Object($.jsx)(dt,{children:t.map((function(n,t){return Object($.jsxs)(lt,{children:[Object($.jsx)(st,{children:n.gubun}),Object($.jsx)(st,{children:n.defCnt.toLocaleString()}),Object($.jsxs)(st,{children:[n.incDec.toLocaleString()," \u25b2"]})]},t)}))})},ut=k.default.thead(Zn||(Zn=Object(D.a)(["\n  background-color: ",";\n  color: ",";\n"])),z.variable["blue-dark"],z.variable.white),jt=k.default.tr(Hn||(Hn=Object(D.a)([""]))),ft=k.default.th($n||($n=Object(D.a)(["\n  padding: ","px 0;\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n  font-size: ",";\n  font-weight: 500;\n\n  "," {\n    font-size: ",";\n  }\n"])),Z.padding.sm,z.variable.gray,z.variable.gray,S.size.sm,Q.device["above-tablet"],S.size.md),ht=function(n){var t=n.headLabels;return Object($.jsx)(ut,{children:Object($.jsx)(jt,{children:t.map((function(n,t){return Object($.jsx)(ft,{children:n},t)}))})})},xt=k.default.table(nt||(nt=Object(D.a)(["\n  width: 100%;\n  border-collapse: collapse;\n"]))),gt=function(n){var t=n.sidoCovidDataOfToday,e=null===t||void 0===t?void 0:t.filter((function(n){return"\ud569\uacc4"!==n.gubun})).sort((function(n,t){return n.defCnt>t.defCnt?-1:1}));return e?Object($.jsxs)(xt,{children:[Object($.jsx)(ht,{headLabels:["\uc704\uce58","\ub204\uc801\ud655\uc9c4","\uc2e0\uaddc\ud655\uc9c4"]}),Object($.jsx)(bt,{bodyData:e})]}):Object($.jsx)(gn,{})},Ot=k.default.div(tt||(tt=Object(D.a)(["\n  width: 100%;\n  min-height: 100vh;\n  ","\n"])),H()),mt=function(n){var t=n.todayCovidData;return Object($.jsxs)(fn,{title:"\uc9c0\uc5ed\ubcc4 \ubc1c\uc0dd \ud604\ud669",children:[Object($.jsx)(bn,{stdDay:t&&t[0].stdDay,unit:"\uba85"}),Object($.jsx)(Ot,{children:t?Object($.jsx)(gt,{sidoCovidDataOfToday:t}):Object($.jsx)(gn,{})})]})},pt=k.default.div(et||(et=Object(D.a)(["\n  width: 100%;\n"]))),vt=k.default.main(at||(at=Object(D.a)(["\n  margin: 30px 0;\n"]))),yt=function(){var n=P(),t=n.genAgeData,e=n.sidoData,a=Y(),i=T(e,a),c=null===e||void 0===e?void 0:e.slice(0,19);return Object($.jsxs)(pt,{children:[Object($.jsx)(ln,{}),Object($.jsx)(vt,{children:Object($.jsxs)(an,{children:[Object($.jsxs)(rn,{children:[Object($.jsx)(tn,{sm:4,md:6,children:Object($.jsx)(Dn,{sidoCovidData:i})}),Object($.jsx)(tn,{sm:4,md:6,children:Object($.jsx)(Yn,{todayCovidData:c})})]}),Object($.jsxs)(rn,{children:[Object($.jsx)(tn,{sm:4,md:6,children:Object($.jsx)(qn,{weekCovidData:e})}),Object($.jsx)(tn,{sm:4,md:6,children:Object($.jsx)(ot,{genAgeCovidData:t})})]}),Object($.jsx)(rn,{children:Object($.jsx)(tn,{sm:4,children:Object($.jsx)(mt,{todayCovidData:c})})})]})}),Object($.jsx)(L,{})]})};w.a.render(Object($.jsx)(v.a.StrictMode,{children:Object($.jsx)(yt,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.fd4a9678.chunk.js.map