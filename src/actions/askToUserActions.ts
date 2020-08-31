import { dialog } from 'electron';

export const askIfWantToOpenCode = async (projectName: string) => {
  const msgBox = await dialog.showMessageBox(null, {
    title: 'Open in vscode',
    message: `I've Finished creating your application!\n Do you want to open '${projectName}' in your vscode?`,
    cancelId: 1,
    buttons: [
      'Open',
      'Cancel'
    ]
  });

  return msgBox.response === 0;
};

export const askForCreateProject = async (props: {projectName: string, projectPath: string}) => {
  const {projectName, projectPath} = props;
  const msgBox = await dialog.showMessageBox(null, {
    title: 'Create this?',
    message: `Do you want to create ${projectName} in path ${projectPath}?`,
    cancelId: 1,
    buttons: [
      'Create',
      'Don\'t create'
    ]
  });

  return msgBox.response === 0;
};
