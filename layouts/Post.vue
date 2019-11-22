<template>
  <div class="posts-layout">
    <div class="post-layout">
      <div class="post">
        <div class="timeline">
          <svg class="icon category-logo" aria-hidden="true">
            <use ref="logo" :xlink:href="'#icon-'+$page.frontmatter.logo" />
          </svg>

          <div class="time">{{$page.frontmatter.time}}</div>
          <div class="category-text">{{$page.frontmatter.text}}</div>
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
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" >
@import "../styles/Post";
</style>

