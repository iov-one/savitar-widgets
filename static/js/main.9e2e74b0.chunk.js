(this["webpackJsonpsavitar-widgets"]=this["webpackJsonpsavitar-widgets"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(3),r=n.n(i),d=(n(13),n(4)),l=n(5),m=n(6),s=n(7),c=n(1),u="production",p={payment_type:"iov",email:"starname@example.com",email_editable:!0},b={payment_type:"merchant",email:"tokens@example.com",email_editable:!0,currency:"iov",amount:100,amount_editable:!0},y=new c.Widget({type:"embed",embedContainerId:"div-starname",mode:u,config:p}),g=new c.Widget({type:"embed",embedContainerId:"div-tokens",mode:u,config:b}),f=new c.Widget({type:"modal",buttonId:"button-starname",mode:u,config:p}),k=new c.Widget({type:"modal",buttonId:"button-tokens",mode:u,config:b}),v=new c.Widget({type:"modal",buttonId:"span-starname",mode:u,config:p}),E=new c.Widget({type:"modal",buttonId:"span-tokens",mode:u,config:b}),h={margin:"10px"},w={display:"flex",justifyContent:"space-between",width:"100%"},I={border:"1px solid blue",height:"67%",width:"49%"},x={border:"1px solid black",backgroundColor:"black",color:"white"},W=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){[y,g,f,k,v,E].forEach((function(e){return e.init()}))}},{key:"render",value:function(){return o.a.createElement("div",{style:h},o.a.createElement("p",null,"Check out Savitar's ",o.a.createElement("a",{href:"https://github.com/savitar-exchange/swap-sdk",target:"_blank",rel:"noopener noreferrer"},"swap-sdk")," for more configuration options and event listener documentation."),o.a.createElement("fieldset",{style:h},o.a.createElement("legend",null,"Modal Widget"),o.a.createElement("div",{style:w},o.a.createElement("button",{id:"button-starname"},"Buy A Starname"),o.a.createElement("button",{id:"button-tokens"},"Buy IOV Tokens"),o.a.createElement("span",{id:"span-starname",style:x},"Buy A Starname"),o.a.createElement("span",{id:"span-tokens",style:x},"Buy IOV Tokens"))),o.a.createElement("fieldset",{style:h},o.a.createElement("legend",null,"Embedded Widget"),o.a.createElement("div",{style:w},o.a.createElement("div",{id:"div-starname",style:I}),o.a.createElement("div",{id:"div-tokens",style:I}))))}}]),n}(o.a.Component);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(W,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.9e2e74b0.chunk.js.map