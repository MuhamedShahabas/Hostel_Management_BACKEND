"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const chiefWarden_1 = require("../../repositories/chiefWarden");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const JSON_formattor_1 = require("../../utils/JSON-formattor");
const tokenManager_1 = require("../../utils/tokenManager");
const chiefWarden = new chiefWarden_1.ChiefWardenRepo();
exports.login = (0, express_async_handler_1.default)(async (req, res) => {
    const { email, password } = req.body;
    const userData = await chiefWarden.login(email, password);
    res.json({ ...(0, JSON_formattor_1.dataFormattor)(userData), token: (0, tokenManager_1.signToken)(userData.password) });
});
