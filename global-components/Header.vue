<template>
  <header id="theme-header" :class="{'theme-header-hide':isHeaderHide}">
    <span id="title">
      <router-link class="text" to="/">{{$themeConfig.header.title}}</router-link>
    </span>
    <ul id="navbar">
      <li
        class="nav-item"
        v-for="navInnerItem in $themeConfig.header.navbar.inner"
        :key="navInnerItem.name"
      >
        <router-link
          :to="navInnerItem.path"
          class="inner-link"
          active-class="inner-link-active"
          exact
        >{{navInnerItem.name}}</router-link>
      </li>
      <li
        class="nav-item"
        v-for="navOuterItem in $themeConfig.header.navbar.outer"
        :key="navOuterItem.name"
      >
        <a :href="navOuterItem.path" class="outer-link">{{navOuterItem.name}}</a>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  data() {
    return {
      toTopDistance: 0,
      isHeaderHide: false
    };
  },
  mounted() {
    window.addEventListener(
      "scroll",
      () => {
        let scrollToTopDistance =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        this.isHeaderHide =
          scrollToTopDistance - this.toTopDistance < 0 ? false : true;
        this.toTopDistance = scrollToTopDistance;
      },
      true
    );
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/component/Header";
</style>