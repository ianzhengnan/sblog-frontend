import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const BACKEND_URL = 'http://www.sblog.com:8090';

export default new Vuex.Store({

	state: {
		username: '',
		backendurl: BACKEND_URL
	},

	mutations: {
		setUsername (state, username){
			state.username = username
		} 
	},

	actions: {
		setUsername({commit}, username){
			commit('setUsername', username)
		}
	}

})

