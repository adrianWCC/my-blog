这是 template 的目录说明

**一定要注意!** 模板 docs 目录下的文件夹除了 posts 和 about 可以动,其他都不能动, 原因是 vuepress 在编译时会注册这些文件夹和文件为路由, 如果您把它们删了,即使您后面用 addRouter 再注册成功也不行,编译时没有注册的当跳转到时会让 vue 从根实例重新渲染, 这会导致应用很多状态没了 ,例如折叠的侧边栏重新打开,文章列表每打开一次就重新渲染一次,

使用本主题在内容上,您只要把新文章放在 posts 目录下, 文件顶部写好相关信息, 和自由定义 about 目录下的 index.md 文件就行了

```sh
|-- template
    |-- .babelrc                   // 主题的babel配置, 按需加载element ui所需
    |-- .gitignore                 // 让git忽略跟踪dist文件夹等等, 不要把docs文件夹加进去
    |-- deploy.sh                  // 部署到git 远程仓库的shell文件, 要部署时双击即可, 前提是配置的构建目录位置没变
    |-- init.sh                    // (只要执行一次)克隆template分支到本地后, 双击它, 一步完成所有操作, 等他完成下载, 开启测试服务器, 打开http://localhost:8080/看到效果
    |-- package-lock.json
    |-- package.json
    |-- 目录说明.md
    |-- docs                       // 存放所有开发环境的目录
        |-- index.md               // 首页,不用改
        |-- .vuepress
        |   |-- config.js          // 主题的配置
        |   |-- public             // 存放静态文件的目录, 例如img, ico ...
        |       |-- avatar.jpg
        |       |-- brand.jpg
        |       |-- favicon.ico
        |-- about                  // 展示在自我介绍页面的内容
        |   |-- index.md           // 不能删除, 可以添加内容
        |-- tags                   // 不能删除, 不能动
        |   |-- index.md           // 不能删除, 不能动
        |-- all                    // 不能删除, 不能动
        |   |-- index.md           // 不能删除, 不能动
        |-- posts                  // 存放所有文章的目录
```

## 静态资源

