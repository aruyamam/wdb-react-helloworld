import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App as Pizza } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Pizza />, document.getElementById('root'));
registerServiceWorker();
