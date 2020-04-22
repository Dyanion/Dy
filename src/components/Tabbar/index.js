import tabbarComponent from './Tabbar.vue'
const tabbar={
  install:function(Vue){
    Vue.component('tabbar',tabbarComponent);
  }
};
export default tabbar