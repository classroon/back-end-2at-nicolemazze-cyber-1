const express = require("express");
const cors = require("cors");

const app = express();

// 🔥 CORS configurado corretamente
app.use(cors({
  origin: "*", // libera qualquer origem (ideal pra teste)
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

// 🔥 Middleware extra (garantia total)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// ✅ Rota
app.get("/mensagem", (req, res) => {
  res.json({ texto: "Olá! Esta mensagem veio do Back-End! 🚀" });
});

// 🚀 Servidor
app.listen(3000, () => {
  console.log("Servidor ligado na porta 3000");
});