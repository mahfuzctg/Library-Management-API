"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberValidation = void 0;
const zod_1 = require("zod");
const createMemberValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        }),
        email: zod_1.z.string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        }),
        phone: zod_1.z.string({
            required_error: "Phone is required",
            invalid_type_error: "Phone must be a string",
        }),
        membershipDate: zod_1.z.string({
            required_error: "Membership date is required",
            invalid_type_error: "Membership date must be a string",
        }),
    }),
});
const updateMemberValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        })
            .optional(),
        email: zod_1.z
            .string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        })
            .optional(),
        phone: zod_1.z
            .string({
            required_error: "Phone is required",
            invalid_type_error: "Phone must be a string",
        })
            .optional(),
    }),
});
exports.MemberValidation = {
    createMemberValidationSchema,
    updateMemberValidationSchema,
};
