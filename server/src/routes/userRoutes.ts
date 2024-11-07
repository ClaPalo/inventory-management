import { Router } from "express";
import { getUsers } from "../controllers/userController";

const router = Router();

// Everything here is at the /dashboard path
router.get("/", getUsers);

export default router;
