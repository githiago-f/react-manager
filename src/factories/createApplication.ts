import {Tray} from 'electron';
import menu from '../UI/menu';
import UI from '../UI';
import Events from '../helpers/Event';

let tray = null;

export const createApplication = async () => {
  if(tray === null){
    tray = new Tray(UI.images.logo);
    tray.setContextMenu(await menu());
    tray.setTitle('React Projects');
  }

  Events.register('UPDATE_MENU', async ()=> {
    tray.setContextMenu(await menu());
  });
};
