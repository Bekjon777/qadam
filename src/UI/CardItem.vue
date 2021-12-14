<template>
  <el-row>
    <el-col :span="6" :offset="index > 0 ? 2 : 0">
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="../assets/product2.png"
          class="image"
        />
        <div class="description">
          <span style="font-weight: 600;">Model: X001-A</span>
          <div style="font-size: 16px; padding-top: 14px">
            Erkaklar uchun 39-44 o'lchovlarda<br> Havo o'tkazuvchan<br> Bog'ichsiz yozgi
            krossovkalar
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const currentDate = ref(new Date());

    return {
      currentDate,
    };
  },
});
</script>

<style scoped>
.description {
  padding: 14px; 
  color: #021F71;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
