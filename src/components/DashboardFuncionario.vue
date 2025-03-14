<template>
  <div>
    <!-- Header do Funcionário -->
    <HeaderFuncionario />

    <div class="dashboard">
      <h2>Dashboard Funcionário</h2>

      <!-- Componente de Entrada de Encomendas -->
      <EntradaEncomendas @entrega-adicionada="carregarEntregas" />

      <!-- Lista de entregas -->
      <h3>Entregas</h3>
      <div><TodasEntregas/></div>
      <!-- Lista de Moradores -->
      <ListaMoradores />
    </div>
  </div>
</template>

<script>
// Importações necessárias do Firebase para Firestore
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";
// Importação dos componentes utilizados
import HeaderFuncionario from "@/components/HeaderFuncionario.vue"; // Componente do cabeçalho do funcionário
import EntradaEncomendas from "@/components/EntradaEncomendas.vue"; // Componente para entrada de encomendas
import ListaMoradores from "@/components/ListaMoradores.vue"; // Componente para listar moradores
import TodasEntregas from "./TodasEntregas.vue"; // Componente para listar todas as entregas

export default {
  components: { 
    HeaderFuncionario, 
    EntradaEncomendas, 
    ListaMoradores, 
    TodasEntregas, 
  }, // Registra os componentes utilizados no template
  data() {
    return {
      entregas: [], // Lista de entregas
    };
  },
  async created() {
    // Verifica se o usuário está autenticado como funcionário
    const isFuncionario = localStorage.getItem('isFuncionario') === 'true';
    if (!isFuncionario) {
      this.$router.push('/loginfuncionario'); // Redireciona para a página de login se não estiver autenticado
      return;
    }

    await this.carregarEntregas(); // Carrega as entregas ao iniciar o componente
  },
  methods: {
    // Método para carregar as entregas do Firestore
    async carregarEntregas() {
      const querySnapshot = await getDocs(collection(db, "entregas")); // Obtém todos os documentos da coleção "entregas"
      this.entregas = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // Mapeia os documentos para um array de objetos
    },
    // Método para atualizar o status de uma entrega para "Recebida"
    async atualizarStatus(entregaId) {
      const entregaRef = doc(db, "entregas", entregaId); // Referência ao documento da entrega
      await updateDoc(entregaRef, { status: "Recebida" }); // Atualiza o status da entrega
      await this.carregarEntregas(); // Recarrega a lista de entregas após a atualização
    },
    // Método para retornar a classe CSS com base no status da entrega
    statusClass(status) {
      return {
        pendente: status === "Pendente", // Classe para status "Pendente"
        recebida: status === "Recebida", // Classe para status "Recebida"
      };
    },
  },
};
</script>

<style scoped>
/* Estilos para o contêiner do dashboard */
.dashboard {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Estilos para o título do dashboard */
h2 {
  text-align: center;
  color: #0074d9;
}

/* Estilos para a tabela de entregas */
.tabela-entregas {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

/* Estilos para as células da tabela */
.tabela-entregas th,
.tabela-entregas td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
}

/* Estilos para o status "Pendente" */
.pendente {
  color: orange;
  font-weight: bold;
}

/* Estilos para o status "Recebida" */
.recebida {
  color: green;
  font-weight: bold;
}
</style>