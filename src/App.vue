<template>
  <div id="app">
    <!-- Renderiza as páginas -->
    <router-view />
    <!-- O componente `router-view` é onde as páginas são renderizadas com base na rota atual. -->
  </div>
</template>

<script>
import { auth } from '@/firebase'; // Importa a instância de autenticação do Firebase

export default {
  data() {
    return {
      isAuthenticated: false, // Indica se o usuário está autenticado
      isMorador: false, // Indica se o usuário é um morador
      isFuncionario: false, // Indica se o usuário é um funcionário
    };
  },
  computed: {
    // Computed property para determinar se a navbar deve ser exibida
    showNavbar() {
      // Mostra a navbar apenas nas páginas que não são Home, Login ou Cadastro
      return (
        this.$route.path !== '/' &&
        this.$route.path !== '/login' &&
        this.$route.path !== '/cadastro'
      );
    },
  },
  created() {
    // Verifica o estado de autenticação quando o componente é criado
    auth.onAuthStateChanged((user) => {
      if (user) {
        // Se o usuário estiver autenticado
        this.isAuthenticated = true;
        // Verifica se o usuário é um morador ou funcionário com base no email
        this.isMorador = !user.email.endsWith('@condominio.com');
        this.isFuncionario = user.email.endsWith('@condominio.com');
      } else {
        // Se o usuário não estiver autenticado
        this.isAuthenticated = false;
        this.isMorador = false;
        this.isFuncionario = false;
      }
    });
  },
  methods: {
    // Método para fazer logout
    async logout() {
      try {
        await auth.signOut(); // Faz logout no Firebase
        this.$router.push('/'); // Redireciona para a página inicial
      } catch (error) {
        alert('Erro ao fazer logout: ' + error.message); // Exibe mensagem de erro
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; /* Define a fonte padrão */
  -webkit-font-smoothing: antialiased; /* Suaviza a fonte no Chrome e Safari */
  -moz-osx-font-smoothing: grayscale; /* Suaviza a fonte no Firefox */
  text-align: center; /* Centraliza o texto */
  color: #2c3e50; /* Define a cor do texto */
}

nav {
  padding: 20px; /* Espaçamento interno */
  background-color: #42b983; /* Cor de fundo da navbar */
}

nav a {
  color: white; /* Cor do texto dos links */
  margin: 0 10px; /* Espaçamento entre os links */
  text-decoration: none; /* Remove sublinhado dos links */
}

nav a.router-link-exact-active {
  font-weight: bold; /* Destaca o link da rota ativa */
}

button {
  padding: 5px 10px; /* Espaçamento interno */
  background-color: #ff4d4d; /* Cor de fundo do botão */
  color: white; /* Cor do texto do botão */
  border: none; /* Remove borda */
  border-radius: 5px; /* Bordas arredondadas */
  cursor: pointer; /* Muda o cursor para pointer */
}

button:hover {
  background-color: #cc0000; /* Cor de fundo do botão ao passar o mouse */
}
</style>