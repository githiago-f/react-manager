import * as http from 'http';

export default class Http {
  constructor(){
    http.createServer((req, res)=>{
      res.setHeader('Content-Type', 'application/json');
      setInterval(()=> {
        const content = {
          date: new Date()
        };
        res.write(JSON.stringify(content));
      }, 2000);
    }).listen(8000);
  }

  requestListener(message: any) {
    console.log(message);
  }
}
