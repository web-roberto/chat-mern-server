(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{179:function(e,t,a){},183:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a(28),r=a.n(s),i=a(13),o=a.n(i),l=a(19),u=a(7),j=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,d=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var c,n,s,r,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=i.length>2&&void 0!==i[2]?i[2]:"GET",n="".concat(j,"/").concat(t),"GET"!==c){e.next=11;break}return e.next=5,fetch(n);case 5:return s=e.sent,e.next=8,s.json();case 8:return e.abrupt("return",e.sent);case 11:return e.next=13,fetch(n,{method:c,headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 13:return r=e.sent,e.next=16,r.json();case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var c,n,s,r,i,l=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=l.length>2&&void 0!==l[2]?l[2]:"GET",n="".concat(j,"/").concat(t),s=localStorage.getItem("token")||"","GET"!==c){e.next=12;break}return e.next=6,fetch(n,{headers:{"x-token":s}});case 6:return r=e.sent,e.next=9,r.json();case 9:return e.abrupt("return",e.sent);case 12:return e.next=14,fetch(n,{method:c,headers:{"Content-type":"application/json","x-token":s},body:JSON.stringify(a)});case 14:return i=e.sent,e.next=17,i.json();case 17:return e.abrupt("return",e.sent);case 18:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),m=Object(n.createContext)(),h={uid:null,checking:!0,logged:!1,name:null,email:null},p=function(e){var t=e.children,a=Object(n.useState)(h),s=Object(u.a)(a,2),r=s[0],i=s[1],j=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("login",{email:t,password:a},"POST");case 2:return(c=e.sent).ok&&(localStorage.setItem("token",c.token),n=c.usuario,i({uid:n.uid,checking:!1,logged:!0,name:n.nombre,email:n.email})),e.abrupt("return",c.ok);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.a)(o.a.mark((function e(t,a,c){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("login/new",{nombre:t,email:a,password:c},"POST");case 2:if(!(n=e.sent).ok){e.next=8;break}return localStorage.setItem("token",n.token),s=n.usuario,i({uid:s.uid,checking:!1,logged:!0,name:s.nombre,email:s.email}),e.abrupt("return",!0);case 8:return e.abrupt("return",n.msg);case 9:case"end":return e.stop()}}),e)})));return function(t,a,c){return e.apply(this,arguments)}}(),O=Object(n.useCallback)(Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("token")){e.next=4;break}return i({uid:null,checking:!1,logged:!1,name:null,email:null}),e.abrupt("return",!1);case 4:return e.next=6,b("login/renew");case 6:if(!(t=e.sent).ok){e.next=14;break}return localStorage.setItem("token",t.token),a=t.usuario,i({uid:a.uid,checking:!1,logged:!0,name:a.nombre,email:a.email}),e.abrupt("return",!0);case 14:return i({uid:null,checking:!1,logged:!1,name:null,email:null}),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e)}))),[]);return Object(c.jsx)(m.Provider,{value:{auth:r,login:j,register:p,verificaToken:O,logout:function(){localStorage.removeItem("token"),i({checking:!1,logged:!1})}},children:t})},O=a(16),x=a(14),g="[Chat] Usuarios cargados",f="[Chat] Activar Chat",v="[Chat] Nuevo Mensaje",w="[Chat] Cargar Mensajes",N=function(e,t){switch(t.type){case g:return Object(x.a)(Object(x.a)({},e),{},{usuarios:Object(O.a)(t.payload)});case f:return e.chatActivo===t.payload?e:Object(x.a)(Object(x.a)({},e),{},{chatActivo:t.payload,mensajes:[]});case v:return e.chatActivo===t.payload.de||e.chatActivo===t.payload.para?Object(x.a)(Object(x.a)({},e),{},{mensajes:[].concat(Object(O.a)(e.mensajes),[t.payload])}):e;case w:return Object(x.a)(Object(x.a)({},e),{},{mensajes:Object(O.a)(t.payload)});default:return e}},y=Object(n.createContext)(),E={uid:"",chatActivo:null,usuarios:[],mensajes:[]},S=function(e){var t=e.children,a=Object(n.useReducer)(N,E),s=Object(u.a)(a,2),r=s[0],i=s[1];return Object(c.jsx)(y.Provider,{value:{chatState:r,dispatch:i},children:t})},k=a(117),C=a.n(k),_=a(90),A=Object(n.createContext)(),I=function(e){var t=e.children,a=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(!1),i=Object(u.a)(r,2),o=i[0],l=i[1],j=Object(n.useCallback)((function(){var t=localStorage.getItem("token"),a=C.a.connect(e,{transports:["websocket"],autoConnect:!0,forceNew:!0,query:{"x-token":t}});s(a)}),[e]),d=Object(n.useCallback)((function(){null===c||void 0===c||c.disconnect()}),[c]);return Object(n.useEffect)((function(){l(null===c||void 0===c?void 0:c.connected)}),[c]),Object(n.useEffect)((function(){null===c||void 0===c||c.on("connect",(function(){return l(!0)}))}),[c]),Object(n.useEffect)((function(){null===c||void 0===c||c.on("disconnect",(function(){return l(!1)}))}),[c]),{socket:c,online:o,conectarSocket:j,desconectarSocket:d}}("http://localhost:8080"),s=a.socket,r=a.online,i=a.conectarSocket,o=a.desconectarSocket,l=Object(n.useContext)(m).auth,j=Object(n.useContext)(y).dispatch;return Object(n.useEffect)((function(){l.logged&&i()}),[l,i]),Object(n.useEffect)((function(){l.logged||o()}),[l,o]),Object(n.useEffect)((function(){null===s||void 0===s||s.on("lista-usuarios",(function(e){j({type:g,payload:e})}))}),[s,j]),Object(n.useEffect)((function(){null===s||void 0===s||s.on("mensaje-personal",(function(e){var t;j({type:v,payload:e}),t="mensajes",_.animateScroll.scrollToBottom({containerId:t,duration:250})}))}),[s,j]),Object(c.jsx)(A.Provider,{value:{socket:s,online:r},children:t})},T=a(37),R=a(17),D=function(){return Object(c.jsx)("div",{className:"middle-screen",children:Object(c.jsxs)("div",{className:"alert-info",children:[Object(c.jsx)("hr",{}),Object(c.jsx)("h3",{children:"Seleccione una persona"}),Object(c.jsx)("span",{children:"Para comenzar una conversaci\xf3n"})]})})},P=function(){var e=Object(n.useContext)(m),t=e.auth,a=e.logout;return Object(c.jsxs)("div",{className:"headind_srch",children:[Object(c.jsx)("div",{className:"recent_heading mt-2",children:Object(c.jsx)("h4",{children:t.name})}),Object(c.jsx)("div",{className:"srch_bar",children:Object(c.jsx)("div",{className:"stylish-input-group",children:Object(c.jsx)("button",{className:"btn text-danger",onClick:a,children:"Salir"})})})]})},L=function(e){var t=e.usuario,a=Object(n.useContext)(y),s=a.chatState,r=a.dispatch,i=s.chatActivo,u=function(){var e=Object(l.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:f,payload:t.uid}),e.next=3,b("mensajes/".concat(t.uid));case 3:a=e.sent,r({type:w,payload:a.mensajes}),c="mensajes",_.animateScroll.scrollToBottom({containerId:c,duration:0});case 6:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"chat_list ".concat(t.uid===i&&"active_chat"),onClick:u,children:Object(c.jsxs)("div",{className:"chat_people",children:[Object(c.jsx)("div",{className:"chat_img",children:Object(c.jsx)("img",{src:"https://www.freeiconspng.com/uploads/flat-face-icon-23.png",width:"350",alt:"flat face icon"})}),Object(c.jsxs)("div",{className:"chat_ib",children:[Object(c.jsxs)("h5",{children:[" ",t.nombre," "]}),t.online?Object(c.jsx)("span",{className:"text-success",children:"Online"}):Object(c.jsx)("span",{className:"text-danger",children:"Offline"})]})]})})},U=function(){var e=Object(n.useContext)(y).chatState,t=Object(n.useContext)(m).auth.uid;return Object(c.jsxs)("div",{className:"inbox_chat",children:[e.usuarios.filter((function(e){return e.uid!==t})).map((function(e){return Object(c.jsx)(L,{usuario:e},e.uid)})),Object(c.jsx)("div",{className:"extra_space"}),Object(c.jsx)("div",{className:"notes__image",children:Object(c.jsx)("video",{controls:!0,autoPlay:!0,"min-height":"450",width:"100%",children:Object(c.jsx)("source",{src:"https://res.cloudinary.com/web-roberto/video/upload/v1644152974/chatdb/q5ybc1j62v48wjjfrskk.mp4",type:"video/mp4"})})})]})},F=function(){return Object(c.jsxs)("div",{className:"inbox_people",children:[Object(c.jsx)(P,{}),Object(c.jsx)(U,{})]})},H=a(50),M=a.n(H),q=function(e){return M()(e).format("HH:mm a | MMMM Do")},B=function(e){var t=e.msg;return Object(c.jsxs)("div",{className:"incoming_msg",children:[Object(c.jsx)("div",{className:"incoming_msg_img",children:Object(c.jsx)("img",{src:"https://ptetutorials.com/images/user-profile.png",alt:"sunil"})}),Object(c.jsx)("div",{className:"received_msg",children:Object(c.jsxs)("div",{className:"received_withd_msg",children:[t.mensaje.startsWith("https://res.cloudinary.com")?t.mensaje.endsWith(".mp4")?Object(c.jsx)("video",{controls:!0,autoPlay:!0,"min-height":"450",width:"100%",children:Object(c.jsx)("source",{src:t.mensaje,type:"video/mp4"})}):Object(c.jsx)("span",{children:Object(c.jsx)("img",{src:t.mensaje})}):Object(c.jsx)("p",{children:t.mensaje}),Object(c.jsxs)("span",{className:"time_date",children:[" ",q(t.createdAt)]})]})})]})},W=function(e){var t=e.msg;return Object(c.jsx)("div",{className:"outgoing_msg",children:Object(c.jsxs)("div",{className:"sent_msg",children:[t.mensaje.startsWith("https://res.cloudinary.com")?t.mensaje.endsWith(".mp4")?Object(c.jsx)("video",{controls:!0,autoPlay:!0,"min-height":"450",width:"100%",children:Object(c.jsx)("source",{src:t.mensaje,type:"video/mp4"})}):Object(c.jsx)("span",{children:Object(c.jsx)("img",{src:t.mensaje})}):Object(c.jsx)("p",{children:t.mensaje}),Object(c.jsxs)("span",{className:"time_date",children:[" ",q(t.createdAt)," "]})]})})},J=a(24),G=a.n(J),V=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/web-roberto/upload",(a=new FormData).append("upload_preset","chatdb"),a.append("file",t),G.a.fire({title:"Uploading...",text:"Please wait..",allowOutsideClick:!1,onBeforeOpen:function(){G.a.showLoading()}}),e.prev=5,console.log("VOY A HACER EL FETCH"),e.next=9,fetch("https://api.cloudinary.com/v1_1/web-roberto/upload",{method:"POST",body:a});case 9:if(c=e.sent,G.a.close(),c.ok){e.next=15;break}return e.next=14,c.json();case 14:throw e.sent;case 15:return console.log("ROB- ANTES DEL AWAIT RESP.JSON Y ANTES DEL SECURE_URL: DESPUES DEL FETCH:"),e.next=18,c.json();case 18:return n=e.sent,console.log("ROB- SECURE_URL:",n.secure_url),e.abrupt("return",n.secure_url);case 23:throw e.prev=23,e.t0=e.catch(5),G.a.fire("Error","Uploading the file","error"),e.t0;case 27:case"end":return e.stop()}}),e,null,[[5,23]])})));return function(t){return e.apply(this,arguments)}}(),K=a(233),Y=a(232),z=a(229),Q=a(231),X=a(228),Z=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),i=Object(u.a)(r,2),o=i[0],l=i[1],j=Object(n.useContext)(y).chatState,d=Object(n.useContext)(A).socket,b=Object(n.useContext)(m).auth;return Object(c.jsx)(K.a,{sx:{maxWidth:100,maxHeigh:50},children:Object(c.jsxs)(Q.a,{fullWidth:!0,children:[Object(c.jsxs)(Y.a,{id:"demo-simple-select-label",children:[" ",Object(c.jsx)("img",{src:"https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif3_mw5eao.jpg",alt:"icon",width:"30",height:"30"})," "]}),Object(c.jsxs)(X.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a,label:"Icon",onChange:function(e){var t=e.target.value;switch(s(t),console.log(t),console.log("valor de SELECTION antes de coger la url del icono: ",typeof t),t){case 6:l("https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif6_g7os4p.webp");break;default:console.log("no es el 6")}console.log("valor de SELECTION despues de coger la url del icono: ",t),console.log("MENSAJE DE SELECCION (antes del EMIT): ",o),d.emit("mensaje-personal",{de:b.uid,para:j.chatActivo,mensaje:o}),console.log("MENSAJE DE SELECCION:(despues del EMIT): ",o),document.querySelector("#send_btn").click()},autoComplete:"off",children:[Object(c.jsx)(z.a,{value:1,children:Object(c.jsx)("img",{src:"https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif1_wa4r5r.webp",alt:"icon",width:"50",height:"50"})}),Object(c.jsx)(z.a,{value:2,children:Object(c.jsx)("img",{src:"https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif2_yypn8a.webp",alt:"icon",width:"50",height:"50"})}),Object(c.jsx)(z.a,{value:3,children:Object(c.jsx)("img",{src:"https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif3_mw5eao.jpg",alt:"icon",width:"50",height:"50"})}),Object(c.jsx)(z.a,{value:4,children:Object(c.jsx)("img",{src:"https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif4_yqiprg.jpg",alt:"icon",width:"50",height:"50"})}),Object(c.jsx)(z.a,{value:5,children:Object(c.jsx)("img",{src:"https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif5_qmw6bo.jpg",alt:"icon",width:"50",height:"50"})}),Object(c.jsx)(z.a,{value:6,children:Object(c.jsx)("img",{src:"https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif6_g7os4p.webp",alt:"icon",width:"50",height:"50"})}),Object(c.jsx)(z.a,{value:7,children:Object(c.jsx)("img",{src:"https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif7_useesv.webp",alt:"icon",width:"50",height:"50"})}),Object(c.jsx)(z.a,{value:8,children:Object(c.jsx)("img",{src:"https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif8_uy6iqj.webp",alt:"icon",width:"50",height:"50"})}),Object(c.jsx)(z.a,{value:9,children:Object(c.jsx)("img",{src:"https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif9_xjbthy.webp",alt:"icon",width:"50",height:"50"})}),Object(c.jsx)(z.a,{value:10,children:Object(c.jsx)("img",{src:"https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif10_p58ipq.webp",alt:"icon",width:"50",height:"50"})}),Object(c.jsx)(z.a,{value:11,children:Object(c.jsx)("img",{src:"https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif11_l07gvl.webp",alt:"icon",width:"50",height:"50"})})]})]})})},$=a(66),ee=a(67),te=a(122),ae=a(121),ce=(n.Component,function(){document.querySelector("#fileSelector").click()}),ne=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],s=t[1],r=Object(n.useContext)(A).socket,i=Object(n.useContext)(m).auth,j=Object(n.useContext)(y).chatState,d=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.target.files[0],console.log("ANTES DE SUBIR EL FICHERO -ANTES DEL IF: el E.TARGE.FILES[0]: ",c),!c){e.next=18;break}return console.log("ANTES DE SUBIR EL FICHERO -DENTRO DEL IF : ",c),e.prev=4,e.next=7,V(c);case 7:n=e.sent,console.log("FICHERO SUBIDO A: ",n),n?(s(n),r.emit("mensaje-personal",{de:i.uid,para:j.chatActivo,mensaje:a}),document.querySelector("#send_btn").click(),s("")):G.a.fire("Error","No url after loading File","error"),e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(4),G.a.fire("Error","Uploading the file","error"),e.t0;case 16:e.next=19;break;case 18:G.a.fire("Error","NO FILE SELECTED","error");case 19:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"send_select_file",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:d}),Object(c.jsx)("button",{id:"buttonfileSelector",className:"msg_send_btn mt-1",style:{width:"140px"},onClick:ce,children:"Image/Video"})]})}),Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),0!==a.length?r.emit("mensaje-personal",{de:i.uid,para:j.chatActivo,mensaje:a}):s("")},children:Object(c.jsxs)("div",{className:"type_msg row",children:[Object(c.jsxs)("div",{className:"col-sm-2",style:{padding:"0px 0px 0px 0px !important"},children:[Object(c.jsx)(Z,{}),Object(c.jsx)("script",{})]}),Object(c.jsx)("div",{className:"input_msg_write col-sm-8",children:Object(c.jsx)("input",{type:"text",id:"mensaje",className:"write_msg",placeholder:"Mensaje...",value:a,onChange:function(e){var t=e.target;s(t.value)},autoComplete:"off"})}),Object(c.jsx)("div",{className:"col-sm-2",children:Object(c.jsx)("button",{id:"send_btn",className:"msg_send_btn mt-1",type:"submit",children:"Send"})})]})})]})},se=function(){var e=Object(n.useContext)(y).chatState,t=Object(n.useContext)(m).auth;return Object(c.jsxs)("div",{className:"mesgs",children:[Object(c.jsx)("div",{id:"mensajes",className:"msg_history",children:e.mensajes.map((function(e){return e.para===t.uid?Object(c.jsx)(B,{msg:e},e._id):Object(c.jsx)(W,{msg:e},e._id)}))}),Object(c.jsx)(ne,{})]})},re=(a(179),function(){var e=Object(n.useContext)(y).chatState;return Object(c.jsx)("div",{className:"messaging",children:Object(c.jsxs)("div",{className:"inbox_msg",children:[Object(c.jsx)(F,{}),e.chatActivo?Object(c.jsx)(se,{}):Object(c.jsx)(D,{})]})})}),ie=a(4),oe=function(){var e=Object(n.useContext)(m).login,t=Object(n.useState)({email:"",password:"",rememberme:!1}),a=Object(u.a)(t,2),s=a[0],r=a[1];Object(n.useEffect)((function(){var e=localStorage.getItem("email");e&&r((function(t){return Object(x.a)(Object(x.a)({},t),{},{email:e,rememberme:!0})}))}),[]);var i=function(e){var t=e.target,a=t.name,c=t.value;r(Object(x.a)(Object(x.a)({},s),{},Object(ie.a)({},a,c)))},j=function(){var t=Object(l.a)(o.a.mark((function t(a){var c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),s.rememberme?localStorage.setItem("email",s.email):localStorage.removeItem("email"),c=s.email,n=s.password,t.next=5,e(c,n);case 5:t.sent||G.a.fire("Error","Verifique el usuario y contrase\xf1a","error");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsxs)("form",{className:"login100-form validate-form flex-sb flex-w",onSubmit:j,children:[Object(c.jsx)("span",{className:"login100-form-title mb-3",children:"Chat - Ingreso"}),Object(c.jsxs)("div",{className:"wrap-input100 validate-input mb-3",children:[Object(c.jsx)("input",{className:"input100",type:"email",name:"email",placeholder:"Email",value:s.email,onChange:i}),Object(c.jsx)("span",{className:"focus-input100"})]}),Object(c.jsxs)("div",{className:"wrap-input100 validate-input mb-3",children:[Object(c.jsx)("input",{className:"input100",type:"password",name:"password",placeholder:"Password",value:s.password,onChange:i}),Object(c.jsx)("span",{className:"focus-input100"})]}),Object(c.jsxs)("div",{className:"row mb-3",children:[Object(c.jsxs)("div",{className:"col",onClick:function(){return console.log("??"),void r(Object(x.a)(Object(x.a)({},s),{},{rememberme:!s.rememberme}))},children:[Object(c.jsx)("input",{className:"input-checkbox100",id:"ckb1",type:"checkbox",name:"rememberme",checked:s.rememberme,readOnly:!0}),Object(c.jsx)("label",{className:"label-checkbox100",children:"Recordarme"})]}),Object(c.jsx)("div",{className:"col text-right",children:Object(c.jsx)(T.b,{to:"/auth/register",className:"txt1",children:"Nueva cuenta?"})})]}),Object(c.jsx)("div",{className:"container-login100-form-btn m-t-17",children:Object(c.jsx)("button",{type:"submit",className:"login100-form-btn",disabled:!(s.email.length>0&&s.password.length>0),children:"Ingresar"})})]})},le=function(){var e=Object(n.useContext)(m).register,t=Object(n.useState)({email:"test6@test.com",password:"123456",name:"Susana Paz"}),a=Object(u.a)(t,2),s=a[0],r=a[1],i=function(e){var t=e.target,a=t.name,c=t.value;r(Object(x.a)(Object(x.a)({},s),{},Object(ie.a)({},a,c)))},j=function(){var t=Object(l.a)(o.a.mark((function t(a){var c,n,r,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),c=s.email,n=s.password,r=s.name,t.next=4,e(r,c,n);case 4:!0!==(i=t.sent)&&G.a.fire("Error",i,"error");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsxs)("form",{className:"login100-form validate-form flex-sb flex-w",onSubmit:j,children:[Object(c.jsx)("span",{className:"login100-form-title mb-3",children:"Chat - Registro"}),Object(c.jsxs)("div",{className:"wrap-input100 validate-input mb-3",children:[Object(c.jsx)("input",{className:"input100",type:"text",name:"name",placeholder:"Nombre",value:s.name,onChange:i}),Object(c.jsx)("span",{className:"focus-input100"})]}),Object(c.jsxs)("div",{className:"wrap-input100 validate-input mb-3",children:[Object(c.jsx)("input",{className:"input100",type:"email",name:"email",placeholder:"Email",value:s.email,onChange:i}),Object(c.jsx)("span",{className:"focus-input100"})]}),Object(c.jsxs)("div",{className:"wrap-input100 validate-input mb-3",children:[Object(c.jsx)("input",{className:"input100",type:"password",name:"password",placeholder:"Password",value:s.password,onChange:i}),Object(c.jsx)("span",{className:"focus-input100"})]}),Object(c.jsx)("div",{className:"row mb-3",children:Object(c.jsx)("div",{className:"col text-right",children:Object(c.jsx)(T.b,{to:"/auth/login",className:"txt1",children:"Ya tienes cuenta?"})})}),Object(c.jsx)("div",{className:"container-login100-form-btn m-t-17",children:Object(c.jsx)("button",{type:"submit",className:"login100-form-btn",disabled:!(s.email.length>0&&s.password.length>0&&s.name.length>0),children:"Crear cuenta"})})]})},ue=(a(183),function(){return Object(c.jsx)("div",{className:"limiter",children:Object(c.jsx)("div",{className:"container-login100",children:Object(c.jsx)("div",{className:"wrap-login100 p-t-50 p-b-90",children:Object(c.jsxs)(R.d,{children:[Object(c.jsx)(R.b,{exact:!0,path:"/auth/login",component:oe}),Object(c.jsx)(R.b,{exact:!0,path:"/auth/register",component:le}),Object(c.jsx)(R.a,{to:"/auth/login"})]})})})})}),je=a(71),de=function(e){var t=e.isAuthenticated,a=e.component,n=Object(je.a)(e,["isAuthenticated","component"]);return Object(c.jsx)(R.b,Object(x.a)(Object(x.a)({},n),{},{component:function(e){return t?Object(c.jsx)(R.a,{to:"/"}):Object(c.jsx)(a,Object(x.a)({},e))}}))},be=function(e){var t=e.isAuthenticated,a=e.component,n=Object(je.a)(e,["isAuthenticated","component"]);return Object(c.jsx)(R.b,Object(x.a)(Object(x.a)({},n),{},{component:function(e){return t?Object(c.jsx)(a,Object(x.a)({},e)):Object(c.jsx)(R.a,{to:"/auth"})}}))},me=function(){var e=Object(n.useContext)(m),t=e.auth,a=e.verificaToken;return Object(n.useEffect)((function(){a()}),[a]),t.checking?Object(c.jsx)("h1",{children:"Espere por favor"}):Object(c.jsx)(T.a,{children:Object(c.jsx)("div",{children:Object(c.jsxs)(R.d,{children:[Object(c.jsx)(de,{isAuthenticated:t.logged,path:"/auth",component:ue}),Object(c.jsx)(be,{isAuthenticated:t.logged,exact:!0,path:"/",component:re}),Object(c.jsx)(R.a,{to:"/"})]})})})};a(184);M.a.locale("es");var he=function(){return Object(c.jsx)(S,{children:Object(c.jsx)(p,{children:Object(c.jsx)(I,{children:Object(c.jsx)(me,{})})})})};a(185);r.a.render(Object(c.jsx)(he,{}),document.getElementById("root"))}},[[186,1,2]]]);
//# sourceMappingURL=main.c0ac91c3.chunk.js.map