<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <div>
        <div
          v-if="$store.getters._isAuthenticated && $store.state.hideMenuSideBar"
          class="bi bi-list d-inline-block me-2"
          style="transform: scale(1.3)"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        />
        <router-link class="navbar-brand" :to="{ name: 'HomePage' }">{{
          $store.state.appname
        }}</router-link>
      </div>
      <div v-if="$store.getters._isAuthenticated">
        <button
          class="btn btn-dark text-white rounded-3 mx-2"
          @click.prevent="$router.push({ name: 'NewBookmarkPage' })"
        >
          + New
        </button>
        <!-- <button
          class="btn btn-dark text-white rounded-3 mx-2"
          @click.prevent="$store.commit('showNewBookmark', true)"
        >
          + New
        </button> -->
        <div class="btn-group dropstart">
          <div
            class="bi bi-three-dots-vertical"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />

          <ul class="dropdown-menu">
            <li>
              <router-link class="dropdown-item" :to="{ name: 'AccountPage' }"
                >Account</router-link
              >
            </li>
            <li><router-link class="dropdown-item" :to="{ name: 'LikesPage' }"
                >Likes</router-link
              ></li>
            <li><router-link class="dropdown-item" :to="{ name: 'FavoritesPage' }"
                >Favorites</router-link
              ></li>
            <!-- <li><hr class="dropdown-divider" /></li> -->
            <li>
              <a @click="logOut" class="dropdown-item" href="#">Log Out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.commit("logoutUser");
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>

<style >
.bi {
  transform: scale(1.2);
}
</style>