import { Router } from "express";
import { createProduct, getProducts } from "../controllers/productsController";

const router = Router();

// Everything here is at the /dashboard path
router.get("/", getProducts);
router.post("/", createProduct);

export default router;
