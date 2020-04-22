<template>
  <div>
    <!-- 顶部背景图 -->
    <div class="top" :style="note">
      <van-nav-bar left-arrow :border="false" color="#fff" @click-left="onClickLeft" />
    </div>
    <!-- 搜索酒店 -->
    <div class="hotel">
      <van-cell-group>
        <!-- 定位 -->
        <van-cell title="西宁"  >
          <template #right-icon>
            <van-icon name="location-o" />
          </template>
        </van-cell>
        <!-- 日期 -->
        <van-cell :title="date" @click="show = true" />
        <van-calendar v-model="show" color="#FFB900" type="range" @confirm="onConfirm" />
        <!-- 我的附近 -->
        <van-field v-model="value1" label="我的附近" placeholder="搜索酒店/地名/关键词" right-icon="arrow" @input="mysearch()"/>
        <!-- 搜索 -->
        <van-field v-model="value2" placeholder="搜索酒店/地名/关键词" right-icon="arrow" @input="search()"/>
        <van-button type="default" round size="large" color="linear-gradient(to right, #FFB900, #FE9706)" @click="toHotelList()">搜索酒店</van-button>
      </van-cell-group>
    </div>
    <!-- 猜你喜欢 -->
    <div style="width:92%;margin:5.5rem auto 0 auto"><h4>猜你喜欢</h4></div>
    <div class="waterfall">
      <div class="item">
        <div class="item-content">
          <div class="images">
            <img src="../../assets/详情2.jpg" alt="">
          </div>
          <div class="text">
            <p class="title">汉庭快捷酒店(城北万达广场店)</p>
            <div class="introduce">
              <div class="rate">
                <span>4.9</span>
                <span class="ratetext">超棒</span>
              </div>
              <div class="rateIntroduce">“价格划算房间大”</div>
            </div>
            <div class="price">
              <span class="money1">￥</span>
              <span class="money2">149</span>
              <span class="money3">起</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <div class="images">
            <img src="../../assets/详情1.jpg" alt="">
          </div>
          <div class="text">
            <p class="title">汉庭快捷酒店(城北万达广场店)</p>
            <div class="introduce">
              <div class="rate">
                <span>4.9</span>
                <span class="ratetext">超棒</span>
              </div>
              <div class="rateIntroduce">“价格划算房间大”</div>
            </div>
            <div class="price">
              <span class="money1">￥</span>
              <span class="money2">149</span>
              <span class="money3">起</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <div class="images">
            <img src="../../assets/img6.jpg" alt="">
          </div>
          <div class="text">
            <p class="title">汉庭快捷酒店(城北万达广场店)</p>
            <div class="introduce">
              <div class="rate">
                <span>4.9</span>
                <span class="ratetext">超棒</span>
              </div>
              <div class="rateIntroduce">“价格划算房间大”</div>
            </div>
            <div class="price">
              <span class="money1">￥</span>
              <span class="money2">149</span>
              <span class="money3">起</span>
            </div>
          </div>
        </div>
      </div>
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
      note:{
        backgroundImage: "url(" + require("../../assets/img6.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
      },
      date: '选择日期',
      show: false,
      value1:'',
      value2:''
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
    },
    mysearch(){
      console.log(this.value1)
    },
    search(){
      console.log(this.value2)
    },
    toHotelList(){
      this.$router.push("/HotelList")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
  width:auto;
  height:10rem;
  border-bottom-left-radius: 40%;
  border-bottom-right-radius: 40%;
}
.van-nav-bar{
  background: transparent;
}
.van-nav-bar >>>.van-icon{
  color:#fff
}
.hotel{
  width:92%;
  /* height:15rem; */
  margin: -3.5rem auto;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 2px 2px 5px #bbb;
  border-radius: 0.5rem;
  background: #fff;
}
.van-cell-group .van-button{
  margin: 2rem 0 1rem 0;
  height:2.5rem;
  line-height: 2.5rem;
  color: #000 !important;
}
.waterfall{
  column-count: 2;
  column-gap: 0;
}
.item{
  box-sizing: border-box;
  break-inside: avoid;
  padding: 10px;
}
.item-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  height: auto;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  overflow: hidden;
}
.images{
  width:100%;
  max-height:12rem;
  overflow: hidden;
}
.images img{
  height:auto;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  width:100%
}
.text{
  margin: 0 0.25rem;
}
.van-tag{
  font-size: 0.2rem;
}
.title{
  margin: 0.2rem 0;
  font-size: 1.1rem;
  font-weight: bold;
}
.text2{
  font-size: 0.3rem;
  margin: 0.2rem 0 0 0;
}
.buttom{
  height:3rem
}
.rate{
  border-bottom: 2px solid #FFB900;
  font-weight: bold;
  height:1.2rem;
  margin:0.2rem 0
}
.ratetext{
  font-size: 0.7rem;
}
.rateIntroduce{
  font-size: 0.7rem;
  line-height: 2rem;
  color:#0082E0
}
.introduce{
  display: flex;
}
.price{
  margin-bottom: 0.5rem;
}
.money1{
  font-size: 0.7rem;
  font-weight: bold;
  color: #FF565C;
}
.money2{
  /* font-size: 0.7rem; */
  font-weight: bold;
  color: #FF565C;
}
.money3{
  font-size: 0.7rem;
  color: #999;
}

</style>
