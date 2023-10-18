// pages/CreatePostPage.js
import React, { useState } from 'react';

function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');

  const handleCreatePost = async () => {
    // Implemente o código para enviar os dados da postagem para a API falsa.
    // Use uma solicitação HTTP (por exemplo, com a função fetch) para enviar os dados.

    const newPost = {
      title,
      content,
      coverImage,
    };

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        // A postagem foi criada com sucesso.
        console.log('Postagem criada com sucesso.');
        // Redirecione para a página inicial ou faça qualquer outra ação desejada.
      } else {
        // Lidar com erros, por exemplo, exibindo uma mensagem de erro.
        console.error('Erro ao criar postagem.');
      }
    } catch (error) {
      console.error('Erro ao criar postagem:', error);
    }
  };

  return (
    <div>
      <h1>Criar Nova Postagem</h1>
      <label>Título:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Conteúdo:</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <label>Imagem de Capa (URL):</label>
      <input
        type="text"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
      />
      <button onClick={handleCreatePost}>Criar Postagem</button>
    </div>
  );
}

export default CreatePostPage;
