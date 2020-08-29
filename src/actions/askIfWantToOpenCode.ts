import { dialog } from 'electron';

export const askIfWantToOpenCode = async (projectName: string) => {
  const msgBox = await dialog.showMessageBox(null, {
    title: 'Open in vscode',
    message: `Do you want to open ${projectName} in your vscode?`,
    cancelId: 1,
    buttons: [
      'Ok',
      'Cancel'
    ]
  });

  if(msgBox.response === 0) {
    return true;
  } else {
    return false;
  }
};
