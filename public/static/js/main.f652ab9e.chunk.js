(this.webpackJsonproofbud=this.webpackJsonproofbud||[]).push([[0],{65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(30),r=n.n(c),s=n(18),i=n(2),o=n(5),j=n.n(o),u=n(11),b=n(3),l=n(9),d=n.n(l),O=n(12),h=n(0),x=function(){var e=new O.a;console.log("");var t="";t="";var n=Object(a.useState)(""),c=Object(b.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),o=Object(b.a)(i,2),l=o[0],x=o[1],p=Object(a.useState)(""),m=Object(b.a)(p,2),f=m[0],g=m[1],v=function(){var n=Object(u.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.post(t+"/api/login",{userName:r,password:l}).then((function(t){e.set("token",t.data.token,{path:"/"}),g("i know you !, token saved, cookie has been baked")})).catch((function(e){g("no soup for you!")}));case 2:n.sent;case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),k=function(){var n=Object(u.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.get(t+"/api/users",{headers:{Authorization:e.get("token")}}).then((function(){g("cookie is valid!")})).catch((function(e){g(e.message)}));case 2:n.sent;case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),w=function(){var n=Object(u.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"",n.next=3,d.a.post(t+"/api/logout","",{headers:{Authorization:e.get("token")}}).then((function(){g("logged out, token has been deleted.")})).catch((function(e){g(e.message)}));case 3:n.sent;case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"ui  center aligned container",children:[Object(h.jsx)("label",{htmlFor:"username",children:"User-name"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{onChange:function(e){return s(e.target.value)},type:"text",name:"",id:"username"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"password",children:"Password"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{onChange:function(e){x(e.target.value)},type:"password",name:"",id:"password"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:"ui pink button",onClick:function(){return v()},children:"Login"}),Object(h.jsx)("button",{className:"ui yellow button",children:"sign-in"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){return k()},children:"TestCookie"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){return w()},children:"Logout"}),Object(h.jsx)("br",{}),Object(h.jsx)("h1",{children:f})]})},p="";p="";var m=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(b.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(""),x=Object(b.a)(l,2),m=x[0],f=x[1],g=Object(a.useState)(0),v=Object(b.a)(g,2),k=v[0],w=v[1],y=Object(a.useState)(""),N=Object(b.a)(y,2),C=N[0],S=N[1],D=Object(a.useState)(""),F=Object(b.a)(D,2),A=F[0],z=F[1],J=Object(a.useState)(""),L=Object(b.a)(J,2),P=L[0],E=L[1],U=Object(a.useState)(),q=Object(b.a)(U,2),B=q[0],I=q[1],K=Object(a.useState)({}),M=Object(b.a)(K,2),R=M[0],T=M[1],Y=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new O.a,e.next=3,d.a.post(p+"/api/users",{userName:n,password:i,name:m,gender:B,age:k,fromDate:C,toDate:A}).then((function(e){t.set("token",e.data.token,{path:"/"}),E("OK , user has been created.")})).catch((function(e){E(e.response.data)}));case 3:e.sent,R&&((a=new FormData).append("avatar",R,R.name),d.a.post(p+"/api/users/me/avatar",a,{headers:{Authorization:t.get("token")}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(t.target.files[0]);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Sign-in"}),Object(h.jsx)("label",{htmlFor:"username",children:"user name"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{onChange:function(e){return c(e.target.value)},type:"text",name:"",id:"username"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"avatar",children:"upload avatar"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"file",onChange:function(e){return G(e)},name:"avatar",id:"avatar"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"password",children:"Password"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{onChange:function(e){return o(e.target.value)},type:"password",name:"",id:"password"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"name",children:"name"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{onChange:function(e){return f(e.target.value)},type:"text",name:"",id:"name"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"male",children:"Male"}),Object(h.jsx)("input",{onChange:function(e){return I(e.target.value)},type:"radio",name:"gender",id:"male",value:!0}),Object(h.jsx)("label",{htmlFor:"female",children:"female"}),Object(h.jsx)("input",{onChange:function(e){return I(e.target.value)},type:"radio",name:"gender",id:"female",value:!1}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"age",children:"age"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{onChange:function(e){return w(e.target.value)},type:"number",name:"",id:"age"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"fromDate",children:"from date"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{onChange:function(e){return S(e.target.value)},type:"date",name:"",id:"fromDate"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"toDate",children:"to Date"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{onChange:function(e){return z(e.target.value)},type:"date",name:"toDate",id:""}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){return Y()},children:"Sign In"}),Object(h.jsx)("p",{children:P})]})},f=new O.a,g="";g="";var v=function(){var e=Object(a.useState)({}),t=Object(b.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){d.a.get(g+"/api/m3",{headers:{Authorization:f.get("token")}}).then((function(e){c(e.data)})).catch((function(e){}))}),[]),n.userName?Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"ui card",children:[Object(h.jsx)("div",{className:"image",children:Object(h.jsx)("img",{src:"".concat(g,"/api/users/").concat(n.userName,"/avatar"),alt:""})}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("a",{className:"header",children:n.userName}),Object(h.jsx)("div",{className:"meta",children:Object(h.jsx)("span",{className:"date",children:"Joined in 2021"})}),Object(h.jsxs)("div",{className:"description",children:[n.userName," is an art director living in New York."]})]}),Object(h.jsx)("div",{className:"extra content",children:Object(h.jsxs)("a",{children:[Object(h.jsx)("i",{className:"user icon"}),"22 Friends"]})})]})}):Object(h.jsx)("h1",{children:"no User, no soup."})},k=n(31),w=n(32),y=n(35),N=n(34),C="";C="";var S=function(e){Object(y.a)(n,e);var t=Object(N.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){var e=this.props.prop;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{class:"ui card",children:[Object(h.jsxs)("div",{class:"content",children:[Object(h.jsx)("div",{class:"right floated meta",children:"14h"}),Object(h.jsx)("img",{class:"ui avatar image",src:"".concat(C,"/api/users/").concat(e.userName,"/avatar")})," ",this.props.prop.userName]}),Object(h.jsx)("div",{class:"image",children:Object(h.jsx)("img",{src:"".concat(C,"/api/users/").concat(e.userName,"/avatar")})}),Object(h.jsxs)("div",{class:"content",children:[Object(h.jsxs)("span",{class:"right floated",children:[Object(h.jsx)("i",{class:"heart outline like icon"}),"17 likes"]}),Object(h.jsx)("i",{class:"comment icon"}),"3 comments"]}),Object(h.jsx)("div",{class:"extra content",children:Object(h.jsxs)("div",{class:"ui large transparent left icon input",children:[Object(h.jsx)("i",{class:"heart outline icon"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Comment..."})]})})]})})}}]),n}(a.Component),D="";D="";var F=function(){var e=Object(a.useState)(),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(b.a)(r,2),o=s[0],l=s[1],x=Object(a.useState)(),p=Object(b.a)(x,2),m=p[0],f=p[1],g=Object(a.useState)([]),v=Object(b.a)(g,2),k=v[0],w=v[1],y=Object(i.e)();console.log(y);var N=new O.a;var C=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post(D+"/api/users/date",{toDate:m,fromDate:o},{headers:{Authorization:N.get("token")}});case 2:t=e.sent,console.log(t.data),w(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d.a.get(D+"/api/m3",{headers:{Authorization:N.get("token")}}).then((function(e){c(e.data)})).catch((function(e){}))}),[]),Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{children:["hi ",n?n.userName:null]}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"date",name:"fromDate",id:"fromDate"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{onChange:function(e){return f(e.target.value)},type:"date",name:"toDate",id:"toDate"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"range",name:"",id:""}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"radio",id:"yes",name:"age",value:"60"}),Object(h.jsx)("input",{type:"radio",id:"age3",name:"age",value:"100"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){return C()},children:"match"}),k.length>0?k.map((function(e){if(e.userName!==n.userName)return Object(h.jsx)(S,{prop:e})})):null]})},A=function(){return Object(h.jsxs)("div",{className:"home-container",children:[Object(h.jsx)("h1",{children:"R00fBud - Perfect match!"}),Object(h.jsx)("a",{href:"/#/sign",children:"Create account"})]})},z=(n(65),function(){return Object(h.jsx)(s.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("ul",{className:"header",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/#/home",children:"Logo"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/#/login",children:"login"})})]}),Object(h.jsxs)("div",{className:"content",children:["\xa0 ",Object(h.jsx)(i.a,{path:"/login",exact:!0,component:x}),Object(h.jsx)(i.a,{path:"/sign",exact:!0,component:m}),Object(h.jsx)(i.a,{path:"/profile",exact:!0,component:v}),Object(h.jsx)(i.a,{path:"/match",exact:!0,component:F}),Object(h.jsx)(i.a,{path:"/home",exact:!0,component:A})]})]})})});r.a.render(Object(h.jsx)(z,{}),document.querySelector("#root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.f652ab9e.chunk.js.map