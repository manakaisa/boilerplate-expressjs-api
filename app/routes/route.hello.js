// Import dependencies
import { Router } from 'express';
import HelloController from '../controllers/controller.hello.js';

// Handle controllers
const controlHello = new HelloController();

// Handle routers
const router = Router();

router.get('/', (req, res) => {
  res.json(controlHello.message());
});

export default router;
