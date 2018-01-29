<template>
  <div>
    <el-table :data="listData" stripe border>
      <el-table-column prop="userId" label="用户id"></el-table-column>
      <el-table-column prop="userName" label="用户名"></el-table-column>
      <el-table-column prop="realName" label="真实姓名"></el-table-column>
      <el-table-column prop="sex.message" label="性别"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>

      <el-table-column  label="操作">
        <template slot-scope="scope">
          <el-button @click="modify(scope.row)" type="text">修改</el-button>
        </template>
      </el-table-column>

    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pageCount">
    </el-pagination>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import {USER} from '@/config/consts'

  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters('user', [
        'listData',  // vuex.userListData --> this.userListData
        'pageSize',
        'pageCount',
        'currentPage'
      ]),
    },
    methods: {
      ...mapActions('user', [
        'handleSizeChange','handleCurrentChange'
      ]),
      ...mapMutations('user',[
        'setVisibleDialog', 'setModifyData'
      ]),
      modify(rowData) {
        this.setVisibleDialog(USER.DIALOG.MODIFY);
        this.setModifyData(rowData);
      }
    }
  }
</script>

