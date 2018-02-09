<template>
  <div>
    <el-dialog title="创建用户" :visible.sync="visible" label-width="100px" :before-close="invisibleDialog">
      <el-form :model="createForm" :rules="rules" ref="createForm">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="createForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="realName">
          <el-input v-model="createForm.realName"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="createForm.sex">
            <el-option v-for="item in sexOptions"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value" >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="createForm.age"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="invisibleDialog">取消</el-button>
        <el-button type="primary" @click="submitCreateUser()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>


  import {mapGetters, mapMutations, mapActions, mapState} from 'vuex'
  import {USER} from '@/config/consts'
  import {validBeforeSubmit} from '@/config/show'

  export default{
    data() {
      return {
        createForm: {

        },
        sexOptions: USER.SEX_OPTIONS,
        rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '用户名长度为 3 到 10 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      ...mapState('user', {
        visible: state => state.visibleDialog === USER.DIALOG.CREATE
      }),
    },
    methods: {
      ...mapMutations('user', ['invisibleDialog']),
      ...mapActions('user', ['createUser']),
      submitCreateUser() {
        validBeforeSubmit(this, 'createForm', () => {
          this.createUser(this.createForm);
        });
        /*this.$refs['createForm'].validate((valid) => {
          if(valid) {
            this.createUser(formName);
          } else {
            console.debug("form valid error");
            return false;
          }
        });*/
      },
    }
  }
</script>
