<template>
  <main-page></main-page>
  <about-page></about-page>
  <products-page></products-page>
  <contacts-page></contacts-page>
</template>

<script>
import MainPage from './components/MainPage.vue';
import AboutPage from './components/AboutPage.vue';
import ProductsPage from './components/ProductsPage.vue';
import ContactsPage from './components/ContactsPage.vue';

export default {
  name: 'App',
  components: {
    MainPage,
    AboutPage,
    ProductsPage,
    ContactsPage
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #F3F4F7;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
