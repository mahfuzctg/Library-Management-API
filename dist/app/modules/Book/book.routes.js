"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_controller_1 = require("./book.controller");
const book_validation_1 = require("./book.validation");
const router = (0, express_1.Router)();
// Create a new book with validation
router.post("/", (0, validateRequest_1.default)(book_validation_1.BookValidation.createBookValidation), book_controller_1.BookController.createBook);
// Get all books
router.get("/", book_controller_1.BookController.getAllBooks);
// Get a book by ID
router.get("/:bookId", book_controller_1.BookController.getBookById);
// Update a book by ID with validation
router.put("/:bookId", (0, validateRequest_1.default)(book_validation_1.BookValidation.updateBookValidation), book_controller_1.BookController.updateBook);
// Delete a book by ID
router.delete("/:bookId", book_controller_1.BookController.deleteBook);
// Export book-related routes
exports.BookRoutes = router;
