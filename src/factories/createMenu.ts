import { Menu, MenuItem } from 'electron';

export const createMenu = (newMenu: MenuItem[]) => {
  const menu = Menu;

  menu.setApplicationMenu(Menu.buildFromTemplate([]));

  return menu.buildFromTemplate(newMenu);
};
