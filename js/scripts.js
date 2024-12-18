function mostrarFormulario() {
  // Exibe o formulário para criação de novos posts
  document.getElementById("new-post-form").style.display = "block";
}

function publicarPost() {
  // Publicação decorativa
  const postContent = document.getElementById("new-post-content").value;
  if (postContent) {
    alert("Post publicado com sucesso: " + postContent);
    document.getElementById("new-post-content").value = ""; // Limpa o campo de texto
    document.getElementById("new-post-form").style.display = "none"; // Oculta o formulário
  } else {
    alert("Por favor, escreva algo para publicar.");
  }
}
