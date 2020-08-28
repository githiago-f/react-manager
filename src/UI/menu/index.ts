import { createMenu } from '../../factories/createMenu';
import { createMenuItem } from '../../factories/createMenuItem';
import { createProject } from '../../actions/createProject';

const menu = function () {
  const buttons = [];
  // open selectors
  const createReactApp = createMenuItem({
    label: 'Create React App',
    type: 'normal',
    click: () => {
      createProject({
        name: 'novo-projeto',
        useTypescript: true,
        path: ''
      });
    }
  });

  buttons.push(createReactApp);
  return createMenu(buttons);
};

export default menu();
