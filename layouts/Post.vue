<template>
  <div class="posts-layout">
    <div class="post-layout">
      <div class="post">
        <div class="timeline">
          <a class="category-logo">
            <i class="iconfont logo">&#xe66e;</i>
          </a>
          <div class="time">11月15日</div>
          <div class="category-text">默认分类</div>
        </div>
        <div class="content">
          <Content />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" >
@import "../styles/Post";
@import '~prismjs/themes/prism-tomorrow.css'
</style>

