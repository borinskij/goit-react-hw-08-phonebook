"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[220],{6220:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(2791),a=t(885),s=t(5984),i=t(9434),l=t(8753),u=t(4683),c=t(184),o=function(){var e=(0,s.x0)(),n=(0,i.I0)(),t=(0,i.v9)(u.Jx),o=(0,r.useState)(""),d=(0,a.Z)(o,2),f=d[0],p=d[1],h=(0,r.useState)(""),m=(0,a.Z)(h,2),x=m[0],b=m[1];return(0,c.jsxs)("form",{onSubmit:function(r){if(r.preventDefault(),t.some((function(e){return e.name===f})))return alert("".concat(f," is already in contacts"));n((0,l.uK)({id:e,name:f,number:x})),p(""),b("")},children:[(0,c.jsxs)("label",{children:[(0,c.jsx)("span",{children:" Name"}),(0,c.jsx)("br",{}),(0,c.jsx)("input",{onChange:function(e){var n=e.target.value;p(n)},type:"text",name:"name",value:f,placeholder:"Name User",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,c.jsx)("br",{}),(0,c.jsxs)("label",{children:[(0,c.jsx)("span",{children:"Number"})," ",(0,c.jsx)("br",{}),(0,c.jsx)("input",{onChange:function(e){var n=e.target.value;b(n)},value:x,placeholder:"Number",type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,c.jsx)("br",{}),(0,c.jsx)("button",{type:"submit",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{})]})},d=t(4320),f=function(){var e=(0,i.I0)(),n=(0,i.v9)((function(e){return e.filter})).filter;return(0,c.jsx)("input",{onChange:function(n){e((0,d.D)(n.target.value))},value:n,placeholder:"filter",type:"tel",name:"filter"})},p=t(9657),h=t(6286),m=function(){var e=(0,i.I0)(),n=(0,i.v9)(u.u8),t=(0,i.v9)(u.Jx),a=(0,i.v9)((function(e){return e.contacts.isLoading}));(0,r.useEffect)((function(){e((0,l.yF)())}),[e]);return(0,c.jsx)("ul",{children:a?(0,c.jsx)(h.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"}):(n?t.filter((function(e){return e.name.toLowerCase().includes(n.trim())})):t).map((function(n){return(0,c.jsxs)("li",{children:[(0,c.jsxs)("p",{children:[n.name,": ",n.number]}),(0,c.jsx)("button",{onClick:function(){return t=n.id,e((0,l.GK)(t)),void e((0,p.aV)(t));var t},children:"Delete"})]},n.id)}))})};function x(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{}),(0,c.jsx)(f,{}),(0,c.jsx)(m,{})]})}}}]);
//# sourceMappingURL=220.a938be9d.chunk.js.map