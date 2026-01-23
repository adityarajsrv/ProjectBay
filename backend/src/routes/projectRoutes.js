import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import {
  createProject,
  getMyProjects,
  getProjectById,
} from "../controllers/projectController.js";
import { requireProjectRole } from "../middlewares/projectRBAC.js";

const router = express.Router();

router.post("/", protect, createProject);
router.get("/", protect, getMyProjects)

router.get(
    "/:projectId",
    protect,
    requireProjectRole([]),
    getProjectById
)

export default router;