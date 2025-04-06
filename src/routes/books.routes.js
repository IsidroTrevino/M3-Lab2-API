import express from 'express';
import {AllBooks} from '../controllers/books.controller.js';

const router = express.Router();


router.get('/', AllBooks);

export default router;