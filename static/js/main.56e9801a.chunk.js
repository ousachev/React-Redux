(this.webpackJsonpreact_kamasutra=this.webpackJsonpreact_kamasutra||[]).push([[0],{11:function(e,t,a){e.exports={pageList:"UsersFunc_pageList__tcYYo",curPage:"UsersFunc_curPage__3YhWM",usersList:"UsersFunc_usersList__1yaqc",userItem:"UsersFunc_userItem__1yT21",leftSide:"UsersFunc_leftSide__3LQVq",userAvatar:"UsersFunc_userAvatar__2bggD",followButton:"UsersFunc_followButton__Ux-OV",unfollowButton:"UsersFunc_unfollowButton__2mFur",rightSide:"UsersFunc_rightSide__32537",userDesc:"UsersFunc_userDesc__3pFct",userName:"UsersFunc_userName__3mJwt",userStatus:"UsersFunc_userStatus__3F0rz",userLocation:"UsersFunc_userLocation__3zG7s",userCity:"UsersFunc_userCity__3KT1n"}},117:function(e,t,a){},118:function(e,t,a){},123:function(e,t,a){e.exports=a.p+"static/media/2.69479e8a.gif"},125:function(e,t,a){e.exports=a(251)},130:function(e,t,a){},131:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),o=a(53),i=a.n(o),l=(a(130),a(8)),c=a(29),u=(a(131),a(6)),m=a(28),d=a(9),f={dialogData:[{name:"Evgeny",id:"1"},{name:"Oleg",id:"2"},{name:"Petr",id:"3"},{name:"Max",id:"4"},{name:"Sergey",id:"5"},{name:"Evgeny",id:"6"}],messagesData:[{id:1,text:"Hi"},{id:2,text:"Bye"},{id:3,text:"Dye"},{id:4,text:"Cry"},{id:5,text:"Fly"},{id:6,text:"Try"}]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_NEW_MESSAGE":return Object(d.a)({},e,{messagesData:[].concat(Object(m.a)(e.messagesData),[{id:7,text:t.newMessageBody}])});default:return e}},p=a(18),E=a(19),h=a(21),v=a(20),b=a(22),N=function(e){return{isAuth:e.auth.isAuth}},S=function(e){var t=function(t){function a(){return Object(p.a)(this,a),Object(h.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(b.a)(a,t),Object(E.a)(a,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(c.a,{to:"/login"})}}]),a}(s.a.Component);return Object(u.b)(N)(t)},O=a(117),w=a.n(O),_=function(e){var t=e.name,a=e.id,n=w.a.user,r="dialogs/"+a;return s.a.createElement("li",{className:n},s.a.createElement(l.b,{to:r},t))},j=a(58),A=a.n(j),U=a(118),y=a.n(U),x=function(e){var t=e.text,a=y.a.message;return s.a.createElement("li",{className:a},t)},F=a(253),C=a(252),D=function(e){if(!e)return"Field is required"},M=a(119),P=a(80),L=a.n(P),k=function(e){return function(t){var a=t.input,n=t.meta,r=n.touched,o=n.error,i=Object(M.a)(t,["input","meta"]),l=L.a.formControl,c=L.a.formError,u=r&&o;return s.a.createElement("div",{className:l+" "+(u?c:"")},s.a.createElement("div",null,s.a.createElement(e,Object.assign({},a,i))),u&&s.a.createElement("span",null,o))}},I=k("textarea"),T=k("input"),R=(n=70,function(e){if(!e||e.length>n)return"Max length is ".concat(n," symbols")}),G=Object(C.a)({form:"dialogsForm"})((function(e){var t=e.handleSubmit;return s.a.createElement("form",{onSubmit:t},s.a.createElement(F.a,{component:I,name:"newMessageText",placeholder:"Enter your message...",validate:[R]}),s.a.createElement("button",null,"Send"))})),Y=function(e){var t=e.dialogsPage,a=t.dialogData,n=t.messagesData,r=(t.newPostText,e.sendNewMessage),o=a.map((function(e){return s.a.createElement(_,{name:e.name,id:e.id,key:e.id})})),i=n.map((function(e){return s.a.createElement(x,{text:e.text,id:e.id,key:e.id})})),l=A.a.dialogs,c=A.a.users,u=A.a.messages;return s.a.createElement("div",{className:l},s.a.createElement("ul",{className:c},o),s.a.createElement("div",null,s.a.createElement("ul",{className:u},i),s.a.createElement(G,{onSubmit:function(e){r(e.newMessageText)}})))},B=a(5),W=Object(B.d)(Object(u.b)((function(e){return{dialogsPage:e.dialogsPage}}),{sendNewMessage:function(e){return{type:"SEND_NEW_MESSAGE",newMessageBody:e}}}),S)(Y),z=a(36),Z=a.n(z),H=function(e){var t=e.isAuth,a=e.login,n=e.logout,r=Z.a.header,o=Z.a.logo,i=Z.a.loginBlock,c=Z.a.headerContainer,u=Z.a.loginOn;return s.a.createElement("header",{className:r},s.a.createElement("div",{className:c},s.a.createElement("img",{className:o,src:"https://blog.pioneers.com.ua/wp-content/uploads/2019/01/logo-1.png",alt:""}),s.a.createElement("div",{className:i},t?s.a.createElement("div",{className:u},a,"-",s.a.createElement("a",{href:"/login",onClick:n},"Logout")):s.a.createElement(l.b,{to:"/login"},"Login"))))},K=a(122).create({withCredentials:!0,headers:{"API-KEY":"26f8766b-034d-4092-b8b3-79a879ee6969"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),Q=function(e){var t=e.currentPage,a=e.pageSize;return K.get("users?page=".concat(t,"&count=").concat(a)).then((function(e){return e.data}))},q=function(e){return K.post("follow/".concat(e),{})},X=function(e){return K.delete("https://social-network.samuraijs.com/api/1.0/follow/".concat(e))},V=function(e){return K.get("profile/"+e)},J=function(e){return K.get("profile/status/"+e)},$=function(e){return K.put("profile/status",{status:e})},ee=function(){return K.get("auth/me")},te=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return K.post("auth/login",{email:e,password:t,rememberMe:a})},ae=function(){return K.delete("auth/login")},ne={isAuth:!1,login:null,email:null,userId:null},re=function(e,t,a,n){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:a,isAuth:n}}},se=function(){return function(e){return ee().then((function(t){if(0===t.data.resultCode){var a=t.data.data,n=a.login,r=a.email,s=a.id;e(re(s,r,n,!0))}}))}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(d.a)({},e,{},t.payload);default:return e}},ie=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){var e=this.props,t=e.isAuth,a=e.login,n=e.logout;return s.a.createElement(H,{isAuth:t,login:a,logout:n})}}]),t}(r.Component),le=Object(u.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:se,logout:function(){return function(e){return ae().then((function(t){0===t.data.resultCode&&e(re(null,null,null,!1))}))}}})(ie),ce=function(){return s.a.createElement("div",null)},ue=a(37),me=a.n(ue),de=function(){var e=me.a.nav,t=me.a.nav__list,a=me.a.nav__item,n=me.a.nav__link,r=me.a.active;return s.a.createElement("nav",{className:e},s.a.createElement("ul",{className:t},s.a.createElement("li",{className:a},s.a.createElement(l.b,{className:n,activeClassName:r,to:"/profile",exact:!0},"Profile")),s.a.createElement("li",{className:a},s.a.createElement(l.b,{className:n,activeClassName:r,to:"/dialogs"},"Messages")),s.a.createElement("li",{className:a},s.a.createElement(l.b,{className:n,activeClassName:r,to:"/users"},"Users")),s.a.createElement("li",{className:a},s.a.createElement(l.b,{className:n,activeClassName:r,to:"/news"},"News")),s.a.createElement("li",{className:a},s.a.createElement(l.b,{className:n,activeClassName:r,to:"/music"},"Music")),s.a.createElement("li",{className:a},s.a.createElement(l.b,{className:n,activeClassName:r,to:"/settings"},"Settings"))))},fe=function(){return s.a.createElement("div",null)},ge={postData:[{id:1,message:"Hello my Friend",likesCount:3},{id:2,message:"Reaaaaaaact",likesCount:24}],profile:null,status:""},pe=function(e){return{type:"SET_STATUS",status:e}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return Object(d.a)({},e,{postData:[].concat(Object(m.a)(e.postData),[{id:5,message:t.newPostText,likesCount:0}])});case"SET_USER_PROFILE":return Object(d.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(d.a)({},e,{status:t.status});default:return e}},he=a(83),ve=a.n(he),be=a(84),Ne=a.n(be),Se=function(e){var t=e.message,a=e.likeCounter,n=Ne.a.item,r=Ne.a.avatar;return s.a.createElement("div",null,s.a.createElement("div",{className:n},s.a.createElement("img",{className:r,src:"data:image/png;base64,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",alt:""}),t," ",a))},Oe=function(e){var t=e.profilePage.postData,a=e.addPost,n=ve.a.postSection,r=ve.a.title,o=t.map((function(e){return s.a.createElement(Se,{message:e.message,likeCounter:e.likeCount,id:e.id,key:e.id})}));return s.a.createElement("div",{className:n},s.a.createElement("h3",{className:r},"My posts"),s.a.createElement("div",null,o),s.a.createElement(we,{onSubmit:function(e){a(e.newPostText)}}))},we=Object(C.a)({form:"postForm"})((function(e){var t=e.handleSubmit;return s.a.createElement("form",{onSubmit:t},s.a.createElement("div",null,s.a.createElement(F.a,{component:I,name:"newPostText",placeholder:"post message here..."})),s.a.createElement("div",null,s.a.createElement("button",null,"Add Post")))})),_e=Object(u.b)((function(e){return{profilePage:e.profilePage}}),{addPost:function(e){return{type:"ADD_POST",newPostText:e}}})(Oe),je=a(35),Ae=a.n(je),Ue=a(57),ye=a.n(Ue),xe=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={editMode:!1,status:a.props.status},a.onStatusHandler=function(){a.setState({editMode:!0})},a.offStatusHandler=function(){a.setState({editMode:!1}),a.props.updateStatus(a.state.status)},a.onKeySetStatus=function(e){13===e.keyCode&&a.offStatusHandler()},a.onStatusChange=function(e){a.setState({status:e.currentTarget.value})},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.status===!this.state.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){var e=this.state,t=e.editMode,a=e.status,n=Ae.a.profileStatus;return s.a.createElement("div",null,t?s.a.createElement("input",{autoFocus:!0,onBlur:this.offStatusHandler,onKeyDown:this.onKeySetStatus,value:a,onChange:this.onStatusChange}):s.a.createElement("span",{className:n,onClick:this.onStatusHandler},a||"No Status"))}}]),t}(r.Component),Fe=a(123),Ce=a.n(Fe),De=function(){return s.a.createElement("div",null,s.a.createElement("img",{src:Ce.a,alt:"preloader"}))},Me=function(e){var t=e.profile,a=e.status,n=e.updateStatus,r=Ae.a.profileDesc,o=Ae.a.profileBlock,i=Ae.a.profileAvatar;return t?s.a.createElement("div",{className:o},s.a.createElement("img",{className:i,src:t.photos.large?t.photos.large:ye.a,alt:""}),s.a.createElement("div",{className:r},s.a.createElement(xe,{status:a,updateStatus:n}),s.a.createElement("ul",null,Object.entries(t.contacts).map((function(e){return s.a.createElement("li",{key:e[0]},e[1])}))))):s.a.createElement(De,null)},Pe=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return s.a.createElement("div",null,s.a.createElement(Me,{profile:t,status:a,updateStatus:n}),s.a.createElement(_e,null))},Le=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getUserProfile,a=e.match,n=e.getUserStatus,r=a.params.userId;r||(r=2),t(r),n(r)}},{key:"render",value:function(){return s.a.createElement(Pe,this.props)}}]),t}(r.Component),ke=Object(B.d)(Object(u.b)((function(e){var t=e.profilePage;return{profile:t.profile,status:t.status}}),{getUserProfile:function(e){return function(t){V(e).then((function(e){t({type:"SET_USER_PROFILE",profile:e.data})}))}},getUserStatus:function(e){return function(t){J(e).then((function(e){t(pe(e.data))}))}},updateStatus:function(e){return function(t){$(e).then((function(a){0===a.data.resultCode&&t(pe(e))}))}}}),c.f,S)(Le),Ie=function(){return s.a.createElement("div",null)},Te={users:[],pageSize:30,currentPage:1,totalUsers:0,isLoading:!0,isFollowing:[]},Re=function(e){return{type:"SET_IS_LOADING",isLoading:e}},Ge=function(e,t){return{type:"TOGGLE_IS_FOLLOWING",isLoading:e,id:t}},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(d.a)({},e,{users:e.users.map((function(e){return e.id===t.id?Object(d.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(d.a)({},e,{users:Object(m.a)(e.users.map((function(e){return e.id===t.id?Object(d.a)({},e,{followed:!1}):e})))});case"SET_USERS":return Object(d.a)({},e,{users:Object(m.a)(t.users)});case"SET_TOTAL_USERS":return Object(d.a)({},e,{totalUsers:t.totalUsers});case"SET_CURRENT_PAGE":return Object(d.a)({},e,{currentPage:t.currentPage});case"SET_IS_LOADING":return Object(d.a)({},e,{isLoading:t.isLoading});case"TOGGLE_IS_FOLLOWING":return Object(d.a)({},e,{isFollowing:t.isLoading?[].concat(Object(m.a)(e.isFollowing),[t.id]):[e.isFollowing.filter((function(e){return e!==t.id}))]});default:return e}},Be=a(11),We=a.n(Be),ze=function(e){for(var t=e.users,a=e.follow,n=e.unfollow,r=e.totalUsers,o=e.currentPage,i=e.pageSize,c=e.onPageChanged,u=e.isFollowing,m=We.a.leftSide,d=We.a.rightSide,f=We.a.usersList,g=We.a.userItem,p=We.a.userAvatar,E=We.a.userDesc,h=We.a.userCity,v=We.a.userCountry,b=We.a.followButton,N=We.a.userLocation,S=We.a.userName,O=We.a.userStatus,w=We.a.unfollowButton,_=We.a.pageList,j=We.a.curPage,A=Math.ceil(r/i),U=[],y=1;y<=A;y++)U.push(y);return s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:_},U.map((function(e){return s.a.createElement("li",{onClick:function(){return c(e)},className:o===e?j:"",key:e+"id"},e)}))),s.a.createElement("div",{className:f},t.map((function(e){return s.a.createElement("div",{className:g,key:e.id},s.a.createElement("div",{className:m},s.a.createElement(l.b,{to:"/profile/"+e.id},s.a.createElement("div",{className:p},s.a.createElement("img",{style:{width:80,height:80},src:null!=e.photos.small?e.photos.small:ye.a,alt:"ava"}))),e.followed?s.a.createElement("button",{disabled:u.some((function(t){return t===e.id})),onClick:function(){n(e.id)},className:w},"UNFOLLOW"):s.a.createElement("button",{disabled:u.some((function(t){return t===e.id})),onClick:function(){a(e.id)},className:b},"FOLLOW")),s.a.createElement("div",{className:d},s.a.createElement("div",{className:E},s.a.createElement("span",{className:S},e.name),s.a.createElement("span",{className:O},"user.status")),s.a.createElement("div",{className:N},s.a.createElement("div",{className:h},"user.location.city"),s.a.createElement("div",{className:v},"user.location.country"))))}))))},Ze=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){var t=a.props;(0,t.getUsers)(e,t.pageSize)},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){var e=this.props,t=e.totalUsers,a=e.users,n=e.pageSize,r=e.currentPage,o=e.follow,i=e.unfollow,l=e.isLoading,c=e.isFollowing;return s.a.createElement(s.a.Fragment,null,l?s.a.createElement(De,null):s.a.createElement(ze,{onPageChanged:this.onPageChanged,users:a,totalUsers:t,pageSize:n,currentPage:r,follow:o,unfollow:i,isFollowing:c}))}}]),t}(r.Component),He=Object(u.b)((function(e){var t=e.usersPage;return{users:t.users,pageSize:t.pageSize,currentPage:t.currentPage,totalUsers:t.totalUsers,isLoading:t.isLoading,isFollowing:t.isFollowing}}),{follow:function(e){return function(t){t(Ge(!0,e)),q(e).then((function(a){0===a.data.resultCode&&t({type:"FOLLOW",id:e}),t(Ge(!1,e))}))}},unfollow:function(e){return function(t){t(Ge(!0,e)),X(e).then((function(a){0===a.data.resultCode&&t({type:"UNFOLLOW",id:e}),t(Ge(!1,e))}))}},toggleIsFollowing:Ge,getUsers:function(e,t){return function(a){a(function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}}(e)),a(Re(!0)),Q(e,t).then((function(e){a({type:"SET_USERS",users:e.items}),a({type:"SET_TOTAL_USERS",totalUsers:e.totalCount/4}),a(Re(!1))}))}}})(Ze),Ke=a(44),Qe=a.n(Ke),qe=Object(C.a)({form:"login"})((function(e){var t=e.handleSubmit,a=Qe.a.form,n=Qe.a.formField,r=Qe.a.formRememberMe,o=Qe.a.formCheckbox;return s.a.createElement("form",{className:a,onSubmit:t},s.a.createElement(F.a,{placeholder:"Email",name:"email",component:T,className:n,validate:[D]}),s.a.createElement(F.a,{placeholder:"Password",name:"password",component:T,className:n,type:"password",validate:[D]}),s.a.createElement("label",{className:r},s.a.createElement(F.a,{type:"checkbox",name:"rememberMe",component:T,className:o}),"Remember me"),s.a.createElement("button",null,"Send"))})),Xe=Object(u.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,a){return function(n){return te(e,t,a).then((function(e){0===e.data.resultCode&&n(se())}))}}})((function(e){var t=e.login;return e.isAuth?s.a.createElement(c.a,{to:"profile"}):s.a.createElement("div",{style:{width:"200px",padding:"20px"}},s.a.createElement("h1",{style:{marginBottom:"30px",fontSize:"40px"}},"LOGIN"),s.a.createElement(qe,{onSubmit:function(e){t(e.email,e.password,e.rememberMe)}}))})),Ve=function(){return s.a.createElement(l.a,null,s.a.createElement("div",{className:"wrapper"},s.a.createElement(le,null),s.a.createElement("div",{className:"container"},s.a.createElement(de,null),s.a.createElement("div",{className:"wrapper-content"},s.a.createElement(c.a,{exact:!0,from:"/",to:"/profile"}),s.a.createElement(c.b,{path:"/login",render:function(){return s.a.createElement(Xe,null)}}),s.a.createElement(c.b,{path:"/profile/:userId?",render:function(){return s.a.createElement(ke,null)}}),s.a.createElement(c.b,{exact:!0,path:"/dialogs",render:function(){return s.a.createElement(W,null)}}),s.a.createElement(c.b,{exact:!0,path:"/users",render:function(){return s.a.createElement(He,null)}}),s.a.createElement(c.b,{exact:!0,path:"/news",component:fe}),s.a.createElement(c.b,{exact:!0,path:"/music",component:ce}),s.a.createElement(c.b,{exact:!0,path:"/settings",component:Ie})))))},Je={},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je;arguments.length>1&&arguments[1];return e},et=a(124),tt=a(254),at=Object(B.c)({profilePage:Ee,dialogsPage:g,sideBar:$e,usersPage:Ye,auth:oe,form:tt.a}),nt=Object(B.e)(at,Object(B.a)(et.a));i.a.render(s.a.createElement(u.a,{store:nt},s.a.createElement(Ve,null)),document.getElementById("root")),window.store=nt},35:function(e,t,a){e.exports={profileBlock:"ProfileItem_profileBlock__3x8bF",profileDesc:"ProfileItem_profileDesc__265AB",profileAvatar:"ProfileItem_profileAvatar__3EjtQ",profileStatus:"ProfileItem_profileStatus__2KZA7"}},36:function(e,t,a){e.exports={header:"Header_header__2G3vU",headerContainer:"Header_headerContainer__Y5lTu",logo:"Header_logo__1n4Vh",loginBlock:"Header_loginBlock__isfSy",loginOn:"Header_loginOn__3amln"}},37:function(e,t,a){e.exports={nav:"Navigation_nav__2WiUx",nav__list:"Navigation_nav__list__1lsHl",nav__item:"Navigation_nav__item__20Kmc",nav__link:"Navigation_nav__link__20zGX",active:"Navigation_active__2_iv0"}},44:function(e,t,a){e.exports={form:"Login_form__2zzKu",formField:"Login_formField__2pd1f",formRememberMe:"Login_formRememberMe__IPZ2L",formCheckbox:"Login_formCheckbox__22Qoc"}},57:function(e,t,a){e.exports=a.p+"static/media/1.a61d19a0.png"},58:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__lRT9W",users:"Dialogs_users__4U5si",messages:"Dialogs_messages__NzS9i",active:"Dialogs_active__3XFT0"}},80:function(e,t,a){e.exports={formControl:"FormControls_formControl__2w4FF",formError:"FormControls_formError__3bt_6"}},83:function(e,t,a){e.exports={postSection:"MyPosts_postSection__OEKbd",addPost:"MyPosts_addPost__1I3LG",title:"MyPosts_title__1cZgS"}},84:function(e,t,a){e.exports={item:"Post_item__2SyKU",avatar:"Post_avatar__68SW3"}}},[[125,1,2]]]);
//# sourceMappingURL=main.56e9801a.chunk.js.map