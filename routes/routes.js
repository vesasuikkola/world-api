import express from 'express';
import * as controllers from '../controllers/controllers.js';
import isAuthorized from '../services/requestAuthenticator.js';

const router = express.Router();

router.get('/countries/:code', isAuthorized, controllers.getOne);
router.get('/countries', isAuthorized, controllers.getAll);
router.get('/', isAuthorized, controllers.usage);

export default router;
