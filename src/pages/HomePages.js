// pages/HomePage.js

import Link from 'next/link';
import { useState, useEffect } from 'react';



function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/data/posts.json') // Certifique-se de ajustar o caminho de acordo com a estrutura do seu projeto.
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
            <h2>
              <Link href={`/post/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </h2>
            <p>{post.content}</p>
            <img src={post.coverImage} alt={post.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}




export default HomePage;
