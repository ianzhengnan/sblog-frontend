<template>
	<div>
		This is Home. <br>    <!-- Only allow one div call root tag exist -->
		<div>
			<router-link :to="{ name:'articles', params:{ userId: this.$store.state.username }}">Articles</router-link>
		</div>
		<div>
			<router-link :to="{ name:'new-article', params:{ userId: this.$store.state.username }}">New</router-link>
		</div>
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
