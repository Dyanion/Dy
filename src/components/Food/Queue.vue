<template>
  <div class="all">
    <!-- 顶部返回 -->
    <van-nav-bar left-arrow :border="false" color="#fff" :title="title" @click-left="onClickLeft" />
    <!-- 分割线 -->
    <van-divider style="margin:0.5rem;border-color:#ccc"/>
    <!-- 题目 -->
    <van-row type="flex" align="center">
      <van-col span="2" offset="1">
        <img style="width:1.1rem;height:1.1rem;margin-top:0.2rem" src="../../assets/jiudian@2x.png" alt="">
      </van-col>
      <van-col span="21" style="font-size:1.1rem;font-weight:bold;">排队取号</van-col>
    </van-row>
    <!-- 列表 -->
    <div class="list">
      <!-- 分割线 -->
      <van-divider style="margin:0.3rem;border-color:transparent"/>
      <!-- 小桌 -->
      <van-row type="flex" justify="space-around" align="center">
        <van-col span="5">
          <div>小桌</div>
          <div class="pnum">1-2人</div>
        </van-col>
        <van-col span="9">
          <div class="queue">排队<span style="color:#F9434D">0</span>桌</div>
        </van-col>
        <van-col span="7">
          <div class="waitTime">不需等位</div>
        </van-col>
      </van-row>
      <!-- 分割线 -->
      <van-divider style="margin:0.3rem;border-color:#bbb"/>
      <!-- 中桌 -->
      <van-row type="flex" justify="space-around" align="center">
        <van-col span="5">
          <div>中桌</div>
          <div class="pnum">3-5人</div>
        </van-col>
        <van-col span="9">
          <div class="queue">排队<span style="color:#F9434D">1</span>桌</div>
        </van-col>
        <van-col span="7">
          <div class="waitTime">>30分钟</div>
        </van-col>
      </van-row>
      <!-- 分割线 -->
      <van-divider style="margin:0.3rem;border-color:#bbb"/>
      <!-- 大桌 -->
      <van-row type="flex" justify="space-around" align="center">
        <van-col span="5">
          <div>大桌</div>
          <div class="pnum">3-5人</div>
        </van-col>
        <van-col span="9">
          <div class="queue">排队<span style="color:#F9434D">0</span>桌</div>
        </van-col>
        <van-col span="7">
          <div class="waitTime">不需等位</div>
        </van-col>
      </van-row>
      <!-- 分割线 -->
      <van-divider style="margin:0.3rem;border-color:transparent"/>
    </div>
    <!-- 按钮 -->
    <div class="btn">
      <van-button type="default" size="large" color="linear-gradient(to right, #FFB900, #FE9706)" @click="show = true">立即取号</van-button>
    </div>
    <!-- 选择人数 -->
    <van-action-sheet v-model="show">
      <div class="content">
        <div class="number">选择用餐人数</div>
        <!-- 选择框 -->
        <div class="selectnum">
          <van-row type="flex" justify="space-around" @click="chooseRoom($event)">
            <van-col span="4" id="1" class="choosenum" :class="id==1? 'selnum' : ''">1</van-col>
            <van-col span="4" id="2" class="choosenum" :class="id==2? 'selnum' : ''">2</van-col>
            <van-col span="4" id="3" class="choosenum" :class="id==3? 'selnum' : ''">3</van-col>
            <van-col span="4" id="4" class="choosenum" :class="id==4? 'selnum' : ''">4</van-col>
          </van-row>
          <van-row type="flex" justify="space-around" @click="chooseRoom($event)">
            <van-col span="4" id="5" class="choosenum" :class="id==5? 'selnum' : ''">5</van-col>
            <van-col span="4" id="6" class="choosenum" :class="id==6? 'selnum' : ''">6</van-col>
            <van-col span="4" id="7" class="choosenum" :class="id==7? 'selnum' : ''">7</van-col>
            <van-col span="4" id="8" class="choosenum" :class="id==8? 'selnum' : ''">8</van-col>
          </van-row>
          <van-row type="flex" justify="space-around" @click="chooseRoom($event)">
            <van-col span="4" id="9" class="choosenum" :class="id==9? 'selnum' : ''">9</van-col>
            <van-col span="4" id="10" class="choosenum" :class="id==10? 'selnum' : ''">10</van-col>
            <van-col span="4" id="11" class="choosenum" :class="id==11? 'selnum' : ''">11</van-col>
            <van-col span="4" id="12" class="choosenum" :class="id==12? 'selnum' : ''">12</van-col>
          </van-row>
        </div>
        <!-- 按钮 -->
        <div class="button">
          <van-button type="default" size="large" color="linear-gradient(to right, #FFB900, #FE9706)" @click="selnumber()">确定</van-button>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title:'弄堂小管',
      show:false,
      id:1
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    chooseRoom(e){
      this.id=e.target.id
      this.$toast(this.id)
    },
    selnumber(){
      console.log(this.id)
      this.show=false
      this.$router.push('/QueueDetails')
    }
  }
}
</script> 
<style scoped>
.all{
  width:auto;
  padding: 0.5rem 0.8rem;
}
.van-nav-bar{
  background: transparent;
}
.van-nav-bar >>>.van-icon{
  color:#000
}
.list{
  width:92%;
  margin: 1rem auto;
  background: #F5F5F5;
  text-align: center;
  border-radius: 0.5rem;
}
.list .van-row{
  margin: 1rem 0;
}
.pnum{
  font-size: 0.75rem;
  color:#666666;
}
.queue{
  font-weight: bold;
}
.waitTime{
  color: #999;
}
.btn{
  width:92%;
  margin: 0 auto;
}
.van-button{
  height:2.5rem;
  line-height: 2.5rem;
  border-radius: 0.3rem;
}
.content{
  padding: 1rem;
}
.number{
  font-size: 0.9rem;
  font-weight: bold;
}
.choosenum{
  border-radius: 1.5rem;
  border: 1px solid #EEEEEE;
  text-align: center;
  background: #EEEEEE;
}
.selnum{
  border-radius: 1.5rem;
  border: 1px solid #FFB900;
  text-align: center;
  background: #FFB900;
  color: #fff;
}
.selectnum .van-row{
  margin: 0.5rem 0;
}
.button{
  width:100%;
  margin: 1rem 0;
}
</style>
