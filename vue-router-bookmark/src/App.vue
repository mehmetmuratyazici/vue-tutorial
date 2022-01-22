<template>
  <nav class="navbar navbar-dark bg-dark p-2">
    <div class="d-flex justify-content-start align-items-center">
      <a class="navbar-brand text-secondary fs-4" href="#">
        {{ $store.state.appName }}
      </a>
    </div>
    <div class="d-flex justify-content-end align-items-center">
      <router-link class="text-decoration-none text-success" active-class="clicked-item" to="bookmark"
        >Bookmark List</router-link
      >
    </div>
  </nav>

  <div class="container justify-content-center d-flex">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$store.state.appName);
  },
};
</script>

<style lang="css">
nav {
  color: #fff;
}
nav a {
  font-weight: bold;
  /* color: #2c3e50; */
  text-decoration: none;
  border: 2px solid #2c3e50;
  border-radius: 5%;
  padding: 5px;
}

nav a.clicked-item {
  color: #fff;
  border-color: #42b983;
  background: #42b983;
}
</style>