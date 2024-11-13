import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ReturnService } from "./return.service";

const returnBook = catchAsync(async (req: Request, res: Response) => {
  const { borrowId } = req.body;
  const result = await ReturnService.returnBook(borrowId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Book returned successfully",
  });
});

export const ReturnController = {
  returnBook,
};
