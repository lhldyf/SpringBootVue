<template>
  <div>
    <el-dialog title="创建用户" :visible.sync="visible" label-width="100px" :before-close="invisibleDialog">
      <el-form :model="modifyForm">
        <el-form-item label="用户ID">
          <el-input v-model="modifyForm.userId" disabled="disabled"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="modifyForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="modifyForm.realName"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="modifyForm.sex">
            <el-option v-for="item in sexOptions"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value" >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="modifyForm.age"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="invisibleDialog">取消</el-button>
        <el-button type="primary" @click="modifyUser(modifyForm)">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>

  import {mapState, mapMutations, mapActions} from 'vuex'
  import {USER} from '@/config/consts'

  export default{
    data() {
      return {
        sexOptions: USER.SEX_OPTIONS
      }
    },
    computed: {
      ...mapState('user', {
        visible: state => state.visibleDialog === USER.DIALOG.MODIFY,
        modifyForm: state => {
          return {...state.modifyData, ...{sex: state.modifyData.sex.code}} // copy
        }
      })
    },
    methods: {
      ...mapMutations('user', ['invisibleDialog']),
      ...mapActions('user', ['modifyUser']),
    }
  }
</script>
