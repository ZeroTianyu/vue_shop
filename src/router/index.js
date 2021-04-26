import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    component: Login
  }, {
    path: '/',
    redirect: '/login'
  }, {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径而来
  // 是一个函数,表示放行
  // next() 放行    next('/login) 强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  // 如果token不存在 跳转到login
  if (!tokenStr) return next('/login')
  next()
})

export default router
