webpackJsonp([11,15],{49:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"index",data:function(){return{activeTitle:"活动主题",hostPerson:"发起人姓名",hostTime:"2016年9月14日",readNum:"1999"}},methods:{routerTo:function(t){this.$router.push("/activeManage/detail/page"+t)}},watch:function(){}}},104:function(t,e,a){e=t.exports=a(5)(),e.push([t.id,".detail .el-tabs__item{padding:0 40px}","",{version:3,sources:["/./src/page/activeManage/detail.vue"],names:[],mappings:"AACA,uBAAuB,cAAe,CACrC",file:"detail.vue",sourcesContent:["\n.detail .el-tabs__item{padding:0 40px;\n}\n"],sourceRoot:"webpack://"}])},118:function(t,e,a){var s=a(104);"string"==typeof s&&(s=[[t.id,s,""]]);a(6)(s,{});s.locals&&(t.exports=s.locals)},124:function(t,e,a){a(118);var s=a(2)(a(49),a(149),null,null);t.exports=s.exports},149:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("h2",{staticStyle:{"margin-top":"0"}},[t._v(t._s(t.activeTitle))]),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[t._v("发起人: "+t._s(t.hostPerson))]),t._v(" "),a("el-col",{attrs:{span:10}},[t._v("发起时间: "+t._s(t.hostTime))]),t._v(" "),a("el-col",{attrs:{span:5}},[t._v("浏览数: "+t._s(t.readNum))])]),t._v(" "),a("hr"),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-tabs",{staticClass:"tab",on:{"tab-click":t.routerTo}},[a("el-tab-pane",{attrs:{label:"活动详情"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"报名管理"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"签到"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"数据统计"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"评价管理"}})])])]),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("router-view")])])},staticRenderFns:[]}}});
//# sourceMappingURL=11.d80a4f4046ec9d50ebb6.js.map