<template>
<div class="login">
    <el-card class="box_card">
        <el-form :model="formdata" ref="formValidate">
        <el-form-item prop="user" :rules="rules">
        <el-input placeholder="用户名" v-model="formdata.user"></el-input>
        </el-form-item>
        <el-form-item prop="password" :rules="rules">
        <el-input placeholder="密码" v-model="formdata.password"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="loginButton">登录</el-button>
        </el-form-item>
        <label @click="register">新用户注册</label>
        </el-form>
    </el-card>
</div>
</template>
<script>
export default{
    data(){
     return{
        formdata:{user:'123',password:'123'},
        rules:{required:true,message:'输入不能为空',trigger:'blur'},
     }   
    },
    methods: {
        loginButton(){
            this.$refs.formValidate.validate(valid => {
                if(valid){
                    if(this.formdata.user == '123' && this.formdata.password == '123'){
                        sessionStorage.setItem('loginState',1);
                        let url = this.$route.query.redirect;
                        if(url){
                            this.$router.push({path:url});
                        }else{
                            this.$router.push('/teacher');
                        }
                        this.$message.success('登录成功！');
                    }else{
                        this.$message.error('用户名或密码错误！')
                    }
                }else return false;
                
            });
            
        },
        register(){
            this.$router.push('/register');
        }
    }
}
</script>
<style lang="less" scoped>
    .login{
        height:100%;
    }
    .box_card{
        width:400px;
        height:300px;
        position:absolute;
        top:50%;
        left:50%;
        margin-top:-150px;
        margin-left:-200px;
        // margin:0 auto;
        // position:relative;
        // top:50%;
        // margin-top:-150px;
        // transform:translateY(-50%);
        background-color:#F3F3F4;
        border:1px solid #CCC7BF;
        border-radius:10px;
        .el-form{
            margin-top:10px;
            width:100%;
            .el-form-item{
                margin:30px 0;
                .el-input{
                    width:100%;
                }
                .el-button{
                    width:100%;
                }
            }
        label{
            color:#409EFF;
            position:absolute;
            right:20px;
            cursor:pointer;
            // margin-right:5px;
        }
        }

    }
</style>