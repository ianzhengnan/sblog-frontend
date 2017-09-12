<template>
	<div class="menu-links">
		<router-link to="/">Home</router-link>
		<router-link to="/signin">Signin</router-link>
		<router-link to="/signup">Signup</router-link>
		<a id="signoff" v-if="signoffseen" v-on:click="onClickSignOff" href="javascript:void(0);">Signoff</a>
	</div>
</template>

<script type="text/javascript">
	
export default {

	data: function(){
		return {
			signoffseen: true
		};
	},

	methods: {
		onClickSignOff: function() {
			$.ajax({
				url: 'http://www.sblog.com:8090/account/logout',
				method: 'GET',
				xhrFields: {
            		withCredentials: true
            	},
            	success: function(){
            		window.location.href = '/signin';
            	},
            	error: function(result){
            		console.error(result);
            	}
			});
		}

	}

}

</script>

