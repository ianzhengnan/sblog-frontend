<template>
	<form id="signup" class="form-signin" v-on:submit.prevent="onSubmit">
		<h2 class="form-signin-heading">Please sign up</h2>
		<label for="username" class="sr-only">User name</label>
		<input id="username" type="text" class="form-control" v-model="username" placeholder="Please input your user name" required autofocus>
		<label for="inputEmail" class="sr-only">Email address</label>
    <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="Please input email...." required>
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" id="inputPassword" class="form-control" v-model="password" placeholder="Password" required>
		<label for="repeatPassword" class="sr-only">Repeat Password</label>
    <input type="password" id="repeatPassword" class="form-control" v-model="passwordRepeat" placeholder="Please input password again" required>

    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
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
