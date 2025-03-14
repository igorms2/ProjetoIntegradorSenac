<template>
  <div class="lista-moradores">
    <h2>Lista de Moradores</h2>

    <!-- Campo de busca para filtrar moradores por nome, email ou endereço -->
    <input
      v-model="termoBusca"
      type="text"
      placeholder="Buscar morador por nome, email ou endereço..."
      class="campo-busca"
    />

    <!-- Tabela de moradores -->
    <table class="tabela-moradores">
      <thead> 
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Email</th>
          <th>Endereço</th>
          <th>CPF</th>
          <th>RG</th>
          <th>Data de Nascimento</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <!-- Itera sobre a lista de moradores filtrados -->
        <tr v-for="morador in moradoresFiltrados" :key="morador.id">
          <td>{{ morador.nome }}</td>
          <td>{{ morador.telefone }}</td>
          <td>{{ morador.email }}</td>
          <td>{{ morador.endereco }}</td>
          <td>{{ morador.cpf }}</td>
          <td>{{ morador.rg }}</td>
          <td>{{ formatarData(morador.dataNascimento) }}</td>
          <td>
            <!-- Botão para abrir o modal de edição -->
            <button @click="abrirEdicao(morador)">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal de edição de morador -->
    <div v-if="moradorEditando" class="modal-edicao">
      <h3>Editar Morador</h3>
      <form @submit.prevent="salvarEdicao">
        <!-- Campos do formulário de edição -->
        <label>Nome:</label>
        <input v-model="moradorEditando.nome" type="text" required />

        <label>Telefone:</label>
        <input v-model="moradorEditando.telefone" type="text" required />

        <label>Email:</label>
        <input v-model="moradorEditando.email" type="email" required />

        <label>Endereço:</label>
        <input v-model="moradorEditando.endereco" type="text" required />

        <label>CPF:</label>
        <input v-model="moradorEditando.cpf" type="text" required />

        <label>RG:</label>
        <input v-model="moradorEditando.rg" type="text" required />

        <label>Data de Nascimento:</label>
        <input
          v-model="dataNascimentoFormatada"
          type="text"
          placeholder="DD/MM/AAAA"
          pattern="\d{2}/\d{2}/\d{4}"
          required
        />

        <!-- Botões para salvar ou cancelar a edição -->
        <button type="submit">Salvar</button>
        <button type="button" @click="fecharEdicao">Cancelar</button>
      </form>
    </div>

    <!-- Mensagem de carregamento -->
    <div v-if="loading" class="loading">
      <p>Carregando moradores...</p>
    </div>

    <!-- Mensagem de erro -->
    <div v-if="erro" class="erro">
      <p>Erro ao carregar moradores: {{ erro }}</p>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default {
  data() {
    return {
      moradores: [], // Lista de moradores
      termoBusca: "", // Termo de busca para filtrar moradores
      loading: true, // Estado de carregamento
      erro: "", // Mensagem de erro
      moradorEditando: null, // Dados do morador sendo editado
      dataNascimentoFormatada: "", // Data de nascimento formatada para edição
    };
  },
  computed: {
    // Filtra os moradores com base no termo de busca (nome, email ou endereço)
    moradoresFiltrados() {
      return this.moradores.filter((morador) => {
        const busca = this.termoBusca.toLowerCase();
        return (
          morador.nome.toLowerCase().includes(busca) ||
          morador.email.toLowerCase().includes(busca) ||
          morador.endereco.toLowerCase().includes(busca) // Adiciona o endereço na busca
        );
      });
    },
  },
  async created() {
    await this.carregarMoradores(); // Carrega os moradores ao iniciar o componente
  },
  methods: {
    // Método para carregar os moradores do Firestore
    async carregarMoradores() {
      try {
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        this.moradores = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() })) // Mapeia os documentos para um array de objetos
          .filter((usuario) => usuario.role === "morador"); // Filtra apenas moradores
      } catch (error) {
        this.erro = "Erro ao carregar moradores: " + error.message; // Exibe uma mensagem de erro
      } finally {
        this.loading = false; // Finaliza o carregamento
      }
    },
    // Método para abrir o modal de edição
    abrirEdicao(morador) {
      this.moradorEditando = { ...morador }; // Copia os dados do morador para edição
      this.dataNascimentoFormatada = this.formatarData(morador.dataNascimento); // Formata a data de nascimento
    },
    // Método para fechar o modal de edição
    fecharEdicao() {
      this.moradorEditando = null; // Fecha o modal
      this.dataNascimentoFormatada = ""; // Limpa a data formatada
    },
    // Método para salvar as alterações no Firestore
    async salvarEdicao() {
      try {
        // Verifica se a data está no formato DD/MM/AAAA
        const regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        if (!regexData.test(this.dataNascimentoFormatada)) {
          throw new Error("Formato de data inválido. Use DD/MM/AAAA.");
        }

        // Converte a data de DD/MM/AAAA para YYYY-MM-DD
        const [dia, mes, ano] = this.dataNascimentoFormatada.split("/");
        const dataNascimentoISO = `${ano}-${mes}-${dia}`;

        // Atualiza os dados do morador no Firestore
        const moradorRef = doc(db, "usuarios", this.moradorEditando.id);
        await updateDoc(moradorRef, {
          nome: this.moradorEditando.nome,
          telefone: this.moradorEditando.telefone,
          email: this.moradorEditando.email,
          endereco: this.moradorEditando.endereco,
          cpf: this.moradorEditando.cpf,
          rg: this.moradorEditando.rg,
          dataNascimento: dataNascimentoISO,
        });

        // Atualiza a lista de moradores localmente
        const index = this.moradores.findIndex((m) => m.id === this.moradorEditando.id);
        if (index !== -1) {
          this.moradores[index] = { ...this.moradorEditando, dataNascimento: dataNascimentoISO };
        }

        this.fecharEdicao(); // Fecha o modal após salvar
      } catch (error) {
        this.erro = "Erro ao salvar edição: " + error.message; // Exibe uma mensagem de erro
      }
    },
    // Método para formatar a data
    formatarData(data) {
      if (!data) return ""; // Se a data for vazia, retorna vazio
      if (data.includes("-")) {
        const [ano, mes, dia] = data.split("-");
        return `${dia}/${mes}/${ano}`; // Converte de YYYY-MM-DD para DD/MM/AAAA
      }
      return data; // Retorna a data original se não estiver no formato esperado
    },
  },
};
</script>
  
  <style scoped>
  /* Estilos para o contêiner da lista de moradores */
  .lista-moradores {
    max-width: 1000px;
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 12px;
  }
  
  /* Estilos para o título da lista */
  h2 {
    text-align: center;
    color: #0074d9;
    margin-bottom: 20px;
    font-size: 1.5em;
  }
  
  /* Estilos para o campo de busca */
  .campo-busca {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
  }
  
  /* Estilos para a tabela de moradores */
  .tabela-moradores {
    width: 100%;
    border-collapse: collapse;
    font-size: 1em;
  }
  
  /* Estilos para as células da tabela */
  .tabela-moradores th,
  .tabela-moradores td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  /* Estilos para o cabeçalho da tabela */
  .tabela-moradores th {
    background-color: #0074d9;
    color: white;
  }
  
  /* Estilos para mensagens de carregamento e erro */
  .loading,
  .erro {
    text-align: center;
    font-size: 1.1em;
    color: #555;
    margin-top: 20px;
  }
  
  /* Estilos para o modal de edição */
  .modal-edicao {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }
  
  /* Estilos para o título do modal */
  .modal-edicao h3 {
    margin-bottom: 20px;
  }
  
  /* Estilos para os rótulos do formulário de edição */
  .modal-edicao label {
    display: block;
    margin-bottom: 5px;
  }
  
  /* Estilos para os campos de entrada do formulário de edição */
  .modal-edicao input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  /* Estilos para os botões do modal */
  .modal-edicao button {
    margin-right: 10px;
  }
  </style>