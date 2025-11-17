// config inicial
const express = require('express');

const app = express();

// forma de ler JSON / middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rota inicial
app.get('/', (req: Request, res: Response) => {
  res.json({ message: "Oi express!" });
});

// entregar uma porta
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
