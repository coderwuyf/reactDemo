import React, {Component} from 'react';

import TabControl from './TabControl';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.titles = ['流行', '新款', '精选'];

    this.state = {
      currentTitle: '流行',
    }
  }

  render() {
    return (
      <div>
        <TabControl titles={this.titles} itemClick={index => this.itemClick(index)}/>
        <h2>{this.state.currentTitle}</h2>
      </div>
    )
  }

  itemClick(index) {
    console.log(this);
    this.setState({
      currentTitle: this.titles[index]
    })
  }
}