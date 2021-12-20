import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import imageResizing from '../utiles/imageResizing';
import { imgsFolderPath, resizedImgsFolderPath } from '../utiles/imgsMainpath';

const resizeController = async (req: Request, res: Response): Promise<void> => {
    const { filename, width, height } = req.query;
    const input = path.resolve(imgsFolderPath, `${filename}.jpg`);
    const output = path.resolve(
        resizedImgsFolderPath,
        `${filename}-${width}x${height}.jpg`
    );

    if (fs.existsSync(output)) {
        res.sendFile(output);
    } else {
        const resizeProps = {
            input,
            output,
            width: width as string,
            height: height as string,
        };

        const err = await imageResizing(resizeProps);

        if (err) {
            res.send(err);
        } else {
            res.sendFile(output);
        }
    }
};

export default resizeController;
