<template>
  <div style="height: 100%;">
    <div class="logo-info">
      <img class="logo" src="./images/logo.jpg" mode=""/>
      <span>asrain</span>
    </div>
    <div class="nav-list">
      <h1 class="title" @click="handleHome">Explore</h1>
      <div class="item" @click="handleHome">主页</div>
      <div class="item">
        <span @click="tagShow = !tagShow">标签分类</span>
        <transition name="fade">
          <ul v-if="tagShow" class="child-list">
            <li class="child-item" v-for="tag in tagList" :key="tag" @click="filterTag(tag)">{{tag}}</li>
          </ul>
        </transition>
      </div>
      <div class="item">时间归档</div>
      <div class="item">gitHub</div>
      <div class="end">
        <a class="item last">help center</a>
      </div>
      <div style="height:48px; line-height:48px;">
        <a href="http://www.beian.miit.gov.cn" style="font-size:12px; color:#1959C9;text-decoration: underline dashed">粤ICP备19026094号</a>
      </div>
    </div>
  </div>
</template>
<script>
import blogData from './data/content.js'
export default {
  data() {
    return {
      tagList: [],
      tagShow: false,
      blogData
    }
  },
  created() {
    let tagarr = []
    blogData.forEach(item => {
      tagarr = [...tagarr, ...item.tags]
    })
    const tagSet = new Set(tagarr)
    this.tagList = [...tagSet]
  },
  methods: {
    toHome() {
      if(this.$route.path === '/') return
      this.$router.push({
        path: '/'
      })
    },
    handleHome() {
      this.toHome()
      this.$emit('blogChange', this.blogData)
    },
    filterTag(tag) {
      let arr = this.blogData.filter(item => {
        return (item.tags.includes(tag))
      })
      this.toHome()
      this.$emit('blogChange', arr)
    }
  }
}
</script>

<style scoped>
.logo-info{
  box-sizing: border-box;
  width: 250px;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  padding-left: 48px
}
.logo{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px; 
}
.nav-list{
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  padding-right: 48px;
  padding-left: 48px;
}
.nav-list .item{
  line-height: 48px;
  cursor: pointer;
  border-radius: 10px;
  padding: 0 5px;
}
.nav-list .item:hover{
  background-color: #f7f7f7;
}
.nav-list .end{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 48px;
}
.item .child-list{
  margin: 0;
  padding: 0;
  padding-bottom: 5px;
}
.child-list .child-item{
  list-style: none;
  line-height: 24px;
  font-size: 14px;
  padding-left: 20px;
}
</style>
