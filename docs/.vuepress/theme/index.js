const path = require('path');
const moment = require('moment');
const fs = require('fs');

module.exports = (themeConfig, ctx) => ({
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: timestamp => {
          const moment = require('moment');
          moment.locale('zh-CN');
          return moment(timestamp).format(
            'YYYY-MM-DD HH:mm:ss'
          );
        }
      }
    ]
  ],
  /**
   * 生命周期
   * scope: dev|build
   */
  ready() {
    const { pages } = ctx;
    // 生成客户端所需的数据
    
    // 排序函数
    const postsSorter = (prev, next) => {
      const prevTime =
        new Date(prev.frontmatter.date).getTime() ||
        new Date(prev.lastUpdated).getTime() ||
        new Date().getTime();
      const nextTime =
        new Date(next.frontmatter.date).getTime() ||
        new Date(next.lastUpdated).getTime() ||
        new Date().getTime();
      return prevTime - nextTime > 0 ? -1 : 1;
    };
    function changeDate(dateStr) {
      if (dateStr.length === undefined) {
        let str = JSON.stringify(dateStr, null, 2);
        return str.slice(1, 11) + ' ' + str.slice(12, -6);
      } else {
        return dateStr;
      }
    }
    // 进一步个性化 lastUpdated,全部文章页中使用
    function changeTime(dateStr) {
      let str = '';
      str = dateStr.slice(0, 7);
      const arr = str.split('-');
      let result = [
        arr[0] + '-' + arr[1],
        Number(arr[0]) + Number(arr[1])
      ];
      return result;
    }
    // 开始格式化和排序
    // 只处理blog文件夹下的文件
    const posts = pages.filter(item => {
      return item.path.slice(1, 5)
    });
    posts.sort(postsSorter);

    //存放最终数据的变量
    let archived = [];
    posts.forEach((val, index) => {
      //遍历posts目录生成包含所有文章信息的 archived
      let page = {};
      let {
        excerpt,
        lastUpdated,
        path,
        _strippedContent
      } = val;
      let { tags, title } = val.frontmatter;
      if (_strippedContent) {
        _strippedContent = _strippedContent
          .replace(/[\n\r]/g, ' ')
          .replace(/\s+/, ' ');
      }
      if (_strippedContent) {
        excerpt =
          excerpt ||
          (_strippedContent.slice(0, 200)
            ? _strippedContent.slice(0, 200) + '......'
            : false) ||
          '';
        excerpt = excerpt.replace(/#/g, '');
      } else {
        excerpt = '';
      }

      lastUpdated =
        val.frontmatter.date ||
        lastUpdated ||
        moment().format('YYYY-MM-DD HH:mm:ss');
      lastUpdated = changeDate(lastUpdated);
      tags = tags || '';

      const pathTitle =  decodeURI(val.path).slice(6, -5)
      title = title || pathTitle;

      page.excerpt = excerpt;
      page.tags = tags;
      page.id = index;
      page.title = title;
      page.lastUpdated = lastUpdated;
      page.path = path;
      page.strippedContent = _strippedContent

      archived.push(page);
    });

    //生成全部文章页所需要的数据

    const dataPath = path.resolve(__dirname, 'data');
    console.log('正在写入本地数据,加快在客户端的速度~~');

    fs.writeFile(
      `${dataPath}/content.js`,
      `export default ${JSON.stringify(
        archived,
        null,
        2
      )};`,
      error => {
        if (error)
          return console.log(
            '写入首页content文件失败,原因是' + error.message
          );
        console.log('写入首页content文件成功');
      }
    );
  },
  /**
   * 生命周期
   * scope: dev
   */
  updated() {},
  /**
   * 生命周期
   * scope: build
   */
  generated(){}
})