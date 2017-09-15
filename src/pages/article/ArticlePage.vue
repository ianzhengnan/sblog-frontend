<template>
<div>
	<div class="loading" v-if="loading">
		Loading...
	</div>
	<div class="error" v-if="error">
		{{ error }}
	</div>
	<div class="article" v-if="!loading">
		<h1>{{ article.subject }}</h1>
		<div class="content">{{ article.content }}</div>
	</div>
	<my-comment :article="article" :comments="article.comments" @postcomment="onCommentChanged"></my-comment>
</div>
</template>

<script type="text/javascript">

import CommentsFragment from '../../components/Comments.vue'

export default {

	components: {
		'my-comment': CommentsFragment
	},

	data () {
		return {
			loading: false,
			// article: null,
			// 不能直接使用上面的null赋初始值，因为组件会先于数据进行渲染，渲染子组件的时候数据还没有到。获取数据是异步的。
			article: {
				subject: '',
				content: '',
				comments: [],
				commentCount: 0
			},
			error: null
		}
	},
	// 导航完成后获取数据
	created () {
		this.fetchData()
	},

	// // 在导航完成前获取数据， 这里不能用this
	// beforeRouteEnter(to, from, next){
	// 	// ajax
	// 	$.ajax({
	// 		url: 'http://www.sblog.com:8090/' + to.params.userId + '/article/' + to.params.articleId,
	// 		method: 'GET',
	// 		xhrFields: {
 //        		withCredentials: true
 //        	},
 //        	success: function(result){
 //        		console.log(result);
 //        		next(vm => {
 //        			vm.article = result
 //        		});
 //        	},
 //        	error: function(err){
 //        		next(false);
 //        	}
	// 	})
	// },

	// watch: {
	// 	$route () {
	// 		console.log("breakpoint")
	// 	}
	// },

	methods: {
		fetchData () {

			var that = this

			$.ajax({
				url: this.$store.state.backendurl + '/' + this.$route.params.userId + '/article/' + this.$route.params.articleId,
				method: 'GET',
				xhrFields: {
	        		withCredentials: true
	        	},
	        	success: function(result){
	       			that.article = null
	        		that.article = result
	        	},
	        	error: function(err){
	        		console.error(err);
	        	}
			})
		},
		onCommentChanged () {
			this.fetchData()
		}
	}
}
	
</script>