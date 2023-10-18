// src/api/routes.js

const posts = [
    {
      id: 1,
      title: 'Primeira Postagem',
      content: 'Conteúdo da primeira postagem.',
      coverImage: 'https://example.com/cover1.jpg',
      date: '2023-10-20',
    },
    {
      id: 2,
      title: 'Segunda Postagem',
      content: 'Conteúdo da segunda postagem.',
      coverImage: 'https://example.com/cover2.jpg',
      date: '2023-10-21',
    },
  ];
  
  export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(posts);
    } else if (req.method === 'POST') {
      const { title, content, coverImage } = req.body;
      const newPost = {
        id: posts.length + 1,
        title,
        content,
        coverImage,
        date: new Date().toISOString(),
      };
      posts.push(newPost);
      res.status(201).json(newPost);
    } else {
      res.status(405).end();
    }
  }
  