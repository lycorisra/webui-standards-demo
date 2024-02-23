import { createRouter,createWebHistory } from 'vue-router'
import {routes} from './routes'

const router = createRouter({
  routes,
  history:createWebHistory()
})

router.onError = error =>{
  console.error('router error', error)
}

export default router

