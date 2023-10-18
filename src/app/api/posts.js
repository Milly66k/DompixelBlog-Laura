// pages/api/posts.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      // Obtenha os dados da postagem do corpo da solicitação.
      const newPost = JSON.parse(req.body);
  
      // Aqui você pode armazenar a nova postagem onde preferir, seja em um arquivo JSON ou banco de dados.
      // Por exemplo, se você quiser armazenar em um arquivo JSON:
  
      // 1. Carregar os dados existentes de postagens do arquivo JSON.
      const posts = require('./data/posts.json');
  
      // 2. Adicionar a nova postagem à lista de postagens.
      posts.push(newPost);
  
      // 3. Salvar os dados atualizados no arquivo JSON.
      const fs = require('fs');
      fs.writeFileSync('./data/posts.json', JSON.stringify(posts, null, 2));
  
      // Responda com sucesso.
      res.status(200).json({ message: 'Postagem criada com sucesso.' });
    } else {
      res.status(405).end(); // Método não permitido.
    }
  }
  