<template>
<section class="location" id="location">
    <div class="container">
        <div class="mx-auto py-lg-3">
            <h2 class="title fw-bold">Peta Lokasi</h2>
            <h3>Heima Awiligar (Bumi teh Mpit)</h3>
            <p>Jalan Awiligar Raya, Cibeunying, Kecamatan Cimenyan Kabupaten Bandung</p>
        </div>
        <div class="my-3 py-lg-3">
            <div class="row">
            </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1570733124845!2d107.64251421744383!3d-6.8717750999999865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7bbc7d68d83%3A0xbe2c63830641f0f4!2sHeima!5e0!3m2!1sid!2sid!4v1666776335948!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <a class="btn btn-draw btn-sm" target="_blank"  href="https://www.google.com/maps?q=4JHV+7VP+Heima,+Cibeunying,+Kec.+Cimenyan,+Kabupaten+Bandung,+Jawa+Barat+40191&ftid=0x2e68e7bbc7d68d83:0xbe2c63830641f0f4&hl=id-ID&gl=id&entry=gps&coh=0&g_ep=CAISBjYuNDAuNBgAINeCAw%3D%3D&g_st=ic">
            Lihat Lokasi
        </a>
    </div>
</section>
</template>


<script>
export default {
  name: 'place',
}
</script>
<style scoped>


.location::before {
    background: url(../assets/pl.png) no-repeat;
    background-size: contain;
    background-position: bottom left;
    bottom: 0;
    left: 0;
    -webkit-animation: slideBottomLeft 0.5s forwards;
    -webkit-animation-delay: 2.5s;
    animation: slideBottomLeft 0.5s forwards;
    animation-delay: 2.5s;
}


.location::after {
    bottom: 0;
    right: -0;
    background: url(../assets/fbr.png) no-repeat;
    background-size: contain;
    background-position: bottom right;
    -webkit-animation: slideBottomRight 0.5s forwards;
    -webkit-animation-delay: 2.5s;
    animation: slideBottomRight 0.5s forwards;
    animation-delay: 2.5s;
}

.location::before, .footer::after {
    display: block;
    content: "";
    height: 70vh;
    width: 45%;
    position: absolute;
}
</style>
