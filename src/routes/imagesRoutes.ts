import express, { Router } from 'express';
import resizeController from '../controllers/resizeController';
import queryValidationMiddleware from '../middlewares/queryValidationMiddleware';

const router: Router = express.Router();

router.get('/images', queryValidationMiddleware, resizeController);

export default router;
