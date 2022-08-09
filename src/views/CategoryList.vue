<template>
  <div class="category-list-wrap">
    <h2 class="ptitle">{{ ptitle }}</h2>
    <div class="aside-container">
      <div class="aside">
        <div class="lnb-menu-wrap">
          <span class="ltitle">카테고리</span>
          <ul class="lnb-menu">
            <template v-if="activeDepthArr[0].activeDepth === 1">
              <li class="menu-item" v-for="value in allMenuList[this.activeDepthArr[0].depth1Idx].subList" :key="value.id">
                <router-link :to="{ name: 'categoryList', query: { menuId: value.id }}">
                  {{value.title}}
                </router-link>
              </li>
            </template>
            <template v-if="activeDepthArr[0].activeDepth === 2">
              <li class="menu-item" v-for="value in allMenuList[activeDepthArr[0].depth1Idx].subList[activeDepthArr[0].depth2Idx].subList" :key="value.id">
                <router-link :to="{ name: 'categoryList', query: { menuId: value.id }}">
                  {{value.title}}
                </router-link>
              </li>
            </template>
            <template v-if="activeDepthArr[0].activeDepth === 3 || activeDepthArr[0].activeDepth === 4">
              <li class="menu-item" v-for="value in allMenuList[activeDepthArr[0].depth1Idx].subList[activeDepthArr[0].depth2Idx].subList[activeDepthArr[0].depth3Idx].subList" :key="value.id">
                <router-link :to="{ name: 'categoryList', query: { menuId: value.id }}">
                  {{value.title}}
                </router-link>
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div class="aside-contents">
        <div class="list-sort-wrap">
          <h2 class="list-count">총 {{ prodCategoryArr.length }}개</h2>

          <ul class="sort-control-box">
            <li>
              <div class="sort-toggle-box js-sort-toggle-box">
                <button type="button" class="btn-sort js-btn-sort" @click="setSortListToggle"><span class="text">인기순</span></button>
                <ul class="sort-list js-sort-list" @mouseleave="sortListLayerClose">
                  <!-- DESC : 활성화된 menu명 is-active class 추가 -->
                  <li class="item is-active"><button type="button" class="btn-sort-item" @click="sortSelect"><span class="text">인기순</span></button></li>
                  <li class="item"><button type="button" class="btn-sort-item" @click="sortSelect"><span class="text">낮은가격순</span></button></li>
                  <li class="item"><button type="button" class="btn-sort-item" @click="sortSelect"><span class="text">높은가격순</span></button></li>
                  <li class="item"><button type="button" class="btn-sort-item" @click="sortSelect"><span class="text">최신순</span></button></li>
                  <li class="item"><button type="button" class="btn-sort-item" @click="sortSelect"><span class="text">상품평순</span></button></li>
                </ul>
              </div>
            </li>
            <li>
              <button type="button" class="btn-view-type list" @click="prodViewType"><i class="ico-view-type"><span class="offscreen">리스트형 보기</span></i></button>
              <button type="button" class="btn-view-type thumbnail is-active" @click="prodViewType"><i class="ico-view-type"><span class="offscreen">썸네일형 보기</span></i></button>
            </li>
          </ul>
        </div>

        <prod-list :items="prodCategoryArr" :activeDepthArr="activeDepthArr"></prod-list>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import ProdList from '@/components/ProdList';
import {allMenuList, prodList} from "@/store/store";

