// Import dependencies
import { Router } from 'express';

// Handle routers
const router = Router();

router.get('/', (req, res) => {
  res.json('Hello Users');
});

export default router;
