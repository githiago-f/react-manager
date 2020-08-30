import { promises } from 'fs';
import { getDataSource } from '../helpers/getDataSource';

interface IProject {
  name: string;
  path: string;
  status: 0 | 1 | 2;
}

export const loadProjects: () => Promise<IProject[]> = async () => {
  const file = await promises.readFile(getDataSource());
  const projects = JSON.parse(file.toString());
  projects.projects = projects.projects || [];
  return projects.projects;
};
