<template>
  <div class="all">
    <!-- 返回上一页 -->
    <van-nav-bar left-arrow :border="false" title="店铺详情" color="#fff" @click-left="onClickLeft" />
    <!-- 背景色 -->
    <div class="banner"></div>
    <!-- 标题 -->
    <div class="toptitle">
      <!-- 图片 -->
      <div class="image">
        <img src="../../assets/img6.jpg" alt="">
      </div>
      <!-- 文字内容 -->
      <div class="text">
        <!-- 题目 -->
        <van-row>
          <van-col span="20">
            <div class="textTitle">蚝英雄-自助烧烤</div>
            <!-- 评分 -->
            <div>
              <van-rate size="0.75rem" v-model="rate" allow-half void-icon="star" color="#F9434D" void-color="#eee" readonly/>
              <span style="font-size:0.75rem;color:#F9434D;margin-left:0.75rem">{{rate}}</span>
              <span style="font-size:0.75rem;color:#666666;margin-left:0.75rem">¥80/人</span>
            </div>
            <div style="font-size:0.75rem;color:#666"><van-icon name="location-o" style="margin-top:0.5rem"/>城西区力盟商业步行街西关大街</div>
          </van-col>
          <van-col span="4"><van-button round type="default" size="large" color="#FFB900">排队</van-button></van-col>
        </van-row>
        <!-- 分割线 -->
        <van-divider style="margin:0.5rem 0;border-color:#ccc"/>
        <!-- 营业状态 -->
        <van-row type="flex" align="center">
          <van-col span="22">
            <div style="font-size:0.85rem;color:#333">营业中 <span style="margin:0 0.5rem">11:00开始营业</span></div>
            <div class="tag">
              <van-tag text-color="#FF565E" color="#ffeeea">有包厢</van-tag>
              <van-tag text-color="#FF565E" color="#ffeeea">有大桌</van-tag>
              <van-tag text-color="#FF565E" color="#ffeeea">有WIFI</van-tag>
            </div>
          </van-col>
          <van-col span="2"><van-icon name="phone" color="#F9434D"/></van-col>
        </van-row>
      </div>
    </div>
    <!-- 分割条 -->
    <div style="width:100%;height:0.7rem;background:#F5F5F5"></div>
    <!-- 点菜 -->
    <van-tabs v-model="active" color="#FFB900" title-active-color="#FFB900">
      <van-tab title="点菜">
        <!-- 列表 -->
        <div class="list" v-for="(item,index) in list" :key="index">
          <van-row type="flex" align="center">
            <van-col span="7">
              <img style="width:100%;height:4rem;border-radius:0.2rem" src="../../assets/img6.jpg" alt="">
            </van-col>
            <van-col span="10" offset="1">
              <div class="listTitle">{{item.title}}</div>
              <div class="listPrice"><span style="font-weight:bold;color:#F9434D">￥{{item.price}}</span>/份</div>
            </van-col>
            <van-col span="6">
              <div class="stepper">
                <div @click="inc(index)"><img src="../../assets/减号.png" alt=""></div>
                <div>{{item.count}}</div>
                <div @click="add(index)"><img src="../../assets/加号.png" alt=""></div>
              </div>
            </van-col>
          </van-row>
        </div>
        <!-- 空白 -->
        <div style="height:3rem;"></div>
      </van-tab>
      <van-tab title="评价">
        <div class="evaluate">
          <!-- 评论第一层 -->
          <van-row>
            <van-col span="4">
              <div class="evaimage"><img src="../../assets/img6.jpg" alt=""></div>
            </van-col>
            <van-col span="17">
              <div class="evatitle">钓鱼要到岛上钓</div>
              <div class="evatime">3月19日</div>
            </van-col>
            <van-col span="3">
              <div class="ratestar">
                <van-icon name="star" />4.2
              </div>
            </van-col>
          </van-row>
          <!-- 评论第二层 -->
          <van-row>
            <van-col span="18" offset="4">
              <div class="evatitle">走过路过千万不要错过，爱吃海鲜的朋 友们一定要吃这家生蚝，不限时不限量 让你吃到满足。</div>
            </van-col>
          </van-row>
          <!-- 评论第三层 -->
          <van-row>
            <van-col span="18" offset="4">
              <div class="evaimg3">
                <van-row type="flex" justify="space-between">
                  <van-col span="7"><img src="../../assets/img6.jpg" alt=""></van-col>
                  <van-col span="7"><img src="../../assets/img6.jpg" alt=""></van-col>
                  <van-col span="7"><img src="../../assets/img6.jpg" alt=""></van-col>
                </van-row>
              </div>
            </van-col>
          </van-row>
          <!-- 评论第四层 -->
          <van-row>
            <van-col span="18" offset="4">
              <div class="eva4">商家回复：感谢对本店的认可。</div>
            </van-col>
          </van-row>
        </div>
        <!-- 空白 -->
        <div style="height:3rem;"></div>
      </van-tab>
    </van-tabs>
    <!-- 底部提交订单 -->
    <van-goods-action>
      <van-goods-action-icon style="margin-left:5%;margin-top:0.5rem" icon="cart-o" color="#FFB900" :badge="sum" />
      <div class="sum">总价￥{{summoney}}</div>
      <van-goods-action-button type="warning" color="#F9434D" text="去下单" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data(){
    return {
      rate:4.5,
      active: 0,
      value:'',
      list:[
        {
          id:1,
          title:"蒜蓉烤生蚝",
          price:23,
          count:0
        },
        {
          id:2,
          title:"烤生蚝",
          price:30,
          count:0
        },
        {
          id:3,
          title:"蒜蚝",
          price:16,
          count:0
        },
        {
          id:4,
          title:"蒜蓉",
          price:45,
          count:0
        }
      ]
    }
  },
  computed: {
    sum:function(){
      let sum=0;
      for(var i=0;i<this.list.length;i++){
        if(this.list[i].count!=0){
          sum+=this.list[i].count
        }
      }
      return sum
    },
    ids:function(){
      let ids=[]
      for(var i=0;i<this.list.length;i++){
        if(this.list[i].count!=0){
          ids.push(this.list[i])
        }
      }
      return ids
    },
    summoney:function(){
      let summoney=0;
      for(var j=0;j<this.list.length;j++){
        if(this.list[j].count!=0){
          summoney+=this.list[j].count*this.list[j].price
        }
      }
      return summoney
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickIcon() {
      console.log('点击图标');
    },
    onClickButton() {
      if(this.sum==0){
        alert("请先选择菜品！")
      }else{
        this.$router.push({path:'/ShopOrder',query:{ids:this.ids,sum:this.sum,summoney:this.summoney}})
      }
    },
    inc(e){
      if(this.list[e].count==0){
        this.list[e].count=0
      }else{
        this.list[e].count-=1
      }
    },
    add(e){
      this.list[e].count+=1
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
  border-radius: 0.4rem;
  box-sizing: border-box;
}
.toptitle .text{
  padding: 1rem;
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
.readroom .van-cell{
  padding: 0.5rem 0 0 0;
}
.image{
  width:100%;height:10rem;
  border-radius: 0.4rem;
  overflow: hidden;
}
.image img{
  width:100%;height:100%
}
.text .van-button{
  height:1.5rem;
  line-height: 1.5rem;
  font-size: 0.8rem;
}
.textTitle{
  font-size: 0.95rem;
  font-weight: bold;
}
.tag{
  margin: 0.4rem 0;
}
.tag .van-tag{
  margin-right: 0.3rem;
  font-size: 0.75rem;
}
.sum{
  width:40%;
  margin-left:5%;
  font-size: 0.9rem;
  color: #333;
}
.list{
  width:90%;
  margin: 0.5rem auto;
}
.stepper{
  display:flex
}
.stepper div{
  margin-right: 0.3rem;
}
.stepper img{
  width:1.5rem;
}
.listTitle{
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0.4rem 0;
}
.listPrice{
  font-size: 0.8rem;
  margin: 0.4rem 0;
  color: #999999;
}
.evaluate{
  width:90%;
  margin: 0.5rem auto;
}
.evaimage{
  width:2.5rem;height:2.5rem;
  border-radius: 50%;
  overflow: hidden;
}
.evaimage img{
  width:100%;height:100%;
}
.evatitle{
  font-size: 0.8rem;
  color:#333
}
.evatime{
  font-size: 0.75rem;
  color: #999999;
}
.ratestar{
  color: #F9434D;
  font-size: 0.8rem;
}
.evaimg3{
  margin: 1rem 0;
}
.evaimg3 img{
  width:100%;height:4.5rem
}
.eva4{
  width:100%;height:2rem;
  background: #F5F5F5;
  padding: 0 0.5rem;
  font-size: 0.8rem;
  line-height: 2rem;
  color: #666;
  box-sizing: border-box;
}
</style>
