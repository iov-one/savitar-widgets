(this["webpackJsonpsavitar-widgets"]=this["webpackJsonpsavitar-widgets"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),d=(n(13),n(4)),l=n(5),s=n(6),c=n(7),m=n(1),u="production",p={payment_type:"iov",email_editable:!0},b={email_editable:!0,currency:"iov",amount:25,amount_editable:!0},g=new m.Widget({type:"embed",embedContainerId:"div-starname",mode:u,config:p}),y=new m.Widget({type:"embed",embedContainerId:"div-tokens",mode:u,config:b}),f=new m.Widget({type:"modal",buttonId:"button-starname",mode:u,config:p}),h=new m.Widget({type:"modal",buttonId:"button-tokens",mode:u,config:b}),v=new m.Widget({type:"modal",buttonId:"span-starname",mode:u,config:p}),E=new m.Widget({type:"modal",buttonId:"span-tokens",mode:u,config:b}),k={margin:"10px"},w={display:"flex",justifyContent:"space-between",width:"100%"},I={border:"1px solid red",height:"67%",width:"49%"},W={border:"1px solid black",backgroundColor:"black",color:"white"},j=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){[g,y,f,h,v,E].forEach((function(e){return e.init()}))}},{key:"render",value:function(){return o.a.createElement("div",{style:k},o.a.createElement("p",null,"Check out Savitar's ",o.a.createElement("a",{href:"https://github.com/savitar-exchange/swap-sdk",target:"_blank",rel:"noopener noreferrer"},"swap-sdk")," for more configuration options and event listener documentation."),o.a.createElement("p",null,"The code for this web page is ",o.a.createElement("a",{href:"https://github.com/iov-one/savitar-widgets/blob/master/src/App.js",target:"_blank",rel:"noopener noreferrer"},"here"),"."),o.a.createElement("fieldset",{style:k},o.a.createElement("legend",null,"Modal Widget"),o.a.createElement("div",{style:w},o.a.createElement("button",{id:"button-starname"},"Buy A Starname"),o.a.createElement("button",{id:"button-tokens"},"Buy IOV Tokens"),o.a.createElement("span",{id:"span-starname",style:W},"Buy A Starname"),o.a.createElement("span",{id:"span-tokens",style:W},"Buy IOV Tokens"))),o.a.createElement("fieldset",{style:k},o.a.createElement("legend",null,"Embedded Widget"),o.a.createElement("div",{style:w},o.a.createElement("div",{id:"div-starname",style:I}),o.a.createElement("div",{id:"div-tokens",style:I}))))}}]),n}(o.a.Component);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.73eb70a5.chunk.js.map