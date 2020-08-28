
import * as path from 'path';
import { Tray, Menu } from 'electron';

export const createApplication = ({ menu }: { menu: Menu }) => {
  const tray = new Tray(path.resolve('./src/UI/icons/808080.png'));

  tray.setContextMenu(menu);

  return {
    tray
  };
};
