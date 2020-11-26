import React, { Component } from 'react';
import { EventEmitter } from 'events';

const eventBus = new EventEmitter();

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <button onClick={e => this.btnClick()}>按钮</button>
      </div>
    )
  }

  btnClick() {
    eventBus.emit("headerClick", "伍裕丰", 18);
  }
}

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader/>
        <ul>
          <li>文本1</li>
          <li>文本2</li>
          <li>文本3</li>
        </ul>
      </div>
    )
  }
}

export default class App extends Component {
  
  componentDidMount() {
    eventBus.addListener("headerClick", this.headerClick)
  }

  headerClick(name, age) {
    console.log(name);
    console.log(age);
  }

  componentWillUnmount() {
    eventBus.removeListener("headerClick", this.headerClick)
  }

  render() {
    return (
      <div>
        <Profile/>
        <h2>其他内容</h2>
      </div>
    )
  }
}