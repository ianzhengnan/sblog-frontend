<template>
	
<div>
	<p><span style="font-weight:700;">{{ comment.createBy.username }}</span> | 
	<span style="font-size: xx-small">{{ createAt }}</span></p>
	<p>{{ comment.content }}</p>
</div>

</template>

<script type="text/javascript">
	
export default {
	props: ['comment'],

	computed: {
		createAt () {
			var date = new Date(parseInt(this.comment.createAt)).toLocaleString().replace(/:\d{1,2}$/,' ')
			return date
		}
	}

}

</script>