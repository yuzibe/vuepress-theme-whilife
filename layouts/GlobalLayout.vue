<template>
  <div id="global-layout">
    <page-header />
    <wall-paper />
    <main-layout />
    <page-footer />
  </div>
</template>

<script>
import MainLayout from "@app/components/GlobalLayout.vue";

export default {
  created() {
    console.log(this.$themeConfig);
    
  },
  components: { MainLayout: MainLayout }
};
</script>

<style lang="scss">
@import "../styles/base/Base.scss";
@import "../styles/base/_Variable.scss";
</style>