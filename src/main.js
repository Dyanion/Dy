import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import tabbar from './components/Tabbar/index'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

import {Button,Field,Col,Row,Swipe,SwipeItem,Tab,
  Tabs,Tag,Tabbar,TabbarItem,Cell, CellGroup,Calendar,
  ActionSheet,Icon,Stepper,Search,DropdownMenu, DropdownItem,
  NavBar,TreeSelect,Sidebar, SidebarItem, Rate , Collapse, CollapseItem,
  Checkbox,CheckboxGroup,Divider,GoodsAction, GoodsActionIcon, GoodsActionButton,
  RadioGroup, Radio, Popup
} from 'vant'

Vue.use(Button).use(Field).use(Col).use(Row).use(Swipe)
  .use(SwipeItem).use(Tab).use(Tabs).use(Tag).use(Tabbar)
  .use(TabbarItem).use(Cell).use(CellGroup).use(Calendar)
  .use(ActionSheet).use(Icon).use(Stepper).use(Search).use(DropdownMenu)
  .use(DropdownItem).use(NavBar).use(TreeSelect).use(Sidebar).use(SidebarItem)
  .use(Rate).use(Collapse).use(CollapseItem).use(Checkbox).use(CheckboxGroup).use(Divider)
  .use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(RadioGroup)
  .use(Radio).use(Popup)
  .use(tabbar)

Vue.component('VueSlider', VueSlider)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
