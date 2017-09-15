<template>
	
<div>
	<p>评论({{ article.commentCount }})</p>
	<textarea id="comment_content" rows="8" cols="50" v-model="content"></textarea>
	<br>
	<button @click="onSubmitComment">提交</button>

	<!-- comments -->
	<div id="comments" v-for="com in comments">
		<comment-item :comment="com"></comment-item>
	</div>

</div>

</template>

<script type="text/javascript">

import CommentItem from './CommentItem.vue'

export default {

	components: {
		'comment-item': CommentItem
	},
	// 尽量直接使用prop里的变量，如：this.article, this.comments.不要通过data再赋值给本地变量了，因为这样会导致数据不同步问题。
	props: ['article', 'comments'],

	data () {
		return {
			content: ''
		}
	},

	created (){
		console.log(this.article)
	},

	methods: {
		onSubmitComment () {
			// ajax
			var that = this
			$.ajax({
				url: this.$store.state.backendurl + '/' + this.$store.state.username +'/article/' + this.article.id + '/comments',
				method: 'POST',
				data: {
					content: this.content
				},
				xhrFields: {
            		withCredentials: true
            	},
            	success: function(result){
            		that.content = ''
            		that.$emit("postcomment")
            	},
            	error: function(err){
            		
            	}
			})
		}
	}

}

</script>