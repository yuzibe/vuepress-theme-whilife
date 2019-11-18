<template>
  <header id="theme-header" :class="pageHeaderClass">
    <span id="theme-header-title">
      <a href="/">{{$themeConfig.header.title}}</a>
    </span>
    <ul id="theme-header-navbar">
      <li
        class="nav-item"
        :class="(navItem.path === $route.path) ?{ cur: true }:{ cur: false }"
        v-for="navItem in $themeConfig.header.navbar"
        :key="navItem.name"
      >
        <router-link :to="navItem.path">{{navItem.name}}</router-link>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menusTitleAndLink: {},
      // use it to compare up or down
      toTopDistance: 0,
      // use it to hide page-header
      hide: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.hidePageHeader, true);
  },
  computed: {
    pageHeaderClass() {
      return {
        "flex-row-container": true,
        "justify-space-between": true,
        hide: this.hide
      };
    }
  },
  methods: {
    hidePageHeader() {
      let scrollToTopDistance =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // diff scrollToTopDistance and toTopDistance
      let flag = scrollToTopDistance - this.toTopDistance;
      // update toTopDistance
      this.toTopDistance = scrollToTopDistance;
      // handle scroll event is up or down
      if (flag < 0) {
        this.hide = false;
      } else {
        this.hide = true;
      }
    }
  }
};
</script>
<style scoped>
.hide {
  top: -3.25rem !important;
}
#theme-header {
  position: fixed;
  top: -0px;
  width: 100%;
  height: 3rem;
  padding: 1rem 2rem;
  background-color: transparent;
  background: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  z-index: 1;
}

.nav-item {
  position: relative;
  margin-left: 0.6rem;
  padding-bottom: 0.3rem;
  text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
  font-size: 0.7rem;
  cursor: pointer;
}
.nav-item:after {
  position: absolute;
  bottom: 0;
  left: 0;

  width: 0;
  height: 0.2rem;
  background-color: #80c8f8;
  content: "";
  transition: all 0.3s ease-in-out;
}
.nav-item:hover:after {
  width: 100%;
}
#theme-header-navbar .cur:after {
  width: 100%;
}
#theme-header-navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
}
#theme-header-navbar li {
  display: flex;
  flex-direction: row;
}
</style>