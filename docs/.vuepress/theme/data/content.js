export default [
  {
    "excerpt": " 1. 进入/etc/nginx 目录，查看nginx.conf 配置文件，在http 块中找到这样两句： ```  include /etc/nginx/conf.d/*.conf;  include /etc/nginx/sites-enabled/*; ``` 如果注释了就把号去掉，没有注释的话就跳过这一步  2. 进入/etc/nginx/conf.d目录，创建我们自己的配置文......",
    "tags": [
      "nginx"
    ],
    "id": 0,
    "title": "nginx配置反向代理",
    "lastUpdated": "2018-11-08 04:10:03",
    "path": "/blog/nginx%E9%85%8D%E7%BD%AE%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86.html",
    "strippedContent": " 1. 进入/etc/nginx# 目录，查看nginx.conf# 配置文件，在http# 块中找到这样两句： ``` # include /etc/nginx/conf.d/*.conf; # include /etc/nginx/sites-enabled/*; ``` 如果注释了就把#号去掉，没有注释的话就跳过这一步  2. 进入/etc/nginx/conf.d目录，创建我们自己的配置文件，去名规则最好是域名加端口，这样以后方便找，比如我的：asrain.club-8081.conf，配置文件写入以下内容: ``` upstream asrain {     server 127.0.0.1:8081; # 这里的端口号写你node.js运行的端口号，也就是要代理的端口号，我的项目跑在8081端口上     keepalive 64; }  server {     listen 80; #这里的端口号是你要监听的端口号     server_name 39.108.55.xxx www.asrain.club asrain.club; # 这里是你的服务器名称，也就是别人访问你服务的ip地址或域名，可以写多个，用空格隔开      location / {         proxy_set_header X-Real-IP $remote_addr;         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;         proxy_set_header Host $http_host;         proxy_set_header X-Nginx-Proxy true;         proxy_set_header Connection \"\";         proxy_pass http://asrain; # 这里要和最上面upstream后的应用名一致，可以自定义     } } ```  保存文件后，输入sudo nginx -t测试我们的配置文件是否有错误  3. 现在我们需要重启Nginx# ，我们的配置文件才会生效，输入sudo service nginx reload "
  },
  {
    "excerpt": "<ol>\n<li><em>安装并配置必要的依赖关系</em></li>\n</ol>\n<!--beforebegin--><div class=\"language- extra-class\"><!--afterbegin--><pre v-pre class=\"language-text\"><code>sudo yum install -y curl policycoreutils-python openssh-server\nsudo systemctl enable sshd\nsudo systemctl start sshd\n\nsudo firewall-cmd --permanent --add-service=http\nsudo systemctl reload firewalld\n</code></pre>\n<!--beforeend--></div><!--afterend--><p>遇到防火墙问题 请查看 <a href=\"bear://x-callback-url/open-note?id=80C6CFE2-E743-4ECD-B456-48EE717EAAB8-9737-0000263F7A44DAAC\">防火墙</a></p>\n",
    "tags": [
      "nginx"
    ],
    "id": 1,
    "title": "部署gitlab",
    "lastUpdated": "2018-11-08 04:10:03",
    "path": "/blog/%E9%83%A8%E7%BD%B2gitlab.html",
    "strippedContent": " 1. *安装并配置必要的依赖关系* ``` sudo yum install -y curl policycoreutils-python openssh-server sudo systemctl enable sshd sudo systemctl start sshd  sudo firewall-cmd --permanent --add-service=http sudo systemctl reload firewalld ``` 遇到防火墙问题 请查看 [防火墙](bear://x-callback-url/open-note?id=80C6CFE2-E743-4ECD-B456-48EE717EAAB8-9737-0000263F7A44DAAC)  <!-- more -->  2. *安装postfix 使用邮件提醒* ``` sudo yum install postfix sudo systemctl enable postfix sudo systemctl start postfix  ```  3. 安装gitlab package ``` curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash  sudo EXTERNAL_URL=\"http://gitlab.example.com\" yum install -y gitlab-ee  ```  4. 修改gitlab配置文件指定服务器ip和自定义端口 ``` vim /etc/gitlab/gitlab.rb ``` external_url ‘http://ip:port’  5. 重置并启动GitLab ``` gitlab-ctl reconfigure gitlab-ctl restart ```  6. 查看gitlab所有服务的日志信息 `gitlab-ctl tail`  7. 查看某个服务的信息。 `gitlab-ctl tail nginx`  8. 查看启动的服务 `gitlab-ctl service-list`  9. Gitlab的nginx目录 `cd /var/opt/gitlab/nginx/`  11. Gitlab的nignx日志目录 `cd /var/log/gitlab/nginx/` 或者 `cd /var/opt/gitlab/nginx/logs`  12. Gitlab查看所有服务的配置文件 `gitlab-ctl show-config`  13. Gitlab的卸载 `gitlab-ctl uninstall`  Tips \tgitlab的安装配置要求4g以上内存， 内存不足会导致502问题等各种问题； 具体查看[安装Gitlab的需求](https://docs.gitlab.com.cn/ce/install/requirements.html#memory)   #腾讯云"
  },
  {
    "excerpt": "Node.js 是运行在服务端的 JavaScript, 是基于 Chrome JavaScript V8 引擎建立的平台。 1. 下载并安装 Node.js 下载最新的稳定版 v6.10.3 到本地: `wget https://nodejs.org/dist/v6.10.3/node-v6.10.3-linux-x64.tar.xz`  下载完成后, 将其解压: `tar xvJf node-......",
    "tags": [
      "nginx",
      "腾讯云"
    ],
    "id": 2,
    "title": "腾讯云搭建node.js环境",
    "lastUpdated": "2018-11-08 04:10:03",
    "path": "/blog/%E8%85%BE%E8%AE%AF%E4%BA%91%E6%90%AD%E5%BB%BAnode.js%E7%8E%AF%E5%A2%83.html",
    "strippedContent": "Node.js 是运行在服务端的 JavaScript, 是基于 Chrome JavaScript V8 引擎建立的平台。 1. 下载并安装 Node.js 下载最新的稳定版 v6.10.3 到本地: `wget https://nodejs.org/dist/v6.10.3/node-v6.10.3-linux-x64.tar.xz`  下载完成后, 将其解压: `tar xvJf node-v6.10.3-linux-x64.tar.xz`  将解压的Node.js目录移动到/usr/local目录下: `mv node-v6.10.3-linux-x64 /usr/local/node-v6`  配置node软链接到/bin目录: `ln -s /usr/local/node-v6/bin/node /bin/node`  2. 配置和使用npm *配置 npm* Npm是Node.js的包管理和分发工具。它可以让Node.js开发者能够更加轻松的共享代码和共用代码片段 下载node的压缩包中已经包含了npm, 我们只需要将其软链接到bin目录下即可 `ln -s /usr/local/node-v6/bin/npm /bin/npm`  *配置环境变量* 将/usr/local/node-v6/bin目录添加到 $PATH 环境变量中可以方便地使用通过 npm 全局安装的第三方工具 `echo 'export PATH=/usr/local/node-v6/bin:$PATH' >> /etc/profile`  *生效环境变量* `source /etc/profile`  *使用 npm* Nodejs一般是当成一条命令执行的，当用户断开session，nodejs也就停止了运行 通过npm安装进程管理模块forever `npm install forever -g`   #腾讯云#"
  }
];