<template>
<div class="home">
  <el-card class="box-card">
  <el-form :model="data" label-width="80px">
    <el-form-item label="学号"><el-input v-model="data.id"></el-input></el-form-item>
    <el-form-item label="姓名"><el-input v-model="data.name"></el-input></el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="data.sex">
        <el-radio label="0">男</el-radio>
        <el-radio label="1">女</el-radio>
      </el-radio-group>
      </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
  </el-card>
</div>
</template>

<script>
export default {
  data () {
    return {
      data:{id:'',name:'',sex:''},
    }
  },
  methods: {
    onSubmit(){
      console.log(this.data);
      // this.$confirm('确认创建？','提示',{
      //   confirmbuttontext:'确定',
      //   concalbuttontext:'取消',
      //   type:'warning'
      // }).then(_ => {
      //      this.$axios.get('',{
      //        params:{
      //          Id:this.data.id,
      //          Name:this.data.name,
      //          Sex:this.data.sex
      //        }
      //       }).then(res => {
      //         this.$message.success('创建成功！')
      //       }).catch(_ => {
      //         this.$message.info('取消')
      //       })
      //     })
    }
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
  position:relative;
  .box-card{
    width:600px;
    height:400px;
    margin-left:calc(50% - 300px);
  }
}
</style>
