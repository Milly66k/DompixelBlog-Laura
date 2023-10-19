import { useState, useEffect } from 'react';

const postsData = [
  // Seus dados fictícios de postagens
];

function PostList() {
  const [postagens, setPostagens] = useState([]);

  useEffect(() => {
    // Simulando a busca de postagens de uma API falsa
    setPostagens(postsData);
  }, []);

  return (
    <div>
      <h2>Lista de Postagens</h2>
      <ul>
        {postagens.map((postagem) => (
          <li key={postagem.id}>
            <h3>{postagem.title}</h3>
            <p>{postagem.content}</p>
            <img src={postagem.coverImage} alt={postagem.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
