<template>
<div class="common">
  <el-container class="head">  
      <el-header>
          <span>内部管理系统</span>
          <img src="static/img/退出.png" @click="quit"></img>
      </el-header>
  </el-container>
  <el-container class="content">
    <el-aside width="180px"></el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
  
</div>

</template>
<script>
export default {
    data(){
      return{

      }
    },
    methods:{
      quit(){
        this.$confirm('是否退出登录状态','提示',{
          type:'warning'
        }).then(() => {
          this.$router.push('/login');
          sessionStorage.clear();
          this.$message.success('退出成功！')
        }).catch(() => {
          this.$message('取消退出')
        })
      }
    }
}
</script>
<style lang="less" scoped>
.common{
  margin:0;
  padding:0;
  width:100%;
  height:100%;
  background-color:#E9EEF3;
  color:#61BCBF;
}
.el-container{
  width:100%;
  // height:100px;
  .el-header{
    background-color:#7562CE;
    // color:#333;
    text-align:center;
    height:80px!important;
    line-height:80px;
    width:100%;
    position:fixed;
    margin-top:0;
    z-index:999;
    span{
      // text-align:center;
      // line-height:100px;
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
.content{ 
  .el-aside{
    background:#8271D2;
    height:100%;
    position:fixed;
    left:0px;
    z-index:10;
  }
  .el-main{
  background-color:#A2B8F2;
  color:#333;
  height:100%;
  margin-top:80px;
  margin-left:180px;
  padding:0;
}
}
</style>