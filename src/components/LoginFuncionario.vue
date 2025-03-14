<template>
  <div class="login-funcionario">
    <h2>Login do Funcionário</h2>
    <!-- Formulário de login com evento submit que chama o método 'login' -->
    <form @submit.prevent="login">
      <div>
        <label for="username">Usuário:</label>
        <!-- Campo de entrada para o nome de usuário, vinculado à variável 'username' -->
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Digite o usuário"
          required
        />
      </div>
      <div>
        <label for="password">Senha:</label>
        <!-- Campo de entrada para a senha, vinculado à variável 'password' -->
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Digite a senha"
          required
        />
      </div>
      <!-- Botão de submissão do formulário -->
      <button type="submit">Entrar</button>
      <!-- Exibe uma mensagem de erro se a variável 'error' não estiver vazia -->
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
// Importa as funções necessárias do Firebase para autenticação
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: 'LoginFuncionario',
  data() {
    return {
      username: '', // Armazena o nome de usuário digitado
      password: '', // Armazena a senha digitada
      error: '', // Armazena mensagens de erro
    };
  },
  methods: {
    async login() {
      const auth = getAuth(); // Obtém a instância de autenticação do Firebase

      try {
        // Tenta autenticar o usuário com o email e senha fornecidos
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.username,
          this.password
        );

        // Verifica se o email do usuário autenticado é o do admin
        if (userCredential.user.email === 'admin@mail.com') {
          this.error = ''; // Limpa a mensagem de erro
          localStorage.setItem('isFuncionario', 'true'); // Armazena no localStorage que o usuário é um funcionário
          this.$router.push('/dashboardfuncionario'); // Redireciona para o dashboard do funcionário
        } else {
          // Se o email não for o do admin, exibe uma mensagem de erro
          this.error = 'Acesso permitido apenas para administradores.';
        }
      } catch (error) {
        // Captura e trata erros de autenticação
        console.error('Erro ao fazer login:', error);
        this.error = 'Usuário ou senha incorretos.'; // Exibe uma mensagem de erro genérica
      }
    },
  },
};
</script>

<style scoped>
/* Estilos para o container do formulário de login */
.login-funcionario {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

/* Estilos para o título do formulário */
h2 {
  text-align: center;
  margin-bottom: 20px;
}

/* Estilos para cada div do formulário */
form div {
  margin-bottom: 15px;
}

/* Estilos para os labels dos campos de entrada */
label {
  display: block;
  margin-bottom: 5px;
}

/* Estilos para os campos de entrada */
input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

/* Estilos para o botão de submissão */
button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Efeito de hover no botão */
button:hover {
  background-color: #45a049;
}

/* Estilos para a mensagem de erro */
.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>