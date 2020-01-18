export default [
  {
    "excerpt": "  关于try catch finally  try/catch 随着 JS 引入 async/await ，开发者不可避免地会更多使用 try/catch/finally ，本文解释 finally 代码块的一些容易混淆的点。  js引擎使用单线程， 当执行js脚本时一旦发现异常引擎就会报错同时跑出异常结束进程，导致后面的正常代码无法执行。  Try/catch 通常被我们用来包含一块可能......",
    "tags": [
      "javascript"
    ],
    "id": 0,
    "title": "关于try catch finally",
    "lastUpdated": "2020-01-18 14:10:03",
    "path": "/blog/%E5%85%B3%E4%BA%8Etry%20catch%20finally.html",
    "strippedContent": " # 关于try catch finally ## try/catch 随着 JS 引入 async/await ，开发者不可避免地会更多使用 try/catch/finally ，本文解释 finally 代码块的一些容易混淆的点。  js引擎使用单线程， 当执行js脚本时一旦发现异常引擎就会报错同时跑出异常结束进程，导致后面的正常代码无法执行。  Try/catch 通常被我们用来包含一块可能会使浏览器报错的代码，使得js引擎在遇到错误的时候可以继续执行后面的代码； eg：  ``` function example() {   console.log('start example')   try {     console.log('next line will throw error')     fail()   }catch(e) {     console.log('get catch')   }    console.log('some code after error codes') } example()  ```  ![](%E5%85%B3%E4%BA%8Etry%20catch%20finally/08DBA8ED-BB47-4383-B799-FBDA93B6F0CE.png) 一旦在try块中遇到错误就会执行catch块；如果不认为throw error 代码将继续往下执行;  当然 如果在catch中人为的throw error。那么后面的代码也不会执行： ``` function example() {   console.log('start example')   try {     console.log('next line will throw error')     fail()   }catch(e) {     throw e   }    console.log('some code after error codes') } example()  ```  ![](%E5%85%B3%E4%BA%8Etry%20catch%20finally/60BBEAC4-DDB2-49BA-A465-17E54545F692.png)  ## finally  那finally又是什么呢？ Finally中包含的代码， 无论是否在try块中遇到*错误*或者*return* 都会执行finally中的代码  1. Try中有错误 ``` function example() {   console.log('start example')   try {     console.log('next line will throw error')     fail()   }catch(e) {        }finally {     console.log('finally!!!')   }    console.log('some code after error codes') } example()  ```  ![](%E5%85%B3%E4%BA%8Etry%20catch%20finally/E5A4B2D9-7A32-4618-8B7A-16F79C94A2C1.png)  2. Catch 抛出异常 ``` function example() {   console.log('start example')   try {     console.log('next line will throw error')     fail()   }catch(e) {     throw e   }finally {     console.log('finally!!!')   }    console.log('some code after error codes') } example() ``` ![](%E5%85%B3%E4%BA%8Etry%20catch%20finally/124110F7-A35F-475B-A831-239C8EB1C5B6.png)  3. Try  return ``` function example() {   console.log('start example')   try {     console.log('next line will throw error')     return   }catch(e) {        }finally {     console.log('finally!!!')   }    console.log('some code after error codes') } example() ```  ![](%E5%85%B3%E4%BA%8Etry%20catch%20finally/6F6C08D7-6675-47CD-BB0C-E46AB5B94D8C.png) 结论： 在try/catch/finally  无论在try/catch中执行了什么代码 ， finally中的代码永远都会被执行； #javascript#"
  },
  {
    "excerpt": " 柯里化 柯里化，即Currying，可以是函数变得更加灵活。我们可以一次性传入多个参数调用它；也可以只传入一部分参数来调用它，让它返回一个函数去处理剩下的参数。 ``` var add = function(x) {     return function(y) {         return x + y;     }; };  console.log(add(1)(1)); // 输出2 ......",
    "tags": "",
    "id": 1,
    "title": "柯里化",
    "lastUpdated": "2020-01-18 17:58:54",
    "path": "/blog/%E6%9F%AF%E9%87%8C%E5%8C%96.html",
    "strippedContent": "# 柯里化 柯里化，即Currying，可以是函数变得更加灵活。我们可以一次性传入多个参数调用它；也可以只传入一部分参数来调用它，让它返回一个函数去处理剩下的参数。 ``` var add = function(x) {     return function(y) {         return x + y;     }; };  console.log(add(1)(1)); // 输出2  var add1 = add(1); console.log(add1(1)); // 输出2  var add10 = add(10); console.log(add10(1)); // 输出11 ``` 代码中，我们可以一次性传入2个1作为参数add(1)(1)，也可以传入1个参数之后获取add1与add10函数，这样使用起来非常灵活。  #javascript"
  },
  {
    "excerpt": " 函数重载 所谓函数重载(method overloading)，就是函数名称一样，但是输入输出不一样。或者说，允许某个函数有各种不同输入，根据不同的输入，返回不同的结果。凭直觉，函数重载可以通过if…else或者switch实现，这就不去管它了。jQuery之父John Resig提出了一个非常巧(bian)妙(tai)的方法，利用了闭包。 ``` function addMethod(obj......",
    "tags": "",
    "id": 2,
    "title": "函数重载",
    "lastUpdated": "2020-01-18 17:58:54",
    "path": "/blog/%E5%87%BD%E6%95%B0%E9%87%8D%E8%BD%BD.html",
    "strippedContent": "# 函数重载 所谓函数重载(method overloading)，就是函数名称一样，但是输入输出不一样。或者说，允许某个函数有各种不同输入，根据不同的输入，返回不同的结果。凭直觉，函数重载可以通过if…else或者switch实现，这就不去管它了。jQuery之父John Resig提出了一个非常巧(bian)妙(tai)的方法，利用了闭包。 ``` function addMethod(object, name, f){　　   var old = object[name];　　   object[name] = function(){     // f.length为函数定义时的参数个数     // arguments.length为函数调用时的参数个数　     if (f.length === arguments.length){　　       return f.apply(this, arguments);　　　　     }else if (typeof old === \"function\"){       return old.apply(this, arguments);　　　　     }　　   }; }   // 不传参数时，返回所有name function find0(){　　   return this.names; }   // 传一个参数时，返回firstName匹配的name function find1(firstName){　　   var result = [];　　   for (var i = 0; i < this.names.length; i++){　　　　     if (this.names[i].indexOf(firstName) === 0){　　　　　　       result.push(this.names[i]);　　　　     }　　   }　　   return result; }   // 传两个参数时，返回firstName和lastName都匹配的name function find2(firstName, lastName){　   var result = [];　　   for (var i = 0; i < this.names.length; i++){　　　　     if (this.names[i] === (firstName + \" \" + lastName)){　　　　　　       result.push(this.names[i]);　　　　     }　　   }　　   return result; }   var people = {　　   names: [\"Dean Edwards\", \"Alex Russell\", \"Dean Tom\"] };   addMethod(people, \"find\", find0); addMethod(people, \"find\", find1); addMethod(people, \"find\", find2);   console.log(people.find()); // 输出[\"Dean Edwards\", \"Alex Russell\", \"Dean Tom\"] console.log(people.find(\"Dean\")); // 输出[\"Dean Edwards\", \"Dean Tom\"] console.log(people.find(\"Dean\", \"Edwards\")); // 输出[\"Dean Edwards\"]  ```  从效果上来说，people对象的find方法允许3种不同的输入: 0个参数时，返回所有人名；1个参数时，根据firstName查找人名并返回；2个参数时，根据完整的名称查找人名并返回。 难点在于，people.find只能绑定一个函数，那它为何可以处理3种不同的输入呢？它不可能同时绑定3个函数find0,find1与find2啊！这里的关键在于old属性。 由addMethod函数的调用顺序可知，people.find最终绑定的是find2函数。然而，在绑定find2时，old为find1；同理，绑定find1时，old为find0。3个函数find0,find1与find2就这样通过闭包链接起来了。 根据addMethod的逻辑，当f.length与arguments.length不匹配时，就会去调用old，直到匹配为止。  #javascript"
  },
  {
    "excerpt": " Memoization  Memoization用于优化比较耗时的计算， 通过将计算结果缓存到内存中，这样对于同样的输入值， 下次只需要从内存中读取结果即可 ``` function memoizeFunction(func){   var cache = {};   return function()   {     var key = arguments[0];     if (cache......",
    "tags": "",
    "id": 3,
    "title": "Memoization",
    "lastUpdated": "2020-01-18 17:58:54",
    "path": "/blog/Memoization.html",
    "strippedContent": "# Memoization  Memoization用于优化比较耗时的计算， 通过将计算结果缓存到内存中，这样对于同样的输入值， 下次只需要从内存中读取结果即可 ``` function memoizeFunction(func){   var cache = {};   return function()   {     var key = arguments[0];     if (cache[key]){       return cache[key];     }     else{       var val = func.apply(this, arguments);       cache[key] = val;       return val;     }   }; }   var fibonacci = memoizeFunction(function(n){   return (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2); });  const first = new Date().getTime() console.log(fibonacci(100)); // 输出354224848179262000000 console.log(`first耗时：${new Date().getTime()-first}ms`) const second = new Date().getTime() console.log(fibonacci(100)); // 输出354224848179262000000 console.log(`second耗时：${new Date().getTime()-second}ms`)  ``` #javascript"
  },
  {
    "excerpt": "Node.js 是运行在服务端的 JavaScript, 是基于 Chrome JavaScript V8 引擎建立的平台。 1. 下载并安装 Node.js 下载最新的稳定版 v6.10.3 到本地: `wget https://nodejs.org/dist/v6.10.3/node-v6.10.3-linux-x64.tar.xz`  下载完成后, 将其解压: `tar xvJf node-......",
    "tags": [
      "nginx",
      "腾讯云"
    ],
    "id": 4,
    "title": "腾讯云搭建node.js环境",
    "lastUpdated": "2018-11-08 04:10:03",
    "path": "/blog/%E8%85%BE%E8%AE%AF%E4%BA%91%E6%90%AD%E5%BB%BAnode.js%E7%8E%AF%E5%A2%83.html",
    "strippedContent": "Node.js 是运行在服务端的 JavaScript, 是基于 Chrome JavaScript V8 引擎建立的平台。 1. 下载并安装 Node.js 下载最新的稳定版 v6.10.3 到本地: `wget https://nodejs.org/dist/v6.10.3/node-v6.10.3-linux-x64.tar.xz`  下载完成后, 将其解压: `tar xvJf node-v6.10.3-linux-x64.tar.xz`  将解压的Node.js目录移动到/usr/local目录下: `mv node-v6.10.3-linux-x64 /usr/local/node-v6`  配置node软链接到/bin目录: `ln -s /usr/local/node-v6/bin/node /bin/node`  2. 配置和使用npm *配置 npm* Npm是Node.js的包管理和分发工具。它可以让Node.js开发者能够更加轻松的共享代码和共用代码片段 下载node的压缩包中已经包含了npm, 我们只需要将其软链接到bin目录下即可 `ln -s /usr/local/node-v6/bin/npm /bin/npm`  *配置环境变量* 将/usr/local/node-v6/bin目录添加到 $PATH 环境变量中可以方便地使用通过 npm 全局安装的第三方工具 `echo 'export PATH=/usr/local/node-v6/bin:$PATH' >> /etc/profile`  *生效环境变量* `source /etc/profile`  *使用 npm* Nodejs一般是当成一条命令执行的，当用户断开session，nodejs也就停止了运行 通过npm安装进程管理模块forever `npm install forever -g`   #腾讯云#"
  },
  {
    "excerpt": "<ol>\n<li><em>安装并配置必要的依赖关系</em></li>\n</ol>\n<!--beforebegin--><div class=\"language- extra-class\"><!--afterbegin--><pre v-pre class=\"language-text\"><code>sudo yum install -y curl policycoreutils-python openssh-server\nsudo systemctl enable sshd\nsudo systemctl start sshd\n\nsudo firewall-cmd --permanent --add-service=http\nsudo systemctl reload firewalld\n</code></pre>\n<!--beforeend--></div><!--afterend--><p>遇到防火墙问题 请查看 <a href=\"bear://x-callback-url/open-note?id=80C6CFE2-E743-4ECD-B456-48EE717EAAB8-9737-0000263F7A44DAAC\">防火墙</a></p>\n",
    "tags": [
      "nginx"
    ],
    "id": 5,
    "title": "部署gitlab",
    "lastUpdated": "2018-11-08 04:10:03",
    "path": "/blog/%E9%83%A8%E7%BD%B2gitlab.html",
    "strippedContent": " 1. *安装并配置必要的依赖关系* ``` sudo yum install -y curl policycoreutils-python openssh-server sudo systemctl enable sshd sudo systemctl start sshd  sudo firewall-cmd --permanent --add-service=http sudo systemctl reload firewalld ``` 遇到防火墙问题 请查看 [防火墙](bear://x-callback-url/open-note?id=80C6CFE2-E743-4ECD-B456-48EE717EAAB8-9737-0000263F7A44DAAC)  <!-- more -->  2. *安装postfix 使用邮件提醒* ``` sudo yum install postfix sudo systemctl enable postfix sudo systemctl start postfix  ```  3. 安装gitlab package ``` curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash  sudo EXTERNAL_URL=\"http://gitlab.example.com\" yum install -y gitlab-ee  ```  4. 修改gitlab配置文件指定服务器ip和自定义端口 ``` vim /etc/gitlab/gitlab.rb ``` external_url ‘http://ip:port’  5. 重置并启动GitLab ``` gitlab-ctl reconfigure gitlab-ctl restart ```  6. 查看gitlab所有服务的日志信息 `gitlab-ctl tail`  7. 查看某个服务的信息。 `gitlab-ctl tail nginx`  8. 查看启动的服务 `gitlab-ctl service-list`  9. Gitlab的nginx目录 `cd /var/opt/gitlab/nginx/`  11. Gitlab的nignx日志目录 `cd /var/log/gitlab/nginx/` 或者 `cd /var/opt/gitlab/nginx/logs`  12. Gitlab查看所有服务的配置文件 `gitlab-ctl show-config`  13. Gitlab的卸载 `gitlab-ctl uninstall`  Tips \tgitlab的安装配置要求4g以上内存， 内存不足会导致502问题等各种问题； 具体查看[安装Gitlab的需求](https://docs.gitlab.com.cn/ce/install/requirements.html#memory)   #腾讯云"
  },
  {
    "excerpt": " 1. 进入/etc/nginx 目录，查看nginx.conf 配置文件，在http 块中找到这样两句： ```  include /etc/nginx/conf.d/*.conf;  include /etc/nginx/sites-enabled/*; ``` 如果注释了就把号去掉，没有注释的话就跳过这一步  2. 进入/etc/nginx/conf.d目录，创建我们自己的配置文......",
    "tags": [
      "nginx"
    ],
    "id": 6,
    "title": "nginx配置反向代理",
    "lastUpdated": "2018-11-08 04:10:03",
    "path": "/blog/nginx%E9%85%8D%E7%BD%AE%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86.html",
    "strippedContent": " 1. 进入/etc/nginx# 目录，查看nginx.conf# 配置文件，在http# 块中找到这样两句： ``` # include /etc/nginx/conf.d/*.conf; # include /etc/nginx/sites-enabled/*; ``` 如果注释了就把#号去掉，没有注释的话就跳过这一步  2. 进入/etc/nginx/conf.d目录，创建我们自己的配置文件，去名规则最好是域名加端口，这样以后方便找，比如我的：asrain.club-8081.conf，配置文件写入以下内容: ``` upstream asrain {     server 127.0.0.1:8081; # 这里的端口号写你node.js运行的端口号，也就是要代理的端口号，我的项目跑在8081端口上     keepalive 64; }  server {     listen 80; #这里的端口号是你要监听的端口号     server_name 39.108.55.xxx www.asrain.club asrain.club; # 这里是你的服务器名称，也就是别人访问你服务的ip地址或域名，可以写多个，用空格隔开      location / {         proxy_set_header X-Real-IP $remote_addr;         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;         proxy_set_header Host $http_host;         proxy_set_header X-Nginx-Proxy true;         proxy_set_header Connection \"\";         proxy_pass http://asrain; # 这里要和最上面upstream后的应用名一致，可以自定义     } } ```  保存文件后，输入sudo nginx -t测试我们的配置文件是否有错误  3. 现在我们需要重启Nginx# ，我们的配置文件才会生效，输入sudo service nginx reload "
  }
];