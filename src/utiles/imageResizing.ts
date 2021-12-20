import sharp, { Sharp } from 'sharp';
import { ResizeProps } from '../interfaces/resize';

async function imageResizing(props: ResizeProps): Promise<string | boolean> {
    const { input, output, width, height } = props;

    const data: Sharp = await sharp(input).resize(
        Number(width),
        Number(height)
    );

    try {
        await data.toFile(output);
        return false;
    } catch (err) {
        return 'image resizing faild, please try again';
    }
}

export default imageResizing;
