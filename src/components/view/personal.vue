  <template>
  <div class="home">
    <el-form :model="userInfor" label-width="80px">
      <el-form-item label="头像" prop="">
        <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
        <!--<span @click="editHead"><img src="static/img/头像女孩.png" style="width:40px"/><i class="el-icon-arrow-right el-icon--right"></i></span>-->
      </el-form-item>
      <el-form-item label="用户名" prop="user">
        <el-input v-model="userInfor.user"></el-input>
      </el-form-item>
      <el-form-item label="旧密码" prop="oldPassWord">
        <el-input v-model="userInfor.oldPassWord"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassWord">
        <el-input v-model="userInfor.newPassWord"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>保存</el-button>
        <el-button>关闭</el-button>
      </el-form-item>
    </el-form>
  </div>
  </template>
<script>
export default{
data(){
    return{
        userInfor:{user:'',oldPassWord:'',newPassWord:''},
        imageUrl:'static/img/头像女孩.png',
    }
},
methods:{
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(4,this.imageUrl,5,file,6,file.raw,7,URL);
      },
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        // const isLt2M = file.size / 1024 / 1024 < 2;

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!');
        // }
        // return isJPG && isLt2M;
      }
}
}
</script>
<style scoped lang="less">
  .home{
  padding:10px;
  height:calc(100% - 20px);
  background-color:rgb(236, 236, 241);
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
        border: 1px dashed #d9d9d9;
    border-radius: 6px;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
  