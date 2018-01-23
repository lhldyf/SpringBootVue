<template>
  <div>
    <el-form :inline="true" :model="queryForm" label-width="100px" >

      <el-form-item label="用户id" prop="userId">
        <el-input placeholder="请输入用户id" v-model="queryForm.userId" type="text" :maxlength="11"></el-input>
      </el-form-item>

      <el-form-item label="用户名" prop="userName">
        <el-input placeholder="请输入用户名" v-model="queryForm.userName" type="text"></el-input>
      </el-form-item>

      <el-form-item label="性别" prop="sex">
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

    </el-form>
  </div>
</template>


<script>
  import {mapMutations, mapActions} from 'vuex'

  export default {
    data() {
      return {
        queryForm: {
          userId: '',
          userName: ''
        },
        createUserDialogVisible: false,
        sexOptions: [
          {
            value: 'female',
            label: '女'
          },
          {
            value: 'male',
            label: '男'
          }
        ]
      }
    },
    mounted(){
      this.query();
    },
    methods: {
      ...mapActions([
        'getUserList' // 将vuex的getUserList方法提供给this
      ]),

      query: function() {
        this.getUserList(this.queryForm); // 触发查询
      }
    }
  }
</script>
