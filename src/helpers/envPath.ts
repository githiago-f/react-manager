import { app } from 'electron';

export const envPath = (developmentPath: string, productionPath: string) => {
  if(app.isPackaged) {
    return productionPath;
  } else {
    return developmentPath;
  }
};
