<template>
  <div>
    <el-form :inline="true" :model="queryForm" label-width="100px" >

      <el-form-item label="用户id">
        <el-input placeholder="请输入用户id" v-model="queryForm.userId" type="text" :maxlength="11"></el-input>
      </el-form-item>

      <el-form-item label="性别">
        <el-select v-model="queryForm.sex">
          <el-option v-for="item in sexOptions"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value" >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="query">查询</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="setVisibleDialog(CREATE_DIALOG)">新增</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>


<script>

  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  import {USER} from '@/config/consts'

  export default {

    data() {
      return {
        queryForm: {

        },
        sexOptions: [ {value:'', label:'全部'}, ...USER.SEX_OPTIONS],
        CREATE_DIALOG: USER.DIALOG.CREATE
      }
    },
    mounted(){
      this.query(); // 页面加载时触发查询
    },
    methods: {
      ...mapActions('user', [
        'queryList' // 将vuex的queryList方法映射给this
      ]),
      ...mapMutations('user', [
        'setVisibleDialog'
      ]),
      query: function() {
        this.queryList(this.queryForm);
      }
    }
  }
</script>
