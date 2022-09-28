const path=require("path")

let Koa=require('koa');
let Router = require('@koa/router')
let cors=require('@koa/cors')
let KoaBody=require('koa-body');

let app=new Koa();//创建一个koa实例对象
let router = new Router()//创建一个
app.use(cors())//解决跨域
// 参数的处理
app.use(KoaBody({
    multipart:true,
    formidable:{//用于处理文件上传的路径
        uploadDir:path.join(__dirname,"./uploads"),//设置存放文件的目录
        keepExtensions:true
    }
}))



// api接口
router.get("/hehe",async (ctx,next)=>{
    ctx.body="api 接口测试"
})
// 文件上传
router.post("/uploads",async (ctx,next)=>{
    // 
    console.log(ctx)
    ctx.body={
        message:"成功上传",
        statue:200
    }
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(9000) 


// let http=require("http")//系统模块 创建一个服务的
// let app=http.createServer((request,response)=>{//创建一个服务器实例
//     response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})
//     response.end("张三")
// })
// app.listen(9000) //绑定ip和端口
// http://127.0.0.1:8080

// http请求
    // 请求
        // 请求行 http协议
        // 请求头 请求方法，权限，长连接，是否缓存
        // 空行 
        // 请求体 请求参数
    // 响应
        // 响应行
        // 响应头
        // 空行
        // 响应体