import type {FormInstance} from "element-plus"//
import {ref} from "vue"
export interface LoginFormInt {
    username: string,
    password: string
}
export class InitData {
    loginForm: LoginFormInt = {
        username: 'admin',
        password: "123456",
        
    }
    loginFormRef=ref<FormInstance>()
}
//   export {InitData}