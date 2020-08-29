import { createMenu } from '../../factories/createMenu';
import { createMenuItem } from '../../factories/createMenuItem';
import { createProject } from '../../actions/createProject';
import { selectName } from '../../actions/selectName';
import { openCode } from '../../actions/openOnCode';
import Window from '../../classes/Window';
import { app } from 'electron';

const menu = function () {
  const buttons = [];

  const createReactApp = createMenuItem({
    label: 'Create React App',
    type: 'normal',
    click: async () => {
      const project = await selectName();
      await createProject({
        name: project.projectName,
        path: project.projectPath,
        useTypescript: true
      });
      openCode(project.path);
    }
  });

  const exitApp = createMenuItem({
    label: 'Quit',
    type: 'normal',
    click: () => {
      app.quit();
    }
  });

  buttons.push(createReactApp);
  buttons.push(exitApp);
  return createMenu(buttons);
};

export default menu();
