!function(t){var r={};function e(i){if(r[i])return r[i].exports;var o=r[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(i,o,function(r){return t[r]}.bind(null,o));return i},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){"use strict";e.r(r);var i=function(){},o={},s=[],n=[];function c(t,r){var e,c,l,p,a=n;for(p=arguments.length;p-- >2;)s.push(arguments[p]);for(r&&null!=r.children&&(s.length||s.push(r.children),delete r.children);s.length;)if((c=s.pop())&&void 0!==c.pop)for(p=c.length;p--;)s.push(c[p]);else"boolean"==typeof c&&(c=null),(l="function"!=typeof t)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(l=!1)),l&&e?a[a.length-1]+=c:a===n?a=[c]:a.push(c),e=l;var f=new i;return f.nodeName=t,f.children=a,f.attributes=null==r?void 0:r,f.key=null==r?void 0:r.key,void 0!==o.vnode&&o.vnode(f),f}function l(t,r){for(var e in r)t[e]=r[e];return t}function p(t,r){null!=t&&("function"==typeof t?t(r):t.current=r)}var a="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var f=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,h=[];function d(t){!t._dirty&&(t._dirty=!0)&&1==h.push(t)&&(o.debounceRendering||a)(g)}function g(){for(var t;t=h.pop();)t._dirty&&D(t)}function u(t,r){return t.normalizedNodeName===r||t.nodeName.toLowerCase()===r.toLowerCase()}function b(t){var r=l({},t.attributes);r.children=t.children;var e=t.nodeName.defaultProps;if(void 0!==e)for(var i in e)void 0===r[i]&&(r[i]=e[i]);return r}function m(t){var r=t.parentNode;r&&r.removeChild(t)}function y(t,r,e,i,o){if("className"===r&&(r="class"),"key"===r)   ;else if("ref"===r)p(e,null),p(i,t);else if("class"!==r||o)if("style"===r){if(i&&"string"!=typeof i&&"string"!=typeof e||(t.style.cssText=i||""),i&&"object"==typeof i){if("string"!=typeof e)for(var s in e)s in i||(t.style[s]="");for(var s in i)t.style[s]="number"==typeof i[s]&&!1===f.test(s)?i[s]+"px":i[s]}}else if("dangerouslySetInnerHTML"===r)i&&(t.innerHTML=i.__html||"");else if("o"==r[0]&&"n"==r[1]){var n=r!==(r=r.replace(/Capture$/,""));r=r.toLowerCase().substring(2),i?e||t.addEventListener(r,_,n):t.removeEventListener(r,_,n),(t._listeners||(t._listeners={}))[r]=i}else if("list"!==r&&"type"!==r&&!o&&r in t){try{t[r]=null==i?"":i}catch(t){}null!=i&&!1!==i||"spellcheck"==r||t.removeAttribute(r)}else{var c=o&&r!==(r=r.replace(/^xlink:?/,""));null==i||!1===i?c?t.removeAttributeNS("http://www.w3.org/1999/xlink",r.toLowerCase()):t.removeAttribute(r):"function"!=typeof i&&(c?t.setAttributeNS("http://www.w3.org/1999/xlink",r.toLowerCase(),i):t.setAttribute(r,i))}else t.className=i||""}function _(t){return this._listeners[t.type](o.event&&o.event(t)||t)}var x=[],w=0,k=!1,v=!1;function S(){for(var t;t=x.shift();)o.afterMount&&o.afterMount(t),t.componentDidMount&&t.componentDidMount()}function M(t,r,e,i,o,s){w++||(k=null!=o&&void 0!==o.ownerSVGElement,v=null!=t&&!("__preactattr_"in t));var n=C(t,r,e,i,s);return o&&n.parentNode!==o&&o.appendChild(n),--w||(v=!1,s||S()),n}function C(t,r,e,i,o){var s=t,n=k;if(null!=r&&"boolean"!=typeof r||(r=""),"string"==typeof r||"number"==typeof r)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=r&&(t.nodeValue=r):(s=document.createTextNode(r),t&&(t.parentNode&&t.parentNode.replaceChild(s,t),L(t,!0))),s.__preactattr_=!0,s;var c,l,p=r.nodeName;if("function"==typeof p)return function(t,r,e,i){var o=t&&t._component,s=o,n=t,c=o&&t._componentConstructor===r.nodeName,l=c,p=b(r);for(;o&&!l&&(o=o._parentComponent);)l=o.constructor===r.nodeName;o&&l&&(!i||o._component)?(B(o,p,3,e,i),t=o.base):(s&&!c&&(W(s),t=n=null),o=$(r.nodeName,p,e),t&&!o.nextBase&&(o.nextBase=t,n=null),B(o,p,1,e,i),t=o.base,n&&t!==n&&(n._component=null,L(n,!1)));return t}(t,r,e,i);if(k="svg"===p||"foreignObject"!==p&&k,p=String(p),(!t||!u(t,p))&&(c=p,(l=k?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c)).normalizedNodeName=c,s=l,t)){for(;t.firstChild;)s.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(s,t),L(t,!0)}var a=s.firstChild,f=s.__preactattr_,h=r.children;if(null==f){f=s.__preactattr_={};for(var d=s.attributes,g=d.length;g--;)f[d[g].name]=d[g].value}return!v&&h&&1===h.length&&"string"==typeof h[0]&&null!=a&&void 0!==a.splitText&&null==a.nextSibling?a.nodeValue!=h[0]&&(a.nodeValue=h[0]):(h&&h.length||null!=a)&&function(t,r,e,i,o){var s,n,c,l,p,a=t.childNodes,f=[],h={},d=0,g=0,b=a.length,y=0,_=r?r.length:0;if(0!==b)for(var x=0;x<b;x++){var w=a[x],k=w.__preactattr_,v=_&&k?w._component?w._component.__key:k.key:null;null!=v?(d++,h[v]=w):(k||(void 0!==w.splitText?!o||w.nodeValue.trim():o))&&(f[y++]=w)}if(0!==_)for(var x=0;x<_;x++){l=r[x],p=null;var v=l.key;if(null!=v)d&&void 0!==h[v]&&(p=h[v],h[v]=void 0,d--);else if(g<y)for(s=g;s<y;s++)if(void 0!==f[s]&&(S=n=f[s],T=o,"string"==typeof(M=l)||"number"==typeof M?void 0!==S.splitText:"string"==typeof M.nodeName?!S._componentConstructor&&u(S,M.nodeName):T||S._componentConstructor===M.nodeName)){p=n,f[s]=void 0,s===y-1&&y--,s===g&&g++;break}p=C(p,l,e,i),c=a[x],p&&p!==t&&p!==c&&(null==c?t.appendChild(p):p===c.nextSibling?m(c):t.insertBefore(p,c))}var S,M,T;if(d)for(var x in h)void 0!==h[x]&&L(h[x],!1);for(;g<=y;)void 0!==(p=f[y--])&&L(p,!1)}(s,h,e,i,v||null!=f.dangerouslySetInnerHTML),function(t,r,e){var i;for(i in e)r&&null!=r[i]||null==e[i]||y(t,i,e[i],e[i]=void 0,k);for(i in r)"children"===i||"innerHTML"===i||i in e&&r[i]===("value"===i||"checked"===i?t[i]:e[i])||y(t,i,e[i],e[i]=r[i],k)}(s,r.attributes,f),k=n,s}function L(t,r){var e=t._component;e?W(e):(null!=t.__preactattr_&&p(t.__preactattr_.ref,null),!1!==r&&null!=t.__preactattr_||m(t),T(t))}function T(t){for(t=t.lastChild;t;){var r=t.previousSibling;L(t,!0),t=r}}var j=[];function $(t,r,e){var i,o=j.length;for(t.prototype&&t.prototype.render?(i=new t(r,e),E.call(i,r,e)):((i=new E(r,e)).constructor=t,i.render=U);o--;)if(j[o].constructor===t)return i.nextBase=j[o].nextBase,j.splice(o,1),i;return i}function U(t,r,e){return this.constructor(t,e)}function B(t,r,e,i,s){t._disable||(t._disable=!0,t.__ref=r.ref,t.__key=r.key,delete r.ref,delete r.key,void 0===t.constructor.getDerivedStateFromProps&&(!t.base||s?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(r,i)),i&&i!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=i),t.prevProps||(t.prevProps=t.props),t.props=r,t._disable=!1,0!==e&&(1!==e&&!1===o.syncComponentUpdates&&t.base?d(t):D(t,1,s)),p(t.__ref,t))}function D(t,r,e,i){if(!t._disable){var s,n,c,p=t.props,a=t.state,f=t.context,h=t.prevProps||p,d=t.prevState||a,g=t.prevContext||f,u=t.base,m=t.nextBase,y=u||m,_=t._component,k=!1,v=g;if(t.constructor.getDerivedStateFromProps&&(a=l(l({},a),t.constructor.getDerivedStateFromProps(p,a)),t.state=a),u&&(t.props=h,t.state=d,t.context=g,2!==r&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(p,a,f)?k=!0:t.componentWillUpdate&&t.componentWillUpdate(p,a,f),t.props=p,t.state=a,t.context=f),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!k){s=t.render(p,a,f),t.getChildContext&&(f=l(l({},f),t.getChildContext())),u&&t.getSnapshotBeforeUpdate&&(v=t.getSnapshotBeforeUpdate(h,d));var C,T,j=s&&s.nodeName;if("function"==typeof j){var U=b(s);(n=_)&&n.constructor===j&&U.key==n.__key?B(n,U,1,f,!1):(C=n,t._component=n=$(j,U,f),n.nextBase=n.nextBase||m,n._parentComponent=t,B(n,U,0,f,!1),D(n,1,e,!0)),T=n.base}else c=y,(C=_)&&(c=t._component=null),(y||1===r)&&(c&&(c._component=null),T=M(c,s,f,e||!u,y&&y.parentNode,!0));if(y&&T!==y&&n!==_){var E=y.parentNode;E&&T!==E&&(E.replaceChild(T,y),C||(y._component=null,L(y,!1)))}if(C&&W(C),t.base=T,T&&!i){for(var H=t,J=t;J=J._parentComponent;)(H=J).base=T;T._component=H,T._componentConstructor=H.constructor}}for(!u||e?x.push(t):k||(t.componentDidUpdate&&t.componentDidUpdate(h,d,v),o.afterUpdate&&o.afterUpdate(t));t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);w||i||S()}}function W(t){o.beforeUnmount&&o.beforeUnmount(t);var r=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var e=t._component;e?W(e):r&&(null!=r.__preactattr_&&p(r.__preactattr_.ref,null),t.nextBase=r,m(r),j.push(t),T(r)),p(t.__ref,null)}function E(t,r){this._dirty=!0,this.context=r,this.props=t,this.state=this.state||{},this._renderCallbacks=[]}function H(t,r,e){return M(e,t,{},!1,r,!1)}l(E.prototype,{setState:function(t,r){this.prevState||(this.prevState=this.state),this.state=l(l({},this.state),"function"==typeof t?t(this.state,this.props):t),r&&this._renderCallbacks.push(r),d(this)},forceUpdate:function(t){t&&this._renderCallbacks.push(t),D(this,2)},render:function(){}});var J=class extends E{render(t){let r=`section ${t.name.toLowerCase().replace(" ","")}`;return c("div",{id:t.name.toLowerCase().replace(" ",""),class:r},c("h3",null,t.name),t.children)}};var A=class extends E{render(t){return c("div",{class:`card flip${t.flip} ${t.img.split(".")[0]}`},c("div",{class:"contentholder"},c("div",{class:"screenshot"},c("img",{src:`../assets/media/${t.img}`})),c("div",{class:"content"},c("h3",{class:"title"},t.title),c("div",{class:"desc"},t.desc))),c("div",{class:"tech"},t.tech),c("div",{class:"redirect"},c("a",{href:t.loc.link},t.loc.text)))}};var G=class extends E{render(t){return c("div",{style:{backgroundColor:`${t.color}`,width:"10px",display:"inline-block",height:"50px",top:"2px",position:"relative"}})}componentDidMount(){this.base.animate({opacity:[1,0]},{duration:700,iterations:1/0})}};var V=class extends E{render(t){return c("div",{class:"social"},c("ul",{class:"socialbar"},c("li",{class:"socialitem"},c("a",{href:"https://medium.com/@div5yesh"},c("img",{src:"../assets/media/icons8-medium.svg",alt:"medium@div5yesh"}))),c("li",{class:"socialitem"},c("a",{href:"https://github.com/div5yesh"},c("img",{src:"../assets/media/icons8-github.svg",alt:"github@div5yesh"}))),c("li",{class:"socialitem"},c("a",{href:"https://www.linkedin.com/in/div5yesh/"},c("img",{src:"../assets/media/icons8-linkedin.svg",alt:"linkedin@div5yesh"})))))}};var R=class extends E{constructor(){super(),this.onSubmit=this.onSubmit.bind(this)}onSubmit(t){let r=`entry.473184504=${t.target.name.value}&entry.1312265686=${t.target.email.value}&entry.1403761221=${t.target.message.value}`;fetch(`https://docs.google.com/forms/d/e/1FAIpQLSeHFc4Xdfe70H2DNHzPJbh_surMTC19PDXr396oHuMfaT6vcA/formResponse?${r}`,{mode:"no-cors"}).then(t=>{this.fliper.style.transform="rotateY(180deg)"})}render(t,r){return c("div",{class:"contact"},c("div",{class:"fliper",ref:t=>{this.fliper=t}},c("form",{name:"gform",id:"gform",ref:t=>this.form=t,enctype:"text/plain",target:"hidden_iframe",onSubmit:this.onSubmit},c("input",{required:!0,maxlength:"100",type:"text",placeholder:"John Doe",name:"name",id:"entry.473184504",style:"margin-right: 10px"}),c("input",{required:!0,maxlength:"100",type:"email",placeholder:"john@doe.com",name:"email",id:"entry.1312265686",style:"margin-left: 10px"}),c("textarea",{required:!0,maxlength:"500",type:"textarea",placeholder:"Your message here.",name:"message",id:"entry.1403761221"}),c("input",{type:"submit",value:"Send"}),c("input",{type:"reset",value:"Reset"})),c("form",{class:"submitmessage"},c("label",null,"Submitted Successfully."))),c("iframe",{name:"hidden_iframe",id:"hidden_iframe",style:"display:none;",onload:""}))}};var z=class extends E{render(t){let r=t.items.map(t=>c("li",{class:"menuitem"},c("a",{href:`#${t.toLowerCase().replace(" ","")}`},t)));return c("div",{class:"menubar"},c("ul",{class:"menu"},r))}};var F=class extends E{constructor(){super(),this.onMouseEnter=this.onMouseEnter.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this)}onMouseEnter(){this.base.classList.contains("hover")||this.base.classList.add("hover")}onMouseLeave(){this.base.classList.contains("hover")&&this.base.classList.remove("hover")}render(t){let r=`exp ${t.company.toLowerCase().replace(" ","")}`,e=`../assets/media/${t.img}`;return c("div",{class:r,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},c("div",null,c("div",{class:"logo",style:`background-image: url('${e}')`}),c("h3",null,t.title),c("h3",null,t.company)))}};var q=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t};var N=class extends E{constructor(){super(),this.onAboutClick=this.onAboutClick.bind(this),this.state={expdata:[{img:"games24x7.png",title:"Software Dev. Engineer",company:"Play Games24x7"},{img:"zeus.png",title:"Software Engineer",company:"Zeus Learning"},{img:"malay.png",title:"Software Engineer Intern",company:"Malay Infotech"}],carddata:[{img:"rummy.jpg",title:"RummyCircle Game Table - Native App",desc:"Implemented multiplayer online rummy game in Cocos2d (JavaScript & Redux) using unified codebase & Web Socket bridge in Java for native platform.\n                Implemented code & resources hot update for Rummy Circle native app using Cocos2d Assets Manager.\n                Developed error-reporting tool to send game error logs to AWS server.",tech:["Cocos2d-x | ","Javascript | ","Redux | ","Gradle | ","Android | ","Java"],loc:{text:"Open app site",link:"https://www.rummycircle.com/"}},{img:"kepler.png",title:"MS Office Web Simulation",desc:"Developed MS Excel web simulation in JavaScript & web app to visualize project reports using Redmine API.\n                Implemented file auto save functionality using web workers & auto-fill series algorithms for Excel.\n                Designed distributed selenium automation with TestNG across multiple devices & platforms in Java",tech:["Javascript | ","C# | ","HTML/CSS"],loc:{text:"Go to Product page",link:"https://www.zeuslearning.com/kepler"}},{img:"snapgest.png",title:"Gesture Recognition using Image Processing",desc:"Built gestures recognition based cross-platform application in Java & OpenCV to interact with computers.\n                Improved image recognition algorithm using various color models and image filters.",tech:["OpenCV | ","Java"],loc:{text:"View on GitHub",link:"https://github.com/div5yesh/snapgest"}},{img:"rogueai.gif",title:"Rogue-like Explorer AI Agent",desc:"Implemented exploration agent with propositional knowledge base for inference and decision making, A-star and depth-limited search for path planning.\n                Increased average exploration rate to 98% and winning chances by 20-30%.",tech:["Python"],loc:{text:"View on GitHub",link:"https://github.com/div5yesh/ai-explorer"}}]}}onAboutClick(t){let r=!this.state.about;r?(this.introbout.style.top="-484px",t.target.classList.add("lightup")):(this.introbout.style.top="0",t.target.classList.remove("lightup")),this.setState({about:r})}render(t,r){let e=r.carddata,i=r.expdata,o=e.map((t,r)=>c(A,q({},t,{flip:r%2}))),s=i.map((t,r)=>c(F,t));return c("div",null,c("div",{class:"appliner"},c("a",{href:"https://github.com/div5yesh/div5yesh.github.io/archive/master.zip"},"<click to download the source code for this template/>")),c("div",{class:"aboutmebtn",onClick:this.onAboutClick}),c("div",{class:"introcontainer"},c("div",{class:"bgimage"}),c("div",{class:"introbout",ref:t=>this.introbout=t},c(J,{index:"0",name:"Intro"},c("div",{class:"dpl0"},c("div",{class:"dpl1"},c("div",{class:"mydp"}))),c("h1",null,"Divyesh Chitroda",c(G,{color:"white"})),c("h2",null,"Web & Game Developer"),c(V,null)),c(J,{name:"About Me"},c("p",null,"I'm Divyesh. I have 4 years of experience in Software Development. I'm an ML and Robotics🤖 enthusiast."),c("p",null,"I read, write and code, well not at the same time. I'm creative but cannot really draw a cat🐱. I play and create video games🎮.\n                            Currently I'm wokring on Convolution Neural Networks for object detection.")))),c(z,{items:["Portfolio","Experience","Contact Me"]}),c(J,{index:"2",name:"Portfolio"},o),c(J,{index:"",name:"Experience"},s),c(J,{index:"3",name:"Contact Me"},c(R,null)),c("footer",null,c("div",{class:"copyright"},"© Copyright 2019, Divyesh Chitroda."),c(V,null)))}};H(c(N,null),document.getElementById("app"))}]);