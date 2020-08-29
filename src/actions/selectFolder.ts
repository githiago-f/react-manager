import { dialog } from 'electron';

interface IPath {
  path?: string;
  canceled: boolean;
}

export const selectFolder = async (): Promise<IPath> => {
  const selectDir = await dialog.showOpenDialog(null, {
    properties: ['openDirectory'],
    title: 'Select project\'s destination',
    buttonLabel: 'Select'
  });

  if(selectDir.canceled) {
    dialog.showErrorBox('Invalid path', 'You have canceled the path selection for the project');
    return {
      canceled: true
    };
  }

  return {
    path: selectDir.filePaths[0].replace(/\\/gi, '/'),
    canceled: false
  };
};
