import Vue from 'vue'
import Router from 'vue-router'
import  Index from '@/components/Index.vue'
import  Mine from '@/components/Mine.vue'
import  Order from '@/components/Order.vue'
import  OrderDetails from '@/components/Order/OrderDetails.vue'
import  Hotel from '@/components/Hotel/Hotel.vue'
import  HotelList from '@/components/Hotel/HotelList.vue'
import  HotelDetails from '@/components/Hotel/HotelDetails.vue'
import  Booking from '@/components/Hotel/Booking.vue'
import  PayOrder from '@/components/Hotel/PayOrder.vue'
import  Food from '@/components/Food/Food.vue'
import  FoodList from '@/components/Food/FoodList.vue'
import  Queue from '@/components/Food/Queue.vue'
import  QueueDetails from '@/components/Food/QueueDetails.vue'
import  Shop from '@/components/Food/Shop.vue'
import  ShopOrder from '@/components/Food/ShopOrder.vue'
import  CatFood from '@/components/Food/CatFood.vue'
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/Order',
      component: Order,
    },
    {
      path: '/OrderDetails',
      component: OrderDetails,
    },
    {
      path: '/Mine',
      component: Mine,
    },
    {
      path: '/Hotel',
      component: Hotel,
    },
    {
      path: '/HotelList',
      component: HotelList,
    },
    {
      path: '/HotelDetails',
      component: HotelDetails,
    },
    {
      path: '/Booking',
      component: Booking,
    },
    {
      path: '/PayOrder',
      component: PayOrder,
    },
    {
      path: '/Food',
      component: Food,
    },
    {
      path: '/FoodList',
      component: FoodList,
    },
    {
      path: '/Queue',
      component: Queue,
    },
    {
      path: '/QueueDetails',
      component: QueueDetails,
    },
    {
      path: '/Shop',
      component: Shop,
    },
    {
      path: '/ShopOrder',
      component: ShopOrder,
    },
    {
      path: '/CatFood',
      component: CatFood,
    }
  ]
})