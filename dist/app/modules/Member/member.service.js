"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../utils/AppError"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
// Creates a new member record in the database
const createMemberIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.create({
        data,
    });
    return result;
});
// Retrieves all member records from the database
const getAllMembersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.findMany();
    return result;
});
// Retrieves a single member by ID from the database, throws error if not found
const getMemberByIdFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.findUnique({
        where: { memberId },
    });
    if (!result)
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Member not found");
    return result;
});
// Updates an existing member's details by ID, throws error if not found
const updateMemberIntoDB = (memberId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield prisma_1.default.member.findUnique({
        where: { memberId },
    });
    if (!member)
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Member not found");
    const result = yield prisma_1.default.member.update({
        where: { memberId },
        data,
    });
    return result;
});
// Deletes a member by ID from the database, throws error if not found
const deleteMemberFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield prisma_1.default.member.findUnique({
        where: { memberId },
    });
    if (!member)
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Member not found");
    const result = yield prisma_1.default.member.delete({
        where: { memberId },
    });
    return result;
});
// Exporting all member-related service functions
exports.MemberService = {
    createMemberIntoDB,
    getAllMembersFromDB,
    getMemberByIdFromDB,
    updateMemberIntoDB,
    deleteMemberFromDB,
};
