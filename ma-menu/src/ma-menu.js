// import React from 'react';
// import ReactDOM from 'react-dom';
// import Menu from './components/Menu.jsx';

if (!window.ctApi) {
  throw new Error('The ma-api module should be loaded first!');
}

let _isRegistered = false;

export default {
  register: () => {
    if (_isRegistered) {
      throw new Error('Module is already registered.');
    }
    const { ctApi } = window;
    const channel = ctApi.channel('shell');
    channel.publish('register:module', {
      type: 'module',
    });
  }
}
