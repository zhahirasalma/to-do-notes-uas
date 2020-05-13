(this["webpackJsonpto-do-notes"]=this["webpackJsonpto-do-notes"]||[]).push([[0],{40:function(e,t,a){e.exports=a(71)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(24),c=a.n(r),i=(a(45),a(46),a(38)),s=a(12),l=a(10),u=a(16),d=a(17),p=a(19),m=a(18),h=(a(47),a(11)),g=a(26),v=a.n(g);a(66),a(67);v.a.initializeApp({apiKey:"AIzaSyAgy2k0D_v3DSYNgFIedUzQTScP1TGFnwg",authDomain:"todoapp-ba611.firebaseapp.com",databaseURL:"https://todoapp-ba611.firebaseio.com",projectId:"todoapp-ba611",storageBucket:"todoapp-ba611.appspot.com",messagingSenderId:"544732164949",appId:"1:544732164949:web:6cb999b4a9098e4f7c35dc",measurementId:"G-C4VDBDPQ4T"});var f=v.a.database(),N=v.a,E=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:"",content:"",date:"",textButton:"SIMPAN",noteId:""},e.handleSaveNotes=function(){var t=e.state,a=t.title,n=t.content,o=t.textButton,r=t.noteId,c=e.props,i=c.saveNotes,s=c.updateNotes,l=JSON.parse(localStorage.getItem("userData")),u={title:a,content:n,date:(new Date).getTime(),userId:l.uid};"SIMPAN"===o?i(u):(u.noteId=r,s(u)),console.log(u)},e.onInputChange=function(t,a){e.setState(Object(l.a)({},a,t.target.value))},e.updateNotes=function(t){console.log(t),e.setState({title:t.data.title,content:t.data.content,textButton:"UPDATE",noteId:t.id})},e.cancelUpdate=function(){e.setState({title:"",content:"",textButton:"SIMPAN"})},e.deleteNote=function(t,a){t.stopPropagation(),(0,e.props.deleteNote)({userId:JSON.parse(localStorage.getItem("userData")).uid,noteId:a.id})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("userData"));this.props.getNotes(e.uid)}},{key:"render",value:function(){var e=this,t=this.state,a=t.title,r=t.content,c=t.textButton,i=this.props.notes,s=this.updateNotes,u=this.cancelUpdate,d=this.deleteNote;return console.log("notes: ",i),o.a.createElement("div",{className:"background-only"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"input-form"},o.a.createElement("input",{placeholder:"title",className:"input-title",value:a,onChange:function(t){return e.onInputChange(t,"title")}}),o.a.createElement("textarea",{placeholder:"content",className:"input-content",value:r,onChange:function(t){return e.onInputChange(t,"content")}}),o.a.createElement("div",{className:"action-wrapper"},"UPDATE"===c?o.a.createElement("button",Object(l.a)({className:"save-btn cancel",onClick:this.handleSaveNotes},"onClick",u)," Cancel "):o.a.createElement("div",null),o.a.createElement("button",{className:"save-btn",onClick:this.handleSaveNotes}," ",c," "))),o.a.createElement("hr",null),i.length>0?o.a.createElement(n.Fragment,null,i.map((function(e){return o.a.createElement("div",{className:"card-content",key:e.id,onClick:function(){return s(e)}},o.a.createElement("p",{className:"title"},e.data.title),o.a.createElement("p",{className:"date"},e.data.date),o.a.createElement("p",{className:"content"},e.data.content),o.a.createElement("div",{className:"delete-btn",onClick:function(t){return d(t,e)}},"X"))}))):null))}}]),a}(n.Component),b=Object(h.b)((function(e){return{userData:e.user,notes:e.notes}}),(function(e){return{saveNotes:function(t){return e(function(e){return function(t){f.ref("notes/"+e.userId).push({title:e.title,content:e.content,date:e.date})}}(t))},getNotes:function(t){return e((a=t,function(e){var t=f.ref("notes/"+a);return new Promise((function(a,n){t.on("value",(function(t){if(console.log("get Data: ",t.val()),null!==t.val()){var n=[];Object.keys(t.val()).map((function(e){n.push({id:e,data:t.val()[e]})})),e({type:"SET_NOTES",value:n}),a(t.val())}}))}))}));var a},updateNotes:function(t){return e(function(e){return function(t){var a=f.ref("notes/"+e.userId+"/"+e.noteId);return new Promise((function(t,n){a.set({title:e.title,content:e.content,date:e.date},(function(e){e?n(!1):t(!0)}))}))}}(t))},deleteNote:function(t){return e(function(e){return function(t){var a=f.ref("notes/"+e.userId+"/"+e.noteId);return new Promise((function(e,t){a.remove()}))}}(t))}}}))(E),O=a(29),I=a.n(O),C=a(36),w=function(e){var t=e.title,a=e.onClick;return e.loading?o.a.createElement("button",{className:"btn disable"},"Loading..."):o.a.createElement("button",{className:"btn",onClick:a},t)},y=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:""},e.handleChangeText=function(t){e.setState(Object(l.a)({},t.target.id,t.target.value))},e.handleLoginSubmit=Object(C.a)(I.a.mark((function t(){var a,n,o,r,c;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.email,o=a.password,r=e.props.history,t.next=4,e.props.loginAPI({email:n,password:o}).catch((function(e){return e}));case 4:(c=t.sent)?(console.log("Login Success",c),localStorage.setItem("userData",JSON.stringify(c)),e.setState({email:"",password:""}),r.push("/")):console.log("Login Failed");case 6:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"auth-container"},o.a.createElement("div",{className:"auth-card"},o.a.createElement("p",{className:"auth-title"},"Login Page"),o.a.createElement("input",{className:"input",id:"email",placeholder:"Email",type:"text",onChange:this.handleChangeText,value:this.state.email}),o.a.createElement("input",{className:"input",id:"password",placeholder:"Password",type:"password",onChange:this.handleChangeText,value:this.state.password}),o.a.createElement(w,{onClick:this.handleLoginSubmit,title:"Login",loading:this.props.isLoading}))))}}]),a}(n.Component),S=Object(h.b)((function(e){return{isLoading:e.isLoading}}),(function(e){return{loginAPI:function(t){return e(function(e){return function(t){return new Promise((function(a,n){t({type:"CHANGE_LOADING",value:!0}),N.auth().signInWithEmailAndPassword(e.email,e.password).then((function(e){alert("success: ",e);var n={email:e.user.email,uid:e.user.uid,emailVerified:e.user.emailVerified,refreshToken:e.user.refreshToken};t({type:"CHANGE_LOADING",value:!1}),t({type:"CHANGE_LOGIN",value:!0}),t({type:"CHANGE_USER",value:n}),a(n)})).catch((function(e){var a=e.code,o=e.message;alert(a,o),t({type:"CHANGE_LOADING",value:!1}),t({type:"CHANGE_LOGIN",value:!1}),n(!1)}))}))}}(t))}}}))(y),A=(a(69),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:""},e.handleChangeText=function(t){e.setState(Object(l.a)({},t.target.id,t.target.value))},e.handleRegisterSubmit=function(){var t=e.state,a=t.email,n=t.password;e.props.registerAPI({email:a,password:n}),e.setState({email:"",password:""})},e}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"auth-container"},o.a.createElement("div",{className:"auth-card"},o.a.createElement("p",{className:"auth-title"},"Register Page"),o.a.createElement("input",{className:"input",id:"email",placeholder:"Email",type:"text",onChange:this.handleChangeText,value:this.state.email}),o.a.createElement("input",{className:"input",id:"password",placeholder:"Password",type:"password",onChange:this.handleChangeText,value:this.state.password}),o.a.createElement(w,{onClick:this.handleRegisterSubmit,title:"Register",loading:this.props.isLoading}))),o.a.createElement("button",null,"Go To Dashboard"))}}]),a}(n.Component)),j=Object(h.b)((function(e){return{isLoading:e.isLoading}}),(function(e){return{registerAPI:function(t){return e(function(e){return function(t){return t({type:"CHANGE_LOADING",value:!0}),N.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(e){alert("success: ",e),t({type:"CHANGE_LOADING",value:!1})})).catch((function(e){var a=e.code,n=e.message;alert(a,n),t({type:"CHANGE_LOADING",value:!1})}))}}(t))}}}))(A),L=a(22),G=a(37),k=a(8),P={popup:!1,isLogin:!1,isLoading:!1,user:{},notes:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;return"CHANGE_POPUP"===t.type?Object(k.a)(Object(k.a)({},e),{},{popup:t.value}):"CHANGE_ISLOGIN"===t.type?Object(k.a)(Object(k.a)({},e),{},{isLogin:t.value}):"CHANGE_USER"===t.type?Object(k.a)(Object(k.a)({},e),{},{user:t.value}):"CHANGE_LOADING"===t.type?Object(k.a)(Object(k.a)({},e),{},{isLoading:t.value}):"SET_NOTES"===t.type?Object(k.a)(Object(k.a)({},e),{},{notes:t.value}):e},x=Object(L.c)(D,Object(L.a)(G.a));var T=function(){return o.a.createElement(h.a,{store:x},o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement(s.a,{path:"/login",exact:!0,component:S}),o.a.createElement(s.a,{path:"/register",exact:!0,component:j}),o.a.createElement(s.a,{path:"/",exact:!0,component:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.e5256926.chunk.js.map