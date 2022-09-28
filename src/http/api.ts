import $http from "./index";
interface loginData {
    username:string,
    password:string
}

export const login= (data:loginData)=>$http({url:"/loging",method:"post",data})

export const getList= (data:any)=>$http({url:"/getList",method:"get",data})
export const getRoleList = ()=>$http({url:"/getRoleList",method:"get"})
export const getUserList = ()=>$http({url:"/getUserList",method:"get"})
export const geTauthority = ()=>$http({url:"/geTauthority",method:"get"})
export const getRouter = ()=>$http({url:"/getRouter",method:"get"})  
export const getProList = ()=>$http({url:"/prolist",method:"get"})  
// export const deleteProList = (id:any)=>$http({url:"/prolist",method:"delete",id}) 
export const getChart = ()=>$http({url:'/tubiao',method:"get"})