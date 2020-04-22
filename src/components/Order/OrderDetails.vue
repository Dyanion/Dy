<template>
  <div>
    <!-- 顶部 -->
    <div class="top">
      <!-- 返回按钮 -->
      <van-nav-bar left-arrow :border="false" color="#fff" @click-left="onClickLeft" />
      <!-- 文字部分 -->
      <div class="toptext">
        <div style="margin:0.5rem 0;font-size:1.1rem;font-weight:bold">支付超时</div>
        <div style="margin:0.5rem 0;font-size:0.75rem">订单以超时可支付时间，请重新下单</div>
        <van-button type="default" size="large">再次预定</van-button>
      </div>
    </div>
    <!-- 支付 -->
    <div class="pay">
      <div class="col">
        <!-- 在线支付 -->
        <van-row type="flex" align="center">
          <van-col span="6"><div class="payol">在线支付</div></van-col>
          <van-col span="12"><div style="color:#FF565C">￥149</div></van-col>
          <van-col span="6">
            <span class="blue">费用明细 </span>
            <van-icon class="blue" name="arrow" />
          </van-col>
        </van-row>
        <!-- 发票报销 -->
        <van-row type="flex" align="center">
          <van-col span="6"><div class="payol">发票报销</div></van-col>
          <van-col span="12"><div style="font-size:0.75rem">笨喵开具</div></van-col>
          <van-col span="6">
            <span class="blue">补开发票 </span>
            <van-icon class="blue" name="arrow" />
          </van-col>
        </van-row>
        <!-- 青海果洛国际大酒店 -->
        <van-row type="flex" align="center">
          <van-col span="18"><div style="font-size:0.9rem;font-weight:bold">青海果洛国际大酒店</div></van-col>
          <van-col span="6">
            <span class="blue">酒店详情 </span>
            <van-icon class="blue" name="arrow" />
          </van-col>
        </van-row>
      </div>
      <div class="payol">城北区宁张路48号中房国际村3号楼楼门市</div>
      <!-- 地图导航联系商家 -->
      <div class="map">
        <van-row type="flex" justify="space-around">
          <van-col span="6">
            <van-row>
              <van-col span="4"><img style="width:0.8rem" src="../../assets/ditu@2x.png" alt=""></van-col>
              <van-col span="20"><div style="font-size:0.75rem;color:#666">地图/导航</div></van-col>
            </van-row>
          </van-col>
          <van-col span="6">
            <van-row>
              <van-col span="4"><img style="width:0.8rem" src="../../assets/dianhua@2x.png" alt=""></van-col>
              <van-col span="20"><div style="font-size:0.75rem;color:#666">联系商家</div></van-col>
            </van-row>
          </van-col>
        </van-row>
      </div>
      <!-- 分割线 -->
      <van-divider />
      <!-- 床型 -->
      <div class="bed">
        <div>大床房</div>
        <div>大床<span style="margin-left:1.5rem">不含早</span></div>
        <div>
          <span>3-20(周五)</span>
          <span>3-21(周六)</span>
          <span>共1晚1间</span>
        </div>
      </div>
      <!-- 入住人 -->
      <div class="man">
        <!-- 入住人 -->
        <van-row>
          <van-col span="5"><div class="left">入住人</div></van-col>
          <van-col span="19"><div class="right">杨晗</div></van-col>
        </van-row>
        <!-- 联系手机 -->
        <van-row>
          <van-col span="5"><div class="left">联系手机</div></van-col>
          <van-col span="19"><div class="right">13745866885</div></van-col>
        </van-row>
        <!-- 预计到店 -->
        <van-row>
          <van-col span="5"><div class="left">预计到店</div></van-col>
          <van-col span="19"><div class="right">3月20日14:00之前(不影响酒店留房)</div></van-col>
        </van-row>
        <!-- 入住说明 -->
        <van-row>
          <van-col span="5"><div class="left">入住说明</div></van-col>
          <van-col span="19"><div class="right">商家通常12:00开始办理入住，如需 提早办理请联系商家</div></van-col>
        </van-row>
      </div>
    </div>
    <!-- 分割线 -->
    <div style="width:auto;height:0.5rem;background:#eee"></div>
    <!-- 订单信息 -->
    <div class="order">
      <div style="font-size:0.9rem">订单信息</div>
      <div class="man">
        <!-- 订单号 -->
        <van-row>
          <van-col span="5"><div class="left">订单号</div></van-col>
          <van-col span="19"><div class="right">2413929534108840233</div></van-col>
        </van-row>
        <!-- 下单时间 -->
        <van-row>
          <van-col span="5"><div class="left">下单时间</div></van-col>
          <van-col span="19"><div class="right">2020-03-20 11:13</div></van-col>
        </van-row>
      </div>
    </div>
    <!-- 底部支撑 -->
    <div style="height:3.5rem"></div>
    <!-- 底部button -->
    <div class="bottom">
      <van-button plain hairline type="default" size="large" color="#FF9F05"  @click="submit()">删除订单</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    submit(){
      if(confirm("是否删除？")){
        console.log("已删除")
      }else{
        console.log("已取消")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
  width:auto;
  background: linear-gradient(to right, #FFB800, #FE9706);
  padding: 1rem 0.3rem;
  box-sizing: border-box;
}
.van-nav-bar{
  background: transparent;
}
.van-nav-bar >>>.van-icon{
  color:#fff
}
.toptext{
  padding: 0 1rem;
  color: #fff;
}
.toptext .van-button{
  height:2rem;
  line-height: 2rem;
  border-radius: 0.2rem;
}
.toptext .van-button--default{
  color: #FFB800;
  font-size: 0.8rem;
}
.pay{
  padding: 1rem;
}
.payol{
  font-size: 0.75rem;
  color: #999999;
}
.blue{
  color: #0082E0;
  font-size: 0.75rem;
}
.col .van-row{
  margin: 0.5rem 0;
}
.map{
  margin: 1rem 0;
}
.bed{
  font-size:0.75rem;
  color:#333;
  margin:0.25rem 0
}
.bed div{
  margin:0.25rem 0
}
.bed span{
  margin-right: 1rem;
}
.man{
  font-size: 0.75rem;
}
.man .van-row{
  margin: 0.5rem 0;
}
.left{
  color: #999;
}
.right{
  color: #333;
}
.order{
  padding: 1rem;
}
.bottom{
  width:100%;
  padding: 0.5rem 1rem;
  position: fixed;
  bottom:0;
  box-sizing: border-box;
  background:#fff
}
.van-button{
  height:2.5rem;
  line-height: 2.5rem;
  border-radius: 0.3rem;
}
</style>
