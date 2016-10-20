import React from 'react';
import ReactDOM from 'react-dom';
import Shell from './components/Shell.jsx';

if (!window.maApi) {
  throw new Error('The ma-api module should be loaded first!');
}

const { maApi } = window;
const channel = maApi.channel('shell');
channel.subscribe('register:module', () => {
  console.log('Module registerd!');
});

const render = () => {
  ReactDOM.render(
    <Shell />,
    document.getElementById('ma-shell')
  );
};

const maShell = {
  render
};

export default maShell;
