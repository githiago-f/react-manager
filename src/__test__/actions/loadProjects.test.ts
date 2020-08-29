import { loadProjects } from '../../actions';

describe('#Tests project loading', () => {
  test('load projects and matches all projects', async () => {
    const dataProjects = require('./../../../data/projects.json');
    const projects = await loadProjects();

    expect(projects).toEqual(dataProjects.projects);
  });
});
