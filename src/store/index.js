import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({

	state: {
		username: ''
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

