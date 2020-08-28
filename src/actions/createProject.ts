import { exec } from 'child_process';

interface IProject {
  name: string;
  path: string;
  useTemplate?: boolean;
  template?: string;
  useTypescript?: boolean;
}

export const createProject = (project: IProject) => {
  let command = `npx create-react-app ${project.name}`;

  if(project.useTemplate){
    command += ' --template ' + project.template;
  }
  if(project.useTypescript) {
    command += ' --typescript';
  }

  const reactProccess = exec(command, { cwd: project.path });
  reactProccess.stderr.on('data', console.log);
  reactProccess.stdout.on('data', console.log);
};
