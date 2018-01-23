import * as types from '../mutation-types'
import {queryUserList, createUser} from "../../service/getData";
import {showSuccessMsg, showSuccessMessage, showFailMsg} from "../../config/show";


// 组件间传递变量定义
const state = {
  userQueryForm: {},
  userListResult: {},
  createUserDialogVisible: false
}

// getter方法
const getters = {
  userListData: state => state.userListResult.users,
  userCurrentPage: state => {
    if(null != state.userListResult.page) {
      return state.userListResult.page.currentPage;
    } else {
      return 0;
    }
  },
  userPageSize: state => {
    if(null != state.userListResult.page) {
      return state.userListResult.page.pageSize;
    } else {
      return 0;
    }
  },
  userPageCount: state => {
    if(null != state.userListResult.page) {
      return state.userListResult.page.count;
    } else {
      return 0;
    }
  },
  createUserDialogVisible: state => state.createUserDialogVisible
}


// 异步操作只能通过actions
const actions = {
  getUserList ({commit}, queryForm) {
    commit(types.USER_LIST_QUERY_FORM, queryForm);

    // 第一个参数为请求参数，第二个参数为callback
    queryUserList(state.userQueryForm, userListResult => {
      console.debug(JSON.stringify(userListResult));
      commit(types.USER_LIST, userListResult);
    })
  },
  handleSizeChange({dispatch},pageSize) {
    console.debug("pageSize:"+pageSize);
    // actions之间的调用使用dispatch('actionName')
    dispatch('getUserList', {pageSize});
  },
  handleCurrentChange({dispatch}, currentPage) {
    console.debug("currentPage:"+currentPage);
    dispatch('getUserList', {currentPage});
  },
  createUser({dispatch}, createUserForm) {
    createUser(createUserForm, result => {
      console.debug(JSON.stringify(result));
      if(result.success) {
        showSuccessMessage(this, '用户创建成功');
      } else {
        let msg = '用户创建失败';
        showSuccessMsg(msg);
      }
      dispatch('getUserList');
    })
  }
}

// 理解为setter方法
const mutations = {
  [types.USER_LIST](state, userListResult) {
    state.userListResult = userListResult;
  },
  [types.USER_LIST_QUERY_FORM](state, queryForm) {
    state.userQueryForm = {...state.userQueryForm, ...queryForm};
    console.debug("after commit(types.USER_LIST_QUERY_FORM) result:"+JSON.stringify(state.userQueryForm));
  },
  [types.ADD_USER_DIALOG](state, visible) {
    state.createUserDialogVisible = visible;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
