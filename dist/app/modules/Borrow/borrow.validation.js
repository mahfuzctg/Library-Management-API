"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowValidation = void 0;
const zod_1 = require("zod");
// Validation schema for creating a borrow record
const createBorrowValidation = zod_1.z.object({
    body: zod_1.z.object({
        // Validates that bookId is a required string
        bookId: zod_1.z.string({
            required_error: "Book id is required",
            invalid_type_error: "Book id must be a string",
        }),
        // Validates that memberId is a required string
        memberId: zod_1.z.string({
            required_error: "Member id is required",
            invalid_type_error: "Member id must be a string",
        }),
    }),
});
// Export validation schema for borrow-related requests
exports.BorrowValidation = {
    createBorrowValidation,
};
