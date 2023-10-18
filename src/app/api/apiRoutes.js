// src/pages/index.js

import { useState, useEffect } from 'react';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar postagens:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Postagens</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <img src={post.coverImage} alt={post.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
