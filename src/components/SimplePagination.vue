<template>
	
<div>
<table>
	<tr>
		<td>{{ pm.totalRecords }}条</td>
		<td>共{{ pm.totalPage }}页</td>
		<td>当前是第{{ pm.currentPage }}页</td>
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

	// 声明属性为了使用父组件的数据,不应该在子组件中修改这个值，这个值只是读取用
	props: {
		pagemodel: {
			type: Object,
			default: null			
		}
	},

	data () {
		return{
			pm: this.pagemodel
		}
	},

	// 或者可以这样替代data里的声明
	// computed: {
	// 	pm (){
	// 		return this.pagemodel
	// 	}
	// },

	// 子组件不直接更新父组件，而是通过事件的方式通知父组件，让父组件自己更改数据
	methods: {
		goToFirst(){
			this.pm.currentPage = 1
			// 发送事件
			this.sendEvent()
			// 不要直接像下面这样修改父组件的数据, 容易造成数据不一致
			// this.$parent.pagemodel.currentPage = 1
			// this.$parent.fetchData()
		},
		goToLast(){
			this.pm.currentPage = this.pm.totalPage
			this.sendEvent()
		},
		goToPre(){
			this.pm.currentPage = this.pm.currentPage - 1 <= 0 ? 1 : this.pm.currentPage - 1
			this.sendEvent()
		},
		goToNext(){
			this.pm.currentPage = this.pm.currentPage + 1 > this.pm.totalPage ? this.pm.totalPage : this.pm.currentPage + 1
			this.sendEvent()
		},
		sendEvent(){
			this.$emit('changepage', this.pm.currentPage)
		}
	}
}

</script>