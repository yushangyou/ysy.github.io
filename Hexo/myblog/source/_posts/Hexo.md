---
title: Hexo 使用
---

## Hexo 安装教程

### 环境配置

node.js : [下载](https://nodejs.org/en/)
Hexo : [下载](https://hexo.io/zh-cn/)

```bash （安装出现问题自行百度）
    npm install hexo-cli // 下载hexo
    hexo -v // 查看是否安装成功
    hexo init // 初始化hexo文件夹
    npm install // 下载模块依赖
    npm install -g // 全局下载模块依赖
```

### 配置 HEXO

当我们安装完毕的时候，就需要对 Hexo 进行一些配置，具体是通过\_config.yml 文件来完成的

```bash
    .deploy_git
    node_modules //包所需要的依赖
    public // 静态网页存储的目录
    scaffolds // 样本
    source // 我们自己的md文件
    themes // 主题文件
    .gitignore
    _config.yml // 配置
    db.json
    package.json
    package-lock.json
```

### 本地运行

```bash
    hexo clean // 删除public文件的内容
    hexo g // 生成静态文件到public
    hexo s // 本地运行
```

### 发布到服务器

```bash
    hexo clean // 删除public文件的内容
    hexo g // 生成静态文件到public
    hexo d // 发布静态文件
```
