<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/profile" class="nav-link" v-if="this.$store.state.isAuthenticated">Profile</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/login" class="nav-link" v-if="!this.$store.state.isAuthenticated">Login</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/logout" class="nav-link" v-if="this.$store.state.isAuthenticated">Logout</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
