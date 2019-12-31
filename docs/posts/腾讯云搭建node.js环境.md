---
title: 腾讯云搭建node.js环境
date: 2018-11-08 04:10:03
tags: [nginx]
categories: [技术]
---
Node.js 是运行在服务端的 JavaScript, 是基于 Chrome JavaScript V8 引擎建立的平台。
1. 下载并安装 Node.js
下载最新的稳定版 v6.10.3 到本地:
`wget https://nodejs.org/dist/v6.10.3/node-v6.10.3-linux-x64.tar.xz`

下载完成后, 将其解压:
`tar xvJf node-v6.10.3-linux-x64.tar.xz`

将解压的Node.js目录移动到/usr/local目录下:
`mv node-v6.10.3-linux-x64 /usr/local/node-v6`

配置node软链接到/bin目录:
`ln -s /usr/local/node-v6/bin/node /bin/node`

2. 配置和使用npm
*配置 npm*
Npm是Node.js的包管理和分发工具。它可以让Node.js开发者能够更加轻松的共享代码和共用代码片段
下载node的压缩包中已经包含了npm, 我们只需要将其软链接到bin目录下即可
`ln -s /usr/local/node-v6/bin/npm /bin/npm`

*配置环境变量*
将/usr/local/node-v6/bin目录添加到 $PATH 环境变量中可以方便地使用通过 npm 全局安装的第三方工具
`echo 'export PATH=/usr/local/node-v6/bin:$PATH' >> /etc/profile`

*生效环境变量*
`source /etc/profile`

*使用 npm*
Nodejs一般是当成一条命令执行的，当用户断开session，nodejs也就停止了运行
通过npm安装进程管理模块forever
`npm install forever -g`


#腾讯云#