(this.webpackJsonpreact_kamasutra=this.webpackJsonpreact_kamasutra||[]).push([[0],{20:function(e,t,a){e.exports={nav:"Navigation_nav__2WiUx",nav__list:"Navigation_nav__list__1lsHl",nav__item:"Navigation_nav__item__20Kmc",nav__link:"Navigation_nav__link__20zGX",active:"Navigation_active__2_iv0"}},23:function(e,t,a){e.exports={header:"Header_header__2G3vU",headerContainer:"Header_headerContainer__Y5lTu",logo:"Header_logo__1n4Vh",loginBlock:"Header_loginBlock__isfSy"}},26:function(e,t,a){e.exports={postSection:"MyPosts_postSection__OEKbd",addPost:"MyPosts_addPost__1I3LG",title:"MyPosts_title__1cZgS"}},27:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__lRT9W",users:"Dialogs_users__4U5si",messages:"Dialogs_messages__NzS9i",active:"Dialogs_active__3XFT0"}},31:function(e,t,a){e.exports={item:"Post_item__2SyKU",avatar:"Post_avatar__68SW3"}},33:function(e,t,a){e.exports={profileBlock:"ProfileItem_profileBlock__3x8bF",profileDesc:"ProfileItem_profileDesc__265AB"}},4:function(e,t,a){e.exports={pageList:"UsersFunc_pageList__tcYYo",curPage:"UsersFunc_curPage__3YhWM",usersList:"UsersFunc_usersList__1yaqc",userItem:"UsersFunc_userItem__1yT21",leftSide:"UsersFunc_leftSide__3LQVq",userAvatar:"UsersFunc_userAvatar__2bggD",followButton:"UsersFunc_followButton__Ux-OV",unfollowButton:"UsersFunc_unfollowButton__2mFur",rightSide:"UsersFunc_rightSide__32537",userDesc:"UsersFunc_userDesc__3pFct",userName:"UsersFunc_userName__3mJwt",userStatus:"UsersFunc_userStatus__3F0rz",userLocation:"UsersFunc_userLocation__3zG7s",userCity:"UsersFunc_userCity__3KT1n"}},46:function(e,t,a){e.exports=a.p+"static/media/2.69479e8a.gif"},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){e.exports=a.p+"static/media/1.a61d19a0.png"},50:function(e,t,a){e.exports=a(79)},55:function(e,t,a){},56:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(24),i=a.n(r),o=(a(55),a(56),a(20)),l=a.n(o),c=a(3),u=function(){var e=l.a.nav,t=l.a.nav__list,a=l.a.nav__item,n=l.a.nav__link,r=l.a.active;return s.a.createElement("nav",{className:e},s.a.createElement("ul",{className:t},s.a.createElement("li",{className:a},s.a.createElement(c.b,{className:n,activeClassName:r,to:"/profile",exact:!0},"Profile")),s.a.createElement("li",{className:a},s.a.createElement(c.b,{className:n,activeClassName:r,to:"/dialogs"},"Messages")),s.a.createElement("li",{className:a},s.a.createElement(c.b,{className:n,activeClassName:r,to:"/users"},"Users")),s.a.createElement("li",{className:a},s.a.createElement(c.b,{className:n,activeClassName:r,to:"/news"},"News")),s.a.createElement("li",{className:a},s.a.createElement(c.b,{className:n,activeClassName:r,to:"/music"},"Music")),s.a.createElement("li",{className:a},s.a.createElement(c.b,{className:n,activeClassName:r,to:"/settings"},"Settings"))))},m=a(15),d=a(16),g=a(18),p=a(17),f=a(19),E=a(11),h=a(1),v={postData:[{id:1,message:"Hello my Friend",likesCount:3},{id:2,message:"Reaaaaaaact",likesCount:24}],newPostText:"Hello",profile:null},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return Object(h.a)({},e,{postData:[].concat(Object(E.a)(e.postData),[{id:5,message:e.newPostText,likesCount:0}]),newPostText:""});case"UPDATE_POST_TEXT":return Object(h.a)({},e,{newPostText:t.newText});case"SET_USER_PROFILE":return Object(h.a)({},e,{profile:t.profile});default:return e}},w=a(26),b=a.n(w),O=a(31),A=a.n(O),U=function(e){var t=e.message,a=e.likeCounter,n=A.a.item,r=A.a.avatar;return s.a.createElement("div",null,s.a.createElement("div",{className:n},s.a.createElement("img",{className:r,src:"data:image/png;base64,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",alt:""}),t," ",a))},_=function(e){var t=e.profilePage,a=t.postData,n=t.newPostText,r=e.addPost,i=e.updateNewPostChange,o=b.a.postSection,l=b.a.addPostButton,c=b.a.title,u=a.map((function(e){return s.a.createElement(U,{message:e.message,likeCounter:e.likeCount,id:e.id,key:e.id})})),m=s.a.createRef();return s.a.createElement("div",{className:o},s.a.createElement("div",null,s.a.createElement("textarea",{onChange:function(){var e=m.current.value;i(e)},ref:m,value:n,cols:"30",rows:"3"})),s.a.createElement("button",{onClick:function(){r()},className:l},"add Post"),s.a.createElement("h3",{className:c},"My posts"),s.a.createElement("div",null,u))},j=a(7),S=Object(j.b)((function(e){return{profilePage:e.profilePage}}),{updatePostText:function(e){return{type:"UPDATE_POST_TEXT",newText:e}},addPost:function(){return{type:"ADD_POST"}}})(_),x=a(33),P=a.n(x),D=a(46),T=a.n(D),F=function(){return s.a.createElement("div",null,s.a.createElement("img",{src:T.a,alt:"preloader"}))},M=function(e){var t=e.profile,a=P.a.profileDesc,n=P.a.profileBlock;return t?s.a.createElement("div",{className:n},s.a.createElement("img",{src:t.photos.large,alt:""}),s.a.createElement("div",{className:a},s.a.createElement("div",null,"\u0421\u0442\u0430\u0442\u0443\u0441:",t.aboutMe),s.a.createElement("ul",null,Object.entries(t.contacts).map((function(e){return s.a.createElement("li",{key:e[0]},e[1])}))))):s.a.createElement(F,null)},y=function(e){return s.a.createElement("div",null,s.a.createElement(M,{profile:e.profile}),s.a.createElement(S,null))},C=a(10),I=a(12),L=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.userId;t||(t=2),C.get("https://social-network.samuraijs.com/api/1.0/profile/"+t).then((function(t){e.props.setUserProfile(t.data)}))}},{key:"render",value:function(){return s.a.createElement(y,Object.assign({},this.props,{profile:this.props.profile}))}}]),t}(n.Component),k=Object(I.f)(L),G=Object(j.b)((function(e){return{profile:e.profilePage.profile}}),{setUserProfile:function(e){return{type:"SET_USER_PROFILE",profile:e}}})(k),R=a(47),Y=a.n(R),W=function(e){var t=e.name,a=e.id,n=Y.a.user,r="dialogs/"+a;return s.a.createElement("li",{className:n},s.a.createElement(c.b,{to:r},t))},B=a(27),z=a.n(B),Z=a(48),H=a.n(Z),X=function(e){var t=e.text,a=H.a.message;return s.a.createElement("li",{className:a},t)},Q=function(e){var t=e.dialogsPage,a=t.dialogData,n=t.messagesData,r=t.newMessageText,i=e.sendNewMessage,o=e.updateNewMessageText,l=a.map((function(e){return s.a.createElement(W,{name:e.name,id:e.id,key:e.id})})),c=n.map((function(e){return s.a.createElement(X,{text:e.text,id:e.id,key:e.id})})),u=z.a.dialogs,m=z.a.users,d=z.a.messages;return s.a.createElement("div",{className:u},s.a.createElement("ul",{className:m},l),s.a.createElement("div",null,s.a.createElement("ul",{className:d},c),s.a.createElement("textarea",{onChange:function(e){var t=e.target.value;o(t)},value:r,placeholder:"Enter your message..."}),s.a.createElement("button",{onClick:function(){i()}},"Send")))},K={dialogData:[{name:"Evgeny",id:"1"},{name:"Oleg",id:"2"},{name:"Petr",id:"3"},{name:"Max",id:"4"},{name:"Sergey",id:"5"},{name:"Evgeny",id:"6"}],messagesData:[{id:1,text:"Hi"},{id:2,text:"Bye"},{id:3,text:"Dye"},{id:4,text:"Cry"},{id:5,text:"Fly"},{id:6,text:"Try"}],newMessageText:""},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_NEW_MESSAGE_TEXT":return Object(h.a)({},e,{newMessageText:t.newMessage});case"SEND_NEW_MESSAGE":var a=e.newMessageText;return Object(h.a)({},e,{messagesData:[].concat(Object(E.a)(e.messagesData),[{id:7,text:a}]),newMessageText:""});default:return e}},V=Object(j.b)((function(e){return{dialogsPage:e.dialogsPage}}),{sendNewMessage:function(){return{type:"SEND_NEW_MESSAGE"}},updateNewMessageText:function(e){return{type:"UPDATE_NEW_MESSAGE_TEXT",newMessage:e}}})(Q),J={users:[],pageSize:30,currentPage:1,totalUsers:0,isLoading:!0,isFollowing:[]};window.initialState=J;var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(h.a)({},e,{users:e.users.map((function(e){return e.id===t.id?Object(h.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(h.a)({},e,{users:Object(E.a)(e.users.map((function(e){return e.id===t.id?Object(h.a)({},e,{followed:!1}):e})))});case"SET_USERS":return Object(h.a)({},e,{users:Object(E.a)(t.users)});case"SET_TOTAL_USERS":return Object(h.a)({},e,{totalUsers:t.totalUsers});case"SET_CURRENT_PAGE":return Object(h.a)({},e,{currentPage:t.currentPage});case"SET_IS_LOADING":return Object(h.a)({},e,{isLoading:t.isLoading});case"TOGGLE_IS_FOLLOWING":return Object(h.a)({},e,{isFollowing:t.isLoading?[].concat(Object(E.a)(e.isFollowing),[t.id]):[e.isFollowing.filter((function(e){return e!==t.id}))]});default:return e}},ee=C.create({withCredentials:!0,headers:{"API-KEY":"26f8766b-034d-4092-b8b3-79a879ee6969"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),te=function(e){var t=e.currentPage,a=e.pageSize;return ee.get("users?page=".concat(t,"&count=").concat(a)).then((function(e){return e.data}))},ae=a(49),ne=a.n(ae),se=a(4),re=a.n(se),ie=function(e){for(var t=e.users,a=e.follow,n=e.unfollow,r=e.totalUsers,i=e.currentPage,o=e.pageSize,l=e.onPageChanged,u=e.toggleIsFollowing,m=e.isFollowing,d=re.a.leftSide,g=re.a.rightSide,p=re.a.usersList,f=re.a.userItem,E=re.a.userAvatar,h=re.a.userDesc,v=re.a.userCity,N=re.a.userCountry,w=re.a.followButton,b=re.a.userLocation,O=re.a.userName,A=re.a.userStatus,U=re.a.unfollowButton,_=re.a.pageList,j=re.a.curPage,S=Math.ceil(r/o),x=[],P=1;P<=S;P++)x.push(P);return s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:_},x.map((function(e){return s.a.createElement("li",{onClick:function(){return l(e)},className:i===e?j:"",key:e+"id"},e)}))),s.a.createElement("div",{className:p},t.map((function(e){return s.a.createElement("div",{className:f,key:e.id},s.a.createElement("div",{className:d},s.a.createElement(c.b,{to:"/profile/"+e.id},s.a.createElement("div",{className:E},s.a.createElement("img",{style:{width:80,height:80},src:null!=e.photos.small?e.photos.small:ne.a,alt:"ava"}))),e.followed?s.a.createElement("button",{disabled:m.some((function(t){return t===e.id})),onClick:function(){u(!0,e.id),C.delete("https://social-network.samuraijs.com/api/1.0/follow/".concat(e.id),{withCredentials:!0,headers:{"API-KEY":"26f8766b-034d-4092-b8b3-79a879ee6969"}}).then((function(t){0===t.data.resultCode&&n(e.id),u(!1,e.id)}))},className:U},"UNFOLLOW"):s.a.createElement("button",{disabled:m.some((function(t){return t===e.id})),onClick:function(){u(!0,e.id),C.post("https://social-network.samuraijs.com/api/1.0/follow/".concat(e.id),{},{withCredentials:!0,headers:{"API-KEY":"26f8766b-034d-4092-b8b3-79a879ee6969"}}).then((function(t){0===t.data.resultCode&&a(e.id),u(!1,e.id)}))},className:w},"FOLLOW")),s.a.createElement("div",{className:g},s.a.createElement("div",{className:h},s.a.createElement("span",{className:O},e.name),s.a.createElement("span",{className:A},"user.status")),s.a.createElement("div",{className:b},s.a.createElement("div",{className:v},"user.location.city"),s.a.createElement("div",{className:N},"user.location.country"))))}))))},oe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).onPageChanged=function(e){var t=a.props,n=t.setIsLoading,s=t.setUsers,r=t.setCurrentPage;t.pageSize;r(e),n(!0),te(e).then((function(e){s(e.items),n(!1)}))},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setIsLoading,a=e.setUsers,n=e.setTotalUsers,s=e.currentPage;e.pageSize;t(!0),te(s).then((function(e){a(e.items),n(e.totalCount/4),t(!1)}))}},{key:"render",value:function(){var e=this.props,t=e.totalUsers,a=e.users,n=e.pageSize,r=e.currentPage,i=e.follow,o=e.unfollow,l=e.isLoading,c=e.toggleIsFollowing,u=e.isFollowing;return s.a.createElement(s.a.Fragment,null,l?s.a.createElement(F,null):s.a.createElement(ie,{onPageChanged:this.onPageChanged,users:a,totalUsers:t,pageSize:n,currentPage:r,follow:i,unfollow:o,toggleIsFollowing:c,isFollowing:u}))}}]),t}(n.Component),le=Object(j.b)((function(e){var t=e.usersPage;return{users:t.users,pageSize:t.pageSize,currentPage:t.currentPage,totalUsers:t.totalUsers,isLoading:t.isLoading,isFollowing:t.isFollowing}}),{follow:function(e){return{type:"FOLLOW",id:e}},unfollow:function(e){return{type:"UNFOLLOW",id:e}},setUsers:function(e){return{type:"SET_USERS",users:e}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},setTotalUsers:function(e){return{type:"SET_TOTAL_USERS",totalUsers:e}},setIsLoading:function(e){return{type:"SET_IS_LOADING",isLoading:e}},toggleIsFollowing:function(e,t){return{type:"TOGGLE_IS_FOLLOWING",isLoading:e,id:t}}})(oe),ce=function(){return s.a.createElement("div",null)},ue=function(){return s.a.createElement("div",null)},me=function(){return s.a.createElement("div",null)},de=a(23),ge=a.n(de),pe=function(e){var t=e.isAuth,a=ge.a.header,n=ge.a.logo,r=ge.a.loginBlock,i=ge.a.headerContainer;return s.a.createElement("header",{className:a},s.a.createElement("div",{className:i},s.a.createElement("img",{className:n,src:"https://blog.pioneers.com.ua/wp-content/uploads/2019/01/logo-1.png",alt:""}),s.a.createElement("div",{className:r},t?s.a.createElement(c.b,{to:"/login"},"Logout"):s.a.createElement(c.b,{to:"/login"},"Login"))))},fe={isAuth:!1,login:null,email:null,userId:null},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(h.a)({},e,{},t.data,{isAuth:!0});default:return e}},he=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:!0}).then((function(t){if(0===t.data.resultCode){var a=t.data.data,n=a.login,s=a.email,r=a.id;e.props.setAuthUserData(r,s,n)}}))}},{key:"render",value:function(){var e=this.props.isAuth;return s.a.createElement(pe,{isAuth:e})}}]),t}(n.Component),ve=Object(j.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:function(e,t,a){return{type:"SET_USER_DATA",data:{userId:e,email:t,login:a}}}})(he),Ne=function(){return s.a.createElement(c.a,null,s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"container"},s.a.createElement(ve,null),s.a.createElement(u,null),s.a.createElement("div",{className:"wrapper-content"},s.a.createElement(I.a,{from:"/",to:"/profile"}),s.a.createElement(I.b,{path:"/profile/:userId?",render:function(){return s.a.createElement(G,null)}}),s.a.createElement(I.b,{exact:!0,path:"/dialogs",render:function(){return s.a.createElement(V,null)}}),s.a.createElement(I.b,{exact:!0,path:"/users",render:function(){return s.a.createElement(le,null)}}),s.a.createElement(I.b,{exact:!0,path:"/news",component:ce}),s.a.createElement(I.b,{exact:!0,path:"/music",component:ue}),s.a.createElement(I.b,{exact:!0,path:"/settings",component:me})))))},we=a(22),be={},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be;arguments.length>1&&arguments[1];return e},Ae=Object(we.b)({profilePage:N,dialogsPage:q,sideBar:Oe,usersPage:$,auth:Ee}),Ue=Object(we.c)(Ae);i.a.render(s.a.createElement(j.a,{store:Ue},s.a.createElement(Ne,null)),document.getElementById("root")),window.store=Ue}},[[50,1,2]]]);
//# sourceMappingURL=main.e9b015a7.chunk.js.map