## 安装antdUI

```
yarn add antd 
```
### 使用antdUI

``` js
import "antd/dist/antd.css"
```

## antdUI高级配置

### 配置craco
什么是`craco`?
用于修改antd的默认配置

第一步:安装`craco`
```
yarn add @craco/craco
```

第二步: 修改package.json
- 原本是通过`react-scripts`来管理的;
- 现在启动时,我们通过`craco`来管理
```
"scripts": {
// 修改前的配置
// -   "start": "react-scripts start",
// -   "build": "react-scripts build",
// -   "test": "react-scripts test",

// 修改后的配置
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
```

第三步: 创建`craco.config.js`文件用于修改默认配置
```js
module.export = {
  // 配置文件
}
```

### 配置主题
- 按照配置主题的要求，自定义主题需要用到less-loader提供的less变量覆盖功能
- 我们可以引入`craco-less`来帮助加载less样式和修改变量

- 安装`craco-less`
```
yarn add craco-less
```

- 修改`craco.config.js`中的`plugin`,使用`modifyVars`可以在运行时修改LESS变量
```js
const CracoLessPlugin = require('craco-less');

module.export = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessloaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
```

- 引入antd样式时，将`.css`改成`.less`
```js
// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';
```

- 重启`yarn start`