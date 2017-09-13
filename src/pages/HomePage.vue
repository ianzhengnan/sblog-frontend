<template>
	<div>
		This is Home. <br>    <!-- Only allow one div call root tag exist -->
		<router-link :to="{ name:'articles', params:{ userId: this.$store.state.username }}">Articles</router-link>
	</div>
		
</template>

<script type="text/javascript">

export default {

	// data: function () {
	// 	return {

	// 	};
	// }

}

</script>
