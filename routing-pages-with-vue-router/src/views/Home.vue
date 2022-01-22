<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Page Name : {{$route.name}}</h2>
    <input type="text" @keypress.enter="goDetail">
  </div>
</template>

<script>
// @ is an alias to /src
// import "@/styles/home.css"
export default {
  name: 'Home',
  components: {
    
  },
  methods: {
    goDetail(e){
        this.$router.push({
          name: "DetailPage",
          params:{userId:e.target.value},
          query: {firstname:"Mehmet Murat" , lastname:"YAZICI"},
        })
    }
  },
}
</script>

<style >
.home h2 {
    color :green;
}
</style>