<template>
  <div class="sec">
    <div class="breadcrumb">
      <ol class="breadcrumb-list js-breadcrumb-list">
        <li class="crumb js-crumb"><a href="#!" class="link-home">홈</a></li>
        <li class="crumb js-crumb" :class="{'is-active': activeDepthArr[0].activeDepth === 1}">
          <button type="button" class="btn-crumb" @click="setLocationToggle"><span class="text">{{ depth1Title }}</span></button>
          <ul class="sub-depth-list js-sub-depth-list" @mouseleave="locationLayerClose">
            <li class="depth-list" v-for="value in allMenuList" :key="value.id" :class="{'is-active': value.title === depth1Title}">
              <router-link :to="{ name: 'categoryList', query: { menuId: value.id }}"
                           @click.native="locationLayerClose"
              >{{value.title}}</router-link>
            </li>
          </ul>
        </li>
        <li class="crumb js-crumb" :class="{'is-active': activeDepthArr[0].activeDepth === 2}" v-if="activeDepthArr[0].depth2Idx !== undefined">
          <button type="button" class="btn-crumb" @click="setLocationToggle"><span class="text">{{ depth2Title }}</span></button>
          <ul class="sub-depth-list js-sub-depth-list" @mouseleave="locationLayerClose">
            <li class="depth-list" v-for="value in allMenuList[activeDepthArr[0].depth1Idx].subList" :key="value.id" :class="{'is-active': value.title === depth2Title}">
              <router-link :to="{ name: 'categoryList', query: { menuId: value.id }}"
                           @click.native="locationLayerClose"
              >{{value.title}}</router-link>
            </li>
          </ul>
        </li>
        <li class="crumb js-crumb" :class="{'is-active': activeDepthArr[0].activeDepth === 3}" v-if="activeDepthArr[0].depth3Idx !== undefined">
          <button type="button" class="btn-crumb" @click="setLocationToggle"><span class="text">{{ depth3Title }}</span></button>
          <ul class="sub-depth-list js-sub-depth-list" @mouseleave="locationLayerClose">
            <li class="depth-list" v-for="value in allMenuList[activeDepthArr[0].depth1Idx].subList[activeDepthArr[0].depth2Idx].subList" :key="value.id" :class="{'is-active': value.title === depth3Title}">
              <router-link :to="{ name: 'categoryList', query: { menuId: value.id }}"
                           @click.native="locationLayerClose"
              >{{value.title}}</router-link>
            </li>
          </ul>
        </li>
        <li class="crumb js-crumb" :class="{'is-active': activeDepthArr[0].activeDepth === 4}" v-if="activeDepthArr[0].depth4Idx !== undefined">
          <button type="button" class="btn-crumb" @click="setLocationToggle"><span class="text">{{ depth4Title }}</span></button>
          <ul class="sub-depth-list js-sub-depth-list" @mouseleave="locationLayerClose">
            <li class="depth-list" v-for="value in allMenuList[activeDepthArr[0].depth1Idx].subList[activeDepthArr[0].depth2Idx].subList[activeDepthArr[0].depth3Idx].subList" :key="value.id" :class="{'is-active': value.title === depth4Title}">
              <router-link :to="{ name: 'categoryList', query: { menuId: value.id }}"
                           @click.native="locationLayerClose"
              >{{value.title}}</router-link>
            </li>
          </ul>
        </li>
      </ol>
    </div>

    <router-view :activeDepthArr=activeDepthArr :ptitle=ptitle></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {allMenuList} from "@/store/store";

export default {
  components: {
  },
  data(){
    return{
      activeDepthArr: [],
      depth1Title: '',
      depth2Title: '',
      depth3Title: '',
      depth4Title: '',
      ptitle: '',
    }
  },
  computed:{
    ...mapState(['allMenuList']),
  },
  created () {
    this.getActiveMenu();
  },
  watch: {
    '$route' () {
      this.getActiveMenu();
    },

  },
  methods:{
    // active menu query로 받아옴
    getActiveMenu () {
      this.activeDepthArr = [];
      let activeDepthVal, depth1IdxVal, depth2IdxVal, depth3IdxVal, depth4IdxVal, menuId;
      menuId = this.$route.query.menuId !== undefined ? this.$route.query.menuId : '';
      depth1IdxVal = parseInt(menuId.substring(1, 3)) - 1 < 0 ? undefined : parseInt(menuId.substring(1, 3)) - 1;
      depth2IdxVal = parseInt(menuId.substring(3, 4)) - 1 < 0 ? undefined : parseInt(menuId.substring(3, 4)) - 1;
      depth3IdxVal = parseInt(menuId.substring(4, 5)) - 1 < 0 ? undefined : parseInt(menuId.substring(4, 5)) - 1;
      depth4IdxVal = parseInt(menuId.substring(5, 6)) - 1 < 0 ? undefined : parseInt(menuId.substring(5, 6)) - 1;

      if(depth1IdxVal !== undefined){
        this.depth1Title = allMenuList[depth1IdxVal].title;
        this.ptitle = this.depth1Title;
        activeDepthVal = 1;

        if(depth2IdxVal !== undefined){
          this.depth2Title = allMenuList[depth1IdxVal].subList[depth2IdxVal].title;
          this.ptitle = this.depth2Title;
          activeDepthVal = 2;
        }

        if(depth3IdxVal !== undefined){
          this.depth3Title = allMenuList[depth1IdxVal].subList[depth2IdxVal].subList[depth3IdxVal].title;
          this.ptitle = this.depth3Title;
          activeDepthVal = 3;
        }

        if(depth4IdxVal !== undefined){
          this.depth4Title = allMenuList[depth1IdxVal].subList[depth2IdxVal].subList[depth3IdxVal].subList[depth4IdxVal].title;
          this.ptitle = this.depth4Title;
          activeDepthVal = 4;
        }
      }

      this.activeDepthArr.push({depth1Idx: depth1IdxVal, depth2Idx: depth2IdxVal, depth3Idx: depth3IdxVal, depth4Idx: depth4IdxVal, activeDepth: activeDepthVal});
    },

    // location sub on off
    setLocationToggle(e){
      let tgEl = e.currentTarget;
      if(tgEl.parentNode.classList.contains('is-open')){
        tgEl.parentNode.classList.remove('is-open');
      }else{
        for(let i=0; i<document.querySelectorAll('.js-crumb').length; i++){
          document.querySelectorAll('.js-crumb')[i].classList.remove('is-open');
        }
        tgEl.parentNode.classList.add('is-open');
      }
    },

    // location 영역 mouseleave시 close
    locationLayerClose(){
      for(let i=0; i<document.querySelectorAll('.js-crumb').length; i++){
        document.querySelectorAll('.js-crumb')[i].classList.remove('is-open');
      }
    },
  },
  mounted() {
  }
};
</script>