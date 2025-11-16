import { Schema, model } from "mongoose";
import { IAluno } from "../interfaces/IAluno";

const AlunoSchema = new Schema<IAluno>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  ra: { type: String, required: true, unique: true },
  cpf: { type: String, required: true, unique: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true }
});

export const AlunoModel = model<IAluno>("Aluno", AlunoSchema);