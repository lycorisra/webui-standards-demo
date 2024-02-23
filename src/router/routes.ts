import { RouteRecordRaw } from 'vue-router'

// 定义路由的名称字典信息
export const routeName: Record<string, string> = {
  home: 'home',
  color: 'color',
  font: 'font',
  layout: 'layout',
  notFound: 'notFound'
}
// 定义路由列表
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: routeName.home,
    redirect: routeName.home,
    children: [],
    meta: {
      title: '首页',
      icon:'',
      visible:false,
    },
    component: () => import('../views/home.vue')
  },
  {
    path: '/home',
    meta: {
      title: '首页2',
      icon:'',
      visible:true,
    },
    name: routeName.home,
    component: () => import('../views/home.vue')
  },
  {
    name: routeName.color,
    path: '/color',
    meta: {
      title: '颜色',
      icon:'',
      visible:true,
    },
    component: () => import('../views/color.vue')
  },
  {
    name: routeName.font,
    path: '/font',
    meta: {
      title: '字体',
      icon:'',
      visible:true,
    },
    component: () => import('../views/font.vue')
  },
  {
    name: routeName.layout,
    path: '/layout',
    meta: {
      title: '布局',
      icon:'',
      visible:true,
    },
    component: () => import('../views/layout.vue')
  },
  {
    name: routeName.notFound,
    path: '/:pathMatch(.*)*',
    meta: {
      visible:false,
    },
    component: () => import('../views/404.vue')
  }
]
