import { createWindow } from './createWindow';

export const createApplication = () => {
  const win = createWindow();
  return {
    win
  };
};
