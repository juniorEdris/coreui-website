(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{2355:function(t,e,s){"use strict";s(625)},2368:function(t,e,s){"use strict";s.r(e);s(25);var a={fields:[{key:"name",_classes:"text-left"},{key:"default",_classes:"text-center"},{key:"type",_classes:"text-right"}],props:{props:[Array,Object],slots:[Array,Object],events:[Array,Object]},computed:{computedProps:function(){return this.props.map((function(t){return{name:t[0],default:t[1],type:t[2],description:t[3]}}))},computedSlots:function(){return this.slots.map((function(t){return{name:t[0],fallback_content:t[1],description:t[2]}}))},computedEvents:function(){return this.events.map((function(t){return{name:t[0],value:t[1],description:t[2]}}))}}},n=(s(2355),s(0)),l=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("CTabs",{staticClass:"my-3",attrs:{addTabsClasses:"px-4 border border-top-0"}},[t.props?s("CTab",{attrs:{title:"props",active:Boolean(t.props)}},[s("CDataTable",{staticClass:"pt-3",attrs:{items:t.computedProps,fields:t.$options.fields,tableFilter:"",striped:"",addTableClasses:"mb-0"},scopedSlots:t._u([{key:"details",fn:function(e){var a=e.item,n=e.colspan;return[s("ApiDetails",{attrs:{item:a,colspan:n}},[t._t(a.description)],2)]}}],null,!0)})],1):t._e(),t._v(" "),t.slots?s("CTab",{attrs:{title:"slots",active:Boolean(!t.props)}},[s("CDataTable",{staticClass:"pt-3",attrs:{items:t.computedSlots,fields:["name","fallback_content"],tableFilter:"",striped:""},scopedSlots:t._u([{key:"details",fn:function(e){var a=e.item,n=e.colspan;return[s("ApiDetails",{attrs:{item:a,colspan:n}},[t._t(a.description)],2)]}}],null,!0)})],1):t._e(),t._v(" "),t.events?s("CTab",{attrs:{title:"events"}},[s("CDataTable",{staticClass:"pt-3",attrs:{items:t.computedEvents,fields:["name","value"],tableFilter:"",striped:""},scopedSlots:t._u([{key:"details",fn:function(e){var a=e.item,n=e.colspan;return[s("ApiDetails",{attrs:{item:a,colspan:n}},[t._t(a.description)],2)]}}],null,!0)})],1):t._e()],1)}),[],!1,null,null,null);e.default=l.exports},625:function(t,e,s){}}]);