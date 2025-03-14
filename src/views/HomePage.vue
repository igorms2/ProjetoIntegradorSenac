<template>
  <div class="home">
    <!-- Imagem de boas-vindas -->
    <img
      src="@/assets/images/logo_porta_f_cil_bonito_e_moderno_nas-removebg-preview.png"
      alt="Logo do Sistema de Condomínio"
      class="welcome-image"
    />
    <!-- Exibe a imagem de boas-vindas com um estilo arredondado e sombra. -->

    <!-- Título de boas-vindas -->
    <h1>Bem-vindo ao Sistema de Condomínio</h1>
    <!-- Título principal da página. -->

    <!-- Links de navegação -->
    <div class="actions">
      <!-- Botão para entrar como morador -->
      <router-link to="/login" class="btn morador-btn" aria-label="Entrar como Morador">
        <span>👤</span> Entrar como Morador
      </router-link>
      <!-- Botão para cadastrar-se -->
      <router-link to="/cadastro" class="btn cadastro-btn" aria-label="Cadastrar-se">
        <span>📝</span> Cadastrar-se
      </router-link>
      <!-- Botão para entrar como funcionário -->
      <router-link to="/loginfuncionario" class="btn funcionario-btn" aria-label="Entrar como Funcionário">
        <span>👷</span> Entrar como Funcionário
      </router-link>
    </div>
    <!-- Contêiner para os botões de navegação, com espaçamento entre eles. -->
  </div>
</template>

<script>
export default {
  name: 'HomePage', // Nome do componente
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ocupa 100% da altura da tela */
  background-color: #f5f5f5; /* Cor de fundo */
  padding: 20px; /* Espaçamento interno */
  text-align: center; /* Centraliza o texto */
}

.welcome-image {
  width: 200px; /* Largura da imagem */
  height: auto; /* Altura automática para manter a proporção */
  margin-bottom: 20px; /* Espaçamento abaixo da imagem */
  border-radius: 50%; /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

h1 {
  margin-bottom: 20px; /* Espaçamento abaixo do título */
  font-size: 2rem; /* Tamanho da fonte */
  color: #333; /* Cor do texto */
}

.actions {
  display: flex;
  flex-direction: column; /* Botões em coluna */
  gap: 10px; /* Espaçamento entre os botões */
}

.btn {
  padding: 10px 20px; /* Espaçamento interno */
  text-decoration: none; /* Remove sublinhado */
  border-radius: 5px; /* Bordas arredondadas */
  transition: background-color 0.3s; /* Transição suave de cor */
  font-weight: bold; /* Texto em negrito */
  text-align: center; /* Centraliza o texto */
  display: flex;
  align-items: center; /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
  gap: 10px; /* Espaço entre ícone e texto */
}

.morador-btn {
  background-color: #ff7f50; /* Cor laranja */
  color: white; /* Texto branco */
}

.morador-btn:hover {
  background-color: #cc6640; /* Cor laranja mais escura ao passar o mouse */
}

.cadastro-btn {
  background-color: #6a5acd; /* Cor roxa */
  color: white; /* Texto branco */
}

.cadastro-btn:hover {
  background-color: #5c40d6; /* Cor roxa mais escura ao passar o mouse */
}

.funcionario-btn {
  background-color: #4caf50; /* Cor verde */
  color: white; /* Texto branco */
}

.funcionario-btn:hover {
  background-color: #388e3c; /* Cor verde mais escura ao passar o mouse */
}

/* Responsividade */
@media (max-width: 600px) {
  h1 {
    font-size: 1.5rem; /* Reduz o tamanho da fonte em telas pequenas */
  }

  .btn {
    padding: 8px 16px; /* Reduz o espaçamento interno em telas pequenas */
    font-size: 0.9rem; /* Reduz o tamanho da fonte em telas pequenas */
  }

  .welcome-image {
    width: 150px; /* Reduz o tamanho da imagem em telas pequenas */
  }
}
</style>