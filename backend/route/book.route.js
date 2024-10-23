const express = require('express');
const { getBook } = require('../controller/book.controller'); // Destructure the getBook function

const router = express.Router();

router.get('/', getBook);

module.exports = router;
