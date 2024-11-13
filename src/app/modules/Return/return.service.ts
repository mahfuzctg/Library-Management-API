import httpStatus from "http-status";
import AppError from "../../utils/AppError";
import prisma from "../../utils/prisma";

// return book
const returnBook = async (borrowId: string) => {
  const borrow = await prisma.borrowRecord.findUnique({
    where: {
      borrowId,
    },
  });

  if (!borrow) {
    throw new AppError(httpStatus.NOT_FOUND, "Book not found");
  }

  if (borrow.returnDate) {
    throw new AppError(httpStatus.BAD_REQUEST, "Book already returned");
  }

  const result = await prisma.borrowRecord.update({
    where: {
      borrowId,
    },
    data: {
      returnDate: new Date(),
    },
  });
  return result;
};

export const ReturnService = {
  returnBook,
};
