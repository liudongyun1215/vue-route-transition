webpackJsonp([8],{"4ml/":function(t,e){},IvNo:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement;return(this._self._c||t)("vue-route-transition",{attrs:{id:"app",keepAlive:!0}})},staticRenderFns:[]};var o=n("VU/8")({name:"App"},i,!1,function(t){n("Ug2t")},null,null).exports,r=n("/ocq"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-layout",{attrs:{id:"__index"}},[n("router-view"),t._v(" "),n("van-tabbar",{attrs:{slot:"footer",fixed:!1},slot:"footer",model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tabbar-item",{attrs:{to:"/",icon:"shop"}},[t._v("标签")]),t._v(" "),n("van-tabbar-item",{attrs:{to:"/tab",icon:"chat"}},[t._v("标签")]),t._v(" "),n("van-tabbar-item",{attrs:{to:"/swipe",icon:"records"}},[t._v("标签")])],1)],1)},staticRenderFns:[]},u=n("VU/8")({data:function(){return{active:0}},mounted:function(){switch(this.$route.path){case"/":this.active=0;break;case"/tab":this.active=1;break;case"/swipe":this.active=2;break;default:this.active=0}}},s,!1,null,null,null).exports;a.a.use(r.a);var c=new r.a({routes:[{path:"",component:u,children:[{path:"/",component:function(t){return n.e(4).then(function(){var e=[n("vkyI")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/tab",component:function(t){return n.e(2).then(function(){var e=[n("HcBI")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/swipe",component:function(t){return n.e(1).then(function(){var e=[n("+eDV")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/rate",meta:{keepAlive:!1},component:function(t){return n.e(3).then(function(){var e=[n("J4SX")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/button",component:function(t){return n.e(0).then(function(){var e=[n("GW8G")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/address",component:function(t){return n.e(6).then(function(){var e=[n("sy9f")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/demo",component:function(t){return n.e(5).then(function(){var e=[n("xxzw")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}),h=n("mvHQ"),p=n.n(h),l=sessionStorage.getItem("$$routeChain")||[],d={name:"vue-route-transition",props:{keepAlive:{type:Boolean,default:!0}},data:function(){try{l="/"!==this.$route.path?JSON.parse(l):[]}catch(t){l=[]}return{state:{addCount:l.length,routerMap:{},pageDirection:"fade",routeChain:l}}},methods:{addRouteChain:function(t){0===this.state.addCount&&l.length>0?this.state.addCount=1:(0!==this.state.addCount&&this.state.routeChain[this.state.routeChain.length-1].path!==t.path||0===this.state.addCount)&&(this.state.routeChain.push({path:t.path}),sessionStorage.setItem("$$routeChain",p()(this.state.routeChain)),this.state.addCount++)},popRouteChain:function(){this.state.routeChain.pop(),sessionStorage.setItem("$$routeChain",p()(this.state.routeChain))},setPageDirection:function(t){var e=t.dir,n=t.to,a=t.from;this.state.pageDirection=e,this.state.routerMap.to=n.path,this.state.routerMap.from=a.path},setRouterMap:function(){var t=this.state.pageDirection,e=this.state.routerMap.to.replace(/\//g,"_"),n=this.state.routerMap.from.replace(/\//g,"_");try{"slide-left"===t?this.state.routerMap[n]=document.getElementById(n).scrollTop:"slide-right"===t&&!0===this.keepAlive&&!1!==this.$route.meta.keepAlive&&(document.getElementById(e).scrollTop=this.state.routerMap[e])}catch(t){}}},mounted:function(){var t=this;this.$router.beforeEach(function(e,n,a){var i=t.state.routeChain.length;if(0===i||0===t.state.addCount)t.setPageDirection({dir:"slide-left",to:e,from:n}),t.addRouteChain(n),t.addRouteChain(e);else if(1===i)t.setPageDirection({dir:"slide-left",to:e,from:n}),t.addRouteChain(e);else{t.state.routeChain[i-2].path===e.path&&!0!==e.meta.slideLeft?(t.popRouteChain(),t.setPageDirection({dir:"slide-right",to:e,from:n})):(t.addRouteChain(e),t.setPageDirection({dir:"slide-left",to:e,from:n}))}a()})}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-route-transition"},[e("transition",{attrs:{name:this.state.pageDirection},on:{leave:this.setRouterMap}},[!0===this.keepAlive&&!1!==this.$route.meta.keepAlive?e("keep-alive",[e("router-view")],1):e("router-view")],1)],1)},staticRenderFns:[]};var v=n("VU/8")(d,f,!1,function(t){n("QDFS")},null,null).exports,m={name:"router-layout",props:{id:String},data:function(){return{cId:this.id||this.$route.path.replace(/\//g,"_")||"_null_"}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-route-transition-wrapper"},[this._t("header"),this._v(" "),e("div",{staticClass:"vue-route-transition-content",attrs:{id:this.cId}},[this._t("default")],2),this._v(" "),this._t("footer")],2)},staticRenderFns:[]};var g=n("VU/8")(m,C,!1,function(t){n("IvNo")},null,null).exports,_=function(t){t.component(v.name,v),t.component(g.name,g)};"undefined"!=typeof window&&window.Vue&&_(window.Vue);var b={install:_},w=n("Fd2+");n("4ml/");a.a.config.productionTip=!1,a.a.use(b),a.a.use(w.a),new a.a({el:"#app",router:c,components:{App:o},template:"<App/>"})},QDFS:function(t,e){},Ug2t:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bffec86c54f192472363.js.map