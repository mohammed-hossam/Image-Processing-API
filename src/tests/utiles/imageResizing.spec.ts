import path from 'path';
import imageResizing from '../../utiles/imageResizing';
import {
    imgsFolderPath,
    resizedImgsFolderPath,
} from '../../utiles/imgsMainpath';

describe('test image resizing', () => {
    let input = path.resolve(imgsFolderPath, 'icelandwaterfall.jpg');
    const output = path.resolve(
        resizedImgsFolderPath,
        '../../assets/resized-images/icelandwaterfall-600x800.jpg'
    );
    const width = '600';
    const height = '800';

    it('test image resizing success', async (): Promise<void> => {
        const err = await imageResizing({ input, output, width, height });
        expect(err).toBe(false);
    });

    it('test image resizing failure', async (): Promise<void> => {
        input = 'unfound path';
        const err = await imageResizing({ input, output, width, height });
        expect(err).toBe('image resizing faild, please try again');
    });
});
