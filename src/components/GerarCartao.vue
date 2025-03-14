<template>
  <div class="gerar-cartao">
    <!-- Cartão de Identidade -->
    <div class="cartao" id="cartao-identidade">
      <!-- Cabeçalho do Cartão -->
      <div class="cabecalho">
        <h2>IDENTIDADE</h2>
        <!-- Logo do condomínio -->
        <img src="@/assets/images/logo_porta_f_cil_bonito_e_moderno_nas-removebg-preview.png" alt="Logo" class="logo" />
      </div>

      <!-- Conteúdo do Cartão -->
      <div class="conteudo">
        <!-- Foto do Morador -->
        <div class="foto-container">
          <img :src="fotoMorador" alt="Foto do Morador" class="foto" />
        </div>

        <!-- Dados do Morador -->
        <div class="dados">
          <p><strong>Nome:</strong> {{ morador.nome }}</p>
          <p><strong>Email:</strong> {{ morador.email }}</p>
          <p><strong>Endereço:</strong> {{ morador.endereco }}</p>
          <p><strong>CPF:</strong> {{ morador.cpf }}</p>
          <p><strong>RG:</strong> {{ morador.rg }}</p>
        </div>

        <!-- QR Code -->
        <div class="qr-container">
          <vue-qrcode :value="qrCodeData" :options="{ width: 100 }" class="qr-code" />
        </div>
      </div>
    </div>

    <!-- Botão de Imprimir -->
    <button @click="imprimirCartao" class="btn-imprimir">Imprimir Cartão</button>

    <!-- Botão de Voltar para o Dashboard -->
    <button @click="voltarParaDashboard" class="btn-voltar">Voltar para o Dashboard</button>
  </div>
</template>

<script>
// Importações necessárias
import VueQrcode from 'vue-qrcode'; // Componente para gerar QR Code
import { doc, getDoc } from "firebase/firestore"; // Funções do Firestore
import { db, auth } from '../firebase'; // Configurações do Firebase

export default {
  components: { VueQrcode }, // Registra o componente VueQrcode
  data() {
    return {
      morador: {
        nome: '', // Nome do morador
        email: '', // Email do morador
        endereco: '', // Endereço do morador
        cpf: '', // CPF do morador
        rg: '', // RG do morador
        foto: '', // URL da foto do morador
      },
      qrCodeData: '', // Dados para gerar o QR Code
      placeholderFoto: require('@/assets/images/image.png') // Foto padrão caso não haja foto do morador
    };
  },
  computed: {
    // Retorna a foto do morador ou a foto padrão
    fotoMorador() {
      return this.morador.foto ? this.morador.foto : this.placeholderFoto;
    }
  },
  methods: {
    // Método para imprimir o cartão
    imprimirCartao() {
      window.print(); // Aciona a função de impressão do navegador
    },
    // Método para voltar ao dashboard do morador
    voltarParaDashboard() {
      this.$router.push('/dashboard-morador'); // Redireciona para o dashboard
    }
  },
  async created() {
    // Verifica se há um usuário logado
    const user = auth.currentUser;
    if (user) {
      try {
        // Busca os dados do morador no Firestore
        const moradorDoc = await getDoc(doc(db, 'usuarios', user.uid));
        if (moradorDoc.exists()) {
          // Atualiza os dados do morador
          this.morador = moradorDoc.data();
          // Gera os dados para o QR Code
          this.qrCodeData = JSON.stringify({
            moradorId: user.uid, // ID do morador
            nome: this.morador.nome, // Nome do morador
            email: this.morador.email, // Email do morador
          });
        } else {
          alert("Dados do morador não encontrados.");
        }
      } catch (error) {
        console.error("Erro ao buscar dados do morador:", error.message);
        alert("Erro ao carregar os dados do morador. Tente novamente.");
      }
    } else {
      alert("Você precisa estar logado para acessar esta página.");
      this.$router.push('/login'); // Redireciona para a página de login
    }
  },
};
</script>

<style scoped>
/* Estilos para o contêiner principal */
.gerar-cartao {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #e0e0e0;
}

/* Estilos para o cartão de identidade */
.cartao {
  width: 350px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 15px;
  text-align: center;
  font-family: 'Arial', sans-serif;
  border: 2px solid #0074d9;
  margin-bottom: 20px;
}

/* Estilos para o cabeçalho do cartão */
.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #0074d9;
}

.cabecalho h2 {
  font-size: 1.2rem;
  color: #0074d9;
  font-weight: bold;
}

/* Estilos para o logo */
.logo {
  width: 40px;
  height: auto;
}

/* Estilos para o conteúdo do cartão */
.conteudo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

/* Estilos para o contêiner da foto */
.foto-container {
  flex: 1;
}

/* Estilos para a foto do morador */
.foto {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  border: 2px solid #0074d9;
}

/* Estilos para os dados do morador */
.dados {
  flex: 2;
  text-align: left;
  font-size: 0.9rem;
}

.dados p {
  margin: 5px 0;
  color: #333;
}

/* Estilos para o contêiner do QR Code */
.qr-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

/* Estilos para o QR Code */
.qr-code {
  width: 80px;
  height: 80px;
}

/* Estilos para os botões */
.btn-imprimir, .btn-voltar {
  background-color: #0074d9;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  margin: 5px; /* Espaçamento entre os botões */
}

/* Efeito de hover nos botões */
.btn-imprimir:hover, .btn-voltar:hover {
  background-color: #005bb5;
}

/* Ocultar os botões ao imprimir */
@media print {
  .btn-imprimir, .btn-voltar {
    display: none;
  }
}
</style>