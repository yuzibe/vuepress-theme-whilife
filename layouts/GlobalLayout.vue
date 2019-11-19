<template>
  <div id="global-layout">
    <Header />
    <Wallpaper />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Main from "@app/components/GlobalLayout.vue";

export default {
  created() {
    console.log(this.$themeConfig);
  },
  components: {
    Main: Main
  }
};
</script>

<style lang="scss">
@import "../styles/base/Base.scss";
</style>