const express = require("express");
const app = express();
const cors = require("cors"); // Permite que o HTML acesse o servidor
app.use(cors());

app.get("/mensagem", (req, res) => {
  res.json({ texto: "Olá! Esta mensagem veio do Back-End! 🚀" });
});

app.listen(3000, () => console.log("Servidor ligado na porta 3000"));
