import { app } from 'electron';
import { createApplication } from './factories/createApplication';
import menu from './UI/menu';

app.on('ready', () => {
  createApplication({ menu });
});
