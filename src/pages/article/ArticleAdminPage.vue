<template>
	
<div style="margin: 20px 0">

	<div class="loading" v-if="loading">
		loading...
	</div>
	<div class="main" v-if="!loading">
		<table width="600">
			<tr>
				<th width="70%">Subject</th>
				<th colspan="3" width="30%">Opt</th>
			</tr>
			<tr v-for="art in articles">
				<td>{{art.top === '1' ? '[top]' + art.subject : art.subject }}</td>
				<td>
					<!-- don't use this.username, just 'username' is fine -->
					<router-link 
						:to="{ name: 'edit-article', params:{ userId: username, articleId: art.id}}">
					Edit	
				</router-link></td>
				<td><a href="javascript:void(0);" @click="pressTopBtn(art.id, art.top)">{{ art.top === '1' ? 'Untop':'Top'}}</a></td>
				<td><a href="javascript:void(0);" @click="pressDelBtn(art.id)">Del</a></td>
			</tr>
		</table>
	</div>
</div>

</template>

<script type="text/javascript">
	
export default {

	data () {
		return {
			articles: [],
			loading: false
		}
	},

	created (){
		this.fetchData()
	},

	computed: {
		username () {
			return this.$store.state.username
		}
	},

	methods: {
		fetchData () {
			this.loading = true

			// ajax
			var that = this
			$.ajax({
				url: this.$store.state.backendurl + '/postlist',
				method: 'GET',
				xhrFields: {
					withCredentials: true
				},
				success: function (result) {
					that.articles = result;
					that.loading = false;
				},
				error: function (err) {
					console.error(err);
				}
			})
		},

		pressTopBtn (id, top) {
			var sTop = top === '1' ? 'untop': 'top' ;

			// ajax
			var that = this
			$.ajax({
				url: this.$store.state.backendurl + '/' + sTop,
				method: 'GET',
				data: {
					id: id
				},
				xhrFields: {
					withCredentials: true
				},
				success: function (result) {
					that.fetchData();
				},
				error: function (err) {
					console.error(err);
				}
			})
		},

		pressDelBtn (id) {

		}

	}

}

</script>

<style type="text/css">

table {
	border-collapse: collapse;
}

th, td {
	padding: 5px 10px;
}	

th {
	text-align: left;
	border-bottom: 1px solid #0000CD;
}

</style>