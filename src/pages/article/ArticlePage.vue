<template>
<div>
	<div class="loading" v-if="loading">
		Loading...
	</div>
	<div class="error" v-if="error">
		{{ error }}
	</div>
	<div class="article" v-if="!loading">
		<h1>{{ subject }}</h1>
		<div class="content">{{ content }}</div>
	</div>	
</div>
</template>

<script type="text/javascript">
	
export default {

	data () {
		return {
			loading: false,
			content: '',
			title: '',
			error: null
		}
	},

	computed: { 
		hasData (){
			return this.subject === "" ? false : true
		}
	},

	created () {
		this.fetchData()
	},

	methods: {
		fetchData (){
			this.loading = true
			this.error = null
			this.subject = this.content = ''
			// ajax
			var that = this
			$.ajax({
				url: 'http://www.sblog.com:8090/' + window.location.pathname,
				method: 'GET',
				xhrFields: {
            		withCredentials: true
            	},
            	success: function(result){
            		that.loading = false
            		that.subject = result.subject.toString()
            		that.content = result.content.toString()
            	},
            	error: function(err){
            		that.loading = false
            		that.error = err.toString()
            	}
			})
		}
	}
}
	
</script>