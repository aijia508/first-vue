<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view :test="tes" @listenToChildEvent="showMsgFromChild"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){return{tes:'admin'}},
  created(){
  // console.log(this.$route);
  // console.log(this.$route.meta.requireAuth);
  // console.log(222,this.$axios);
  },
  methods:{
    showMsgFromChild(data){console.log(222,data);}
  }
}
</script>

<style lang='less'>
html{
  height:100%;
  width:100%;
  margin:0;
  padding:0;
}
body{
  height:100%;
  width:100%;
  margin:0;
  padding:0;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position:absolute; */
  width:100%;
  margin:0;
  padding:0;
  height:100%;
  /* max-width:1920px;
  max-height:1080px; */
}
</style>
