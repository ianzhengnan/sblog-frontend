<template>
	
<div class="edit-article">
	
<form onsubmit="return false;">
	<div>
		Category:
		<select v-model="art.category.id">
			<option v-for="cat in categories" :value="cat.id">{{ cat.title }}</option>
		</select>
	</div>
	<br>
	<div>
		Subject:
		<input v-model="art.subject" placeholder="Please input subject...">
	</div>
	<br>
	<div>
		Content:
		<textarea id="content" class="test" style="vertical-align:top;" rows="20" cols="120" v-model="art.content" placeholder="Please tell our story here...."></textarea>
	</div>
	<br>
	<div>
		<button id="save" @click="onSaveBtnPressed">Save</button>&nbsp;&nbsp;
		<button id="post" @click="onPostBtnPressed">Post</button>
	</div>
</form>

</div>

</template>

<script type="text/javascript">
	
export default {

	data () {
		return {
			categories: [],
			art: {
				id: null,
				category: {id: ''},
				subject: '',
				content: ''
			},
			isPub: null
		}
	},

	created (){
		this.fetchData()
	},

	methods: {
		fetchData () {

			// ajax
			var that = this;
			var oState = this.$store.state;
			$.ajax({
				url: oState.backendurl + '/category',
				method: 'GET',
				xhrFields: {
            		withCredentials: true
            	},
            	success: function(result){
            		that.categories = result
            	},
            	error: function(err){
            		console.log(err);
            	}

			})

			if (oState.route.name === 'edit-article' && oState.route.params.articleId) {
				// fetch article
				$.ajax({
					url: oState.backendurl + '/' + oState.username + '/article/' + oState.route.params.articleId,
					method: 'GET',
					xhrFields: {
	            		withCredentials: true
	            	},
	            	success: function(result){
	            		that.art.id = result.id;
	            		that.art.category.id = result.category.id;
	            		that.art.subject = result.subject;
	            		that.art.content = result.content;
	            	},
	            	error: function(err){
	            		console.log(err);
	            	}
				})
			}
		},

		onSaveBtnPressed () {
			this.isPub = null
			this.onSubmit()
		},

		onPostBtnPressed () {
			this.isPub = '1'
			this.onSubmit()
		},

		onSubmit () {
			console.log('breakpoint');

			// validation
			if (!this.art.category.id) {
				alert('Please select category')
				return false;
			}

			if (this.art.subject === ''){
				alert('Please input subject')
				return false;
			}

			if (this.art.content === '') {
				alert('Please input content')
				return false;
			}

			// ajax
			var that = this;
			$.ajax({
				url: this.$store.state.backendurl + '/postedit',
				method: 'POST',
				data: {
					"category.id": this.art.category.id,
					subject: this.art.subject,
					content: this.art.content,
					id: this.art.id,
					isPub: this.isPub
				},
				dataType: 'json',
				xhrFields: {
            		withCredentials: true
            	},
            	success: function(result){
            		if(!that.isPub){
            			that.art.id = result.key.id;
            			return;
            		}
            		that.$root.$router.push({name: 'article', params: {userId: that.$store.state.username,
            			articleId: result.key.id}});
            	},
            	error: function(result){
            		console.error(result);
            	}
			})
		}
	}
}

</script>