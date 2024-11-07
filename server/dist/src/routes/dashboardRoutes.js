"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardController_1 = require("../controllers/dashboardController");
const router = (0, express_1.Router)();
// Everything here is at the /dashboard path
router.get("/", dashboardController_1.getDashboardMetrics);
exports.default = router;
