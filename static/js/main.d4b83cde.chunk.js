(this["webpackJsonpshop-app"]=this["webpackJsonpshop-app"]||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(33),i=c.n(r),s=(c(44),c(2)),o=c(3),d=c(10),u=(c(45),c(0)),l=function(){return Object(u.jsxs)("nav",{className:"Navbar",children:[Object(u.jsx)("h2",{className:"Navbar-logo",children:Object(u.jsx)(d.b,{to:"/",children:"SHOP APP"})}),Object(u.jsxs)("ul",{className:"Navbar-list",children:[Object(u.jsx)("li",{className:"Navbar-list-item",children:Object(u.jsx)(d.b,{to:"/cart",children:"Cart"})}),Object(u.jsx)("li",{className:"Navbar-list-item",children:Object(u.jsx)(d.b,{to:"/admin",children:"Admin"})})]})]})},j=c(5),b=c.n(j),p=c(11),h=c(16),O=c(23),m="FETCH_PRODUCTS",x="REMOVE_PRODUCT",f="ADD_PRODUCT",v="EDIT_PRODUCT",y="INITIALIZE_EDIT",N="ADD_TO_CART",g="REMOVE_FROM_CART",C="MANIPULATE_QUANTITY_FROM_CART",k=function(e,t){switch(t.type){case m:return Object(s.a)(Object(s.a)({},e),{},{products:t.payload});case x:return Object(s.a)(Object(s.a)({},e),{},{products:e.products.filter((function(e){return e.id!==t.payload}))});case f:return Object(s.a)(Object(s.a)({},e),{},{products:[].concat(Object(O.a)(e.products),[Object(s.a)({},t.payload)])});case y:return Object(s.a)(Object(s.a)({},e),{},{selectedValue:e.products.find((function(e){return e.id===t.payload}))});case v:return Object(s.a)(Object(s.a)({},e),{},{selectedValue:"",products:e.products.map((function(e){return e.id===t.payload.id?t.payload:e}))});case N:return e.cart.length?e.cart.some((function(e){return e.id===t.payload.id}))?Object(s.a)(Object(s.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload.id?Object(s.a)(Object(s.a)({},e),{},{quantity:Number(e.quantity)+Number(t.payload.quantity),price:Number(e.price)+Number(t.payload.price),stock:Number(e.stock)-Number(t.payload.quantity)}):t.payload}))}):Object(s.a)(Object(s.a)({},e),{},{cart:[].concat(Object(O.a)(e.cart),[t.payload])}):Object(s.a)(Object(s.a)({},e),{},{cart:[Object(s.a)({},t.payload)]});case g:return Object(s.a)(Object(s.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload}))});case C:var c=e.cart.find((function(e){return e.id===t.payload.id}));if(1===Number(c.quantity))return Object(s.a)(Object(s.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});var n=Number(c.quantity)+Number(t.payload.amount),a=Number(c.fixedItemPrice)*n,r=Number(c.stock)+-1*Number(t.payload.amount);return Object(s.a)(Object(s.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload.id?Object(s.a)(Object(s.a)({},e),{},{quantity:n,price:a,stock:r}):e}))});default:return e}},P=c(13),T=c.n(P),A=function(e){return Object.keys(e).map((function(t){return Object(s.a)(Object(s.a)({},e[t]),{},{id:t})}))},E="https://final-project-850b4-default-rtdb.firebaseio.com/",w=Object(n.createContext)(),D={products:[],selectedValue:"",cart:[]},R=function(e){var t=Object(n.useReducer)(k,D),c=Object(h.a)(t,2),a=c[0],r=c[1],i=a.products,o=a.selectedValue,d=a.cart,l=function(){var e=Object(p.a)(b.a.mark((function e(){var t,c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(E,".json"),e.prev=1,e.next=4,T.a.get(t);case 4:c=e.sent,n=A(c.data),r({type:m,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(p.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(E).concat(t,"/.json"),e.prev=1,e.next=4,T.a.delete(c);case 4:r({type:x,payload:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(b.a.mark((function e(t){var c,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(E,".json"),e.next=3,T.a.post(c,t);case 3:n=e.sent,a=Object(s.a)(Object(s.a)({},t),{},{id:n.data.name}),r({type:f,payload:a});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(p.a)(b.a.mark((function e(t,c){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(E).concat(c,"/.json"),e.next=3,T.a.patch(n,t);case 3:a=e.sent,r({type:v,payload:Object(s.a)(Object(s.a)({},a.data),{},{id:c})});case 5:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),R=function(){var e=Object(p.a)(b.a.mark((function e(t){var c,n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.length){e.next=9;break}return n="".concat(E,".json"),e.next=4,T.a.get(n);case 4:a=e.sent,r=A(a.data),c=r.find((function(e){return e.id===t})),e.next=10;break;case 9:c=i.find((function(e){return e.id===t}));case 10:return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(w.Provider,{value:{fetchProducts:l,products:i,selectedValue:o,cart:d,removeProduct:j,addProduct:O,initEditAction:function(e){r({type:y,payload:e})},editProduct:P,getProduct:R,addToCart:function(e,t){var c=Object(s.a)(Object(s.a)({},e),{},{stock:Number(e.stock)-Number(t)});P(c,e.id),r({type:N,payload:{id:c.id,name:c.name,description:c.description,fixedItemPrice:c.price,stock:c.stock,quantity:t,price:Number(c.price)*Number(t)}})},removeFromCart:function(e){r({type:g,payload:e})},manipulateQuantityFromCart:function(e,t,c){console.log(c),P({stock:Number(c)+Number(e)},t),r({type:C,payload:{amount:e,id:t}})}},children:e.children})},F=(c(71),function(){var e=Object(n.useContext)(w),t=e.fetchProducts,c=e.products;return Object(n.useEffect)((function(){c.length||t()}),[]),Object(u.jsx)("div",{className:"Home",children:c.map((function(e){return Object(u.jsxs)("div",{className:"product-card",children:[Object(u.jsx)("div",{className:"img-container",children:Object(u.jsx)("img",{src:e.image,alt:e.name})}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:"btns",children:[Object(u.jsxs)("h4",{children:[e.price,"$"]}),Object(u.jsx)(d.b,{className:"btn",to:"/products/".concat(e.id),children:"Details"})]})]})]},e.id)}))})}),I=(c(72),function(e){var t=Object(n.useContext)(w),c=t.fetchProducts,a=t.products,r=t.removeProduct,i=t.initEditAction,s=e.history;Object(n.useEffect)((function(){c()}),[]);return Object(u.jsxs)("section",{className:"Admin",children:[Object(u.jsxs)("div",{className:"Admin-header",children:[Object(u.jsx)("h2",{children:"Manage Products"}),Object(u.jsx)("button",{onClick:function(){s.push("/admin/form")},className:"Admin-add-product",children:"+ Add Product"})]}),Object(u.jsxs)("table",{className:"Admin-products",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"row",children:[Object(u.jsx)("th",{children:"image"}),Object(u.jsx)("th",{className:"name",children:"name"}),Object(u.jsx)("th",{children:"price"}),Object(u.jsx)("th",{children:"stock"}),Object(u.jsx)("th",{})]})}),Object(u.jsx)("tbody",{children:a.map((function(e){return Object(u.jsxs)("tr",{className:"row",children:[Object(u.jsx)("td",{className:"img",children:Object(u.jsx)("img",{src:e.image,alt:e.name})}),Object(u.jsx)("td",{className:"name",onClick:function(){return t=e.id,i(t),void s.push("/admin/form?isEditing");var t},children:e.name}),Object(u.jsxs)("td",{className:"price",children:[e.price,"$"]}),Object(u.jsx)("td",{className:"stock",children:e.stock}),Object(u.jsx)("td",{className:"remove",onClick:function(){return t=e.id,void r(t);var t},children:"Remove"})]},e.id)}))})]})]})}),V=c(17),S=c(36),_=c(37),q=c(39),M=c(38),U=(c(73),function(e){Object(q.a)(c,e);var t=Object(M.a)(c);function c(){var e;Object(S.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={name:"?isEditing"===e.props.location.search?e.context.selectedValue.name:"",image:"?isEditing"===e.props.location.search?e.context.selectedValue.image:"",description:"?isEditing"===e.props.location.search?e.context.selectedValue.description:"",price:"?isEditing"===e.props.location.search?e.context.selectedValue.price:"",stock:"?isEditing"===e.props.location.search?e.context.selectedValue.stock:""},e.handleChange=function(t){e.setState(Object(V.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),"?isEditing"===e.props.location.search?e.context.editProduct(e.state,e.context.selectedValue.id):e.context.addProduct(e.state),e.reset(),e.props.history.push("/admin")},e.handleCancel=function(t){t.preventDefault(),e.reset()},e.reset=function(){e.setState({name:"",image:"",description:"",price:"",stock:""})},e}return Object(_.a)(c,[{key:"render",value:function(){var e=this.state,t=e.name,c=e.description,n=e.price,a=e.stock,r=e.image;return Object(u.jsxs)("form",{className:"Form",children:[Object(u.jsxs)("div",{className:"Form-header-group",children:[Object(u.jsx)("h2",{children:"Add Product"}),Object(u.jsxs)("div",{className:"btn-section",children:[Object(u.jsx)("button",{className:"btn save",onClick:this.handleSubmit,children:"+ Save"}),Object(u.jsx)("button",{className:"btn cancel",onClick:this.handleCancel,children:"Cancel"})]})]}),Object(u.jsx)("input",{name:"name",value:t,onChange:this.handleChange,type:"text",placeholder:"name"}),Object(u.jsx)("input",{name:"image",value:r,onChange:this.handleChange,type:"text",placeholder:"image"}),Object(u.jsx)("input",{name:"description",value:c,onChange:this.handleChange,type:"text",placeholder:"description"}),Object(u.jsx)("input",{name:"price",value:n,onChange:this.handleChange,type:"text",placeholder:"price"}),Object(u.jsx)("input",{name:"stock",value:a,onChange:this.handleChange,type:"text",placeholder:"stock"})]})}}]),c}(a.a.Component));U.contextType=w;var L=U,Q=(c(74),function(e){var t=Object(n.useContext)(w),c=t.getProduct,a=t.addToCart,r=e.match.params.id,i=Object(n.useState)({}),s=Object(h.a)(i,2),o=s[0],d=s[1],l=Object(n.useState)(1),j=Object(h.a)(l,2),O=j[0],m=j[1];Object(n.useEffect)((function(){Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(r);case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);var x=o.stock<1||O<1;return o?Object(u.jsxs)("div",{className:"Details",children:[Object(u.jsx)("div",{className:"img-section",children:Object(u.jsx)("img",{src:o.image,alt:o.name})}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h2",{children:o.name}),Object(u.jsx)("div",{className:"desc",children:o.description}),Object(u.jsxs)("div",{className:"price",children:[o.price,"$"]}),Object(u.jsx)("div",{className:"line"}),Object(u.jsxs)("div",{className:"stock",children:["STOCK: ",o.stock]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"number",children:"Quantity "}),Object(u.jsx)("input",{type:"number",value:O,onChange:function(e){return m(e.target.value)}})]}),Object(u.jsx)("button",{disabled:x,onClick:function(){a(o,O),e.history.push("/cart")},children:"ADD TO CART"})]})]}):Object(u.jsx)("h2",{children:"Loading..."})}),H=(c(75),function(e){var t=Object(n.useContext)(w),c=t.cart,a=t.removeFromCart,r=t.manipulateQuantityFromCart,i=function(e,t,c){r(e,t,c)};return c.length?Object(u.jsxs)("div",{className:"Cart",children:[c.map((function(e){return Object(u.jsxs)("div",{className:"Cart-item",children:[Object(u.jsx)("div",{className:"name",children:e.name}),Object(u.jsx)("div",{children:e.price}),Object(u.jsx)("div",{children:e.fixedItemPrice}),Object(u.jsx)("div",{children:e.description}),Object(u.jsxs)("div",{className:"quantity",children:[Object(u.jsx)("span",{onClick:function(){return i(-1,e.id,e.stock)},children:"-"}),Object(u.jsx)("div",{children:e.quantity}),Object(u.jsx)("span",{onClick:function(){return i(1,e.id,e.stock)},children:"+"})]}),Object(u.jsx)("span",{className:"btn",onClick:function(){return t=e.id,void a(t);var t},children:"Remove"})]},e.id)})),Object(u.jsx)("button",{children:"ORDER NOW"})]}):Object(u.jsx)("h2",{children:"The cart is empty"})});var $=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(l,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(u.jsx)(F,{})}}),Object(u.jsx)(o.a,{exact:!0,path:"/admin",render:function(e){return Object(u.jsx)(I,Object(s.a)({},e))}}),Object(u.jsx)(o.a,{path:"/cart",render:function(){return Object(u.jsx)(H,{})}}),Object(u.jsx)(o.a,{path:"/products/:id",render:function(e){return Object(u.jsx)(Q,Object(s.a)({},e))}}),Object(u.jsx)(o.a,{path:"/admin/form",render:function(e){return Object(u.jsx)(L,Object(s.a)({},e))}})]})]})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,77)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(R,{children:Object(u.jsx)(d.a,{children:Object(u.jsx)($,{})})})}),document.getElementById("root")),B()}},[[76,1,2]]]);
//# sourceMappingURL=main.d4b83cde.chunk.js.map