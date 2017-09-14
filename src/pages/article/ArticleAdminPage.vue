<template>
	
<div style="margin: 20px 0">

	<div class="loading" v-if="loading">
		loading...
	</div>
	<div class="main" v-if="!loading">
		<table width="800">
			<tr>
				<th width="70%">主题</th>
				<th colspan="3" width="30%">操作</th>
			</tr>
			<tr v-for="art in articles">
				<td>{{art.top === '1' ? '[置顶]' + art.subject : art.subject }}</td>
				<td>
					<!-- don't use this.username, just 'username' is fine -->
					<router-link 
						:to="{ name: 'edit-article', params:{ userId: username, articleId: art.id}}">
					编辑	
				</router-link></td>
				<td><a href="javascript:void(0);" @click="pressTopBtn(art.id, art.top)">{{ art.top === '1' ? '取消置顶':'置顶'}}</a></td>
				<td><a href="javascript:void(0);" @click="pressDelBtn(art.id)">删除</a></td>
			</tr>
		</table>
		<simple-pageing></simple-pageing>
	</div>
</div>

</template>

<script type="text/javascript">

import SimplePaging from '../../components/SimplePagination.vue'

export default {

	components: {
		'simple-pageing': SimplePaging
	},

	data () {
		return {
			articles: [],
			loading: false,
			pagemodel: null
		}
	},

	created (){
		this.fetchData()
		this.getPageModel()
	},

	computed: {
		username () {
			return this.$store.state.username
		}
	},

	methods: {
		fetchData (fn) {
			this.loading = true

			// ajax
			var that = this
			$.ajax({
				url: this.$store.state.backendurl + '/postlist',
				method: 'GET',
				xhrFields: {
					withCredentials: true
				},
				data: {
					page: this.pagemodel ? this.pagemodel.currentPage : 1
				},
				success: function (result) {
					that.articles = result;
					that.loading = false;
					if(fn) fn()
				},
				error: function (err) {
					console.error(err);
				}
			})

			
		},

		getPageModel () {
			// get page model
			var that = this
			$.ajax({
				url: this.$store.state.backendurl + '/getPageModel',
				method: 'GET',
				xhrFields: {
					withCredentials: true
				},
				success: function (result) {
					that.pagemodel = result;
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
			// ajax
			var that = this
			$.ajax({
				url: this.$store.state.backendurl + '/del',
				method: 'GET',
				data: {
					id: id
				},
				xhrFields: {
					withCredentials: true
				},
				success: function (result) {
					that.pagemodel.currentPage = 1;
					that.fetchData(that.getPageModel);
				},
				error: function (err) {
					console.error(err);
				}
			})
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