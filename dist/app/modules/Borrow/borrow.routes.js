"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const borrow_controller_1 = require("./borrow.controller");
const borrow_validation_1 = require("./borrow.validation");
const router = (0, express_1.Router)();
// Route to create a new borrow record with validation for request data
router.post("/", (0, validateRequest_1.default)(borrow_validation_1.BorrowValidation.createBorrowValidation), borrow_controller_1.BorrowController.createBorrow);
// Route to fetch a list of overdue borrow records (borrowed for more than 14 days)
router.get("/overdue", borrow_controller_1.BorrowController.getOverdueBorrows);
exports.BorrowRoutes = router;
