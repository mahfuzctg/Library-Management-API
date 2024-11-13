"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnValidations = void 0;
const zod_1 = require("zod");
const borrowReturnValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        borrowId: zod_1.z
            .string({ required_error: "Borrow ID is required" })
            .uuid({ message: "Borrow ID must be a valid UUID" }),
    }),
});
exports.returnValidations = {
    borrowReturnValidationSchema,
};
