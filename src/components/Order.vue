<template>
  <div>
    <!-- 搜索 -->
    <van-search v-model="value" shape="round" background="#FFB900" placeholder="搜索我的订单" />
    <!-- tab标签 -->
    <van-tabs @click="onClick" color="#FFB900">
      <van-tab title="全部">
        <!-- 广告轮播 -->
        <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <!-- 订单列表 -->
        <div class="orderList">
          <!-- 订单标题 -->
          <van-row class="orderTitle">
            <van-col span="2"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="17"><p style="font-weight: bold;">汉庭快捷酒店(万达广场店)</p></van-col>
            <van-col span="5"><p style="color:#999">支付超时</p></van-col>
          </van-row>
          <!-- 订单详情 -->
          <van-row class="orderDetails">
            <van-col span="7"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="16">
              <div>1间 大床房(折上9折)</div>
              <div>2020-03-19 - 2020-03-20</div>
              <div>总价：¥149.00</div>
            </van-col>
          </van-row>
          <!-- 按钮 -->
          <van-row>
            <van-col span="6" offset="18">
              <div class="btn">
                <van-button size="large" type="default" round @click="toOrderdet()">查看</van-button>
              </div>
            </van-col>
          </van-row>
        </div>
        <!-- 订单列表 -->
        <div class="orderList">
          <!-- 订单标题 -->
          <van-row class="orderTitle">
            <van-col span="2"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="17"><p style="font-weight: bold;">汉庭快捷酒店(万达广场店)</p></van-col>
            <van-col span="5"><p style="color:#999">支付超时</p></van-col>
          </van-row>
          <!-- 订单详情 -->
          <van-row class="orderDetails">
            <van-col span="7"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="16">
              <div>1间 大床房(折上9折)</div>
              <div>2020-03-19 - 2020-03-20</div>
              <div>总价：¥149.00</div>
            </van-col>
          </van-row>
          <!-- 按钮 -->
          <van-row>
            <van-col span="6" offset="18">
              <div class="btn">
                <van-button size="large" type="default" round @click="toOrderdet()">查看</van-button>
              </div>
            </van-col>
          </van-row>
        </div>
        <!-- 订单列表 -->
        <div class="orderList">
          <!-- 订单标题 -->
          <van-row class="orderTitle">
            <van-col span="2"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="17"><p style="font-weight: bold;">汉庭快捷酒店(万达广场店)</p></van-col>
            <van-col span="5"><p style="color:#999">支付超时</p></van-col>
          </van-row>
          <!-- 订单详情 -->
          <van-row class="orderDetails">
            <van-col span="7"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="16">
              <div>1间 大床房(折上9折)</div>
              <div>2020-03-19 - 2020-03-20</div>
              <div>总价：¥149.00</div>
            </van-col>
          </van-row>
          <!-- 按钮 -->
          <van-row>
            <van-col span="6" offset="18">
              <div class="btn">
                <van-button size="large" type="default" round @click="toOrderdet()">查看</van-button>
              </div>
            </van-col>
          </van-row>
        </div>
        <!-- 订单列表 -->
        <div class="orderList">
          <!-- 订单标题 -->
          <van-row class="orderTitle">
            <van-col span="2"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="17"><p style="font-weight: bold;">汉庭快捷酒店(万达广场店)</p></van-col>
            <van-col span="5"><p style="color:#999">支付超时</p></van-col>
          </van-row>
          <!-- 订单详情 -->
          <van-row class="orderDetails">
            <van-col span="7"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="16">
              <div>1间 大床房(折上9折)</div>
              <div>2020-03-19 - 2020-03-20</div>
              <div>总价：¥149.00</div>
            </van-col>
          </van-row>
          <!-- 按钮 -->
          <van-row>
            <van-col span="6" offset="18">
              <div class="btn">
                <van-button size="large" type="default" round @click="toOrderdet()">查看</van-button>
              </div>
            </van-col>
          </van-row>
        </div>
        <!-- 订单列表 -->
        <div class="orderList">
          <!-- 订单标题 -->
          <van-row class="orderTitle">
            <van-col span="2"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="17"><p style="font-weight: bold;">汉庭快捷酒店(万达广场店)</p></van-col>
            <van-col span="5"><p style="color:#999">支付超时</p></van-col>
          </van-row>
          <!-- 订单详情 -->
          <van-row class="orderDetails">
            <van-col span="7"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="16">
              <div>1间 大床房(折上9折)</div>
              <div>2020-03-19 - 2020-03-20</div>
              <div>总价：¥149.00</div>
            </van-col>
          </van-row>
          <!-- 按钮 -->
          <van-row>
            <van-col span="6" offset="18">
              <div class="btn">
                <van-button size="large" type="default" round @click="toOrderdet()">查看</van-button>
              </div>
            </van-col>
          </van-row>
        </div>
        <!-- 订单列表 -->
        <div class="orderList">
          <!-- 订单标题 -->
          <van-row class="orderTitle">
            <van-col span="2"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="17"><p style="font-weight: bold;">汉庭快捷酒店(万达广场店)</p></van-col>
            <van-col span="5"><p style="color:#999">支付超时</p></van-col>
          </van-row>
          <!-- 订单详情 -->
          <van-row class="orderDetails">
            <van-col span="7"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="16">
              <div>1间 大床房(折上9折)</div>
              <div>2020-03-19 - 2020-03-20</div>
              <div>总价：¥149.00</div>
            </van-col>
          </van-row>
          <!-- 按钮 -->
          <van-row>
            <van-col span="6" offset="18">
              <div class="btn">
                <van-button size="large" type="default" round @click="toOrderdet()">查看</van-button>
              </div>
            </van-col>
          </van-row>
        </div>
        <!-- 订单列表 -->
        <div class="orderList">
          <!-- 订单标题 -->
          <van-row class="orderTitle">
            <van-col span="2"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="17"><p style="font-weight: bold;">汉庭快捷酒店(万达广场店)</p></van-col>
            <van-col span="5"><p style="color:#999">支付超时</p></van-col>
          </van-row>
          <!-- 订单详情 -->
          <van-row class="orderDetails">
            <van-col span="7"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="16">
              <div>1间 大床房(折上9折)</div>
              <div>2020-03-19 - 2020-03-20</div>
              <div>总价：¥149.00</div>
            </van-col>
          </van-row>
          <!-- 按钮 -->
          <van-row>
            <van-col span="6" offset="18">
              <div class="btn">
                <van-button size="large" type="default" round @click="toOrderdet()">查看</van-button>
              </div>
            </van-col>
          </van-row>
        </div>
      </van-tab>
      <van-tab title="待付款">
        <!-- 广告轮播 -->
        <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <!-- 订单列表 -->
        <div class="orderList">
          <!-- 订单标题 -->
          <van-row class="orderTitle">
            <van-col span="2"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="17"><p style="font-weight: bold;">汉庭快捷酒店(万达广场店)</p></van-col>
            <van-col span="5"><p style="color:#999">支付超时</p></van-col>
          </van-row>
          <!-- 订单详情 -->
          <van-row class="orderDetails">
            <van-col span="7"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="16">
              <div>1间 大床房(折上9折)</div>
              <div>2020-03-19 - 2020-03-20</div>
              <div>总价：¥149.00</div>
            </van-col>
          </van-row>
          <!-- 按钮 -->
          <van-row>
            <van-col span="6" offset="18">
              <div class="btn">
                <van-button size="large" type="default" round @click="toOrderdet()">查看</van-button>
              </div>
            </van-col>
          </van-row>
        </div>
      </van-tab>
      <van-tab title="待使用">
        <!-- 广告轮播 -->
        <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <!-- 订单列表 -->
        <div class="orderList">
          <!-- 订单标题 -->
          <van-row class="orderTitle">
            <van-col span="2"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="17"><p style="font-weight: bold;">汉庭快捷酒店(万达广场店)</p></van-col>
            <van-col span="5"><p style="color:#999">支付超时</p></van-col>
          </van-row>
          <!-- 订单详情 -->
          <van-row class="orderDetails">
            <van-col span="7"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="16">
              <div>1间 大床房(折上9折)</div>
              <div>2020-03-19 - 2020-03-20</div>
              <div>总价：¥149.00</div>
            </van-col>
          </van-row>
          <!-- 按钮 -->
          <van-row>
            <van-col span="6" offset="18">
              <div class="btn">
                <van-button size="large" type="default" round @click="toOrderdet()">查看</van-button>
              </div>
            </van-col>
          </van-row>
        </div>
      </van-tab>
      <van-tab title="退款/售后">
        <!-- 广告轮播 -->
        <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <!-- 订单列表 -->
        <div class="orderList">
          <!-- 订单标题 -->
          <van-row class="orderTitle">
            <van-col span="2"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="17"><p style="font-weight: bold;">汉庭快捷酒店(万达广场店)</p></van-col>
            <van-col span="5"><p style="color:#999">支付超时</p></van-col>
          </van-row>
          <!-- 订单详情 -->
          <van-row class="orderDetails">
            <van-col span="7"><img src="../assets/jiudian@2x.png" alt=""></van-col>
            <van-col span="16">
              <div>1间 大床房(折上9折)</div>
              <div>2020-03-19 - 2020-03-20</div>
              <div>总价：¥149.00</div>
            </van-col>
          </van-row>
          <!-- 按钮 -->
          <van-row>
            <van-col span="6" offset="18">
              <div class="btn">
                <van-button size="large" type="default" round @click="toOrderdet()">查看</van-button>
              </div>
            </van-col>
          </van-row>
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
export default {
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#eee')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', 'background:#fff')
  },
  data(){
    return {
      value: ''
    }
  },
  methods:{
    onClick(id, title) {
      console.log(title);
    },
    toOrderdet(){
      this.$router.push('/OrderDetails')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-search__content{
  background-color:#fff;
}
.my-swipe  {
  height: 6rem;width:90%;
  margin: 1rem auto;
  border-radius: 0.3rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.orderList{
  width:92%;
  /* height:200px; */
  margin: 0.7rem auto;
  padding: 0.8rem;
  /* border: 1px solid #000; */
  border-radius: 0.5rem;
  box-sizing: border-box;
  background:#FFF;
}
.orderTitle{
  margin: 0 0 0.5rem 0;
  font-size: 0.8rem;
}
.orderTitle img{
  width:1rem;
  height:1rem;
}
.orderTitle p{
  margin: 0;
}
.orderDetails img{
  width:3.5rem;
  height:3.5rem;
}
.orderDetails div{
  color:#999;
  font-size: 0.75rem;
  margin: 0 0 0.3rem 0;
}
.buttom{
  height:3rem
}
.van-button{
  height:2rem;
  line-height: 2rem;
}
.btn{
  width:4rem;
  margin: 0 auto;
}
.btn .van-button{
  height:1.5rem;
  line-height: 1.5rem;
  font-size: 0.8rem;
  color: #999;
}
</style>
