<template>
  <!-- s : number-count -->
  <span class="number-count">
    <button type="button" class="btn-spinner-down" @click="setUiSpinner" :disabled="disabledVal"><span class="offscreen">증가</span></button>
    <input type="text" value="0" title="수량선택" class="ui-spinner" :disabled="disabledVal" ref="numberCount">
    <button type="button" class="btn-spinner-up" @click="setUiSpinner" :disabled="disabledVal"><span class="offscreen">감소</span></button>
  </span>
  <!-- e : number-count -->
</template>

<script>
  import {REF_SPINNER} from "@/store/store";

  export default {
    props: {
      disabledVal: Boolean,
    },
    data() {
      return {
      }
    },
    methods:{
      setUiSpinner(e){
        const papa = e.currentTarget.parentNode;
        const spinnerEl = papa.childNodes[1];
        if(e.currentTarget.classList.contains('btn-spinner-down')){ //minus
          if(parseInt(spinnerEl.value) > 0) spinnerEl.value = parseInt(spinnerEl.value) - 1;
        }else{ // plus
          spinnerEl.value = parseInt(spinnerEl.value) + 1;
        }

        this.$store.commit(REF_SPINNER, this.$refs.numberCount.value);
      }
    },
    mounted() {
      this.$store.commit(REF_SPINNER, this.$refs.numberCount.value);
    },
    created() {
    }
  }
</script>

