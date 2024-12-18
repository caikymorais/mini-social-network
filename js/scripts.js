// Função para exibir o formulário de criação de novos posts
function mostrarFormulario() {
  const form = document.getElementById("new-post-form");
  form.style.display = "block"; // Exibe o formulário
}

// Função para publicar um novo post
function publicarPost() {
  const postContent = document.getElementById("new-post-content").value.trim();

  if (postContent) {
    // Cria um novo post dinamicamente
    const feed = document.getElementById("feed");
    const newPost = document.createElement("div");
    newPost.className = "post";

    newPost.innerHTML = `
      <div class="post-header">
        <span class="post-author">@usuarioNovo</span>
        <span class="post-date">${new Date().toLocaleDateString()}</span>
      </div>
      <div class="post-content">${postContent}</div>
      <button class="like-button">Curtir (0)</button>
    `;

    feed.insertBefore(newPost, document.getElementById("new-post-form"));

    // Limpa e oculta o formulário
    document.getElementById("new-post-content").value = "";
    document.getElementById("new-post-form").style.display = "none";
    alert("Post publicado com sucesso!");
  } else {
    alert("Por favor, escreva algo para publicar.");
  }
}

// Função para simular a página de perfil
function exibirPerfil() {
  alert("Esta é uma página fictícia de perfil.");
}
