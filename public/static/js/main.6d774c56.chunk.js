(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{125:function(e,t,a){e.exports=a(293)},133:function(e,t,a){},180:function(e,t){},293:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(19),s=a(31),l=a(117),u=a(9),m={toys:[],dataPricePerType:{},dataToyPerYear:{},editToyId:null};var p={currUser:{name:"Popo"}};var d=Object(s.c)({toyReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOYS":return Object(u.a)(Object(u.a)({},e),{},{toys:t.toys});case"REMOVE_TOYS":return Object(u.a)(Object(u.a)({},e),{},{toys:e.toys.filter((function(e){return e._id!==t.toyId}))});case"SET_DATA_PRICE_PER_TYPE":return Object(u.a)(Object(u.a)({},e),{},{dataPricePerType:t.dataPricePerType});case"SET_DATA_TOY_PER_YEAR":return Object(u.a)(Object(u.a)({},e),{},{dataToyPerYear:t.dataToyPerYear});case"SET_EDIT_TOY":return Object(u.a)(Object(u.a)({},e),{},{editToyId:t.toyId});default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CURR_USER":return Object(u.a)(Object(u.a)({},e),{},{currUser:t.user});default:return e}}}),f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,y=Object(s.e)(d,f(Object(s.a)(l.a))),v=(a(133),a(5)),E=a(13),h=a(14),b=a(16),g=a(15),O=a(10),_=a(307),T=a(2),j=a.n(T),k=a(8),S=a(51),w=a.n(S),P=w.a.create({withCredentials:!0}),C={query:function(){return N.apply(this,arguments)},getById:function(e){return I.apply(this,arguments)},save:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!t){var a={name:e.name,createdAt:e.CreatedAt,price:+e.price,type:"Funny",inStock:!0,imgURL:e.imgURL};return P.put("".concat("/api/toy","/add"),a)}},remove:function(e){return P.delete("".concat("/api/toy","/").concat(e))},getDataPricePerType:function(e){var t={};e.forEach((function(e){t[e.type]?t[e.type].push(e.price):t[e.type]=[e.price]}));var a=Object.keys(t),n=Object.values(t),r=[];return n.forEach((function(e){var t=e.reduce((function(e,t){return e+t}),0);r.push(+(t/e.length).toFixed(2))})),t={labels:a,datasets:[{data:r,backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},Promise.resolve(t)},getDataToysPerYear:function(e){var t={};e.forEach((function(e){var a=e.createdAt.substr(0,4);t[a]?t[a]++:t[a]=1}));var a=Object.keys(t),n=Object.values(t);return t={labels:a,datasets:[{data:n,backgroundColor:a.map((function(e){return"#FF6384"})),hoverBackgroundColor:["#FF6384"]}]},Promise.resolve(t)}};function N(){return(N=Object(k.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/api/toy");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(k.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("".concat("/api/toy","/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return function(){var e=Object(k.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.query();case 2:a=e.sent,t({type:"SET_TOYS",toys:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function x(e){var t=e.toy,a=e.onRemove,n=e.onEdit;return r.a.createElement("div",{className:"toy-preview animate__animated animate__bounceInLeft"},r.a.createElement("p",null,"Name: ",t.name),r.a.createElement("div",{className:"flex"},r.a.createElement("p",null,"Price: ",t.price),r.a.createElement("p",{className:"toy-details"},"In stoke: ",t.inStock?"Yes":"No")),r.a.createElement("div",null,r.a.createElement(O.b,{to:"/toy/details/".concat(t._id),className:"details-link toy-btn"},"Details"),r.a.createElement(O.b,{to:"/toy/edit/".concat(t._id),className:"details-link toy-btn",onClick:function(){return n(t._id)}},"Edit"),r.a.createElement("button",{className:"toy-btn",onClick:function(){return a(t._id)}},"Delete")))}function R(e){var t=e.toys,a=e.onRemove,n=e.onEdit;return r.a.createElement("div",{className:"main-container"},t.map((function(e){return r.a.createElement(x,{toy:e,key:e._id,onRemove:a,onEdit:n})})))}var D,U=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.loadToy()}},{key:"render",value:function(){var e=this,t=this.props.toys;return r.a.createElement("div",{className:"toy-page"},r.a.createElement("header",null,r.a.createElement("h2",{className:"page-header animate__animated animate__fadeIn"},"Toy Application")),r.a.createElement(O.b,{to:"/toy/edit"},r.a.createElement(_.a,{variant:"contained",className:"material-btn",onClick:function(){return e.props.startEditToy(null)}},"Add Toy")),r.a.createElement(O.b,{to:"/toy/statistics"},r.a.createElement(_.a,{variant:"contained",className:"material-btn"},"Statistics")),r.a.createElement(R,{toys:t,onRemove:this.props.removeToy,onEdit:this.props.startEditToy}))}}]),a}(n.Component),Y={loadToy:A,removeToy:function(e){return function(){var t=Object(k.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.remove(e);case 2:a({type:"REMOVE_TOYS",toyId:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},startEditToy:function(e){return function(t){t({type:"SET_EDIT_TOY",toyId:e})}}},F=Object(i.b)((function(e){return{toys:e.toyReducer.toys}}),Y)(U),M=a(123),B=a(73),L=a.n(B),V={setup:function(){D=L()("/")},terminate:function(){D=null},on:function(e,t){D.on(e,t)},off:function(e,t){D.off(e,t)},emit:function(e,t){console.log("emit -> data",t),D.emit(e,t)}};a(73);var q=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={toy:null,msg:"",msgs:[]},e.onSubmit=function(t){t.preventDefault(),console.log(e.state.msg);var a={from:e.props.currUser.name,msg:e.state.msg};V.emit("chat sendMsg",a),e.setState({msg:""})},e.handleValueChange=function(t){var a=t.target.value;e.setState({msg:a})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(j.a.mark((function e(){var t,a,n=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.toyId,e.next=3,C.getById(t);case 3:a=e.sent,this.setState({toy:a}),V.setup(),V.emit("toy id",t),V.on("chat history",(function(e){console.log("History: ",e),n.setState({msgs:e})})),V.on("chat receiveMsg",(function(e){console.log("FRONTEND Got msg:",e),n.setState({msgs:[].concat(Object(M.a)(n.state.msgs),[e])})}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){V.terminate()}},{key:"render",value:function(){var e=this.state.toy;return e?r.a.createElement("div",{className:"toy-details"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{id:"m",autoComplete:"off",value:this.state.msg,onChange:this.handleValueChange}),r.a.createElement("button",null,"Send")),r.a.createElement("ul",{id:"messages"},this.state.msgs.map((function(e,t){return r.a.createElement("li",{key:t},e.from,": ",e.msg)}))),r.a.createElement("p",null,"Id: ",e._id),r.a.createElement("p",null,"Name: ",e.name),r.a.createElement("p",null,"Type: ",e.type),r.a.createElement("p",null,"Price: ",e.price),r.a.createElement("p",null,"Created At: ",e.createdAt),r.a.createElement("p",null,"In stoke: ",e.inStock?"Yes":"No"),r.a.createElement("img",{src:e.imgURL}),r.a.createElement(O.b,{to:"/toy"},"Back")):r.a.createElement("div",null,"Loading...")}}]),a}(n.Component),W=Object(i.b)((function(e){return{currUser:e.userReducer.currUser}}))(q),G=a(4),Z=w.a.create({withCredentials:!0}),$={saveUser:function(e){return console.log("saveUser -> user",e),Z.put("".concat("/api/auth","/add"),e)},login:function(e){return console.log("saveUser -> user",e),Z.post("".concat("/api/auth","/login"),e)}};var z=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"sighin-page"},r.a.createElement("h1",null,"Sigh In"),r.a.createElement("div",null,r.a.createElement(G.d,{initialValues:{name:"",password:""},validate:function(e){var t={};return e.password?/^[A-Z0-9._%+-]{4,}/i.test(e.password)||(t.password="Invalid password {longer then 4 char}"):t.password="Required",e.name?/^[A-Z0-9._%+-]{1,}/i.test(e.name)||(t.name="Invalid name"):t.name="Required",t},onSubmit:function(t,a){var n=a.setSubmitting;setTimeout(Object(k.a)(j.a.mark((function a(){var r;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(!1),r=Object(u.a)(Object(u.a)({},t),{},{isAdmin:!1}),a.next=4,$.saveUser(r);case 4:return a.next=6,e.props.updateCurrUser(r);case 6:e.props.history.push("/toy");case 7:case"end":return a.stop()}}),a)}))),400)}},(function(e){var t=e.isSubmitting;return r.a.createElement("div",{className:"edit-page"},r.a.createElement(G.c,{className:"formik"},r.a.createElement("p",null,"User Name"),r.a.createElement(G.b,{type:"name",name:"name"}),r.a.createElement(G.a,{name:"name",component:"div"}),r.a.createElement("p",null,"Password"),r.a.createElement(G.b,{type:"name",name:"password"}),r.a.createElement(G.a,{name:"password",component:"div"}),r.a.createElement("button",{type:"submit",disabled:t},"Submit")))}))))}}]),a}(n.Component),H={updateCurrUser:function(e){return function(){var t=Object(k.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"UPDATE_CURR_USER",user:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},J=Object(i.b)(null,H)(z),X=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sighin-page"},r.a.createElement("h1",null,"Sigh In"),r.a.createElement("div",null,r.a.createElement(G.d,{initialValues:{name:"",password:""},onSubmit:function(e,t){var a=t.setSubmitting;setTimeout(Object(k.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(!1),t.next=3,$.login(e);case 3:t.sent,console.log("Login -> render -> values",e);case 5:case"end":return t.stop()}}),t)}))),400)}},(function(e){var t=e.isSubmitting;return r.a.createElement("div",{className:"edit-page"},r.a.createElement(G.c,{className:"formik"},r.a.createElement("p",null,"User Name"),r.a.createElement(G.b,{type:"name",name:"name"}),r.a.createElement(G.a,{name:"name",component:"div"}),r.a.createElement("p",null,"Password"),r.a.createElement(G.b,{type:"password",name:"password"}),r.a.createElement(G.a,{name:"password",component:"div"}),r.a.createElement("button",{type:"submit",disabled:t},"Submit")))}))))}}]),a}(n.Component),K={uploadImg:function(e){return Q.apply(this,arguments)}};function Q(){return(Q=Object(k.a)(j.a.mark((function e(t){var a,n,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"cloudinary-img",a="https://api.cloudinary.com/v1_1/".concat("cloudinary-img","/image/upload"),(n=new FormData).append("file",t.target.files[0]),n.append("upload_preset","ml_default"),e.prev=5,e.next=8,fetch(a,{method:"POST",body:n});case 8:return r=e.sent,e.next=11,r.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}var ee=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={urlImg:""},e.onAddImg=function(){var t=Object(k.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K.uploadImg(a);case 2:n=t.sent,e.setState({urlImg:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"add-img-container animate__animated animate__bounceInLeft"},r.a.createElement("label",null," Add image to your toy "),r.a.createElement("input",{onChange:this.onAddImg,type:"file"})),r.a.createElement(G.d,{initialValues:{CreatedAt:"",name:"",price:""},validate:function(e){var t={};return e.CreatedAt?/^[0-9]{4}$/i.test(e.CreatedAt)||(t.CreatedAt="Invalid Time {Ex: 1992}"):t.CreatedAt="Required",e.price?/^[0-9]{1,4}$/i.test(e.price)||(t.price="Invalid Price {Ex: 1-9,999}"):t.price="Required",e.name?/^[A-Z0-9._%+-]{1,}/i.test(e.name)||(t.name="Invalid name"):t.name="Required",t},onSubmit:function(t,a){var n=a.setSubmitting;setTimeout(Object(k.a)(j.a.mark((function a(){var r;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(!1),r=Object(u.a)(Object(u.a)({},t),{},{imgURL:e.state.urlImg}),console.log("render -> toy",r),a.next=5,C.save(r);case 5:e.props.loadToy(),e.props.history.push("/toy");case 7:case"end":return a.stop()}}),a)}))),400)}},(function(e){var t=e.isSubmitting;return r.a.createElement("div",{className:"edit-page"},r.a.createElement(G.c,{className:"formik animate__animated animate__bounceInRight"},r.a.createElement("p",null,"Name"),r.a.createElement(G.b,{type:"name",name:"name"}),r.a.createElement(G.a,{name:"name",component:"div"}),r.a.createElement("p",null,"Price"),r.a.createElement(G.b,{type:"name",name:"price"}),r.a.createElement(G.a,{name:"price",component:"div"}),r.a.createElement("p",null,"CreatedAt"),r.a.createElement(G.b,{type:"name",name:"CreatedAt"}),r.a.createElement(G.a,{name:"CreatedAt",component:"div"}),r.a.createElement("button",{type:"submit",disabled:t},"Submit")))})))}}]),a}(r.a.Component),te={loadToy:A},ae=Object(i.b)((function(e){return{editToyId:e.toyReducer.editToyId}}),te)(ee),ne=a(34),re=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={lat:32.0853,lng:34.7818},e.onMarkerClick=function(e,t,a){console.log("props:",e," marker:",t,"event",a)},e.onMapClicked=function(t,a,n){e.setState({lat:n.latLng.lat(),lng:n.latLng.lng()})},e.changeStore=function(t){e.setState({lat:t.lat,lng:t.lng})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"google-map-container"},r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(_.a,{variant:"contained",color:"primary",onClick:function(){return e.changeStore({lat:32.0853,lng:34.7818})}},"Store 1"),r.a.createElement(_.a,{variant:"contained",color:"primary",onClick:function(){return e.changeStore({lat:32.0953,lng:34.7918})}},"Store 2"),r.a.createElement(_.a,{variant:"contained",color:"primary",onClick:function(){return e.changeStore({lat:32.1053,lng:34.8018})}},"Store 3")),r.a.createElement(ne.Map,{className:"main-container",initialCenter:this.state,center:this.state,onClick:this.onMapClicked,google:this.props.google,zoom:12},r.a.createElement(ne.Marker,{position:{lat:32.0853,lng:34.7818},name:"ShopBranch1"}),r.a.createElement(ne.Marker,{position:{lat:32.0953,lng:34.7918},name:"ShopBranch2"}),r.a.createElement(ne.Marker,{position:{lat:32.1053,lng:34.8018},name:"ShopBranch3"})))}}]),a}(r.a.Component),ce=Object(ne.GoogleApiWrapper)({apiKey:"AIzaSyA7wFxeGayDFtxLfft53sDr7sMu9cj7Vio"})(re);var oe=a(78),ie=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.loadData("PricePerType"),this.props.loadData("ToyPerYear")}},{key:"render",value:function(){var e=this.props,t=e.dataPricePerType,a=e.dataToyPerYear;return t&&a?r.a.createElement("div",{className:"statistics-container"},r.a.createElement("h1",{className:"animate__animated animate__fadeIn"},"Statistics"),r.a.createElement(O.b,{to:"/toy",className:"animate__animated animate__fadeIn"},r.a.createElement(_.a,{variant:"contained",className:"material-btn"},"Back")),r.a.createElement("h3",null,"Toy Per Year"),r.a.createElement(oe.Pie,{data:a}),r.a.createElement("h3",null,"Price Per Type"),r.a.createElement(oe.Polar,{data:t})):r.a.createElement("div",null,"Loading...")}}]),a}(n.Component),se={loadData:function(e){return function(){var t=Object(k.a)(j.a.mark((function t(a){var n,r,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.query();case 2:if(n=t.sent,"PricePerType"!==e){t.next=10;break}return t.next=6,C.getDataPricePerType(n);case 6:r=t.sent,a({type:"SET_DATA_PRICE_PER_TYPE",dataPricePerType:r}),t.next=14;break;case 10:return t.next=12,C.getDataToysPerYear(n);case 12:c=t.sent,a({type:"SET_DATA_TOY_PER_YEAR",dataToyPerYear:c});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},le=[{path:"/toy/details/:toyId",component:W},{path:"/toy/edit/:toyId?",component:ae},{path:"/toy/statistics",component:Object(i.b)((function(e){return{dataPricePerType:e.toyReducer.dataPricePerType,dataToyPerYear:e.toyReducer.dataToyPerYear}}),se)(ie)},{path:"/login",component:X},{path:"/sighin",component:J},{path:"/toy",component:F},{path:"/",component:function(){return r.a.createElement("div",{className:"about-page"},r.a.createElement("section",{className:"main-container"},r.a.createElement("h1",{className:"page-header animate__animated animate__fadeIn"},"Welcome to Toysi - Our stores"),r.a.createElement(O.b,{to:"/toy"},r.a.createElement(_.a,{variant:"contained",className:"material-btn"},"Toys")),r.a.createElement(ce,null)))}}];var ue=Object(v.f)((function(){return r.a.createElement("nav",{className:"nav-bar flex"},r.a.createElement(O.b,{className:"nav-item",to:"/"},"Home"),r.a.createElement(O.b,{className:"nav-item",to:"/toy"},"Toys"),r.a.createElement(O.b,{className:"nav-item",to:"/sighin"},"Sighin"))}));var me=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O.a,null,r.a.createElement(ue,null),r.a.createElement(v.c,null,le.map((function(e){return r.a.createElement(v.a,{key:e.path,exact:!0,component:e.component,path:e.path})})))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:y},r.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[125,1,2]]]);
//# sourceMappingURL=main.6d774c56.chunk.js.map