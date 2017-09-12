<template>
	<form id="signup" v-on:submit.prevent="onSubmit">
		用户名：&nbsp;&nbsp;<input type="text" name="username" v-model="username"><br>
		密码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" name="password" v-model="password"><br>
		重输密码：<input type="password" name="password-repeat" v-model="passwordRepeat"><br>
		邮箱地址：<input type="text" name="email" v-model="email">
		<button>Sign up</button>
	</form>
</template>


<script type="text/javascript">
	
export default {
	data: function(){
		return {
			username: '',
			password: '',
			passwordRepeat: '',
			email: ''
		}
	},

	methods: {
		onSubmit: function(){
			if (this.username === '' ){
                alert('Please enter user name.');
                return false;
            }

            if (this.password === '' ){
                alert('Please enter password.');
                return false;
            }
            if (this.passwordRepeat === ''){
            	alert('Please enter password again.')
            	return false;
            }
            if (this.password !== this.passwordRepeat){
            	alert('Two password are not consistency.')
            	return false;
            }
            if (this.email === '' ){
                alert('Please enter email.');
                return false;
            }
            

            $.ajax({
            	url: 'http://www.sblog.com:8090/account/signup',
            	data: {
                    username: this.username,
                    password: this.password,
                    email: this.email
                },
            	method: 'POST',
            	cache: false,
            	xhrFields: {
            		withCredentials: true
            	},
            	success: function(){
            		window.location.href = '/signin';
            	},
            	error: function(result){
            		console.error(result);
            	}
            });


		}
	}
}

</script>