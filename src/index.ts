import { app } from 'electron';
import { createApplication } from './factories/createApplication';
import menu from './UI/menu';

app.whenReady().then(() => {
  createApplication({ menu });
});
