import { prisma } from '../db.js';

export const AllBooks = async (req, res) => {
    try {
        const books = await prisma.books.findMany();
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching books" });
    }
}

export const createBook = async (req, res) => {
    const { title, author, year } = req.body;

    try {
        const newBook = await prisma.books.create({
            data: { title, author, year }
        });
        res.status(201).json(newBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error creating book" });
    }
}

export const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, year } = req.body;

    try {
        const book = await prisma.books.update({
            where: { id: parseInt(id) },
            data: { title, author, year }
        });
        res.json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error updating book" });
    }
}

export const deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.books.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error deleting book" });
    }
}