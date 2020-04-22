<template>
  <div>
    <!-- 顶部搜索 -->
    <div class="topSearch">
      <van-row>
        <van-col span="1" offset="1" @click="back()">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="21">
          <van-search v-model="value" shape="round" placeholder="酒店/地点/关键词" @search="onSearch">
            <template #label>
              <div @click="show = true">
                <div class="font-6px zhu">住 {{zhu}}</div>
                <div class="font-6px li">离 {{li}}</div>
              </div>
              <van-calendar v-model="show" color="#FFB900" type="range" @confirm="onConfirm" />
            </template>
          </van-search>
        </van-col>
      </van-row>
    </div>
    <!-- 筛选条件 -->
    <van-dropdown-menu active-color="#FFB900">
      <!-- 位置区域 -->
      <van-dropdown-item title="位置区域" v-model="address" ref="address">
        <van-tree-select :items="addresslist" :active-id.sync="addressId" :main-active-index.sync="addressIndex"/>
        <van-button type="default" @click="restHotel()">重置</van-button>
        <van-button type="default" color="#FFB900" @click="checkHotel()">查看酒店</van-button>
      </van-dropdown-item>
      <!-- 价格/星级 -->
      <van-dropdown-item title="价格/星级" v-model="star">
        <div class="star">
          <div class="moneytext">价格（每晚均价）</div>
          <div class="slidertext">
            <div>￥0</div>
            <div>￥2000+</div>
          </div>
          <vue-slider ref="slider" v-model="money" :max="2000" width="95%" :interval="100" tooltip='active' :enable-cross="false" :process-style="{ backgroundColor: '#FFB900' }" :tooltip-style="{ backgroundColor: '#FFB900', borderColor: '#FFB900' }"></vue-slider>
          <div class="startext">星级标准</div>
          <van-row type="flex" justify="space-between" @click="chooseStar($event)">
            <van-col span="5" id="1" :class="id==1? 'selectSatr' : ''">不限</van-col>
            <van-col span="5" id="2" :class="id==2? 'selectSatr' : ''">二星/经济</van-col>
            <van-col span="5" id="3" :class="id==3? 'selectSatr' : ''">三星/舒适</van-col>
            <van-col span="5" id="4" :class="id==4? 'selectSatr' : ''">四星/高档</van-col>
          </van-row>
          <van-row type="flex" justify="space-between" @click="chooseStar($event)">
            <van-col span="5" id="5" :class="id==5? 'selectSatr' : ''">五星/高档</van-col>
          </van-row>
        </div>
        <van-button type="default" @click="restStar()">重置</van-button>
        <van-button type="default" color="#FFB900" @click="checkStar()">查看酒店</van-button>
      </van-dropdown-item>
      <!-- 智能排序 -->
      <van-dropdown-item :title="sort" v-model="sort" :options="sortlist" @change="selsort()"/>
      <!-- 筛选 -->
      <van-dropdown-item title="筛选" v-model="screen" ref="screen">
        <van-tree-select :items="items" :active-id.sync="activeId" :main-active-index.sync="activeIndex"/>
        <van-button type="default" @click="restScreen()">重置</van-button>
        <van-button type="default" color="#FFB900" @click="checkScreen()">查看酒店</van-button>
      </van-dropdown-item>
    </van-dropdown-menu>
    <!-- 酒店列表 -->
    <div class="list" @click="toDetails()">
      <van-row>
        <van-col span="8">
          <img src="../../assets/img6.jpg" alt="">
        </van-col>
        <van-col span="15" offset="1">
          <!-- 标题 -->
          <p class="title">汉庭快捷酒店(万达广场店)</p>
          <!-- 评分 -->
          <div class="introduce">
            <div class="rate">
              <span>4.9</span>
              <span class="ratetext">超棒</span>
            </div>
            <div class="rateIntroduce">“价格划算房间大”</div>
          </div>
          <!-- 距离 -->
          <div class="space">距我直线1.2Km | 万达广场附近</div>
          <!-- tag和价钱 -->
          <van-row style="margin-top:0.5rem">
            <van-col span="16">
              <van-tag text-color="#62C5A6" color="#d9f6ee" style="margin-right:0.5rem">可自助入住</van-tag>
              <van-tag text-color="#4C96DB" color="#dee9f9">停车场</van-tag>
            </van-col>
            <van-col span="7">
              <div class="price">
                <span class="money1">￥</span>
                <span class="money2">149</span>
                <span class="money3">起</span>
              </div>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
    <div class="list">
      <van-row>
        <van-col span="8">
          <img src="../../assets/img6.jpg" alt="">
        </van-col>
        <van-col span="15" offset="1">
          <!-- 标题 -->
          <p class="title">汉庭快捷酒店(万达广场店)</p>
          <!-- 评分 -->
          <div class="introduce">
            <div class="rate">
              <span>4.9</span>
              <span class="ratetext">超棒</span>
            </div>
            <div class="rateIntroduce">“价格划算房间大”</div>
          </div>
          <!-- 距离 -->
          <div class="space">距我直线1.2Km | 万达广场附近</div>
          <!-- tag和价钱 -->
          <van-row style="margin-top:0.5rem">
            <van-col span="16">
              <van-tag text-color="#62C5A6" color="#d9f6ee" style="margin-right:0.5rem">可自助入住</van-tag>
              <van-tag text-color="#4C96DB" color="#dee9f9">停车场</van-tag>
            </van-col>
            <van-col span="7">
              <div class="price">
                <span class="money1">￥</span>
                <span class="money2">149</span>
                <span class="money3">起</span>
              </div>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
    <div class="list">
      <van-row>
        <van-col span="8">
          <img src="../../assets/img6.jpg" alt="">
        </van-col>
        <van-col span="15" offset="1">
          <!-- 标题 -->
          <p class="title">汉庭快捷酒店(万达广场店)</p>
          <!-- 评分 -->
          <div class="introduce">
            <div class="rate">
              <span>4.9</span>
              <span class="ratetext">超棒</span>
            </div>
            <div class="rateIntroduce">“价格划算房间大”</div>
          </div>
          <!-- 距离 -->
          <div class="space">距我直线1.2Km | 万达广场附近</div>
          <!-- tag和价钱 -->
          <van-row style="margin-top:0.5rem">
            <van-col span="16">
              <van-tag text-color="#62C5A6" color="#d9f6ee" style="margin-right:0.5rem">可自助入住</van-tag>
              <van-tag text-color="#4C96DB" color="#dee9f9">停车场</van-tag>
            </van-col>
            <van-col span="7">
              <div class="price">
                <span class="money1">￥</span>
                <span class="money2">149</span>
                <span class="money3">起</span>
              </div>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
    <div class="list">
      <van-row>
        <van-col span="8">
          <img src="../../assets/img6.jpg" alt="">
        </van-col>
        <van-col span="15" offset="1">
          <!-- 标题 -->
          <p class="title">汉庭快捷酒店(万达广场店)</p>
          <!-- 评分 -->
          <div class="introduce">
            <div class="rate">
              <span>4.9</span>
              <span class="ratetext">超棒</span>
            </div>
            <div class="rateIntroduce">“价格划算房间大”</div>
          </div>
          <!-- 距离 -->
          <div class="space">距我直线1.2Km | 万达广场附近</div>
          <!-- tag和价钱 -->
          <van-row style="margin-top:0.5rem">
            <van-col span="16">
              <van-tag text-color="#62C5A6" color="#d9f6ee" style="margin-right:0.5rem">可自助入住</van-tag>
              <van-tag text-color="#4C96DB" color="#dee9f9">停车场</van-tag>
            </van-col>
            <van-col span="7">
              <div class="price">
                <span class="money1">￥</span>
                <span class="money2">149</span>
                <span class="money3">起</span>
              </div>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
    <div style="width:5rem;height:5rem;background:#000"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      money: [0, 2000],
      id:1,
      address:'',
      star:'',
      sort:'智能排序',
      sortlist: [
        { text: '智能排序', value: '智能排序' },
        { text: '离我最近', value: '离我最近' },
        { text: '好评优先', value: '好评优先' },
        { text: '销量最高', value: '销量最高' },
        { text: '价格由低到高', value: '价格由低到高' },
        { text: '价格由高到低', value: '价格由高到低' }
      ],
      screen:'',
      value: '',
      date: '',
      zhu:'',
      li:'',
      show: false,
      activeId: 1,
      activeIndex: 0,
      items:[
        {
          // 导航名称
          text: '所有城市',
          // 导航节点额外类名
          className: 'my-class',
          // 该导航下所有的可选项
          children: [
            {
              text: '温州',
              // id，作为匹配选中状态的标识符
              id: 1
            },
            {
              text: '杭州',
              id: 2
            }
          ]
        }
      ],
      addressId: 1,
      addressIndex: 0,
      addresslist:[
        {
          text: '城市',
          // 导航节点额外类名
          className: 'my-class',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '温州',
              // id，作为匹配选中状态的标识符
              id: 1
            },
            {
              text: '杭州',
              id: 2
            }
          ]
        },
        {
          text: '所有城市',
          // 导航节点额外类名
          className: 'my-class',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '温州',
              // id，作为匹配选中状态的标识符
              id: 1
            },
            {
              text: '杭州',
              id: 2
            },
            {
              text: '杭州',
              id: 3
            },
            {
              text: '杭州',
              id: 4
            }
          ]
        },
      ]
    }
  },
  methods:{
    // 返回上一页
    back(){
      this.$router.go(-1)
    },
    // 顶部搜索
    onSearch(){
      console.log(this.value)
    },
    // 日历
    formatDate(date) {
      return `${date.getMonth() + 1}-${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
      this.zhu=this.formatDate(start)
      this.li=this.formatDate(end)
    },
    // 筛选位置
    checkHotel(){
      // id
      console.log(this.addressId)
      // 索引
      console.log(this.addressIndex)
      // 关闭
      this.$refs.address.toggle();
    },
    // 重置位置
    restHotel(){
      this.addressId=1
      this.addressIndex=0
    },
    // 价格区间
    chooseStar(e){
      this.id=e.target.id
    },
    // 选择星级
    checkStar(){
      this.money=this.$refs.slider.getValue()
      console.log(this.money)
      console.log(this.id)
    },
    // 重置星级
    restStar(){
      this.money=[0, 2000]
      this.id=1
    },
    // 选择筛选
    checkScreen(){
      // id
      console.log(this.activeId)
      // 索引
      console.log(this.activeIndex)
      // 关闭
      this.$refs.screen.toggle();
    },
    // 重置筛选
    restScreen(){
      this.activeId=1
      this.activeIndex=0
    },
    // 智能排序
    selsort(){
      console.log(this.sort)
    },
    toDetails(){
      this.$router.push("/HotelDetails")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topSearch{
  width:auto;
  height:4rem;
  border: 1px solid #fff;
  line-height: 4rem;
}
.font-6px{
  transform: scale(0.8);
  font-size: 0.75rem;
}
.zhu{
  margin-top: -0.3rem;
}
.li{
  margin-top: -1.2rem;
}
.van-search .van-cell{
  line-height:2rem
}
.van-tree-select__item--active{
  color:#FFB900
}
.van-sidebar-item--select{
  border-color:#FFB900
}
.van-dropdown-item .van-button{
  width:50%
}
.star{
  padding:1rem;
}
.star .van-col{
  background:#F4F4F4;
  text-align: center;
  height:2rem;
  line-height: 2rem;
  margin:0.5rem 0;
  font-size: 0.75rem;
}
.selectSatr{
  background:#fff0cf !important;
  color:#FFB900
}
.moneytext{
  font-size: 0.75rem;
  color:#999999
}
.slidertext{
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color:#999999
}
.startext{
  color:#999999;
  margin: 0.75rem 0;
}
.list{
  width:90%;
  margin: 0.9rem auto;
}
.list img{
  width:100%;
  height:8rem;
  border-radius: 0.5rem;
}
.title{
  margin: 0.2rem 0;
  font-size: 1rem;
  font-weight: bold;
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
.space{
  font-size: 0.7rem;
  line-height: 2rem;
  color:#666
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
