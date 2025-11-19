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

  // Listar todos
  getAll: async (req: Request, res: Response) => {
    try {
      const alunos = await AlunoModel.find();
      return res.status(200).json(alunos);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
};