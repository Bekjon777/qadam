<template>
  <div class="wrapper">
    <div class="title">QADAM - OYOQLARINGIZ UCHUN ENG YAXSHI TANLOV</div>
    <div class="text">
      Bizning firma eng zamonaviy uskunalardan foydalangan holda mijozlarimiz
      uchun qulay va zamonaviy ko'rinishdagi oyoq kiyimlarnin ishlab chiqaradi
      va hokazo balo battar. Shunga o'xshash gaplar. Mijozlar uchun nima
      gapirish niyat bo'lsa shu saytda aytish mumkin.
    </div>
    <img src="../assets/about-image.jpg" />
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 30px auto;
  align-items: center;
}
.title {
  grid-column: 1 / 3;
  padding-top: 40px;
}
.text {
  text-align: left;
  padding-left: 40px;
}
img {
  height: 70%;
  width: 80%;
  justify-self: right;
}
</style>
