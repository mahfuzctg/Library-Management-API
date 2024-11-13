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
exports.ReturnService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../utils/AppError"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
// return book
const returnBook = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    const borrow = yield prisma_1.default.borrowRecord.findUnique({
        where: {
            borrowId,
        },
    });
    if (!borrow) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Book not found");
    }
    if (borrow.returnDate) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Book already returned");
    }
    const result = yield prisma_1.default.borrowRecord.update({
        where: {
            borrowId,
        },
        data: {
            returnDate: new Date(),
        },
    });
    return result;
});
exports.ReturnService = {
    returnBook,
};
