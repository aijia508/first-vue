<template>
<div class="home">
  <div class="bar">
    <div class="bar_left">
      <el-button-group>
        <el-button type="primary" @click="dialogVisible=true">创建</el-button>
        <el-button type="primary" @click="delate">删除</el-button>
        <el-button type="primary" @click="modify">修改</el-button>
      </el-button-group>
    </div>
    <div class="bar_right">
      <el-input v-model="searchValue"><el-button type="primary" slot="append" @click="search">搜索</el-button></el-input>  
    </div>   
  </div>
  <div class="teachertable">
    <el-table :data="tabledata" stripe border>
      <el-table-column label="序号" prop="id"></el-table-column>
      <el-table-column label="工号" prop="num" text-align="center"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="性别" prop="sex"></el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
  <el-dialog title="创建教职工对话框" :visible.sync="dialogVisible">
    <el-form :model="teacherData" :rules="myRules" ref="formData" label-width="80px">
      <el-form-item label="工号" prop="num">
        <el-input v-model="teacherData.num"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="teacherData.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="teacherData.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add">创建</el-button>
        <el-button @click="dialogVisible=false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible:false,searchValue:'',
      teacherData:{num:'',name:'',sex:''},
      myRules:{
        num:{required:true,message:'请输入工号',trigger:'blur'},
        name:{required:true,message:'请输入姓名',trigger:'blur'},
        sex:{required:true,message:'请选择性别',trigger:'blur'}
      },
      tabledata:[
                // {id:'',num:'',name:'',sex:''}
                // {num:'2014100112',name:'张三',sex:'男'},{num:'2014100213',name:'小明',sex:'男'},
                // {num:'2015100213',name:'小翠',sex:'女'},{num:'2015100316',name:'小花',sex:'女'}
                ]
    }
  },
  created(){
    this.getData();
  },
  methods: {
    handleEdit(index,row){
      // console.log(index,row);
    },
    handleDelete(index,row){
      // console.log(222,index,row);
      this.$confirm('是否确认删除？','警告',{
        confirmbuttontext:'确定',
        canclebuttontext:'取消',
        type:'warning'
      }).then(_ => {this.$axios.get(`http://192.168.1.3:8080/api/delTeacher`,{params:{id:row.id}}).then(res => {
        // console.log(666,res);
        this.getData();
      })
      })
    },
    delate(){},
    modify(){},
    search(){
      console.log(11,this.searchValue);
      for(let a of this.tabledata){
        if(this.searchValue == a.num || this.searchValue == a.name){
        //  console.log(22,a);
         this.tabledata = [],
         this.tabledata.push(a);
        }else{
          // return false;
        }
      }
      
    },
    add(){
      this.$refs.formData.validate((valid) =>{
        if(!valid){
          return false;
        }else{
          // console.log(this.teacherData);
          // this.tabledata.push(this.teacherData);   
          this.$axios.post('http://192.168.1.3:8080/api/addTeacher',this.teacherData).then(res => {
            // console.log(444,res);
            this.dialogVisible = false;
            this.$message.success('创建成功！');
            this.getData();
          })
        }
      })
    },
    getData(){
      this.$axios.get('http://192.168.1.3:8080/api/getTeacher').then(res => {
          // console.log(555,res.data);
          this.tabledata = res.data;
          // console.log(123,this.tabledata)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" >
.home{
  padding:10px;
  // width:100%;
  height:calc(100% - 20px);
  // height:100%;
  background-color:rgb(236, 236, 241);
  .bar{
    width: 100%;
    height: 60px;
    position:relative;
    .bar_left{
      display: inline-block;
      position:absolute;
      left:0;
      .el-button{
        width:150px;
      }
    }
    .bar_right{
      display: inline-block;
      position:absolute;
      right:0;
      .el-input{
        width:800px;
      }
      .el-input-group__append button{
        color: #fff;
        background-color: #409EFF;
        border-color: #409EFF;
      }
    }
  }
  .teachertable{

    .el-table{
      // margin: 10px;
      .el-table__header{
        background-color:#fff;
      }
    }
  }
}
  .el-dialog{
    width:600px!important;//?
  }
</style>
