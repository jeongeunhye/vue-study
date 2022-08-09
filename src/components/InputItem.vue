<template>
  <div class="input-wrap">
    <input type="text" class="ui-input" title="검색어 입력" ref="input"
           @focusin="setInputClear"
           @focusout="setInputClear"
           @keyup="setInputClear"
           @change="setInputClear"
           v-model="value"
    >
    <button type="button" class="btn-ip-clear" @click="setInputClear"><span class="offscreen">초기화</span></button>
  </div>
</template>

<script>
  import {HEADER_SEARCH_FOCUSOUT_CHECK, REF_INPUT} from '@/store/store';
  export default {
    data() {
      return {
        value: '',
      }
    },
    methods:{
      setInputClear(e){
        const input = e.currentTarget.parentNode.childNodes[0];
        const clearBtn = e.currentTarget.parentNode.childNodes[1];
        let oldTg = undefined;

        if(e.type === 'focusin'){ //input focus in
          input.classList.add('is-focus');
          clearBtn.style.display = 'block';

          // 같은 input에 다시 focusin하는 경우, clarBtn 다시 show check
          setTimeout(function() {
            if(oldTg !== undefined && oldTg === input && this.value !== '') {
              input.classList.add('is-focus');
              clearBtn.style.display = 'block';
            }
            oldTg = input;
          }, 200);
        }else if(e.type === 'focusout'){ //input focus out
          let oldClearBtn = e.currentTarget.parentNode.childNodes[1];

          setTimeout(function() {
            if (oldClearBtn.style.display === 'block') {
              input.classList.remove('is-focus');
              oldClearBtn.style.display = 'none';
            }
          }, 200);

          //헤더 검색어 영역인경우 focus out check
          if(e.currentTarget.parentNode.classList.contains('header-search')) {
            this.$store.commit(HEADER_SEARCH_FOCUSOUT_CHECK, this.value);

            if(this.$store.state.focusOutChk){
              const searchForm = document.getElementsByClassName('search-keyword-form')[0];
              searchForm.classList.remove('is-search');
              this.$store.state.swiperEl.update();
              this.$store.state.swiperEl.autoplay.start();
            }
          }
        }else if(e.type === 'click'){ //clear button click
          this.value = '';
          this.$refs.input.focus();
          clearBtn.style.display = 'none';
        }else if(e.type === 'keyup' || e.type === 'change'){ //input keyup, change
          if( this.value !== '' ) {
            if( clearBtn.style.display === 'none' ) {
              input.classList.add('is-focus');
              clearBtn.style.display = 'block';
            }
          }else {
            if( clearBtn.style.display === 'block' ) {
              input.classList.remove('is-focus');
              clearBtn.style.display = 'none';
            }
          }
        }
      },
    },
    mounted() {
      this.$store.commit(REF_INPUT, this.$refs.input);
    },
  }
</script>

