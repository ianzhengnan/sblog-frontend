<template>
	<div id="articles">
		<div class="loading" v-if="loading">
			Loading...
		</div>
		<div class="error" v-if="error">
			{{ error }}
		</div>
		<div class="article" v-if="articles">
			<ul>
				<li v-for="art in articles">
					<a href="javascript:void(0);" @click="toDetail(art.id)">{{ art.subject }}</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	
export default {

	data () {
		return {
			loading: false,
			articles: null,
			error: null
		}
	},

	created () {
		// 组件创建完后获取数据，
    	// 此时 data 已经被 observed 了
    	this.fetchData()
	},

	methods: {
		fetchData () {
			this.error = null
			this.articles = null
			this.loading = true

			//ajax
			var that = this
			$.ajax({
				url: 'http://www.sblog.com:8090/' + that.$store.state.username + '/article',
				method: 'GET',
				xhrFields: {
            		withCredentials: true
            	},
            	success: function(result){
            		that.loading = false
            		that.articles = result
            	},
            	error: function(err){
            		that.loading = false
            		that.error = err.toString()
            	}

			})
		},
		toDetail (id){
			this.$root.$router.push({name: 'article', params: { userId: this.$store.state.username, articleId: id}})
		}
	}

}

</script>