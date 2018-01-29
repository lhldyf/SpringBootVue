import * as types from '../mutation-types'
import {
  queryUserList,
  createUser,
  modifyUser
} from "../../service/getData";
import {showSuccessMsg, showSuccessMessage, showFailMsg} from "../../config/show";
import {USER} from '@/config/consts'

// 组件间传递变量定义
const state = {
  queryForm: {},
  listResult: {},
  visibleDialog: '',
  modifyData: {
    sex: {

    }
  }
}

// getter方法
const getters = {
  listData: state => state.listResult.users,
  currentPage: state => {
    if(null != state.listResult.page) {
      return state.listResult.page.currentPage;
    } else {
      return 0;
    }
  },
  pageSize: state => {
    if(null != state.listResult.page) {
      return state.listResult.page.currentPage;
    } else {
      return 0;
    }
  },
  pageCount: state => {
    if(null != state.listResult.page) {
      return state.listResult.page.count;
    } else {
      return 0;
    }
  }
}


// 异步操作只能通过actions
const actions = {
  queryList ({commit}, queryForm) {
    commit('setQueryForm', queryForm);
    // 第一个参数为请求参数，第二个参数为callback
    queryUserList(state.queryForm, result => {
      commit('setListResult', result);
    })
  },
  handleSizeChange({dispatch},pageSize) {
    // actions之间的调用使用dispatch('actionName')
    dispatch('queryList', {pageSize});
  },
  handleCurrentChange({dispatch}, currentPage) {
    dispatch('queryList', {currentPage});
  },
  create({dispatch, commit}, createForm) {
    createUser(createForm, result => {
      if(result.success) {
        commit('invisibleDialog');
        showSuccessMsg('用户创建成功');
      } else {
        showFailMsg('用户创建失败')
      }
      dispatch('queryList');
    })
  },
  modifyUser({dispatch, commit}, modifyForm) {
    modifyUser(modifyForm, result => {
      if(result.success) {
        commit('invisibleDialog');
        showSuccessMsg('用户修改成功');
      } else {
        showFailMsg('用户创建失败')
      }
      dispatch('queryList');
    })
  },
}

// 理解为setter方法
const mutations = {
  setListResult(state, result) {
    state.listResult = result;
  },
  setQueryForm(state, queryForm) {
    state.queryForm = {...state.queryForm, ...queryForm};
  },
  setVisibleDialog(state, dialogName) {
    state.visibleDialog = dialogName;
  },
  setModifyData(state, modifyData) {
    state.modifyData = modifyData;
  },
  invisibleDialog(state) {
    state.visibleDialog = USER.DIALOG.NONE;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
