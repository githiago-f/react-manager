import {Tray} from 'electron';
import menu from '../UI/menu';
import UI from '../UI';

let tray = null;

export const createApplication = () => {
  if(tray === null){
    tray = new Tray(UI.images.logo);
    tray.setContextMenu(menu);
    tray.setTitle('React Projects');
  }
};
