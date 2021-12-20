import express, { Application, Request, Response } from 'express';
import imagesRoute from './routes/imagesRoutes';

const port = 3000;

const app: Application = express();

app.listen(port, () => {
    console.log('welcome');
});

app.use('/api', imagesRoute);

app.use((req: Request, res: Response) => {
    res.status(404).send('page not found please enter correct URL');
});

export default app;

// http://localhost:3000/api/images?filename=fjord&width=200&height=500
