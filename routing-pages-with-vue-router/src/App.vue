<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/detail/123?firstname=Mehmet Murat&lastname=YAZICI">Detail</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  border : 1px solid #2c3e50;
  border-radius: 10%;
  padding : 5px;
}

#nav a.router-link-exact-active {
  color: #fff;
  border-color: #42b983;
  background: #42b983;
}
</style>
