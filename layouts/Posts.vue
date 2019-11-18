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

    <div class="pagination">
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
      <router-link
        class="page-number"
        v-for="(page,index) in $pagination._paginationPages"
        :key="page.path"
        :to="page.path"
      >{{index + 1}}</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$pagination._paginationPages);
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
</style>