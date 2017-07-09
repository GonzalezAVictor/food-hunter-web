import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import 'antd/dist/antd.css'; 

ReactDOM.render((
  <LocaleProvider locale={enUS}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LocaleProvider>
), document.getElementById('root'));
registerServiceWorker();
