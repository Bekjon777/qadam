<template>
  <div class="wrapper">
    <div class="title">MAHSULOTLARIMIZDAN NAMUNALAR</div>
    <div class="cards">
      <el-row style="justify-content: center">
        <el-col
          v-for="(o, index) in 3"
          :key="o"
          :span="6"
          :offset="index > 0 ? 2 : 0"
        >
          <el-card :body-style="{ padding: '0px' }" shadow="always">
            <img src="../assets/product2.png" class="image" />
            <div class="description">
              <span style="font-weight: 600">Model: X001-A</span>
              <div style="font-size: 16px; padding-top: 14px">
                Erkaklar uchun 39-44 o'lchovlarda<br />
                Havo o'tkazuvchan<br />
                Bog'ichsiz yozgi krossovkalar
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  height: 100vh;
  background-image: url("../assets/product-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.title {
  grid-column: 1 / 3;
  padding: 40px 0;
}
.description {
  padding: 14px;
  color: #021f71;
}
.image {
  width: 100%;
  display: block;
}
</style>