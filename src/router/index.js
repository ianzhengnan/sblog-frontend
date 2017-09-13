import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SigninPage from '../pages/passport/SigninPage.vue'
import SignupPage from '../pages/passport/SignupPage.vue'
import ArticlesPage from '../pages/article/ArticlesPage.vue'
import ArticlePage from '../pages/article/ArticlePage.vue'

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
		},
		{
			path: '/:userId/article',
			name: 'articles',
			component: ArticlesPage
		},
		{
			path: '/:userId/article/:articleId',
			name: 'article',
			component: ArticlePage
		}

	]
})