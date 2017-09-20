<template>
	<form id="signin" class="form-signin" v-on:submit.prevent="onSubmit">
		<h2 class="form-signin-heading">Please sign in</h2>
		<label for="inputEmail" class="sr-only">Email address</label>
    <input type="text" id="inputEmail" v-model="username" class="form-control" placeholder="User name" required autofocus>
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" id="inputPassword" class="form-control" v-model="password" placeholder="Password" required>
    <div class="checkbox">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
	</form>
</template>

<script type="text/javascript">


export default {

	data: function () {
		return {
			username: '',
			password: ''
		}
	},

    methods: {
        onSubmit: function () {

            var that = this;

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
                    that.$store.dispatch('setUsername', that.username)
                    that.$root.$router.push({name: 'home'})
                },
                error: function (result) {
                    alert(result);
                }
            });
        }
    }
}


</script>

<style media="screen">
body {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #eee;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="text"] {
	margin-bottom: -1px;
	border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
#inputPassword {
  #margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
	border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

#repeatPassword {
	margin-bottom: 10px;
	margin-top: -1px;
	border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>
