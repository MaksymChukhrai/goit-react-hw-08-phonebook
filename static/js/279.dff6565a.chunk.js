"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[279],{6279:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var a,c=t(1413),r=t(9439),s=t(2791),i=t(9434),l=t(1429),o=t(3329),u=function(){var e=(0,i.v9)((function(e){return e.filter})),n=(0,i.I0)();return(0,o.jsx)("input",{className:"filter_input",type:"text",placeholder:"Filter contacts",value:e,onChange:function(e){var t=e.target.value;console.log("Filter value changed:",t),n((0,l.Tv)(t))}})},d=t(8983),m=t(7561),h=t(6338),x=t(168),p=t(5993),b=(0,t(3517).ZP)(p.ZP)(a||(a=(0,x.Z)(["\ncursor: pointer;\nbackground-color: #3f98f1;\ncolor: #ffff;\nbox-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\nborder-radius: 5px;\nborder-color: transparent;\nfont-family: inherit;\nfont-weight: 500;\nfont-size: 20px;\nline-height: 1.88;\ntext-align: center;\nletter-spacing: 0.04em;\npadding: 0;\n\nmargin-top: 55px;\nmargin-bottom:0;\nwidth: 205px;\nheight: 40px;\n  &:hover {\n    background: #466b89;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"]))),f=function(){var e=(0,s.useState)(null),n=(0,r.Z)(e,2),t=n[0],a=n[1],x=(0,s.useState)({name:"",number:""}),p=(0,r.Z)(x,2),f=p[0],v=p[1],j=(0,i.v9)(m.R7),g=(0,i.v9)(h.xm),_=(0,i.v9)(h.Cc),N=(0,i.v9)(h.Uv),w=(0,i.v9)(l.AD),y=(0,i.I0)();(0,s.useEffect)((function(){j&&y((0,h.nQ)())}),[j,y]);var C=function(){if(t){var e=t.id;y((0,h.KY)({contactId:e,updatedData:(0,c.Z)({},f)})),a(null)}},k=Array.isArray(g)&&g.length>0,Z=null===g||void 0===g?void 0:g.filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())}));return(0,o.jsxs)("section",{className:"section_contacts",children:[(0,o.jsxs)("div",{className:"new_contacts",children:[(0,o.jsx)("h1",{className:"title_contacts",children:"New contact"}),(0,o.jsxs)("form",{className:"form_contacts",onSubmit:function(e){e.preventDefault();var n=e.currentTarget,t=n.elements.contactName.value,a=n.elements.contactNumber.value;if(g.some((function(e){return e.name===t})))return alert("Contact with name ".concat(t," already exists!"));y((0,h.je)({name:t,number:a}))},children:[(0,o.jsxs)("label",{className:"title_form_contacts",children:[(0,o.jsx)("p",{children:"Name:"}),(0,o.jsx)("input",{name:"contactName",type:"text",required:!0})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("label",{className:"title_form_contacts",children:[(0,o.jsx)("p",{children:"Phone number:"}),(0,o.jsx)("input",{name:"contactNumber",type:"text",required:!0})]}),(0,o.jsx)("button",{className:"btn_add",type:"submit",children:"Add contact"})]})]}),(0,o.jsxs)("div",{className:"filter_contacts",children:[(0,o.jsx)("h2",{className:"filter_title",children:"Find contacts by name"}),(0,o.jsx)(u,{}),_&&(0,o.jsx)(d.Z,{}),N&&(0,o.jsxs)("p",{children:["Oops, some error occured... ",N]})]}),(0,o.jsx)("ul",{className:"list_contacts",children:k&&(null===Z||void 0===Z?void 0:Z.map((function(e){return(0,o.jsx)("li",{className:"name_contacts",children:t&&t.id===e.id?(0,o.jsxs)("div",{children:[(0,o.jsxs)("label",{className:"upate_contacts_form",children:[(0,o.jsx)("p",{children:"Name:"}),(0,o.jsx)("input",{name:"contactName",type:"text",required:!0,value:f.name,onChange:function(e){return v((0,c.Z)((0,c.Z)({},f),{},{name:e.target.value}))}})]}),(0,o.jsxs)("label",{className:"upate_contacts_form",children:[(0,o.jsx)("p",{children:"Number:"}),(0,o.jsx)("input",{name:"contactNumber",type:"text",required:!0,value:f.number,onChange:function(e){return v((0,c.Z)((0,c.Z)({},f),{},{number:e.target.value}))}})]}),(0,o.jsx)(b,{onClick:C,children:"Save changes"})]}):(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"items_contact",children:e.name}),(0,o.jsx)("p",{className:"items_contact",children:e.number}),(0,o.jsx)("button",{className:"icon-cross_btn",onClick:function(){return n=e.id,void y((0,h.xX)(n));var n},type:"button","aria-label":"Delete contact",children:(0,o.jsx)("svg",{width:"32",height:"32",children:(0,o.jsx)("path",{d:"M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"})})}),(0,o.jsx)("button",{className:"icon-pensil_btn",onClick:function(){return function(e){a(e),v({name:e.name,number:e.number})}(e)},type:"button","aria-label":"Edit contact",children:(0,o.jsx)("svg",{width:"32",height:"32",children:(0,o.jsx)("path",{d:"M12 20l4-2 14-14-2-2-14 14-2 4zM9.041 27.097c-0.989-2.085-2.052-3.149-4.137-4.137l3.097-8.525 4-2.435 12-12h-6l-12 12-6 20 20-6 12-12v-6l-12 12-2.435 4z"})})})]})},e.id)})))})]})}}}]);
//# sourceMappingURL=279.dff6565a.chunk.js.map