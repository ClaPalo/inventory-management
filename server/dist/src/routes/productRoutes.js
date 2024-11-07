"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = require("../controllers/productsController");
const router = (0, express_1.Router)();
// Everything here is at the /dashboard path
router.get("/", productsController_1.getProducts);
router.post("/", productsController_1.createProduct);
exports.default = router;
