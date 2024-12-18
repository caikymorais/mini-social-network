function mostrarFormulario() {
  document.getElementById("new-post-form").style.display = "block";
}

function publicarPost() {
  const postContent = document.getElementById("new-post-content").value;
  if (postContent) {
    alert("Post publicado com sucesso: " + postContent);
    document.getElementById("new-post-content").value = ""; // Limpar o conteúdo
    document.getElementById("new-post-form").style.display = "none"; // Fechar o formulário
  } else {
    alert("Por favor, escreva algo para publicar.");
  }
}
