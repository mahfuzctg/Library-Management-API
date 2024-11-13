"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, jsonData) => {
    res.status(jsonData.statusCode).json({
        success: jsonData.success,
        status: jsonData.statusCode,
        message: jsonData.message,
        data: jsonData.data || null || undefined,
    });
};
exports.default = sendResponse;
