import Vue from 'vue'
import Vuex from 'vuex'
import user from './moudles/user'  // 用户页面的state, mutations, getters, actions
import actions from './action'  // 全局的action
import getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'  // 是否使用严格模式 生产环境不使用，避免性能损失

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    user
  },
  strict: debug
})
