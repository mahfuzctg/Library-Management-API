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
exports.BorrowService = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
// Create a new borrow record in the database
const createBorrowIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.borrowRecord.create({
        data,
    });
    return {
        borrowId: result.borrowId,
        borrowDate: result.borrowDate,
        bookId: result.bookId,
        memberId: result.memberId,
    };
});
// Retrieve a list of overdue borrows (borrowed for more than 14 days) along with book and member details
const getOverdueBorrows = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.borrowRecord.findMany({
        where: {
            borrowDate: {
                lt: new Date(new Date().setDate(new Date().getDate() - 14)), // Select records older than 14 days
            },
        },
        include: {
            book: true,
            member: true,
        },
    });
    // Calculate overdue days and format response data
    const data = result.map((borrow) => {
        const overdueDays = Math.floor((new Date().getTime() - new Date(borrow.borrowDate).getTime()) /
            (1000 * 60 * 60 * 24)) - 14;
        return {
            borrowId: borrow.borrowId,
            bookTitle: borrow.book.title,
            borrowerName: borrow.member.name,
            overdueDays,
        };
    });
    return data;
});
exports.BorrowService = {
    createBorrowIntoDB,
    getOverdueBorrows,
};
