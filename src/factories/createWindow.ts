import Window from '../classes/Window';
import { BrowserWindow, app } from 'electron';
import { BrowserWindowConstructorOptions } from 'electron/main';
import UI from '../UI';

export const createWindow: () => BrowserWindow = () => {
  const options: BrowserWindowConstructorOptions = {
    icon: UI.images.logo,
  };

  Window.instance.setWindow = new BrowserWindow(options);
  const win = Window.instance.getWindow;
  win.hide();
  win.loadFile(UI.pages.main);

  win.on('minimize', () => {
    win.minimize();
  });

  win.on('close', (event)=> {
    // add state for isQuiting
    // if(false){
    //   return false;
    // }
    app.quit();
  });

  return win;
};
