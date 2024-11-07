"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expenseController_1 = require("../controllers/expenseController");
const router = (0, express_1.Router)();
// Everything here is at the /dashboard path
router.get("/", expenseController_1.getExpensesByCategory);
exports.default = router;
