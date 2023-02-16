<template>
    <div class="row justify-content-center my-3">
        <h1 class="text-center my-3">Login page</h1>
        <div class="col-md-6">
            <form @submit.prevent="doLogin">
                <div class="mb-3">
                    <label for="exampleInputUsername" class="form-label">Username</label>
                    <input v-model="username" :class="{'is-invalid': usernameError===true, 'is-valid': usernameError===false}" type="text" class="form-control" id="exampleInputUsername" aria-describedby="usernameHelp">
                    <div id="emailHelp" class="form-text text-danger" v-if="usernameError===true">{{ usernameErrorMsg }}</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input v-model="password" :class="{'is-invalid': passwordError===true, 'is-valid': passwordError===false}" type="password" class="form-control" id="exampleInputPassword1">
                    <div  id="emailHelp" class="form-text text-danger" v-if="passwordError===true">{{ passwordErrorMsg }}</div>
                </div>
                <!-- <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> -->
                <div class="text-center">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>

            </form>
        </div>
    </div>
</template>


<script>

export default {

    data() {
        return {
            username: "",
            password: "",
            usernameError: null,
            usernameErrorMsg: null,
            passwordError: null,
            passwordErrorMsg: null 
        }
    },

    methods: {

        doLogin() {

        let access = true

        // Username validation
        if (this.username.length < 5 ) {
            this.usernameError = true
            access = false
            if (this.username.length == 0) {
                this.usernameErrorMsg = "Username is required!"
            } else {
                this.usernameErrorMsg = "Username must be least 5 character!"
            }
        } else {
            this.usernameError = false
        }

        // Password validation
        if (this.password.length < 6) {
            this.passwordError = true
            access = false
            if (this.password.length == 0) {
                this.passwordErrorMsg = "Password is required!"
            } else {
                this.passwordErrorMsg = "Password must be least 5 character!"
            }
        } else {
            this.passwordError = false
        }

        if (access) {
            this.$store.commit("login", `${this.username}:${this.password}`)
            this.$router.push("/profile ")
        }

        }
    },

}

</script>


<style>

</style>