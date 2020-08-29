import { promises } from 'fs';

interface IProject {
  name: string;
  path: string;
  status: 0 | 1 | 2;
}

export const loadProjects: () => Promise<IProject[]> = async () => {
  const file = await promises.readFile('./data/projects.json');
  const projects = JSON.parse(file.toString());
  return projects.projects;
};
