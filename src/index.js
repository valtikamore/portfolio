import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { state } from "./data/data";


ReactDOM.render(
    <App state={state}/>,
  document.getElementById('root')
);
