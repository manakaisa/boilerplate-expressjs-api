// Import dependencies
import { Router } from 'express';

// Import routers
import routeUser from './route.user.js';

// Handle routers
const router = Router();

router.use('/users', routeUser);

export default router;
