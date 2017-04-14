<template>
  <div id="b">
    <h1>page b</h1>
    <el-input v-model="page.input" placeholder="请输入内容"></el-input>
  </div>
</template>
<script>
import Vue from 'vue'
import Element from 'element-ui'
import store from 'src/store.js'
Vue.use(Element)

const url = window.location.href
console.log(url);
export default {
  name: 'b',
  data: function (){
    return {
      page: store.state[url] || {
        input : "b"
      }
    }
  },
  watch: {
    page: {
      handler: function (val,oldVal) {
        // store.commit('updatePageState',{url:url,payload:this.page});
      },
      deep: true
    }
  }
}
</script>
