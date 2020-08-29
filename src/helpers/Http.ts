import http from 'http';

export default class Http {
  static readonly instance = new Http();
  private constructor(){
    http.createServer((req, res)=>{
      req.addListener('data', this.requestListener.bind(this, res));
    }).listen(8000);
  }

  requestListener(res: http.ServerResponse) {
    res.write('<html><body><h1>Titulo da página</h1></body></html>');
  }
}
