import React, { PureComponent, Fragment} from 'react';
import { Button, Row, Col, Input } from "antd";
import "antd/dist/antd.css";


export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: 'hello React',
      flag: false,
      value: ''
    }
  }

  render() {
    return (
      <Fragment>
        <Row justify="space-around" align="middle">
          <Col span={12}>
            <h2>hello world</h2>
            <h2>{this.state.message}</h2>
          </Col>
          <Col span={12}>
            <Button type="primary" ghost={false} loading={this.state.flag} onClick={() => this.delay()}>按钮</Button>
          </Col>
          <h2>{this.state.value}</h2>
          <Input placeholder="输入框" onChange={e => this.handleChange(e)}></Input>
        </Row>
        
        
      </Fragment>
    )
  }

  delay() {
    this.setState(() => {
      return {
        flag: true
      }
    })
    setTimeout(() => {
      this.setState({
        flag: false
      });
      console.log("成功");
    }, 2000)
  }

  handleChange(e) {
    this.setState(() => {
      return {
        value: e.target.value
      }
    });
    // this.setState({
    //   value: e.target.value
    // })
  console.log(this.state.value);
  }
}

