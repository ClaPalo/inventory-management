import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardController";

const router = Router();

// Everything here is at the /dashboard path
router.get("/", getDashboardMetrics);

export default router;
