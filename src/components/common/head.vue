<template>
<div class="common">
  <el-container class="head">  
      <el-header>
          <div class="headTitle"><span>内部管理系统</span></div>          
          <div class="userManage">
          <el-dropdown trigger="click">
          <img src="static/img/头像女孩.png"/>
          <span>{{test}}<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><span @click="$router.push('/personal')"><img src="static/img/头像.png"/>个人中心</span></el-dropdown-item>
            <el-dropdown-item><span @click="quit"><img src="static/img/退出1.png"/>退出登录</span></el-dropdown-item>
          </el-dropdown-menu>
          </el-dropdown>
          </div>
      </el-header>
  </el-container>
  <el-container class="content">
    <el-aside >
      <el-menu :default-active="activeIndex" router background-color="#5e4dad" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
        <template slot="title">人员信息</template>
          <el-menu-item index="1-1" :route="{name:'teacher'}">教师信息</el-menu-item>
          <el-menu-item index="1-2" :route="{name:'student'}">学生信息</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
        <template slot="title">用户管理</template>
          <el-menu-item index="2-1" :route="{name:'personal'}">个人中心</el-menu-item>
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
  props:['test'],
    data(){
      return{
        activeIndex:'',dialogVisible:false
        
      }
    },
    mounted(){
      switch(this.$route.name){
        case 'teacher':this.activeIndex='1-1';break;
        case 'student':this.activeIndex='1-2';break;   
        case 'personal':this.activeIndex='2-1';break;
      }
    },
    created(){console.log(888,this.test)},
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
      },
      // userCenter(){
      //   this.dialogVisible = true;
      // }
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
.head{
  width:100%;
  height:80px;
  .el-header{
    background-color:#7562CE;
    // // color:#333;
    // text-align:center;
    height:80px!important;
    width:100%;
    position:relative;
    // margin-top:0;
    // span{
    //   // text-align:center;
    //   // line-height:100px;
    //   font-size:30px;
    // }
    // img{
    //   position:absolute;
    //   right:30px;
    //   top:30px;
    //   width:30px;
    //   opacity:0.5;
    //   cursor:pointer;
    // }
    .headTitle,.userManage{
      display:inline-block;
    }
    .headTitle{
      margin:0 auto;
      font-size:30px;
      padding:0;
      
    line-height:80px;
      text-align:center;
    }
    .userManage{
      position:absolute;
      right:30px;
      top:20px;
      // margin-right:10px;
      color:#ffffff;
      img{
        width:30px;
        cursor:pointer;
        position:relative;
        top:9px;
      }
      span{
        text-align:center;
      }
    }
  }
}
.el-dropdown{
  height:40px;
  color:#FCFCFC;
}
.el-dropdown-menu__item img{
  width:20px;
  opacity:0.5;
  position:relative;
  top:5px;
}
.content{ 
  height:calc(100% - 80px);
  // height:100%;
  .el-aside{
    background:#8271D2;
    height:100%;

    .el-menu{
      background:#5e4dad;
      border:0px solid red;
    }
  }
  .el-main{
  background-color:rgb(223, 223, 223);
  color:#333;
  height:100%;
}
}
</style>