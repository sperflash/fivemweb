import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
const BiaoQian = resolve => require(['@/components/BiaoQian'], resolve);
const indexPage = resolve => require(['@/pages/indexPage'], resolve);
const leadPage = resolve => require(['@/pages/leadPage'], resolve);
const navBar = resolve => require(['@/components/navBar'], resolve);
const shouYe = resolve => require(['@/pages/shouYe'], resolve);
const hotel = resolve => require(['@/pages/hotel'], resolve);
const SignUp = resolve => require(['@/pages/SignUp'], resolve);
const Login = resolve => require(['@/pages/Login'], resolve);
const gongLue = resolve => require(['@/pages/gongLue'], resolve);
const contactUs = resolve => require(['@/pages/contactUs'], resolve);
const personCenter = resolve => require(['@/pages/personCenter'], resolve);
const detailPage = resolve => require(['@/pages/detailPage'], resolve);
const addPlan = resolve => require(['@/pages/addPlan'], resolve);
const wishPage = resolve => require(['@/pages/wishPage'], resolve);
const wishPageDetail = resolve => require(['@/pages/wishPageDetail'], resolve);
const editWishPageDetail = resolve => require(['@/pages/editWishPageDetail'], resolve);

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/navBar',
      name: 'navBar',
      component: navBar
    },
    {
      path: '/BiaoQian',
      name: 'BiaoQian',
      component: BiaoQian
    },
    {
      path: '/indexPage',
      name: 'indexPage',
      component: indexPage
    },
    {
      path: '/',
      name: 'leadPage',
      component: leadPage
    },
    {
      path: '/shouYe',
      name: 'shouYe',
      component: shouYe
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: hotel
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/gongLue',
      name: 'gongLue',
      component: gongLue
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    },
    {
      path: '/personCenter',
      name: 'personCenter',
      component: personCenter
    },
    {
      path: '/detailPage',
      name: 'detailPage',
      component: detailPage
    },
    {
      path: '/addPlan',
      name: 'addPlan',
      component: addPlan
    },
    {
      path: '/wishPage',
      name: 'wishPage',
      component: wishPage
    },
    {
      path: '/wishPageDetail',
      name: 'wishPageDetail',
      component: wishPageDetail
    },
    {
      path: '/editWishPageDetail',
      name: 'editWishPageDetail',
      component: editWishPageDetail
    },
  ]
})
