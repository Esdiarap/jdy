import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss' // 引入基础样式

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const allA = document.querySelectorAll('a')
const allButton = document.querySelectorAll('button')
allA.forEach(a => {
  a.addEventListener('click', e => e.preventDefault())
})
allButton.forEach(btn => btn.addEventListener('click', e => e.preventDefault()))
