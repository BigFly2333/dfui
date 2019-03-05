import Router from 'vue-router'
import Vue from 'vue'

const Home = () => import('views/home/index')

const ExamplesLayout = () => import('views/examples/layout')
const ExamplesIndex = () => import('views/examples/index/index')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/examples',
      component: ExamplesLayout,
      children: [
        {
          path: '',
          name: 'examples/index',
          component: ExamplesIndex
        }
      ]
    }
  ]
})

export default router