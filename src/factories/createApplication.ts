import {Tray} from 'electron';
import menu from '../UI/menu';
import UI from '../UI';
import Events from '../helpers/Events';
import { addProjectToList } from '../actions/addProjectToList';
import { askIfWantToOpenCode } from '../actions/askIfWantToOpenCode';
import { openCode } from '../actions';

let tray: Tray = null;

export const createApplication = async () => {
  if(tray === null){
    tray = new Tray(UI.images.logo);
    tray.setContextMenu(await menu());
    tray.setTitle('React Projects');
  }

  Events.register('UPDATE_MENU', async ()=> {
    tray.setContextMenu(await menu());
  });

  Events.register('CREATING_PROJECT', async (isCreating: boolean, projectPath?: string) => {
    if(isCreating){
      tray.setImage(UI.images.loadingLogo);
    } else {
      tray.setImage(UI.images.logo);
      await addProjectToList(projectPath);
      const projectName = projectPath.split('/').pop();
      const canOpenInCode = await askIfWantToOpenCode(projectName);
      if(canOpenInCode){
        openCode(projectPath);
      }
    }
  });
};
