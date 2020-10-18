(this.webpackJsonpli=this.webpackJsonpli||[]).push([[0],{127:function(e,t,a){e.exports=a(372)},132:function(e,t,a){},133:function(e,t,a){},372:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),i=a.n(l),c=(a(132),a(17)),o=a(113),s=a(408),u=(a(133),a(44)),p=a(409),m=a(417),h=a(416),d=a(411),f=a(110),g=a.n(f),E=a(114),b=a(415),y=a(413),x=a(414),v=a(418),w=a(35),j=a(109),O=a.n(j),k=a(111),_=a.n(k),M=a(107),S=a.n(M),C=a(112),L=a.n(C),T=a(108),B=a.n(T),D=a(426),I=a(40),F=a(424),z=a(99),N=a(25),R=a.n(N),A=a(50),G=a(376),W=a(100),q=a.n(W),H=a(377),P=a(104),V=a.n(P),$=a(41),J=a.n($),U=(a(93),a(67)),Z=a.n(U),K={"getting-started":"https://raw.githubusercontent.com/matt-42/lithium/master/docs/getting_started.md",sql:"https://raw.githubusercontent.com/matt-42/lithium/master/docs/sql.cc","http-server":"https://raw.githubusercontent.com/matt-42/lithium/master/docs/http_server.cc",json:"https://raw.githubusercontent.com/matt-42/lithium/master/docs/json.cc"};function Q(e){return e.toLowerCase().replace("c++","cpp").replace(/[^a-zA-Z0-9]/g,"-")}var X=function(e){for(var t=[],a=e;a;)t.unshift(a.text),a=a.parent;return"#"+t.map(Q).join("/")},Y=function(e){return"/lithium/"+X(e)},ee=function(e){for(var t=[],a=e;a;)t.unshift(a.text),a=a.parent;return t.join(" / ")};function te(e,t,a){var n=e.depth-1,r=e.depth-2;if(e.depth>1){for(;r>0&&!a[r];)r--;var l=a[r];l||(console.log(a),console.log(e)),l.children[e.text]={text:e.text,depth:e.depth,children:{},parent:l},a.length=n+1,a[n]=l.children[e.text]}else t[e.text]={text:e.text,depth:e.depth,children:{},parent:null},a.length=n+1,a[0]=t[e.text];return a[n]}var ae={},ne=[],re={code:function(e,t,a){return'<pre><code class="hljs cpp c++">'.concat(J.a.highlight("c++",e).value,"</code></pre>")},heading:function(e,t){var a=te({text:e,depth:t},ae,ne);Q(e);return'\n    <a name="'.concat(X(a).substring(1),'" class="anchor" href="').concat(X(a),'" style="top: -90px; display: block;\n    position: relative;\n    top: -60px;\n    visibility: hidden;">\n    <h').concat(t,' class="MuiTypography-root MuiTypography-h').concat(t,'" style="margin-bottom: ').concat(10*(6-t),"px; margin-top: ").concat(10*(6-t),'px">\n    <span class="header-link"></span>\n    </a>\n    ').concat(e.toLowerCase(),"\n    </h").concat(t,">")},paragraph:function(e){return'<p class="MuiTypography-root MuiTypography-body1">'.concat(e,"</p>")}};function le(e){var t="__documentation_starts_here__",a=e.indexOf(t);return-1!=a&&(e=e.substring(a+t.length)),e=(e="```c++\n"+(e=(e=e.replace(/\n[\s]*\/\*/g,"\n```\n")).replace(/\n[\s]*\*\//g,"\n```c++\n"))+"```\n").replace(/```c\+\+[\n ]*```/,"")}function ie(){return(ie=Object(A.a)(R.a.mark((function e(){var t,a,n,r,l,i,c,o,s,u,p,m;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a={},n=0,r=Object.values(K);case 3:if(!(n<r.length)){e.next=15;break}return l=r[n],e.next=7,fetch(l).then((function(e){return e.text()}));case 7:i=e.sent,c=Object(U.lexer)("md"==l.split(".").pop()?i:le(i)),o=[],s=Object(z.a)(c);try{for(s.s();!(u=s.n()).done;)"heading"===(p=u.value).type?(m=p.depth-1,te(p,a,o),t.push({text:p.text||"",section:o[m]})):o.length&&t.push({text:p.text||"",section:o[o.length-1]})}catch(h){s.e(h)}finally{s.f()}case 12:n++,e.next=3;break;case 15:return e.abrupt("return",[a,t]);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ce=function(){return ie.apply(this,arguments)}();function oe(e){return se.apply(this,arguments)}function se(){return(se=Object(A.a)(R.a.mark((function e(t){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z.a.use({renderer:re}),e.next=3,fetch(t).then((function(e){return e.text()}));case 3:return a=e.sent,e.abrupt("return",Z()("md"==t.split(".").pop()?a:le(a)));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}for(var ue={},pe=0,me=Object.keys(K);pe<me.length;pe++){var he=me[pe];ue[he]=oe(K[he])}var de=function(e){Object(D.a)();var t=Object(n.useState)(""),a=Object(c.a)(t,2),l=a[0],i=a[1],o=Object(n.useState)(null),s=Object(c.a)(o,2),u=s[0],m=s[1],h=Object(n.useState)(""),d=Object(c.a)(h,2),f=d[0],g=d[1];function E(e){return e?r.a.createElement(q.a,{disablePadding:!0},Object.values(e).map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{key:e.text,button:!0,component:"a",href:Y(e),style:{paddingLeft:"".concat(10*e.depth,"px")}},e.parent?r.a.createElement(V.a,null,e.text):r.a.createElement("span",{style:{fontFamily:"Major Mono Display"}},e.text.toLowerCase())),E(e.children))}))):r.a.createElement(r.a.Fragment,null)}return Object(n.useEffect)((function(){Object(A.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=E,e.next=3,ce;case 3:e.t1=e.sent[0],t=(0,e.t0)(e.t1),m(t);case 6:case"end":return e.stop()}}),e)})))()}),[]),Object(n.useEffect)((function(){Object(A.a)(R.a.mark((function t(){var a,n,r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.hash.split("/"),(n=a[0].substring(1))!=f){t.next=4;break}return t.abrupt("return");case 4:if(console.log("load ",n),g(n),ue[n]){t.next=10;break}i(n+": Section not found"),t.next=12;break;case 10:return t.next=12,ue[n].then((function(e){return i(e)}));case 12:r=window.location.hash,window.location.hash="",window.location.hash=r;case 15:case"end":return t.stop()}}),t)})))()}),[e.hash]),r.a.createElement("div",null,r.a.createElement(p.a,{style:{paddingLeft:"240px",position:"relative",paddingTop:"100px"}},r.a.createElement("div",{className:"docMenu",style:{position:"fixed",width:"220px",top:"100px",marginLeft:"-240px",height:"100%",overflow:"scroll"}},u),r.a.createElement(H.a,{style:{flexGrow:1,textAlign:"left",padding:"20px"}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}}))))},fe=a(427),ge=a(425),Ee=Object(fe.a)({matchFrom:"any",ignoreAccents:!0,ignoreCase:!0,stringify:function(e){return e.text}}),be=function(){var e=Object(D.a)(),t=Object(n.useState)(null),a=Object(c.a)(t,2),l=a[0],i=a[1];Object(n.useEffect)((function(){ce.then((function(e){console.log(e[1]),i(e[1])}))}),[]);Object(I.a)();return l?r.a.createElement(ge.a,{id:"doc_search_bar",options:l,style:{width:600},renderInput:function(e){return r.a.createElement(F.a,Object.assign({},e,{label:"Search documentation",variant:"outlined"}))},filterOptions:Ee,onChange:function(t,a){if(console.log("selected!"),console.log(a),a){var n=Y(null===a||void 0===a?void 0:a.section),r=new URL("http://test.com"+n),l=r.pathname,i=r.hash;window.location.pathname!=l?e.push(n.toString()):window.location.hash=i}},getOptionLabel:function(e){return""},renderOption:function(e,t){console.log(t.inputValue);var a=e.text.toLowerCase().indexOf(t.inputValue.toLowerCase()),n=e.text.substring(Math.max(a-50,0),Math.min(a+50,e.text.length));return n=n.replace(t.inputValue,"<u><b>".concat(t.inputValue,"</b></u>")),r.a.createElement("div",{key:ee(e.section)+e.text,style:{display:"flex",flexDirection:"column",borderLeft:"1px solid #999999",paddingLeft:"10px"}},e.section.parent?r.a.createElement("div",null,r.a.createElement(w.a,{variant:"caption"},ee(e.section))):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",null,r.a.createElement(w.a,{variant:"h6"},e.section.text)),r.a.createElement("div",null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))}}):r.a.createElement(r.a.Fragment,null)},ye=Object(y.a)((function(e){var t;return Object(x.a)({grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:(t={display:"none",fontFamily:"Major Mono Display"},Object(u.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(u.a)(t,"textDecoration","none"),t),inputRoot:{color:"inherit"},inputInput:Object(u.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(u.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(u.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})})}));function xe(){Object(D.a)();var e=ye(),t=r.a.useState(null),a=Object(c.a)(t,2),n=a[0],l=a[1],i=r.a.useState(null),o=Object(c.a)(i,2),s=o[0],u=o[1],f=Boolean(n),y=Boolean(s),x=function(){u(null)},j=function(){l(null),x()},k=r.a.createElement(E.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:f,onClose:j},r.a.createElement(b.a,{onClick:j},"Profile"),r.a.createElement(b.a,{onClick:j},"My account")),M=r.a.createElement(E.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:y,onClose:x},r.a.createElement(b.a,null,r.a.createElement(d.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(h.a,{badgeContent:4,color:"secondary"},r.a.createElement(S.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(b.a,null,r.a.createElement(d.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(h.a,{badgeContent:11,color:"secondary"},r.a.createElement(B.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(b.a,{onClick:function(e){l(e.currentTarget)}},r.a.createElement(d.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(O.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:e.grow},r.a.createElement(m.a,{position:"fixed",color:"default"},r.a.createElement(p.a,null,r.a.createElement(v.a,null,r.a.createElement("img",{src:"https://raw.githubusercontent.com/matt-42/lithium/master/images/lithium_logo_white.png",width:"40",style:{paddingRight:"15px"}}),r.a.createElement(w.a,{color:"inherit",className:e.title,variant:"h6",noWrap:!0},r.a.createElement(g.a,{className:e.title,underline:"none",href:"#"},"lithium")),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",null,r.a.createElement(be,null)),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(d.a,{href:"https://github.com/matt-42/lithium",target:"_blank","aria-label":"Github",color:"inherit"},r.a.createElement(_.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(d.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},r.a.createElement(L.a,null)))))),M,k)}var ve=a(422),we=a(420),je=a(421),Oe='"Droid Sans Mono", monospace, monospace, "Droid Sans Fallback"',ke=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current&&J.a.highlightBlock(t.current)}),[null!==t.current]),r.a.createElement("pre",null,r.a.createElement("code",{ref:t,className:"shell"},e.children))},_e=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current&&J.a.highlightBlock(t.current)}),[null!==t.current]),r.a.createElement("pre",null,r.a.createElement("code",{ref:t,className:"c++"},e.children))},Me=function(e){return r.a.createElement("span",{style:{fontFamily:Oe,fontWeight:"bold"}},e.children)},Se=a(412),Ce=a(423),Le=a(419),Te=function(){Object(D.a)();var e=Object(Le.a)("(min-width:700px)");return r.a.createElement(p.a,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:e?"row":"column",justifyContent:"center",paddingTop:"100px"}},r.a.createElement("img",{src:"https://raw.githubusercontent.com/matt-42/lithium/master/images/lithium_logo_white.png",width:"300",style:{marginRight:"30px"}}),r.a.createElement("div",null,r.a.createElement(w.a,{variant:"h1"},"lithium"),r.a.createElement(w.a,{style:{fontSize:"22px"}},"Build high performance C++ HTTP servers without being a C++ expert."),r.a.createElement("div",{style:{height:"20px"}}),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start"}},r.a.createElement(we.a,{variant:"outlined",color:"primary",style:{marginRight:"45px"},href:"#getting-started"},"Get Started"),r.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=matt-42&repo=lithium&type=star&count=true&size=large",frameBorder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"}),r.a.createElement("a",{href:"https://twitter.com/share",className:"twitter-share-button",style:{float:"left",marginLeft:"-37px",paddingTop:"10px"},"data-size":"large"},"Tweet")))),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"100px"}},r.a.createElement(H.a,{style:{flex:1,marginBottom:"20px",padding:"20px",width:e?"700px":"calc(100% - 20px)"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(je.a,null,"get_app"),r.a.createElement("div",{style:{flexBasis:"10px"}}),r.a.createElement(w.a,{variant:"h6"}," Installation")),r.a.createElement("div",{style:{height:"20px"}}),r.a.createElement(w.a,null,"The simplest way to use Lithium is to download the cli in your path. It compiles and runs the server's code inside a docker container. The only requirements are Docker and Python>=3.6."),r.a.createElement(ke,null,"$ wget https://raw.githubusercontent.com/matt-42/lithium/master/cli/li\n$ chmod +x ./li"),r.a.createElement(w.a,null,"Lithium can also run locally. ",r.a.createElement(ve.a,{href:"#getting-started"},r.a.createElement("u",null,"Check the install guide for more info")),".")),r.a.createElement(H.a,{style:{flex:1,padding:"20px",width:e?"700px":"calc(100% - 20px)"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(je.a,null,"api"),r.a.createElement("div",{style:{flexBasis:"10px"}}),r.a.createElement(w.a,{variant:"h6"},"Hello World")),r.a.createElement("div",{style:{height:"20px"}}),r.a.createElement(w.a,null,"Write your first ",r.a.createElement(Me,null,"hello_world")," Lithium server."),r.a.createElement(_e,null,'// main.cc \n#include <lithium_http_server.hh>\n            \nint main() {\n  http_api my_api;\n              \n  my_api.get("/hello_world") = \n  [&](http_request& request, http_response& response) {\n    response.write("hello world.");\n  };\n  http_serve(my_api, 8080);\n}\n'),", history",r.a.createElement(w.a,null,"And run it:"),r.a.createElement(ke,null,"$ li run ./main.cc"),r.a.createElement(w.a,null,"Behind the scene, ",r.a.createElement(Me,null,"li")," will build a lithium docker image, compile and run the server."),r.a.createElement("p",{style:{textAlign:"right"}},r.a.createElement(we.a,{variant:"outlined",color:"primary",href:"#getting-started"},"Read the docs"))),r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement("div",{style:{borderTop:"1px solid #4a4a4a",borderBottom:"1px solid #222222",width:"70%"}}),r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement(w.a,{variant:"h4"},"Lithium's Sponsors"),r.a.createElement(Se.a,null,r.a.createElement(G.a,{button:!0,component:"a",target:"_blank",href:"https://github.com/Burnett01"},r.a.createElement(Ce.a,{primary:"Steven Agyekum (Burnett01)"}))),"If you find this project helpful and want to support it, give a star to lithium or buy me a coffee!",r.a.createElement(ve.a,{target:"_blank",href:"https://github.com/sponsors/matt-42"},r.a.createElement("u",null,"More info on my github sponsor page ",r.a.createElement(je.a,{style:{color:"pink"}},"favorite_border"))),r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement("div",{style:{borderTop:"1px solid #4a4a4a",borderBottom:"1px solid #222222",width:"70%"}}),r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement(w.a,{style:{padding:"30px"}},"Released under the MIT License. Copyright \xa9 2020 Matthieu Garrigues.")))},Be=Object(o.a)({palette:{type:"dark",primary:{main:"#f5f5f5"}},typography:{h1:{fontFamily:"Major Mono Display",fontSize:"50px"},h2:{fontFamily:"Major Mono Display",fontSize:"30px"},h3:{fontFamily:"Major Mono Display",fontSize:"20px"}}});var De=function(){var e=Object(n.useState)(window.location.hash),t=Object(c.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){window.onhashchange=function(){return l(window.location.hash)}}),[]),r.a.createElement(s.a,{theme:Be},r.a.createElement(xe,null),""==a?r.a.createElement(Te,null):r.a.createElement(de,{hash:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[127,1,2]]]);
//# sourceMappingURL=main.baea40ae.chunk.js.map