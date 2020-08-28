import { exec } from 'child_process';

export const openCode = (projectPath: string) => {
  const codeProccess = exec('', { cwd: projectPath });
  codeProccess.stderr.on('data', console.log);
};
