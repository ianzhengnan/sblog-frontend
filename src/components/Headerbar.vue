<template>
	<div class="menu-links">
		<router-link to="/">Home</router-link>
		<router-link to="/signin" v-if="!signoffseen">Signin</router-link>
		<router-link to="/signup" v-if="!signoffseen">Signup</router-link>
		<a id="signoff" v-if="signoffseen" v-on:click="onClickSignOff" href="javascript:void(0);">Signoff</a>
	</div>
</template>

<script type="text/javascript">
	
export default {

	computed: {
		signoffseen (){
			return this.$store.state.username !== '' ? true : false
		}
	},

	created (){
		if(this.$store.state.username === "")
			this.$root.$router.push({ name: 'signin' })
	},

	methods: {
		onClickSignOff: function() {
			var that = this;
			$.ajax({
				url: 'http://www.sblog.com:8090/account/logout',
				method: 'GET',
				xhrFields: {
            		withCredentials: true
            	},
            	success: function(){
            		that.$store.dispatch("setUsername", "");
            		that.$root.$router.push({name: 'signin'});
            	},
            	error: function(result){
            		console.error(result);
            	}
			});
		}

	}

}

</script>

