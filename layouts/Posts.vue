<template>
  <div class="posts-layout">
    <div class="post-layout" v-for="page in $pagination.pages" :key="page.key">
      <div class="post">
        <div class="timeline">
          <a class="category-logo">
            <i class="iconfont logo">&#xe66e;</i>
          </a>
          <div class="time">11月15日</div>
          <div class="category-text">默认分类</div>
        </div>
        <div class="content">
          <h1>
            <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
          </h1>
          <div class="excerpt" v-html="page.excerpt" />
        </div>
      </div>
    </div>
    <div class="post-layout">
      <div class="post-pagination">
        <Pagination />
      </div>
    </div>
  </div>
</template>
<script>
import { Pagination } from "@vuepress/plugin-blog/lib/client/components";
export default {
  components: {
    Pagination
  }
};
</script>



<style lang="scss" >
@import "../styles/Posts";
</style>


<style lang="scss" scoped>
.excerpt /deep/ h1 {
  display: none;
}
.page-link {
  

  text-decoration: none;

  transition: all 0.2s ease-in-out;
}
.page-link:hover {
  color: #49b1f5;
  text-decoration: none;
}
</style>