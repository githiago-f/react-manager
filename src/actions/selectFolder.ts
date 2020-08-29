import { dialog } from 'electron';

export const selectFolder = async () => {

  const selectDir = await dialog.showOpenDialog(null, {
    properties: ['openDirectory'],
    title: 'Select project\'s destination',
    buttonLabel: 'Select'
  });

  return selectDir.filePaths[0];
};
