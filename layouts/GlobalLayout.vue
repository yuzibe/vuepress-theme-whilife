<template>
  <div id="layout">
    <page-header />
    <wall-paper />  
    <DefaultGlobalLayout />    <br>
    <footer style="background-color: #DDD"><a href="https://github.com/ulivz/70-lines-of-vuepress-blog-theme">Github</a> · Powered by VuePress</p>
</footer>
  </div>
</template>

<script>
  import GlobalLayout from '@app/components/GlobalLayout.vue'

  export default {
    components: { DefaultGlobalLayout: GlobalLayout },

  }


</script>

<style lang="scss">
@import "../styles/_variable.scss";
@import "../styles/base.scss";

</style>