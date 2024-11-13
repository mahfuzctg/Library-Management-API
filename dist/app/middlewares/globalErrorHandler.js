"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler = (err, req, res, next) => {
    res.status(err.statusCode || http_status_1.default.INTERNAL_SERVER_ERROR).json({
        success: false,
        status: err.statusCode || http_status_1.default.INTERNAL_SERVER_ERROR,
        message: err.message || "Oops! Something went wrong. Please try again later.",
    });
};
exports.default = globalErrorHandler;
