<template>
  <header>
    <img src="../assets/logo4.png" alt="logo" class="logo" />
    <div class="tab">Bosh Sahifa</div>
    <div class="tab">Biz Haqimizda</div>
    <div class="tab">Mahsulotlar</div>
    <div class="tab">Bog'lanish</div>
  </header>
</template>

<style scoped>
header {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
    height: 80px;
    color: #FCFCFC;
    align-items: center;
    font-size: 20px;
}
.logo {
    height: 100%;
    padding-left: 30px;
}
.tab {
    justify-self: center;
}
</style>