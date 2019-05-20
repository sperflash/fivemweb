// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAMap from 'vue-amap';
import { lazyAMapApiLoaderInstance } from 'vue-amap';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload';
import './assets/styles/icon/iconfont.css'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
// Vue.use(iView);
// router.beforeEach((to, from, next) => {
//   iView.LoadingBar.start();
//   next();
// });

// router.afterEach(route => {
//   iView.LoadingBar.finish();
// });
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,   // 加载图片数量
  listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove']
})

Vue.use(ElementUI);

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'YOUR_KEY',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
  uiVersion: '1.0', // ui库版本，不配置不加载,
  v: '1.4.4'
});

lazyAMapApiLoaderInstance.load().then(() => {
  // your code ...
  this.map = new AMap.Map('amapContainer', {
    center: new AMap.LngLat(121.59996, 31.197646)
  });
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
