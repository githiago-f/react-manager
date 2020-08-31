import {Tray, app, BrowserWindow} from 'electron';
import menu from '../UI/menu';
import UI from '../UI';
import Events from '../helpers/Events';
import { openCode, addProjectToList, askIfWantToOpenCode } from '../actions';

let tray: Tray = null;

export const createApplication = async () => {
  if(app.dock){
    app.dock.hide();
  }

  app.on('quit', ()=>{
    tray.destroy();
  });

  tray = new Tray(UI.images.logo);

  const openMenu = () => {
    tray.popUpContextMenu();
  };

  tray.on('click', openMenu);
  tray.on('double-click', openMenu);

  tray.setContextMenu(await menu());
  tray.setTitle('React Projects');
  tray.setToolTip('React Projects');

  Events.register('UPDATE_MENU', async ()=> {
    tray.setContextMenu(await menu());
  });

  Events.register('INIT_CREATION', () => {
    tray.setToolTip('Starting creation...');
  });

  Events.register('CREATING_PROJECT', async (isCreating: boolean, projectPath?: string) => {
    if(isCreating){
      tray.setImage(UI.images.loadingLogo);
      tray.setToolTip('Creting new...');
    } else {
      tray.setImage(UI.images.logo);
      await addProjectToList(projectPath);
      const projectName = projectPath.split('/').pop();
      const canOpenInCode = await askIfWantToOpenCode(projectName);
      if(canOpenInCode){
        openCode(projectPath);
      }
      tray.setToolTip('React Projects');
    }
  });
};
