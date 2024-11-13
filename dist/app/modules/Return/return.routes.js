"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRoutes = void 0;
const express_1 = require("express");
const return_controller_1 = require("./return.controller");
const router = (0, express_1.Router)();
router.post("/", return_controller_1.ReturnController.returnBook);
exports.ReturnRoutes = router;
