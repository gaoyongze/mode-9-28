<template>
    <div>
        <div class="select-box">
            <el-form :inline="true" :model="selectData" class="demo-form-inline">
                <el-form-item label="标题">
                    <el-input v-model="selectData.title" placeholder="请输入关键字" />
                </el-form-item>
                <el-form-item label="详情">
                    <el-input v-model="selectData.body" placeholder="请输入关键字" />
                </el-form-item>
                <!-- <el-form-item label="详情">
                    <el-select v-model="selectData.body" placeholder="请输入关键字">
                        <el-option label="Zone one" value="shanghai" />
                        <el-option label="Zone two" value="beijing" />
                    </el-select>
                </el-form-item> -->
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table border :data="list[selectData.page]" style="width: 100%">
            <el-table-column prop="id" label="ID" width="180" />
            <el-table-column prop="title" label="标题" width="180" />
            <el-table-column prop="body" label="详情" />
        </el-table>
        <el-pagination @current-change="currentchange" layout="prev, pager, next" :total="selectData.count" />
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { InitData, ListInt } from "../types/order";
import { getList } from "../http/api";
export default defineComponent({
    setup() {
        const data = reactive(new InitData())
        onMounted(() => {
            getList({ page: data.selectData.page }).then(res => {
                data.selectData.count = res.data.length
                data.dataList = res.data
                slicetList(res.data)
            })
        })
        const slicetList = (arr: ListInt[]) => {
            console.log(arr,"+_+_");
            
            data.list=[]
            for (let i = 0; i < arr.length; i += 10) {
                let list: any = arr.slice(i, i + 10)
                data.list.push(list)
            }
        }
        const currentchange = (page: number) => {
            data.selectData.page = page - 1
        }
        const onSubmit = () => {
            // console.log(data.selectData);
            let arr: ListInt[] = []
            if(data.selectData.title||data.selectData.body){
            if(data.selectData.title){
              arr = data.dataList.filter(v=>v.title.indexOf(data.selectData.title)!=-1)
            }
            if(data.selectData.body){
              arr =(data.selectData.title?arr:data.dataList).filter(v=>v.body.indexOf(data.selectData.body)!=-1)
            }
          }else{
            arr =  data.dataList
          }
            // console.log(arr)
            data.selectData.count = arr.length
            slicetList(arr)

        }
        return {

            ...toRefs(data),
            currentchange,
            onSubmit
        }
    }
})
</script>

<style scoped>
</style>