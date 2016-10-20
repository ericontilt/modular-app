import React from 'react';
import ReactDOM from 'react-dom';
import Shell from './components/Shell.jsx';

if (!window.ctApi) {
  throw new Error('The ma-api module should be loaded first!');
}

const { ctApi } = window;
const channel = ctApi.channel('shell');
channel.subscribe('register:module', () => {
  console.log('Module registerd!');
});

const render = () => {
  ReactDOM.render(
    <Shell />,
    document.getElementById('ma-shell')
  );
};

const ctShell = {
  render
};

export default ctShell;
