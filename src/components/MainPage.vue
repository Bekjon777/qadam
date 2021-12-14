<template>
  <div class="wrapper">
    <the-header></the-header>
    <div class="title">
      <div class="primary">QADAM</div>
      <div class="secondary">BY BAOWHLA</div>
    </div>
  </div>
</template>

<script>
import TheHeader from "../UI/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
  background-image: url("../assets/main-bg.jpg");
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
}
.title {
  color: #021f71;
  font-weight: 600;
  text-align: right;
  height: 40vh;
  width: 40vw;
  margin-top: 150px;
}
.primary {
  font-size: 100px;
}
.secondary {
  font-size: 30px;
}
</style>
