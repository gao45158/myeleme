import Vue from 'vue'
import Router from 'vue-router'
import sellerView from '../components/seller/sellerView';
import goodsView from '../components/goods/goodsView';
import ratingsView from '../components/ratings/ratingsView';

Vue.use(Router)

var routes = [
  { path: '/seller', component: sellerView },
  { path: '/goods', component: goodsView },
  { path: '/ratings', component: ratingsView }
]

export default new Router({
  routes
})