<template>
  <div class="header-wrapper js-header-wrapper sps" data-sps-offset="112">
    <div class="header-top js-fix-header">
      <div class="sec">
        <h1 class="header-logo">
          <router-link to="/" class="btn-logo-name"><span class="offscreen">쇼핑엔티</span></router-link>
        </h1>

        <!-- s: search-keyword-form -->
        <div class="search-keyword-form">
          <swiper ref="tickerSwiper" class="ticker-swiper" :options="optKeywordTicker">
            <swiper-slide v-for="item in tickerList" :key="item"><span class="word">{{ item }}</span></swiper-slide>
          </swiper>
          <button type="button" class="btn-search-active" @click="searchFormActive"><span class="offscreen">검색어 입력</span></button>
          <router-link to="/" class="btn-header-search"
             @focusin.native="controlTickerSwiper(0)"
             @mouseenter.native="controlTickerSwiper(0)"
             @focusout.native="controlTickerSwiper(1)"
             @mouseleave.native="controlTickerSwiper(1)"
          ><i class="ico-header-search"><span class="offscreen">검색어 이동</span></i></router-link>
          <div class="search-input">
            <input-item class="header-search"></input-item>
            <router-link to="/" class="btn-header-search"><i class="ico-header-search"><span class="offscreen">검색어 이동</span></i></router-link>
          </div>
        </div>
        <!-- e: search-keyword-form -->

        <div class="ranking-list-wrap">
          <div class="ranking-rolling">
              <swiper class="ranking-swiper" :options="optRankingSwiper">
                <swiper-slide class="ranking-item" v-for="(item, idx) in rankingList" :key="idx">
                  <router-link :to="{path: item.value}" class="word-link">
                    <span class="num">{{idx+1}}</span>
                    <i class="ico" :class="item.rankIco"><span class="offscreen">{{ item.rankIco }}</span></i>
                    <span class="text">{{ item.text }}</span>
                  </router-link>
                </swiper-slide>
              </swiper>
          </div>

          <button type="button" class="btn-ranking-more"><span class="offscreen">실시간 검색어 더보기</span></button>
        </div>

        <div class="util">
          <router-link to="/" class="btn-header-profile">
            <i class="ico-header-profile"><span class="offscreen">프로필</span></i>
          </router-link>
          <router-link to="/" class="btn-header-cs">
            <i class="ico-header-cs"><span class="offscreen">고객센터</span></i>
          </router-link>
          <router-link to="/" class="btn-header-cart">
            <i class="ico-header-cart"><span class="offscreen">장바구니</span></i>
            <!-- DESC :: 0개인경우 count 영역 미노출 / 최대 99 -->
            <span class="count">99</span>
          </router-link>
        </div>
        <button type="button" class="btn-category-more" @click="categoryAllView">
            <i class="ico-category-more">
              <span class="line l1"></span>
              <span class="line l2"></span>
              <span class="line l3"></span>
            </i>
          <span class="text">전체 카테고리</span>
        </button>
        <!-- s: 카테고리 -->
        <div class="category-menu-layer js-layer-category-allmenu js-header-layer" @mouseleave="allMenuLayerClose">
          <div class="category-allmenu-wrap">
            <div class="category-menu js-cate-1dep">
              <!-- s: 카테고리 1depth menu -->
              <ul class="menu-list dep-list">
                <li class="depth" v-for="value in allMenuList" :key="value.id">
                  <router-link :to="{path: '/prod/list/'+value.id}" class="link" v-if="value.title==='브랜드 찾기'">
                    <span class="link-text">{{ value.title }}</span>
                  </router-link>

                  <router-link :to="{ name: 'categoryList', query: { menuId: value.id }}" class="dep-link"
                               @mouseover.native="categoryOnOff($event, 'js-cate-1dep')"
                               @click.native="clickAllMenuClose"
                               :data-content= value.id
                               v-else
                  >
                    {{ value.title }}
                  </router-link>
                </li>
              </ul>
              <!-- e: 카테고리 1depth menu -->
            </div>
            <div class="category-content js-sub-category-wrap">
              <div class="category-sub-menu-wrap">
                <!-- s: category-sub-menu -->
                <div class="category-sub-menu js-cate-cont" v-for="value in allMenuList" :key="value.id" :class="value.id" style="display: none;">
                  <!-- s: 카테고리 2depth menu -->
                  <div class="cate-sub-dep cate-2depth js-cate-2dep">
                    <ul class="sub-menu-list dep-list">
                      <li class="depth" v-for="depth2Value in value.subList" :key="depth2Value.id">
                        <router-link :to="{ name: 'categoryList', query: { menuId: value.id }}" class="btn-sub-link dep-link"
                                @mouseover.native="categoryOnOff($event, 'js-cate-2dep')"
                                :data-content=depth2Value.id
                        >
                          {{ depth2Value.title }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                  <!-- e: 카테고리 2depth menu -->

                  <!-- s: 카테고리 3depth menu -->
                  <div class="cate-sub-dep cate-3depth js-cate-3dep">
                    <div class="cate-sub-cont" v-for="depth2Value in value.subList" :key="depth2Value.id" :class="depth2Value.id" style="display: none">
                      <ul class="sub-menu-list dep-list">
                          <li class="depth" v-for="depth3Value in depth2Value.subList" :key="depth3Value.id">
                            <router-link :to="{ name: 'categoryList', query: { menuId: value.id }}" class="btn-sub-link dep-link"
                                    @mouseover.native="categoryOnOff($event, 'js-cate-3dep')"
                                    :data-content=depth3Value.id
                            >
                              {{ depth3Value.title }}
                            </router-link>
                          </li>
                      </ul>
                    </div>
                  </div>
                  <!-- e: 카테고리 3depth menu -->

                  <!-- s: 카테고리 4depth menu -->
                  <div class="cate-sub-dep cate-4depth js-cate-4dep">
                    <template v-for="(depth2Value, depth2Idx) in value.subList">
                      <template v-if="depth2Idx === active2depthIdx">
                        <div class="cate-sub-cont" v-for="depth3Value in depth2Value.subList" :key="depth3Value.id" :class="depth3Value.id" style="display: none">
                          <ul class="sub-menu-list dep-list">
                            <li class="depth" v-for="depth4Value in depth3Value.subList" :key="depth4Value.id">
                              <router-link :to="{ name: 'categoryList', query: { menuId: value.id }}" class="btn-sub-link dep-link"
                                           @mouseover.native="categoryOnOff($event, 'js-cate-4dep')"
                              >
                                {{ depth4Value.title }}
                              </router-link>
                            </li>
                          </ul>
                        </div>
                      </template>
                    </template>
                  </div>
                  <!-- e: 카테고리 4depth menu -->
                </div>
                <!-- e: category-sub-menu -->
              </div>
              <div class="plan-banner-wrap">
                <swiper ref="headerPlanBannerSwiper" class="plan-banner-swiper" :options="optHeaderPlanBanner">
                  <swiper-slide class="list-item" v-for="(value, idx) in headerPlanBanner" :key="idx">
                    <router-link :to="{path: value.link}" class="link-plan-banner">
                      <img :src="require(`@/assets/images/${value.thumbnail}`)" :alt=value.alt>
                    </router-link>
                  </swiper-slide>
                </swiper>
                <div class="swiper-control-wrap">
                  <button type="button" class="swiper-button-prev"></button>
                  <button type="button" class="swiper-button-next"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- e: 카테고리 -->
      </div>
    </div>
    <div class="header-bottom js-navigation" id="gnb">
      <div class="sec">
        <div class="gnb-wrap">
          <ul>
            <li class="gnb-menu-depth1" v-for="value in mainLink" :key="value.id">
              <router-link class="btn-menu-name" :to="{path: '/main/detail/'+value.id}">{{ value.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {ALL_MENU_OPEN_CHECK, REF_SWIPER} from '@/store/store';
  import {mapState} from 'vuex';

  import VueAwesomeSwiper from 'vue-awesome-swiper'
  import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  Vue.use(VueAwesomeSwiper);

  import InputItem from "@/components/InputItem";

  let prevCateDep = null;
  let changeCateDep = null;
  export default {
    data(){
      return{
        active2depthIdx : 0,
        // s : GNB
        // gnb main 메뉴
        mainLink:[
          {id: 'gnb01', title: 'TV편성'},
          {id: 'gnb02', title: 'TV쇼핑'},
          {id: 'gnb03', title: '베스트'},
          {id: 'gnb04', title: '쇼핑엔딜'},
          {id: 'gnb05', title: '쇼TV'},
          {id: 'gnb06', title: '쇼마트'},
          {id: 'gnb07', title: '쇼타임딜'},
          {id: 'gnb08', title: '착한가격'},
          {id: 'gnb09', title: '골든위크'},
          {id: 'gnb10', title: '식품관'},
          {id: 'gnb11', title: '기획전'}
        ],

        // 전체메뉴영역 기획전 swiper
        optHeaderPlanBanner: {
          init: false,
          speed: 300,
          observer: true,
          observeParents: true,
          navigation: {
            nextEl: '.plan-banner-wrap .swiper-button-next',
            prevEl: '.plan-banner-wrap .swiper-button-prev',
          },
        },

        // 전체메뉴영역 기획전 swiper list
        headerPlanBanner: [
          {link: './', thumbnail: 'temp/temp_plan_banner.png', alt: '기획전 임시 배너',},
          {link: './', thumbnail: 'temp/temp_plan_banner.png', alt: '기획전 임시 배너',},
          {link: './', thumbnail: 'temp/temp_plan_banner.png', alt: '기획전 임시 배너',},
          {link: './', thumbnail: 'temp/temp_plan_banner.png', alt: '기획전 임시 배너',},
          {link: './', thumbnail: 'temp/temp_plan_banner.png', alt: '기획전 임시 배너',},
          {link: './', thumbnail: 'temp/temp_plan_banner.png', alt: '기획전 임시 배너',},
        ],
        // e : GNB

        /* s : 검색 input 영역 */
        //ticker swiper option
        optKeywordTicker: {
          autoHeight: true, //enable auto height
          effect: 'fade',
          direction: 'vertical',
          speed: 800,
          initialSlide: 0,
          autoplay: {
            delay: 2500,
          },
          observer: true,
          observeParents: true,
          loop: true,
        },

        // ticker swiper list
        tickerList: ['오디브 봄신상 특가', '검색어 2222', '검색어 333'],
        /* e : 검색 input 영역 */

        /* s : 인기검색어 순위 */
        optRankingSwiper: {
          direction: 'vertical',
          speed: 300,
          initialSlide: 0,
          autoplay: {
            delay: 2500,
          },
          observer: true,
          observeParents: true,
          loop: true,
        },

        rankingList: [
          {rankIco : 'up', value : '#!', text : '파세코',},
          {rankIco : 'down', value : '#!', text : '긴팔티셔츠 긴팔티셔츠 긴팔티셔츠',},
          {rankIco : 'equal', value : '#!', text : '블라우스',},
          {rankIco : 'new', value : '#!', text : '청바지',},
        ],
        /* e : 인기검색어 순위 */
      }
    },
    components: {
      Swiper,
      SwiperSlide,
      InputItem,
    },
    computed:{
      ...mapState(['allMenuList', 'swiperEl', 'allMenuOpenCheck']),
    },
    methods:{
      // gnb 전체보기
      categoryAllView(e){
        const allmenuEl = document.getElementsByClassName('category-menu-layer')[0];
        if(window.getComputedStyle(allmenuEl).getPropertyValue('display') === 'none'){
          e.currentTarget.classList.add('is-active', 'is-click');
          allmenuEl.style.display = 'block';
        }else{
          e.currentTarget.classList.remove('is-active');
          allmenuEl.style.display = 'none';
        }

        allmenuEl.classList.add('is-sub-active');

        // 메뉴 active
        let activeIdx, activeCont;
        for(let i=0; i<document.getElementsByClassName('js-cate-1dep')[0].childNodes[0].childNodes.length; i++){
          if(document.getElementsByClassName('js-cate-1dep')[0].childNodes[0].childNodes[i].classList.contains('is-active')) activeIdx = i;
        }

        if(activeIdx === undefined) { // 활성화된 메뉴 없는 경우
          document.getElementsByClassName('js-cate-1dep')[0].childNodes[0].childNodes[0].classList.add('is-active');
          activeCont = document.getElementsByClassName('js-cate-1dep')[0].childNodes[0].childNodes[0].childNodes[0].dataset.content;
        }else{ // 기존에 활성화된 메뉴 있는 경우
          activeCont = document.getElementsByClassName('js-cate-1dep')[0].childNodes[0].childNodes[activeIdx].childNodes[0].dataset.content;
        }

        document.getElementsByClassName(activeCont)[0].style.display = 'block';

        //기획전 swiper init
        this.headerPlanBannerSwiperInit();
      },

      //gnb allmenu
      categoryOnOff(el, list){
        const tgEl = el.currentTarget;
        const activeItem = tgEl.parentNode;
        const menuList = activeItem.parentNode.parentNode;
        let menuWrap;

        if(list === 'js-cate-3dep' || list === 'js-cate-4dep'){
          menuWrap = activeItem.parentNode.parentNode.parentNode.parentNode;
        }else{
          menuWrap = activeItem.parentNode.parentNode.parentNode;
        }


        if ( activeItem.classList.contains('is-active') ) return false;

        let oldDepItem, oldDepCont;
        for(let i=0; i<menuList.childNodes[0].childNodes.length; i++ ){
          if(menuList.childNodes[0].childNodes[i].classList.contains('is-active')) {
            oldDepItem = menuList.childNodes[0].childNodes[i];
          }
        }

        if ( oldDepItem !== undefined ) {
          //기존 활성화탭 off
          oldDepItem.classList.remove('is-active');
          if(list !== 'js-cate-4dep'){
            oldDepCont = oldDepItem.childNodes[0].dataset.content;
            document.getElementsByClassName(oldDepCont)[0].style.display = 'none';
          }
        }

        activeItem.classList.add('is-active');//tab active

        if( changeCateDep !== list ) {
          changeCateDep = list;

          if( prevCateDep !== null ) {
            // 이전 depth로 넘어오는 경우 active된 하위 depth hide
            if( parseInt(changeCateDep.split('js-cate-')[1].split('dep')[0]) < parseInt(prevCateDep.split('js-cate-')[1].split('dep')[0]) ) {
              if(changeCateDep === 'js-cate-1dep'){
                const activeDepth3Cont = document.getElementsByClassName(oldDepCont)[0].childNodes[1].childNodes;
                const activeDepth4Cont = document.getElementsByClassName(oldDepCont)[0].childNodes[2].childNodes;

                for(let i=0; i<activeDepth3Cont.length; i++){
                  activeDepth3Cont[i].style.display = 'none';
                }

                for(let i=0; i<activeDepth4Cont.length; i++){
                  if (activeDepth4Cont[i].nodeType !== 8) {
                    activeDepth4Cont[i].style.display = 'none';
                  }
                }
              }else{
                const activeSubDepthList = document.getElementsByClassName(oldDepCont)[0].childNodes[0].childNodes;
                for(let i=0; i<activeSubDepthList.length; i++){
                  activeSubDepthList[i].classList.remove('is-active');
                }
              }
            }
          }
        }

        if(document.getElementsByClassName(tgEl.dataset.content).length > 0){
          if(list === 'js-cate-2dep'){
            for(let i=0; i<document.getElementsByClassName('category-sub-menu').length; i++){
              document.getElementsByClassName('category-sub-menu')[i].classList.remove('is-sub-active');
            }
            menuWrap.classList.add('is-sub-active');

            for(let i=0; i<document.querySelectorAll('.category-sub-menu.is-sub-active .cate-2depth .depth').length; i++){
              if(document.querySelectorAll('.category-sub-menu.is-sub-active .cate-2depth .depth')[i].classList.contains('is-active')){
                this.active2depthIdx = i;
              }
            }
          }

          document.getElementsByClassName(tgEl.dataset.content)[0].style.display = 'block';
          if(list === 'js-cate-1dep'){
            const subDepthList = document.getElementsByClassName(tgEl.dataset.content)[0].childNodes[0].childNodes[0].childNodes;
            for(let i=0; i<subDepthList.length; i++){
              subDepthList[i].classList.remove('is-active');
            }
          }else{
            const subDepthList = document.getElementsByClassName(tgEl.dataset.content)[0].childNodes[0].childNodes;
            for(let i=0; i<subDepthList.length; i++){
              subDepthList[i].classList.remove('is-active');
            }
          }

        }else{
          menuWrap.classList.remove('is-sub-active');
        }

        prevCateDep = changeCateDep;
        return false;
      },

      // header > 기획전 swiper
      headerPlanBannerSwiper() {
        return this.$store.commit(REF_SWIPER, this.$refs.headerPlanBannerSwiper.$swiper);
      },

      // header > 기획전 swiper init
      headerPlanBannerSwiperInit() {
        const headerPlanBannerEl = document.getElementsByClassName('plan-banner-wrap')[0];
        if(headerPlanBannerEl.childNodes[0].childNodes[0].childNodes.length > 1){
          headerPlanBannerEl.classList.add('is-active');
          this.headerPlanBannerSwiper();
          this.swiperEl.init();
        }
      },

      // 검색어 swiper 찾기
      tickerSwiper() {
        this.$store.commit(REF_SWIPER, this.$refs.tickerSwiper.$swiper);
      },

      // 검색 form 활성화
      searchFormActive(){
        const searchForm = document.getElementsByClassName('search-keyword-form')[0];
        searchForm.classList.add('is-search');

        this.$store.state.focusIpEl.focus();
        this.tickerSwiper();
        this.swiperEl.autoplay.stop();
      },

      // 검색어버튼 mouse, focus 이벤트에따라 swiper stop/play
      controlTickerSwiper(val){
        if(val === 0){ // focus in
          this.tickerSwiper();
          this.swiperEl.autoplay.stop();
        }else{ // focus out
          this.swiperEl.update();
          this.swiperEl.autoplay.start();
        }
      },

      // 전체메뉴 close
      allMenuLayerClose(){
        if(this.allMenuOpenCheck){
          const allmenuEl = document.getElementsByClassName('category-menu-layer')[0];
          allmenuEl.style.display = 'none';

          allmenuEl.classList.remove('is-sub-active');
          this.$store.commit(ALL_MENU_OPEN_CHECK, false);

          for(let i=0; i<document.getElementsByClassName('category-sub-menu').length; i++){
            document.getElementsByClassName('category-sub-menu')[i].style.display = 'none';
          }
        }
      },

      clickAllMenuClose(){
        this.$store.commit(ALL_MENU_OPEN_CHECK, true);
        this.allMenuLayerClose();
      }
    },
    mounted() {
      this.headerPlanBannerSwiper();
    },
  }
</script>