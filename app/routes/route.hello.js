// Import dependencies
import { Router } from 'express';
import controlHello from '../controllers/controller.hello.js';

// Handle routers
const router = Router();

router.get('/', (req, res) => {
  res.json(controlHello.hello());
});

export default router;
