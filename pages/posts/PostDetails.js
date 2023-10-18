function PostDetails({ post }) {
  if (!post) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <img src={post.coverImage} alt={post.title} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const postId = params.id; // Obtenha o ID da postagem da URL

  // Substitua esta parte com a lógica real para buscar os detalhes da postagem com base no ID
  const postDetails = buscarDetalhesDaPostagemPorID(postId);

  return {
    props: {
      post: postDetails,
    },
  };
}

export default PostDetails;

