import * as http from 'http';

export default class Http {
  private listeners = {
    '/viewlogs/:appId': () => {}
  };

  constructor(){
    http.createServer((req, res)=>{
      // this.getListener(req.url);
      req.on('close', this.onClose.bind(this));
    }).listen(8000);
  }

  getListener(url: string) {
    return this.listeners[url];
  }

  onClose() {
    console.log('emmit closed');
  }
}
