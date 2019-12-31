---
title: nginx配置反向代理
date: 2018-11-08 04:10:03
tags: [nginx]
categories: [技术]
---

1. 进入/etc/nginx# 目录，查看nginx.conf# 配置文件，在http# 块中找到这样两句：
```
# include /etc/nginx/conf.d/*.conf;
# include /etc/nginx/sites-enabled/*;
```
如果注释了就把#号去掉，没有注释的话就跳过这一步

2. 进入/etc/nginx/conf.d目录，创建我们自己的配置文件，去名规则最好是域名加端口，这样以后方便找，比如我的：asrain.club-8081.conf，配置文件写入以下内容:
```
upstream asrain {
    server 127.0.0.1:8081; # 这里的端口号写你node.js运行的端口号，也就是要代理的端口号，我的项目跑在8081端口上
    keepalive 64;
}

server {
    listen 80; #这里的端口号是你要监听的端口号
    server_name 39.108.55.xxx www.asrain.club asrain.club; # 这里是你的服务器名称，也就是别人访问你服务的ip地址或域名，可以写多个，用空格隔开

    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-Nginx-Proxy true;
        proxy_set_header Connection "";
        proxy_pass http://asrain; # 这里要和最上面upstream后的应用名一致，可以自定义
    }
}
```

保存文件后，输入sudo nginx -t测试我们的配置文件是否有错误

3. 现在我们需要重启Nginx# ，我们的配置文件才会生效，输入sudo service nginx reload
