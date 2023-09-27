"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[279],{6279:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r,c=t(1413),a=t(9439),o=t(2791),l=t(9434),i=t(1429),s=t(3329),u=function(){var e=(0,l.v9)((function(e){return e.filter})),n=(0,l.I0)();return(0,s.jsx)("input",{type:"text",placeholder:"Filter contacts",value:e,onChange:function(e){var t=e.target.value;console.log("Filter value changed:",t),n((0,i.Tv)(t))}})},d=t(8983),m=t(7561),h=t(6338),x=t(168),b=t(5993),j=(0,t(3517).ZP)(b.ZP)(r||(r=(0,x.Z)(["\n  background-color: greenyellow;\n  &:hover {\n    background-color: red;\n  }\n"]))),v=function(){console.log("Contacts component rendering");var e=(0,o.useState)(null),n=(0,a.Z)(e,2),t=n[0],r=n[1],x=(0,o.useState)({name:"",number:""}),b=(0,a.Z)(x,2),v=b[0],f=b[1],p=(0,l.v9)(m.R7),g=(0,l.v9)(h.xm),N=(0,l.v9)(h.Cc),_=(0,l.v9)(h.Uv),y=(0,l.v9)(i.AD),C=(0,l.I0)();(0,o.useEffect)((function(){p&&(console.log("Fetching contacts..."),C((0,h.nQ)()))}),[p,C]);var k=function(){if(t){var e=t.id;C((0,h.KY)({contactId:e,updatedData:(0,c.Z)({},v)})),r(null)}},Z=Array.isArray(g)&&g.length>0,w=null===g||void 0===g?void 0:g.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())}));return console.log(w),(0,s.jsxs)("section",{className:"title_contacts",children:[(0,s.jsx)("h1",{className:"title_contacts",children:"New contact"}),(0,s.jsxs)("form",{className:"form_contacts",onSubmit:function(e){e.preventDefault();var n=e.currentTarget,t=n.elements.contactName.value,r=n.elements.contactNumber.value;if(g.some((function(e){return e.name===t})))return alert("Contact with name ".concat(t," already exists!"));C((0,h.je)({name:t,number:r}))},children:[(0,s.jsxs)("label",{className:"title_form_contacts",children:[(0,s.jsx)("p",{children:"Name:"}),(0,s.jsx)("input",{name:"contactName",type:"text",required:!0})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("label",{className:"title_form_contacts",children:[(0,s.jsx)("p",{children:"Number:"}),(0,s.jsx)("input",{name:"contactNumber",type:"text",required:!0})]}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(j,{htmlType:"submit",children:"Add contact"})]}),(0,s.jsx)("h3",{children:"Find contacts by name"}),(0,s.jsx)(u,{}),N&&(0,s.jsx)(d.Z,{}),_&&(0,s.jsxs)("p",{children:["Oops, some error occured... ",_]}),(0,s.jsx)("ul",{children:Z&&(null===w||void 0===w?void 0:w.map((function(e){return(0,s.jsx)("li",{children:t&&t.id===e.id?(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("p",{children:"Name:"}),(0,s.jsx)("input",{name:"contactName",type:"text",required:!0,value:v.name,onChange:function(e){return f((0,c.Z)((0,c.Z)({},v),{},{name:e.target.value}))}})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("label",{children:[(0,s.jsx)("p",{children:"Number:"}),(0,s.jsx)("input",{name:"contactNumber",type:"text",required:!0,value:v.number,onChange:function(e){return f((0,c.Z)((0,c.Z)({},v),{},{number:e.target.value}))}})]}),(0,s.jsx)("br",{}),(0,s.jsx)(j,{onClick:k,children:"Save changes"})]}):(0,s.jsxs)("div",{children:[(0,s.jsxs)("h3",{children:["Name: ",e.name]}),(0,s.jsxs)("p",{children:["Number: ",e.number]}),(0,s.jsx)("button",{onClick:function(){return n=e.id,void C((0,h.xX)(n));var n},type:"button","aria-label":"Delete contact",children:"\xd7"}),(0,s.jsx)("button",{onClick:function(){return function(e){r(e),f({name:e.name,number:e.number})}(e)},type:"button","aria-label":"Edit contact",children:"Edit contact"})]})},e.id)})))})]})}}}]);
//# sourceMappingURL=279.bf92fab3.chunk.js.map