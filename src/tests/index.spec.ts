import supertest, { SuperTest, Test, Response } from 'supertest';
import app from '../index';

// create a request object
const request: SuperTest<Test> = supertest(app);

describe('Test responses', () => {
    afterAll((done) => {
        done();
    });

    it('test main api', async (): Promise<void> => {
        const response: Response = await request.get(
            '/api/images?filename=fjord&width=200&height=500'
        );
        expect(response.status).toBe(200);
    });

    it('test missing query', async (): Promise<void> => {
        const response: Response = await request.get(
            '/api/images?filename=fjord'
        );
        expect(response.status).toBe(400);
    });

    it('test invalid query value', async (): Promise<void> => {
        const response: Response = await request.get(
            '/api/images?filename=fjord&width=200&height=0'
        );
        expect(response.status).toBe(400);
    });

    it('test not found page', async (): Promise<void> => {
        const response: Response = await request.get('/api/img');
        expect(response.status).toBe(404);
    });
});
