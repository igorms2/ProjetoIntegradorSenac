<template>
    <!-- Barra de navegação -->
    <nav>
      <!-- Link para a página inicial -->
      <router-link to="/">Home</router-link>
      <!-- Link para o dashboard do morador -->
      <router-link to="/dashboard-morador">Dashboard Morador</router-link>
      <!-- Link para a página de gerar cartão -->
      <router-link to="/gerar-cartao">Gerar Cartão</router-link>
      <!-- Botão para fazer logout -->
      <button @click="logout">Logout</button>
    </nav>
  </template>
  
  <script>
  // Importação do módulo de autenticação do Firebase
  import { auth } from '@/firebase';
  
  export default {
    methods: {
      // Método para fazer logout
      async logout() {
        try {
          await auth.signOut(); // Faz logout do usuário
          this.$router.push('/'); // Redireciona para a página inicial
        } catch (error) {
          alert('Erro ao fazer logout: ' + error.message); // Exibe uma mensagem de erro em caso de falha
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para a barra de navegação */
  nav {
    padding: 20px;
    background-color: #42b983; /* Cor de fundo da barra de navegação */
  }
  
  /* Estilos para os links da barra de navegação */
  nav a {
    color: white; /* Cor do texto dos links */
    margin: 0 10px; /* Espaçamento entre os links */
    text-decoration: none; /* Remove o sublinhado dos links */
  }
  
  /* Estilos para o link ativo (página atual) */
  nav a.router-link-exact-active {
    font-weight: bold; /* Destaca o link da página atual */
  }
  
  /* Estilos para o botão de logout */
  button {
    padding: 5px 10px;
    background-color: #ff4d4d; /* Cor de fundo do botão */
    color: white; /* Cor do texto do botão */
    border: none;
    border-radius: 5px; /* Bordas arredondadas */
    cursor: pointer; /* Cursor de ponteiro ao passar o mouse */
  }
  
  /* Efeito de hover no botão de logout */
  button:hover {
    background-color: #cc0000; /* Cor de fundo ao passar o mouse */
  }
  </style>