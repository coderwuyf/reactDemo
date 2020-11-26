## 对于类组件的ref
- 当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性；
- 当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性；
***使用示例***
```jsx
import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.titleEl = null;
  }

  render() {
    return (
      <div>
        {/*方法一*/}
        <h2 ref="title">String Ref</h2>
        {/*方法二*/}
        <h2 ref={this.titleRef}>Hello Create Ref</h2>
        {/*方法三*/}
        <h2 ref={element => this.titleEl = element}>Callback Ref</h2>

        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }

  changeText() {
    this.refs.title.innerHTML = "你好啊,李银河";
    this.titleRef.current.innerHTML = "你好啊,李银河";
    this.titleEl.innerHTML = "你好啊,李银河";
  }
}
```

## 对于函数组件的ref
函数式组件是没有实例的，所以无法通过ref获取他们的实例：

- 但是某些时候，我们可能想要获取函数式组件中的某个DOM元素；
- 这个时候我们可以通过 `React.forwardRef` ，后面我们也会学习 hooks 中如何使用ref；