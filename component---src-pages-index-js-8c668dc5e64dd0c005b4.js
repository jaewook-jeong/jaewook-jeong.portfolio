(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),l=a.n(r),n=a("I/Ru"),o=a("vrFN"),i=a("Wbzz"),s=a("9eSz"),c=a.n(s),u=a("vOnD"),p=a("cXSN"),m=u.b.section.withConfig({displayName:"style__AboutSection",componentId:"sc-1fwpqj7-0"})(["text-align:center;@media only screen and (min-width:","){display:grid;grid-template-columns:1fr 1.25fr;grid-gap:10rem;text-align:left;}"],p.a.breakpointLarge),d=u.b.section.withConfig({displayName:"style__WhatIDoSection",componentId:"sc-1fwpqj7-1"})(["display:grid;grid-template-columns:0.5fr 2.5fr;grid-template-rows:repeat(7,0.8fr);grid-gap:3rem;text-align:left;"]),h=Object(u.b)(c.a).withConfig({displayName:"style__Avatar",componentId:"sc-1fwpqj7-2"})(["border-radius:5px;box-shadow:0px 0px 64px rgba(0,0,0,0.15);width:100%;"]),f=u.b.h1.withConfig({displayName:"style__Title",componentId:"sc-1fwpqj7-3"})(['font-size:3rem;text-transform:capitalize;font-family:"GT-Walsheim-Pro-Bold";@media(max-width:',"){font-size:2rem;}"],p.a.breakpointPhone),g=u.b.p.withConfig({displayName:"style__Text",componentId:"sc-1fwpqj7-4"})(["font-size:1.1rem;line-height:1.5;color:#232323;text-transform:capitalize;a{color:#3F51B5;text-decoration:underline;}"]),b=u.b.h2.withConfig({displayName:"style__SubTitle",componentId:"sc-1fwpqj7-5"})(['font-family:"GT-Walsheim-Pro-Medium";margin-top:3rem;margin-bottom:2rem;text-align:center;text-transform:uppercase;word-spacing:8px;@media(min-width:',"){font-size:1.8em;}"],p.a.breakpointPhone),y=function(e,t){return(y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function x(e){var t=e.className,a=e.counterClockwise,l=e.dashRatio,n=e.pathRadius,o=e.strokeWidth,i=e.style;return Object(r.createElement)("path",{className:t,style:Object.assign({},i,k({pathRadius:n,dashRatio:l,counterClockwise:a})),d:E({pathRadius:n,counterClockwise:a}),strokeWidth:o,fillOpacity:0})}function E(e){var t=e.pathRadius,a=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+a+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+a+" 1 1 0,-"+2*t+"\n    "}function k(e){var t=e.counterClockwise,a=e.dashRatio,r=e.pathRadius,l=2*Math.PI*r,n=(1-a)*l;return{strokeDasharray:l+"px "+l+"px",strokeDashoffset:(t?-n:n)+"px"}}var w=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function a(){this.constructor=e}y(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,a=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,a),r)-a)/(r-a)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,a=e.className,l=e.classes,n=e.counterClockwise,o=e.styles,i=e.strokeWidth,s=e.text,c=this.getPathRadius(),u=this.getPathRatio();return Object(r.createElement)("svg",{className:l.root+" "+a,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?Object(r.createElement)("circle",{className:l.background,style:o.background,cx:50,cy:50,r:50}):null,Object(r.createElement)(x,{className:l.trail,counterClockwise:n,dashRatio:t,pathRadius:c,strokeWidth:i,style:o.trail}),Object(r.createElement)(x,{className:l.path,counterClockwise:n,dashRatio:u*t,pathRadius:c,strokeWidth:i,style:o.path}),s?Object(r.createElement)("text",{className:l.text,style:o.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component);a("lIpO");var v=a("1Qp6"),C=function(){var e=Object(i.useStaticQuery)("2245375630");return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.i,null,l.a.createElement(v.c,null,l.a.createElement(m,null,l.a.createElement("div",null,l.a.createElement(h,{fluid:e.placeholderImage.childImageSharp.fluid,alt:"user photo"}),l.a.createElement(b,null," Front End Developer")),l.a.createElement("div",null,l.a.createElement(f,null," 개발자 ",l.a.createElement("b",{className:"text-primary lined-link"},"정재욱"),"입니다. "),l.a.createElement(g,null,"수학과외로 비용을 충당하며 점철해온 수능을 끝내고 저는 인도에 갔습니다. 자신을 돌아보려는 떠난 인도는 저에게 개발자의 꿈을 다시금 확신하게 했습니다."),l.a.createElement(g,null,"인도에서 만난 Oyo rooms 개발자는 막연히 세상에 도움이 되겠다는 불투명한 개발자의 꿈을 지닌 저에게, 개발을 통한 이익창출과 사회로의 환원에 대한 현실적인 조언을 들려주었습니다."),l.a.createElement(g,null,"그러나 그 무엇보다도 구상한 무엇이든 만들어 낼 수 있다는 '가능성'이 저를 불타오르게 만들었습니다. 이러한 경험을 가지고 남들보다 조금 늦지만 하루하루를 불태우며 공부하고 있습니다."),l.a.createElement(g,null,"이력서 표면의 형식을 지금은 다채롭게 채워 넣지 못합니다. 그러나 이러한 부분은 앞으로 계속된 자기발전을 통해 채워나갈 것입니다. 유지보수처럼, 끊임없이 개선점을 찾아 발전을 이루고 성장하겠습니다."))))),l.a.createElement(v.i,null,l.a.createElement(v.c,null,l.a.createElement(m,null,l.a.createElement("div",null,l.a.createElement(f,null,"저는 지금 ",l.a.createElement("b",{className:"text-primary lined-link"},"OO"),"을"),l.a.createElement(f,null,"할 수 있습니다")),l.a.createElement(d,null,l.a.createElement(w,{value:70,text:"JS",styles:{path:{stroke:"#e8d976"},text:{fill:"#e8d976"}}}),l.a.createElement(g,null,"ES6를 활용한 풀스택 개발을 할 수 있습니다. node를 백엔드로 ajax로 통신하여 프로젝트를 구현하였습니다."),l.a.createElement(w,{value:80,text:"React",styles:{path:{stroke:"#D0b990"},text:{fill:"#D0b990"}}}),l.a.createElement(g,null,"Next로 프로젝트를 구현하였고, gatsby로 github페이지를 만들었습니다. 또한 styled-component를 사용하여 React에 css를 입혔습니다."),l.a.createElement(w,{value:65,text:"Java",styles:{path:{stroke:"#b1876b"},text:{fill:"#b1876b"}}}),l.a.createElement(g,null,"Spring프레임워크로 서버개발을 하였습니다. Mybatis를 이용하여 DB(Oracle)연결 및 CRUD처리를 하였습니다."),l.a.createElement(w,{value:40,text:"AWS",styles:{path:{stroke:"#92574b"},text:{fill:"#92574b"}}}),l.a.createElement(g,null,"AWS EC2로 프론트서버와 백엔드서버를 운영하였습니다. Nginx와 Docker, Travis CI를 활용하여 배포자동화 및 무중단배포를 구축하였습니다. 또한 다양한 시도(ex. 원하는 시간에 서버 켜고 끄기)와 활용을 하였고 이를 블로그에 기록으로 남겼습니다. "),l.a.createElement(w,{value:40,text:"Docker",styles:{path:{stroke:"#733136"},text:{fill:"#733136"}}}),l.a.createElement(g,null,"개발한 웹 애플리케이션을 Dockerizing하여 EC2와 CodeDeploy를 사용하여 배포하였습니다."),l.a.createElement(w,{value:70,text:"RDBMS",styles:{path:{stroke:"#541c2d"},text:{fill:"#541c2d"}}}),l.a.createElement(g,null,"Mysql, Oracle을 활용하여 데이터 CRUD를 작업하였습니다. node에서는 Squelize를 활용하여 처리한 경험도 있습니다."),l.a.createElement(w,{value:60,text:"Git",styles:{path:{stroke:"#350d23"},text:{fill:"#350d23"}}}),l.a.createElement(g,null,"Git으로 소스코드를 관리하고 협업을 진행하였습니다. 또한 GithubPage를 통해 포트폴리오 사이트를 작업하였습니다."))))))};t.default=function(){return l.a.createElement(n.a,null,l.a.createElement(o.a,{title:"About me"}),l.a.createElement(C,null))}},lIpO:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-8c668dc5e64dd0c005b4.js.map