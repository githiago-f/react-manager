import { promises } from 'fs';
import { loadProjects } from './loadProjects';
import Events from '../helpers/Events';

export const addProjectToList = async (projectPath: string) => {
  const projects = await loadProjects();
  const projectName = projectPath.split('/').pop();
  projects.push({
    name: projectName,
    path: projectPath,
    status: 0
  });

  await promises.writeFile('./resources/data/projects.json', JSON.stringify({ projects }));

  Events.notify('UPDATE_MENU');
};
