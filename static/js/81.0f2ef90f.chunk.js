"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[81],{2081:function(n,e,r){r.r(e),r.d(e,{default:function(){return X}});var t,i,a,o,s,c,l,d=r(4270),u=r(2634),x=r(9439),p=r(5705),h=r(168),f=r(4556),g=(0,f.Z)(p.gN)(t||(t=(0,h.Z)(["\n  font-size: 22px;\n  margin-top: 5px;\n"]))),m=(0,f.Z)(p.l0)(i||(i=(0,h.Z)(["\n  margin: 10px auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  border-radius: 5px;\n  box-shadow: ",";\n  background-image: ",";\n"])),(function(n){return n.theme.filters.shadow}),(function(n){return n.theme.gradients.frescoCrush})),b=f.Z.label(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 22px;\n  margin-bottom: 20px;\n"]))),j=f.Z.button(o||(o=(0,h.Z)(["\n  width: 200px;\n  padding: 10px;\n  margin: 0 auto;\n  font-weight: 700;\n  text-transform: uppercase;\n  cursor: pointer;\n\n  border: none;\n  color: rgb(45, 45, 45);\n  border-radius: 5px;\n  box-shadow: ",";\n  background-color: rgb(250, 240, 40, 0.3);\n  :hover {\n    background-color: #fdbb2d;\n  }\n  :active {\n    transform: translateY(1px);\n  }\n"])),(function(n){return n.theme.filters.shadow})),Z=r(5188),w=r(5218),y=r(184),v={name:"",number:""},k=function(){var n=(0,Z.wY)(),e=n.data,r=n.isFetching,t=(0,Z.Lr)(),i=(0,x.Z)(t,1)[0];return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(p.J9,{initialValues:v,onSubmit:function(n,t){var a=t.resetForm;if(e.find((function(e){return e.name===n.name})))return w.ZP.error("".concat(n.name," is already is contacts"));i(n),r||w.ZP.success("Contact ".concat(n.name," has been added")),a()},children:(0,y.jsxs)(m,{children:[(0,y.jsxs)(b,{htmlFor:"",children:["Name",(0,y.jsx)(g,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)(b,{htmlFor:"",children:["Number",(0,y.jsx)(g,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,y.jsx)(j,{type:"submit",children:"Add contact"})]})})})},C=f.Z.div(s||(s=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),z=f.Z.label(c||(c=(0,h.Z)(["\n  align-items: center;\n  text-align: center;\n  font-size: 20px;\n"]))),F=f.Z.input(l||(l=(0,h.Z)(["\n  display: block;\n  font-size: 20px;\n  width: 250px;\n  margin-top: 15px;\n"]))),_=r(2007),A=r.n(_),L=r(5048),N=r(6364),P=function(){var n=(0,L.I0)();return(0,y.jsx)(C,{children:(0,y.jsxs)(z,{children:["Find contacts by name",(0,y.jsx)(F,{type:"text",onChange:function(e){n((0,N.xO)(e.currentTarget.value))}})]})})};Event.propTypes={filter:A().string,onChange:A().func};var B,J,q,S,Y,D=r(1413),R=r(8966),T=f.Z.div(B||(B=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  //   margin-top: 16px;\n"]))),E=function(){return(0,y.jsx)(T,{children:(0,y.jsx)(R.CJ,{height:"20",width:"20",color:"#8f67d1",ariaLabel:"triangle-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})},G=function(){return(0,y.jsx)(T,{children:(0,y.jsx)(R.BR,{height:"25",width:"25",radius:2,color:"#000000",ariaLabel:"puff-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})},H=f.Z.div(J||(J=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 18px;\n  color: rgb(1, 1, 1);\n"]))),I=f.Z.li(q||(q=(0,h.Z)(["\n  margin-bottom: 15px;\n  padding-left: 10px;\n  padding-right: 10px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 5px;\n  transition: all 300ms ease 0s;\n  box-shadow: #2fe6be;\n  align-items: center;\n  box-shadow: rgb(0 0 0) 0px 1px 5px;\n  &:hover {\n    background: ",";\n    box-shadow: rgb(0 0 0 / 89%) 0px 7px 10px;\n  }\n"])),(function(n){return n.theme.gradients.sunRise})),K=f.Z.p(S||(S=(0,h.Z)(["\n  margin: 0;\n  padding: 10px;\n  margin-right: 20px;\n  font-weight: 700;\n"]))),M=r(4925),O=f.Z.button(Y||(Y=(0,h.Z)(["\n  margin: 0;\n  padding: 5px;\n  border: none;\n  cursor: pointer;\n  border-radius: 50%;\n  color: white;\n  background-color: #d53369;\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: #3a1c71;\n    scale: 1.02;\n  }\n"]))),V=["children","onClick"],$=function(n){var e=n.children,r=n.onClick,t=(0,M.Z)(n,V);return(0,y.jsx)(O,(0,D.Z)((0,D.Z)({type:"button",onClick:r},t),{},{children:e}))};$.defaultProps={onClick:function(){return null},children:null};var Q=r(7322),U=function(n){var e=n.id,r=n.name,t=n.number,i=(0,Z.Nt)(),a=(0,x.Z)(i,2),o=a[0],s=a[1].isLoading;return(0,y.jsxs)(I,{children:[(0,y.jsxs)(K,{children:[r,": ",t]}),(0,y.jsx)($,{type:"button",onClick:function(){return o(e)},"aria-label":"Delete contact",children:s?(0,y.jsx)(G,{}):(0,y.jsx)(Q.F1H,{size:"20px"})})]})},W=function(){var n=(0,Z.wY)(),e=n.data,r=n.isFetching,t=(0,L.v9)(N.zK),i=function(){var n=t.toLowerCase();if(e)return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,y.jsxs)(H,{children:[r&&(0,y.jsx)(E,{}),(0,y.jsx)("ul",{children:e&&i.map((function(n){return(0,y.jsx)(U,(0,D.Z)({},n),n.id)}))})]})};function X(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d.q,{children:(0,y.jsx)("title",{children:"PhoneBook"})}),(0,y.jsx)(u.Dx,{children:"PhoneBook"}),(0,y.jsx)(u.GJ,{children:(0,y.jsx)(k,{})}),(0,y.jsx)(u.Al,{children:"Contacts"}),(0,y.jsx)(P,{}),(0,y.jsx)(W,{}),(0,y.jsx)(w.x7,{})]})}}}]);
//# sourceMappingURL=81.0f2ef90f.chunk.js.map