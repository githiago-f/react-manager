import fs from 'fs';

export class Logger {
  private createStream = fs.createWriteStream;

  errorLogger() {}

  messageLogger() {}
}