export default {
  props: {
    activeDepthArr: Array,
    ptitle: String,
  },
  components: {
    ProdList
  },
  data(){
    return{
      prodCategoryArr: [],
    }
  },
  computed:{
    ...mapState(['allMenuList', 'prodList']),
  },
  created () {
  },
  watch: {
    '$route' () {
      this.categoryProdSort();
    },

  },
  methods:{

    // 인기순 정렬 list OnOff
    setSortListToggle(){
      if(document.querySelectorAll('.js-sort-toggle-box')[0].classList.contains('is-open')){
        document.querySelectorAll('.js-sort-toggle-box')[0].classList.remove('is-open');
      }else{
        document.querySelectorAll('.js-sort-toggle-box')[0].classList.add('is-open');
      }
    },

    // 인기순 정렬 mouseleave시 close
    sortListLayerClose(){
      document.querySelectorAll('.js-sort-toggle-box')[0].classList.remove('is-open');
    },

    // 인기순 정렬 open 후 열림 시 텍스트 변경, layer close
    sortSelect(e){
      const listTxt = e.target.innerHTML;
      for(let i=0; i<document.querySelectorAll('.js-sort-toggle-box .js-sort-list li').length; i++){
        document.querySelectorAll('.js-sort-toggle-box .js-sort-list li')[i].classList.remove('is-active');
      }
      e.target.parentNode.parentNode.classList.add('is-active');
      document.querySelectorAll('.js-sort-toggle-box .js-btn-sort .text')[0].innerHTML = listTxt;
      document.querySelectorAll('.js-sort-toggle-box')[0].classList.remove('is-open');
    },

    // 상품 정렬 타입 (list, thumbnail)
    prodViewType(e){
      if(document.querySelectorAll('.js-prod-grid').length > 0){
        for(let i=0; i<document.querySelectorAll('.btn-view-type').length; i++){
          document.querySelectorAll('.btn-view-type')[i].classList.remove('is-active');
        }
        const tg = e.currentTarget;
        tg.classList.add('is-active');

        if(tg.classList.contains('list')){
          document.querySelectorAll('.js-prod-grid')[0].classList.remove('type-col');
          for(let i=0; i<document.querySelectorAll('.js-prod-grid .prod-item').length; i++){
            document.querySelectorAll('.js-prod-grid .prod-item')[i].classList.add('horizontal');
          }
        }else{
          document.querySelectorAll('.js-prod-grid')[0].classList.add('type-col');
          for(let i=0; i<document.querySelectorAll('.js-prod-grid .prod-item').length; i++){
            document.querySelectorAll('.js-prod-grid .prod-item')[i].classList.remove('horizontal');
          }
        }
      }
    },

    // 카테고리 상품
    categoryProdSort(){
      let depth4List = [];
      const allProdArr = [];
      const prodCategoryIdArr = [];
      this.prodCategoryArr = [];

      //전체 prodList id 배열 생성
      for(let i=0; i<prodList.length; i++){
        allProdArr.push(prodList[i].menuId);
      }

      // 4depth menu id 추출 배열 생성
      if(this.activeDepthArr[0].activeDepth === 1){
        for(let i=0; i<allMenuList[this.activeDepthArr[0].depth1Idx].subList.length; i++){ // 2depth
          for(let j=0; j<allMenuList[this.activeDepthArr[0].depth1Idx].subList[i].subList.length; j++){ // 3depth
            for(let k=0; k<allMenuList[this.activeDepthArr[0].depth1Idx].subList[i].subList[j].subList.length; k++){ // 4depth
              depth4List.push(allMenuList[this.activeDepthArr[0].depth1Idx].subList[i].subList[j].subList[k].id);
            }
          }
        }
      }else if(this.activeDepthArr[0].activeDepth === 2){
        for(let i=0; i<allMenuList[this.activeDepthArr[0].depth1Idx].subList[this.activeDepthArr[0].depth2Idx].subList.length; i++) { // 2depth
          for (let j=0; j<allMenuList[this.activeDepthArr[0].depth1Idx].subList[this.activeDepthArr[0].depth2Idx].subList[i].subList.length; j++) {
            depth4List.push(allMenuList[this.activeDepthArr[0].depth1Idx].subList[this.activeDepthArr[0].depth2Idx].subList[i].subList[j].id);
          }
        }
      }else if(this.activeDepthArr[0].activeDepth === 3){ // 3depth
        for(let i=0; i<allMenuList[this.activeDepthArr[0].depth1Idx].subList[this.activeDepthArr[0].depth2Idx].subList[this.activeDepthArr[0].depth3Idx].subList.length; i++) {
          depth4List.push(allMenuList[this.activeDepthArr[0].depth1Idx].subList[this.activeDepthArr[0].depth2Idx].subList[this.activeDepthArr[0].depth3Idx].subList[i].id);
        }
      }else{ // 4depth
        depth4List.push(allMenuList[this.activeDepthArr[0].depth1Idx].subList[this.activeDepthArr[0].depth2Idx].subList[this.activeDepthArr[0].depth3Idx].subList[this.activeDepthArr[0].depth4Idx].id);
      }

      // depth4List, allProdArr 비교하여 depth4List에 포함되는 menuId 추출
      for(let i=0; i<allProdArr.length; i++){
        for(let j=0; j<depth4List.length; j++){
          if(depth4List[j] === allProdArr[i]){
            prodCategoryIdArr.push(allProdArr[i]);
          }
        }
      }

      // 추출한 상품의 menuId 의 전체 배열 생성
      for(let i=0; i<prodList.length; i++){
        for(let j=0; j<prodCategoryIdArr.length; j++){
          if(prodList[i].menuId === prodCategoryIdArr[j])
          this.prodCategoryArr.push(prodList[i])
        }
      }
    }
  },
  mounted() {
    this.categoryProdSort();
  }
};
</script>