import express from "express";
import { getAllUsers, changeUserRole } from "../controllers/userController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, authorizeRoles("admin"), getAllUsers);
router.put("/:id/role", protect, authorizeRoles("admin"), changeUserRole);

export default router;