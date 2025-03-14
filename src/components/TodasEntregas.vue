<template>
  <div class="todas-entregas-container">
    <h3>Todas as Entregas</h3>

    <!-- Filtro de status -->
    <div class="filtro-status">
      <label for="statusFilter">Filtrar por status:</label>
      <select id="statusFilter" v-model="statusSelecionado">
        <option value="">Todos</option>
        <option value="Aguardando retirada">Aguardando retirada</option>
        <option value="Entregue">Entregue</option>
      </select>
    </div>

    <!-- Exibe uma mensagem de carregamento enquanto os dados são buscados -->
    <div v-if="loading">
      <p>Carregando entregas...</p>
    </div>
    <div v-else>
      <!-- Verifica se há entregas filtradas para exibir -->
      <div v-if="entregasFiltradas.length > 0">
        <!-- Itera sobre as entregas filtradas e exibe cada uma -->
        <div v-for="entrega in entregasFiltradas" :key="entrega.id" class="entrega-item">
          <p><strong>Remetente:</strong> {{ entrega.remetente }}</p>
          <p><strong>Data de Entrada:</strong> {{ formatarData(entrega.dataEntrada) }}</p>
          <p><strong>Descrição:</strong> {{ entrega.descricao }}</p>
          <p><strong>Nome do Destinatário:</strong> {{ entrega.nomeCompleto }}</p>
          <p><strong>Status:</strong> {{ entrega.status }}</p> <!-- Exibe o status sem edição -->
        </div>
      </div>
      <!-- Mensagem exibida caso não haja entregas -->
      <div v-else>
        <p>Nenhuma entrega encontrada.</p>
      </div>
    </div>
  </div>
</template>
  
  <script>
  // Importa funções do Firestore para manipulação de dados
  import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
  import { db } from "@/firebase"; // Importa a instância do Firestore
  
  export default {
    data() {
      return {
        entregas: [], // Armazena a lista de entregas
        loading: true, // Controla o estado de carregamento
        statusSelecionado: "", // Armazena o status selecionado para filtro
      };
    },
    async created() {
      // Quando o componente é criado, carrega as entregas
      await this.carregarEntregas();
    },
    computed: {
      // Filtra as entregas com base no status selecionado
      entregasFiltradas() {
        if (!this.statusSelecionado) {
          return this.entregas; // Retorna todas as entregas se nenhum status for selecionado
        }
        return this.entregas.filter((entrega) => entrega.status === this.statusSelecionado);
      },
    },
    methods: {
      // Carrega as entregas do Firestore
      async carregarEntregas() {
        try {
          const entregasRef = collection(db, "encomendas"); // Referência à coleção "encomendas"
          const querySnapshot = await getDocs(entregasRef); // Busca todos os documentos da coleção
  
          // Mapeia os documentos para um array de entregas
          this.entregas = querySnapshot.docs.map((doc) => ({
            id: doc.id, // Adiciona o ID do documento
            ...doc.data(), // Adiciona os dados da entrega
          }));
        } catch (error) {
          console.error("Erro ao buscar entregas:", error); // Exibe erro no console
        } finally {
          this.loading = false; // Finaliza o estado de carregamento
        }
      },
  
      // Formata a data para um formato legível
      formatarData(data) {
        return new Date(data).toLocaleString();
      },
  
      // Atualiza o status da entrega no Firestore
      async atualizarStatus(entrega) {
        try {
          const entregaRef = doc(db, "encomendas", entrega.id); // Referência ao documento da entrega
          await updateDoc(entregaRef, {
            status: entrega.status, // Atualiza o status no Firestore
          });
          console.log("Status atualizado com sucesso!"); // Confirmação no console
        } catch (error) {
          console.error("Erro ao atualizar o status:", error); // Exibe erro no console
        }
      },
  
      // Exclui uma entrega do Firestore
      async excluirEntrega(id) {
        try {
          // Confirmação antes de excluir
          const confirmacao = confirm("Tem certeza que deseja excluir esta encomenda?");
          if (confirmacao) {
            const entregaRef = doc(db, "encomendas", id); // Referência ao documento da entrega
            await deleteDoc(entregaRef); // Exclui o documento
  
            // Remove a entrega da lista local
            this.entregas = this.entregas.filter((entrega) => entrega.id !== id);
            console.log("Encomenda excluída com sucesso!"); // Confirmação no console
          }
        } catch (error) {
          console.error("Erro ao excluir a encomenda:", error); // Exibe erro no console
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para o container principal */
  .todas-entregas-container {
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Estilos para o título */
  h3 {
    font-size: 1.5rem;
    color: #0074d9;
    margin-bottom: 15px;
  }
  
  /* Estilos para o filtro de status */
  .filtro-status {
    margin-bottom: 20px;
  }
  
  .filtro-status label {
    margin-right: 10px;
    font-size: 1rem;
    color: #333;
  }
  
  .filtro-status select {
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  /* Estilos para cada item de entrega */
  .entrega-item {
    background: white;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .entrega-item p {
    margin: 5px 0;
    font-size: 1rem;
    color: #333;
  }
  
  /* Estilos para textos em negrito */
  strong {
    color: #0074d9;
  }
  
  /* Estilos para o dropdown de status */
  select {
    margin-left: 10px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  /* Estilos para o botão de excluir */
  .btn-excluir {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-excluir:hover {
    background-color: #ff1a1a;
  }
  
  /* Estilos para o texto de carregamento */
  .loading {
    font-size: 1.1rem;
    color: #555;
  }
  </style>