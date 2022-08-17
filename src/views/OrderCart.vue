<template>
  <div class="sec">
    <!--S:contbox || 장바구니-->
    <div class="contbox no-cont-bpd">
      <!--S:contbox-body-->
      <div class="contbox-body">
        <div class="contbox-body-inner">
          <h2 class="offscreen">장바구니 목록</h2>
          <!-- s : gray-chk-box -->
          <div class="gray-chk-box">
            <!-- s : ui-chk -->
            <span class="ui-chk">
              <input id="chkCartAll" type="checkbox">
              <label for="chkCartAll">전체선택</label>
            </span>
            <!-- e : ui-chk -->

            <button type="button" class="btn-xsm btn-lngray"><span class="text">선택삭제</span><i class="ico-list-del"></i>
            </button>
          </div>
          <!-- e : gray-chk-box -->

          <ul class="cart-list">
            <li class="cart-item" v-for="(item, idx) in cartList" :key="idx">
              <div class="cart-header">
                <!-- s : ui-chk -->
                <span class="ui-chk">
                  <input :id="`chkCartBrand${idx}`" type="checkbox">
                  <label :for="`chkCartBrand${idx}`">{{item.brandName}}</label>
                </span>
                <!-- e : ui-chk -->
              </div>
              <div class="cart-cont">
                <ul class="cart-prod-list">
                    <li class="list-item" v-for="(subItem, subIdx) in item.prodList" :key="subIdx">
                      <div class="cart-prod-info">
                        <!-- s : ui-chk -->
                        <span class="ui-chk no-label">
                          <input :id="`chkCart${subIdx}`" type="checkbox">
                          <label :for="`chkCart${subIdx}`"><span class="offscreen">선택</span></label>
                        </span>
                        <!-- e : ui-chk -->

                        <!-- s : prod-item -->
                        <span class="prod-item horizontal">
                          <!-- s : img-box -->
                          <span class="img-box size-sm">
                            <img :src="require(`@/assets/images/${subItem.prodInfo.thumbnail[0]}`)" :alt=subItem.prodInfo.alt[0]>
                          </span>
                          <!-- e : img-box -->

                          <!-- s : info-box -->
                          <span class="info-box">
                            <!-- s : 상품명 -->
                            <span class="prod-name">
                              <span class="tv-shopping" v-if="subItem.prodInfo.tvShoppingVal">TV 쇼핑</span>
                              <span class="text"><span class="label" v-if="subItem.prodInfo.labelText">{{ subItem.prodInfo.labelText }}</span> {{ subItem.prodInfo.prodTitle }}</span>
                            </span>
                            <!-- e : 상품명 -->

                            <!-- s : 상품가 -->
                            <span class="prod-price">
                              <span class="discount-price">
                                <span class="percent" v-if="subItem.prodInfo.discountPercent > 0">{{ subItem.prodInfo.discountPercent }}%</span>
                                <span class="price">
                                  <span class="val">{{ subItem.prodInfo.prodPrice - ((subItem.prodInfo.prodPrice * 0.01) * subItem.prodInfo.discountPercent) | priceCommas }}</span>
                                  <span class="unit">원</span>
                                </span>
                              </span>
                              <span class="price-normal" v-if="subItem.prodInfo.discountPercent > 0">
                                <span class="val">{{ subItem.prodInfo.prodPrice | priceCommas }}</span>
                                <span class="unit">원</span>
                              </span>
                            </span>
                            <!-- e : 상품가 -->

                            <!-- s : 상품옵션 -->
                            <span class="prod-option">
                              <span class="val">단일상품</span>
                              <span class="count">{{ subItem.cntVal }}개</span>
                            </span>
                            <!-- e : 상품옵션 -->
                          </span>
                          <!-- e : info-box -->


                          <router-link :to="{ name: 'categoryDetail', query: { menuId: subItem.prodInfo.menuId, prodId: subItem.prodInfo.id }}" class="prod-link"><span class="offscreen">상품 바로가기</span></router-link>
                        </span>
                        <!-- e : prod-item -->

                        <div class="btn-wrap">
                          <button type="button" class="btn-sm btn-lngray" disabled>옵션/수량변경</button>
                          <a href="#!" class="btn-sm btn-lnspot">바로구매</a>
                        </div>

                        <button type="button" class="btn-cart-del"><span class="offscreen">삭제</span></button>
                      </div>
                    </li>
                </ul>
              </div>
              <div class="cart-footer">
                <div class="cart-price">
                  <span class="price">
                    <span class="val">{{ item.brandPrice | priceCommas }}</span>
                    <span class="unit">원</span>
                  </span>
                  <span class="delivery">
                    <span class="text">배송비</span>
                    <span class="val">{{ item.brandDeliveryPrice | priceCommas }}</span>
                    <span class="unit">원</span>
                  </span>
                  <span class="total">
                    <span class="val">{{ item.brandPrice + item.brandDeliveryPrice | priceCommas }}</span>
                    <span class="unit">원</span>
                  </span>
                </div>
                <a href="#!" class="link-text-more">묶음상품 더보기</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--E:contbox-body-->
    </div>
    <!--E:contbox || 장바구니-->
    <!--S:contbox || 결제금액-->
    <div class="contbox no-cont-bpd">
      <!--S:contbox-body-->
      <div class="contbox-body">
        <div class="contbox-body-inner">
          <h2 class="atctitle">결제금액</h2>
          <div class="pay-price-wrap">
            <div class="pay-price-body">
              <!-- s: col-price -->
              <div class="col-price">
                <table class="tbl-pay-price">
                  <caption>결제금액</caption>
                  <colgroup>
                    <col style="width: auto;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">배송비</th>
                      <td>
                        <div class="price">
                          <span class="val">+2,500</span><span class="unit">원</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- e: col-price -->
            </div>

            <div class="pay-price-footer">
              <dl class="total-price">
                <dt>최종 결제 금액</dt>
                <dd>
                  <div class="price">
                    <span class="val">444,128,200</span><span class="unit">원</span>
                  </div>
                </dd>
              </dl>
            </div>

            <!-- s : info-text-list -->
            <ul class="info-text-list">
              <li class="dot-text">장바구니 상품은 최대 100개까지 보관 가능합니다.</li>
              <li class="dot-text">최대 30일 동안 보관되며 판매 중단 된 상품은 자동으로 삭제됩니다.</li>
            </ul>
            <!-- e : info-text-list -->
          </div>
        </div>
      </div>
      <!--E:contbox-body-->
    </div>
    <!--E:contbox || 결제금액-->
  </div>
</template>

<script>
import {mapState} from "vuex";
import {CART_ARR} from "@/store/store";

export default {
  data() {
    return {
      totalProdPrice: [],
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
    ...mapState(['prodList', 'cartList', 'brandList']),
  },
  watch: {

  },
  methods: {
    // 장바구니 리스트 저장(상품id, 갯수)
    setCartList(){
      const brandId = this.$route.params.brandId;
      const prodId = this.$route.params.prodId;
      const cnt = this.$route.params.cnt;

      this.$store.commit(CART_ARR, {brandIdVal: brandId, prodIdVal: prodId, cntVal: cnt});
    },

  },
  created() {
    console.log("???")
    this.setCartList();
  },
  mounted() {
  },
};
</script>