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
    <div id="search">
      <Search />
    </div>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          width="15"
          height="15"
          class="icon outbound"
        >
          <path
            fill="currentColor"
            d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
          />
          <polygon
            fill="currentColor"
            points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
          />
        </svg>
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
          scrollToTopDistance - this.toTopDistance < 1 ? false : true;
        this.toTopDistance = scrollToTopDistance;
      },
      true
    );
  },
  methods: {
    async mobileNavbarBtnTap() {
      if (this.$refs.mobileNavbar.style.display == "none") {
        this.$refs.mobileNavbar.style.display = "";
        setTimeout(() => {
          this.isNavbarLinksHide = !this.isNavbarLinksHide;
        }, 10);
      } else if (this.$refs.mobileNavbar.style.display != "none") {
        this.isNavbarLinksHide = !this.isNavbarLinksHide;
        setTimeout(() => {
          this.$refs.mobileNavbar.style.display = "none";
        }, 500);
      }
    },
    async mobileNavbarMenuTap() {
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