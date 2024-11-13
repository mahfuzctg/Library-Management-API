"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
// Validation schema for creating a new book entry
// Ensures all required fields are provided with the correct data types
const createBookValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
            invalid_type_error: "Title must be a string",
        }),
        genre: zod_1.z.string({
            required_error: "Genre is required",
            invalid_type_error: "Genre must be a string",
        }),
        publishedYear: zod_1.z.number({
            required_error: "Published year is required",
            invalid_type_error: "Published year must be a number",
        }),
        totalCopies: zod_1.z.number({
            required_error: "Total copies is required",
            invalid_type_error: "Total copies must be a number",
        }),
        availableCopies: zod_1.z.number({
            required_error: "Available copies is required",
            invalid_type_error: "Available copies must be a number",
        }),
    }),
});
// Validation schema for updating an existing book entry
// Allows partial updates by making all fields optional, while maintaining type safety
const updateBookValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: "Title is required",
            invalid_type_error: "Title must be a string",
        })
            .optional(),
        genre: zod_1.z
            .string({
            required_error: "Genre is required",
            invalid_type_error: "Genre must be a string",
        })
            .optional(),
        publishedYear: zod_1.z
            .number({
            required_error: "Published year is required",
            invalid_type_error: "Published year must be a number",
        })
            .optional(),
        totalCopies: zod_1.z
            .number({
            required_error: "Total copies is required",
            invalid_type_error: "Total copies must be a number",
        })
            .optional(),
        availableCopies: zod_1.z
            .number({
            required_error: "Available copies is required",
            invalid_type_error: "Available copies must be a number",
        })
            .optional(),
    }),
});
// Export validation schemas as a single object for easy imports
exports.BookValidation = { createBookValidation, updateBookValidation };
