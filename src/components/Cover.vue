<template>
    <div class="cover">
        <div class="overlay"></div>
        <div class="content">
            <div class="content-body">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div class="mx-auto max-w-lg text-center">
                        <h2 class="title fs-1">UNDANGAN PERNIKAHAN</h2>
                        <div class="mempelai">Api &amp; Krisna</div>
                        <template v-if="tujuan">
                        <div class="fs-5 mb-4">Yth. Bpk/Ibu/Saudara/i</div>
                        <div class="fs-4" :class="{'mb-4' : !posisi}">{{ tujuan }}</div>
                        <div class="fs-5" v-if="posisi">{{ posisi }}</div>
                        <div class="fs-5 mb-4" v-if="at">di<br>{{ at }}</div>
                        <div class="fs-6 mb-4">Mohon maaf bila penulisan nama &amp; gelar tidak sesuai</div>
                        </template>
                        <button class="btn btn-draw btn-draw-white"
                        @click.prevent="closeCover">Buka Undangan</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Cover',
  data(){
    return {
        isClose : false
    }
  },
  props: {
    tujuan: String,
    value : Boolean,
    posisi : String,
    at : String,
  },
  methods :{
    closeCover(){
        this.isClose = !this.isClose;
        this.$emit('input', this.isClose);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Passions+Conflict');
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');

.overlay {
    background: black;
    opacity: .5;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 2;
}
.cover {
    position: fixed;
    z-index: 2000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: transparent;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: translateY(0);
}

.cover {
    background-image: url("../assets/krisna4.JPG");
    background-position: center center;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;
}
.content {
    background-color: transparent;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2002;
    color: #fff;
    left: 0;
}

.content-body {
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
.mempelai {
    font-family: 'Passions Conflict';
    font-size: 90px;
}


.font-2 {
    font-family: 'Robot Slab';
}
</style>
