<template>
  <div id="layout">
    <page-header />
    <wall-paper />
    <main-layout />
    <page-footer />
  </div>
</template>

<script>
import MainLayout from "@app/components/GlobalLayout.vue";

export default {
  components: { MainLayout: MainLayout }
};
</script>

<style lang="scss">
@import "../styles/_variable.scss";
@import "../styles/base.scss";
</style>