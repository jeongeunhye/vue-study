<template>
  <div class="wrapper">
    <common-header></common-header>
    <div class="container-wrapper">
      <router-view></router-view>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import router from './router/router';
import {store} from './store/store';
import CommonFooter from './views/CommonFooter';
import CommonHeader from './views/CommonHeader';

export default {
  router,
  store,
  components: {
    CommonFooter,
    CommonHeader,
  },
  data(){
    return{

    }
  }
};
</script>

<style>
  @import 'assets/css/reset.css';
  @import 'assets/css/shoppingntmall.css';
</style>
