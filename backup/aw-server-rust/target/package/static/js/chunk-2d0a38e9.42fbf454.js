(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a38e9"],{"034d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"form-group"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.vis_method,expression:"vis_method"}],staticClass:"form-control",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.vis_method=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"eventlist"}},[e._v("Event List")]),n("option",{attrs:{value:"timeline"}},[e._v("Timeline")]),n("option",{attrs:{value:"summary"}},[e._v("Summary")]),n("option",{attrs:{value:"raw"}},[e._v("Raw JSON")])])]),"timeline"==e.vis_method?n("div",[n("vis-timeline",{attrs:{buckets:[{type:"search",events:e.events}]}})],1):e._e(),"eventlist"==e.vis_method?n("div",[n("aw-eventlist",{attrs:{events:e.events}})],1):e._e(),"summary"==e.vis_method?n("div",[n("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:e.summaryKey,expression:"summaryKey",modifiers:{lazy:!0,trim:!0}}],staticClass:"form-control",staticStyle:{"margin-bottom":"1em"},attrs:{type:"text",placeholder:"data key"},domProps:{value:e.summaryKey},on:{change:function(t){e.summaryKey=t.target.value.trim()},blur:function(t){return e.$forceUpdate()}}}),n("aw-summary",{attrs:{fields:e.events,colorfunc:e.colorfunc,namefunc:e.namefunc}})],1):e._e(),"raw"==e.vis_method?n("div",[n("pre",[e._v(e._s(e.events))])]):e._e()])},a=[],s=(n("96cf"),n("1da1")),i={name:"aw-selectable-eventview",props:{events:Array,event_type:{type:String,default:"currentwindow"}},data:function(){return{vis_method:"eventlist",summaryKey:"title",colorfunc:null,namefunc:null}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.colorfunc=this.summaryKeyFunc,this.namefunc=this.summaryKeyFunc;case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{summaryKeyFunc:function(e){return e.data[this.summaryKey]}}},u=i,o=n("2877"),m=Object(o["a"])(u,r,a,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0a38e9.42fbf454.js.map