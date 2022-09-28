<template>
  <div class="market content">
    <div class="title">订单销售总览</div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content ep-bg-qing">
          <div class="total_box">
            <el-icon :size="60" color="#fff"><Document /></el-icon>
            <div class="total-content">
              <div class="total_value">200</div>
              <div class="total_title">今日订单总数</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-blue">
          <div class="total_box">
            <el-icon :size="60" color="#fff"><Money /></el-icon>
            <div class="total-content">
              <div class="total_value">6,098.00</div>
              <div class="total_title">今日销售总额</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-green">
          <div class="total_box">
            <el-icon :size="60" color="#fff"><Wallet /></el-icon>
            <div class="total-content">
              <div class="total_value">4,267.00</div>
              <div class="total_title">昨日销售总额</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content ep-bg-orange">
          <div class="total_box">
            <el-icon :size="60" color="#fff"><WalletFilled /></el-icon>
            <div class="total-content">
              <div class="total_value">24,835.00</div>
              <div class="total_title">近7天销售总额</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="product content">
    <el-row>
      <el-col :span="12">
        <div class="title">商品总览</div>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="product_list">
              <div class="product_value">200</div>
              <div class="product_content">
                <el-icon :size="20" color="orange"><Timer /></el-icon>
                <span class="total_title">待上架</span>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="product_list">
              <div class="product_value">369</div>
              <div class="product_content">
                <el-icon :size="20" color="#5dc3c2"><CaretTop /></el-icon>
                <span class="total_title">已上架</span>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="product_list">
              <div class="product_value">592</div>
              <div class="product_content">
                <el-icon :size="20" color="#00a3de"><Box /></el-icon>
                <span class="total_title">全部商品</span>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="product_list product_redcolor">
              <div class="product_value">28</div>
              <div class="product_content">
                <el-icon :size="20" color="#f8543e"
                  ><WarnTriangleFilled
                /></el-icon>
                <span class="total_title">库存预警</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <div class="title">线上购买用户总览</div>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="product_list">
              <div class="product_value">23,561</div>
              <div class="product_content">
                <el-icon :size="20" color="#5dc3c2"><TrendCharts /></el-icon>
                <span class="total_title">今日新增</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="product_list">
              <div class="product_value">32,578</div>
              <div class="product_content">
                <el-icon :size="20" color="orange"><TrendCharts /></el-icon>
                <span class="total_title">昨日新增</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="product_list">
              <div class="product_value">128,927</div>
              <div class="product_content">
                <el-icon :size="20" color="#00a3de"><TrendCharts /></el-icon>
                <span class="total_title">本月新增</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
  <div class="order content">
    <div class="title">订单趋势</div>
    <el-row>
      <el-col :span="4">
        <div style="padding: 20px">
          <div>
            <div style="color: #909399; font-size: 14px">本月订单总数</div>
            <div style="color: #606266; font-size: 24px; padding: 10px 0">
              10000
            </div>
            <div>
              <span class="color-success" style="font-size: 14px">+10%</span>
              <span style="color: #c0c4cc; font-size: 14px">同比上月</span>
            </div>
          </div>
          <div style="margin-top: 20px">
            <div style="color: #909399; font-size: 14px">本周订单总数</div>
            <div style="color: #606266; font-size: 24px; padding: 10px 0">
              1000
            </div>
            <div>
              <span class="color-danger" style="font-size: 14px">-10%</span>
              <span style="color: #c0c4cc; font-size: 14px">同比上周</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="20">
        <el-button-group size="small" class="buttonGroup">
            <el-button class="btn" :class="status?'active':''" @click="orderWeek">本周</el-button>
            <el-button class="btn" :class="status?'':'active'" @click="orderMonth">本月</el-button>
        </el-button-group>
        <div class="grid-content bg-purple-light">
          <div
            id="echart"
            style="width: auto; height: 400px"
            ref="echart"
          ></div>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="order content">
    <div class="title">销售趋势</div>
    <el-row>
      <el-col :span="4">
        <div style="padding: 20px">
          <div>
            <div style="color: #909399; font-size: 14px">本月销售总额</div>
            <div style="color: #606266; font-size: 24px; padding: 10px 0">
              15000
            </div>
            <div>
              <span class="color-success" style="font-size: 14px">+10%</span>
              <span style="color: #c0c4cc; font-size: 14px">同比上周</span>
            </div>
          </div>
          <div style="margin-top: 20px">
            <div style="color: #909399; font-size: 14px">本周销售总额</div>
            <div style="color: #606266; font-size: 24px; padding: 10px 0">
              15200
            </div>
            <div>
              <span class="color-danger" style="font-size: 14px">-10%</span>
              <span style="color: #c0c4cc; font-size: 14px">同比上周</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="20">
        <el-button-group size="small" class="buttonGroup">
            <el-button class="btn" :class="status2?'active':''" @click="marketWeek">本周</el-button>
            <el-button class="btn" :class="status2?'':'active'" @click="marketMonth">本月</el-button>
        </el-button-group>
        <div class="grid-content bg-purple-light">
          <div
            id="echart2"
            style="width: auto; height: 400px"
            ref="echart2"
          ></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, nextTick } from "vue";
