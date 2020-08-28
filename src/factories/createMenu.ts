import { Menu, MenuItem } from 'electron';

export const createMenu = (newMenu: MenuItem[]) => {
  const menu = Menu;

  return menu.buildFromTemplate(newMenu);
}
