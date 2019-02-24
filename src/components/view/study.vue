<template>
<div class="home">
  <el-container>
    <el-main>main</el-main>
  </el-container>
  <!--<div class="header">
    <span>内部管理系统</span>
    <img src="../assets/退出.png" @click="quit"></img>
  </div>-->

</div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    // quit(){}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" >
.home{
  margin:0;
  padding:0;
  width:100%;
  height:963px;
  background-color:#E9EEF3;
  .header{
    width:100%;
    height:100px;
    background-color:#B3C0D1;
    position:fixed;
    margin-top:0;
    span{
      text-align:center;
      line-height:100px;
      font-size:30px;
    }
    img{
      position:absolute;
      right:30px;
      top:30px;
      width:30px;
      opacity:0.5;
      cursor:pointer;
    }
  }
}
.el-container{
  width:100%;
  height:100px;
  .el-header{
    background-color:#B3C0D1;
    color:#333;
    text-align:center;
    line-height:100px;
    width:100%;
    position:fixed;
    margin-top:0;
    span{
      text-align:center;
      line-height:100px;
      font-size:30px;
    }
    img{
      position:absolute;
      right:30px;
      top:30px;
      width:30px;
      opacity:0.5;
      cursor:pointer;
    }
}
}

.el-main{
  background-color:#E9EEF3;
  color:#333;
}
</style>
