<template>
	
<div>
	<p><span style="font-weight:700;">{{ comment.createBy.username }}</span> | 
	<span style="font-size: xx-small">{{ comment.createAt }}</span></p>
	<p>{{ comment.content }}</p>
</div>

</template>

<script type="text/javascript">
	
export default {
	props: ['comment']

}

</script>