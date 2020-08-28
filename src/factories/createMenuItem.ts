import {MenuItem} from 'electron';
import { MenuItemConstructorOptions } from 'electron/main';

export const createMenuItem = (options: MenuItemConstructorOptions) => {
  return new MenuItem(options)
}
