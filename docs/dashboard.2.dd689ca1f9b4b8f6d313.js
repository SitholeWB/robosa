(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{134:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(12),i=n(14),o=n(62),l=n(61),s=n(5),u={metaInfo:{title:"Dashboard"},components:{VueBreadcrumb:n(138).a,VueGrid:a.a,VueGridItem:r.a,VueButton:i.a,VueGridRow:o.a,VueHeadline:l.a},data:function(){return{pending:!1}},methods:{onClick:function(){var e=this,t=[];this.pending=!0;for(var n=0;n<1;n++)t.push(s.a.get("/protected"));Promise.all(t).then((function(){e.pending=!1})).catch((function(t){console.log(t),e.pending=!1}))}},computed:{}},c=n(164),d=n(0);var v=Object(d.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.dashboard},[n("vue-grid",[n("vue-breadcrumb",{attrs:{items:[{label:"Home",href:"/"},{label:"VueX Example"}]}}),e._v(" "),n("vue-grid-row",[n("vue-grid-item",{attrs:{fill:""}},[n("vue-headline",{attrs:{level:"1"}},[e._v("Dashboard")]),e._v("\n        This demo demonstrates the authentication and re-authentication flow.\n        "),n("br"),e._v(" "),n("strong",[e._v("Make sure to open the console to see the whole flow.")]),e._v(" "),n("br"),e._v(" "),n("br")],1),e._v(" "),n("vue-grid-item",[e._v("\n        Press this    "),n("vue-button",{attrs:{outlined:""},on:{click:e.onClick}},[e._v("button")]),e._v("\n        and the following will happen:\n\n        "),n("br"),e._v(" "),n("br"),e._v(" "),n("ul",[n("li",[e._v("We will try to fetch data 10 times from our example endpoint "),n("code",[e._v("/protected")])]),e._v(" "),n("li",[e._v("\n            The endpoint will return error-code 401 for not authenticated (which is the same as sending an expired\n            accessToken)\n          ")]),e._v(" "),n("li",[e._v("\n            The HttpService will handle the error and try to refresh the accessToken.\n            "),n("ul",[n("li",[e._v("if an error occurs (random) during the refresh you will be logged out")]),e._v(" "),n("li",[e._v("\n                if the refresh works your accessToken will change the value to "),n("code",[e._v("accessToken2")]),e._v(" and the\n                request will be repeated.\n              ")])])])])],1)],1)],1)],1)}),[],!1,(function(e){this.$style=c.default.locals||c.default}),null,null);t.default=v.exports},135:function(e,t,n){var a=n(137);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(2).default)("6aac83ac",a,!0,{})},136:function(e,t,n){"use strict";var a=n(135),r=n.n(a);t.default=r.a},137:function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,'@charset "UTF-8";.nGBtvbw-5xFvF0jNSal2g{padding:3.2rem 0 0;margin:0 0 3.2rem;list-style:none}._18bVM1Ww4XuSvWYCifaGt8{display:inline-block;padding:.8rem 0}._18bVM1Ww4XuSvWYCifaGt8:before{padding:.8rem;content:"›"}._18bVM1Ww4XuSvWYCifaGt8:first-child:before{padding:0;content:""}._18bVM1Ww4XuSvWYCifaGt8 a{text-decoration:none}._18bVM1Ww4XuSvWYCifaGt8 a,._18bVM1Ww4XuSvWYCifaGt8 a:hover{color:#063cbe}',""]),t.locals={vueBreadcrumb:"nGBtvbw-5xFvF0jNSal2g",item:"_18bVM1Ww4XuSvWYCifaGt8"}},138:function(e,t,n){"use strict";var a={name:"VueBreadcrumb",props:{items:{type:Array,required:!0}}},r=n(136),i=n(0);var o=Object(i.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{class:e.$style.vueBreadcrumb},e._l(e.items,(function(t,a){return n("li",{key:a,class:e.$style.item},[a<e.items.length-1?n("router-link",{attrs:{to:t.href}},[e._v(e._s(t.label))]):n("span",[e._v(e._s(t.label))])],1)})),0)}),[],!1,(function(e){this.$style=r.default.locals||r.default}),null,null);t.a=o.exports},147:function(e,t,n){var a=n(165);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(2).default)("8b4ba5cc",a,!0,{})},164:function(e,t,n){"use strict";var a=n(147),r=n.n(a);t.default=r.a},165:function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,".Biiazv-p2wVB592qZL4IW{margin-top:5.2rem;min-height:500px}",""]),t.locals={dashboard:"Biiazv-p2wVB592qZL4IW"}}}]);