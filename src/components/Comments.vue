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