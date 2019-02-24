<template>
<div class="home">
  <el-row>
    <el-col :span="6"><div class="block">智元汇地铁安检系统</div></el-col>
    <el-col :span="6"><div class="block">智元汇地铁安检系统</div></el-col>
    <el-col :span="6"><div class="block">智元汇地铁安检系统</div></el-col>
    <el-col :span="6"><div class="block">智元汇地铁安检系统</div></el-col>
  </el-row>

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
  // width:100%;
  .el-row{
    justify-content:space-around;
    .el-col{
      padding:20px;
    } 
    .block{
      height:125px;
      width:300px;
      text-align:center;
      line-height:125px;
      background:#67A8EC;
      box-shadow:10px 10px 5px #9BABC8;
    }
  }
  
}
</style>
