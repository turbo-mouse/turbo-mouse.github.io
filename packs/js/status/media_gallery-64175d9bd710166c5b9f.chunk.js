"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[220],{1132:function(e,t,a){a.r(t);var r=a(2044),i=a(2072),l=a(2054),n=(a(13),a(29),a(5),a(143),a(0),a(25),a(653)),o=a(1),p=a(573),g=a(52),s=a(203),h=a(801),x=a(3),c=a(531),u=a(171),d=a(2097),m=function(e){var t=e.attachment,r=e.index,m=e.onClick,f=e.standalone,w=void 0!==f&&f,v=e.visible,_=e.dimensions,b=e.last,y=e.total,Z=!0===(0,x.rV)().get("autoPlayGif"),$=(0,x.Dn)().mediaPreview,N=function(){return!Z&&"gifv"===t.type},k=function(e){(0,u.gn)()&&!e.target.autoPlay?(e.target.autoPlay=!0,e.preventDefault()):0!==e.button||e.ctrlKey||e.metaKey||(N()&&(e.target.pause(),e.target.currentTime=0),e.preventDefault(),m(r)),e.stopPropagation()},M=100,C="100%",q="auto",T="auto",z="auto",D="auto",I="left",P="relative";_&&(M=_.w,C=_.h,q=_.t||"auto",D=_.r||"auto",z=_.b||"auto",T=_.l||"auto",I=_.float||"left",P=_.pos||"relative");var E="";if("unknown"===t.type){var W=(0,c.TF)(t.url,45),O=(0,l.Z)(g.Z,{className:"h-16 w-16 text-gray-800 dark:text-gray-200",src:h.Z[t.getIn(["pleroma","mime_type"])]||a(678)});return(0,l.Z)("div",{className:(0,n.default)("media-gallery__item",{standalone:w,"rounded-md":y>1}),style:{position:P,float:I,left:T,top:q,right:D,bottom:z,height:C,width:"".concat(M,"%")}},t.id,(0,l.Z)("a",{className:"media-gallery__item-thumbnail",href:t.url,target:"_blank",style:{cursor:"pointer"}},void 0,(0,l.Z)(p.Z,{hash:t.blurhash,className:"media-gallery__preview"}),(0,l.Z)("span",{className:"media-gallery__item__icons"},void 0,O),(0,l.Z)("span",{className:"media-gallery__filename__label"},void 0,W)))}if("image"===t.type){var F=1===y&&function(e){var t=e.getIn(["meta","original","aspect"]);return!t||!function(e){return e>=d.Mr&&e<=d.q3}(t)}(t);E=(0,l.Z)("a",{className:"media-gallery__item-thumbnail",href:t.url,onClick:k,target:"_blank"},void 0,(0,l.Z)(s.Z,{className:"h-full w-full",src:$?t.preview_url:t.url,alt:t.description,letterboxed:F,showExt:!0}))}else if("gifv"===t.type){var G={};(0,u.gn)()&&(G.playsInline=!0),Z&&(G.autoPlay=!0),E=(0,l.Z)("div",{className:(0,n.default)("media-gallery__gifv",{autoplay:Z})},void 0,o.createElement("video",(0,i.Z)({className:"media-gallery__item-gifv-thumbnail","aria-label":t.description,title:t.description,role:"application",src:t.url,onClick:k,onMouseEnter:function(e){var t=e.currentTarget;N()&&t.play()},onMouseLeave:function(e){var t=e.currentTarget;N()&&(t.pause(),t.currentTime=0)},loop:!0,muted:!0},G)),(0,l.Z)("span",{className:"media-gallery__gifv__label"},void 0,"GIF"))}else if("audio"===t.type){var K,L=null===(K=t.url.split(".").pop())||void 0===K?void 0:K.toUpperCase();E=(0,l.Z)("a",{className:(0,n.default)("media-gallery__item-thumbnail"),href:t.url,onClick:k,target:"_blank",title:t.description},void 0,(0,l.Z)("span",{className:"media-gallery__item__icons"},void 0,(0,l.Z)(g.Z,{src:a(681)})),(0,l.Z)("span",{className:"media-gallery__file-extension__label"},void 0,L))}else if("video"===t.type){var R,U=null===(R=t.url.split(".").pop())||void 0===R?void 0:R.toUpperCase();E=(0,l.Z)("a",{className:(0,n.default)("media-gallery__item-thumbnail"),href:t.url,onClick:k,target:"_blank",title:t.description},void 0,(0,l.Z)("video",{muted:!0,loop:!0,onMouseOver:function(e){var t=e.currentTarget;t.playbackRate=3,t.play()},onMouseOut:function(e){var t=e.currentTarget;t.pause(),t.currentTime=0}},void 0,(0,l.Z)("source",{src:t.url})),(0,l.Z)("span",{className:"media-gallery__file-extension__label"},void 0,U))}return(0,l.Z)("div",{className:(0,n.default)("media-gallery__item","media-gallery__item--".concat(t.type),{standalone:w,"rounded-md":y>1}),style:{position:P,float:I,left:T,top:q,right:D,bottom:z,height:C,width:"".concat(M,"%")}},t.id,b&&y>4&&(0,l.Z)("div",{className:"media-gallery__item-overflow"},void 0,"+",y-4+1),(0,l.Z)(p.Z,{hash:t.blurhash,className:"media-gallery__preview"}),v&&E)};t.default=function(e){var t=e.media,a=e.defaultWidth,i=void 0===a?0:a,p=e.className,g=e.onOpenMedia,s=e.cacheWidth,h=e.compact,x=e.height,c=(0,o.useState)(i),u=(0,r.Z)(c,2),f=u[0],w=u[1],v=(0,o.useRef)(null),_=function(e){g(t,e)},b=function(e){var a=f||i;if(a){if(1===e)return function(){var e=f||i,a=t.getIn([0,"meta","original","aspect"]);return{style:{height:a?(0,d.gn)(a)?Math.floor(e/d.q3):(0,d.gr)(a)?Math.floor(e/d.Mr):Math.floor(e/a):9*e/16},itemsDimensions:[],size:1,width:f}}();if(e>1)return function(e){var a=f||i,l=Math.floor(a/d.q3),n="".concat(Math.floor(a/d.q3),"px"),o={},p=[],g=Array(e).fill(null).map((function(e,a){return t.getIn([a,"meta","original","aspect"])})),s=(0,r.Z)(g,4),h=s[0],x=s[1],c=s[2],u=s[3];return 2===e?((0,d.gr)(h)&&(0,d.gr)(x)?o.height=a-a/d.q3:(0,d.gn)(h)&&(0,d.gn)(x)?o.height=2*l:(0,d.gn)(h)&&(0,d.gr)(x)||(0,d.gr)(h)&&(0,d.gn)(x)||(0,d.gn)(h)&&(0,d.x$)(x)||(0,d.x$)(h)&&(0,d.gn)(x)?o.height=.6*a+a/d.q3:o.height=a/2,p=(0,d.gr)(h)&&(0,d.gr)(x)?[{w:50,h:"100%",r:"2px"},{w:50,h:"100%",l:"2px"}]:(0,d.gn)(h)&&(0,d.gn)(x)?[{w:100,h:n,b:"2px"},{w:100,h:n,t:"2px"}]:(0,d.gn)(h)&&(0,d.gr)(x)||(0,d.gn)(h)&&(0,d.x$)(x)?[{w:100,h:"".concat(a/d.q3,"px"),b:"2px"},{w:100,h:"".concat(.6*a,"px"),t:"2px"}]:(0,d.gr)(h)&&(0,d.gn)(x)||(0,d.x$)(h)&&(0,d.gn)(x)?[{w:100,h:"".concat(.6*a,"px"),b:"2px"},{w:100,h:"".concat(a/d.q3,"px"),t:"2px"}]:[{w:50,h:"100%",r:"2px"},{w:50,h:"100%",l:"2px"}]):3===e?((0,d.gn)(h)&&(0,d.gn)(x)&&(0,d.gn)(c)?o.height=3*l:(0,d.gr)(h)&&(0,d.gr)(x)&&(0,d.gr)(c)?o.height=Math.floor(a/d.Mr):o.height=a,p=(0,d.gn)(h)&&(0,d.x$)(x)&&(0,d.x$)(c)?[{w:100,h:"50%",b:"2px"},{w:50,h:"50%",t:"2px",r:"2px"},{w:50,h:"50%",t:"2px",l:"2px"}]:(0,d.gn)(h)&&(0,d.gn)(x)&&(0,d.gn)(c)?[{w:100,h:n,b:"4px"},{w:100,h:n},{w:100,h:n,t:"4px"}]:(0,d.gr)(h)&&(0,d.x$)(x)&&(0,d.x$)(c)?[{w:50,h:"100%",r:"2px"},{w:50,h:"50%",b:"2px",l:"2px"},{w:50,h:"50%",t:"2px",l:"2px"}]:(0,d.x$)(h)&&(0,d.x$)(x)&&(0,d.gr)(c)?[{w:50,h:"50%",b:"2px",r:"2px"},{w:50,h:"50%",l:"-2px",b:"-2px",pos:"absolute",float:"none"},{w:50,h:"100%",r:"-2px",t:"0px",b:"0px",pos:"absolute",float:"none"}]:(0,d.x$)(h)&&(0,d.gr)(x)&&(0,d.x$)(c)||(0,d.gr)(h)&&(0,d.gr)(x)&&(0,d.gr)(c)?[{w:50,h:"50%",b:"2px",r:"2px"},{w:50,h:"100%",l:"2px",float:"right"},{w:50,h:"50%",t:"2px",r:"2px"}]:(0,d.gn)(h)&&(0,d.gn)(x)&&(0,d.x$)(c)||(0,d.gn)(h)&&(0,d.gn)(x)&&(0,d.gr)(c)?[{w:50,h:n,b:"2px",r:"2px"},{w:50,h:n,b:"2px",l:"2px"},{w:100,h:"".concat(a-l,"px"),t:"2px"}]:(0,d.x$)(h)&&(0,d.gn)(x)&&(0,d.gn)(c)||(0,d.gr)(h)&&(0,d.gn)(x)&&(0,d.gn)(c)?[{w:100,h:"".concat(a-l,"px"),b:"2px"},{w:50,h:n,t:"2px",r:"2px"},{w:50,h:n,t:"2px",l:"2px"}]:[{w:50,h:"50%",b:"2px",r:"2px"},{w:50,h:"50%",b:"2px",l:"2px"},{w:100,h:"50%",t:"2px"}]):e>=4&&((0,d.gr)(h)&&(0,d.gr)(x)&&(0,d.gr)(c)&&(0,d.gr)(u)||(0,d.gr)(h)&&(0,d.gr)(x)&&(0,d.gr)(c)&&(0,d.x$)(u)||(0,d.gr)(h)&&(0,d.gr)(x)&&(0,d.x$)(c)&&(0,d.gr)(u)||(0,d.gr)(h)&&(0,d.x$)(x)&&(0,d.gr)(c)&&(0,d.gr)(u)||(0,d.x$)(h)&&(0,d.gr)(x)&&(0,d.gr)(c)&&(0,d.gr)(u)?o.height=Math.floor(a/d.Mr):(0,d.gn)(h)&&(0,d.gn)(x)&&(0,d.gn)(c)&&(0,d.gn)(u)?o.height=2*l:(0,d.gn)(h)&&(0,d.gn)(x)&&(0,d.x$)(c)&&(0,d.x$)(u)||(0,d.x$)(h)&&(0,d.x$)(x)&&(0,d.gn)(c)&&(0,d.gn)(u)?o.height=l+a/2:o.height=a,p=(0,d.gn)(h)&&(0,d.gn)(x)&&(0,d.x$)(c)&&(0,d.x$)(u)?[{w:50,h:n,b:"2px",r:"2px"},{w:50,h:n,b:"2px",l:"2px"},{w:50,h:"".concat(a/2,"px"),t:"2px",r:"2px"},{w:50,h:"".concat(a/2,"px"),t:"2px",l:"2px"}]:(0,d.x$)(h)&&(0,d.x$)(x)&&(0,d.gn)(c)&&(0,d.gn)(u)?[{w:50,h:"".concat(a/2,"px"),b:"2px",r:"2px"},{w:50,h:"".concat(a/2,"px"),b:"2px",l:"2px"},{w:50,h:n,t:"2px",r:"2px"},{w:50,h:n,t:"2px",l:"2px"}]:(0,d.gr)(h)&&(0,d.x$)(x)&&(0,d.x$)(c)&&(0,d.x$)(u)||(0,d.gr)(h)&&(0,d.gn)(x)&&(0,d.gn)(c)&&(0,d.gn)(u)?[{w:67,h:"100%",r:"2px"},{w:33,h:"33%",b:"4px",l:"2px"},{w:33,h:"33%",l:"2px"},{w:33,h:"33%",t:"4px",l:"2px"}]:[{w:50,h:"50%",b:"2px",r:"2px"},{w:50,h:"50%",b:"2px",l:"2px"},{w:50,h:"50%",t:"2px",r:"2px"},{w:50,h:"50%",t:"2px",l:"2px"}]),{style:o,itemsDimensions:p,size:e,width:a}}(e)}return{style:{height:x},itemsDimensions:[],size:e,width:a}}(t.size),y=t.take(4).map((function(a,r){return(0,l.Z)(m,{onClick:_,attachment:a,index:r,size:b.size,displayWidth:b.width,visible:!!e.visible,dimensions:b.itemsDimensions[r],last:3===r,total:t.size},a.id)}));return(0,o.useLayoutEffect)((function(){if(v.current){var e=v.current.offsetWidth;s&&s(e),w(e)}}),[v.current]),o.createElement("div",{className:(0,n.default)(p,"media-gallery",{"media-gallery--compact":h}),style:b.style,ref:v},y)}}}]);
//# sourceMappingURL=media_gallery-64175d9bd710166c5b9f.chunk.js.map