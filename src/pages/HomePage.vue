<template>
	<div>
		This is Home. <br>    <!-- Only allow one div call root tag exist -->
		<router-link :to="{ name:'articles', params:{ userId: 'jan' }}">Articles</router-link>
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
