import { envPath } from './envPath';

export const getDataSource = () => {
  const path = envPath(
    './data/projects.json',
    './resources/data/projects.json'
  );
  return path;
};
