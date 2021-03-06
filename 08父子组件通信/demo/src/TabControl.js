import React, {Component} from 'react';

export default class TabControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    }
  }

  render() {
    const {titles} = this.props;
    const {currentIndex} = this.state;

    return (
      <div className="tab-control">
        {
          titles.map((item, index) => {
            return (
              <div className="tab-item" onClick={e => this.handleClick(index)} key={index}>
                <span className={"title " + (index === currentIndex ? "active" : "")}>{item}</span>
              </div>
            )
          })
        }
      </div>      
    )
  }

  handleClick(index) {
    console.log(this);
    this.setState({
      currentIndex: index
    });
    this.props.itemClick(index);
  }
}