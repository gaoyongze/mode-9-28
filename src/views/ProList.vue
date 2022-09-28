<template>
    <div class="prolist">
        <div class="search">
            <div>
                <span>筛选搜索</span>
            </div>
            <div>
                <el-button>重置</el-button>
                <el-button type="primary">查询结果</el-button>
            </div>
        </div>
        <el-form inline>
            <el-form-item label="输入搜索">
                 <el-input v-model="form.search" placeholder="商品名称"/>
            </el-form-item>
            <el-form-item label="商品货号">
                 <el-input v-model="form.saleNum" placeholder="商品货号" />
            </el-form-item>
            <el-form-item label="商品分类">
                <el-select v-model="form.classify" placeholder="商品分类">
                    <el-option label="服装" value="服装" />
                    <el-option label="手机数码" value="手机数码" />
                </el-select>
            </el-form-item>
            <el-form-item label="商品品牌">
                <el-select v-model="form.brand" placeholder="请选择品牌">
                    <el-option label="小米" value="小米" />
                    <el-option label="七匹狼" value="七匹狼" />
                </el-select>
            </el-form-item><br>
            <el-form-item label="上架状态">
                <el-select v-model="form.onstatus" placeholder="全部">
                    <el-option label="上架" value="上架" />
                    <el-option label="下架" value="下架" />
                </el-select>
            </el-form-item>
            <el-form-item label="审核状态">
                <el-select v-model="form.auditStatus" placeholder="全部">
                    <el-option label="审核通过" value="审核通过" />
                    <el-option label="待审核" value="待审核" />
                </el-select>
            </el-form-item>
        </el-form>
        
    </div>
    <div class="list">
        <div>
            <span>数据列表</span>
        </div>
        <div>
            <el-button>添加</el-button>
        </div>
    </div>
    <el-table :data="dataList" stripe border>
            <el-table-column type="selection"></el-table-column>
            <el-table-column label="编号" prop="serial" width="60"></el-table-column>
            <el-table-column >
                <template #header>
                    <div>
                        <span>
                            商品图片
                        </span>
                    </div>
                </template>
                <template #default="scope">
                    <img class="img" :src="scope.row.imgurl">
                </template>
            </el-table-column>
            <!-- <el-table-column label="商品名称" prop="proName"></el-table-column> -->
            <el-table-column width="725" align="center">
                <template #header>
                    <div>
                        <span>
                            商品名称
                        </span>
                    </div>
                </template>
                <template #default="scope" >
                    <p>{{scope.row.proName}}</p>
                    <p>{{scope.row.brand}}</p>
                </template>
            </el-table-column>
            <el-table-column  prop="price">
                <template #header>
                    <div>
                        <span>
                            价格/货号
                        </span>
                    </div>
                </template>
                <template #default="scope">
                    <p>{{scope.row.price}}</p>
                    <p>{{scope.row.saleNum}}</p>
                </template>
            </el-table-column>
            <el-table-column width="120">
                <template #header>
                    <div>
                        <span>
                            标签
                        </span>
                    </div>
                </template>
                <template #default="scope">
                    <el-form-item label="上架">
                        <el-switch v-model="scope.row.one" />
                    </el-form-item>
                    <el-form-item label="新品">
                        <el-switch v-model="scope.row.two" />
                    </el-form-item>
                    <el-form-item label="推荐">
                        <el-switch v-model="scope.row.three" />
                    </el-form-item>
                </template>
            </el-table-column>
            <el-table-column label="排序" prop="order"></el-table-column>
            <el-table-column >
                <template #header>
                    <div>
                        <span>SKU库存</span>
                    </div>
                </template>
                <template #default="scope">
                    <img class="img2" src="@/assets/amend.png" alt="">
                </template>
            </el-table-column>
            <el-table-column label="销量" prop="sales"></el-table-column>
            <el-table-column >
                <template #header>
                    <div>
                        <span>审核状态</span>
                    </div>
                </template>
                <template #default="scope">
                    <div>
                        <p>{{scope.row.state}}</p>
                        <a style="color:cornflowerblue;text-decoration:none" href="#">审核详情</a>
                    </div>
                </template>
            </el-table-column>
            <el-table-column width="160">
                <template #header>
                    <div>
                        <span>操作</span>
                    </div>
                </template>
                <template #default="scope">
                    <el-row>
                        <el-button>查看</el-button>
                        <el-button>编辑</el-button>

                    </el-row>
                    <el-row style="margin-top:20px;">
                        <el-button>日志</el-button>
                        <el-button type="danger" @click="deleteFn(scope.$index)">删除</el-button>
                    </el-row>
                    
                </template>
            </el-table-column>
        
    </el-table>
    <div class="bottom">
        <el-form inline>
            <el-form-item >
                <el-select v-model="form.alter" placeholder="批量操作">
                    <el-option label="商品上架" value="商品上架" />
                    <el-option label="商品下架" value="商品下架" />
                    <el-option label="设为推荐" value="设为推荐" />
                    <el-option label="取消推荐" value="取消推荐" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">确定</el-button>
            </el-form-item>
        </el-form>
        <div class="demo-pagination-block">
            <el-pagination
            v-model:currentPage="x.currentPage"
            v-model:page-size="pageSize"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="total, prev, pager, next, jumper"
            :total="x.zs"
            @current-change="handleCurrentChange"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref,reactive,onMounted} from "vue";
import {getProList} from "@/http/api";
import $http from "../http/index";
import { AxiosRequestConfig } from "axios";

    let form=reactive({
        search:"",
        saleNum:"", 
        classify:"",
        brand:"",
        onstatus:"",
        auditStatus:"",
        one:"",
        two:"",
        three:"",
        alter:""
    })  
    let x=reactive({
        currentPage:1,
        zs:0
    })
    const dataList = ref([]);
    onMounted(async () => {
        const res =await getProList();
        dataList.value = res.data.data.slice(0,5)
        x.currentPage = Math.ceil(res.data.data.length/5)
        x.zs = res.data.data.length
        console.log(x.currentPage)
    })
    let deleteFn=async function(index: AxiosRequestConfig<any> | undefined){
        console.log(index)
        dataList.value.splice(index,1)
    }
    const pageSize = ref(5)
    
    
    const small = ref(false)
    const background = ref(false)
    const disabled = ref(false) 

    
    const handleCurrentChange = async (val: number) => {
        const res =await getProList();
        dataList.value = res.data.data.splice((val-1)*5,5)
        console.log( dataList.value)
    } 
</script>

<style lang="scss" scoped>
    .prolist{
        border:1px solid #f2f2f2;
        box-sizing: border-box;
        padding:20px;
        .search{
            display:flex;
            justify-content: space-between;
        }
        
    }
    .list{
        display:flex;
        justify-content: space-between;
        border:1px solid #f2f2f2;
        box-sizing: border-box;
        padding:10px 20px;
        margin-top:20px;
    }
    .el-table{
        .img{
            width: 80px;
            height:80px;
        }
        .img2{
            width: 40px;
            height:40px;
        }
        ::v-deep .el-table__cell{
            text-align: center!important;;
        }
    }
    .bottom{
        margin-top:30px;
        display: flex;
        justify-content: space-between;
    }
</style>