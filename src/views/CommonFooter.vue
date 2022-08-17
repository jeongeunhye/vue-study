<template>
  <div class="footer-wrapper">
    <!-- s:: footer-top -->
    <div class="footer-top">
      <div class="sec">
        <h2 class="offscreen">정책 및 약관 메뉴</h2>
        <ul class="fmenu-list">
          <li class="fnb-item" v-for="(item, idx) in fnbLink" :key="idx" :class="{'fw-bold': fnbLickFwStyle(idx)}">
            <a class="fnb-link" :href="`${item.value}`">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- e:: footer-top -->
    <!-- s:: footer-bottom -->
    <div class="footer-bottom">
      <div class="sec">

        <div class="fcol footer-ci">
          <h1 class="footer-logo"><span class="offscreen">쇼핑엔티</span></h1>
        </div>

        <div class="fcol footer-info">
          <h2 class="ftitle">주식회사 티알엔</h2>
          <div class="info-txt">대표이사 : 민택근 서울시 중구 동호로 <span class="tt-number">310</span> 별관 (장충동 2가, 태광산업) </div>
          <div class="info-txt">사업자등록번호 : <span class="tt-number">116-81-50973</span><a class="btn-link-arr" href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1168150973" target="_blank"><span class="text-line">사업자 정보 확인</span></a></div>
          <div class="info-txt">통신판매업신고 : 서울중구 <span class="tt-number">1670</span>호</div>
          <div class="info-txt">개인정보책임자 : 류인열</div>
          <div class="copy-wrap">Copyright © SHOPPING&T. All Rights Reserved.</div>
        </div>

        <div class="fcol footer-cs">
          <h2 class="ftitle">고객센터</h2>
          <div class="cs-tel">080-130-1010</div>
          <div class="cs-email">E-mail : help@trncompany.co.kr</div>
          <div class="btn-wrap">
            <button type="button" class="btn-xsm btn-lngray"><span class="tt-eng">FAQ </span>보기</button>
            <button type="button" class="btn-xsm btn-lngray"><span class="tt-number">1:1 </span>문의하기</button>
          </div>
        </div>

        <div class="fcol footer-noti">
          <h2 class="ftitle"><a href="javascript:;" class="btn-tit-arr">NOTICE</a></h2>
          <ul class="fnoti-list">
            <li class="noti-item" v-for="(item, idx) in fnotiList" :key="idx">
              <router-link class="btn-noti" :to="{path: item.value}"><span class="noti-date">{{ item.date }}</span>{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- e:: footer-bottom -->
  </div>
</template>

<script>
  export default {
    components: {

    },
    data(){
      return{
        //footer nav
        fnbLink: [
          {name: '이용약관', value: '#!',},
          {name: '청소년보호정책', value: '#!',},
          {name: '개인정보처리방침', value: '#!',},
          {name: '영상정보처리방침', value: '#!',},
          {name: '사업자정보확인', value: '#!',},
          {name: '하나은행 채무지급 보증안내', value: '#!',},
        ],

        //공지사항
        fnotiList: [
          {title : '앱리뉴얼 관련 공지', value : '#!', date : '20-03-12',},
          {title : '개인정보처리방침 개정 안내', value : '#!', date : '20-03-12',},
          {title : '폭설로 인한 배송지연 안내', value : '#!', date : '20-03-12',},
          {title : '개인정보처리방침 개정 안내2', value : '#!', date : '20-03-12',},
        ],

      }
    },
    mounted() {

    },
    computed:{

    },
    methods:{
      fnbLickFwStyle(idx){
        if(this.fnbLink[idx].name === '개인정보처리방침'){
          return true;
        }
      }
    }
  }
</script>