<template>
  <div class="all">
    <!-- 顶部返回 -->
    <van-nav-bar left-arrow :border="false" color="#fff" :title="title" @click-left="onClickLeft" />
    <!-- 筛选条件 -->
    <van-dropdown-menu active-color="#FFB900">
      <!-- 附近 -->
      <van-dropdown-item title="附近" v-model="address" ref="address">
        <van-tree-select :items="addresslist" :active-id.sync="addressId" :main-active-index.sync="addressIndex"/>
        <van-button type="default" @click="restHotel()">重置</van-button>
        <van-button type="default" color="#FFB900" @click="checkHotel()">完成</van-button>
      </van-dropdown-item>
      <!-- 智能排序 -->
      <van-dropdown-item :title="sort" v-model="sort" :options="sortlist" @change="selsort()"/>
      <!-- 筛选 -->
      <van-dropdown-item title="筛选" v-model="star">
        <div class="star">
          <div class="moneytext">人均价格</div>
          <div class="slidertext">
            <div>￥0</div>
            <div>￥200+</div>
          </div>
          <vue-slider ref="slider" v-model="money" :max="200" width="95%" :interval="10" tooltip='active' :enable-cross="false" :process-style="{ backgroundColor: '#FFB900' }" :tooltip-style="{ backgroundColor: '#FFB900', borderColor: '#FFB900' }"></vue-slider>
          <div class="startext">营业时间</div>
          <van-row type="flex" justify="space-between" @click="chooseTime($event)">
            <van-col span="5" id="1" :class="id==1? 'selectSatr' : ''">5-10时</van-col>
            <van-col span="5" id="2" :class="id==2? 'selectSatr' : ''">10-14时</van-col>
            <van-col span="5" id="3" :class="id==3? 'selectSatr' : ''">14-17时</van-col>
            <van-col span="5" id="4" :class="id==4? 'selectSatr' : ''">17-21时</van-col>
          </van-row>
          <van-row type="flex" justify="space-between" @click="chooseTime($event)">
            <van-col span="5" id="5" :class="id==5? 'selectSatr' : ''">21-24时</van-col>
            <van-col span="5" id="6" :class="id==6? 'selectSatr' : ''">0-5时</van-col>
            <van-col span="5" id="7" :class="id==7? 'selectSatr' : ''">今日营业</van-col>
            <van-col span="5" style="background:#fff"></van-col>
          </van-row>
          <div class="startext">用餐人数</div>
          <van-row type="flex" justify="space-between" @click="chooseNum($event)">
            <van-col span="5" id="1num" :class="pid=='1num'? 'selectSatr' : ''">单人餐</van-col>
            <van-col span="5" id="2num" :class="pid=='2num'? 'selectSatr' : ''">双人餐</van-col>
            <van-col span="5" id="3num" :class="pid=='3num'? 'selectSatr' : ''">3-4人餐</van-col>
            <van-col span="5" id="4num" :class="pid=='4num'? 'selectSatr' : ''">5-10人餐</van-col>
          </van-row>
          <van-row type="flex" justify="space-between" @click="chooseNum($event)">
            <van-col span="5" id="5num" :class="pid=='5num'? 'selectSatr' : ''">10人以上</van-col>
          </van-row>
        </div>
        <van-button type="default" @click="restStar()">重置</van-button>
        <van-button type="default" color="#FFB900" @click="checkStar()">完成</van-button>
      </van-dropdown-item>
    </van-dropdown-menu>
    <!-- 列表 -->
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
          <div class="queue"><div>排队</div></div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title:'',
      star:'',
      money: [0, 200],
      id:1,
      pid:"1num",
      sort:'智能排序',
      sortlist: [
        { text: '智能排序', value: '智能排序' },
        { text: '离我最近', value: '离我最近' },
        { text: '好评优先', value: '好评优先' },
        { text: '销量最高', value: '销量最高' },
        { text: '价格由低到高', value: '价格由低到高' },
        { text: '价格由高到低', value: '价格由高到低' }
      ],
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
      activeId: 1,
      activeIndex: 0,
      address:'',
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
  created(){
    console.log(this.$route.query.id)
    if(this.$route.query.id==1){
      this.title='火锅'
    }else if(this.$route.query.id==2){
      this.title='地方菜'
    }else if(this.$route.query.id==3){
      this.title='烧烤'
    }else if(this.$route.query.id==4){
      this.title='自助餐'
    }else{
      this.title='小吃'
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    // 重置位置
    restHotel(){
      this.addressId=1
      this.addressIndex=0
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
    // 时间区间
    chooseTime(e){
      if(e.target.id==''){
        this.id=1
      }else{
        this.id=e.target.id
      }
      console.log(this.id)
    },
    // 人数区间
    chooseNum(e){
      if(e.target.id==''){
        this.pid='1num'
      }else{
        this.pid=e.target.id
      }
      console.log(this.pid)
    },
    // 智能排序
    selsort(){
      console.log(this.sort)
    },
    // 选择筛选
    checkStar(){
      this.money=this.$refs.slider.getValue()
      console.log(this.money)
      console.log(this.id)
      console.log(this.pid)
    },
    // 重置筛选
    restStar(){
      this.money=[0, 200]
      this.id=1
      this.pid='1num'
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
.van-nav-bar{
  background: transparent;
}
.van-nav-bar >>>.van-icon{
  color:#000
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
  border-radius: 2.5rem;
  color: #333333;
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

</style>
