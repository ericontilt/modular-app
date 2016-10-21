import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store/configureStore';
import Shell from './components/Shell.jsx';
import register from './extensions/register';

if (!window.maApi) {
  throw new Error('The ma-api module should be loaded first!');
}

const store = configureStore();

const { maApi } = window;
const channel = maApi.channel('shell');
channel.subscribe('register:module', modDescription => {
  console.log(`Registering module: ${JSON.stringify(modDescription)}`);
  register({ modDescription, dispatch: store.dispatch });
});

const render = () => {
  ReactDOM.render(
    <ReduxProvider store={store}>
      <Shell/>
    </ReduxProvider>,
    document.getElementById('ma-shell'),
  );
};

const run = () => {
  render();
};

const maShell = {
  run
};

export default maShell;
