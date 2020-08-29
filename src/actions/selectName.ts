import { dialog } from 'electron';

interface IPath {
  canceled: boolean;
  projectName?: string;
  projectPath?: string;
  path?: string;
}

export const selectName = async (): Promise<IPath> => {
  const saveTo = await dialog.showSaveDialog(null, {
    properties: ['createDirectory'],
    title: 'Create project\'s name'
  });

  if(saveTo.canceled) {
    dialog.showErrorBox('Invalid path', 'You have canceled the path selection for the project');
    return {
      canceled: true
    };
  }

  const path = saveTo.filePath.replace(/\\/gi, '/');
  const splitedPath = path.split('/');
  const projectName = splitedPath.pop();
  const projectPath = splitedPath.join('/');

  return {
    projectName,
    projectPath,
    path,
    canceled: false
  };
};
