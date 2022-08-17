<template>
  <div class="main-contbox-wrap">
    <!-- S : 메인 -->
    <div class="contbox onair">
      <div class="sec">
        <!-- s: 카테고리 메뉴 -->
        <div class="category-allmenu-wrap">
          <!-- s: 카테고리 -->
          <div class="category-menu">
            <!-- s: 카테고리 1depth menu -->
            <ul class="menu-list dep-list">
              <li class="depth" v-for="value in allMenuList" :key="value.id">
                <router-link :to="{path: '/prod/list/'+value.id}" class="link" v-if="value.title==='브랜드 찾기'">
                  <span class="link-text">{{ value.title }}</span>
                </router-link>

                <router-link :to="{path: '/prod/list/'+value.id}" class="dep-link"
                             @mouseover.native="allMenuLayerOpen"
                             :data-content= value.id
                             v-else
                >
                  {{ value.title }}
                </router-link>
              </li>
            </ul>
            <!-- e: 카테고리 1depth menu -->
          </div>
          <!-- e: 카테고리 -->
        </div>
        <!-- e: 카테고리 메뉴 -->

        <div class="onair-program-wrap">
          <!-- s : onair-prod -->
          <div class="onair-prod">
            <!-- s : video-box -->
            <div class="video-box js-video-box">
              <div class="img-box">
                <img :src="require(`@/assets/images/${onairInfo.thumbnail}`)" :alt=onairInfo.alt>
              </div>
              <video id="video" class="video-tg video-js vjs-default-skin" controls></video>

              <button type="button" class="btn-video-play">
                <i class="ico-on-air"><span class="offscreen">ON AIR</span></i>
                <span class="offscreen">동영상 재생</span>
                <span class="tt-timer">{{onairInfo.timer}}</span>
              </button>
            </div>
            <!-- e : video-box -->

            <div class="program-box">
              <!-- s : info-box -->
              <div class="info-box">
                <div class="info-inner">
                  <!-- s : 상품명 -->
                  <div class="prod-name">
                    <span class="tv-shopping" v-if="onairInfo.tvShoppingVal">TV 쇼핑</span>
                    <span class="text"><span class="label" v-if="onairInfo.labelText.length > 1">{{ onairInfo.labelText }}</span> {{onairInfo.prodTitle}}</span>
                  </div>
                  <!-- e : 상품명 -->

                  <!-- s : 상품가 -->
                  <div class="prod-price">
                    <span class="val">{{onairInfo.prodPrice}}</span><span class="unit">원</span>
                  </div>
                  <!-- e : 상품가 -->
                </div>
                <div class="prod-btn">
                  <router-link :to="{path: '/prod/detail/'+onairInfo.id}" class="btn-lg btn-gray disabled" v-if="onairInfo.soldoutVal"><span class="text">일시품절</span></router-link>
                  <router-link :to="{path: '/prod/detail/'+onairInfo.id}" class="btn-lg btn-spot" v-else-if="onairInfo.consultingVal"><span class="text">상담 신청하기</span></router-link>
                  <router-link :to="{path: '/prod/detail/'+onairInfo.id}" class="btn-lg btn-spot" v-else><span class="text">구매하기</span></router-link>
                </div>
                <a href="#!" class="prod-link" onclick="javascript: alert('link')"><span class="offscreen">상품 바로가기</span></a> <!-- 상품상세 이동 버튼 -->
              </div>
              <!-- e : info-box -->
            </div>
          </div>
          <!-- e : onair-prod -->
          <!-- s: 연관상품 -->
          <div class="related-program-prod-wrap">
            <h3 class="related-prod-title">연관 상품 ({{relatedProdCnt}})</h3>

            <!-- s : related-prod-list -->
            <div class="related-prod-list outside-nav size-xsm">
              <swiper ref="relatedProdSwiper" class="related-prod" :options="optRelatedProd">
                <swiper-slide class="list-item" v-for="item in relatedProdList" :key="item.id">
                  <!-- s : prod-item -->
                  <span class="prod-item horizontal">
                    <!-- s : img-box -->
                    <span class="img-box size-xsm" :class="{'sold-out': item.soldoutVal}">
                      <img :src="require(`@/assets/images/${item.thumbnail}`)" :alt=item.alt>
                      <span class="sold-out-msg" v-if="item.soldoutVal">일시품절</span>
                    </span>
                    <!-- e : img-box -->

                    <!-- s : info-box -->
                    <span class="info-box">
                      <!-- s : 상품명 -->
                      <span class="prod-name">
                        <span class="text"><span class="label" v-if="item.labelText.length > 1">{{ item.labelText }}</span> {{item.prodTitle}}</span>
                      </span>
                      <!-- e : 상품명 -->

                      <!-- s : 상품가 -->
                      <span class="prod-price">
                        <span class="price-normal">
                          <span class="val">{{item.prodPrice}}</span>
                          <span class="unit">원</span>
                        </span>
                      </span>
                      <!-- e : 상품가 -->
                    </span>
                    <!-- e : info-box -->
                    <router-link :to="{path: '/prod/detail/'+item.id}" class="prod-link"><span class="offscreen">상품 바로가기</span></router-link>
                  </span>
                  <!-- e : prod-item -->
                </swiper-slide>
              </swiper>

              <!-- Add Arrows -->
              <button type="button" class="swiper-button-prev"></button>
              <button type="button" class="swiper-button-next"></button>
            </div>
            <!-- e : related-prod-list -->
          </div>
          <!-- e: 연관상품 -->
        </div>
        <div class="main-banner-wrap">
          <swiper ref="mainBannerSwiper" class="main-banner-swiper"
                  :options="optMainBanner"
                  @touchEnd="pauseSwiper('main-banner-wrap')"
          >
            <swiper-slide class="list-item" v-for="(item, idx) in mainBannerList" :key="idx">
              <router-link to="/" class="link-plan-banner">
                <img :src="require(`@/assets/images/${item.thumbnail}`)" :alt=item.alt>
              </router-link>
            </swiper-slide>
          </swiper>

          <div class="swiper-control-wrap">
            <button type="button" class="btn-control js-swiper-control" @click="swiperAutoplayControl('event-banner-wrap')">
              <i class="ico ico-swiper-control"><span class="offscreen">stop</span></i>
            </button>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- E : 메인 -->

    <!-- S : 방송 편성표 -->
    <div class="contbox">
      <div class="sec">
        <div class="title-wrap">
          <h3 class="ctitle">방송 편성표</h3>

          <div class="right-box">
            <a href="#!" class="link-text-more">전체보기</a>
          </div>
        </div>

        <div class="today-broadcast-wrap outside-nav">
          <swiper ref="todayBroadcastSwiper" class="tv-shopping-list" :options="optTodayBroadcast">
            <swiper-slide class="list-item" v-for="(item, idx) in todayBroadcastList" :key="idx">
              <span class="prod-item">
                <!-- s : img-box -->
                <span class="img-box">
                  <img :src="require(`@/assets/images/${item.thumbnail}`)" :alt=item.alt>
                  <span class="broadcast-time-info" :class="{'end': idx===0}">
                    <span class="badge"><span class="offscreen">{{ item.broadcastText }}</span></span>
                    <span class="val">{{item.broadcastTime}}</span>
                  </span>
                </span>
                <!-- e : img-box -->

                <!-- s : info-box -->
                <span class="info-box">
                  <!-- s : 상품명 -->
                  <span class="prod-name">
                    <span class="tv-shopping" v-if="item.tvShoppingVal">TV 쇼핑</span>
                    <span class="text"><span class="label" v-if="item.labelText.length > 1">{{ item.labelText }}</span> {{item.prodTitle}}</span>
                  </span>
                  <!-- e : 상품명 -->

                  <!-- s : 상품가 -->
                  <span class="prod-price">
                    <span class="discount-price">
                      <span class="price">
                        <span class="val">{{item.prodPrice}}</span>
                        <span class="unit">원</span>
                      </span>
                    </span>
                  </span>
                  <!-- e : 상품가 -->
                </span>
                <!-- e : info-box -->

                <router-link :to="{path: '/main/detail/'+item.id}" class="prod-link"><span class="offscreen">상품 바로가기</span></router-link>
              </span>
            </swiper-slide>
          </swiper>
          <button type="button" class="swiper-button-prev"></button>
          <button type="button" class="swiper-button-next"></button>
        </div>
      </div>
    </div>
    <!-- E : 방송 편성표 -->

    <!-- S : 쇼핑엔티 브랜드 -->
    <div class="contbox brand">
      <div class="sec">
        <h3 class="ctitle">쇼핑엔티 브랜드</h3>

        <div class="brand-list-wrap outside-nav size-sm">
          <swiper ref="brandListSwiper" :options="optbrandListSwiper">
            <swiper-slide v-for="(item, idx) in brandList" :key="idx">
              <router-link :to="{path: '/main/detail/'+item.id}" class="brand-link">
                <span class="img-box">
                    <img :src="require(`@/assets/images/${item.thumbnail}`)" :alt=item.alt>
                </span>
                <span class="brand-name">{{ item.brandName }}</span>
              </router-link>
            </swiper-slide>
          </swiper>
          <button type="button" class="swiper-button-prev"></button>
          <button type="button" class="swiper-button-next"></button>
        </div>
      </div>
    </div>
    <!-- E : 쇼핑엔티 브랜드 -->

    <!-- S : 쇼핑엔딜 -->
    <div class="contbox">
      <div class="sec">
        <div class="title-wrap">
          <h3 class="ctitle">쇼핑엔딜</h3>

          <div class="right-box">
            <a href="#!" class="link-text-more">전체보기</a>
          </div>
        </div>

        <div class="shopping-deal-wrap">
          <template>
            <!-- s: 쇼핑엔딜 1~6 -->
            <!-- s : shopping-deal-list -->
            <ul class="shopping-deal-list">
              <li class="list-item" v-for="(item, idx) in shoppingDealList.slice(0, 6)" :key="idx">
                <router-link :to="{path: '/main/detail/'+item.id}" class="list-link">
                  <!-- s : img-box -->
                  <span class="img-box">
                    <img :src="require(`@/assets/images/${item.thumbnail}`)" :alt=item.alt>
                    <span class="deal-time-count">
                        <span class="badge"><span class="offscreen">쇼핑엔딜</span></span>
                        <span class="time-count">
                            <span class="val">{{item.day}}</span>
                            <span class="text">일</span>
                            <span class="val">{{ item.timeCount }}</span>
                            <span class="text">남음</span>
                        </span>
                    </span>
                  </span>
                  <!-- e : img-box -->

                  <!-- s : info-box -->
                  <span class="info-box">
                    <span class="prod-name">{{item.name}}</span>
                    <span class="prod-detail">
                      <span class="discount-price">
                        <span class="percent">{{item.percent}}</span>
                        <span class="price">
                          <span class="val">{{item.price}}</span>
                          <span class="unit">원~</span>
                        </span>
                      </span>
                      <span class="order-count">
                        <span class="val">{{item.ordCount | ordCountMaxLengthChk}} 개 구매중</span>
                        <span class="soldout-msg" v-if="parseInt(item.ordCount) > 9999"><span class="offscreen">상품이 얼마 남지 않았어요!</span></span>
                      </span>
                    </span>
                  </span>
                  <!-- e : info-box -->
                </router-link>
              </li>
            </ul>
            <!-- e : shopping-deal-list -->
            <!-- s: 쇼핑엔딜 1~6 -->

            <div class="shopping-deal-event">
              <a href="#!" class="link-text-more">전체보기</a>
              <!-- s: 띠배너 -->
              <div class="event-banner-wrap">
                <swiper ref="mainEventSwiper"
                        :options="optMainEventSwiper"
                        @touchEnd="pauseSwiper('event-banner-wrap')"
                >
                  <swiper-slide v-for="(item, idx) in eventList" :key="idx">
                    <router-link :to="{path: '/main/detail/'+item.id}" class="brand-link">
                      <img :src="require(`@/assets/images/${item.thumbnail}`)" :alt=item.alt>
                    </router-link>
                  </swiper-slide>
                </swiper>
                <div class="swiper-control-wrap">
                  <button type="button" class="btn-control js-swiper-control" @click="swiperAutoplayControl('event-banner-wrap')">
                    <i class="ico ico-swiper-control"><span class="offscreen">stop</span></i>
                  </button>
                  <div class="swiper-pagination"></div>
                </div>
              </div>
              <!-- e: 띠배너 -->
            </div>

            <!-- s: 쇼핑엔딜 7~12 -->
            <!-- s : shopping-deal-list -->
            <ul class="shopping-deal-list" v-if="shoppingDealList.length > 6">
              <li class="list-item" v-for="(item, idx) in shoppingDealList.slice(6, 12)" :key="idx">
                <router-link :to="{path: '/main/detail/'+item.id}" class="list-link">
                  <!-- s : img-box -->
                  <span class="img-box">
                    <img :src="require(`@/assets/images/${item.thumbnail}`)" :alt=item.alt>
                    <span class="deal-time-count">
                        <span class="badge"><span class="offscreen">쇼핑엔딜</span></span>
                        <span class="time-count">
                            <span class="val">{{item.day}}</span>
                            <span class="text">일</span>
                            <span class="val">{{ item.timeCount }}</span>
                            <span class="text">남음</span>
                        </span>
                    </span>
                  </span>
                  <!-- e : img-box -->

                  <!-- s : info-box -->
                  <span class="info-box">
                    <span class="prod-name">{{item.name}}</span>
                    <span class="prod-detail">
                      <span class="discount-price">
                        <span class="percent">{{item.percent}}</span>
                        <span class="price">
                          <span class="val">{{item.price}}</span>
                          <span class="unit">원~</span>
                        </span>
                      </span>
                      <span class="order-count">
                        <span class="val">{{ item.ordCount | ordCountMaxLengthChk }}개 구매중</span>
                        <span class="soldout-msg" v-if="parseInt(item.ordCount) > 999"><span class="offscreen">상품이 얼마 남지 않았어요!</span></span>
                      </span>
                    </span>
                  </span>
                  <!-- e : info-box -->
                </router-link>
              </li>
            </ul>
            <!-- e : shopping-deal-list -->
            <!-- s: 쇼핑엔딜 7~12 -->
          </template>
        </div>
      </div>
    </div>
    <!-- E : 쇼핑엔딜 -->

    <!-- S : 기획전 -->
    <div class="contbox">
      <div class="sec">
        <div class="title-wrap">
          <h3 class="ctitle">기획전</h3>

          <div class="right-box">
            <a href="#!" class="link-text-more">전체보기</a>
          </div>
        </div>

        <div class="cont-plan-wrap">
          <div class="plan-item" v-for="(item, idx) in planList" :key="idx">
            <div class="plan-item-banner">
              <router-link :to="{path: '/main/detail/'+item.id}" class="link-plan-banner">
                <img :src="require(`@/assets/images/${item.thumbnail}`)" :alt=item.alt>
              </router-link>
            </div>

            <ul class="plan-prod-list">
              <li class="list-item" v-for="(ProdList, prodIdx) in item.prodList" :key="prodIdx">
                <!-- s : prod-item -->
                <span class="prod-item horizontal">
                  <!-- s : img-box -->
                  <span class="img-box size-sm" :class="{'sold-out': ProdList.soldoutVal}">
                    <img :src="require(`@/assets/images/${ProdList.thumbnail}`)" :alt=ProdList.alt>
                    <span class="sold-out-msg" v-if="ProdList.soldoutVal">일시품절</span>
                  </span>
                  <!-- e : img-box -->

                  <!-- s : info-box -->
                  <span class="info-box">
                    <!-- s : 상품명 -->
                    <span class="prod-name">
                      <span class="text"><span class="label" v-if="ProdList.labelText.length > 1">{{ ProdList.labelText }}</span> {{ ProdList.name }}</span>
                    </span>
                    <!-- e : 상품명 -->

                    <!-- s : 상품가 -->
                    <span class="prod-price">
                      <span class="price-normal">
                        <span class="val">{{ ProdList.price }}</span>
                        <span class="unit">원</span>
                      </span>
                    </span>
                    <!-- e : 상품가 -->
                  </span>
                  <!-- e : info-box -->

                  <router-link :to="{path: '/main/detail/'+ProdList.id}" class="prod-link"><span class="offscreen">상품 바로가기</span></router-link>
                </span>
                <!-- e : prod-item -->
              </li>
            </ul>

            <div class="btn-wrap even">
              <button type="button" class="btn-sm btn-lngray"><span class="text">쿠폰 다운받기</span><i class="ico-coupon-download"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- E : 기획전 -->

    <!-- S : 베스트 -->
    <div class="contbox">
      <div class="sec">
        <div class="title-wrap">
          <h3 class="ctitle">베스트</h3>

          <div class="right-box">
            <a href="#!" class="link-text-more">전체보기</a>
          </div>
        </div>

        <prod-list :items=best5Prod :bestCntShow="bestCntShow"></prod-list>
      </div>
    </div>
    <!-- E : 베스트 -->
  </div>

