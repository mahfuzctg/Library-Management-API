"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const member_controller_1 = require("./member.controller");
const member_validation_1 = require("./member.validation");
const router = (0, express_1.Router)();
// Route to create a new member, with validation middleware
router.post("/", (0, validateRequest_1.default)(member_validation_1.MemberValidation.createMemberValidationSchema), member_controller_1.MemberController.createMember);
// Route to retrieve all members
router.get("/", member_controller_1.MemberController.getAllMembers);
// Route to retrieve a specific member by ID
router.get("/:memberId", member_controller_1.MemberController.getMemberById);
// Route to update an existing member by ID, with validation middleware
router.put("/:memberId", (0, validateRequest_1.default)(member_validation_1.MemberValidation.updateMemberValidationSchema), member_controller_1.MemberController.updateMember);
// Route to delete a member by ID
router.delete("/:memberId", member_controller_1.MemberController.deleteMember);
// Exporting the member routes
exports.MemberRoutes = router;
