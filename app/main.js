// Import dependencies
import express from 'express';
import morgan from 'morgan';

// Import routers
import routes from './routes/routes.js';

// Init Express
const app = express();

// Handle middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

// Handle routers
app.use('/', routes);

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
const server = app.listen(port);
server.on('listening', () => {
  console.log(`Listening on ${port}`);
});
