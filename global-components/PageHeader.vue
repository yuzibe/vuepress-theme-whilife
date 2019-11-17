<template>    
  <header id="page-header" :class="pageHeaderClass">
    <span>
      <a href="/">{{$site.title}}</a>
    </span>
    <span>
      <a
        class="site-link"
        :class="getCurrentSiteClass(val)"
        v-for="(val,key) in menusTitleAndLink"
        :key="val"
        :href="'/'+val"
      >{{key}}</a>
    </span>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menusTitleAndLink: {
        About: "about",
        Tags: "tag"
      },
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
    },
    getCurrentSiteClass(currentSiteString) {
      const pathArray = this.$route.path.split("/");
      if (currentSiteString === pathArray[1]) {
        return { "current-site": true };
      }
      return { "current-site": false };
    }
  }
};
</script>
<style scoped>
.hide {
  top: -3.25rem !important;
}
#page-header {
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

.site-link {
  position: relative;
  margin-left: 0.6rem;
  padding-bottom: 0.3rem;
  text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
  font-size: 0.7rem;
  cursor: pointer;
}
.site-link::after {
  position: absolute;
  bottom: 0;
  left: 0;

  width: 0;
  height: 0.2rem;
  background-color: #80c8f8;
  content: "";
  transition: all 0.3s ease-in-out;
}
.site-link:hover::after {
  width: 100%;
}
.current-site::after {
  width: 100%;
}
</style>