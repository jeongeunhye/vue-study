<template>
  <ul class="prod-list js-prod-grid type-col" v-if="items.length > 0">
    <li class="list-item" v-for="(item, idx) in items" :key="item.id">
      <!-- s : prod-item -->
      <span class="prod-item">
        <!-- s : img-box -->
        <span class="img-box" :class="{'sold-out': item.stockCnt === 0}">
          <img :src="require(`@/assets/images/${item.thumbnail[0]}`)" :alt=item.alt>
          <span class="rank" v-if="bestCntShow === true">{{idx+1}}</span>
          <span class="sold-out-msg" v-if="item.stockCnt === 0">일시품절</span>
          <button type="button" class="btn-wish" @click="wishOnOff"><span class="offscreen">찜하기</span></button>
        </span>
        <!-- e : img-box -->

        <!-- s : info-box -->
        <span class="info-box">
          <!-- s : 상품명 -->
          <span class="prod-name">
            <span class="tv-shopping" v-if="item.tvShoppingVal">TV 쇼핑</span>
            <span class="text"><span class="label" v-if="item.labelText">{{ item.labelText }}</span> {{item.prodTitle}}</span>
          </span>
          <!-- e : 상품명 -->

          <!-- s : 상품가 -->
          <span class="prod-price">
            <span class="discount-price">
              <span class="percent" v-if="item.discountPercent > 0">{{item.discountPercent}}%</span>
              <span class="price">
                <span class="val">{{ item.prodPrice - ((item.prodPrice*0.01) * item.discountPercent) | priceCommas}}</span>
                <span class="unit">원</span>
              </span>
            </span>
            <span class="price-normal" v-if="item.discountPercent > 0">
              <span class="val">{{item.prodPrice | priceCommas}}</span>
              <span class="unit">원</span>
            </span>
          </span>
          <!-- e : 상품가 -->

          <span class="prod-review" v-if="item.rating">
            <span class="star-rating">{{(item.rating.val).toFixed(1)}}</span>
            <span class="review-count">({{item.rating.reviewCnt | countMaxLengthChk | priceCommas}})</span>
          </span>

          <span class="prod-save" v-if="item.savePrice">
            <span class="save-text">앱적립금</span>
            <span class="save-price">
              <span class="val">{{item.savePrice | priceCommas}}</span>
              <span class="unit">원</span>
            </span>
          </span>

          <span class="prod-benefit" v-if="item.benefitVal.length > 0">
            <span class="item" v-for="(val, idx) in item.benefitVal" :key="idx">{{val}}</span>
          </span>

          <span class="prod-brand">
            <template v-for="list in brandList">
              <span class="brand-link" :key="list.id" v-if="item.brandId === list.id">{{list.title}}</span>
            </template>
          </span>
        </span>
        <!-- e : info-box -->

        <router-link :to="{ name: 'categoryDetail', query: { menuId: item.menuId, prodId: item.id }}" class="prod-link"><span class="offscreen">상품 바로가기</span></router-link>
      </span>
      <!-- e : prod-item -->
    </li>
  </ul>

  <div class="no-data" v-else>
    <i class="ico-nodata"></i>
    <span class="no-data-desc">상품 리스트가 없습니다.</span>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    props: {
      items: Array,
      bestCntShow: Boolean,
    },
    data() {
      return {
        bestNum: 0,
      }
    },
    filters:{
      priceCommas: function(price){
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      },
      countMaxLengthChk: function(cnt){
        if(parseInt(cnt) > 9999){
          return '9,999+';
        }else{
          return cnt;
        }
      },
    },
    computed: {
      ...mapState(['brandList']),
    },
    methods:{
      wishOnOff(e){
        if(e.currentTarget.classList.contains('is-active')){
          e.currentTarget.classList.remove('is-active');
        }else{
          e.currentTarget.classList.add('is-active');
        }
      },
    },
    mounted() {
    }
  }
</script>

