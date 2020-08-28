
import * as path from 'path';
import { Tray } from 'electron';

export const createApplication = () => {
  const tray = new Tray(path.resolve('./src/UI/icons/808080.png'));

  return tray;
};
