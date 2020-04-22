<template>
  <div class="all">
    <!-- 返回上一页 -->
    <van-nav-bar left-arrow :border="false" title="店铺详情" color="#fff" @click-left="onClickLeft" />
    <!-- 背景色 -->
    <div class="banner"></div>
    <!-- 标题 -->
    <div class="toptitle">
      <div class="toptext">蚝英雄-自助烧烤</div>
      <!-- 分割线 -->
      <van-divider style="margin:0.5rem 0;border-color:#eee"/>
      <!-- 列表 -->
      <div class="list" v-for="(item,index) in list" :key="index">
        <van-row type="flex" align="center">
          <van-col span="5"><img src="../../assets/img6.jpg" alt=""></van-col>
          <van-col span="12"><div>{{item.title}}</div></van-col>
          <van-col span="4"><div>×{{item.count}}</div></van-col>
          <van-col span="3"><div>¥{{item.price}}</div></van-col>
        </van-row>
      </div>
      <!-- 分割线 -->
      <van-divider style="margin:0.3rem 0;border-color:#eee"/>
      <!-- 优惠券 -->
      <div class="coupon">
        <van-cell @click="totick()">
          <template #title>
            <div class="coutitle">红包/优惠券</div>
          </template>
          <template #default>
            <van-tag text-color="#fff" color="#FF4E00">{{tickname}}</van-tag>
          </template>
        </van-cell>
        <!-- 遮罩层 -->
        <div class="aaa">
          <van-popup v-model="show2" :close-on-click-overlay="false">
            <!-- 确认框 -->
            <div class="confirm">
              <div class="conimg">
                <div><img src="../../assets/benmiao.png" alt=""></div>
              </div>
              <div class="context" :style="note2">踩猫粮可以获得更多优惠哦！</div>
              <div class="choose">
                <div @click="reject()">残忍拒绝</div>
                <div @click="toCatfood()" style="border:0;color:#FFB900">踩猫粮</div>
              </div>
            </div>
          </van-popup>
        </div>
        <!-- 优惠券 -->
        <van-action-sheet v-model="show1" title="选择优惠券" :close-on-click-overlay="false">
          <div class="content">
            <van-radio-group v-model="result">
              <van-cell-group>
                <van-cell v-for="(item, index) in tick" :key="index" clickable @click="result=item.id" >
                  <template #title>
                    <div class="tickcontent" :style="note1">
                      <div class="ticktext">
                        <van-row type="flex" align="center">
                          <van-col span="5" offset="2">￥<span style="font-size:2.1rem">{{item.num}}</span></van-col>
                          <van-col span="17">
                            <div style="font-weight:bold">{{item.name}}</div>
                            <div style="font-size:0.75rem">活动时间：{{item.starttime}}-{{item.endtime}}</div>
                          </van-col>
                        </van-row>
                      </div>
                    </div>
                  </template>
                  <template #right-icon>
                    <van-radio :name="item.id" checked-color="#51B85B"/>
                  </template>
                </van-cell>
              </van-cell-group>
            </van-radio-group>
            <div class="tickbtn">
              <van-button type="default" size="large" color="linear-gradient(to right, #FFB900, #FE9706)" @click="toUse()">去使用</van-button>
            </div>
          </div>
        </van-action-sheet>
      </div>
      <!-- 小计 -->
      <div class="subtotal">
        <van-cell>
          <template #title>
            <div class="sub">{{list.length}}种商品，共{{sum}}件</div>
          </template>
          <template #default>
            <div class="sub">
              小计 <span style="font-weight:bold;color:#F9434D">¥ </span>
              <span style="font-size:1rem;font-weight:bold;color:#F9434D">{{money}}</span>
            </div>
          </template>
        </van-cell>
      </div>
    </div>
    <!-- 空白 -->
    <div style="height:4rem"></div>
    <!-- 底部固定 -->
    <div class="bottom">
      <div class="left">
        <span>¥{{summoney}}</span>
        <span style="border-left:1px solid #999;margin:0"></span>
        <span style="font-size:0.8rem;font-weight:100;color:#999;">已优惠¥{{num}}</span>
      </div>
      <div class="bottombtn">
        <van-button type="default" size="large" color="linear-gradient(to right, #FFB900, #FE9706)" @click="toPay()">去支付</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      note1:{
        backgroundImage: "url(" + require("../../assets/coupon.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
      },
      note2:{
        backgroundImage: "url(" + require("../../assets/claw.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%"
      },
      list:[],
      sum:0,
      summoney:0,
      money:0,
      num:0,
      show1:false,
      show2:false,
      // checked:true,
      tick: [
        {
          id:1,
          name:'每满300减80',
          starttime:'4月12日',
          endtime:'4月15日',
          num:80
        },
        {
          id:2,
          name:'每满800减10',
          starttime:'3月1日',
          endtime:'4月30日',
          num:10
        },
        {
          id:3,
          name:'每满300减30',
          starttime:'1月12日',
          endtime:'12月15日',
          num:30
        }
      ],
      result:'',
      tickname:'使用优惠券'
    }
  },
  created(){
    this.list=this.$route.query.ids
    this.sum=this.$route.query.sum
    this.summoney=this.$route.query.summoney
    this.money=this.summoney
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    totick(){
      this.show1=true
      this.money=this.summoney
    },
    toUse(){
      if(this.result==''){
        alert('还未选择优惠券！')
      }else{
        console.log(this.result)
        for(var key in this.tick){
          if(this.tick[key].id==this.result){
            this.num=this.tick[key].num
            this.money-=this.tick[key].num
            this.tickname=this.tick[key].name
          }
        }
        this.show1=false
      }
    },
    toCatfood(){
      this.$router.push('/CatFood')
    },
    reject(){
      this.show2=false
    },
    toPay(){
      this.show2=true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all{
  overflow: hidden;
}
.van-nav-bar{
  background: transparent;
}
.van-nav-bar >>>.van-icon{
  color:#000
}
.banner{
  width:30rem;height:30rem;
  border-radius: 50%;
  background: linear-gradient(to right, #FF9000, #FFB900);
  margin: -22rem 0 0 -3rem;
}
.toptitle{
  width:90%;
  margin: -8rem auto 0 auto;
  background: #FFF;
  border: 1px solid #f5f5f5;
  border-radius: 0.4rem;
  box-sizing: border-box;
  padding: 1rem;
}
.toptext{
  font-weight: bold;
}
.list{
  font-size: 0.85rem;
  color: #333;
}
.list img{
  width:3rem;height:3rem;
  border-radius: 0.2rem;
}
.coupon .van-cell{
  padding: 0.5rem 0;
}
.coutitle{
  font-size: 0.9rem;
  color: #000;
  font-weight: bold;
}
.subtotal .van-cell{
  padding: 0.5rem 0;
}
.sub{
  font-size: 0.8rem;
  color: #000;
}
.content {
  padding: 1rem;
}
.ticket{
  width:100%;
}
.ticket .van-cell{
  padding: 0 !important;
}
.tickcontent{
  width:95%;height:5rem;
  margin-bottom: 0.3rem;
  position: relative;
}
.ticktext{
  width:100%;
  position: absolute;
  top:1.3rem;
  color: #FEDDC7;
}
.tickbtn{
  width:50%;
  margin: 0 auto;
}
.tickbtn .van-button{
  height:2rem;
  line-height: 2rem;
}
.bottom{
  width:100%;
  display: flex;
  position: fixed;;
  bottom:0
}
.bottombtn{
  width:30%;
}
.bottombtn .van-button{
  height:2.5rem;
  line-height: 2.5rem;
}
.left{
  width:70%;
  height:2.5rem;
  background: #333;
  line-height: 2.5rem;
}
.left span{
  margin: 0 1rem;
  color: #fff;
  font-weight: bold;
}
.aaa .van-popup{
  width:100%;height:100%;
  background:transparent
}
.confirm{
  width:15rem;
  margin: 50% auto;
  background: transparent;
}
.conimg{
  background: transparent;
}
.conimg div{
  width:30%;
  margin: 0 auto -1.15rem auto;
}
.conimg img{
  width:100%;height:100%
}
.van-popup--center{
  border-radius: 0.3rem;
  overflow: hidden;
}
.context{
  width:100%;height:70%;
  border-bottom: 1px solid #eee;
  text-align: center;
  line-height: 4.9rem;
  font-size: 0.8rem;
  background: #fff;
}
.choose{
  display: flex;
  height:30%;
  background:#fff
}
.choose div{
  width:50%;height:100%;
  border-right: 1px solid #eee;
  text-align: center;
  line-height: 2.1rem;
  font-size: 0.75rem;
  color: #333333;
}
</style>
