<template>
  <div class="all">
    <!-- 顶部返回 -->
    <van-nav-bar left-arrow :border="false" color="#fff" :title="title" @click-left="onClickLeft" />
    <!-- 分割线 -->
    <van-divider style="margin:0.5rem;border-color:#ccc"/>
    <!-- 取号 -->
    <van-row>
      <van-col span="2" offset="1"><van-icon name="checked" color='#51B85B' /></van-col>
      <van-col span="8" style="font-size:0.8rem;color:#333333">已取号</van-col>
    </van-row>
    <!-- 灰线 -->
    <div style="width:100%;height:0.5rem;background:#F5F5F5;margin:0.6rem 0"></div>
    <!-- 店名 -->
    <div class="storename">弄堂小馆(纺织品店)</div>
    <!-- 分割线 -->
    <van-divider style="margin:0.8rem;border-color:#ccc"/>
    <!-- 取号时间 -->
    <div class="time">
      <van-row>
        <van-col span="20">
          <div class="left">
            <van-row>
              <van-col span="8"><div class="gray">取号时间</div></van-col>
              <van-col span="16"><div class="small">2020-04-09 15:51:02</div></van-col>
            </van-row>
            <van-row>
              <van-col span="8"><div class="gray">还需等待</div></van-col>
              <van-col span="16"><div class="small">0桌</div></van-col>
            </van-row>
            <van-row>
              <van-col span="8"><div class="gray">预估等待</div></van-col>
              <van-col span="16"><div class="small">>30分钟</div></van-col>
            </van-row>
            <van-row>
              <van-col span="8"><div class="gray">已等待</div></van-col>
              <van-col span="16"><div class="small">0分钟</div></van-col>
            </van-row>
          </div>
        </van-col>
        <van-col span="4">
          <div class="red">A37</div>
          <div class="small">小桌</div>
        </van-col>
      </van-row>
    </div>
    <!-- 按钮组 -->
    <div class="bottom">
      <van-row type="flex" justify="space-around">
        <van-col span="10">
          <van-button plain type="default" size="large" color="#FFB900">取消排队</van-button>
        </van-col>
        <van-col span="10">
          <van-button type="default" size="large" color="#FFB900">开始点餐</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title:'号单详情'
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    }
  }
}
</script> 
<style scoped>
.all{
  width:auto;
  padding: 0.5rem 0;
}
.van-nav-bar{
  background: transparent;
}
.van-nav-bar >>>.van-icon{
  color:#000
}
.storename{
  margin-left: 1rem;
  margin-top: 0.8rem;
  font-size: 0.8rem;
  color: #333;
}
.time{
  margin: 0 1rem;
}
.red{
  font-size: 1.2rem;
  color:#F9434D
}
.small{
  font-size: 0.85rem;
  color: #333333;
}
.gray{
  font-size: 0.85rem;
  color: #999999;
}
.left .van-row{
  margin: 0.5rem 0;
}
.bottom{
  width:100%;
  height:4rem;
  position: fixed;
  bottom:0;
}
.van-button{
  height:2.5rem;
  line-height: 2.5rem;
  border-radius: 0.3rem;
}
</style>
