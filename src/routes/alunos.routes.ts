import { Router } from "express";
import { AlunoController } from "../controllers/AlunosController";

const router = Router();

router.post("/", AlunoController.create);
router.get("/", AlunoController.getAll);
router.get("/:id", AlunoController.getById);
router.put("/:id", AlunoController.update);

export default router;