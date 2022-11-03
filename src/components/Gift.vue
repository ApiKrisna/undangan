<template>
  <section class="gift p-0" id="gift">
        <div class="container">
            <div class="mx-auto justify-content-center pt-5">
                <div class="my-5">
                    <h2 class="title">Tanda Kasih</h2>
                    <p class="fs-6">Do'a restu keluarga, sahabat serta rekan-rekan semua di pernikahan kami sudah sangat cukup sebagai hadiah, tetapi memberi merupakan tanda kasih, kami dengan senang hati menerimanya dan tentunya semakin melengkapi kebahagiaan kami</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="m-2 mb-5 m-b-mobile bank-card bank-card--BCA">
                        <div class="bank-card__logo">
                            <img src="../assets/logo-bca.png" alt="">
                        </div>
                        <div class="bank-card__text fs-5">
                          8320449945
                          <button class="btn btn-outline-dark copy-card"
                                  type="button"
                                  v-clipboard:copy="bca"
                                  v-clipboard:success="onCopy"
                                  v-clipboard:error="onError"
                          >
                            copy
                          </button>
                          <br>
                          a.n: Fahira Alfhi Diningrat
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="m-2 mb-5 m-b-mobile bank-card bank-card--BRI">
                        <div class="bank-card__logo">
                            <img src="../assets/logo-bri.svg" alt="">
                        </div>
                        <div class="bank-card__text fs-5">
                          406601007852501
                          <button class="btn btn-outline-dark copy-card"
                                  type="button"
                                  v-clipboard:copy="bri"
                                  v-clipboard:success="onCopy"
                                  v-clipboard:error="onError"
                          >
                            copy
                          </button>
                          <br>
                          a.n: Krisna Setiadi
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>
</template>

<script>
export default {
  name: 'Gift',
  data: function () {
    return {
      bri: '406601007852501',
      bca: '8320449945'
    }
  },
  methods: {
    onCopy: function (e) {
      this.$toasted.show('You just copied the following text to the clipboard: ' + e.text)
      // alert('You just copied the following text to the clipboard: ' + e.text)
    },
    onError: function (e) {
      this.$toasted.show('Failed to copy the text to the clipboard')
      // alert('Failed to copy the text to the clipboard')
      console.log(e);
    }
  }
}
</script>

<style scoped>
.bank-card {
    padding: 20px 24px;
    border-radius: 8px;
    box-shadow: 0 0 6px 0 rgb(0 0 0 / 16%);
    background-repeat: no-repeat;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border: solid 2px #41403E;
}

.copy-card {
  margin-top: -5px;
  padding: 0px 8px;
  border-radius: 8px;
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 16%);
  background-repeat: no-repeat;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: solid 1px #41403E;
}

.bank-card__logo {
    text-align: right;
    min-height: 57px;
}

.bank-card--BCA {
    background-image: url(../assets/bg-bca.svg);
    background-position: right -22px bottom -34px;
}


.bank-card--BRI {
    background-image: url(../assets/bg-bri.png);
    background-position: right 0 bottom 0;
}

.bank-card__text {
    text-align: left;
    font-weight: 400;
}
</style>