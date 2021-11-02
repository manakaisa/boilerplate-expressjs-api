// Import dependencies
import { Router } from 'express';

// Import routers
import routeHello from './route.hello.js';

// Handle routers
const router = Router();

router.use('/hello', routeHello);

export default router;
