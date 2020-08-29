import { app } from 'electron';
import { createApplication } from './factories/createApplication';

app.on('ready', createApplication);
