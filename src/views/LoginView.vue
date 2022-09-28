<template>
  <div class="login-box">
    
    <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="rules" label-width="70px" class="loginForm">
      <h1>后台管理系统</h1>
      <el-form-item label="账号：" prop="username">
        <el-input v-model="loginForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="loginForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button class="sub-btn" type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive,toRefs } from "vue";
import type {FormInstance} from 'element-plus';

import { InitData } from "../types/login";
import {login} from "../http/api"
import {  useRouter } from "vue-router";//没有this语法无法
export default defineComponent({
    setup(){
      const data=reactive(new InitData())
      const router=useRouter()//返回router实例
      const rules={
          username:[
            {
              required:true,message:'请输入账号', trigger:"blur"
            },
            {
              min:5, max:24,message:"账号长度为6~24",trigger:"blur"
            }
          ],
          password:[
          {
              required:true,
              message:'请输入密码',
              trigger:"blur"
            },
            {
              min:6,
              max:24,
              message:"账号长度为6~24",
              trigger:"blur"
            }
          ]
        }
        let submitForm=()=>{
          data.loginFormRef?.validate((valid)=>{
            if(valid){
              // alert("验证通过发送请求")
              login(data.loginForm).then(res=>{
                // console.log("1111111",res)
                localStorage.setItem("token",res.data.token)
                // vue2 使用this.$router.push()跳转至首页   vue3在setup中没有了this语法
                // 导入vue-router 创建实例对象进行使用
                router.push("/")//等同于v2中的this.$router.push()
              })
            }
          })
        }
      //   const submitForm = (loginFormRef:FormInstance)=>{
      //     loginFormRef.validate((valid:boolean)=>{
      //       if(valid){
      //         // alert('验证通过，发送请求')
      //         login(data.loginForm).then(res=>{
      //           // console.log(res);
      //           localStorage.setItem("token",res.data.token)
      //           router.push('/')
      //         })
      //       }
      //     })
      // }
      return {
          ...toRefs(data),
          rules,
          submitForm
        }
    }
})
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  background-image: url(../assets/banner.jpg);
  padding-top: 200px;
  .loginForm {
    width: 400px;
    padding: 20px;
    background-color: white;
    border-radius: 20px;
    margin: 0 auto;
    .sub-btn {
      width: 100%;
    }
    h1{
      text-align: center;
      margin: 20px 0;
      color:#0091e6;
    }
  }
  
}
</style>