您可以将它们放在 .vuepress/public 中, 具体请看[vuepress 文档](https://vuepress.vuejs.org/zh/guide/assets.html#%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84), 值得一提的是

> 如果您的网站会被部署到一个非根路径，您将需要在 .vuepress/config.js 中设置 base，举例来说，如果您打算将您的网站部署到 https://foo.github.io/bar/，那么 base 的值就应该被设置为 "/bar/" (应当总是以斜杠开始，并以斜杠结束)。

> 有了基础路径（Base URL），如果您希望引用一张放在 .vuepress/public 中的图片，您需要使用这样路径：/bar/image.png

## 开始写作

由于没有自动生成 md 文件的命令,需要手动创建 Markdown 文件,而且要放在 **./docs/posts/** 下, 然后还需要文件顶部像原主题那样写上信息

```
---
title: 【读书笔记】《JavaScript权威指南》第7章数组
date: 2018-11-08 04:10:03
tags: [读书笔记, 《JavaScript权威指南》]
categories: [读书笔记]
---
```

**上下的---符号不能少**, **字段后面空一格**再写值 不然会报错.

### markdown 文件的元信息

**title**: 文章名只读取这里写的名字,所以**一定要写**, 我的建议是最好文章名和文件名保持一致

**date**: 主题用了 vuepress 的内置插件[@vuepress/plugin-last-updated](https://vuepress.vuejs.org/zh/plugin/official/plugin-last-updated.html#%E9%80%89%E9%A1%B9), 也可以不用写了,

然而此插件依赖的是在 git 仓库中的提交时间,这就是为什么 init.sh 中要进行 git init 的原因

在本主题中一篇文章的创建时间的确定顺序是

**md 文件顶部的信息中的 date 字段==>git 仓库的提交时间===>都没有那就是当前时间**

**注意**的是这只是一种容错机制, 这不意味着不用管时间了, 最后条件的当前时间**并没有写进对应文件**,
如果每次编译都匹配的是最后一条条件会导致这个文章**永远排序在最开头**, 因为每次编译都是取的当前时间,

所以对于以前的文章, 开头信息没有 date 的, **要么手动加上**, 格式一定要是 YYYY-MM-DD HH:mm:ss, 才能计算出正确的时间顺序,**要么把文章迁移到
./docs/posts/ 目录下后, 运行**

```
git add -A
git commit -m '初始化文章时间'
```

这样退求其次的以当前时间重置那些没写 date 的文章

而对于使用本主题之后的文章**最好不用写 date 字段**了,以免出错, 而是每次新建文章后进行一次 commit, 让主题取 git 仓库的时间, 并且这种工作流能让您的提交历史对应对应文章的时间

```
git add -A
git commit -m '新建文章xxx'
```

**tags**: 字段**必须是数组**,如果没有则要写上一个空数组 _[]_,这样此文章会被分类到 _'未分类'_,我的建议是最好写上内容, 它是文章的内容标签, 是一种分类

**categories**字段已经放弃, 因为它和**tags**字段的作用重复

**摘要\*** :vuepress 内置了文章内容摘抄功能,这也是本主题首先判断收录的,如果没有才去从文章内容中截取一段,所以您可以完全自定义文章在首页列表的摘要了,例如一段简单明了的介绍,会让人更加想点击进去,这功能开启方式是 \<\!\-\- more \-\-\> 注释，该注释之前的内容会被抓取为文章的摘要

> 如果一个 markdown 文件中有一个 \<\!\-\- more \-\-\> 注释，则该注释之前的内容会被抓取并暴露在 \$page.excerpt 属性中。如果您在开发一个博客主题，您可以用这个属性来渲染一个带摘抄的文章列表。

## 文章评论功能

评论功能用的是[Vssue](https://vssue.js.org/zh/guide/#vssue-%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84)

虽然 Vssue 支持多个平台,但是本主题只选用的是 github 的 V3 api, 这是一个为了减少构建大小的决策.

在**docs/.vuepress/config.js**的**vssue**字段

如果需要评论功能,**需要把它的 need 改为 true**, 不需要就改为 false, 不要不去填写

如果需要则需要**创建两个新的 github OAuth App**,Vssue 的[文档](https://vssue.js.org/zh/guide/github.html)有简单明了的操作过程,

填写的 url 一个是**http://localhost:8080/**, 一个是您**将要部署到的网站地址**, 它们分别用在本地测试环境和线上环境,对应的字段分别是**development**和**production**

还有一个字段是**option**，是一个对象，存放**development**和**production**共有的属性，具体可以参考 template 分支的模板配置

拿到两组**clientId**和**clientSecret**后,还要一个存放 issue 评论的 github 仓库,得到**owner**和**repo**, 也就是仓库所有者名和仓库名, 存放 issue 的仓库在本地环境和线上环境中可以相同, 除了这四个字段是必须的,其它字段可以自行去[Vssue 的文档](https://vssue.js.org/zh/options/)中查询

**一个问题是**, 在打开一篇新文章编译的页面时,Vssue 会去创建一个新 issue, 就会让您的页面从定向到 github 登录页, 您不登录就一直重定向 ,您不登录, 您的访客也会重定向,这非常影响网页体验, 所以您需要去打开文章,登录了让 Vssue 创建,这样只要一次, 您和访客在这个页面以后都不会重定向了

还有如果点击登录 github 不成功，请在点击一次

## 全站搜索

关于 搜索, 搜索的是文章内容, 也就是说假如文章标题不在内容里面您搜索标题关键词是没有匹配的, 搜索不区分大小写,但是区分空格和标点符号, 一个技巧是找到一个关键词, 例如我搜索 flex-w 就能唯一的搜到我关于 flex 的博客


