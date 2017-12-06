import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import indexPage from '../pages/index'
import DetailPage from '../pages/detail'
import DetailAnaPage from '../pages/detail/analysis'
import DetailCouPage from '../pages/detail/count'
import DetailForPage from '../pages/detail/forecast'
import DetailPubPage from '../pages/detail/publish'

Vue.use(Router)

export default new Router({
  //去掉地址中的哈希#
  mode:"history",
  routes: [
    {
      path: '/',
      component: indexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/count',
      children:[
        {
		    path: '/analysis',
		    component: DetailAnaPage
		},
		{
			path: '/count',
			component: DetailCouPage
		},
		{
			path: '/forecast',
			component: DetailForPage
		},
		{
			path: '/publish',
			component: DetailPubPage
		}]	
    }
  ]
})
