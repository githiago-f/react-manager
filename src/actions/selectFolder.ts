import Window from '../classes/Window';
import { remote } from 'electron';

export const selectFolder = async (props?: {title:string;}) => {
  const curWindow = Window.instance.getWindow;

  const dir = await remote.dialog.showOpenDialog(curWindow, {
    properties: ['createDirectory'],
    title: props.title || 'Select project\'s destination',
    buttonLabel: 'Select'
  });

  console.log(dir.filePaths);
};
