<template>
  <nav id="wall-paper">
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
<style lang="scss">
@import "../styles/base/_Variable.scss";
#wall-paper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #49b1f5;
  background-attachment: fixed;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  height: 552px;
  z-index: -1;
}
#site-sub-title,
#site-title {
  color: #eee;
  text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
  line-height: 1.5;
  font-size: 1.2rem;
}
#site-title {
  font-weight: 700;
  font-size: 2rem;
}
</style>