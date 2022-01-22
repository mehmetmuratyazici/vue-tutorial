<template>
  <div class="detail">
    <h1>Page Name : {{$route.name}}</h1>
    <h2>User Id : {{$route.params.userId}}</h2>
    <h2>Name : {{$route.query.firstname + " " + $route.query.lastname}}</h2>
    <button class="btn btn-secondary" @click="returnBack">Geri dön</button>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route)
  },
  methods: {
    returnBack(){
      this.$router.push("/")
    }
  },
}
</script>
