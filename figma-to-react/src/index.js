import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MasterClock, Mastertest, Mastermainscreen, Masterinteractions } from './figmaComponents';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Masterinteractions/>, document.body);
registerServiceWorker();
