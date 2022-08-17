<template>
  <div class="prod-detail-wrap">
    <!-- s: prd-detail-head -->
    <div class="prd-detail-head js-detail-head">

      <!-- s: 상세 썸네일 -->
      <div class="col-detail-head thumb">
        <!-- s : 상품상세 이미지 배너 -->
        <swiper ref="prodBannerSwiper" class="prod-detail-banner" :options="optProdBanner">
          <swiper-slide class="list-item" v-for="(item, idx) in prodItem.thumbnail" :key="idx">
              <img :src="require(`@/assets/images/${item}`)" :alt=prodItem.alt[idx]>
          </swiper-slide>
        </swiper>
        <!-- e : 상품상세 이미지 배너 -->
        <!-- s : 상품상세 이미지 썸네일 -->
        <div class="prod-detail-thumbs-wrap">
          <swiper ref="prodThumbSwiper" class="prod-detail-thumbs" :options="optProdThumb">
            <swiper-slide class="list-item" v-for="(item, idx) in prodItem.thumbnail" :key="idx">
              <button type="button" class="btn-thumbs" @click="swiperGallery">
                <img :src="require(`@/assets/images/${item}`)" :alt=prodItem.alt[idx]>
              </button>
            </swiper-slide>
          </swiper>
          <button type="button" class="swiper-button-prev"></button>
          <button type="button" class="swiper-button-next"></button>
        </div>
        <!-- e : 상품상세 이미지 썸네일 -->
      </div>
      <!-- e: 상세 썸네일 -->

      <!-- s: 상세 정보 -->
      <div class="col-detail-head">

        <!-- s : 상품기본 노출정보 -->
        <div class="prod-detail-info">
          <!-- s: 리뷰  -->
          <!-- DESC :: 리뷰 없을 경우 해당 영역 삭제 -->
          <div class="review-rating-box">
            <div class="rating-stars">
              <div class="empty-stars">
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
              </div>
              <div class="filled-stars" :style="{width: ratingFilledStars}">
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
              </div>
            </div>
            <span class="rating-val">{{(prodItem.rating.val).toFixed(1)}}</span>
            <span class="review-count">({{prodItem.rating.reviewCnt | countMaxLengthChk | priceCommas}})</span>
          </div>
          <!-- s: 리뷰 -->

          <h2 class="prod-name">
            <span class="tv-shopping" v-if="prodItem.tvShoppingVal">TV쇼핑</span>
            <span class="label" v-if="prodItem.labelText">{{prodItem.labelText}}</span>
            <span class="text">{{prodItem.prodTitle}}</span>
          </h2>

          <div class="prod-price">
            <div class="price-info">
              <!-- S : TYPE1. 할인 없는 경우 -->
              <div class="price-normal" v-if="prodItem.discountPercent === 0">
                  <span class="val">{{prodItem.prodPrice | priceCommas}}</span>
                  <span class="unit">원</span>
              </div>
              <!-- E : TYPE1. 할인 없는 경우 -->

              <!-- S : TYPE2. 할인 있는 경우 -->
              <template v-else>
                <div class="discount-price ui-tooltip-wrap js-tooltip" data-role="dropdown">
                  <span class="percent">
                    <span class="val">{{prodItem.discountPercent}}</span>
                    <span class="unit">%</span>
                  </span>
                  <span class="price">
                    <span class="val">{{ discountPrice | priceCommas}}</span>
                    <span class="unit">원</span>
                  </span>
                  <button type="button" class="btn-guide js-btn"><span class="offscreen">혜택 확인하기</span></button>
                  <!-- s: 혜택 확인하기 -->
                  <div class="cont-tooltip js-cont">
                    <div class="tooltip-head">
                      <h1 class="tooltip-title">혜택 확인하기</h1>
                      <button type="button" class="btn-close"><span class="offscreen">닫기</span></button>
                    </div>
                    <div class="tooltip-body">
                      <ul class="ord-benefit-list">
                        <li class="ord-benefit-item">
                          <div class="list-title">
                            <span class="title">상품금액</span>
                            <span class="val normal">50,000원</span>
                          </div>

                          <ul class="discount-list">
                            <li class="item">
                              <span class="type">상품할인</span>
                              <span class="val">- 300원</span>
                            </li>
                            <li class="item">
                              <span class="type">모바일 주문 할인</span>
                              <span class="val">- 1,500원</span>
                            </li>
                            <li class="item">
                              <span class="type">쿠폰 할인</span>
                              <span class="val">- 1,000원</span>
                            </li>
                            <li class="item">
                              <span class="type">일시불 할인</span>
                              <span class="val">- 500원</span>
                            </li>
                          </ul>
                        </li>
                        <li class="ord-benefit-item">
                          <div class="list-title">
                            <span class="title">예상 결제 금액</span>
                            <span class="val">45,766원</span>
                          </div>
                        </li>
                        <li class="ord-benefit-item">
                          <div class="list-title">
                            <span class="title">청구할인가<span class="card-benefit">NH카드 2%</span></span>
                            <span class="val">45,766원</span>
                          </div>

                          <ul class="save-list">
                            <li class="item">
                              <span class="type">모바일앱 10% 적립</span>
                              <span class="val">150원</span>
                            </li>
                            <li class="item">
                              <span class="type">상품 적립금</span>
                              <span class="val">300원</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- e: 혜택 확인하기 -->
                </div>
                <div class="price-normal">
                  <span class="val">{{prodItem.prodPrice | priceCommas}}</span>
                  <span class="unit">원</span>
                </div>
              </template>
              <!-- E : TYPE2. 할인 있는 경우 -->
            </div>

            <!-- DESC : 팝업 06_product/06_product__00_layer_popup.html 참고 -->
            <button type="button" class="btn-coupon-download"><span class="text">쿠폰받기</span><i class="ico-coupon-download-sm"></i></button>
          </div>

          <div class="prod-info-bottom">
            <div class="badge-relay">릴레이팍팍</div>
            <div class="prod-save">
              <span class="save-text">앱적립금</span>
              <span class="save-price">
                <span class="val">{{prodItem.savePrice | priceCommas}}</span>
                <span class="unit">원</span>
              </span>
            </div>

            <div class="prod-detail-btn">
              <button type="button" class="btn-wish" @click="wishOnOff"><span class="offscreen">찜하기</span></button>
              <div class="sns-share-wrap js-sns-share">
                <button type="button" class="btn-share"><span class="offscreen">SNS 공유</span></button>
              </div>
            </div>
          </div>
        </div>
        <!-- e : 상품기본 노출정보 -->

        <div class="prod-opt-wrap">
          <div class="prod-opt-selected">
            <!-- s: option-box -->
            <div class="option-box">
              <div class="prod-name">
                <span class="tv-shopping" v-if="prodItem.tvShoppingVal">TV쇼핑</span>
                <span class="text"><span class="label" v-if="prodItem.labelText">{{prodItem.labelText}}</span> {{prodItem.prodTitle}}</span>
              </div>
              <div class="option-info">
                <number-count :disabledVal="prodItem.stockCnt === 0"></number-count>
                <div class="price">
                  <span class="val" v-if="prodItem.discountPercent === 0">{{ prodItem.prodPrice | priceCommas }}</span>
                  <span class="val" v-else>{{ discountPrice | priceCommas }}</span>
                  <span class="unit">원</span>
                </div>
              </div>
            </div>
            <!-- e: option-box -->
          </div>
        </div>

        <div class="prod-total-wrap">
          <div class="total-count">
            총 <span class="val">{{totalProdCnt}}</span>개
          </div>
          <div class="total-price">
            <span class="val">{{ totalPrice | priceCommas }}</span>
            <span class="unit">원</span>
          </div>
        </div>

        <!-- S : case2. 일시품절 -->
        <div class="sold-out-msg" v-if="prodItem.stockCnt === 0">일시품절</div>
        <!-- E : case2. 일시품절 -->

        <!-- S : case1. 기본 -->
        <div class="btn-wrap even" v-else>
          <router-link :to="{ name: 'ordCart', params: { brandId: prodItem.brandId, prodId: prodItem.id, cnt: parseInt(totalProdCnt) }}" class="btn-lg btn-lnspot">장바구니</router-link>
          <router-link to="/order/form" class="btn-lg btn-spot">구매하기</router-link>
        </div>
        <!-- E : case1. 기본 -->
      </div>
      <!-- e: 상세 정보 -->
    </div>
    <!-- e: prd-detail-head -->
  </div>
