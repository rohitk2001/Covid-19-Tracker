(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{101:function(t,e,a){t.exports={container:"Charts_container__3wBKf"}},102:function(t,e,a){t.exports={formControl:"CountryPicker_formControl__D7XId"}},20:function(t,e,a){t.exports={container:"Cards_container__27Z9U",card:"Cards_card__2sTha",infected:"Cards_infected__OVbGD",recovered:"Cards_recovered__24PWv",death:"Cards_death__1AiBa"}},241:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),c=a(93),o=a.n(c),s=a(10),i=a.n(s),u=a(16),d=a(3),l=a(4),p=a(7),f=a(6),j=a(259),h=a(263),b=a(260),v=a(261),x=a(20),m=a.n(x),O=a(44),y=a.n(O),g=a(45),C=a.n(g),_=a(2),w=function(t){var e=t.data,a=e.confirmed,r=e.recovered,n=e.deaths,c=e.lastUpdate;return a?(console.log(c),Object(_.jsx)("div",{className:m.a.container,children:Object(_.jsxs)(j.a,{container:!0,spacing:3,justify:"center",children:[Object(_.jsxs)(j.a,{item:!0,component:h.a,xs:12,md:3,className:C()(m.a.card,m.a.infected),children:[" ",Object(_.jsxs)(b.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(_.jsx)(v.a,{variant:"h5",children:Object(_.jsx)(y.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(_.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(v.a,{variant:"body2",children:"Number of active cases of Covid-19"})]})]}),Object(_.jsx)(j.a,{item:!0,component:h.a,xs:12,md:3,className:C()(m.a.card,m.a.recovered),children:Object(_.jsxs)(b.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(_.jsx)(v.a,{variant:"h5",children:Object(_.jsx)(y.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(_.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(v.a,{variant:"body2",children:"Number of recoveries from Covid-19"})]})}),Object(_.jsx)(j.a,{item:!0,component:h.a,xs:12,md:3,className:C()(m.a.card,m.a.death),children:Object(_.jsxs)(b.a,{children:[Object(_.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Death"}),Object(_.jsx)(v.a,{variant:"h5",children:Object(_.jsx)(y.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(_.jsx)(v.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(v.a,{variant:"body2",children:"Number of death caused by Covid-19"})]})})]})})):"Loading!..."},k=a(28),D=a(46),S=a.n(D),N="https://covid19.mathdro.id/api",B=function(){var t=Object(u.a)(i.a.mark((function t(e){var a,r,n,c,o,s,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=N,e&&(a="".concat(N,"/countries/").concat(e)),t.prev=2,t.next=5,S()(a);case 5:return r=t.sent,n=r.data,c=n.confirmed,o=n.recovered,s=n.deaths,u=n.lastUpdate,t.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:u});case 14:return t.prev=14,t.t0=t.catch(2),t.abrupt("return",t.t0);case 17:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}(),I=function(){var t=Object(u.a)(i.a.mark((function t(){var e,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.get("".concat(N,"/daily"));case 3:return e=t.sent,a=e.data,t.abrupt("return",a.map((function(t){return{confirmed:t.confirmed.total,deaths:t.deaths.total,date:t.reportDate}})));case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),A=function(){var t=Object(u.a)(i.a.mark((function t(){var e,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.get("".concat(N,"/countries"));case 3:return e=t.sent,a=e.data.countries,t.abrupt("return",a.map((function(t){return t.name})));case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),U=a(64),E=a(101),P=a.n(E),G=function(t){var e=t.data,a=t.country,n=Object(r.useState)([]),c=Object(k.a)(n,2),o=c[0],s=c[1];Object(r.useEffect)((function(){(function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=s,t.next=3,I();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var d=o.length?Object(_.jsx)(U.b,{data:{labels:o.map((function(t){var e=t.date;return new Date(e).toLocaleDateString()})),datasets:[{data:o.map((function(t){return t.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:o.map((function(t){return t.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,l=e.confirmed?Object(_.jsx)(U.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[e.confirmed.value,e.recovered.value,e.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(a)}}}):null;return Object(_.jsx)("div",{className:P.a.container,children:a?l:d})},J=a(264),K=a(262),L=a(102),R=a.n(L),V=function(t){var e=t.handleCountryChange,a=Object(r.useState)([]),n=Object(k.a)(a,2),c=n[0],o=n[1];return Object(r.useEffect)((function(){(function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=o,t.next=3,A();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[o]),Object(_.jsx)(J.a,{className:R.a.formControl,children:Object(_.jsxs)(K.a,{defaultValue:"",onChange:function(t){return e(t.target.value)},children:[Object(_.jsx)("option",{value:"",children:"Global"}),c.map((function(t,e){return Object(_.jsx)("option",{value:t,children:t},e)}))]})})},W=a(63),M=a.n(W),T=a.p+"static/media/image.9e5d4fc7.png",X=function(t){Object(p.a)(a,t);var e=Object(f.a)(a);function a(){var t;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={data:{},country:""},t.handleCountryChange=function(){var e=Object(u.a)(i.a.mark((function e(a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(a);case 2:r=e.sent,t.setState({data:r,country:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B();case 2:e=t.sent,this.setState({data:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(_.jsxs)("div",{className:M.a.container,children:[Object(_.jsx)("img",{className:M.a.image,src:T}),Object(_.jsx)(w,{data:this.state.data}),Object(_.jsx)(V,{handleCountryChange:this.handleCountryChange}),Object(_.jsx)(G,{data:this.state.data,country:this.state.country})]})}}]),a}(n.a.Component);o.a.render(Object(_.jsx)(X,{}),document.getElementById("root"))},63:function(t,e,a){t.exports={container:"App_container__i8WKp",image:"App_image__2uhki"}}},[[241,1,2]]]);
//# sourceMappingURL=main.fb22b252.chunk.js.map