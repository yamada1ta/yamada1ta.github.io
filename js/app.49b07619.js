(function(t){function e(e){for(var n,l,s=e[0],o=e[1],c=e[2],u=0,d=[];u<s.length;u++)l=s[u],r[l]&&d.push(r[l][0]),r[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},i=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var f=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("1356"),r=a.n(n);r.a},"0645":function(t,e,a){},1356:function(t,e,a){},"1d0b":function(t,e,a){},"1e7d":function(t,e,a){},"391a":function(t,e,a){"use strict";var n=a("5279"),r=a.n(n);r.a},"39cf":function(t,e,a){"use strict";var n=a("ea9a"),r=a.n(n);r.a},"46e4":function(t,e,a){},"491c":function(t,e,a){t.exports=a.p+"img/freecell.4ff703b8.jpg"},5279:function(t,e,a){},"555a":function(t,e){t.exports="data:image/png;base64,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"},"56d7":function(t,e,a){"use strict";a.r(e);a("744f"),a("6c7b"),a("7514"),a("20d6"),a("1c4c"),a("6762"),a("cadf"),a("e804"),a("55dd"),a("d04f"),a("c8ce"),a("217b"),a("7f7f"),a("f400"),a("7f25"),a("536b"),a("d9ab"),a("f9ab"),a("32d7"),a("25c9"),a("9f3c"),a("042e"),a("c7c6"),a("f4ff"),a("049f"),a("7872"),a("a69f"),a("0b21"),a("6c1a"),a("c7c62"),a("84b4"),a("c5f6"),a("2e37"),a("fca0"),a("7cdf"),a("ee1d"),a("b1b1"),a("87f3"),a("9278"),a("5df2"),a("04ff"),a("f751"),a("4504"),a("fee7"),a("ffc1"),a("0d6d"),a("9986"),a("8e6e"),a("25db"),a("e4f7"),a("b9a1"),a("64d5"),a("9aea"),a("db97"),a("66c8"),a("57f0"),a("165b"),a("456d"),a("cf6a"),a("fd24"),a("8615"),a("551c"),a("097d"),a("df1b"),a("2397"),a("88ca"),a("ba16"),a("d185"),a("ebde"),a("2d34"),a("f6b3"),a("2251"),a("c698"),a("a19f"),a("9253"),a("9275"),a("3b2b"),a("3846"),a("4917"),a("a481"),a("28a5"),a("386d"),a("6b54"),a("4f7f"),a("8a81"),a("ac4d"),a("8449"),a("9c86"),a("fa83"),a("48c0"),a("a032"),a("aef6"),a("d263"),a("6c37"),a("9ec8"),a("5695"),a("2fdb"),a("d0b0"),a("5df3"),a("b54a"),a("f576"),a("ed50"),a("788d"),a("14b9"),a("f386"),a("f559"),a("1448"),a("673e"),a("242a"),a("c66f"),a("b05c"),a("34ef"),a("6aa2"),a("15ac"),a("af56"),a("b6e4"),a("9c29"),a("63d9"),a("4dda"),a("10ad"),a("c02b"),a("4795"),a("130f"),a("ac6a"),a("96cf");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",{staticClass:"grey lighten-5 blue-grey--text text--darken-3"},[n("v-toolbar",{attrs:{flat:"",color:"cyan darken-1",height:t.$vuetify.breakpoint.smAndUp?"64px":"56px",extended:t.$vuetify.breakpoint.xsOnly}},[t.$vuetify.breakpoint.xsOnly?n("v-spacer"):t._e(),t.$vuetify.breakpoint.xsOnly||!t.isHome?n("v-toolbar-title",{class:["logo",t.$vuetify.breakpoint.xsOnly?"xs":""]},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:a("cf05")}})])],1):t._e(),n("v-spacer"),n("v-spacer",{attrs:{slot:t.navPos},slot:t.navPos}),n("v-toolbar-items",{attrs:{slot:t.navPos},slot:t.navPos},t._l(t.links,function(e){return n("v-btn",{key:e.text,staticClass:"font-weight-bold",attrs:{to:e.to,flat:"",color:"grey lighten-5"}},[t._v(t._s(e.text))])}),1),t.$vuetify.breakpoint.xsOnly?n("v-spacer",{attrs:{slot:t.navPos},slot:t.navPos}):t._e()],1),t.isHome&&t.$vuetify.breakpoint.smAndUp?n("div",{staticClass:"home-header cyan lighten-2 grey--text text--lighten-5"},[n("img",{attrs:{src:a("cf05")}}),n("p",[t._v("IT Engineer / Game, Windows, Web")])]):t._e(),n("v-container",[n("v-layout",[n("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[n("router-view")],1)],1)],1)],1)],1)},l=[],s={name:"App",components:{},data:function(){return{links:[{text:"home",to:"/"},{text:"works",to:"/works"},{text:"contact",to:"/contact"}]}},computed:{navPos:function(){return this.$vuetify.breakpoint.xsOnly?"extension":"default"},isHome:function(){return"/"===this.$route.path}}},o=s,c=(a("034f"),a("39cf"),a("2877")),f=a("6544"),u=a.n(f),d=a("7496"),p=a("8336"),v=a("a523"),b=a("549c"),h=a("0e8f"),g=a("a722"),m=a("9910"),k=a("71d9"),A=a("2a7f"),x=Object(c["a"])(o,i,l,!1,null,"8f712e26",null),y=x.exports;u()(x,{VApp:d["a"],VBtn:p["a"],VContainer:v["a"],VContent:b["a"],VFlex:h["a"],VLayout:g["a"],VSpacer:m["a"],VToolbar:k["a"],VToolbarItems:A["a"],VToolbarTitle:A["b"]});var _=a("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("block",{attrs:{"page-top":""}},[n("template",{slot:"heading"},[n("h2",[t._v("プロフィール")])]),n("div",{class:t.$vuetify.breakpoint.xsOnly?"name-xs":"name"},[n("v-avatar",{attrs:{size:"64",color:"blue-grey lighten-4"}},[n("img",{attrs:{src:a("555a")}})]),n("span",[t._v("山田イチタ（yamada1ta）")])],1),n("p",[t._v("フリーランスのITエンジニアです。主にクラウドソーシングなどを通じたリモートワークで活動しています。")]),n("p",[t._v("\n      以前はソフトウェア企業に所属し、Windows向けの環境系3Dシミュレーションソフト（自社パッケージ）の開発に携わっていました。\n      "),n("br"),t._v("その経験もあって、C#やC++を用いたWindowsアプリケーション開発を得意としています。\n    ")]),n("p",[t._v("現在ではWebなど他分野にも関わっており、中でも特に、UnityやWebGLなどを用いたゲーム、インタラクティブコンテンツの開発に積極的に注力しています。")])],2),n("block",[n("template",{slot:"heading"},[n("h3",[t._v("スキル")])]),n("skill-list"),n("internal-link",{attrs:{to:"/works",text:"作例を見る"}})],2),n("block",[n("template",{slot:"heading"},[n("h3",[t._v("ご依頼・お問い合わせ")])]),n("p",{staticClass:"near-bottom"},[n("inline-link",{attrs:{href:"/contact",internal:""}},[t._v("こちらのページ")]),t._v("をご覧ください。\n    ")],1)],2)],1)},C=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block"},[a("div",{class:["heading",t.$vuetify.breakpoint.xsOnly?"xs":"",t.pageTop?"page-heading":""]},[t._t("heading")],2),t._t("default")],2)},O=[],B={props:{pageTop:Boolean}},S=B,E=(a("9b60"),Object(c["a"])(S,V,O,!1,null,"3f85f9eb",null)),P=E.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{small:"",flat:"",color:"cyan darken-3",to:t.to}},[a("v-icon",[t._v("chevron_right")]),t._v("\n  "+t._s(t.text)+"\n")],1)},j=[],I={props:{to:String,text:String}},T=I,F=(a("d2e8"),a("132d")),G=Object(c["a"])(T,L,j,!1,null,"7f3bf0ec",null),D=G.exports;u()(G,{VBtn:p["a"],VIcon:F["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{flat:"",color:"cyan darken-3",target:t.internal?"":"_blank",href:t.internal?"":t.href,to:t.internal?t.href:""}},[t._t("default")],2)},J=[],H={props:{href:String,internal:{type:Boolean,default:!1}}},U=H,X=(a("9a5e"),Object(c["a"])(U,W,J,!1,null,"c06f9f3e",null)),Y=X.exports;u()(X,{VBtn:p["a"]});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skill-list"},[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("v-list",{staticClass:"blue-grey lighten-5",attrs:{"three-line":""}},[t._l(t.skills,function(e,n){return[a("skill-list-item",t._b({key:"item-"+n},"skill-list-item",e,!1)),n!=t.skills.length-1?a("v-divider",{key:"divider-"+n}):t._e()]})],2)],1)],1)],1)},M=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-tile",{staticClass:"skill-list-item"},[a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"item-title blue-grey--text text--darken-3"},[t._v(t._s(t.title))]),a("v-list-tile-sub-title",{staticClass:"item-content"},t._l(t.tags,function(e){return a("v-chip",{key:e,attrs:{small:"",disabled:"",color:"white--text blue-grey darken-2"}},[t._v(t._s(e))])}),1)],1)],1)},K=[],Q={props:{title:String,tags:Array,links:Array}},Z=Q,$=(a("c84c"),a("cc20")),R=a("ba95"),q=a("5d23"),tt=Object(c["a"])(Z,N,K,!1,null,"459b7bd9",null),et=tt.exports;u()(tt,{VChip:$["a"],VListTile:R["a"],VListTileContent:q["a"],VListTileSubTitle:q["b"],VListTileTitle:q["c"]});var at={components:{SkillListItem:et},data:function(){return{skills:[{title:"ゲーム・インタラクティブコンテンツ",tags:["C#","C++","JavaScript","TypeScript","Unity","WebGL"]},{title:"Windowsアプリケーション・スクリプト",tags:["C#","C++","Python","PowerShell"]},{title:"Webフロントエンド",tags:["HTML","CSS","JavaScript","TypeScript","WebGL","Vue.js"]},{title:"その他",tags:["WordPress","Android","Firebase"]}]}}},nt=at,rt=(a("ac2f"),a("ce7e")),it=a("8860"),lt=Object(c["a"])(nt,z,M,!1,null,"4270b361",null),st=lt.exports;u()(lt,{VDivider:rt["a"],VFlex:h["a"],VLayout:g["a"],VList:it["a"]});var ot={components:{Block:P,InternalLink:D,InlineLink:Y,SkillList:st}},ct=ot,ft=(a("a021"),a("8212")),ut=Object(c["a"])(ct,w,C,!1,null,"7caa44d1",null),dt=ut.exports;u()(ut,{VAvatar:ft["a"]});var pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("block",{attrs:{"page-top":""}},[a("template",{slot:"heading"},[a("h2",[t._v("ご依頼・お問い合わせ")])]),a("p",[t._v("下記クラウドソーシングサイトからご連絡ください。")]),a("div",{staticClass:"link"},[a("div",[a("external-link",{attrs:{href:"https://www.lancers.jp/profile/yamada1ta",text:"ランサーズ"}})],1),a("div",[a("external-link",{attrs:{href:"https://crowdworks.jp/public/employees/817994",text:"クラウドワークス"}})],1)]),a("p",[t._v("また、下記サイトで定型サービスの販売を行っております。")]),a("div",{staticClass:"link"},[a("external-link",{attrs:{href:"https://profile.coconala.com/users/509917",text:"ココナラ"}})],1),a("p",[t._v("休日中のご連絡など、状況によってはご返信が遅れる場合があります。恐れ入りますが、予めご了承のほどお願いいたします。")])],2),a("block",[a("template",{slot:"heading"},[a("h3",[t._v("その他リンク")])]),a("div",[a("external-link",{attrs:{href:"https://note.mu/yamada1ta",text:"note"}})],1),a("div",[a("external-link",{attrs:{href:"https://github.com/yamada1ta",text:"GitHub"}})],1)],2)],1)},vt=[],bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{small:"",flat:"",color:"cyan darken-3",target:"_blank",href:t.href}},[a("v-icon",[t._v(t._s(t.icon))]),t._v("\n  "+t._s(t.text)+"\n")],1)},ht=[],gt={props:{href:String,text:String,icon:{type:String,default:"open_in_new"}}},mt=gt,kt=(a("5aba"),Object(c["a"])(mt,bt,ht,!1,null,"7534425e",null)),At=kt.exports;u()(kt,{VBtn:p["a"],VIcon:F["a"]});var xt={components:{Block:P,ExternalLink:At,InlineLink:Y}},yt=xt,_t=(a("391a"),Object(c["a"])(yt,pt,vt,!1,null,"2edd8993",null)),wt=_t.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("block",{attrs:{"page-top":""}},[n("template",{slot:"heading"},[n("h2",[t._v("作例")])]),n("p",[n("span",[t._v("下記以外にも")]),n("inline-link",{attrs:{href:"https://note.mu/yamada1ta"}},[t._v("note")]),t._v("で制作物を紹介していますので、併せてご覧ください。\n    ")],1)],2),n("block",{attrs:{id:"web"}},[n("template",{slot:"heading"},[n("h3",[t._v("フリーセル")])]),n("works-item",{attrs:{src:a("491c")}},[n("p",[t._v("JavaScript（TypeScript）製のWebゲームです。描画やインタラクションなどにPixiJSを使用しています。")]),n("div",[n("external-link",{attrs:{href:"https://yamada1ta.gitlab.io/freecell-demo",text:"ブラウザでプレイ"}})],1),n("div",[n("external-link",{attrs:{href:"https://github.com/yamada1ta/freecell",text:"ソースコード"}})],1)])],2),n("block",[n("template",{slot:"heading"},[n("h3",[t._v("To Fish")])]),n("works-item",{attrs:{src:a("6370")}},[n("p",[t._v("Unityの各種エフェクト（シェーダー、パーティクル、ポストプロセス）を使用したデモコンテンツです。")]),n("div",[n("external-link",{attrs:{href:"https://github.com/yamada1ta/tofish/releases/download/v1.0.0/tofish-win64.zip",text:"実行ファイル（Windows 64bit）",icon:"save_alt"}})],1),n("div",[n("external-link",{attrs:{href:"https://github.com/yamada1ta/tofish",text:"ソースコード"}})],1)])],2)],1)},Vt=[],Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-img",{attrs:{src:t.src,"aspect-ratio":"1.25"}})],1),a("v-flex",{attrs:{xs12:"",md5:"","offset-md1":""}},[a("div",{class:t.$vuetify.breakpoint.smAndDown?"sm":""},[t._t("default")],2)])],1)},Bt=[],St={props:{src:String}},Et=St,Pt=(a("a8fb"),a("adda")),Lt=Object(c["a"])(Et,Ot,Bt,!1,null,"8af4a710",null),jt=Lt.exports;u()(Lt,{VFlex:h["a"],VImg:Pt["a"],VLayout:g["a"]});var It={components:{Block:P,ExternalLink:At,InlineLink:Y,WorksItem:jt}},Tt=It,Ft=Object(c["a"])(Tt,Ct,Vt,!1,null,null,null),Gt=Ft.exports;n["a"].use(_["a"]);var Dt=new _["a"]({mode:"history",routes:[{path:"*",redirect:"/"},{path:"/",component:dt,meta:{title:"home"}},{path:"/contact",component:wt,meta:{title:"contact"}},{path:"/works",component:Gt,meta:{title:"works"}}],scrollBehavior:function(t,e,a){return a||{x:0,y:0}}});Dt.afterEach(function(t){t.meta&&t.meta.title&&(document.title=t.meta.title+" - 山田イチタ")});var Wt=Dt;n["a"].config.productionTip=!1,new n["a"]({router:Wt,render:function(t){return t(y)}}).$mount("#app")},"5aba":function(t,e,a){"use strict";var n=a("da23"),r=a.n(n);r.a},6370:function(t,e,a){t.exports=a.p+"img/tofish.6866974f.jpg"},"657b":function(t,e,a){},"98b3":function(t,e,a){},"9a5e":function(t,e,a){"use strict";var n=a("1e7d"),r=a.n(n);r.a},"9b60":function(t,e,a){"use strict";var n=a("46e4"),r=a.n(n);r.a},a021:function(t,e,a){"use strict";var n=a("657b"),r=a.n(n);r.a},a8fb:function(t,e,a){"use strict";var n=a("0645"),r=a.n(n);r.a},ac2f:function(t,e,a){"use strict";var n=a("98b3"),r=a.n(n);r.a},bd31:function(t,e,a){},c84c:function(t,e,a){"use strict";var n=a("bd31"),r=a.n(n);r.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.f51c186e.png"},d2e8:function(t,e,a){"use strict";var n=a("1d0b"),r=a.n(n);r.a},da23:function(t,e,a){},ea9a:function(t,e,a){}});