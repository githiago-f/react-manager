import { loadProjects } from './loadProjects';
import { promises } from 'fs';
import { getDataSource } from '../helpers/getDataSource';
import Events from './../helpers/Events';

export const removeFromProjects = async (projectName: string) => {
  const projectsData = await loadProjects();
  const projectIndex = projectsData.findIndex(
    project => {
      return project.name === projectName;
    }
  );

  if(projectIndex === -1) {
    return false;
  }

  projectsData.splice(projectIndex, 1);
  const projectsFileData = JSON.stringify({ projects: projectsData});
  await promises
    .writeFile(
      getDataSource(),
      projectsFileData
    );

  Events.notify('UPDATE_MENU');

  return true;
};
