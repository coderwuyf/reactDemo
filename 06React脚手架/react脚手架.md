## 脚手架的概念：
编程中的脚手架，就是一种工具，帮助开发者快速生成项目的工程化结构
- 多个项目功能不同，但是其基本文件结构都是相似的；
- 既然相似，就可以使用一些工具，帮助开发者来搭建这个文件结构模板；
- 不同的项目，在这个模板基础之上，进行项目开发或者进行一些配置的简单修改即可；
- 这样就能保证项目的基本结构一致性，方便后期维护；
总结：***脚手架让项目从搭建到开发，再到部署，整个流程变得快速和便捷。***

## 不同的框架有不同的脚手架
- Vue的脚手架：vue-cli
- Angular的脚手架：angular-cli
- React的脚手架：create-react-app

目前这些脚手架都是使用node编写的，并且都是基于webpack的
因此需要使用包管理器来安装
常用的包管理工具有：***npm*** 与 ***yarn***

## yarn 与 npm 命令对比

![yarn与npm的命令对比](C:\Users\DELL\Desktop\ReactDemo\reactDemo\06React脚手架\img\yarn与npm.png)

## 安装脚手架
```
npm install -g create-react-app
```

## 创建React项目

### 创建React项目
命令如下：
- 注意：项目名称不能包含大写字母
```
create-react app 项目名称
```
- 这种创建方式，默认使用yarn来管理整个项目相关的依赖的

### 运行React项目
当项目创建完毕之后就可以进入到项目文件夹中，运行项目了
- 注意：一定要进入到项目文件夹中才能运行项目
```
cd 项目名称
yarn start
```

### 目录结构分析

```
test-react
├─ README.md // readme说明文档
├─ package.json // 对整个应用程序的描述：包括应用名称、版本号、一些依赖包、以及项目的启动、打包等等（node管理项目必备文件）
├─ public
│    ├─ favicon.ico // 应用程序顶部的icon图标
│    ├─ index.html // 应用的index.html入口文件
│    ├─ logo192.png // 被在manifest.json中使用
│    ├─ logo512.png // 被在manifest.json中使用
│    ├─ manifest.json // 和Web app配置相关
│    └─ robots.txt // 指定搜索引擎可以或者无法爬取哪些文件
├─ src
│    ├─ App.css // App组件相关的样式
│    ├─ App.js // App组件的代码文件
│    ├─ App.test.js // App组件的测试代码文件
│    ├─ index.css // 全局的样式文件
│    ├─ index.js // 整个应用程序的入口文件
│    ├─ logo.svg // 刚才启动项目，所看到的React图标
│    ├─ serviceWorker.js // 默认帮助我们写好的注册PWA(渐进式web应用,progressive web application)相关的代码
│    └─ setupTests.js // 测试初始化文件
└─ yarn.lock
```


### PWA
整个目录结构都非常好理解，只是有一个PWA相关的概念：

- PWA全称Progressive Web App，即渐进式WEB应用；
- 一个 PWA 应用首先是一个网页, 可以通过 Web 技术编写出一个网页应用. 随后添加上 App Manifest 和 Service Worker 来实现 PWA 的安装和离线等功能；
- 这种Web存在的形式，我们也称之为是 Web App；
PWA解决了哪些问题呢？

- 可以添加至主屏幕，点击主屏幕图标可以实现启动动画以及隐藏地址栏；
- 实现离线缓存功能，即使用户手机没有网络，依然可以使用一些离线功能；
- 实现了消息推送；
- 等等一系列类似于Native App相关的功能；

### 如何配置webpack
在上面的目录结构中，并没有看到有关webpack相关的内容的原因是因为React的脚手架将webpack相关的配置隐藏起来了。
***如何看到webpack的配置信息呢？***
- 在package.json文件中配置`"eject": "react-scripts eject"`
- 这个操作是不可逆的，因此在执行过程中会显示相关提示
- 执行语句`yarn eject`
