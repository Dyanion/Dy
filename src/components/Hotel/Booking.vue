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
      <!-- 入住时间 -->
      <div class="dateTime">
        <van-cell is-link center @click="show1 = true">
          <template #title>
            <van-row type="flex" align="center">
              <van-col span="20">
                <div class="date">3月18日(今天)-3月20日(明天)</div>
              </van-col>
              <van-col span="4"><div class="map">详情</div></van-col>
            </van-row>
          </template>
        </van-cell>
        <!-- 订房详情 -->
        <van-action-sheet v-model="show1">
          <div>
            <!-- 轮播 -->
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
              <van-swipe-item>1</van-swipe-item>
              <van-swipe-item>2</van-swipe-item>
              <van-swipe-item>3</van-swipe-item>
              <van-swipe-item>4</van-swipe-item>
            </van-swipe>
            <!-- 内容 -->
            <div class="content">
              <!-- 面积 -->
              <van-row>
                <van-col span="12">
                  <div class="contitle">面积</div>
                  <div class="condetails">30m²</div>
                </van-col>
                <van-col span="12">
                  <div class="contitle">可住</div>
                  <div class="condetails">2人</div>
                </van-col>
              </van-row>
              <!-- 楼层 -->
              <van-row>
                <van-col span="12">
                  <div class="contitle">楼层</div>
                  <div class="condetails">22层</div>
                </van-col>
                <van-col span="12">
                  <div class="contitle">床型</div>
                  <div class="condetails">1张大床1.8m</div>
                </van-col>
              </van-row>
              <!-- 宽带 -->
              <van-row>
                <van-col span="12">
                  <div class="contitle">宽带</div>
                  <div class="condetails">全部房间WIFI免费</div>
                </van-col>
                <van-col span="12">
                  <div class="contitle">窗户</div>
                  <div class="condetails">有窗</div>
                </van-col>
              </van-row>
              <!-- 使用规则 -->
              <div class="condetails">使用规则</div>
              <div class="ruletext">直接消费，携带所有人身份证办理入住，入住必 须按照一人一证</div>
              <div class="ruletext">请在12:00之后入住并于次日12:00之前退房；如 需提前入住或延期是退房，请咨询商家</div>
            </div>
          </div>
        </van-action-sheet>
      </div>
      <!-- tag -->
      <van-tag text-color="#FFB900" color="#fff0cf" style="margin-right:0.5rem">共住一晚</van-tag>
      <!-- 房型 -->
      <div class="roomtype">
        <van-cell title="标准大床房" label="两人入住 | 含早餐 | 大床 | 有窗" />
      </div>
      <!-- 订房必读 -->
      <div class="readroom">
        <van-cell is-link center @click="show2 = true">
          <template #title>
            <van-row type="flex" align="center">
              <van-col span="19">
                <div class="date">3月19日 <span style="color:#F00">18:00</span> 前可免费取消</div>
              </van-col>
              <van-col span="5"><div class="map">订房必读</div></van-col>
            </van-row>
          </template>
        </van-cell>
        <van-action-sheet title="订房必读" v-model="show2">
          <div class="mustread">
            <!-- 取消政策 -->
            <van-row>
              <van-col span="2">•</van-col>
              <van-col span="22">
                <div class="readtitle">取消政策</div>
                <div class="readtext">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quos iste dolorem. Similique temporibus voluptatum adipisci quos deserunt iusto consequatur quae maxime at porro quo nisi molestias, corrupti dolores nihil.</div>
              </van-col>
            </van-row>
            <!-- 入住限制 -->
            <van-row>
              <van-col span="2">•</van-col>
              <van-col span="22">
                <div class="readtitle">入住限制</div>
                <div class="readtext">Lorem ipsum dolor, sit amtetur adipisicing elit.</div>
              </van-col>
            </van-row>
            <!-- 宠物 -->
            <van-row>
              <van-col span="2">•</van-col>
              <van-col span="22">
                <div class="readtitle">宠物</div>
                <div class="readtext">Lorem ipsum dolor, sit amdipisicing elit.</div>
              </van-col>
            </van-row>
            <!-- 预订提示 -->
            <van-row>
              <van-col span="2">•</van-col>
              <van-col span="22">
                <div class="readtitle">预订提示</div>
                <div class="readtext">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
              </van-col>
            </van-row>
            <!-- 膳食安排 -->
            <van-row>
              <van-col span="2">•</van-col>
              <van-col span="22">
                <div class="readtitle">膳食安排</div>
                <div class="readtext">Lorem ipsum dolor</div>
              </van-col>
            </van-row>
            <!-- 入离时间 -->
            <van-row>
              <van-col span="2">•</van-col>
              <van-col span="22">
                <div class="readtitle">入离时间</div>
                <div class="readtext">Lorem ipsum doladipisicing elit.</div>
              </van-col>
            </van-row>
          </div>
        </van-action-sheet>
      </div>
    </div>
    <!-- 入住信息 -->
    <div class="roominfo">
      <!-- 入住信息 -->
      <van-cell>
        <template #title>
          <div style="font-size:1rem;font-weight:bold">入住信息</div>
        </template>
      </van-cell>
      <!-- 房间数 -->
      <van-collapse v-model="activeNames">
        <van-collapse-item name="1">
          <template #title>
            <van-row>
              <van-col span="8"><div style="color:#666666">房间数</div></van-col>
              <van-col span="16"><span>{{id}}间 </span><span style="color:#999">每间最多住2人</span></van-col>
            </van-row>
          </template>
          <div class="selectroom">
            <van-row type="flex" justify="space-between" @click="chooseRoom($event)">
              <van-col span="4" id="1" class="roomnum" :class="id==1? 'selroom' : ''">1</van-col>
              <van-col span="4" id="2" class="roomnum" :class="id==2? 'selroom' : ''">2</van-col>
              <van-col span="4" id="3" class="roomnum" :class="id==3? 'selroom' : ''">3</van-col>
              <van-col span="4" id="4" class="roomnum" :class="id==4? 'selroom' : ''">4</van-col>
              <van-col span="4" id="5" class="roomnum" :class="id==5? 'selroom' : ''">5</van-col>
            </van-row>
            <van-row type="flex" justify="space-between" @click="chooseRoom($event)">
              <van-col span="4" id="6" class="roomnum" :class="id==6? 'selroom' : ''">6</van-col>
              <van-col span="4" id="7" class="roomnum" :class="id==7? 'selroom' : ''">7</van-col>
              <van-col span="4" id="8" class="roomnum" :class="id==8? 'selroom' : ''">8</van-col>
              <van-col span="4" id="9" class="roomnum" :class="id==9? 'selroom' : ''">9</van-col>
              <van-col span="4" id="10" class="roomnum" :class="id==10? 'selroom' : ''">10</van-col>
            </van-row>
          </div>
        </van-collapse-item>
      </van-collapse>
      <!-- 入住人 -->
      <van-cell-group>
        <van-field v-model="liveman" label="入住人" placeholder="填写实际住人姓名" @input="livemanval()"/>
        <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号码" @input="telval()"/>
      </van-cell-group>
      <!-- 到店时间 -->
      <div class="toShop">
        <van-row type="flex" align="center">
          <van-col span="7" style="color:#323233;font-size:0.9rem">到店时间</van-col>
          <van-col span="17">
            <div style="font-size:0.8rem">14:00后办理入住</div>
            <div style="font-size:0.8rem;color:#999999">酒店将为您保留房间</div>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- 更多服务 -->
    <div class="more">
      <van-cell>
        <template #title>
          <div style="font-size:1rem;font-weight:bold">更多服务</div>
        </template>
      </van-cell>
      <!-- 凭证 -->
      <div class="certificate">
        <van-row type="flex" align="center">
          <van-col span="7" style="color:#323233;font-size:0.9rem">报销凭证</van-col>
          <van-col span="15" style="font-size:0.8rem">酒店前台索取</van-col>
          <van-col span="2"><van-icon name="phone-o" color="#FFB800"/></van-col>
        </van-row>
      </div>
    </div>
    <!-- 同意协议 -->
    <div class="protocol">
      <van-checkbox v-model="checked" icon-size="15px" checked-color="#FFB900" @change="check()"><div style="color:#666;font-size:0.8rem">阅读并同意以下协议</div></van-checkbox>
      <van-row>
        <van-col span="1"><van-icon name="clock-o" color="#FFB800" style="margin-top: 0.2rem;"/></van-col>
        <van-col span="23">
          <div style="color:#666;font-size:0.8rem;margin-left:0.45rem;margin-top: 0.2rem;">入离时间</div>
          <div class="leave">14:00后办理入住：早到店可能需要等待。</div>
          <div class="leave">12:00前办理退房：续住及行李寄存请联系酒店前台</div>
        </van-col>
      </van-row>
    </div>
    <!-- 底部空白 -->
    <div style="height:5rem;"></div>
    <!-- 底部提交按钮 -->
    <div class="bottom">
      <van-row type="flex" align="center">
        <!-- 总价格 -->
        <van-col span="8"><div style="color:#FF565C;font-weight:bold">￥125</div></van-col>
        <!-- 费用明细 -->
        <van-col span="8">
          <van-dropdown-menu direction="up" active-color="#FFB900">
            <van-dropdown-item title="费用明细">
              <div class="cost">
                <!-- 明细 -->
                <van-cell center>
                  <template #title>
                    <div style="font-size:1rem;font-weight:bold">费用明细</div>
                  </template>
                </van-cell>
                <!-- 房费 -->
                <van-cell title="房费" label="2020-03-20" center>
                  <template #default>
                    <div style="color:#FF565C">￥249</div>
                    <div>1*￥249</div>
                  </template>
                </van-cell>
                <!-- 优惠 -->
                <van-cell title="优惠" label="天天特价" center>
                  <template #default>
                    <div style="color:#FF565C">-￥124</div>
                    <div>-￥124</div>
                  </template>
                </van-cell>
                <!-- 总价 -->
                <van-cell title="总价" center>
                  <template #default>
                    <div style="color:#FF565C">￥125</div>
                  </template>
                </van-cell>
              </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </van-col>
        <!-- 提价按钮 -->
        <van-col span="8">
          <van-button round type="default" size="large" color="linear-gradient(to right, #FFB900, #FE9706)" @click="submit()">提交订单</van-button>
        </van-col>
      </van-row>
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
      activeNames: ['1'],
      id:1,
      liveman:'',
      tel:'',
      checked: true,
      show1:false,
      show2:false
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
    check(){
      console.log(this.checked)
    },
    livemanval(){
      console.log(this.liveman)
    },
    telval(){
      console.log(this.tel)
    },
    submit(){
      if(this.liveman=='' && this.tel==''){
        alert('入住人和电话不能为空！')
      }else{
        console.log(this.id)
        console.log(this.liveman)
        console.log(this.tel)
        console.log(this.checked)
        this.$router.push('/PayOrder')
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
  margin: -8rem auto 0 auto;
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
.readroom .van-cell{
  padding: 0.5rem 0 0 0;
}
.roominfo{
  width:90%;
  margin: 0.5rem auto 0 auto;
  background: #FFF;
  border-radius: 0.4rem;
  padding: 0.5rem 0 1rem 0;
  box-sizing: border-box;
}
.roominfo >>>.van-collapse-item__content{
  background-color: #F6F6F6;
  color: #000;
  padding: 0.3rem 1rem;
}
.roomnum{
  border-radius: 1.5rem;
  border: 1px solid #fff;
  text-align: center;
  background: #fff;
}
.selroom{
  border-radius: 1.5rem;
  border: 1px solid #FFB900;
  text-align: center;
  background: #fff;
  color: #FFB900;
}
.selectroom .van-row{
  margin: 0.5rem 0;
}
.toShop{
  padding:0.5rem 1rem 0.2rem 1rem
}
.more{
  width:90%;
  margin: 0.5rem auto 0 auto;
  background: #FFF;
  border-radius: 0.4rem;
  padding: 0.5rem 0;
  box-sizing: border-box;
}
.certificate{
  padding:0.5rem 1rem 0.2rem 1rem
}
.protocol{
  width:90%;
  margin: 0.5rem auto 0 auto;
}
.leave{
  color: #999999;
  font-size: 0.75rem;
  margin-left:0.45rem;
  margin-top: 0.2rem;
}
.bottom{
  width:95%;
  background: #fff;
  padding: 0.5rem 0.75rem;
  position: fixed;
  bottom:0
}
.van-button{
  height:2.5rem;
  line-height: 2.5rem;
}
.cost{
  width:auto;
  padding:0.5rem 1rem 0.2rem 1rem
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  width:100%
}
.content {
  padding:0.5rem 1rem 0.2rem 1.5rem;
  margin-bottom: 1rem;
}
.contitle{
  font-size: 0.75rem;
  color: #999999;
}
.condetails{
  font-weight: bold;
  font-size: 0.9rem;
}
.content .van-row{
  margin: 1rem 0;
}
.ruletext{
  color: #999999;
  font-size: 0.75rem;
  margin: 0.5rem 0;
}
.mustread{
  padding:0.5rem 1rem;
}
.mustread .van-row{
  margin:0.5rem 0;
}
.readtitle{
  font-size: 0.9rem;
  font-weight: bold;
}
.readtext{
  font-size: 0.75rem;
  color:#999
}
</style>
