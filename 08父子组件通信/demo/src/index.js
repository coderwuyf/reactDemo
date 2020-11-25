import React from 'react';
import ReactDOM from 'react-dom';

import App from './ClassApp';
import App2 from './FunctionApp';

ReactDOM.render((
  <div>
    <App name="伍裕丰" age="22" height="170cm" />
    <App2 name="张三" age="18" height="170cm" />
  </div>
), document.getElementById('root'));