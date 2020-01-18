<template>
  <div class="theme-layout">
    <div class="left">
      <b-aside @blogChange="blogChange"></b-aside>
    </div>
    <div class="right">
      <div class="headder">
        <b-header @blogChange="blogChange"></b-header>
      </div>
      <div class="theme-content">
        <div v-if="this.$route.path === '/'" class="blog-content">
          <template v-for="item in blogs">
            <div class="blog-item" :style="{backgroundColor: colors[parseInt(Math.random()*6)]}">
              <a :href="item.path">
                <div class="title">{{item.title}}</div>
                <div class="content">
                  <div>
                    {{item.strippedContent}}
                  </div>
                </div>
              </a>
            </div>
          </template>
        </div>
        <Content v-else />
      </div>
    </div>
  </div>
</template>

<script>
import BHeader from './BHeader'
import BAside from './BAside'
import blogs from './data/content.js'
export default {
  components: {
    BHeader,
    BAside
  },
  data() {
    return {
      blogs: blogs,
      colors: ['#B7DEE7', '#EAEAEA', '#D2BEE5', '#E9D282', '#E5BBC9', '#E0E0DD']
    }
  },
  mounted() {
    console.log(this)
  },
  methods: {
    blogChange(blogs) {
      this.blogs = [...blogs]
    }
  }
}
</script>

<style scoped>
.theme-layout{
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
}
.left{
  width: 250px;
  height: 100%;
}
.right{
  width: calc(100% - 250px);
  height: 100%;
  display: flex;
  flex-direction: column;
}
.right .headder{
  height: 60px;
}
.right .theme-content{
  flex: 1 1 auto;
  overflow: auto;
  padding: 21px 0;
}
.blog-content{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap
}
.blog-item{
  width: 300px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: #B5DCE5;
  margin-right: 25px;
  padding: 8px 0;
  margin-bottom: 20px;
}
.blog-item .title{
  padding: 0 16px;
  font-size: 18px;
  font-weight: bold;
  line-height: 40px;
}
.blog-item .content{
  box-sizing: border-box;
  height: 56px;
  padding: 10px 16px;
  font-size: 14px;
  color: #999;
  line-height: 18px;
  overflow: hidden;
}
.blog-item .content > div{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-all;
}
</style>

<style>
body{
  margin: 0;
  padding: 0;
}
a{
  color: #000;
  text-decoration: none;
}
</style>



