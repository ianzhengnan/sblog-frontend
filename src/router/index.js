import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SigninPage from '../pages/passport/SigninPage.vue'
import SignupPage from '../pages/passport/SignupPage.vue'
import ArticlesPage from '../pages/article/ArticlesPage.vue'
import ArticlePage from '../pages/article/ArticlePage.vue'
import AddArticle from '../pages/article/AddArticle.vue'
import ArticleAdmin from '../pages/article/ArticleAdminPage.vue'

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
		},
		{
			path: '/:userId/article/new',
			name: 'new-article',
			component: AddArticle
		},
		{
			path: '/:userId/article/:articleId/edit',
			name: 'edit-article',
			component: AddArticle
		},
		{
			path: '/:userId/article/admin',
			name: 'admin-article',
			component: ArticleAdmin
		}

	]
})