<template>
	<div id="articles">
		<ul>
			<li v-for="art in articles">{{ art.subject }}</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	
export default {

	data: function () {
		return {
			articles: []
		}
	},
	
	methods: {

	}

}

</script>