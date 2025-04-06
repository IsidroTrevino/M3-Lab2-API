import express from 'express';
import bookRoutes from './routes/books.routes.js';

const app = express();

app.use(express.json());

app.use('/api/books', bookRoutes)

app.listen(3000);

console.log(`Server is running on http://localhost:3000`);