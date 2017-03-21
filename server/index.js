import express from 'express';
import http from 'http';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
app.server = http.createServer(app);

app.set('port', 3000);

app.use(morgan('dev'));
app.use(bodyParser.json());

app.route('/')
   .get((req, res) => {
    return res.status(200).json({
      data: 'retorno res'
    });
  });

export default app;
