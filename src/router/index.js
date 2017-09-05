import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import SigninPage from '@/pages/SigninPage'
import signupPage from '@/pages/SignupPage'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage
		},
		{
			path: '/signin',
			name: 'signin',
			component: SigninPage
		},
		{
			path: '/signup',
			name: 'signup',
			component: SignupPage
		}
	]
})