import { Router } from "express";
import { getExpensesByCategory } from "../controllers/expenseController";

const router = Router();

// Everything here is at the /dashboard path
router.get("/", getExpensesByCategory);

export default router;
