<template>
<div class="common">
  <el-container class="head">  
      <el-header>
          <span>内部管理系统</span>
          <img src="static/img/退出.png" @click="quit"/>
      </el-header>
  </el-container>
  <el-container class="content">
    <el-aside width="180px">
      <el-menu :default-active="activeIndex" router background-color="#5e4dad" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
        <template slot="title">人员</template>
          <el-menu-item index="1-1" :route="{name:'teacher'}">教师</el-menu-item>
          <el-menu-item index="1-2" :route="{name:'student'}">学生</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
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
        activeIndex:'',
      }
    },
    mounted(){
      switch(this.$route.name){
        case 'teacher':this.activeIndex='1-1';break;
        case 'student':this.activeIndex='1-2';break;   
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
    top:80px;
    z-index:10;
    .el-menu{
      background:#5e4dad;
      border:0px solid red;
    }
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