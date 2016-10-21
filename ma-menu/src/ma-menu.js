import registerModule from './registerModule';

if (!window.maApi) {
  throw new Error('The ma-api module should be loaded first!');
}

export default {
  register: registerModule
}
