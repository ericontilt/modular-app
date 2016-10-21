const REGISTER_MENU_ITEM = 'register:menu-item';

export default function registerListeners() {
  const { maApi } = window;
  const channel = maApi.channel('main-menu');

  channel.subscribe(REGISTER_MENU_ITEM, (metadata) => {

  });
}
