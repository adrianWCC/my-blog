<template>
  <div class="header">
    <div class="search-bar">
      <input v-model="searchTxt" class="input" type="text" placeholder="输入标题搜索文章" @keypress="handleSearch">
    </div>
  </div>
</template>

<script>
import blogData from './data/content.js'
export default {
  name: 'BHeader',
  data() {
    return {
      searchTxt: '',
      blogData
    }
  },
  methods: {
    handleSearch(e) {
      if(e.code === 'Enter') {
        console.log(this.searchTxt)
        let arr = this.blogData.filter(item => {
          return (item.title.indexOf(this.searchTxt) !== -1)
        })
        this.toHome()
        this.$emit('blogChange', arr)
      }
    },
    toHome() {
      if(this.$route.path === '/') return
      this.$router.push({
        path: '/'
      })
    },
  }
}
</script>

<style scoped>
.header{
  display: flex;
  align-items: center;
  height: 60px;
}

.search-bar>.input{
  outline: none;
  border: 0;
  line-height: 28px;
  width: 300px;
  background-color: #f7f7f7;
  border-radius: 14px;
  padding: 0 10px;
}
</style>
