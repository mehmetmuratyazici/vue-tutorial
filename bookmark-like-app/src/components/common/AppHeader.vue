<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <div>
        <div v-if="$store.getters._isAuthenticated"
          class="bi bi-list d-inline-block me-2"
          style="transform: scale(1.3)"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        />
        <router-link class="navbar-brand" :to="{name : 'HomePage'}">{{ $store.state.appName }}</router-link>
      </div>
      <div class="btn-group dropstart">
        <div
          class="bi bi-three-dots-vertical"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        />

        <ul class="dropdown-menu">
          <li>
            <router-link class="dropdown-item" :to="{ name : 'NewBookmarkPage'}">New Bookmark</router-link>
          </li>
          <li><a class="dropdown-item" href="#">Farovites</a></li>
          <!-- <li><hr class="dropdown-divider" /></li> -->
          <li><a @click="logOut" class="dropdown-item" href="#">Log Out</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logOut(){
      this.$store.commit("logoutUser")
      this.$router.push({name : "LoginPage"})
    }
  },
}
</script>

<style >
.bi {
  transform: scale(1.2);
}
</style>