<template>
  <div>
    <el-table :data="userListData" stripe border>
      <el-table-column prop="userId" label="用户id"></el-table-column>
      <el-table-column prop="userName" label="用户名"></el-table-column>
      <el-table-column prop="realName" label="真实姓名"></el-table-column>
      <el-table-column prop="sex" :formatter="formatSex" label="性别"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="userCurrentPage" :page-sizes="[10, 20, 50, 100]" :page-size="userPageSize" layout="total, sizes, prev, pager, next, jumper" :total="userPageCount">
    </el-pagination>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data() {
      return {
        age: '18'
      }
    },
    props: ['sex'], // 父组件传值
    computed: {
      ...mapGetters('user', [
        'userListData',  // vuex.userListData --> this.userListData
        'userPageSize',
        'userPageCount',
        'userCurrentPage'
      ]),
    },
    methods: {
      ...mapActions('user', [
        'handleSizeChange','handleCurrentChange'
      ]),
      formatSex(row, column, cellValue) {
        if(cellValue=='male') {
          return '男'
        } else if(cellValue=='female') {
          return '女'
        } else {
          return cellValue;
        }
      }
    }
  }
</script>

