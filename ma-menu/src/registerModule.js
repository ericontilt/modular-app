export default function registerModule() {
  const { maApi } = window;
  const channel = maApi.channel('shell');

  channel.publish('register:module', {
    type: 'module',
    target: 'main-menu'
  });
}
