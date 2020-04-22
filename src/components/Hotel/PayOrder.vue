<template>
  <div>
    <!-- 返回上一页 -->
    <van-nav-bar left-arrow :border="false" color="#fff" @click-left="onClickLeft" />
    <!-- 背景色 -->
    <div class="banner"></div>
    <!-- 标题 -->
    <div class="toptitle">
      <!-- 题目 -->
      <van-row type="flex" align="center">
        <van-col span="2">
          <img style="width:1rem;height:1rem" src="../../assets/jiudian@2x.png" alt="">
        </van-col>
        <van-col span="22">汉庭快捷酒店(万达广场店)</van-col>
      </van-row>
      <!-- 分割线 -->
      <van-divider style="margin:0.5rem 0 0 0" />
      <!-- 入住时间 -->
      <div class="dateTime">
        <van-cell center>
          <template #title>
            <van-row type="flex" align="center">
              <van-col span="18">
                <div class="date">3月18日(今天)-3月20日(明天)</div>
              </van-col>
              <van-col span="6"><van-tag text-color="#FFB900" color="#fff0cf" style="margin-right:0.5rem">共住一晚</van-tag></van-col>
            </van-row>
          </template>
        </van-cell>
      </div>
      <!-- 房型 -->
      <div class="roomtype">
        <van-cell title="标准大床房" label="两人入住 | 含早餐 | 大床 | 有窗" />
      </div>
      <!-- 分割线 -->
      <van-divider style="margin:0.5rem 0" />
      <!-- 支付金额 -->
      <div>
        <span style="color:#999999;font-size:0.8rem">支付总额：</span>
        <span style="color:#FF565C;font-size:0.8rem">￥125</span>
      </div>
      <!-- 分割线 -->
      <van-divider style="margin:1rem 0;border:0.8px dashed #999" />
      <!-- 微信支付 -->
      <van-cell @click="toggle()" style="padding:0.75rem 0" >
        <template #title>
          <van-row>
            <van-col span="3"><img style="width:1.5rem" src="../../assets/weixinzhifu2@2x.png" alt=""></van-col>
            <van-col span="21">微信支付</van-col>
          </van-row>
        </template>
        <template #right-icon>
          <van-checkbox v-model="checked" checked-color="#FFB900" />
        </template>
      </van-cell>
    </div>
    <!-- 底部button -->
    <div class="bottom">
      <van-button round type="default" size="large" color="linear-gradient(to right, #FFB900, #FE9706)" @click="submit()">支付订单</van-button>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#eee')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', 'background:#fff')
  },
  data(){
    return {
      checked:true
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    toggle() {
      if(this.checked){
        this.checked=false
      }else{
        this.checked=true
      }
      console.log(this.checked)
    },
    submit(){
    if(!this.checked){
      this.$toast('请选择支付方式!')
    }else{
      console.log(this.checked)
    }
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-nav-bar{
  background: transparent;
}
.van-nav-bar >>>.van-icon{
  color:#000
}
.banner{
  width:100%;height:20rem;
  border-radius: 50%;
  background: linear-gradient(to right, #FF9000, #FFB900);
  margin: -12rem 0 0 -3rem;
}
.toptitle{
  width:90%;
  margin: -7rem auto 0 auto;
  background: #FFF;
  border-radius: 0.4rem;
  padding: 1rem;
  box-sizing: border-box;
}
.date{
  font-size: 0.75;
}
.map{
  color: #0082E0;
}
.dateTime .van-cell{
  padding: 0.5rem 0;
}
.roomtype .van-cell{
  padding: 0.5rem 0;
}
.bottom{
  width:90%;
  padding: 0.5rem 0.75rem;
  position: fixed;
  bottom:0;
  left: 2%;
}
.van-button{
  height:2.5rem;
  line-height: 2.5rem;
}
</style>
