<template>
  <Home/>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;;
  margin-left: auto;
  margin-right: auto;
  max-width: 760px;
  padding: 10px;
  background-color: antiquewhite;
}
body{
  background-color: grey;
}
</style>
