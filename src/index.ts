import { app } from 'electron';
import { createApplication } from './factories/createApplication';
// import Http from './helpers/Http';

app.on('ready', createApplication);

// new Http();
