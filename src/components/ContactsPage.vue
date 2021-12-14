<template>
  <div class="wrapper">
    <div class="title">BIZ BILAN BOG'LANING</div>
    <section style="margin-bottom: 10px">
      <el-icon style="justify-self: right; padding-right: 10px;" color="#F47721"><location /></el-icon>
      <div>Manzilimiz</div>
    </section>
    <section>
      <div></div>
      <div style="font-size: 16px; text-align: left">
        <div>O'zbekiston Respublikasi</div>
        <div>Farg'ona Viloyati</div>
        <div>Dang'ara tumani</div>
        <div>Chinobod MFY</div>
      </div>
    </section>
    <section>
      <el-icon style="justify-self: right; padding-right: 10px;" color="#F47721"><phone /></el-icon>
      <div>+99 (891) 555-11-77</div>
    </section>
    <section>
      <el-icon style="justify-self: right; padding-right: 10px;" color="#F47721"><message /></el-icon>
      <div>qadam.uz@internet.ru</div>
    </section>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
}
.title {
  padding: 40px 0;
}
section {
  display: grid;
  margin: 0 0 20px 20px;
  grid-template-columns: 1fr 6fr;
  justify-items: left;
}
</style>