import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base.css';
import './styles/nav-bar.css';
import './styles/landing.css';
import './styles/welcome.css';
import './styles/services.css';
import './styles/sections.css';
import './styles/footer.css';
import './styles/signup-modal.css';
import './styles/side-bar.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
