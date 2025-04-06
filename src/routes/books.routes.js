import express from 'express';
import {AllBooks} from '../controllers/books.controller.js';

const router = express.Router();


router.get('/', AllBooks);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;