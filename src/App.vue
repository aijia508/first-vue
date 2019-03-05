<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
  // console.log(this.$route);
  // console.log(this.$route.meta.requireAuth);
  // console.log(this.formdata.user);
  }
}
</script>

<style>
html,body{
  height:100%;
  width:100%;
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position:absolute;
  width:100%;
  height:100%;
  max-width:1920px;
  max-height:1080px;
}
</style>
