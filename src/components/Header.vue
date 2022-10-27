<template>
  <section class="full header p-0" id="header">
        <div class="header-top"></div>
        <div class="container">
            <div class="mx-auto justify-content-center pt-5">
                <div class="my-5">
                    <h2 class="arabic text-4xl font-medium">بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</h2>
                    <div class="mt-3 font-1">
                        <p>
                            Assalamu'alaikum Warahmatullahi Wabarakatuh
                        </p>
                        <p>Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan akad & resepsi pernikahan kami</p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-7 col-md-6">
                    <div class="couple-wrapper">
                        <div class="couple-img we">
                            <img src="../assets/we.jpg" alt="Api dan Krisna" class="img-fluid"/>
                        </div>
                        <img src="../assets/bg-couple.svg" class="couple-decor">
                    </div>
                </div>
            </div>
            <div class="p-5">
                <div class="couple-info">
                    <div class="row">
                        <div class="col-md-6">
                            <h4 class="mb-0 mempelai">Fahira Alfhi Diningrat</h4>
                            <!-- <hr> -->
                            <p class="text-center d-none d-lg-block">
                                <b>Putri Dari</b>
                                <br> Bpk Acep Sudarman Nuri
                              <br> Ibu Fitriyani
                            </p>
                            <p class="text-center d-sm-block d-lg-none">Putri dari Bpk Acep Sudarman Nuri & Ibu Fitriyani</p>
                        </div>
                        <div class="col-md-6">
                            <h4 class="mb-0 mempelai">Krisna Setiadi</h4>
                            <!-- <hr> -->
                            <p class="text-center d-sm-block d-lg-none">Putra sulung dari Bpk Bubun Setiadi
                              & Ibu Iis Ratna Maryati
                            </p>
                            <p class="text-center d-none d-lg-block">
                                <b>Putra Sulung Dari</b>
                                <br> Bpk Bubun Setiadi
                                <br>Ibu Iis Ratna Maryati
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-footer"></div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('https://fonts.googleapis.com/css?family=Delius+Swash+Caps');
/* @import url('https://fonts.googleapis.com/css?family=Nunito'); */
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');

.block {
    width: 100%;
    height: 100vh;
    background-size: cover;
    align-items: center;
}


.block-content {
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.header {
    position: relative;
}

.arabic {
    font-family: 'Delius Swash Caps';
}

.font-1 {
    font-family: 'Robot Slab';
}
.couple-wrapper{
    width: 220px;
    display: inline-block;
    position: relative;
}
.couple-decor{
    width: 100%;
    position: relative;
    z-index: 2;
}
.couple-img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    padding: 20px 9px 10px 29px;
}
.couple-img img{
    width: 100%;
    border-radius: 50%;
}



.header-top::before {
    background: url(../assets/tl1.png) no-repeat;
    background-size: contain;
    background-position: top left;
    top: 0;
    left: 0;
    -webkit-animation: slideTopLeft 0.5s forwards;
    -webkit-animation-delay: 2s;
    animation: slideTopLeft 0.5s forwards;
    animation-delay: 2s;
}

.mempelai {
    font-family: 'Delius Swash Caps';
}

.header-top::after {
    top: 0px;
    right: 0px;
    background: url(../assets/tr1.png) no-repeat;
    background-size: contain;
    background-position: top right;
    -webkit-animation: slideTopRight 0.5s forwards;
    -webkit-animation-delay: 2s;
    animation: slideTopRight 0.5s forwards;
    animation-delay: 2s;
}

.header-top::before, .header-top::after, .header-footer::before, .header-footer::after {
    display: block;
    content: "";
    height: 30vh;
    width: 25%;
    position: absolute;
}

.header-footer::before {
    background: url(../assets/bl1.png) no-repeat;
    background-size: contain;
    background-position: bottom left;
    bottom: 0;
    left: 0;
    -webkit-animation: slideBottomLeft 0.5s forwards;
    -webkit-animation-delay: 2.5s;
    animation: slideBottomLeft 0.5s forwards;
    animation-delay: 2.5s;
}

.header-footer::after {
    bottom: 0;
    right: -0;
    background: url(../assets/br1.png) no-repeat;
    background-size: contain;
    background-position: bottom right;
    -webkit-animation: slideBottomRight 0.5s forwards;
    -webkit-animation-delay: 2.5s;
    animation: slideBottomRight 0.5s forwards;
    animation-delay: 2.5s;
}

section {
    padding-top: 80px;
    padding-bottom: 80px;
    position: relative;
    z-index: 2;
    overflow: hidden;
}



/* Small devices (landscape phones, 576px and up) */
@media (max-width: 576px) {
    section {
        padding-top: 30px !important;
        padding-bottom: 30px !important;
    }
    footer::before,
    footer::after {
        height: 60vh;
    }
    .header-top::before,
    .header-top::after,
    .header-footer::before,
    .header-footer::after {
        width: 40% !important;
    }
    .header-frame {
        padding-top: 60px;
        padding-bottom: 60px;
    }
    .header .to {
        margin-top: -50px;
    }
    h4 {
        font-size: 18px;
    }
    h1 {
        font-size: 50px;
        line-height: 0.8;
    }
    .h5,
    h5 {
        font-size: 1rem;
    }
    h1 span {
        text-align: center;
    }
    body {
        font-size: 14px;
    }

    
    .couple-wrapper{
        width: 100% !important;
    }
}
</style>
