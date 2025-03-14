<template>
  <div class="cadastro-funcionario">
    <h2>Cadastro de Funcionário</h2>
    <!-- Campos de entrada para nome, email e senha -->
    <input v-model="nome" placeholder="Nome" />
    <input v-model="email" placeholder="Email" type="email" />
    <input v-model="password" placeholder="Senha" type="password" />
    <!-- Botão para acionar o método de cadastro -->
    <button @click="cadastrar">Cadastrar</button>
    <!-- Link para voltar ao dashboard -->
    <p><router-link to="/dashboard-funcionario">Voltar ao Dashboard</router-link></p>
  </div>
</template>

<script>
// Importações necessárias do Firebase para autenticação e banco de dados
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from '@/firebase';

export default {
  data() {
    return {
      nome: '', // Armazena o nome do funcionário
      email: '', // Armazena o email do funcionário
      password: '', // Armazena a senha do funcionário
    };
  },
  methods: {
    async cadastrar() {
      // Obtém a instância de autenticação do Firebase
      const authInstance = getAuth();
      // Obtém o usuário atualmente logado
      const user = authInstance.currentUser;

      // Verifica se há um usuário logado
      if (!user) {
        alert('Você precisa estar logado para realizar esta ação.');
        this.$router.push('/login-funcionario');
        return;
      }

      // Verifica se o usuário logado é o administrador
      const userDoc = await getDoc(doc(db, 'usuarios', user.uid));
      if (!userDoc.exists() || userDoc.data().role !== 'admin') {
        alert('Apenas o administrador pode cadastrar funcionários.');
        this.$router.push('/dashboard-funcionario');
        return;
      }

      try {
        // Cria o novo funcionário no Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(authInstance, this.email, this.password);
        const newUser = userCredential.user;

        // Salva os dados do funcionário no Firestore
        await setDoc(doc(db, 'usuarios', newUser.uid), {
          nome: this.nome,
          email: this.email,
          role: 'funcionario', // Define o papel do novo usuário como 'funcionario'
        });

        alert('Funcionário cadastrado com sucesso!');
        // Redireciona para o dashboard após o cadastro
        this.$router.push('/dashboard-funcionario');
      } catch (error) {
        // Exibe uma mensagem de erro caso ocorra algum problema
        alert('Erro ao cadastrar funcionário: ' + error.message);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos para o contêiner do formulário de cadastro */
.cadastro-funcionario {
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

/* Estilos para o botão de cadastro */
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Efeito de hover no botão */
button:hover {
  background-color: #369f6e;
}

/* Estilos para o parágrafo com o link de voltar */
p {
  margin-top: 10px;
}
</style>