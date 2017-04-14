<template>
  <div class="modalSelect">
    <input @focus="onFocus" @click="toggleDialog" class="ms hhrms-source" v-model="input" placeholder="请输入内容" />
    <el-dialog :modal-append-to-body="modal_append_to_body" title="提示" v-model="dialogVisible" :size="size">
      <div class="top">
        <el-input class="searchInput" v-model="searchInput" placeholder="请输入内容"></el-input>
        <el-button class="searchBtn" @click="onClearClick">清除已选结果</el-button>
      </div>
      <div :class="selectedItems.length > 0? 'panel' : 'panel panelNodata'">
        <el-button @click="onBtnLabelClick(item)" v-for="item in selectedItems" type="info" size="small">{{getBtnLabel(item)}}</el-button>
      </div>
      <div :class="breadItems.length > 0 ? 'bread':'bread breadAfter'">
        <span v-for="item in breadItems" @click="onBreadClick(item)" class="el-breadcrumb__item">
          <span class="el-breadcrumb__item__inner">{{item.label}}</span>
          <span class="el-breadcrumb__separator">/</span>
        </span>
      </div>
      <div class="list">
        <div class="listTitle">
          <table>
            <tbody>
              <tr>
                <td class="titleItem item-type">类别</td>
                <td class="titleItem item-name">名称</td>
                <td class="titleItem item-path">路径</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="listContent">
          <table>
            <tbody>
              <tr v-for="item in showList">
                <td class="item-type">{{item.type}}</td>
                <td class="item-name">{{item.label + ": "}}<el-checkbox :disabled="item.disabled || false" @change="function(e){ onCheckboxChange(e, item) }" :checked="findIsChecked(item._id)"></el-checkbox>
                  <span class="name-label">
                    <el-button v-if="!!item.hasChildNode" type="text"  @click="changeView(item)">{{item.label}}</el-button>
                    <span class="labelStyle" v-else>{{item.label}}</span>
                  </span>
                </td>
                <td class="item-path">{{item.path}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="onCancel">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import './index.less'
import _ from "lodash";
window.msdata = {};
export default {
  props: ['options'],
  data() {
    let data = {
      searchInput: "",
      input: "1",
      dialogVisible: false,
      size: "small",
      panelClass: "panel",
      modal_append_to_body: false,
      breadItems: [],
    }
    let options = _.clone(this.options);
    let disabledItems = options.disabledItems || [];
    let defaultValue = options.defaultValue || {};
    data.list = this.setDetfultList(this.setList(options.list), disabledItems, defaultValue);
    data.showList = this.getDefaultShowList(data.list);
    data.prevList = data.showList;
    data.selectedItems = this.getDefaultSelectedItems(defaultValue);
    msdata = data;
    return data;
  },

  watch: {
    searchInput: {
      handler: function (val,oldVal) {
        // 输入时
        this.getShowList(val);
      },
    },
    // checkBox: {
    //   handler: function (val,oldVal) {
    //     // 输入时
    //     this.findIsChecked(val);
    //   },
    // }
  },
  methods: {
    Item(option){
       //this
    },
    findIsChecked: function(_id){
      return this.selectedItems.indexOf(_id) > -1;
    },
    getDefaultSelectedItems: function(dv){
      let res = [];
      for(var i in dv){
        dv[i].split(",").forEach(function(o, j, objs){
          res.push(i + "_" + o);
        });
      }
      return res;
    },
    onFocus: function(e){
      e.target.blur();
    },
    toggleDialog: function(){
      this.dialogVisible = !this.dialogVisible;
    },
    getDefaultShowList(list) {
      let res = [];
      list.forEach(function(o, i){
        if(!!!o.pid){
          res.push(o);
        }
      });
      return res;
    },
    setList(list){
      list.map(function(o){
        for(var i in o){
          if(!!!o[i] || o[i]+"" == "null"){
            o[i] = "";
          }
        }
        return o;
      });
      return list;
    },
    setDetfultList(list, disabledItems, defaultValue){
      return list.map(function(o, i, objs){
        let path = "\\";
        var pid = o.pid;
        while(!!pid){
          var p = _.filter(objs, {id: pid})[0];
          path ="\\" + p.label + path;
          pid = p.pid;
          p.hasChildNode = true;
        }
        o.path = path;
        var _id = o.type + "_" + o.id;
        o._id = _id;
        // o.checked = false;
        if(disabledItems.indexOf(_id) > -1){
          o.disabled = true;
        }
        // if(!!defaultValue[o.type] && defaultValue[o.type].indexOf(o.id) > -1){
        //   o.checked = true;
        // }
        return o;
      });
    },
    onCancel() {
      this.dialogVisible = false;
    },
    onSubmit() {
      this.dialogVisible = false;
    },
    getShowList(val){
      let res = [];
      this.list.map(function(o, i){
        if(o.label.toLowerCase().indexOf(val.toLowerCase()) > -1){
          res.push(o);
        }
      });
      this.showList = res;
    },
    onCheckboxChange(e, o){
      let _id = o._id;
      if(e.target.checked){
        this.selectedItems.push(_id);
      }else {
        this.selectedItems.splice(this.selectedItems.indexOf(_id), 1);
      }
    },
    changeView(item){
      let i = 0,type = this.options.type;
      type.forEach(function(o, j){
        if(o === item.type){
          i = j+1;
        }
      })
      this.showList = _.filter(this.list, {type: type[i], pid: item.id});
      this.setCurrBreadByItem(item, i-1);
    },
    setCurrBreadByItem(item, i, isNotAppendSelf){
      let breadItems = [],type = this.options.type;
      var pid = item.pid;
      while(pid){
        var p = _.filter(this.list, {id: pid, type: type[i-1]})[0];
        breadItems.unshift(p);
        pid = p.pid;
        i = i-1;
      }
      if(!!!isNotAppendSelf){
        breadItems.push(item);
      }
      this.breadItems = breadItems;
    },
    onBreadClick(item){
      let index = this.options.type.indexOf(item.type);
      if(!!item.pid && index > -1){
        this.showList = _.filter(this.list, {pid: item.pid, type: this.options.type[index]});
      }else{
        this.showList = this.getDefaultShowList(this.list);
      }
      this.setCurrBreadByItem(item, index, true);
    },
    getBtnLabel(_id){
      return _.filter(this.list, {_id: _id})[0].label;
    },
    onBtnLabelClick(_id){
      this.selectedItems.splice(this.selectedItems.indexOf(_id), 1);
    },
    onClearClick(){
      this.selectedItems = [];
    },
  },
  mounted : function () {
    // debugger
  }
}
</script>
