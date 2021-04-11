(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),i=a(13),l=a(15),s=a(9),u=a(18),p=a(17),d=a(8),m=a(2),b=Object(d.a)({ImageGalleryItem:{borderRadius:"2px",boxShadow:["0px 1px 3px 0px rgba(0, 0, 0, 0.2)"," 0px 1px 1px 0px rgba(0, 0, 0, 0.14)","0px 2px 1px -1px rgba(0, 0, 0, 0.12)"]},ImageGalleryItemImage:{width:"100%",height:"260px",objectFit:"cover",transition:["transform","250ms","cubic-bezier(0.4, 0, 0.2, 1)"],"&:hover":{transform:"scale(1.03)",cursor:"zoom-in"}}}),h=function(e){var t=e.url,a=e.titel,n=e.onClick,r=e.urlForModal,o=b();return Object(m.jsx)("li",{className:o.ImageGalleryItem,onClick:function(){return n(r)},children:Object(m.jsx)("img",{src:t,alt:a,className:o.ImageGalleryItemImage})})},g=Object(d.a)({ImageGallery:{display:"grid",maxWidth:"calc(100vw - 48px)",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gridGap:"16px",marginTop:0,marginBottom:0,padding:0,listStyle:"none",marginLeft:"auto",marginRight:"auto"}}),f=function(e){var t=e.images,a=e.onClick,n=g();return Object(m.jsx)("ul",{className:n.ImageGallery,children:t.map((function(e){return Object(m.jsx)(h,{url:e.webformatURL,titel:e.type,urlForModal:e.largeImageURL,onClick:a},e.id)}))})},j=a(20),x=a.n(j),v=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){var a=t.currentTarget.value;e.setState({query:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query)},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(m.jsx)("header",{className:x.a.Searchbar,children:Object(m.jsxs)("form",{className:x.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(m.jsx)("button",{type:"submit",className:x.a.button,children:Object(m.jsx)("span",{className:x.a.label,children:"Search"})}),Object(m.jsx)("input",{className:x.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(n.Component),O=a(49),y=a.n(O),k=(a(85),Object(d.a)({blockLoader:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}})),w=function(){var e=k();return Object(m.jsx)("div",{className:e.blockLoader,children:Object(m.jsx)(y.a,{type:"BallTriangle",color:"#3f51b5",height:100,width:100})})},S=Object(d.a)({button:{margin:["20px","auto"],padding:["8px","16px"],borderRadius:"2px",backgroundColor:"#3f51b5",transition:["all","250ms","cubic-bezier(0.4, 0, 0.2, 1)"],textAlign:"center",display:"block",color:" #fff",border:0,textDecoration:"none",cursor:"pointer",fontFamily:"inherit",fontSize:"18px",lineHeight:"24px",fontStyle:"normal",fontWeight:500,minWidth:"180px",boxShadow:["0px 3px 1px -2px rgba(0, 0, 0, 0.2)","0px 2px 2px 0px rgba(0, 0, 0, 0.14)"," 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"],"&:hover":{backgroundColor:" #303f9f"}}}),C=function(e){var t=e.onClick,a=S();return Object(m.jsx)("button",{type:"button",className:a.button,onClick:t,children:"Load more"})},_=a(35),I=a.n(_),L=document.querySelector("#modal-root"),M=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(m.jsx)("div",{className:I.a.Overlay,onClick:this.handleBackdropClick,children:Object(m.jsx)("div",{className:I.a.Modal,children:this.props.children})}),L)}}]),a}(n.Component),N=a(36),U=a.n(N),B=a(50),F=a(32),E=a.n(F);E.a.defaults.baseURL="https://pixabay.com/",E.a.defaults.params={key:"19522595-24b394bcd15e2754e0ed68cbf",image_type:"photo",orientation:"horizontal",per_page:12};var z=function(){var e=Object(B.a)(U.a.mark((function e(t,a){var n,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("api/",{params:{q:t,page:a}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r.hits);case 8:return e.prev=8,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),P=a(29),R=a(51),T=a.n(R),A=a(52),D=a.n(A),G=Object(d.a)({buttonPrevious:{background:"transparent",border:"none",position:"absolute",top:"50%",left:"10%",transform:" translate(-50%, -50%)"},buttonNext:{background:"transparent",border:"none",position:"absolute",top:"50%",left:"90%",transform:" translate(-50%, -50%)"}}),W=function(e){var t=e.modalImgUrl,a=e.images,r=G(),o=a.map((function(e){return e.largeImageURL})).indexOf(t),c=Object(n.useState)(o),i=Object(P.a)(c,2),l=i[0],s=i[1],u=function(){l<a.length-1&&s((function(e){return e+1}))},p=function(){l>0&&s((function(e){return e-1}))},d=function(e){"ArrowRight"===e.code&&u(),"ArrowLeft"===e.code&&p()};Object(n.useEffect)((function(){return document.addEventListener("keydown",d),function(){document.removeEventListener("keydown",d)}}),[l]);var b=a[l].largeImageURL;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{className:r.buttonPrevious,type:"button",onClick:p,children:Object(m.jsx)(T.a,{color:"primary",fontSize:"large"})}),Object(m.jsx)("img",{src:b,alt:"modal images"}),Object(m.jsx)("button",{className:r.buttonNext,type:"button",onClick:u,children:Object(m.jsx)(D.a,{color:"primary",fontSize:"large"})})]})},q=a(53),K=a.n(q),H=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,value:"",error:null,isLoading:!1,showModal:!1,modalImgUrl:""},e.fetchImages=function(){var t=e.state,a=t.value,n=t.currentPage;e.setState({isLoading:!0}),z(a,n).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.getQueryValue=function(t){e.setState({value:t,currentPage:1,images:[],error:null})},e.hendleButtonClick=function(){e.fetchImages()},e.scrollToBottom=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.toggleModal=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.setState((function(e){return{showModal:!e.showModal,modalImgUrl:t}}))},e}return Object(s.a)(a,[{key:"getSnapshotBeforeUpdate",value:function(e,t){return t.images.length<this.state.images.length&&this.state.images.length>12?"tro-lo-lo":null}},{key:"componentDidUpdate",value:function(e,t,a){t.value!==this.state.value&&this.fetchImages(),null!==a&&this.scrollToBottom()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error,r=e.showModal,o=e.modalImgUrl;return Object(m.jsxs)("div",{className:K.a.app,children:[Object(m.jsx)(v,{onSubmit:this.getQueryValue}),n&&Object(m.jsxs)("p",{children:["Whoops, something went wrong: ",n.message]}),a&&Object(m.jsx)(w,{}),t.length>0&&Object(m.jsx)(f,{images:t,onClick:this.toggleModal}),t.length>0&&Object(m.jsx)(C,{onClick:this.hendleButtonClick}),r&&Object(m.jsx)(M,{onClose:this.toggleModal,children:Object(m.jsx)(W,{modalImgUrl:o,images:t})})]})}}]),a}(n.Component);c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(H,{})}),document.getElementById("root"))},20:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1w-M8",SearchForm:"Searchbar_SearchForm__1B3wO",button:"Searchbar_button__1PnWb",label:"Searchbar_label__23Ejt",input:"Searchbar_input__FauSi"}},35:function(e,t,a){e.exports={Overlay:"Modal_Overlay__M82wv",Modal:"Modal_Modal__oztFN"}},53:function(e,t,a){e.exports={app:"App_app__1Ez80"}}},[[107,1,2]]]);
//# sourceMappingURL=main.d5a74773.chunk.js.map