</template>

<script>
  import Vue from 'vue'
  import {mapState} from "vuex";
  import {ALL_MENU_OPEN_CHECK} from "@/store/store";

  import VueAwesomeSwiper from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  Vue.use(VueAwesomeSwiper);
  import {Swiper,SwiperSlide} from 'vue-awesome-swiper'

  import ProdList from '@/components/ProdList';


  export default {
    data() {
      return {
        // 연관상품 swiper-slide data
        onairInfo: {id: 'onairInfo', thumbnail: 'temp/temp_onair_prod.png', alt: '동영상 썸네일 임시 이미지', timer: '00:11:50', tvShoppingVal: true, labelText: '[ODV]', prodTitle: ' 20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처', prodPrice: '22,588,000', soldoutVal: false, consultingVal: false,},

        // 연관상품 count
        relatedProdCnt: 0,

        // 연관상품 swiper
        optRelatedProd: {
          init: false,
          slidesPerView: 2,
          slidesPerGroup: 2,
          observer: true,
          observeParents: true,
          navigation: {
            nextEl: '.related-prod-list .swiper-button-next',
            prevEl: '.related-prod-list .swiper-button-prev'
          },
        },

        // 연관상품 swiper-slide data
        relatedProdList: [
          {id: 'relatedProd01', thumbnail: 'temp/temp_prd.png', alt: '상품 임시 이미지', labelText: '[ODV]', prodTitle: ' 20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처', prodPrice: '22,588,000', soldoutVal: true,},
          {id: 'relatedProd02', thumbnail: 'temp/temp_prd.png', alt: '상품 임시 이미지', labelText: '', prodTitle: ' 20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처', prodPrice: '22,588,000', soldoutVal: false,},
          {id: 'relatedProd03', thumbnail: 'temp/temp_prd.png', alt: '상품 임시 이미지', labelText: '', prodTitle: ' 20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처', prodPrice: '22,588,000', soldoutVal: false,},
          {id: 'relatedProd04', thumbnail: 'temp/temp_prd.png', alt: '상품 임시 이미지', labelText: '[ODV]', prodTitle: ' 20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처', prodPrice: '22,588,000', soldoutVal: true,},
          {id: 'relatedProd05', thumbnail: 'temp/temp_prd.png', alt: '상품 임시 이미지', labelText: '[ODV]', prodTitle: ' 20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처', prodPrice: '22,588,000', soldoutVal: true,},
          {id: 'relatedProd06', thumbnail: 'temp/temp_prd.png', alt: '상품 임시 이미지', labelText: '[ODV]', prodTitle: ' 20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처', prodPrice: '22,588,000', soldoutVal: true,},
        ],

        // 기획전 swiper
        optMainBanner: {
          effect: 'fade',
          init: false,
          slidesPerView: 1,
          speed: 800,
          observer: true,
          observeParents: true,
          initialSlide: 0,
          autoplay: {
            delay: 2500,
          },
          loop: true,
          pagination: {
            el: '.main-banner-wrap .swiper-pagination',
            type: 'fraction',
          },
        },

        // 기획전 swiper data
        mainBannerList:[
          {id: 'mainBanner01', thumbnail: 'temp/temp_main_banner.png', alt: '메인 임시 배너',},
          {id: 'mainBanner02', thumbnail: 'temp/temp_main_banner_02.png', alt: '메인 임시 배너',},
          {id: 'mainBanner03', thumbnail: 'temp/temp_main_banner_03.png', alt: '메인 임시 배너',},
          {id: 'mainBanner04', thumbnail: 'temp/temp_main_banner.png', alt: '메인 임시 배너',},
          {id: 'mainBanner05', thumbnail: 'temp/temp_main_banner_02.png', alt: '메인 임시 배너',},
          {id: 'mainBanner06', thumbnail: 'temp/temp_main_banner_03.png', alt: '메인 임시 배너',},
        ],

        // 방송편성표 swiper
        optTodayBroadcast: {
          init: false,
          slidesPerView: 'auto',
          speed: 500,
          navigation: {
            nextEl: '.today-broadcast-wrap .swiper-button-next',
            prevEl: '.today-broadcast-wrap .swiper-button-prev'
          },
        },

        // 방송편성표 swiper-slide data
        todayBroadcastList: [
          {id: 'todayBroadcast01', thumbnail: 'temp/temp_tvshopping_thumb.png', alt: '방송 편성표 임시 이미지', broadcastText: '이전방송', broadcastTime: '09:30 ~ 11:00', tvShoppingVal: true, labelText: '[ODV]', prodTitle: ' 20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처', prodPrice: '22,588,000',},
          {id: 'todayBroadcast02', thumbnail: 'temp/temp_tvshopping_thumb.png', alt: '방송 편성표 임시 이미지', broadcastText: '방송예정', broadcastTime: '09:30 ~ 11:00', tvShoppingVal: true, labelText: '', prodTitle: ' 20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처', prodPrice: '22,588,000',},
          {id: 'todayBroadcast03', thumbnail: 'temp/temp_tvshopping_thumb.png', alt: '방송 편성표 임시 이미지', broadcastText: '방송예정', broadcastTime: '09:30 ~ 11:00', tvShoppingVal: false, labelText: '', prodTitle: ' 20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처', prodPrice: '22,588,000',},
          {id: 'todayBroadcast04', thumbnail: 'temp/temp_tvshopping_thumb.png', alt: '방송 편성표 임시 이미지', broadcastText: '방송예정', broadcastTime: '09:30 ~ 11:00', tvShoppingVal: true, labelText: '[ODV]', prodTitle: ' 20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처  20FW 오디브 시그니처', prodPrice: '22,588,000',},
        ],

        // 쇼핑엔티 브랜드 swiper
        optbrandListSwiper: {
          init: false,
          slidesPerView: 'auto',
          speed: 500,
          navigation: {
            nextEl: '.brand-list-wrap .swiper-button-next',
            prevEl: '.brand-list-wrap .swiper-button-prev'
          },
        },

        // 쇼핑엔티 브랜드 swiper data
        brandList:[
          {id: 'brandList01', thumbnail: 'temp/temp_brand.png', alt: '브랜드 임시 배너', brandName: '플리거 바이 제너럴 아이디어'},
          {id: 'brandList02', thumbnail: 'temp/temp_brand.png', alt: '브랜드 임시 배너', brandName: '나이키'},
          {id: 'brandList03', thumbnail: 'temp/temp_brand.png', alt: '브랜드 임시 배너', brandName: '오디브'},
          {id: 'brandList04', thumbnail: 'temp/temp_brand.png', alt: '브랜드 임시 배너', brandName: 'Vanessa Vera'},
          {id: 'brandList05', thumbnail: 'temp/temp_brand.png', alt: '브랜드 임시 배너', brandName: '플리거 바이 제너럴 아이디어'},
          {id: 'brandList06', thumbnail: 'temp/temp_brand.png', alt: '브랜드 임시 배너', brandName: '플리거 바이 제너럴 아이디어'},
          {id: 'brandList07', thumbnail: 'temp/temp_brand.png', alt: '브랜드 임시 배너', brandName: '플리거 바이 제너럴 아이디어'},
        ],

        // 쇼핑엔딜 list
        shoppingDealList: [
          {id: 'shoppingDealList01', thumbnail: 'temp/temp_deal_thumb.png', alt: '쇼핑엔딜 임시 이미지', day: '1', timeCount: '14:27:32', name: '1웰파 미켈란젤로 패딩 점퍼 웰파 미켈란젤로 패딩점퍼 롱패딩 웰파 미켈란젤로 패딩 점퍼 웰파 미켈란젤로 패딩점퍼 롱패딩', percent: '20%', price: '55,268,800', ordCount: '10000',},
          {id: 'shoppingDealList02', thumbnail: 'temp/temp_deal_thumb.png', alt: '쇼핑엔딜 임시 이미지', day: '0', timeCount: '17:27:33', name: '2웰파 미켈란젤로 패딩', percent: '20%', price: '55,268,800', ordCount: '10',},
          {id: 'shoppingDealList03', thumbnail: 'temp/temp_deal_thumb.png', alt: '쇼핑엔딜 임시 이미지', day: '7', timeCount: '12:27:34', name: '3웰파 미켈란젤로 패딩', percent: '20%', price: '368,800', ordCount: '1999999',},
          {id: 'shoppingDealList04', thumbnail: 'temp/temp_deal_thumb.png', alt: '쇼핑엔딜 임시 이미지', day: '1', timeCount: '14:27:32', name: '4웰파 미켈란젤로 패딩 점퍼 웰파 미켈란젤로 패딩점퍼 롱패딩 웰파 미켈란젤로 패딩 점퍼 웰파 미켈란젤로 패딩점퍼 롱패딩', percent: '20%', price: '55,268,800', ordCount: '10000',},
          {id: 'shoppingDealList05', thumbnail: 'temp/temp_deal_thumb.png', alt: '쇼핑엔딜 임시 이미지', day: '0', timeCount: '17:27:33', name: '5웰파 미켈란젤로 패딩', percent: '20%', price: '55,268,800', ordCount: '1',},
          {id: 'shoppingDealList06', thumbnail: 'temp/temp_deal_thumb.png', alt: '쇼핑엔딜 임시 이미지', day: '7', timeCount: '12:27:34', name: '6웰파 미켈란젤로 패딩', percent: '20%', price: '368,800', ordCount: '1999999',},
          {id: 'shoppingDealList07', thumbnail: 'temp/temp_deal_thumb.png', alt: '쇼핑엔딜 임시 이미지', day: '1', timeCount: '14:27:32', name: '7웰파 미켈란젤로 패딩 점퍼 웰파 미켈란젤로 패딩점퍼 롱패딩 웰파 미켈란젤로 패딩 점퍼 웰파 미켈란젤로 패딩점퍼 롱패딩', percent: '20%', price: '55,268,800', ordCount: '10000',},
          {id: 'shoppingDealList08', thumbnail: 'temp/temp_deal_thumb.png', alt: '쇼핑엔딜 임시 이미지', day: '0', timeCount: '17:27:33', name: '8웰파 미켈란젤로 패딩', percent: '20%', price: '55,268,800', ordCount: '999',},
          {id: 'shoppingDealList09', thumbnail: 'temp/temp_deal_thumb.png', alt: '쇼핑엔딜 임시 이미지', day: '7', timeCount: '12:27:34', name: '9웰파 미켈란젤로 패딩', percent: '20%', price: '368,800', ordCount: '1999999',},
          {id: 'shoppingDealList10', thumbnail: 'temp/temp_deal_thumb.png', alt: '쇼핑엔딜 임시 이미지', day: '7', timeCount: '12:27:34', name: '10웰파 미켈란젤로 패딩', percent: '20%', price: '368,800', ordCount: '1999999',},
          {id: 'shoppingDealList11', thumbnail: 'temp/temp_deal_thumb.png', alt: '쇼핑엔딜 임시 이미지', day: '7', timeCount: '12:27:34', name: '11웰파 미켈란젤로 패딩', percent: '20%', price: '368,800', ordCount: '1999999',},
          {id: 'shoppingDealList12', thumbnail: 'temp/temp_deal_thumb.png', alt: '쇼핑엔딜 임시 이미지', day: '7', timeCount: '12:27:34', name: '12웰파 미켈란젤로 패딩', percent: '20%', price: '368,800', ordCount: '1999999',},
        ],

        // 이벤트 브랜드 swiper
        optMainEventSwiper: {
          effect: 'fade',
          init: false,
          slidesPerView: 1,
          speed: 800,
          observer: true,
          observeParents: true,
          initialSlide: 0,
          autoplay: {
            delay: 2500,
          },
          loop: true,
          pagination: {
            el: '.event-banner-wrap .swiper-pagination',
            type: 'fraction',
          },
        },

        //이벤트 리스트 swiper data
        eventList: [
          {id: 'event01', thumbnail: 'temp/temp_main_event.png', alt: '이벤트 임시 배너',},
          {id: 'event02', thumbnail: 'temp/temp_main_event_02.png', alt: '이벤트 임시 배너',},
          {id: 'event03', thumbnail: 'temp/temp_main_event_03.png', alt: '이벤트 임시 배너',},
        ],

        //기획전
        planList: [
          {id: 'plan01', thumbnail: 'temp/temp_plan_banner_main.png', alt: '기획전 임시 이미지',
            prodList: [
              {id: 'planProd01', thumbnail: 'temp/temp_prd.png', alt: '기획전 상세 상품 임시 이미지', labelText: '', name: ' 20FW 오디브 시그니처 폭스퍼 롱 구 20FW 오디브 시그니처 폭스퍼 롱 구 20FW 오디브 시그니처 폭스퍼 롱 구', price: '78,800', soldoutVal: false,},
              {id: 'planProd02', thumbnail: 'temp/temp_prd.png', alt: '기획전 상세 상품 임시 이미지', labelText: '[ODV]', name: ' 20FW 오디브', price: '188,800', soldoutVal: false,},
              {id: 'planProd03', thumbnail: 'temp/temp_prd.png', alt: '기획전 상세 상품 임시 이미지', labelText: '[ODV]', name: ' 20FW 오디브 시그니처 폭스퍼 롱 구 20FW 오디브 시그니처 폭스퍼 롱 구 20FW 오디브 시그니처 폭스퍼 롱 구', price: '78,800', soldoutVal: true,}
            ]
          },
          {id: 'plan02', thumbnail: 'temp/temp_plan_banner_main.png', alt: '기획전 임시 이미지',
            prodList: [
              {id: 'planProd04', thumbnail: 'temp/temp_prd.png', alt: '기획전 상세 상품 임시 이미지', labelText: '[ODV]', name: ' 20FW 오디브', price: '78,800', soldoutVal: true,},
              {id: 'planProd05', thumbnail: 'temp/temp_prd.png', alt: '기획전 상세 상품 임시 이미지', labelText: '[ODV]', name: ' 20FW 오디브 시그니처 폭스퍼 롱 구 20FW 오디브 시그니처 폭스퍼 롱 구 20FW 오디브 시그니처 폭스퍼 롱 구', price: '78,800', soldoutVal: false,},
              {id: 'planProd06', thumbnail: 'temp/temp_prd.png', alt: '기획전 상세 상품 임시 이미지', labelText: '[ODV]', name: ' 20FW 오디브 시그니처 폭스퍼 롱 구 20FW 오디브 시그니처 폭스퍼 롱 구 20FW 오디브 시그니처 폭스퍼 롱 구', price: '78,800', soldoutVal: true,}
            ]
          }
        ],

        // 베스트 상품
        best5Prod: [],

        // 상품 type
        bestCntShow: true,
      }
    },
    filters:{
      ordCountMaxLengthChk: function(cnt){
        if(cnt > 9999){
          return '9,999+';
        }else{
          return cnt;
        }
      }
    },
    components: {
      Swiper,
      SwiperSlide,
      ProdList,
    },
    computed: {
      ...mapState(['allMenuList', 'swiperEl', 'prodList']),

      relatedProdSwiper() {
        return this.$refs.relatedProdSwiper.$swiper;
      },
      mainBannerSwiper() {
        return this.$refs.mainBannerSwiper.$swiper;
      },
      todayBroadcastSwiper() {
        return this.$refs.todayBroadcastSwiper.$swiper;
      },
      brandListSwiper() {
        return this.$refs.brandListSwiper.$swiper;
      },
      mainEventSwiper() {
        return this.$refs.mainEventSwiper.$swiper;
      },
    },
    methods:{
      // 기획전 swiper init
      relatedProdSwiperInit() {
        const relatedProdSwiperEl = document.getElementsByClassName('related-prod-list')[0];
        if(relatedProdSwiperEl.childNodes[0].childNodes[0].childNodes.length > 2){
          relatedProdSwiperEl.classList.add('is-active');
          this.relatedProdSwiper.init();
        }
      },
      // 기획전 swiper init
      mainBannerSwiperInit() {
        const mainBannerSwiperEl = document.getElementsByClassName('main-banner-wrap')[0];
        if(mainBannerSwiperEl.childNodes[0].childNodes[0].childNodes.length > 1){
          mainBannerSwiperEl.classList.add('is-active');
          this.mainBannerSwiper.init();
        }
      },

      // 방송편성표 swiper init
      todayBroadcastSwiperInit() {
        const todayBraodcastSwiperEl = document.getElementsByClassName('today-broadcast-wrap')[0];
        if(todayBraodcastSwiperEl.childNodes[0].childNodes[0].childNodes.length > 3){
          todayBraodcastSwiperEl.classList.add('is-active');
          this.todayBroadcastSwiper.init();
        }
      },

      // 쇼핑엔티 브랜드 swiper init
      brandListSwiperInit() {
        const brandListSwiperEl = document.getElementsByClassName('brand-list-wrap')[0];
        if(brandListSwiperEl.childNodes[0].childNodes[0].childNodes.length > 4){
          brandListSwiperEl.classList.add('is-active');
          this.brandListSwiper.init();
        }
      },

      // 쇼핑엔티 브랜드 swiper init
      mainEventSwiperInit() {
        const mainEventSwiperEl = document.getElementsByClassName('event-banner-wrap')[0];
        if(mainEventSwiperEl.childNodes[0].childNodes[0].childNodes.length > 1){
          mainEventSwiperEl.classList.add('is-active');
          this.mainEventSwiper.init();
        }
      },

      // 이벤트 swiper pause
      pauseSwiper(el){
        const controlEl = document.querySelectorAll(el+'.js-swiper-control')[0];
        const controlOffscreen = document.querySelectorAll(el+'.js-swiper-control')[0].childNodes[0];

        if(el === 'event-banner-wrap'){
          this.mainEventSwiper.autoplay.stop();
        }else if(el === 'main-banner-wrap'){
          this.mainBannerSwiper.autoplay.stop();
        }
        controlEl.classList.add('is-stop');
        controlOffscreen.innerText = 'play';
      },

      // 이벤트 swiper control
      swiperAutoplayControl(el){
        const controlEl = document.querySelectorAll('.'+el+' .js-swiper-control')[0];
        const controlOffscreen = controlEl.childNodes[0];

        if(controlEl.classList.contains('is-stop')){
          controlEl.classList.remove('is-stop');
          controlOffscreen.innerText = 'stop';
          if(el === 'event-banner-wrap'){
            this.mainEventSwiper.autoplay.start();
          }else if(el === 'main-banner-wrap'){
            this.mainBannerSwiper.autoplay.start();
          }
        }else{
          this.pauseSwiper(el);
        }
      },

      // 전체메뉴 open
      allMenuLayerOpen(e){
        const tgEl = e.target.parentNode;
        tgEl.classList.add('is-active');

        const allmenuEl = document.getElementsByClassName('category-menu-layer')[0];
        if(window.getComputedStyle(allmenuEl).getPropertyValue('display') === 'none'){
          allmenuEl.style.display = 'block';
        }

        allmenuEl.classList.add('is-sub-active');

        this.$store.commit(ALL_MENU_OPEN_CHECK, true);

        for(let i=0; i<document.querySelectorAll('.category-allmenu-wrap .menu-list .depth').length; i++){
          document.querySelectorAll('.category-allmenu-wrap .menu-list .depth')[i].classList.remove('is-active');
        }

        // 기획전 swiper init
        this.allMenuPlanSwiper();
      },

      // 검색어 swiper 찾기
      allMenuPlanSwiper() {
        const headerPlanBannerEl = document.getElementsByClassName('plan-banner-wrap')[0];
        if(headerPlanBannerEl.childNodes[0].childNodes[0].childNodes.length > 1){
          headerPlanBannerEl.classList.add('is-active');
          this.swiperEl.init();
        }
      },

      // 베스트 상품(구매갯수가 가장 많은 상품 5개 노출. 구매갯수가 동일한경우 랜덤으로 노출)
      bestProdSort(){
        const purchaseCntArr = [];
        for(let i=0; i<this.prodList.length; i++){
          purchaseCntArr.push(this.prodList[i].purchaseCnt)
        }

        purchaseCntArr.sort(function(a, b)  {
          return b - a;
        });

        const best5Arr = purchaseCntArr.slice(0,10);
        const best5ProdIdx = [];
        for(let i=0; i<best5Arr.length; i++){
          for(let j=0; j<this.prodList.length; j++){
            if(this.prodList[j].purchaseCnt === best5Arr[i]){
              best5ProdIdx.push(j);
            }
          }
        }
        const set = new Set(best5ProdIdx)
        const uniqueArr = [...set];
        const randomArr = [];
        let randomIdx;

        for(let i=0; i<10; i++){
          randomIdx = Math.floor(Math.random()*uniqueArr.length);
          if (randomArr.indexOf(randomIdx) === -1) {
            randomArr.push(randomIdx)
          }else{
            i--;
          }
        }
        for(let i=0; i<randomArr.length; i++){
          this.best5Prod.push(this.prodList[randomArr[i]])
        }

      }
    },
    created () {

    },
    mounted: function() {
      this.relatedProdSwiperInit();
      this.mainBannerSwiperInit();
      this.todayBroadcastSwiperInit();
      this.brandListSwiperInit();
      this.mainEventSwiperInit();

      // 연관상품 count
      this.relatedProdCnt = document.querySelectorAll('.related-prod-list .swiper-slide').length;
      this.bestProdSort();
    },
  };
</script>