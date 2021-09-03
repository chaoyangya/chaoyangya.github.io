---
title: 解决hexo图片不展示问题
date: 2021-08-18 16:12:40
tags: Hexo
category: Hexo
---

## 1.更改hexo配置文件
```bash
$ vim _config.yml #配置_config.yml里面的post_asset_folder:false 设置为 true 如图
```
{% asset_img img7.png This is an test image %}

## 2.安装npm插件
```bash
$ npm install https://github.com/CodeFalling/hexo-asset-image --save  
```

## 3.清除hexo缓存
```bash
$ hexo clean
```

## 4.创建新的文章
```bash
hexo new "XXA"   #创建完文章后,会发现 _post 目录下多出一个XXA的文件夹,把图片放入该文件夹中
```

## 5.然后文章中引入图片
```bash
$ {% asset_img img7.png This is an image %}   #img7.png为你的图片名称,不可重复 This is an image是图片介绍
```

**ps:唯一的缺点就是 预览的时候看不见图片 需要重新发布**

## 6.重新发布
```bash
$ hexo d -g
```