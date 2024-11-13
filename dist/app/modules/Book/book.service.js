"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../utils/AppError"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
// Creates a new book entry in the database
const createBookIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.create({
        data,
    });
    return result;
});
// Fetches all book entries from the database
const getAllBooksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findMany();
    return result;
});
// Retrieves a specific book by its ID; throws an error if the book is not found
const getBookByIdFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findUnique({
        where: {
            bookId,
        },
    });
    if (!result)
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Book not found");
    return result;
});
// Updates a book's information by its ID; throws an error if the book is not found
const updateBookIntoDB = (bookId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.findUnique({
        where: {
            bookId,
        },
    });
    if (!book)
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Book not found");
    const result = yield prisma_1.default.book.update({
        where: {
            bookId,
        },
        data,
    });
    return result;
});
// Deletes a book by its ID; throws an error if the book is not found
const deleteBookFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.findUnique({
        where: {
            bookId,
        },
    });
    if (!book)
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Book not found");
    const result = yield prisma_1.default.book.delete({
        where: {
            bookId,
        },
    });
    return result;
});
// Exporting all book-related service functions as a single object for easy imports
exports.BookService = {
    createBookIntoDB,
    getAllBooksFromDB,
    getBookByIdFromDB,
    updateBookIntoDB,
    deleteBookFromDB,
};
