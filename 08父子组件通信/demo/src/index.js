import React from 'react';
import ReactDOM from 'react-dom';

// 父传子
//  类子组件
// import App from './ClassApp';
//  函数式子组件
// import App2 from './FunctionApp';

// 子传父
// import App3 from './counter';

// 综合案例TabControl
import './style.css'
import App from './App4.js';


ReactDOM.render((
  <div>
    {/*
    <App name="伍裕丰" age="22" height="170cm" />
    <App2 name="张三" age="18" height="170cm" />
    <App3/>
    */}
    <App/>
  </div>
), document.getElementById('root'));