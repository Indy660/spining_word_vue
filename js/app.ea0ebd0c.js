(function(t){function n(n){for(var i,r,a=n[0],c=n[1],u=n[2],p=0,d=[];p<a.length;p++)r=a[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(n);while(d.length)d.shift()();return s.push.apply(s,u||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],i=!0,a=1;a<e.length;a++){var c=e[a];0!==o[c]&&(i=!1)}i&&(s.splice(n--,1),t=r(r.s=e[0]))}return t}var i={},o={app:0},s=[];function r(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/spinning_word_vue/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var u=0;u<a.length;u++)n(a[u]);var l=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0194":function(t,n,e){},"034f":function(t,n,e){"use strict";e("85ec")},"0feb":function(t,n,e){"use strict";e("2043")},"18e6":function(t,n,e){},2043:function(t,n,e){},"2d6d":function(t,n,e){"use strict";e("a073")},"2ed6":function(t,n,e){},"2f4f":function(t,n,e){"use strict";e("0194")},"311c":function(t,n,e){"use strict";e("2ed6")},"4bd7":function(t,n,e){},"4fe0":function(t,n,e){"use strict";e("e073")},"51ab":function(t,n,e){"use strict";e("18e6")},"555a":function(t,n,e){t.exports=e.p+"img/icon.8ba69656.png"},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main",class:{padding_right:t.showSidebar},style:t.mainGridStyle,on:{mouseleave:t.returnDefaultIndex}},[t._l(t.cellsAtScreen,(function(n){return[e("CellComponent",{key:n,nativeOn:{click:function(n){return t.showSidebarFunc(!1)},mouseenter:function(e){return t.changeIndex(n)}}})]})),e("div",{staticClass:"content"},[t._l(t.timesInscription,(function(n){return[e("InscriptionName",{key:n,attrs:{positionX:t.mousePositionX,positionY:t.mousePositionY,basicPositionX:t.basicPositionX,basicPositionY:t.basicPositionY,order:n-1,timesInscription:t.timesInscription}})]}))],2),e("transition",{attrs:{name:"fade"}},[t.showSidebar?t._e():e("ButtonShowSidebar",{staticClass:"sidebar_button",nativeOn:{click:function(n){return n.stopPropagation(),t.showSidebarFunc(!0)}}})],1),e("Sidebar",{attrs:{showSidebar:t.showSidebar},on:{click:function(t){t.stopPropagation()},mouseleave:t.returnDefaultIndex}})],2)},s=[],r=e("b85c"),a=e("5530"),c=(e("99af"),e("ac1f"),e("5319"),e("1276"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cell"})}),u=[],l={name:"CellComponent"},p=l,d=(e("72fa"),e("2877")),f=Object(d["a"])(p,c,u,!1,null,"da90f7de",null),m=f.exports,b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"name",style:t.computedStyle},[t._v(t._s(t.inscription))])},h=[],v=(e("a9e3"),{name:"InscriptionName",props:{order:{type:Number,default:1},timesInscription:{type:Number,default:1},positionX:{type:Number,default:1},positionY:{type:Number,default:1},basicPositionX:{type:Number,default:1},basicPositionY:{type:Number,default:1}},data:function(){return{colorInscription:0}},computed:{inscription:function(){return this.$store.state.settingInscription.inscription},computedStyle:function(){return{color:"hsl(".concat(this.colorInscription,", 100%, 50%)"),fontSize:"calc(100px + ".concat(this.order," * 10px)"),animationDelay:"calc(-0.3s + ".concat(this.order,"s)"),opacity:"".concat(this.opacity),transform:"\n         translateX(calc(-50% - (".concat(this.positionX," - ").concat(this.basicPositionX,") * (").concat(this.basicPositionX," - ").concat(this.order,") * 3px))\n         translateY(calc(-50% - (").concat(this.positionY," - ").concat(this.basicPositionY,") * (").concat(this.basicPositionY," - ").concat(this.order,") * 3px))\n         rotateX(calc(0deg - (").concat(this.positionY," - ").concat(this.basicPositionY,") * 5deg))\n         rotateY(calc((").concat(this.positionX," - ").concat(this.basicPositionX,") * 5deg))\n         ")}},stepColor:function(){return Math.ceil(360/this.timesInscription)},startColor:function(){return this.stepColor*this.order},opacity:function(){return(this.order+1)/this.timesInscription}},mounted:function(){var t=this;this.colorInscription=this.startColor,this.updateColor(),setInterval((function(){return t.updateColor()}),200)},methods:{updateColor:function(){this.colorInscription=this.colorInscription+this.stepColor,this.colorInscription/360>=1&&(this.colorInscription=0)}}}),g=v,y=(e("51ab"),Object(d["a"])(g,b,h,!1,null,"1bdaa65c",null)),_=y.exports,S=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"sidebar",class:t.classSidebar},[t._l(t.sidebarSettings,(function(n,i){return[e("div",{key:i,staticClass:"setting"},[e("div",{staticClass:"name_setting"},[t._v(" "+t._s(n.text)+" ")]),"range"===n.type?[e("Range",{attrs:{stateProp:n.stateProp,min:n.min,max:n.max,action:n.action}})]:t._e(),"input"===n.type?[e("Input",{attrs:{stateProp:n.stateProp,action:n.action}})]:t._e(),"copy_button"===n.type?[e("CopyButton")]:t._e(),"default_setting_button"===n.type?[e("DefaultSettingsButton")]:t._e()],2)]}))],2)},w=[],I=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputModel,expression:"inputModel"}],domProps:{value:t.inputModel},on:{input:function(n){n.target.composing||(t.inputModel=n.target.value)}}})},P=[],x=(e("d3b7"),{name:"Input",props:{stateProp:{type:Array,default:function(){return[]}},action:{type:String,default:""}},computed:{inputModel:{get:function(){var t=this.$store.state;return this.stateProp.reduce((function(t,n){return null===t||void 0===t?void 0:t[n]}),t)},set:function(t){this.$store.commit(this.action,t)}}}}),O=x,j=(e("2d6d"),Object(d["a"])(O,I,P,!1,null,"7148c7aa",null)),C=j.exports,M=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"range"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputModel,expression:"inputModel"}],attrs:{type:"range",min:t.min,max:t.max,step:"1"},domProps:{value:t.inputModel},on:{__r:function(n){t.inputModel=n.target.value}}}),e("div",{staticClass:"numbers"},[e("div",{staticClass:"min"},[t._v(t._s(t.min))]),e("div",{staticClass:"data"},[t._v(t._s(t.inputModel))]),e("div",{staticClass:"max"},[t._v(t._s(t.max))])])])},N=[],$={name:"Range",props:{stateProp:{type:Array,default:function(){return[]}},action:{type:String,default:""},min:{type:Number,default:0},max:{type:Number,default:100}},computed:{inputModel:{get:function(){var t=this.$store.state;return this.stateProp.reduce((function(t,n){return null===t||void 0===t?void 0:t[n]}),t)},set:function(t){this.$store.commit(this.action,parseInt(t))}}}},X=$,Y=(e("0feb"),Object(d["a"])(X,M,N,!1,null,"05ac7a16",null)),E=Y.exports,D=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{ref:"button",attrs:{type:"button"},on:{click:t.copyMethod}},[t._v("Скопировать настройки "),e("span",{staticClass:"done",attrs:{"aria-hidden":"true"}},[t._v("Ссылка скопирована")])])},k=[],B=(e("fb6a"),e("b0c0"),e("2f62")),A=e("ade3"),R=e("2909"),T=e("3835"),L=(e("3ca3"),e("10d1"),e("ddb0"),e("6062"),e("4ec9"),e("a630"),e("4d63"),e("c607"),e("2c3e"),e("25f0"),e("5377"),e("d81d"),e("b64b"),{mainScreen:{timesInscription:20,rows:20,columns:20},settingInscription:{inscription:"EXAMPLE"}});function F(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new WeakMap;if(Object(t)!==t)return t;if(n.has(t))return n.get(t);var e=t instanceof Set?new Set(t):t instanceof Map?new Map(Array.from(t,(function(t){var e=Object(T["a"])(t,2),i=e[0],o=e[1];return[i,F(o,n)]}))):t instanceof Date?new Date(t):t instanceof RegExp?new RegExp(t.source,t.flags):t.constructor?new t.constructor:Object.create(null);return n.set(t,e),Object.assign.apply(Object,[e].concat(Object(R["a"])(Object.keys(t).map((function(e){return Object(A["a"])({},e,F(t[e],n))})))))}function G(){return F(L)}var J=[{name:"name",mutation:"updateInscriptionName",getter:"inscription"},{name:"time_inscription",mutation:"updateTimesInscription",getter:"timesInscription"},{name:"time_rows",mutation:"updateRowsNumber",getter:"rows"},{name:"time_columns",mutation:"updateColumnsNumber",getter:"columns"}];function U(t,n){var e,i={},o=Object(r["a"])(t);try{for(o.s();!(e=o.n()).done;){var s=e.value;i[s.name]=s[n]}}catch(a){o.e(a)}finally{o.f()}return i}var z={name:"CopyButton",computed:Object(a["a"])({},Object(B["b"])(U(J,"getter"))),methods:{copyMethod:function(){var t=this;this.$refs.button.classList.add("copied");var n,e=setInterval((function(){t.$refs.button.classList.remove("copied"),clearInterval(e)}),600),i="".concat(location.origin,"/"),o=Object(r["a"])(J);try{for(o.s();!(n=o.n()).done;){var s=n.value,a="".concat(s.name,"=").concat(this[s.name],"&");i+=a}}catch(c){o.e(c)}finally{o.f()}i=i.slice(0,-1),navigator.clipboard.writeText(i)}}},W=z,q=(e("d1b4"),Object(d["a"])(W,D,k,!1,null,"6c3d45e2",null)),H=q.exports,K=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{ref:"button",attrs:{type:"button"},on:{click:t.setDefaultStateFunc}},[t._v("Вернуть начальные настройки "),e("span",{staticClass:"done",attrs:{"aria-hidden":"true"}},[t._v("Настройки возвращены")])])},Q=[],V={name:"CopyButton",computed:{},methods:Object(a["a"])(Object(a["a"])({},Object(B["c"])(["setDefaultState"])),{},{setDefaultStateFunc:function(){var t=this;this.$refs.button.classList.add("copied");var n=setInterval((function(){t.$refs.button.classList.remove("copied"),clearInterval(n)}),600);this.setDefaultState()}})},Z=V,tt=(e("4fe0"),Object(d["a"])(Z,K,Q,!1,null,"18768fe4",null)),nt=tt.exports,et={name:"Sidebar",components:{Input:C,Range:E,CopyButton:H,DefaultSettingsButton:nt},props:{showSidebar:{type:Boolean,default:!1}},data:function(){return{sidebarSettings:[{type:"input",stateProp:["settingInscription","inscription"],text:"Надпись",action:"updateInscriptionName"},{type:"range",stateProp:["mainScreen","timesInscription"],text:"Количество надписей",min:1,max:80,action:"updateTimesInscription"},{type:"range",stateProp:["mainScreen","columns"],text:"Количество колонн",min:5,max:100,action:"updateColumnsNumber"},{type:"range",stateProp:["mainScreen","rows"],text:"Количество рядов",min:5,max:100,action:"updateRowsNumber"},{type:"copy_button"},{type:"default_setting_button"}]}},computed:{classSidebar:function(){return this.showSidebar?"show":"hide"}},methods:{}},it=et,ot=(e("311c"),Object(d["a"])(it,S,w,!1,null,"2744002c",null)),st=ot.exports,rt=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"button_circle"},[i("div",{staticClass:"gradient"}),i("div",{staticClass:"button"},[i("img",{attrs:{src:e("555a")}})])])}],ct={name:"ButtonShowSidebar"},ut=ct,lt=(e("2f4f"),Object(d["a"])(ut,rt,at,!1,null,"288e3ce2",null)),pt=lt.exports,dt={name:"App",components:{CellComponent:m,InscriptionName:_,Sidebar:st,ButtonShowSidebar:pt},data:function(){return{mousePositionX:0,mousePositionY:0,showSidebar:!1}},computed:Object(a["a"])(Object(a["a"])({},Object(B["b"])(["timesInscription","rows","columns","inscription"])),{},{cellsAtScreen:function(){return this.rows*this.columns},mainGridStyle:function(){return{gridTemplate:"repeat(".concat(this.rows,", 1fr) / repeat(").concat(this.columns,", 1fr)")}},basicPositionX:function(){return Math.ceil(this.columns/2)},basicPositionY:function(){return Math.ceil(this.rows/2)}}),mounted:function(){this.returnDefaultIndex(),this.updateStateByUrl()},methods:Object(a["a"])(Object(a["a"])({},Object(B["c"])(U(J,"mutation"))),{},{changeIndex:function(t){this.mousePositionX=t>this.columns?t%this.columns===0?this.columns:t%this.columns:t,this.mousePositionY=t>this.columns?Math.ceil(t/this.columns):1},returnDefaultIndex:function(){this.mousePositionX=this.basicPositionX,this.mousePositionY=this.basicPositionY},showSidebarFunc:function(t){this.showSidebar=t},updateStateByUrl:function(){if(console.log(location.href.replace(location.origin,"")),location.href.replace(location.origin,"").length>1){var t,n=location.href.replace(location.origin,"").substring(1),e=n.split("&"),i=Object(r["a"])(e);try{for(i.s();!(t=i.n()).done;){var o=t.value,s=o.indexOf("=");if(s){var a=o.substring(0,s),c=o.substring(s+1);parseInt(c)&&(c=parseInt(c)),console.log(a,c),this[a]&&this[a](c)}}}catch(u){i.e(u)}finally{i.f()}}}})},ft=dt,mt=(e("034f"),Object(d["a"])(ft,o,s,!1,null,null,null)),bt=mt.exports;i["a"].use(B["a"]);var ht=new B["a"].Store({state:{mainScreen:{timesInscription:20,rows:20,columns:20},settingInscription:{inscription:"EXAMPLE"}},getters:{timesInscription:function(t){return t.mainScreen.timesInscription},rows:function(t){return t.mainScreen.rows},columns:function(t){return t.mainScreen.columns},inscription:function(t){return t.settingInscription.inscription}},mutations:{updateTimesInscription:function(t,n){t.mainScreen.timesInscription=n},updateRowsNumber:function(t,n){t.mainScreen.rows=n},updateColumnsNumber:function(t,n){t.mainScreen.columns=n},updateInscriptionName:function(t,n){t.settingInscription.inscription=n},setDefaultState:function(t){Object.assign(t,G())}},actions:{},modules:{}}),vt=e("8c4f");i["a"].use(vt["a"]);var gt=[{path:"/",name:"home",component:bt},{path:"/about",name:"about"}],yt=new vt["a"]({mode:"abstract",routes:gt}),_t=yt;i["a"].config.productionTip=!1,i["a"].prototype.$log=console.log,new i["a"]({store:ht,router:_t,render:function(t){return t(bt)}}).$mount("#app")},"5d5c":function(t,n,e){},"72fa":function(t,n,e){"use strict";e("4bd7")},"85ec":function(t,n,e){},a073:function(t,n,e){},d1b4:function(t,n,e){"use strict";e("5d5c")},e073:function(t,n,e){}});
//# sourceMappingURL=app.ea0ebd0c.js.map