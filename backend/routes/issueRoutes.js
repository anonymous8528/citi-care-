import express from "express";
import {
  createIssue,
  getMyIssues,
  getAssignedIssues,
  getAllIssues,
  updateIssueProgress,
  assignOfficer,
} from "../controllers/issueController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  authorizeRoles("citizen"),
  upload.single("file"),
  createIssue
);

router.get("/my", protect, authorizeRoles("citizen"), getMyIssues);

router.get("/assigned", protect, authorizeRoles("officer"), getAssignedIssues);

router.put(
  "/:id/progress",
  protect,
  authorizeRoles("officer"),
  updateIssueProgress
);

router.get("/", protect, authorizeRoles("admin"), getAllIssues);

router.put("/:id/assign", protect, authorizeRoles("admin"), assignOfficer);

export default router;