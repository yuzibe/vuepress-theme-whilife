<template>
  <header id="theme-header" :class="{'theme-header-hide':isHeaderHide}">
    <button class="mobile-navbar-btn" @click="mobileNavbarBtnTap">
      <i class="iconfont logo">&#xe673;</i>
    </button>
    <div
      class="mobile-navbar"
      ref="mobileNavbar"
      style="display:none;"
      :class="{
            'mobile-navbar-show': isNavbarLinksHide,
          }"
    >
      <router-link
        v-for="navInnerItem in $themeConfig.header.navbar.inner"
        :key="navInnerItem.name"
        :to="navInnerItem.path"
        @click.native="mobileNavbarMenuTap"
        class="inner-link"
        active-class="inner-link-active"
        exact
      >{{navInnerItem.name}}</router-link>

      <a
        v-for="navOuterItem in $themeConfig.header.navbar.outer"
        :key="navOuterItem.name"
        :href="navOuterItem.path"
        class="outer-link"
      >{{navOuterItem.name}}</a>
    </div>
    <span id="title">
      <router-link class="text" to="/">{{$themeConfig.header.title}}</router-link>
    </span>
    <div id="search"><Search /></div>
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
import Search from "@SearchBox";
export default {
  data() {
    return {
      toTopDistance: 0,
      isHeaderHide: false,
      isNavbarLinksHide: false
    };
  },
  components: { Search },
  async mounted() {
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
  },
  methods: {
    async mobileNavbarBtnTap() {
      if (this.$refs.mobileNavbar.style.display == "none") {
        this.$refs.mobileNavbar.style.display = "flex";
        setTimeout(() => {
          this.isNavbarLinksHide = !this.isNavbarLinksHide;
        }, 10);
      } else if (this.$refs.mobileNavbar.style.display == "flex") {
        this.isNavbarLinksHide = !this.isNavbarLinksHide;
        setTimeout(() => {
          this.$refs.mobileNavbar.style.display = "none";
        }, 500);
      }
    },
    async mobileNavbarMenuTap() {
      console.log(1);
      this.isNavbarLinksHide = !this.isNavbarLinksHide;
      setTimeout(() => {
        this.$refs.mobileNavbar.style.display = "none";
      }, 500);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/component/Header";
</style>