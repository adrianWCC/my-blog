---
title: 部署gitlab
date: 2018-11-08 04:10:03
tags: [nginx]
categories: [技术]
---


1. *安装并配置必要的依赖关系*
```
sudo yum install -y curl policycoreutils-python openssh-server
sudo systemctl enable sshd
sudo systemctl start sshd

sudo firewall-cmd --permanent --add-service=http
sudo systemctl reload firewalld
```
遇到防火墙问题 请查看 [防火墙](bear://x-callback-url/open-note?id=80C6CFE2-E743-4ECD-B456-48EE717EAAB8-9737-0000263F7A44DAAC)

<!-- more -->

2. *安装postfix 使用邮件提醒*
```
sudo yum install postfix
sudo systemctl enable postfix
sudo systemctl start postfix

```

3. 安装gitlab package
```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash

sudo EXTERNAL_URL="http://gitlab.example.com" yum install -y gitlab-ee

```

4. 修改gitlab配置文件指定服务器ip和自定义端口
```
vim /etc/gitlab/gitlab.rb
```
external_url ‘http://ip:port’

5. 重置并启动GitLab
```
gitlab-ctl reconfigure
gitlab-ctl restart
```

6. 查看gitlab所有服务的日志信息
`gitlab-ctl tail`

7. 查看某个服务的信息。
`gitlab-ctl tail nginx`

8. 查看启动的服务
`gitlab-ctl service-list`

9. Gitlab的nginx目录
`cd /var/opt/gitlab/nginx/`

11. Gitlab的nignx日志目录
`cd /var/log/gitlab/nginx/`
或者
`cd /var/opt/gitlab/nginx/logs`

12. Gitlab查看所有服务的配置文件
`gitlab-ctl show-config`

13. Gitlab的卸载
`gitlab-ctl uninstall`

Tips
	gitlab的安装配置要求4g以上内存， 内存不足会导致502问题等各种问题； 具体查看[安装Gitlab的需求](https://docs.gitlab.com.cn/ce/install/requirements.html#memory)


#腾讯云