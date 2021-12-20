import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

function queryValidationMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    const { filename, width, height } = req.query;
    const filenamePath = path.resolve(
        __dirname,
        `../../assets/${filename}.jpg`
    );

    if (!filename || !width || !height) {
        res.status(400).send(
            'Missing queries, please enter correct URL,<br>URL should contain: filename-width-height'
        );
    } else if (
        fs.existsSync(filenamePath) &&
        Number(width) > 0 &&
        Number(height) > 0
    ) {
        next();
    } else {
        res.status(400)
            .send(`Please follow this rules to have a correct URL:<br>
         1)Filename should be one of the given names<br>
         2)Width and height should be numbers more than zero
        `);
    }
}

export default queryValidationMiddleware;
