<template>
	<div class='app'>
		<div class="header">
			<header-bar></header-bar>	
		</div>
		<div class="page">
			<router-view></router-view>
		</div>
	</div>
</template>


<script type="text/javascript">
	import HeadBar from '@/components/HeaderBar'
	export default {
		components: {
			HeaderBar
		},
		name: 'app'
	}

</script>