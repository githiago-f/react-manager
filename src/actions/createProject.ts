import { exec } from 'child_process';
import { dialog } from 'electron';
import Events from '../helpers/Events';

interface IProject {
  name: string;
  path: string;
  useTemplate?: boolean;
  template?: string;
  useTypescript?: boolean;
  fullPath?: string;
}

export const createProject = async (project: IProject) => {
  let command = `npx create-react-app ${project.name}`;

  if(project.useTemplate){
    command += ' --template ' + project.template;
  }
  if(project.useTypescript) {
    command += ' --template typescript';
  }

  const reactProccess = exec(command, { cwd: project.path });

  reactProccess.stderr.on('error', (err) => {
    if(err) dialog.showErrorBox('Error while creating react app', err.message);
  });

  reactProccess.stdout.on('data', (chunk) => {
    const startsLoading = /Creating a new React app/gi.test(chunk);
    const hasFinished = /Happy hacking!/gi.test(chunk);

    if(startsLoading) {
      Events.notify('CREATING_PROJECT', true);
    } else if (hasFinished) {
      Events.notify('CREATING_PROJECT', false, project.fullPath);
    }
  });

  return;
};
