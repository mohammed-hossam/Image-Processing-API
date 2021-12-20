import express, { Application, Request, Response } from 'express';
import fs from 'fs';
import { resizedImgsFolderPath } from './utiles/imgsMainpath';
import imagesRoute from './routes/imagesRoutes';

const port = 3000;

const app: Application = express();

app.listen(port, () => {
    if (!fs.existsSync(resizedImgsFolderPath)) {
        fs.mkdirSync(resizedImgsFolderPath);
    }
});

app.use('/api', imagesRoute);

app.use((req: Request, res: Response) => {
    res.status(404).send('page not found please enter correct URL');
});

export default app;
