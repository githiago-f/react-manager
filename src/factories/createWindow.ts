import Window from '../classes/Window';
import {resolve} from 'path';

export const createWindow = () => {
  const win = Window.instance.getWindow;

  win.loadFile(resolve('./src/UI/pages/index.html'));
};
