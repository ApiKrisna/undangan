<template>
<section id="date">
    <div class="header-top"></div>
    <div class="container mt-5 mt-lg-0">
        <div class="mx-auto py-3">
            <h2 class="title fw-bold">Tanggal & Waktu</h2>
            <h4 class="display-5 ">Rabu, 07 Desember 2022</h4>
            <vue-countdown :time="time" :interval="1000" v-slot="{ days, hours, minutes}">
                <h4 class="display-6">{{ days }} Hari, {{ hours }} Jam, {{ minutes }} Menit</h4>
            </vue-countdown>
        </div>
        <div class="my-3">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-6">
                    <div class="row justify-content-center">
                        <div class="col-6">
                            <img src="../assets/icons/ring.png" class="img-fluid" alt="">
                        </div>
                    </div>
                    <h4 class="fs-3">Akad Nikah</h4>
                    <h5 class="fs-6">Pukul 08.00 - 10.00 WIB</h5>
                </div>
                <div class="col-lg-4 col-6 border-lg-top">
                    <div class="row justify-content-center">
                        <div class="col-6">
                            <img src="../assets/icons/reception.png" class="img-fluid" alt="">
                        </div>
                    </div>
                    <h4 class="fs-3">Resepsi</h4>
                    <h5 class="fs-6">Pukul 11.00 - 14.00 WIB</h5>
                </div>
            </div>
        </div>
        <a class="btn btn-draw btn-sm mt-5" target="_blank" href="https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Api+%26+Krisna&details=Pernikahan+Api+Dan+Krisna&location=Heima+Awiligar%2C+Cibeunying+Kec.+Cimenyan,+Kabupaten+Bandung,+Jawa+Barat+40191%2C+Indonesia&dates=20221207T030000Z%2F20221207T080000Z">
            Simpan Tanggal
        </a>
    </div>
</section>
</template>


<script>
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
  name: 'tanggal',
  components :{
    VueCountdown
  },
  data() {
    const now = new Date();
    const newYear = new Date('2022-12-07');

    return {
      time: newYear - now,
    };
  },
}
</script>
