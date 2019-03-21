<template>
<div class="home">
  <el-card class="box-card">
  <el-form :model="data" ref="formdata" label-width="80px" :rules="myRules">
    <el-form-item label="学号" prop="id"><el-input v-model="data.id"></el-input></el-form-item>
    <el-form-item label="姓名" prop="name"><el-input v-model="data.name"></el-input></el-form-item>
    <el-form-item label="性别" prop="sex">
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
    var validateId = (rule,value,callback) => {
      if(!/[0-9]{10}/.test(value)){
        callback(new Error('必须为十位数字值'));
      }else{
        callback()
      }
    }
    return {
      data:{id:'',name:'',sex:''},
      myRules:{
        id:[{required:true,message:'不能为空',trigger:'blur'},{validator:validateId,trigger:'blur'}],
        name:[{required:true,message:'不能为空',trigger:'blur'}],
        sex:[{required:true,message:'请选择性别',trigger:'blur'}]
        }
    }
  },
  methods: {
    onSubmit(){
      console.log(11,this.$refs.formdata);
      this.$refs.formdata.validate((valid) => {
        if(!valid){
          console.log(11);
          return false;
        }else{
          console.log(this.data);
        }
      })
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
  padding:10px;
  height:calc(100% - 20px);
  background-color:rgb(236, 236, 241);
  .box-card{
    width:600px;
    height:400px;
    margin-left:calc(50% - 300px);
  }
}
</style>
