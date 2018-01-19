import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const user = r => require.ensure([], () => r(require('../page/user/user')), 'user')

export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue
    //地址为空时跳转home页面
    {
      path: '',
      redirect: '/home'
    },
    //首页
    {
      path: '/home',
      component: home
    },
    //用户信息页
    {
      path: '/user',
      component: user
    },

  ]
}]
