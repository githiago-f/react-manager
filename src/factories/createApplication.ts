import { Tray, Menu } from 'electron';
import { createWindow } from './createWindow';
import UI from '../UI';

export const createApplication = ({ menu }: { menu: Menu }) => {
  const win = createWindow();

  const tray = new Tray(UI.images.logo);
  tray.setContextMenu(menu);

  return {
    tray,
    window: win
  };
};
