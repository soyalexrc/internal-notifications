import * as functions from '@google-cloud/functions-framework';
import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.get('/hello', (req: Request, res: Response) => {
  res.send(`Hello ${req.query.name || 'World'}!`);
});

app.post('/logData', (req: Request, res: Response) => {
  const body = req.body;
  console.log('Received data:', body);
  res.status(200).json({
    message: 'Data received successfully',
    data: body,
  });
});

// Export as the Cloud Function
functions.http('main', app);
