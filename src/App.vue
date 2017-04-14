<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="header" :class="{ 'header-fixed' : headerFixed }">
    </header>

    <main>
      <div class="main-wrap">
        <!-- 左侧导航 -->
        <div class="main-left">
          <el-menu theme="dark" :default-active="currTab" class="el-menu-vertical-demo" :router="false" @select="selectMenu">
            <el-menu-item v-for="item in menu" :index="item.name" >
              <i class="el-icon-message"></i>{{item.name}}
            </el-menu-item>
          </el-menu>
        </div>

        <!-- 右侧主内容区 -->
        <div  class="main-right" >
          <transition>
            <el-tabs v-model="currTab" type="card" @tab-click="selectTab" @edit="editTab" style="width:100%">
              <el-tab-pane label="首页" name="home" :closeable="false">
                <portal/>
              </el-tab-pane>
              <el-tab-pane v-for="(item, index) in tabs" :label="item.tabName" :name="item.name" :closable="true" >
                <router-view class="view" :name="item.name"></router-view>
              </el-tab-pane>
            </el-tabs>
          </transition>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import portal from './page/portal/index.vue'
import {getMenu} from 'src/service/getData'
import 'element-ui/lib/theme-default/index.css'

import $ from 'jquery'
import _ from 'lodash'

Vue.use(Element)

export default {
  name: 'app',
  data (){
    return {
      currTab: 'home',
      tabs: [],
      tabIndex: 2,
      menu : [],
      active:true,
      headerFixed : true
    }
  },
  created: function(){
    this.initMenu();
  },
  methods: {
    refreshView: function () {
      // setTimeout(()=>$(window).trigger('resize'),100)
    },
    initMenu : async function () {
       let res = await getMenu();
       this.menu = res.default.data;
    },
    selectMenu : function(tabIdx){
      var app = this;
      app.currTab = tabIdx;//设置当前tab标号
      let curr = this.menu.find((o)=>{
        return o.name == tabIdx;
      })
      if (!!!_.find(app.tabs, { 'name': tabIdx })) {//不存在打开菜单
        app.addTab(curr)
      }else{
        this.refreshView();
      }
    },
    selectTab : function (tab) {
      var app = this;
      app.currTab = tab.name;
      this.refreshView();
    },
    addTab : function(tab){
      var app = this;
      app.tabs.push(tab);
    },
    editTab : function (targetName,action) {
      if (action === 'remove'){
        let tabs = this.tabs;
        let activeName = this.currTab;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.currTab = activeName;
        this.tabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  },
  components: {
    'portal' : portal
  },
}
</script>

<style>
@import './assets/css/main.css';
</style>
