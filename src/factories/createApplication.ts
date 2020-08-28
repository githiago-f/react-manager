
import { resolve } from 'path';
import { Tray, Menu } from 'electron';
import { createWindow } from './createWindow';

export const createApplication = ({ menu }: { menu: Menu }) => {
  const win = createWindow();

  const tray = new Tray(resolve('./src/UI/icons/808080.png'));
  tray.setContextMenu(menu);

  return {
    tray,
    window: win
  };
};
