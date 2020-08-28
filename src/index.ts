import { app } from 'electron';

import { createMenu } from './factories/createMenu';
import { createMenuItem } from './factories/createMenuItem';
import { createApplication } from './factories/createApplication';


app.on('ready', () => {
  const menu = createMenu([
    createMenuItem({label: 'React', type: 'normal', click: async () => {
      console.log('Clicou!');
    } })
  ]);

  createApplication({ menu });
});
