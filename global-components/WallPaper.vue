<template>
  <nav id="wallpaper">
    <div id="site-title">{{$themeConfig.wallpaper.title}}</div>
    <div id="site-sub-title">{{$themeConfig.wallpaper.subtitle}}</div>
  </nav>
</template>
<script>
export default {
  name: "WallPaper",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "../styles/component/Wallpaper";
</style>