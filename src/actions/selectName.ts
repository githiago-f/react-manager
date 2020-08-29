import { dialog } from 'electron';
import Window from '../classes/Window';

export const selectName = async () => {
  const saveTo = await dialog.showSaveDialog(Window.instance.getWindow, {
    properties: ['createDirectory'],
    title: 'Create project\'s name'
  });

  if(saveTo.canceled) {
    dialog.showErrorBox('Invalid path', 'You have canceled the path selection for the project');
  }

  const path = saveTo.filePath;
  const splitedPath = path.split('/');
  const projectName = splitedPath.pop();
  const projectPath = splitedPath.join('/');

  return {
    projectName,
    projectPath,
    path
  };
};
