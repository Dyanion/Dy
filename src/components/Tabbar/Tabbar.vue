<template>
  <div>
    <van-tabbar v-model="active" @change="Tabbar" active-color="#eec524" inactive-color="#000">
      <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o">订单</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active: 0
    }
  },
  methods:{
    Tabbar(){
      if(this.active==0){
        this.$router.push({
          path: '/',
          replace: true
        })
      }else if(this.active==1){
        this.$router.push({
          path: '/Order',
          replace: true
        })
      }else{
        this.$router.push({
          path: '/Mine',
          replace: true
        })
      }
    }
  },
  mounted () {
    // 判断当前页面是否为home或newpersonal页面
    const CURRENTTABBAR = window.location.hash.split('/')[1]
    if (CURRENTTABBAR == 'Mine') {
      this.active = 2
    } else if (CURRENTTABBAR == 'Order') {
      this.active = 1
    } else {
      this.active = 0
    }
  }
}
</script>


<style>
</style>
