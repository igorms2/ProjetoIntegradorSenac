<template>
    <div class="lista-entregas">
      <!-- Título da lista de entregas -->
      <h3>Entregas para {{ nomeCompleto }}</h3>
  
      <!-- Mensagem de carregamento enquanto as entregas são buscadas -->
      <div v-if="loading">
        <p>Carregando entregas...</p>
      </div>
  
      <!-- Exibe as entregas se estiverem disponíveis -->
      <div v-else>
        <div v-if="entregas.length > 0">
          <!-- Itera sobre a lista de entregas -->
          <div v-for="entrega in entregas" :key="entrega.id" class="entrega-item">
            <p><strong>Código de Rastreio:</strong> {{ entrega.codigoRastreio }}</p>
            <p><strong>Data de Entrada:</strong> {{ formatarData(entrega.dataEntrada) }}</p>
            <p><strong>Descrição:</strong> {{ entrega.descricao }}</p>
            <p><strong>Remetente:</strong> {{ entrega.remetente }}</p>
            <p><strong>Status:</strong> {{ entrega.status }}</p>
          </div>
        </div>
        <!-- Mensagem caso não haja entregas -->
        <div v-else>
          <p>Nenhuma entrega encontrada.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Importações necessárias do Firebase Firestore
  import { collection, query, where, getDocs } from "firebase/firestore";
  import { db } from "@/firebase";
  
  export default {
    props: {
      // Propriedade recebida: nome completo do destinatário
      nomeCompleto: {
        type: String,
        required: true, // Obrigatória
      },
    },
    data() {
      return {
        entregas: [], // Lista de entregas
        loading: true, // Estado de carregamento
      };
    },
    async created() {
      try {
        // Verifica se o nome do destinatário está definido
        if (!this.nomeCompleto) {
          console.warn("Nome do destinatário não definido.");
          return;
        }
  
        // Busca as entregas no Firestore
        const entregasRef = collection(db, "encomendas"); // Referência à coleção "encomendas"
        const q = query(entregasRef, where("nomeCompleto", "==", this.nomeCompleto)); // Filtra por nome do destinatário
        const querySnapshot = await getDocs(q); // Obtém os documentos correspondentes
  
        // Mapeia os dados das entregas
        this.entregas = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Adiciona o ID do documento
          ...doc.data(), // Adiciona os dados da entrega
        }));
      } catch (error) {
        console.error("Erro ao buscar entregas:", error); // Exibe erro no console
      } finally {
        this.loading = false; // Finaliza o carregamento
      }
    },
    methods: {
      // Método para formatar a data
      formatarData(data) {
        return new Date(data).toLocaleString(); // Converte a data para um formato legível
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para o contêiner da lista de entregas */
  .lista-entregas {
    margin-top: 20px;
  }
  
  /* Estilos para cada item de entrega */
  .entrega-item {
    background: #f1f1f1; /* Cor de fundo */
    padding: 15px; /* Espaçamento interno */
    border-radius: 8px; /* Bordas arredondadas */
    margin-bottom: 10px; /* Espaçamento entre os itens */
  }
  
  /* Estilos para os parágrafos dentro de cada item de entrega */
  .entrega-item p {
    margin: 5px 0; /* Espaçamento entre os parágrafos */
    font-size: 1rem; /* Tamanho da fonte */
    color: #333; /* Cor do texto */
  }
  
  /* Estilos para textos em negrito */
  strong {
    color: #0074d9; /* Cor do texto em negrito */
  }
  </style>