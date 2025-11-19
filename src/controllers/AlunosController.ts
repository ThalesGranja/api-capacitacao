import { Request, Response } from "express";
import dayjs from "dayjs";
import { AlunoModel } from "../models/Aluno";

export const AlunoController = {
  // criar aluno
  create: async (req: Request, res: Response) => {
    try {
      const { name, age, ra, cpf } = req.body;

      const createdAt = dayjs().toDate();
      const updatedAt = createdAt;

      const aluno = await AlunoModel.create({
        name,
        age,
        ra,
        cpf,
        createdAt,
        updatedAt
      });

      return res.status(201).json(aluno);
    } catch (error) {
      return res.status(500).json({ error });
    }
  },

  // listar todos
  getAll: async (req: Request, res: Response) => {
    try {
      const alunos = await AlunoModel.find();
      return res.status(200).json(alunos);
    } catch (error) {
      return res.status(500).json({ error });
    }
  },

  // buscar por id
  getById: async (req: Request<{ id: string }>, res: Response) => {
    try {
      const { id } = req.params;

      const aluno = await AlunoModel.findById(id);
      if (!aluno) return res.status(404).json({ message: "Aluno não encontrado" });

      return res.status(200).json(aluno);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
};