import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import NavbarMenu from './components/NavbarMenu';
import Jumbo from './components/Jumbo';
import Footerpart from './components/Footerpart';

ReactDOM.render(
    <React.StrictMode>
        <NavbarMenu></NavbarMenu>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Jumbo></Jumbo>
        <App />
        <Footerpart></Footerpart>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();