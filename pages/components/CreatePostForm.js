import React from 'react';
import { Input, Textarea, Button } from '@mantine/core';

function CreatePostForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const titulo = event.target.titulo.value;
    const conteudo = event.target.conteudo.value;
    const imagemCapa = event.target.imagemCapa.files[0];

    // Aqui você pode lidar com o envio dos dados para a sua API falsa
    // E fazer qualquer outra lógica necessária

    console.log('Dados da postagem:', titulo, conteudo, imagemCapa);

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('conteudo', conteudo);
    formData.append('imagemCapa', imagemCapa);

    fetch('/api/posts', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Resposta da API:', data);
      })
      .catch((error) => {
        console.error('Erro ao enviar postagem:', error);
      });
  }

  return (
    <div>
      <h1>Criação de Postagens</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Título" placeholder="Insira o título" name="titulo" required />
        <Textarea label="Conteúdo" placeholder="Escreva o conteúdo" name="conteudo" required rows={4} />
        <Input label="Imagem de Capa" type="file" name="imagemCapa" accept="image/*" />
        <Button type="submit">Criar Postagem</Button>
      </form>
    </div>
  );
}

export default CreatePostForm;
