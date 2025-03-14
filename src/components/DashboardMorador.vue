<template>
  <div>
    <!-- Header do Morador -->
    <HeaderMorador />

    <div class="dashboard">
      <!-- Mensagem de boas-vindas com o nome do morador -->
      <h2 v-if="morador">Seja bem-vindo, {{ morador.nome }}!</h2>

      <!-- Mensagem de carregamento enquanto os dados são buscados -->
      <div v-if="loading" class="loading">
        <p>Carregando dados do morador...</p>
      </div>

      <!-- Exibe os dados do morador se estiverem disponíveis -->
      <div v-else-if="morador" class="dados-container">
        <div class="info">
          <p><strong>Email:</strong> {{ morador.email }}</p>
          <p><strong>Endereço:</strong> {{ morador.endereco }}</p>
          <p><strong>CPF:</strong> {{ morador.cpf }}</p>
          <p><strong>RG:</strong> {{ morador.rg }}</p>
          <p><strong>Data de Nascimento:</strong> {{ morador.dataNascimento }}</p>
        </div>

        <!-- Componente de Entregas, passando o nome do morador como prop -->
        <ListaEntregas :nomeCompleto="morador.nome" />
      </div>

      <!-- Mensagem de erro caso os dados não possam ser carregados -->
      <div v-else class="erro">
        <p>Não foi possível carregar os dados do morador.</p>
      </div>
    </div>
  </div>
</template>

<script>
// Importações necessárias do Firebase para autenticação e Firestore
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

// Importação dos componentes utilizados
import ListaEntregas from "@/components/ListaEntregas.vue"; // Componente para listar entregas
import HeaderMorador from "@/components/HeaderMorador.vue"; // Componente do cabeçalho do morador

export default {
  components: { 
    ListaEntregas, 
    HeaderMorador,
  }, // Registra os componentes utilizados no template
  data() {
    return {
      morador: null, // Armazena os dados do morador
      loading: true, // Controla o estado de carregamento
    };
  },
  async created() {
    try {
      const authInstance = getAuth(); // Obtém a instância de autenticação do Firebase
      const user = authInstance.currentUser; // Obtém o usuário atualmente logado

      if (user) {
        // Busca os dados do morador no Firestore
        const moradorDoc = await getDoc(doc(db, "usuarios", user.uid));
        if (moradorDoc.exists()) {
          // Combina o ID do usuário com os dados do morador
          this.morador = { id: user.uid, ...moradorDoc.data() };
        } else {
          console.warn("Dados do morador não encontrados.");
        }
      } else {
        console.warn("Usuário não autenticado.");
      }
    } catch (error) {
      console.error("Erro ao acessar o Firestore:", error.message);
    } finally {
      this.loading = false; // Finaliza o carregamento, independentemente do resultado
    }
  },
};
</script>

<style scoped>
/* Estilos para o contêiner do dashboard */
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #f9f9f9;
  min-height: 100vh;
}

/* Estilos para o título de boas-vindas */
h2 {
  font-size: 1.8rem;
  color: #0074d9;
  margin-bottom: 15px;
}

/* Estilos para o contêiner de dados do morador */
.dados-container {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
}

/* Estilos para os parágrafos de informações */
.info p {
  margin: 10px 0;
  font-size: 1.1rem;
  color: #333;
}

/* Estilos para textos em negrito */
strong {
  color: #0074d9;
}

/* Estilos para mensagens de carregamento e erro */
.loading,
.erro {
  font-size: 1.1rem;
  color: #555;
}
</style>