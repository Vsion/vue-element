webpackJsonp([9,15],{51:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{routerTo:function(t){this.$router.push("/activeManage/detail/page1/step"+t)},handleCancel:function(){},handleSave:function(){}},watch:{},created:function(){}}},97:function(t,e,n){e=t.exports=n(5)(),e.push([t.id,".page1 .btn-group{margin:10px 0}.btn-group button{margin-right:10px;padding:10px 25px}","",{version:3,sources:["/./src/page/activeManage/page1.vue"],names:[],mappings:"AACA,kBAAkB,aAAe,CAChC,AACD,kBAAkB,kBAAmB,iBAAmB,CACvD",file:"page1.vue",sourcesContent:["\n.page1 .btn-group{margin: 10px 0;\n}\n.btn-group button{margin-right: 10px;padding: 10px 25px;\n}\n"],sourceRoot:"webpack://"}])},110:function(t,e,n){var a=n(97);"string"==typeof a&&(a=[[t.id,a,""]]);n(6)(a,{});a.locals&&(t.exports=a.locals)},126:function(t,e,n){n(110);var a=n(2)(n(51),n(139),null,null);t.exports=a.exports},139:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page1"},[n("p",{staticStyle:{color:"#999","font-size":"14px"}},[t._v("活动详情的按照内容板块可分别编辑，活动结束后不可编辑。")]),t._v(" "),n("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.routerTo}},[n("el-tab-pane",{attrs:{label:"活动信息"}}),t._v(" "),n("el-tab-pane",{attrs:{label:"报名签到"}}),t._v(" "),n("el-tab-pane",{attrs:{label:"分享设置"}}),t._v(" "),n("el-tab-pane",{attrs:{label:"个性化设置"}})]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("router-view")]),t._v(" "),n("div",{staticClass:"btn-group"},[n("el-button",{nativeOn:{click:function(e){e.preventDefault(),t.handleCancel(e)}}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){e.preventDefault(),t.handleSave(e)}}},[t._v("保存")])])])},staticRenderFns:[]}}});
//# sourceMappingURL=9.db1ce4d5ab14e48ef724.js.map