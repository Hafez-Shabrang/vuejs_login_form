<template>
    <div class="row justify-content-center my-3">
        <h1 class="text-center my-3">Logout page</h1>
        <div class="col-md-6">
            <form>

                <div class="text-center">
                    <button type="submit" class="btn btn-danger" @click="doLogout">Logout</button>
                </div>

            </form>
        </div>
    </div>
</template>


<script>

export default {

    methods: {
        doLogout() { 
           this.$store.commit("logout")
           this.$router.push("/login")
        }
    },

}

</script>


<style>

</style>