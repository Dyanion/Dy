<template>
  <div class="all">
    <!-- 顶部搜索 -->
    <van-search v-model="value" shape="round" show-action placeholder="搜索想要的美食" @search="onSearch">
      <template #action>
        <van-icon name="location-o" />
      </template>
    </van-search>
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 分类 -->
    <div class="fenlei">
      <van-row type="flex" justify="space-around" @click="choose($event)">
        <van-col span="4" id="1">
          <img id="1" src="../../assets/pinglun@2x.png" alt="">
          <p id="1">火锅</p>
        </van-col>
        <van-col span="4" id="2">
          <img id="2" src="../../assets/pinglun@2x.png" alt="">
          <p id="2">地方菜</p>
        </van-col>
        <van-col span="4" id="3">
          <img id="3" src="../../assets/pinglun@2x.png" alt="">
          <p id="3">烧烤</p>
        </van-col>
        <van-col span="4" id="4">
          <img id="4" src="../../assets/pinglun@2x.png" alt="">
          <p id="4">自助餐</p>
        </van-col>
        <van-col span="4" id="5">
          <img id="5" src="../../assets/pinglun@2x.png" alt="">
          <p id="5">小吃</p>
        </van-col>
      </van-row>
    </div>
    <!-- 热门活动 -->
    <!-- <div class="activity">
      <h4>热门活动</h4>
    </div> -->
    <!-- 精选分类 -->
    <van-tabs v-model="active" color="#FFB900" title-active-color="#FFB900">
      <van-tab title="精选推荐">
        <div class="list">
          <van-row type="flex" align="center">
            <van-col span="8" @click="toShop()">
              <img src="../../assets/img6.jpg" alt="">
            </van-col>
            <van-col span="13" @click="toShop()">
              <div class="listTit">湘干锅.鸭爪爪.小海鲜</div>
              <div class="score">
                <van-row type="flex" align="center">
                  <van-col span="6"><div id="star"><van-icon name="star" />4.2</div></van-col>
                  <van-col span="8"><div id="price">￥50/人</div></van-col>
                  <van-col span="10"><van-tag text-color="#FF565E" color="#ffeeea">回头客多</van-tag></van-col>
                </van-row>
              </div>
              <div class="address">城北区宁张路城北国际村北门</div>
            </van-col>
            <van-col span="3">
              <div class="queue" @click="toQueue()"><div>排队</div></div>
            </van-col>
          </van-row>
        </div>
      </van-tab>
      <van-tab title="猜你喜欢">
        <div class="list">
          <van-row type="flex" align="center">
            <van-col span="8">
              <img src="../../assets/img6.jpg" alt="">
            </van-col>
            <van-col span="13">
              <div class="listTit">湘干锅</div>
              <div class="score">
                <van-row type="flex" align="center">
                  <van-col span="6"><div id="star"><van-icon name="star" />4.2</div></van-col>
                  <van-col span="8"><div id="price">￥50/人</div></van-col>
                  <van-col span="10"><van-tag text-color="#FF565E" color="#ffeeea">回头客多</van-tag></van-col>
                </van-row>
              </div>
              <div class="address">城北区宁张路城北国际村北门</div>
            </van-col>
            <van-col span="3">
              <div class="queue"><div>排队</div></div>
            </van-col>
          </van-row>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value:'',
        active: 0
      }
    },
    methods: {
      onSearch(){
        console.log(this.value)
      },
      choose(e){
        this.$toast(e.target.id)
        this.$router.push({path:'/FoodList',query:{id:e.target.id}})
      },
      toQueue(){
        this.$router.push('/Queue')
      },
      toShop(){
        this.$router.push('/Shop')
      }
    }
  }
</script> 
<style scoped>
.all{
  width:auto;
  padding: 0.5rem 0.8rem;
  overflow: hidden;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 7rem;
  text-align: center;
  background-color: #39a9ed;
  border-radius: 0.7rem;
  height:7rem;
}
.img{
  width:2rem;
  height:2rem;
  border-radius: 50%;
  overflow: hidden;
}
.fenlei .van-col{
  text-align: center;
  margin: 1rem 0;
}
.fenlei img{
  width:2rem;height:2rem;
  border-radius: 50%;
}
.fenlei p{
  margin: 0;
  font-size: 0.8rem;
}
.activity{
  width:100%;height:5rem;
  border: 1px solid;
  border-radius: 0.5rem;
}
h4{
  margin: 0.2rem;
}
.list{
  margin: 0.5rem 0;
}
.list img{
  width:6rem;height:6rem;
  border-radius: 0.3rem;
}
.listTit{
  font-size: 1rem;
  font-weight: bold;
  margin: 0.6rem 0;
}
.score{
  font-size: 0.9rem;
  margin: 0.5rem 0;
}
.score #star{
  color:#F9434D
}
.score #price{
  color:#666;
  font-weight: bold;
  font-size: 0.7rem;
}
.address{
  font-size: 0.8rem;
  color:#666666;
  margin: 0.5rem 0;
}
.queue{
  width:6rem;height:1.5rem;
  background:#FFB900;
  border-top-left-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;
  color:#fff
}
.queue div{
  margin-left: 1rem;
}
</style>
