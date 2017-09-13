import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import { sync } from 'vuex-router-sync'
import App from './App.vue'

sync(store, router)

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})