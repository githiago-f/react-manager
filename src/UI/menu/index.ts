import { createMenu } from '../../factories/createMenu';
import { createMenuItem } from '../../factories/createMenuItem';
import { createProject } from '../../actions/createProject';
import { selectFolder } from '../../actions/selectFolder';

const menu = function () {
  const buttons = [];

  const createReactApp = createMenuItem({
    label: 'Create React App',
    type: 'normal',
    click: () => {
      selectFolder();
    }
  });

  buttons.push(createReactApp);
  return createMenu(buttons);
};

export default menu();
