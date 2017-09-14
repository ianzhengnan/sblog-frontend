<template>
	
<div>
<table>
	<tr>
		<td>{{ pagemodel.totalRecords }}条</td>
		<td>共{{ pagemodel.totalPage }}页</td>
		<td>当前是第{{ pagemodel.currentPage }}页</td>
		<td><a href="javascript:void(0);" @click="goToFirst">首页</a></td>
		<td><a href="javascript:void(0);" @click="goToPre">上一页</a></td>
		<td><a href="javascript:void(0);" @click="goToNext">下一页</a></td>
		<td><a href="javascript:void(0);" @click="goToLast">尾页</a></td>
	</tr>
</table>
</div>

</template>

<script type="text/javascript">
	
export default {

	// data (){
	// 	return {

	// 	}
	// },

	computed: {
		pagemodel (){
			return this.$parent.pagemodel
		}
	},

	methods: {
		goToFirst(){
			this.$parent.pagemodel.currentPage = 1
			this.$parent.fetchData()
		},
		goToLast(){
			this.$parent.pagemodel.currentPage = this.pagemodel.totalPage
			this.$parent.fetchData()
		},
		goToPre(){
			this.$parent.pagemodel.currentPage = this.$parent.pagemodel.currentPage - 1 <= 0 ? 1 : this.$parent.pagemodel.currentPage - 1
			this.$parent.fetchData()
		},
		goToNext(){
			this.$parent.pagemodel.currentPage = this.$parent.pagemodel.currentPage + 1 > this.pagemodel.totalPage ? this.pagemodel.totalPage : this.$parent.pagemodel.currentPage + 1
			this.$parent.fetchData()
		}
	}
}

</script>