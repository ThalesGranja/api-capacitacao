// config inicial
import 'dotenv/config';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();

// forma de ler JSON / middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rota inicial
app.get('/', (req: Request, res: Response) => {
  res.json({ message: "Oi express!" });
});

// conexão banco de dados
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicapacitacao.atwawcc.mongodb.net/?appName=APICapacitacao`)
  .then(() => {
    // entregar uma porta
    console.log('Conectamos ao MongoDB!')
    const PORT = 3000;

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err))