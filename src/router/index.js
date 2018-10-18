import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import indexPage from '../pages/index'
import DetailPage from '../pages/detail'
import analysisPage from '../pages/detail/analysis'
import countPage from '../pages/detail/count'
import forecastPage from '../pages/detail/forecast'
import publishPage from '../pages/detail/publish'

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
      redirect: '/detail/analysis',
      children:[
        {
		    path: 'analysis',
		    component: analysisPage
		},
		{
			path: 'count',
			component: countPage
		},
		{
			path: 'forecast',
			component: forecastPage
		},
		{
			path: 'publish',
			component: publishPage
		}]	
    }
  ]
})