</template>

<script>
  import Vue from 'vue'
  import {mapState} from 'vuex';

  import VueAwesomeSwiper from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  Vue.use(VueAwesomeSwiper);
  import {Swiper,SwiperSlide} from 'vue-awesome-swiper'

  import NumberCount from '@/components/NumberCount'

  export default {
    data() {
      return {
        prodItem: [],

        // 상품 swiper
        optProdBanner:{
          init: false,
          slidesPerView: 1,
          observer: true,
          observeParents: true,
          speed: 500,
          touchRatio: 0,//드래그 금지
          effect: "fade",
          lazyLoading: true,
        },

        // 상품 썸네일 swiper
        optProdThumb:{
          init: false,
          slidesPerView: 'auto',
          observer: true,
          observeParents: true,
          speed: 250,
          navigation: {
            nextEl: '.prod-detail-thumbs-wrap .swiper-button-next',
            prevEl: '.prod-detail-thumbs-wrap .swiper-button-prev',
          },
        },
      }
    },
    filters:{
      // 금액 천단위 콤마 입력
      priceCommas: function(price){
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      },

      // 구매 카운트 9999이상인경우 9,999+ 표기
      countMaxLengthChk: function(cnt){
        if(parseInt(cnt) > 9999){
          return '9,999+';
        }else{
          return cnt;
        }
      },
    },
    computed:{
      ...mapState(['prodList', 'test']),
      prodBannerSwiper() {
        return this.$refs.prodBannerSwiper.$swiper;
      },
      prodThumbSwiper() {
        return this.$refs.prodThumbSwiper.$swiper;
      },
      ratingFilledStars(){
        return (this.prodItem.rating.val)*20+'%';
      },
      totalProdCnt(){
        return this.$store.state.spinnerIpVal;
      },
      discountPrice(){
        return this.prodItem.prodPrice - ((this.prodItem.prodPrice*0.01) * this.prodItem.discountPercent);
      },
      totalPrice(){
        if(this.prodItem.discountPercent === 0){
          return this.$store.state.spinnerIpVal * this.prodItem.prodPrice;
        }else{
          return this.$store.state.spinnerIpVal * this.discountPrice;
        }
      },
    },
    components: {
      Swiper,
      SwiperSlide,
      NumberCount,
    },
    methods:{
      // 선택한 상품 정보 query로 받아옴
      prodInfo () {
        const prodItemId = this.$route.query.prodId;

        for(let i=0; i<this.prodList.length; i++){
          if(this.prodList[i].id === prodItemId){
            this.prodItem = this.prodList[i];
          }
        }
      },

      // 상품 swiper init
      prodBannerSwiperInit() {
        const swiperEl = document.getElementsByClassName('prod-detail-banner')[0];
        if(swiperEl.childNodes[0].childNodes.length > 1){
          this.prodBannerSwiper.init();
        }
      },

      // 상품 썸네일 swiper init
      prodThumbSwiperInit() {
        const swiperEl = document.getElementsByClassName('prod-detail-thumbs')[0];
        if(swiperEl.childNodes[0].childNodes.length > 5){
          swiperEl.parentNode.classList.add('is-swiper');
          this.prodThumbSwiper.init();
        }

        swiperEl.childNodes[0].childNodes[0].classList.add('is-active');
      },

      // 썸네일 swiper 클릭 시, 상품 swiper 동일 idx 로 이동
      swiperGallery(e){
        const thumbSwiperEl = document.getElementsByClassName('prod-detail-thumbs')[0];
        let activeIdx;
        for(let i=0; i<thumbSwiperEl.childNodes[0].childNodes.length; i++){
          thumbSwiperEl.childNodes[0].childNodes[i].classList.remove('is-active');
          if(e.currentTarget.parentNode === thumbSwiperEl.childNodes[0].childNodes[i]) activeIdx = i;
        }
        e.currentTarget.parentNode.classList.add('is-active');

        this.prodBannerSwiper.slideTo(activeIdx);
      },

      // 찜하기버튼 OnOff
      wishOnOff(e){
        if(e.currentTarget.classList.contains('is-active')){
          e.currentTarget.classList.remove('is-active');
        }else{
          e.currentTarget.classList.add('is-active');
        }
      },


    },
    created () {
      this.prodInfo();
    },
    mounted() {
      this.prodBannerSwiperInit();
      this.prodThumbSwiperInit();
    },
  };
</script>