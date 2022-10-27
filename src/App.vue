<template>
  <div class="home">
    <template v-if="!isPlay">
        <cover v-model="isPlay" :tujuan="to" :posisi="position" :at="at"/>
    </template>
    <template v-else>
      <Header/>
      <Tanggal/>
      <Place/>
      <Gift/>
      <Footer/>
      <NavBottom/>
    </template>
  </div>
</template>

<script>
import Cover from '@/components/Cover.vue';
import Header from '@/components/Header.vue';
import Place from '@/components/Place.vue';
import Tanggal from '@/components/Tanggal.vue';
import Gift from '@/components/Gift.vue';
import Footer from '@/components/Footer.vue';
import NavBottom from '@/components/Nav.vue';
export default {
  name: 'Home',
  components: {
    Cover,
    Header,
    Tanggal,
    Place,
    Gift,
    Footer,
    NavBottom
  },
  data(){
    return {
        isPlay : false,
        to : null,
        position : null,
        at : null,
    }
  },
  mounted(){
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var to = urlParams.get('to');
    var position = urlParams.get('position');
    var at = urlParams.get('at');
    if(to){
        this.to = to;
    }

    this.position = position ? position : null;
    this.at = at ? at : null;
  },
  watch:{
    isPlay(val){
        if(val){
            this.isMusic = true;
        }
    }
  },
};
</script>