import React, {Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: ['唱歌', '玩游戏']
    }
  };

  render() {
    const {name, age, height} = this.props;

    return (
      <div>
        <h2>
          我是class的组件
          <p>
            展示父组件传递过来的数据: {'我是' + name + ', 我的年龄：' +  age + ', 我的身高：' + height}
          </p>
          <p>
            我的爱好是： {this.state.hobbies.join('、')}
          </p>
        </h2>
      </div>
    )
  }
}