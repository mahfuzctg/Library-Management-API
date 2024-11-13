import { z } from "zod";

const borrowReturnValidationSchema = z.object({
  body: z.object({
    borrowId: z
      .string({ required_error: "Borrow ID is required" })
      .uuid({ message: "Borrow ID must be a valid UUID" }),
  }),
});

export const returnValidations = {
  borrowReturnValidationSchema,
};
