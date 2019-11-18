<template>
  <footer class="footer-bg">
    <div
      class="copyright"
    >©{{$themeConfig.footer.copyright.startFullYear == new Date().getFullYear()?new Date().getFullYear():$themeConfig.footer.copyright.startFullYear + ' - ' + new Date().getFullYear()}} By {{$themeConfig.footer.copyright.name}}</div>
    <div class="framework-info">
      <span>Driven -</span>
      <a href="https://vuepress.vuejs.org">
        <span>VuePress</span>
      </a>
      <span class="footer-separator">|</span>
      <span>Theme -</span>
      <a href="https://github.com/atsvvx/vuepress-theme-whilife">
        <span>Whilife</span>
      </a>
    </div>
    <div class="theme-footer-custom" v-html="$themeConfig.footer.custom"></div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../styles/component/Footer";
</style>