import { getChart } from "../http/api";
import * as echarts from "echarts";
let echart = ref(null);
let echart2 = ref(null);
let status=ref(true);
let status2=ref(true);
let list=ref({});
let myecharts=reactive();
let myecharts2=reactive();
let option = reactive({
    xAxis: {
        type: "category",
        data: [],
    },
    yAxis: {
        type: "value",
    },
    tooltip: {
        trigger: "axis",
    },
    legend: {
        type: "plain",
        right: "10%",
        itemGap: 20,
        pageIconSize: 15,
        data: ["订单总数", "线上订单数", "线下订单数"],
    },
    series: [
        {
            name: "订单总数",
            type: "line",
            data: [],
            smooth: true,
        },
        {
            name: "线上订单数",
            type: "line",
            data: [],
            smooth: true,
        },
        {
            name: "线下订单数",
            type: "line",
            data: [],
            smooth: true,
        },
    ],
});
let option2 = reactive({
  xAxis: {
    type: "category",
    data: [],
  },
  yAxis: {
    type: "value",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    type: "plain",
    right: "10%",
    itemGap: 20,
    pageIconSize: 15,
    data: ["销售总额", "线上销售额", "线下销售额"],
  },
  series: [
    {
      name: "销售总额",
      type: "line",
      color:'pink',
      data: [],
      smooth: true,
    },
    {
      name: "线上销售额",
      type: "line",
      color:'orange',
      data: [],
      smooth: true,
    },
    {
      name: "线下销售额",
      type: "line",
      color:'skyblue',
      data: [],
      smooth: true,
    },
  ],
});

//切换本月订单数
function orderMonth(){
    status.value=false;
    let { benzhoul, benyue1, benyue2, benyue3 } = list.data.data.dingdan;
    option.xAxis.data = benzhoul;
    option.series[0].data = benyue1;
    option.series[1].data = benyue2;
    option.series[2].data = benyue3;
    console.log(option.series[0].data);
    myecharts.setOption(option);
}
//切换本周订单数
function orderWeek(){
    status.value=true;
    let { benzhoul, benzhous1, benzhous2, benzhous3 } = list.data.data.dingdan;
    option.xAxis.data = benzhoul;
    option.series[0].data = benzhous1;
    option.series[1].data = benzhous2;
    option.series[2].data = benzhous3;
    console.log(option.series[0].data);
    myecharts.setOption(option);
}

//切换本月销售数
function marketMonth(){
    status2.value=false;
    let { benzhoul, benyue1, benyue2, benyue3 } = list.data.data.xiaoshou;
    option2.xAxis.data = benzhoul;
    option2.series[0].data = benyue1;
    option2.series[1].data = benyue2;
    option2.series[2].data = benyue3;
    console.log(option2.series[0].data);
    myecharts2.setOption(option2);
}
//切换本周销售数
function marketWeek(){
    status2.value=true;
    let { benzhoul, benzhous1, benzhous2, benzhous3 } = list.data.data.xiaoshou;
    option2.xAxis.data = benzhoul;
    option2.series[0].data = benzhous1;
    option2.series[1].data = benzhous2;
    option2.series[2].data = benzhous3;
    console.log(option2.series[0].data);
    myecharts2.setOption(option2);
}

onMounted(async () => {
  list = await getChart();
  //订单图标
  let { benzhoul, benzhous1, benzhous2, benzhous3 } = list.data.data.dingdan;
  option.xAxis.data = benzhoul;
  option.series[0].data = benzhous1;
  option.series[1].data = benzhous2;
  option.series[2].data = benzhous3;
  //销售图表
  let datas = list.data.data.xiaoshou;
  option2.xAxis.data = datas.benzhoul;
  option2.series[0].data = datas.benzhous1;
  option2.series[1].data = datas.benzhous2;
  option2.series[2].data = datas.benzhous3;
  await nextTick;
  //获取最新的dom异步
  myecharts = echarts.init(echart.value);
  myecharts.setOption(option);
  myecharts2 = echarts.init(echart2.value);
  myecharts2.setOption(option2);
});
</script>

<style lang="scss" scoped>
.content {
  border: 1px solid #dcdfe6;
  border-radius: 10px;
  font-size: 15px;
  margin-bottom: 20px;
  .title {
    padding: 15px 20px;
    color: #606266;
    font-weight: 700;
  }
  .el-row {
    padding: 20px;
    .ep-bg-qing {
      background: #4dc1c0;
    }
    .ep-bg-blue {
      background: #44a2fc;
    }
    .ep-bg-green {
      background: #8fc237;
    }
    .ep-bg-orange {
      background: linear-gradient(to right, #f76e5b, #f29c63);
    }
    .grid-content {
      border-radius: 10px;
      .total_box {
        display: flex;
        padding: 20px;
        .total-content {
          margin-left: 20px;
          color: #fff;
          .total_value {
            font-size: 25px;
          }
          .total_title {
            font-size: 12px;
            margin-top: 10px;
          }
        }
      }
    }
  }
  .product_list {
    text-align: center;
    .product_value {
      font-size: 22px;
      font-weight: bold;
    }
    .product_content {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 15px;
      .total_title {
        font-size: 12px;
        margin-left: 5px;
      }
    }
  }
  .product_redcolor {
    color: #f8543e;
  }
  .color-success {
    color: #8fc237;
  }
  .color-danger {
    color: #f8543e;
  }
  .buttonGroup{
    position: absolute;
    right: 160px;
    top: -30px;
    .btn.active{
        color: #fff;
        background: #606266;
    }
  }
}
</style>