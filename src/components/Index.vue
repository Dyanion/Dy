<template>
  <div class="hello">
    <!-- 首页轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 搜索框 -->
    <van-search v-model="value" shape="round" background="transparent" placeholder="搜索酒店/美食..." @search="onSearch">
      <template #label>
        <div @click="location()">
          <van-icon name="location-o" />
          <span>西宁</span>
        </div>
      </template>
    </van-search>
    <!-- 酒店美食分类 -->
    <div class="fenlei">
      <van-row type="flex" justify="space-around">
        <van-col span="5" @click="toHotel()">
          <div class="hotel">
            <img src="../assets/组 2@2x.png" alt="">
          </div>
          <p>酒店住宿</p>
        </van-col>
        <van-col span="5" @click="toFood()">
          <div class="food">
            <img src="../assets/组 4@2x.png" alt="">
          </div>
          <p>餐饮美食</p>
        </van-col>
        <van-col span="5" @click="toFood()">
          <div class="arder">
            <img src="../assets/组 4@2x.png" alt="">
          </div>
          <p>休闲娱乐</p>
        </van-col>
      </van-row>
    </div>
    <!-- 标签分类 -->
    <van-tabs @click="onClick" type="card" color="#FFB900" title-active-color="#000" title-inactive-color="#999">
      <van-tab title="笨喵推荐">
        <div class="waterfall">
          <div class="item">
            <div class="item-content" @click="tobanner()">
              <div class="images">
                <img src="../assets/详情2.jpg" alt="">
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
                <img src="../assets/详情1.jpg" alt="">
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
                <img src="../assets/img6.jpg" alt="">
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
      </van-tab>
      <van-tab title="热门活动">
        <div class="waterfall">
          <div class="item">
            <div class="item-content">
              <div class="images">
                <img src="../assets/img6.jpg" alt="">
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
                <img src="../assets/img6.jpg" alt="">
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
      </van-tab>
      <van-tab title="猜你喜欢">
        <div class="waterfall">
          <div class="item">
            <div class="item-content">
              <div class="images">
                <img src="../assets/img6.jpg" alt="">
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
                <img src="../assets/img6.jpg" alt="">
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
                <img src="../assets/img6.jpg" alt="">
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
      </van-tab>
    </van-tabs>
    <!-- tabbar -->
    <tabbar></tabbar>
    <!-- 底部间隔 -->
    <div class="buttom"></div>
  </div>
</template>

<script>
import { fetchList } from '@/api/article'
export default {
  data(){
    return {
      value: ''
    }
  },
  methods:{
    onSearch(val) {
      console.log(val);
    },
    location(){
      console.log('定位')
    },
    onClick(id, title) {
      console.log(title);
    },
    toHotel(){
      this.$router.push("/Hotel")
    },
    toFood(){
      this.$router.push("/Food")
    },
    tobanner(){
      fetchList().then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-swipe  {
  height: 12rem;width:100%;
  margin: 0 auto;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.van-search__content{
  background-color:#fff;
  box-shadow: 2px 2px 5px #ddd;
}

.van-search{
  position: absolute;
  width:100%;
  top:10.2rem
}
.fenlei{
  width:auto;
  text-align: center;
}
.hotel{
  width:5rem;height:5rem;
  background:#6B8EF1;
  border-radius: 50%;
  margin-top:3.5rem;
  box-shadow: 0 0 5px #2250D3;
}
.hotel img{
  width:2rem;height:2rem;
  margin:1.5rem
}
.food{
  width:5rem;height:5rem;
  background:#FB5A53;
  border-radius: 50%;
  margin-top:3.5rem;
  box-shadow: 0 0 5px #FB5A53;
}
.food img{
  width:2rem;height:2rem;
  margin:1.5rem
}
.arder{
  width:5rem;height:5rem;
  background:#FFAE00;
  border-radius: 50%;
  margin-top:3.5rem;
  box-shadow: 0 0 5px #FB5A53;
}
.arder img{
  width:2rem;height:2rem;
  margin:1.5rem
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
  font-size: 1rem;
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
