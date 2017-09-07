<template>
	<form id="signin" v-on:submit.prevent="onSubmit">
	    用户名: <input id="username" name="username" v-model="username"><br>
	    密码: <input id="password" type="password" name="password" v-model="password"><br>
	    <button>Sign in</button>
	</form>
</template>

<script type="text/javascript">
	

export default {

	data () {
		return {
			username: '',
			password: ''
		}
	},

    methods: {
        onSubmit: function () {

            if (this.username === '' ){
                alert('Please enter user name.');
                return false;
            }

            if (this.password === '' ){
                alert('Please enter password.');
                return false;
            }

            $.ajax({
                url: "http://www.sblog.com:8090/account/login",
                data: {
                    username: this.username,
                    password: this.password
                },
                method: 'POST',
                cache: false,
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function () {
                    // window.location.href = '/';
                },
                error: function (result) {
                    alert(result);
                }
            });
        }
    }
}


</script>


