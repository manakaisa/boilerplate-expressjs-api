// Import dependencies
import { Router } from 'express';

// Import routers
import routeUsers from './route.user.js';

// Handle routers
const router = Router();

router.use('/users', routeUsers);

export default router;
