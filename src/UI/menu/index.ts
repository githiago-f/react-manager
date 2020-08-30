import { createMenu, createMenuItem } from '../../factories';
import {
  createProject,
  selectName,
  loadProjects,
  openCode,
  selectFolder,
  addProjectToList
} from '../../actions';
import { app } from 'electron';
import { removeFromProjects } from '../../actions/removeFromProjects';

const menu = async function () {
  const buttons = [];

  const createReactApp = createMenuItem({
    label: 'Create React App',
    type: 'normal',
    click: async () => {
      const project = await selectName();
      if(!project.canceled) {
        await createProject({
          name: project.projectName,
          path: project.projectPath,
          fullPath: project.path,
          useTypescript: true
        });
      }
    }
  });

  const exitApp = createMenuItem({
    label: 'Quit',
    type: 'normal',
    click: () => {
      app.quit();
    }
  });

  const addApp = createMenuItem({
    label: 'Add project',
    type: 'normal',
    click: async () => {
      const selectedFolder = await selectFolder();
      if(!selectedFolder.canceled) {
        addProjectToList(selectedFolder.path);
      }
    }
  });

  const separator = createMenuItem({
    type: 'separator'
  });

  const projects = await loadProjects();
  projects.forEach(project => {
    const projectButton = createMenuItem({
      label: project.name,
      type: 'submenu',
      submenu: [
        {
          label: 'Open on vscode',
          type: 'normal',
          click: () => {
            openCode(project.path);
          }
        },
        {
          label: 'Remove',
          type: 'normal',
          click: () => {
            removeFromProjects(project.name);
          }
        }
      ]
    });
    buttons.push(projectButton);
  });

  buttons.push(separator);
  buttons.push(addApp);
  buttons.push(createReactApp);
  buttons.push(exitApp);

  return createMenu(buttons);
};

export default menu;
