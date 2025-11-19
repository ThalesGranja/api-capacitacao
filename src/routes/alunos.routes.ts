import { Router } from "express";
import { AlunoController } from "../controllers/AlunosController";

const router = Router();

router.post("/", AlunoController.create);
router.get("/", AlunoController.getAll);

export default router;