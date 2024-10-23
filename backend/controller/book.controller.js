const Book = require('../model/book.model');

const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json(error);
    }
};

// Export using CommonJS
module.exports = { getBook };
