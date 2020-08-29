import { exec } from 'child_process';

export const openCode = (projectPath: string) => {
  exec('code -n .', { cwd: projectPath }).unref();
};
