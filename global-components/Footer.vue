<template>
  <footer id="theme-footer">
    <div
      id="copyright"
    >©{{$themeConfig.footer.copyright.startFullYear == new Date().getFullYear()?new Date().getFullYear():$themeConfig.footer.copyright.startFullYear + ' - ' + new Date().getFullYear()}} By {{$themeConfig.footer.copyright.name}}</div>
    <div class="framework">
      <span>Driven -</span>
      <a href="https://vuepress.vuejs.org" class="footer-link">
        <span>VuePress</span>
      </a>
      <span class="footer-separator">|</span>
      <span>Theme -</span>
      <a href="https://github.com/atsvvx/vuepress-theme-whilife" class="footer-link">
        <span>Whilife</span>
      </a>
    </div>
    <div class="custom" v-html="$themeConfig.footer.custom"></div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../styles/component/Footer";
</style>