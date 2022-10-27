<template>
  <section class="footer p-0">
        <div class="container">
            <div class="mx-auto justify-content-center">
                <h1 class="title">Terimakasih</h1>
                <h2 class="subtitle">Api & Krisna</h2>
                <div class="row">
                    <div class="col-md-6">
                        <p>
                          Bapak Bubun Setiadi<br>
                          Ibu Iis Ratna Maryati
                        </p>
                    </div>
                    <div class="col-md-6">
                      Bapak Acep Sudarman Nuri<br>
                      Ibu Fitriyani
                    </div>
                </div>
            </div>
        </div>
  </section>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>

.footer {
    width: 100%;
    height: 30vh;
}

.footer::before {
    background: url(../assets/fbl.png) no-repeat;
    background-size: contain;
    background-position: bottom left;
    bottom: 0;
    left: 0;
    -webkit-animation: slideBottomLeft 0.5s forwards;
    -webkit-animation-delay: 2.5s;
    animation: slideBottomLeft 0.5s forwards;
    animation-delay: 2.5s;
}


.footer::after {
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

.footer::before, .footer::after {
    display: block;
    content: "";
    height: 30vh;
    width: 45%;
    position: absolute;
}


@media (max-width: 576px) {
    footer::before,
    footer::after {
        height: 30vh;
    }
    .footer::before,
    .footer::after {
        width: 60% !important;
    }
}

</style>