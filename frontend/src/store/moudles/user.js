import * as types from '../mutation-types'
import {queryUserList} from "../../service/getData";


// 组件间传递变量定义
const state = {
  userQueryForm: {},
  userListResult: {}
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
