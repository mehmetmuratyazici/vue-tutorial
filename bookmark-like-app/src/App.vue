<template>
  <app-header />
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
  },
  mounted() {
    this.$appAxios.get("/categories").then((res) => {
        this.$store.state.categoriesList = res.data;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: rgb(51, 58, 58) !important;
}
</style>
