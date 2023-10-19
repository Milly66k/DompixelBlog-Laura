// pages/create.js

import { useState } from 'react';

function CreatePost() {
  const [post, setPost] = useState({
    title: '',
    content: '',
    coverImage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode enviar os dados da postagem para a sua API falsa ou fonte de dados
    console.log('Dados da postagem enviados:', post);

    // Redirecionar o usuário para a página de detalhes da postagem ou outra ação apropriada
  };

  return (
    <div>
      <h1>Criar Nova Postagem</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={handleChange}
        />

        <label htmlFor="content">Conteúdo</label>
        <textarea
          id="content"
          name="content"
          value={post.content}
          onChange={handleChange}
        />

        <label htmlFor="coverImage">Imagem de Capa</label>
        <input
          type="text"
          id="coverImage"
          name="coverImage"
          value={post.coverImage}
          onChange={handleChange}
        />

        <button type="submit">Criar Postagem</button>
      </form>
    </div>
  );
}

export default CreatePost;
