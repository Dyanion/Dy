<template>
  <div>
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- NavBar -->
    <div class="navbar">
      <van-nav-bar left-arrow @click-left="onClickLeft" :border="false">
        <template #right>
          <van-icon name="phone-o" />
          <van-icon name="like-o" />
          <van-icon name="ellipsis" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 名称信息 -->
    <div class="info">
      <!-- 地图导航 -->
      <van-cell is-link center>
        <template #title>
          <van-row type="flex" align="center">
            <van-col span="18">
              <div class="hotelname">如家快捷酒店(万达广场店）</div>
              <div>宁张路48号中房城国际村3号生物园区</div>
              <div class="range">距海湖新区10.9公里,驾车14.6公里,约30分钟</div>
            </van-col>
            <van-col span="6"><div class="map">地图/导航</div></van-col>
          </van-row>
        </template>
      </van-cell>
      <!-- 服务 -->
      <van-cell title="2017年装修 2018年开业">
        <template #label>
          <van-row type="flex" align="center">
            <van-col span="1"><van-icon style="margin-top:0.3rem" name="idcard"/></van-col>
            <van-col span="4">商家服务</van-col>
            <van-col span="1"><van-icon style="margin-top:0.3rem" name="underway-o" /></van-col>
            <van-col span="4">叫醒服务</van-col>
            <van-col span="1"><van-icon style="margin-top:0.3rem" name="hotel-o" /></van-col>
            <van-col span="4">行李寄存</van-col>
          </van-row>
        </template>
      </van-cell>
      <!-- 礼券 -->
      <van-cell is-link center>
        <template #title>
          <van-row type="flex" align="center">
            <van-col span="21">
              <van-tag text-color="#FF565E" color="#ffeeea" style="margin-right:0.5rem">满100减50</van-tag>
              <van-tag text-color="#fff" color="#FF565E" style="margin-right:0.5rem">代金券 ￥30</van-tag>
            </van-col>
            <van-col span="3"><div class="map">领取</div></van-col>
          </van-row>
        </template>
      </van-cell>
      <div style="width:100%;height:0.75rem;background:#F4F5F8"></div>
      <!-- 入住时间 -->
      <van-cell @click="show = true" is-link center>
        <template #title>
          <span class="livedate">{{zhu}}</span>
          <span class="livetext">入住 — </span>
          <span class="livedate">{{li}}</span>
          <span class="livetext">离店</span>
        </template>
      </van-cell>
      <van-calendar v-model="show" type="range" @confirm="onConfirm" />
      <!-- 列表 -->
      <div class="list">
        <van-row type="flex" align="center">
          <van-col span="6">
            <img src="../../assets/img6.jpg" alt="">
          </van-col>
          <van-col span="13" offset="1">
            <div class="listname">大床房[新店立减10%]</div>
            <div class="listdetails">不含早 30m 单人床 有窗</div>
            <div class="listtime">今天23:59钱可免费取消 </div>
            <div class="money">￥156</div>
          </van-col>
          <van-col span="4">
            <div class="book" @click="toBooking()">
              <div class="book1">预订</div>
              <div class="book2">在线付</div>
            </div>
          </van-col>
        </van-row>
      </div>
      <div class="list">
        <van-row type="flex" align="center">
          <van-col span="6">
            <img src="../../assets/img6.jpg" alt="">
          </van-col>
          <van-col span="13" offset="1">
            <div class="listname">大床房[新店立减10%]</div>
            <div class="listdetails">不含早 30m 单人床 有窗</div>
            <div class="listtime">今天23:59钱可免费取消 </div>
            <div class="money">￥156</div>
          </van-col>
          <van-col span="4">
            <div class="book">
              <div class="book1">预订</div>
              <div class="book2">在线付</div>
            </div>
          </van-col>
        </van-row>
      </div>
      <div class="list">
        <van-row type="flex" align="center">
          <van-col span="6">
            <img src="../../assets/img6.jpg" alt="">
          </van-col>
          <van-col span="13" offset="1">
            <div class="listname">大床房[新店立减10%]</div>
            <div class="listdetails">不含早 30m 单人床 有窗</div>
            <div class="listtime">今天23:59钱可免费取消 </div>
            <div class="money">￥156</div>
          </van-col>
          <van-col span="4">
            <div class="book">
              <div class="book1">预订</div>
              <div class="book2">在线付</div>
            </div>
          </van-col>
        </van-row>
      </div>
      <!-- 推荐 -->
      <div class="rec">
        <van-row type="flex" align="center">
          <van-col span="17">
            <div class="listname">不含早 特惠双床房 2人入住</div>
            <div class="listtime">今天23:59钱可免费取消 </div>
            <div class="money">￥156</div>
            <div class="listdetails">面积在同类双床房排名前10%</div>
          </van-col>
          <van-col span="4" offset="3">
            <div class="book">
              <div class="book1">预订</div>
              <div class="book2">在线付</div>
            </div>
          </van-col>
        </van-row>
      </div>
      <div class="rec">
        <van-row type="flex" align="center">
          <van-col span="17">
            <div class="listname">不含早 特惠双床房 2人入住</div>
            <div class="listtime">今天23:59钱可免费取消 </div>
            <div class="money">￥156</div>
            <div class="listdetails">面积在同类双床房排名前10%</div>
          </van-col>
          <van-col span="4" offset="3">
            <div class="book">
              <div class="book1">预订</div>
              <div class="book2">在线付</div>
            </div>
          </van-col>
        </van-row>
      </div>
      <div class="rec">
        <van-row type="flex" align="center">
          <van-col span="17">
            <div class="listname">不含早 特惠双床房 2人入住</div>
            <div class="listtime">今天23:59钱可免费取消 </div>
            <div class="money">￥156</div>
            <div class="listdetails">面积在同类双床房排名前10%</div>
          </van-col>
          <van-col span="4" offset="3">
            <div class="book">
              <div class="book1">预订</div>
              <div class="book2">在线付</div>
            </div>
          </van-col>
        </van-row>
      </div>
      <!-- 政策 -->
      <van-cell is-link >
        <template #title>
          <div style="font-size:1.2rem;font-weight:bold">政策</div>
        </template>
        <template #default>
          <div style="color:#0082E0">全部政策</div>
        </template>
      </van-cell>
      <!-- 儿童 -->
      <div class="child">
        <!-- 时间 -->
        <van-row  type="flex" align="center">
          <van-col span="2"><van-icon name="clock-o" size="0.75rem"/></van-col>
          <van-col span="11"><div class="childtext">入住时间12:00以后</div></van-col>
          <van-col span="11"><div class="childtext">离店时间12:00以前</div></van-col>
        </van-row>
        <!-- 儿童 -->
        <van-row  type="flex" align="center">
          <van-col span="2"><van-icon name="smile-o" size="0.75rem"/></van-col>
          <van-col span="11"><div class="childtext">儿童及加床</div></van-col>
        </van-row>
        <!-- 要求 -->
        <van-row  type="flex" align="center">
          <van-col span="11" offset="2"><div style="font-size:0.75rem;color:#333333">酒店允许携带儿童入住</div></van-col>
        </van-row>
      </div>
      <!-- 周边美食 -->
      <div class="food">
        <van-cell is-link >
          <template #title>
            <div style="font-size:1.2rem;font-weight:bold">周边美食</div>
          </template>
          <template #default>
            <div style="color:#0082E0">更多</div>
          </template>
        </van-cell>
        <!-- 美食推荐 -->
        <!-- <div>
          <div class="afood">
            <div class="image"><img src="../../assets/img6.jpg" alt=""></div>
            <div>渔港码头</div>
            <van-rate v-model="value" allow-half void-icon="star" void-color="#eee"/>
            <div>￥50/人 | 海鲜</div>
          </div>
        </div> -->
      </div>
      <div style="height:3.8rem"></div>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom">
      <van-row type="flex" justify="space-between" align="center">
        <van-col span="10">
          <div style="font-size:0.8rem;color:#666666">最新预定：3小时前</div>
        </van-col>
        <van-col span="8">
          <van-button round color="linear-gradient(to right, #FFB800, #FE9706)">查看房型</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      date: '',
      show: false,
      zhu:'3月3日',
      li:'3月6日',
      value: 2.5
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    formatDate(date) {
      return `${date.getMonth() + 1}月${date.getDate()}日`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
      this.zhu=this.formatDate(start)
      this.li=this.formatDate(end)
    },
    toBooking(){
      this.$router.push('/Booking')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 13rem;
  text-align: center;
  background-color: #39a9ed;
  height:13rem
}
.navbar{
  margin-top: -12rem;
}
.navbar .van-icon{
  margin: 0 0.4rem;
  font-size: 1.2rem;
}
.van-nav-bar{
  background: transparent;
}
.van-nav-bar >>>.van-icon{
  color:#fff
}
.info{
  width:100%;
  background:#fff;
  padding-top: 1rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  position: absolute;
  top:11rem;
}
.hotelname{
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
}
.range{
  font-size: 0.75rem;
  color:#999
}
.map{
  color: #0082E0;
}
.livedate{
  font-size: 1.2rem;
}
.livetext{
  color:#999
}
.list{
  padding:1rem
}
.rec{
  padding:1rem;
  background:#F5F5F5
}
.list img{
  width:100%;
  height:6rem;
  border-radius: 0.3rem;
}
.book{
  width:3.5rem;
  height:3rem;
  border: 1px solid #FF565C;
  border-radius: 0.2rem;
  text-align: center;
}
.book1{
  width:3.5rem;
  height:1.8rem;
  background:#FF565C;
  font-size: 0.9rem;
  line-height: 1.8rem;
  color:#fff
}
.book2{
  font-size: 0.75rem;
  line-height: 1.2rem;
}
.listname{
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.listdetails{
  font-size: 0.75rem;
  color: #666666;
  margin-bottom: 0.3rem;
}
.listtime{
  font-size: 0.75rem;
  color: #0082E0;
  margin-bottom: 0.3rem;
}
.money{
  font-size: 1rem;
  font-weight: bold;
  color: #FF5353;
}
.child{
  padding:0.5rem 1rem;
}
.childtext{
  font-size: 0.8rem;
}
.food{
  margin-top: 0.5rem;
}
.afood{
  width:5rem;
  height:7rem;
  border: 1px solid;
}
.image{
  width:100%;
  height:3.5rem;
  border: 1px solid;
}
.image img{
  width:100%;
  height:3.5rem;
}
.bottom{
  position: fixed;
  bottom:0;
  width:100%;
  background:#fff;
  border-top: 1px solid #eee;
  padding: 0.5rem 1rem 0.5rem 1rem;
}
</style>
