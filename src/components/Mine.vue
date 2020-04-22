<template>
  <div class="all">
    <!-- 头像收藏... -->
    <van-row class="top" type="flex" align="center">
      <van-col span="12">
        <div class="title">笨喵小酒屋</div>
        <van-row class="like" type="flex" justify="space-between">
          <van-col span="6">
            <img src="../assets/shoucang@2x.png" alt="">
            <div>收藏</div>
          </van-col>
          <van-col span="6">
            <img src="../assets/pinglun@2x.png" alt="">
            <div>评论</div>
          </van-col>
          <van-col span="7">
            <img src="../assets/youhuiquan@2x.png" alt="">
            <div>优惠券</div>
          </van-col>
        </van-row>
      </van-col>
      <van-col span="12">
        <van-cell is-link center>
          <template #title>
            <img class="head" src="../assets/youhuiquan@2x.png" alt="">
          </template>
        </van-cell>
      </van-col>
    </van-row>
    <!-- 会员中心 -->
    <div class="svip">
      <img src="../assets/img6.jpg" alt="">
    </div>
    <!-- 我的订单 -->
    <div class="order">
      <van-cell value="全部订单" is-link :border="false">
        <template #title>
          <span class="custom-title">我的订单</span>
        </template>
      </van-cell>
      <van-row>
        <van-col span="6">
          <img src="../assets/shoucang@2x.png" alt="">
          <div>待付款</div>
        </van-col>
        <van-col span="6">
          <img src="../assets/shoucang@2x.png" alt="">
          <div>待使用</div>
        </van-col>
        <van-col span="6">
          <img src="../assets/shoucang@2x.png" alt="">
          <div>待评价</div>
        </van-col>
        <van-col span="6">
          <img src="../assets/shoucang@2x.png" alt="">
          <div>退款</div>
        </van-col>
      </van-row>
    </div>
    <!-- 我的钱包 -->
    <div class="wallet">
      <p class="mywallet">我的钱包</p>
      <div class="money">
        <van-row>
          <van-col span="7" offset="1">
            <p class="moneytext">余额</p>
            <p class="moneynum">100.00</p>
          </van-col>
          <van-col span="8">
            <div class="bankcard">银行卡（张） 2</div>
          </van-col>
          <van-col span="4" offset="4">
            <div class="cashOut">
              <div>提现</div>
              <van-icon name="arrow" />
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- tabbar -->
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all{
  padding: 1.3rem;
}
.top{
  margin-top: 1.5rem;
}
.title{
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.like{
  text-align: center;
  font-size: 0.8rem;
}
.like img{
  width:1.2rem;
  height:1.2rem
}
.head{
  width:4rem;
  height:4rem;
  border-radius: 50%;
  margin-left: 2.6rem;
}
.svip{
  width:100%;
  height:5rem;
  margin: 1rem auto;
}
.svip img{
  width:100%;
  height:100%;
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
  box-shadow: 2px 2px 5px #bbb;
}
.order .van-cell{
  padding: 0;
  margin: 1rem 0;
} 
.order img{
  width:2rem;
  height:2rem;
} 
.order .van-row{
  text-align: center;
  font-size: 0.5rem;
  color: #141414;
} 
.custom-title{
  font-size: 1rem;
  font-weight: bold;
}
.wallet .mywallet{
  font-size:1rem;
  font-weight: bold;
}
.wallet .money{
  width:100%;
  /* height:5rem; */
  /* border: 1px solid #000; */
  border-radius: 0.5rem;
  background-color: #F5F5F5;
  position: relative;
}
.moneytext{
  font-size: 0.9rem;
  margin-bottom: 0.1rem;
  color:#333
}
.moneynum{
  font-size: 1.5rem;
  margin-top: 0.1rem;
}
.bankcard{
  font-size: 0.9rem;
  color:#333;
  margin-top: 2.8rem;
}
.cashOut{
  width:3rem;
  height:1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* border: 1px solid #000; */
  border-top-left-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;
  position: absolute;
  top: 2.2rem;
  right: 0;
  background: #DFDFDF;
}
.cashOut div{
  font-size: 0.5rem;
  color: #333;
}
</style>
