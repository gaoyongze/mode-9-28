import axios from "axios"
import { ElMessage } from 'element-plus'
enum MSGS {
    "操作成功"=200,
    "密码错误",
    "账号错误",
    "请求异常"
}

// 创建http实例
const $http=axios.create({
    baseURL:"https://www.fastmock.site/mock/f8c84810f1e0a2ca9b6aeea26486eaaf/amidn",
    timeout:2000,
    headers:{
        "Content-Type":"application/json;charset=utf-8"
    }
})

// 请求拦截
$http.interceptors.request.use(config=>{
    config.headers=config.headers||{}
    if(localStorage.getItem("token")){
        config.headers.token=localStorage.getItem("token")||""
    }
    console.log(config)
    return config
    })
$http.interceptors.response.use(res=>{
    const code=res.data.code
    if(code!=200){
        ElMessage({
            message: MSGS[code],
            type: 'success',
          })
        return res
    }else{
        return res.data
    }
},err=>{
    console.log(err);
    return Promise.reject(err)
})
export default $http