import Vue from 'vue'
import router from './router'
import App from './App.vue'

var app = new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})