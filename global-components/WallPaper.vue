<template>
  <nav id="wallpaper" ref="wallpaper">
    <div id="site-title">{{$themeConfig.wallpaper.title}}</div>
    <div id="site-sub-title">{{$themeConfig.wallpaper.subtitle}}</div>
  </nav>
</template>
<script>
export default {
  name: "WallPaper",
  data() {
    return {
      particles: []
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "../styles/component/Wallpaper";
</style>