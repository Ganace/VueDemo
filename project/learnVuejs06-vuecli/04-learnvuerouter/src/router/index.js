// 配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../components/Home.vue'
import User from '../components/User.vue'
const About = () => import('../components/About.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessages = () => import('../components/HomeMessages.vue')
const Profile = () => import('../components/Profile.vue')

// 1.通过Vue.use（插件），安装插件
Vue.use(Router)

// 2.new创建Router对象 
const router =  new Router({
  // 配置路由和组件的映射关系
  routes: [
    {
      path: '',
      //redirect重定向
      redirect: '/home',
      meta: {
        title: '首页'
      }
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '',
          component: HomeNews,
          meta: {
            title: '新闻'
          }
        },
        {
          path: 'news',
          component: HomeNews,
          meta: {
            title: '新闻'
          }
        },
        {
          path: 'messages',
          component: HomeMessages,
          meta: {
            title: '消息'
          }
        }
      ]
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      },
      beforeEnter: (to, from, next) => {
        console.log('beforeEnter about');
      }
    },
    {
      path: '/user/:userId',
      component: User,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: '档案'
      }
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})

// 全局守卫
// 前置钩子（hook）
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  console.log('beforeEach')
  next()
})
// 后置钩子
router.afterEach( (to,from) => {
  console.log('afterEach')
})

// 3.export default将router对象传入到Vue实例
export default router
