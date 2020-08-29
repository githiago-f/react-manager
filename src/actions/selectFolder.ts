import Window from '../classes/Window';
import { dialog } from 'electron';

export const selectFolder = async () => {
  const curWindow = Window.instance.getWindow;

  const selectDir = await dialog.showOpenDialog(curWindow, {
    properties: ['openDirectory'],
    title: 'Select project\'s destination',
    buttonLabel: 'Select'
  });

  return selectDir.filePaths[0];
};
