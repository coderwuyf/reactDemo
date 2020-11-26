## 什么是pureComponent与memo
简而言之，就是防止不必要的组件渲染
当一个组件有许多子组件时，若当这个父组件的state发生变化时，由于Component的原因，就会调用一次render()函数
导致所有的子组件重新渲染。
应对这一问题的方法就是，React中的`shouldComponentUpdate`
这个方法有两个参数
- nextProps, 表示修改之后的props
- nextState, 表示修改之后的state
同时有一个返回值
- true/false, true表示调用render方法,false表示不调用render方法
这个方法的使用位置, 在类里面使用
```jsx
class Main extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (...)
  }
}
```
如果所有的类都必须添加这个方法，未免太过麻烦
因此出现了`pureComponent`与`memo`

这两个方法和上面`shouldComponentUpdate`功能一致
- 对于类组件就使用`pureComponent`
例子如下
```jsx
import React, {Component, pureComponent, memo} from 'react';

class Main extends PureComponent {
  render() {
    console.log("Main Render 被调用");
    return (
      <div>
        <Banner/>
        <ProductList/>
      </div>
    )
  }
}
```
- 对于函数组件就使用`memo`
例子如下
```jsx
import React, {Component, pureComponent, memo} from 'react';

const MemoBanner = memo(function() {
  console.log("Banner Render 被调用");
  return <div>Banner</div>
})
```