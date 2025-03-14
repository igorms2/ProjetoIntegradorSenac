<template>
  <div class="login">
    <h2>Login</h2>
    <!-- Campo de entrada para o email -->
    <input v-model="email" placeholder="Email" type="email" />
    <!-- Campo de entrada para a senha -->
    <input v-model="password" placeholder="Senha" type="password" />
    <!-- Botão para realizar o login -->
    <button @click="login">Entrar</button>
    <!-- Link para voltar à página inicial -->
    <p><router-link to="/">Voltar à Página Inicial</router-link></p>
  </div>
</template>

<script>
// Importações necessárias do Firebase para autenticação e Firestore
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/firebase';

export default {
  data() {
    return {
      email: '', // Armazena o email do usuário
      password: '', // Armazena a senha do usuário
    };
  },
  methods: {
    async login() {
      const authInstance = getAuth(); // Obtém a instância de autenticação do Firebase
      try {
        // Autentica o usuário com email e senha
        const userCredential = await signInWithEmailAndPassword(authInstance, this.email, this.password);
        const user = userCredential.user; // Obtém o usuário autenticado

        // Acessa o Firestore para obter os dados do usuário
        const userDoc = await getDoc(doc(db, 'usuarios', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data(); // Obtém os dados do usuário

          alert('Login realizado com sucesso!');
          this.$updateAbility(userData.role); // Atualiza as permissões do usuário

          // Redireciona com base no papel (role) do usuário
          if (userData.role === 'morador') {
            this.$router.push('/dashboard-morador'); // Redireciona para o dashboard do morador
          } else {
            this.$router.push('/'); // Redireciona para a página inicial
          }
        } else {
          alert('Dados do usuário não encontrados. Por favor, faça o cadastro novamente.');
          await signOut(authInstance); // Desloga o usuário
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);

        // Exibe mensagens de erro detalhadas com base no código de erro
        switch (error.code) {
          case 'auth/user-not-found':
            alert('Usuário não encontrado. Verifique o email e tente novamente.');
            break;
          case 'auth/wrong-password':
            alert('Senha incorreta. Tente novamente.');
            break;
          case 'auth/invalid-email':
            alert('Email inválido. Verifique o email e tente novamente.');
            break;
          default:
            alert('Erro ao fazer login: ' + error.message);
            break;
        }
      }
    },
  },
};
</script>

<style scoped>
/* Estilos para o contêiner do formulário de login */
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
}

/* Estilos para os campos de entrada */
input {
  padding: 10px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Estilos para o botão de login */
button {
  padding: 10px 20px;
  background-color: #ff7f50; /* Cor de fundo do botão */
  color: white; /* Cor do texto do botão */
  border: none;
  border-radius: 5px;
  cursor: pointer; /* Cursor de ponteiro ao passar o mouse */
}

/* Efeito de hover no botão de login */
button:hover {
  background-color: #cc6640; /* Cor de fundo ao passar o mouse */
}

/* Estilos para o parágrafo com o link de voltar */
p {
  margin-top: 10px;
}
</style>