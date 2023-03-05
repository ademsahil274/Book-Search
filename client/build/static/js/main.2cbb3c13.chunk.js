(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var a,r,o,c,s,i=n(0),l=n.n(i),d=n(44),u=n.n(d),j=(n(120),n(121),n(38)),b=n(69),h=n(9),O=n(23),m=n(12),p=n(18),x=n(11),v=n(137),g=n(138),k=n(148),f=n(109),w=n(139),S=n(140),I=n(153),y=n(21),C=n(22),B=n(98),_=n.n(B),F=new(function(){function e(){Object(y.a)(this,e)}return Object(C.a)(e,[{key:"getProfile",value:function(){return _()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return _()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),T=function(e){var t=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!t)return!1;var n=null===t||void 0===t?void 0:t.filter((function(t){return t!==e}));return localStorage.setItem("saved_books",JSON.stringify(n)),!0},L=n(61),N=n(64),$=Object(N.a)(a||(a=Object(L.a)(["\n  mutation loginUser($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),q=Object(N.a)(r||(r=Object(L.a)(["\n  mutation addUser($username: String!, $password: String!, $email: String!) {\n    addUser(username: $username, password: $password, email: $email) {\n      user {\n        _id\n        username\n        email\n        bookCount\n        savedBooks {\n          authors\n          bookId\n          image\n          link\n          title\n          description\n        }\n      }\n      token\n    }\n  }\n"]))),D=Object(N.a)(o||(o=Object(L.a)(["\n  mutation saveBook($input: SavedBookInput!) {\n    saveBook(input: $input) {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        # _id\n        bookId\n        authors\n        image\n        link\n        title\n        description\n      }\n    }\n  }\n"]))),E=Object(N.a)(c||(c=Object(L.a)(["\n  mutation removeBook($bookId: ID!) {\n    removeBook(bookId: $bookId) {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        # _id\n        bookId\n        authors\n        image\n        link\n        title\n        description\n      }\n    }\n  }\n"]))),P=n(136),U=n(3),G=function(){var e=Object(i.useState)([]),t=Object(x.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(""),o=Object(x.a)(r,2),c=o[0],s=o[1],l=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),d=Object(x.a)(l,2),u=d[0],j=d[1],b=Object(P.a)(D),h=Object(x.a)(b,2),y=h[0];h[1].error;Object(i.useEffect)((function(){return function(){var e;(e=u).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var C=function(){var e=Object(p.a)(Object(m.a)().mark((function e(t){var n,r,o,i;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(c));case 6:if((n=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,n.json();case 11:r=e.sent,o=r.items,i=o.map((function(e){var t;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(t=e.volumeInfo.imageLinks)||void 0===t?void 0:t.thumbnail)||""}})),a(i),s(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(p.a)(Object(m.a)().mark((function e(t){var a,r;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.find((function(e){return e.bookId===t})),F.loggedIn()?F.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,y({variables:{input:a}});case 7:r=e.sent,r.data,j([].concat(Object(O.a)(u),[a.bookId])),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(v.a,{fluid:!0,className:"text-light bg-dark",children:Object(U.jsxs)(g.a,{children:[Object(U.jsx)("h1",{children:"Search for Books!"}),Object(U.jsx)(k.a,{onSubmit:C,children:Object(U.jsxs)(k.a.Row,{children:[Object(U.jsx)(f.a,{xs:12,md:8,children:Object(U.jsx)(k.a.Control,{name:"searchInput",value:c,onChange:function(e){return s(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})}),Object(U.jsx)(f.a,{xs:12,md:4,children:Object(U.jsx)(w.a,{type:"submit",variant:"success",size:"lg",children:"Submit Search"})})]})})]})}),Object(U.jsxs)(g.a,{children:[Object(U.jsx)("h2",{children:n.length?"Viewing ".concat(n.length," results:"):"Search for a book to begin"}),Object(U.jsx)(S.a,{children:n.map((function(e){return Object(U.jsxs)(I.a,{border:"dark",children:[e.image?Object(U.jsx)(I.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,Object(U.jsxs)(I.a.Body,{children:[Object(U.jsx)(I.a.Title,{children:e.title}),Object(U.jsxs)("p",{className:"small",children:["Authors: ",e.authors]}),Object(U.jsx)(I.a.Text,{children:e.description}),F.loggedIn()&&Object(U.jsx)(w.a,{disabled:null===u||void 0===u?void 0:u.some((function(t){return t===e.bookId})),className:"btn-block btn-info",onClick:function(){return B(e.bookId)},children:null!==u&&void 0!==u&&u.some((function(t){return t===e.bookId}))?"This book has already been saved!":"Save this Book!"})]})]},e.bookId)}))})]})]})},V=n(154),Y=Object(N.a)(s||(s=Object(L.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        # _id\n        bookId\n        authors\n        image\n        link\n        title\n        description\n      }\n    }\n  }\n"]))),J=function(){var e=Object(V.a)(Y),t=e.loading,n=e.data,a=Object(P.a)(E),r=Object(x.a)(a,2),o=r[0],c=(r[1].error,(null===n||void 0===n?void 0:n.me)||[]),s=function(){var e=Object(p.a)(Object(m.a)().mark((function e(t){var n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F.loggedIn()?F.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,o({variables:{bookId:t}});case 6:n=e.sent,n.data,T(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return t?Object(U.jsx)("h2",{children:"LOADING..."}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(v.a,{fluid:!0,className:"text-light bg-dark",children:Object(U.jsx)(g.a,{children:Object(U.jsx)("h1",{children:"Viewing saved books!"})})}),Object(U.jsxs)(g.a,{children:[Object(U.jsx)("h2",{children:c.savedBooks.length?"Viewing ".concat(c.savedBooks.length," saved ").concat(1===c.savedBooks.length?"book":"books",":"):"You have no saved books!"}),Object(U.jsx)(S.a,{children:c.savedBooks.map((function(e){return Object(U.jsxs)(I.a,{border:"dark",children:[e.image?Object(U.jsx)(I.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,Object(U.jsxs)(I.a.Body,{children:[Object(U.jsx)(I.a.Title,{children:e.title}),Object(U.jsxs)("p",{className:"small",children:["Authors: ",e.authors]}),Object(U.jsx)(I.a.Text,{children:e.description}),Object(U.jsx)(w.a,{className:"btn-block btn-danger",onClick:function(){return s(e.bookId)},children:"Delete this Book!"})]})]},e.bookId)}))})]})]})},K=n(151),z=n(150),A=n(146),M=n(152),H=n(19),R=n(142),W=function(){var e=Object(i.useState)({username:"",email:"",password:""}),t=Object(x.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),o=Object(x.a)(r,1)[0],c=Object(i.useState)(!1),s=Object(x.a)(c,2),l=s[0],d=s[1],u=Object(P.a)(q),b=Object(x.a)(u,1)[0],h=function(e){var t=e.target,r=t.name,o=t.value;a(Object(j.a)(Object(j.a)({},n),{},Object(H.a)({},r,o)))},O=function(){var e=Object(p.a)(Object(m.a)().mark((function e(t){var r,o;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,b({variables:Object(j.a)({},n)});case 6:r=e.sent,o=r.data,F.login(o.addUser.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),d(!0);case 15:a({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(k.a,{noValidate:!0,validated:o,onSubmit:O,children:[Object(U.jsx)(R.a,{dismissible:!0,onClose:function(){return d(!1)},show:l,variant:"danger",children:"Something went wrong with your signup!"}),Object(U.jsxs)(k.a.Group,{children:[Object(U.jsx)(k.a.Label,{htmlFor:"username",children:"Username"}),Object(U.jsx)(k.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:h,value:n.username,required:!0}),Object(U.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Username is required!"})]}),Object(U.jsxs)(k.a.Group,{children:[Object(U.jsx)(k.a.Label,{htmlFor:"email",children:"Email"}),Object(U.jsx)(k.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:h,value:n.email,required:!0}),Object(U.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(U.jsxs)(k.a.Group,{children:[Object(U.jsx)(k.a.Label,{htmlFor:"password",children:"Password"}),Object(U.jsx)(k.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:n.password,required:!0}),Object(U.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(U.jsx)(w.a,{disabled:!(n.username&&n.email&&n.password),type:"submit",variant:"success",children:"Submit"})]})})},Q=function(){var e=Object(i.useState)({email:"",password:""}),t=Object(x.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),o=Object(x.a)(r,1)[0],c=Object(i.useState)(!1),s=Object(x.a)(c,2),l=s[0],d=s[1],u=Object(P.a)($),b=Object(x.a)(u,1)[0],h=function(e){var t=e.target,r=t.name,o=t.value;a(Object(j.a)(Object(j.a)({},n),{},Object(H.a)({},r,o)))},O=function(){var e=Object(p.a)(Object(m.a)().mark((function e(t){var r,o;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,b({variables:Object(j.a)({},n)});case 6:r=e.sent,o=r.data,F.login(o.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),d(!0);case 15:a({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(k.a,{noValidate:!0,validated:o,onSubmit:O,children:[Object(U.jsx)(R.a,{dismissible:!0,onClose:function(){return d(!1)},show:l,variant:"danger",children:"Something went wrong with your login credentials!"}),Object(U.jsxs)(k.a.Group,{children:[Object(U.jsx)(k.a.Label,{htmlFor:"email",children:"Email"}),Object(U.jsx)(k.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:h,value:n.email,required:!0}),Object(U.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(U.jsxs)(k.a.Group,{children:[Object(U.jsx)(k.a.Label,{htmlFor:"password",children:"Password"}),Object(U.jsx)(k.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:h,value:n.password,required:!0}),Object(U.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(U.jsx)(w.a,{disabled:!(n.email&&n.password),type:"submit",variant:"success",children:"Submit"})]})})},X=function(){var e=Object(i.useState)(!1),t=Object(x.a)(e,2),n=t[0],a=t[1];return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(K.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(U.jsxs)(g.a,{fluid:!0,children:[Object(U.jsx)(K.a.Brand,{as:b.b,to:"/",children:"Google Books Search"}),Object(U.jsx)(K.a.Toggle,{"aria-controls":"navbar"}),Object(U.jsx)(K.a.Collapse,{id:"navbar",children:Object(U.jsxs)(z.a,{className:"ml-auto",children:[Object(U.jsx)(z.a.Link,{as:b.b,to:"/",children:"Search For Books"}),F.loggedIn()?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(z.a.Link,{as:b.b,to:"/saved",children:"See Your Books"}),Object(U.jsx)(z.a.Link,{onClick:F.logout,children:"Logout"})]}):Object(U.jsx)(z.a.Link,{onClick:function(){return a(!0)},children:"Login/Sign Up"})]})})]})}),Object(U.jsx)(A.a,{size:"lg",show:n,onHide:function(){return a(!1)},"aria-labelledby":"signup-modal",children:Object(U.jsxs)(M.a.Container,{defaultActiveKey:"login",children:[Object(U.jsx)(A.a.Header,{closeButton:!0,children:Object(U.jsx)(A.a.Title,{id:"signup-modal",children:Object(U.jsxs)(z.a,{variant:"pills",children:[Object(U.jsx)(z.a.Item,{children:Object(U.jsx)(z.a.Link,{eventKey:"login",children:"Login"})}),Object(U.jsx)(z.a.Item,{children:Object(U.jsx)(z.a.Link,{eventKey:"signup",children:"Sign Up"})})]})})}),Object(U.jsx)(A.a.Body,{children:Object(U.jsxs)(M.a.Content,{children:[Object(U.jsx)(M.a.Pane,{eventKey:"login",children:Object(U.jsx)(Q,{handleModalClose:function(){return a(!1)}})}),Object(U.jsx)(M.a.Pane,{eventKey:"signup",children:Object(U.jsx)(W,{handleModalClose:function(){return a(!1)}})})]})})]})})]})},Z=n(113),ee=n(147),te=n(149),ne=n(145),ae=n(111),re=Object(Z.a)({uri:"/graphql"}),oe=Object(ae.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(j.a)(Object(j.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),ce=new ee.a({link:oe.concat(re),cache:new te.a});var se=function(){return Object(U.jsx)(ne.a,{client:ce,children:Object(U.jsx)(b.a,{children:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(X,{}),Object(U.jsxs)(h.c,{children:[Object(U.jsx)(h.a,{path:"/",element:Object(U.jsx)(G,{})}),Object(U.jsx)(h.a,{path:"/saved",element:Object(U.jsx)(J,{})}),Object(U.jsx)(h.a,{render:function(){return Object(U.jsx)("h1",{className:"display-2",children:"Wrong page!"})}})]})]})})})};u.a.render(Object(U.jsx)(l.a.StrictMode,{children:Object(U.jsx)(se,{})}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.2cbb3c13.chunk.js.map