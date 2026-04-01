[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/rFQcdvHN)
# back-end-2at
Tarefa: Fazendo o Site Conversar com o Servidor

Nesta atividade, você vai criar um site que busca uma mensagem vinda de um servidor real.

1. Preparando o Ambiente (No Terminal)

Abra o terminal do Codespaces e digite estes dois comandos:

1.  `npm init -y`
2.  `npm install express`

----------

2. Criando o Servidor (O "Cérebro")

Crie um arquivo chamado  **`server.js`**  e cole este código simples:

javascript

```
const express = require('express');
const app = express();
const cors = require('cors'); // Permite que o HTML acesse o servidor
app.use(cors());

app.get('/mensagem', (req, res) => {
  res.json({ texto: "Olá! Esta mensagem veio do Back-End! 🚀" });
});

app.listen(3000, () => console.log("Servidor ligado na porta 3000"));

```

_(Para instalar o cors, digite no terminal:  `npm install cors`)_

----------

3. Criando a Página (O "Visual")

Crie um arquivo chamado  **`index.html`**, digite  `!`  e aperte  **Enter**. Dentro da tag  `<body>`, cole isto:

html

```
<h1>Minha Conexão Back-End</h1>
<button onclick="buscarDados()">Clique para chamar o Servidor</button>
<p id="resposta">Aguardando comando...</p>

<script>
  async function buscarDados() {
    // Busca a informação no servidor que criamos
    const resposta = await fetch('http://localhost:3000/mensagem');
    const dados = await json();
    // Exibe a mensagem na tela
    document.getElementById('resposta').innerText = dados.texto;
  }
</script>

```

Use o código com cuidado.

----------

4. Como Testar (Importante!)

1.  No terminal, ligue o servidor:  **`node server.js`**.
2.  O Codespaces vai mostrar um aviso de porta 3000 aberta.  **Pode fechar esse aviso.**
3.  Agora, use o  **Live Server**  (como você aprendeu antes) para abrir o seu  `index.html`.
4.  Clique no botão na página e veja a mágica: o HTML vai buscar o texto dentro do seu código Node!

----------

5. Salvando tudo (Commit)

1.  Clique no ícone de  **Source Control**  (menu lateral).
2.  Escreva a mensagem:  `Tarefa: Conectando Front e Back`.
3.  Clique em  **Commit**  e depois em  **Sync Changes**.

----------

**Dica para os alunos:**  O  `fetch`  no HTML funciona como um "mensageiro" que vai até o servidor buscar a resposta para nós.
