<template>
	<div class='container'>
		<div class="header">
			<header-bar></header-bar>
		</div>
		<div class="page">
			<router-view></router-view>
		</div>
	</div>
</template>

<script type="text/javascript">
	import HeaderBar from './components/Headerbar.vue'
	export default {
		components: {
			HeaderBar
		},
		name: 'app'
	}

</script>
