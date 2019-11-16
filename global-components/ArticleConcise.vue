<template>   
  <div id="article-concise"  class="article-container">
    <div class="timeline">
      <a class="category-logo">
        <i class="iconfont">&#xe79e;</i>
      </a>
      <div class="time">10月22日</div>
      <div class="time category">默认分类</div>
    </div>
    <div class="concise">
      <Content slot-key="title"></Content>
      <Content slot-key="concise"></Content>
    </div>
  </div>  
</template>
<script>
export default {
  name: "ArticleConcise",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
@import "../styles/_variable.scss";
@import "../styles/article.scss";
// icon-font
@font-face {
  font-family: "iconfont"; /* project id 1471012 */
  src: url("//at.alicdn.com/t/font_1471012_9lolydtmqad.eot");
  src: url("//at.alicdn.com/t/font_1471012_9lolydtmqad.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1471012_9lolydtmqad.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1471012_9lolydtmqad.woff") format("woff"),
    url("//at.alicdn.com/t/font_1471012_9lolydtmqad.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1471012_9lolydtmqad.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
// id
.article-container {
  max-width: 980px;
  min-width: 980px;
  margin: 0 auto;
  padding: 0 1em;
}
#article-concise {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding-top: 1rem;
}
#article-concise::before {
  width: 1px;
  position: absolute;
  top: 0;
  left: 50px;
  height: 100%;
  border-left: 2px solid #cfdbe4;
  content: "";
  z-index: -1;
}
// class
.category-logo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: #90a1ac;
  line-height: 60px;
  margin: 0 auto;
}
.category-logo i {
  font-size: 30px;
  color: hsla(0, 0%, 100%, 0.9);
  line-height: 60px;
}
.time {
  font-size: 12px;
  color: #6e7c86;
  width: 60px;
  height: 24px;
  line-height: 24px;
  margin: 20px auto;
  background: #dee8ef;
  text-align: center;
  border: 1px solid #cfdbe4;
}
.category {
  border-radius: 24px;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.concise {
  position: relative;
  width: 800px;
  background-color: #fff;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08);
  border: 1px solid #dee8ef;
  padding: 1rem 2rem;
}
.concise::before {
  content: "";
  position: absolute;
  left: -0.6em;
  top: 28px;
  width: 1em;
  height: 1em;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transition: background 0.1s linear;
  background-color: #fff;
  border-left: 1px solid #dee8ef;
  border-bottom: 1px solid #dee8ef;
}
</style>