import { app } from 'electron';

import { createMenu } from './factories/createMenu';
import { createMenuItem } from './factories/createMenuItem';
import { createApplication } from './factories/createApplication';
import { openCode } from './actions/openOnCode';


app.on('ready', () => {
  const menu = createMenu([
    createMenuItem({
      label: 'Open code',
      type: 'normal',
      click: () => openCode(
        'C:\\Users\\Thiago Dutra\\Documents\\Projects\\Thiago\\react\\digital-wallet'
      )
    })
  ]);

  createApplication({ menu });
});
