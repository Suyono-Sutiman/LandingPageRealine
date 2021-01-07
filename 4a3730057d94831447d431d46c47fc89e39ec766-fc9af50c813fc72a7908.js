(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Ik5D:function(e,a,t){"use strict";var l=t("q1tI"),r=t.n(l),i=t("7vrA"),s=t("wx14"),o=t("zLVn"),n=t("TSYQ"),c=t.n(n),m=(t("K9S6"),r.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,i=e.className,n=e.type,m=void 0===n?"valid":n,d=e.tooltip,f=void 0!==d&&d,b=Object(o.a)(e,["as","className","type","tooltip"]);return r.a.createElement(l,Object(s.a)({},b,{ref:a,className:c()(i,m+"-"+(f?"tooltip":"feedback"))}))})));m.displayName="Feedback";var d=m,f=r.a.createContext({controlId:void 0}),b=t("vUet"),u=r.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,n=e.bsCustomPrefix,m=e.className,d=e.type,u=void 0===d?"checkbox":d,v=e.isValid,p=void 0!==v&&v,x=e.isInvalid,N=void 0!==x&&x,O=e.isStatic,j=e.as,E=void 0===j?"input":j,y=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(l.useContext)(f),I=P.controlId,h=P.custom?[n,"custom-control-input"]:[i,"form-check-input"],w=h[0],C=h[1];return i=Object(b.a)(w,C),r.a.createElement(E,Object(s.a)({},y,{ref:a,type:u,id:t||I,className:c()(m,i,p&&"is-valid",N&&"is-invalid",O&&"position-static")}))}));u.displayName="FormCheckInput";var v=u,p=r.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,n=e.className,m=e.htmlFor,d=Object(o.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(l.useContext)(f),v=u.controlId,p=u.custom?[i,"custom-control-label"]:[t,"form-check-label"],x=p[0],N=p[1];return t=Object(b.a)(x,N),r.a.createElement("label",Object(s.a)({},d,{ref:a,htmlFor:m||v,className:c()(n,t)}))}));p.displayName="FormCheckLabel";var x=p,N=r.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,n=e.bsCustomPrefix,m=e.inline,u=void 0!==m&&m,p=e.disabled,N=void 0!==p&&p,O=e.isValid,j=void 0!==O&&O,E=e.isInvalid,y=void 0!==E&&E,P=e.feedbackTooltip,I=void 0!==P&&P,h=e.feedback,w=e.className,C=e.style,F=e.title,k=void 0===F?"":F,g=e.type,R=void 0===g?"checkbox":g,L=e.label,V=e.children,A=e.custom,T=e.as,S=void 0===T?"input":T,z=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),G="switch"===R||A,B=G?[n,"custom-control"]:[i,"form-check"],J=B[0],K=B[1];i=Object(b.a)(J,K);var M=Object(l.useContext)(f).controlId,Y=Object(l.useMemo)((function(){return{controlId:t||M,custom:G}}),[M,G,t]),U=G||null!=L&&!1!==L&&!V,q=r.a.createElement(v,Object(s.a)({},z,{type:"switch"===R?"checkbox":R,ref:a,isValid:j,isInvalid:y,isStatic:!U,disabled:N,as:S}));return r.a.createElement(f.Provider,{value:Y},r.a.createElement("div",{style:C,className:c()(w,i,G&&"custom-"+R,u&&i+"-inline")},V||r.a.createElement(r.a.Fragment,null,q,U&&r.a.createElement(x,{title:k},L),(j||y)&&r.a.createElement(d,{type:j?"valid":"invalid",tooltip:I},h))))}));N.displayName="FormCheck",N.Input=v,N.Label=x;var O=N,j=r.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,n=e.bsCustomPrefix,m=e.className,d=e.isValid,u=e.isInvalid,v=e.lang,p=e.as,x=void 0===p?"input":p,N=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),O=Object(l.useContext)(f),j=O.controlId,E=O.custom?[n,"custom-file-input"]:[i,"form-control-file"],y=E[0],P=E[1];return i=Object(b.a)(y,P),r.a.createElement(x,Object(s.a)({},N,{ref:a,id:t||j,type:"file",lang:v,className:c()(m,i,d&&"is-valid",u&&"is-invalid")}))}));j.displayName="FormFileInput";var E=j,y=r.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,n=e.className,m=e.htmlFor,d=Object(o.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(l.useContext)(f),v=u.controlId,p=u.custom?[i,"custom-file-label"]:[t,"form-file-label"],x=p[0],N=p[1];return t=Object(b.a)(x,N),r.a.createElement("label",Object(s.a)({},d,{ref:a,htmlFor:m||v,className:c()(n,t),"data-browse":d["data-browse"]}))}));y.displayName="FormFileLabel";var P=y,I=r.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,n=e.bsCustomPrefix,m=e.disabled,u=void 0!==m&&m,v=e.isValid,p=void 0!==v&&v,x=e.isInvalid,N=void 0!==x&&x,O=e.feedbackTooltip,j=void 0!==O&&O,y=e.feedback,I=e.className,h=e.style,w=e.label,C=e.children,F=e.custom,k=e.lang,g=e["data-browse"],R=e.as,L=void 0===R?"div":R,V=e.inputAs,A=void 0===V?"input":V,T=Object(o.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),S=F?[n,"custom"]:[i,"form-file"],z=S[0],G=S[1];i=Object(b.a)(z,G);var B=Object(l.useContext)(f).controlId,J=Object(l.useMemo)((function(){return{controlId:t||B,custom:F}}),[B,F,t]),K=null!=w&&!1!==w&&!C,M=r.a.createElement(E,Object(s.a)({},T,{ref:a,isValid:p,isInvalid:N,disabled:u,as:A,lang:k}));return r.a.createElement(f.Provider,{value:J},r.a.createElement(L,{style:h,className:c()(I,i,F&&"custom-file")},C||r.a.createElement(r.a.Fragment,null,F?r.a.createElement(r.a.Fragment,null,M,K&&r.a.createElement(P,{"data-browse":g},w)):r.a.createElement(r.a.Fragment,null,K&&r.a.createElement(P,null,w),M),(p||N)&&r.a.createElement(d,{type:p?"valid":"invalid",tooltip:j},y))))}));I.displayName="FormFile",I.Input=E,I.Label=P;var h=I,w=(t("2W6z"),r.a.forwardRef((function(e,a){var t,i,n=e.bsPrefix,m=e.bsCustomPrefix,d=e.type,u=e.size,v=e.htmlSize,p=e.id,x=e.className,N=e.isValid,O=void 0!==N&&N,j=e.isInvalid,E=void 0!==j&&j,y=e.plaintext,P=e.readOnly,I=e.custom,h=e.as,w=void 0===h?"input":h,C=Object(o.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),F=Object(l.useContext)(f).controlId,k=I?[m,"custom"]:[n,"form-control"],g=k[0],R=k[1];if(n=Object(b.a)(g,R),y)(i={})[n+"-plaintext"]=!0,t=i;else if("file"===d){var L;(L={})[n+"-file"]=!0,t=L}else if("range"===d){var V;(V={})[n+"-range"]=!0,t=V}else if("select"===w&&I){var A;(A={})[n+"-select"]=!0,A[n+"-select-"+u]=u,t=A}else{var T;(T={})[n]=!0,T[n+"-"+u]=u,t=T}return r.a.createElement(w,Object(s.a)({},C,{type:d,size:v,ref:a,readOnly:P,id:p||F,className:c()(x,t,O&&"is-valid",E&&"is-invalid")}))})));w.displayName="FormControl";var C=Object.assign(w,{Feedback:d}),F=r.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,n=e.children,m=e.controlId,d=e.as,u=void 0===d?"div":d,v=Object(o.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(b.a)(t,"form-group");var p=Object(l.useMemo)((function(){return{controlId:m}}),[m]);return r.a.createElement(f.Provider,{value:p},r.a.createElement(u,Object(s.a)({},v,{ref:a,className:c()(i,t)}),n))}));F.displayName="FormGroup";var k=F,g=t("JI6e"),R=r.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,n=e.bsPrefix,m=e.column,d=e.srOnly,u=e.className,v=e.htmlFor,p=Object(o.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),x=Object(l.useContext)(f).controlId;n=Object(b.a)(n,"form-label");var N="col-form-label";"string"==typeof m&&(N=N+" "+N+"-"+m);var O=c()(u,n,d&&"sr-only",m&&N);return v=v||x,m?r.a.createElement(g.a,Object(s.a)({as:"label",className:O,htmlFor:v},p)):r.a.createElement(i,Object(s.a)({ref:a,className:O,htmlFor:v},p))}));R.displayName="FormLabel",R.defaultProps={column:!1,srOnly:!1};var L=R,V=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.as,n=void 0===i?"small":i,m=e.muted,d=Object(o.a)(e,["bsPrefix","className","as","muted"]);return t=Object(b.a)(t,"form-text"),r.a.createElement(n,Object(s.a)({},d,{ref:a,className:c()(l,t,m&&"text-muted")}))}));V.displayName="FormText";var A=V,T=r.a.forwardRef((function(e,a){return r.a.createElement(O,Object(s.a)({},e,{ref:a,type:"switch"}))}));T.displayName="Switch",T.Input=O.Input,T.Label=O.Label;var S=T,z=t("YdCC"),G=Object(z.a)("form-row"),B=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,i=e.className,n=e.validated,m=e.as,d=void 0===m?"form":m,f=Object(o.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(b.a)(t,"form"),r.a.createElement(d,Object(s.a)({},f,{ref:a,className:c()(i,n&&"was-validated",l&&t+"-inline")}))}));B.displayName="Form",B.defaultProps={inline:!1},B.Row=G,B.Group=k,B.Control=C,B.Check=O,B.File=h,B.Switch=S,B.Label=L,B.Text=A;var J=B,K=t("cWnB"),M=t("3Z9Z");a.a=function(){return r.a.createElement(i.a,{style:{marginTop:"2rem"}},r.a.createElement(M.a,null,r.a.createElement(g.a,{xs:12,md:{span:6,offset:3}},r.a.createElement("h4",null,"AYO MULAI PERCAKAPAN"),r.a.createElement(J,null,r.a.createElement(J.Group,{controlId:"formBasicName"},r.a.createElement(J.Label,null,"Nama"),r.a.createElement(J.Control,{type:"text",placeholder:"Nama Anda"})),r.a.createElement(J.Group,{controlId:"formBasicEmail"},r.a.createElement(J.Label,null,"Alamat Email"),r.a.createElement(J.Control,{type:"email",placeholder:"Email Anda"}),r.a.createElement(J.Text,{className:"text-muted"},"Kami tidak akan pernah membagikan email Anda dengan orang lain.")),r.a.createElement(J.Group,{controlId:"formBasicPhone"},r.a.createElement(J.Label,null,"Telepon"),r.a.createElement(J.Control,{type:"tel",placeholder:"Nomor Telepon Anda"})),r.a.createElement(J.Group,{controlId:"formBasicTextarea"},r.a.createElement(J.Label,null,"Pesan"),r.a.createElement(J.Control,{as:"textarea",rows:3})),r.a.createElement(K.a,{variant:"warning",type:"submit"},"Kirim")))))}},xXt2:function(e,a,t){"use strict";var l=t("wx14"),r=t("zLVn"),i=t("q1tI"),s=t.n(i),o=t("TSYQ"),n=t.n(o),c=t("vUet"),m=s.a.forwardRef((function(e,a){var t,i=e.as,o=void 0===i?"div":i,m=e.className,d=e.fluid,f=e.bsPrefix,b=Object(r.a)(e,["as","className","fluid","bsPrefix"]),u=((t={})[f=Object(c.a)(f,"jumbotron")]=!0,t[f+"-fluid"]=d,t);return s.a.createElement(o,Object(l.a)({ref:a},b,{className:n()(m,u)}))}));m.defaultProps={fluid:!1},m.displayName="Jumbotron",a.a=m}}]);
//# sourceMappingURL=4a3730057d94831447d431d46c47fc89e39ec766-fc9af50c813fc72a7908.js.map