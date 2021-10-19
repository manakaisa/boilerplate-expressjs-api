// Import dependencies
import express from 'express';

// Import routers
import routeIndex from './routes/route.index.js';

// Init Express
const app = express();

// Handle middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handle routers
app.use('/', routeIndex);

// Handle errors
// 404
app.use((req, res, next) => {
  res.status(404).json('Not Found');
});
// 500
app.use((err, req, res, next) => {
  res.status(500).json(req.app.get('env') === 'development' ? err.message : '');
});

// Start server
const port = process.env.PORT || '3000';
const server = app.listen(global.port);
server.on('listening', () => {
  console.log(`Listening on ${port}`);
});
