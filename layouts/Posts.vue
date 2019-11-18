<template>
  <div class="posts">
    <div class="post-container" v-for="page in $pagination.pages" :key="page.key">
      <div class="post">
        <div class="timeline">
          <a class="category-logo">
            <i class="iconfont">&#xe66e;</i>
          </a>
          <div class="time">11月15日</div>
          <div class="category-text">默认分类</div>
        </div>
        <div class="content">
          <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
          <div class="excerpt" v-html="page.excerpt" />
        </div>
      </div>
    </div>
    <div class="post-container">
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
@import "../styles/Posts.scss";
</style>


<style lang="scss" scoped>
.excerpt /deep/ h1 {
  display: none;
}
.page-link {
  margin-bottom: 0.3rem;
  border-bottom: 1px solid #eee;
  color: #2e2e2e;
  text-decoration: none;
  font-size: 1.4rem;
  cursor: pointer;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.page-link:hover {
  color: #49b1f5;
  text-decoration: none;
}
.post-pagination {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding-top: 1rem;
  max-width: 1080px;
  min-width: 1080px;
  margin: 0 auto;
  padding: 0 1em;
}
.post-pagination:before {
  width: 1px;
  position: absolute;
  top: 0;
  left: 50px;
  height: 100%;
  border-left: 2px solid #cfdbe4;
  content: "";
  z-index: -1;
}
</style>