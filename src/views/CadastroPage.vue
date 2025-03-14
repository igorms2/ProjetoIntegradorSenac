<template>
  <div class="cadastro">
    <h2>Cadastro</h2>
    <!-- Título da página de cadastro -->

    <!-- Campos do formulário -->
    <input v-model="nome" placeholder="Nome" @blur="formatarNome" />
    <!-- Campo de entrada para o nome. Usa `v-model` para vincular ao dado `nome` e `@blur` para formatar o nome ao sair do campo. -->

    <input v-model="email" placeholder="Email" type="email" />
    <!-- Campo de entrada para o email. Usa `v-model` para vincular ao dado `email` e define o tipo como `email`. -->

    <input v-model="password" placeholder="Senha" type="password" />
    <!-- Campo de entrada para a senha. Usa `v-model` para vincular ao dado `password` e define o tipo como `password`. -->

    <input v-model="endereco" placeholder="Endereço (com apt)" />
    <!-- Campo de entrada para o endereço. Usa `v-model` para vincular ao dado `endereco`. -->

    <input v-model="cpf" placeholder="CPF (XXX.XXX.XXX-XX)" v-mask="'###.###.###-##'" />
    <!-- Campo de entrada para o CPF. Usa `v-model` para vincular ao dado `cpf` e aplica uma máscara para o formato `XXX.XXX.XXX-XX`. -->

    <input v-model="rg" placeholder="RG (12.345.678-9)" v-mask="'##.###.###-#'" />
    <!-- Campo de entrada para o RG. Usa `v-model` para vincular ao dado `rg` e aplica uma máscara para o formato `12.345.678-9`. -->

    <input v-model="dataNascimento" placeholder="Data de Nascimento (DD/MM/AAAA)" v-mask="'##/##/####'" />
    <!-- Campo de entrada para a data de nascimento. Usa `v-model` para vincular ao dado `dataNascimento` e aplica uma máscara para o formato `DD/MM/AAAA`. -->

    <input v-model="telefone" placeholder="Telefone ((92)98471-3059)" v-mask="'(##)#####-####'" />
    <!-- Campo de entrada para o telefone. Usa `v-model` para vincular ao dado `telefone` e aplica uma máscara para o formato `(92)98471-3059`. -->

    <!-- Exibe mensagem de erro, se houver -->
    <p v-if="mensagemErro" class="erro">{{ mensagemErro }}</p>
    <!-- Exibe uma mensagem de erro caso `mensagemErro` não esteja vazia. -->

    <!-- Botão de cadastro, desabilitado durante o carregamento -->
    <button :disabled="loading" @click="cadastrar">
      <span v-if="!loading">Cadastrar</span>
      <span v-else>Carregando...</span>
    </button>
    <!-- Botão para submeter o formulário. Desabilitado durante o carregamento (`loading = true`). -->

    <!-- Link para a página de login -->
    <p>Já tem uma conta? <router-link to="/">Faça login</router-link></p>
    <!-- Link para redirecionar o usuário para a página de login. -->
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Importa funções de autenticação do Firebase
import { doc, setDoc } from "firebase/firestore"; // Importa funções do Firestore para manipulação de documentos
import { db } from '@/firebase'; // Importa a instância do Firestore
import { mask } from "vue-the-mask"; // Importa a diretiva de máscara para campos de entrada

export default {
  directives: { mask }, // Registra a diretiva 'mask' para uso no template
  data() {
    return {
      nome: '', // Armazena o nome do usuário
      email: '', // Armazena o email do usuário
      password: '', // Armazena a senha do usuário
      endereco: '', // Armazena o endereço do usuário
      cpf: '', // Armazena o CPF do usuário
      rg: '', // Armazena o RG do usuário
      dataNascimento: '', // Armazena a data de nascimento do usuário
      telefone: '', // Armazena o telefone do usuário
      mensagemErro: '', // Armazena mensagens de erro
      loading: false, // Controla o estado de carregamento
    };
  },
  methods: {
    // Formata o nome com a primeira letra maiúscula e o restante minúscula
    formatarNome() {
      if (this.nome) {
        this.nome = this.nome
          .toLowerCase() // Converte tudo para minúscula
          .split(' ') // Divide o nome em partes (para tratar cada palavra)
          .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1)) // Primeira letra maiúscula
          .join(' '); // Junta as palavras novamente
      }
    },
    // Valida o formato do CPF
    validarCPF(cpf) {
      const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // Regex para validar o formato do CPF
      return regex.test(cpf) && !/(\d)\1{10}/.test(cpf.replace(/\D/g, '')); // Verifica se o CPF é válido
    },
    // Valida o formato do RG
    validarRG(rg) {
      const regex = /^\d{2}\.\d{3}\.\d{3}-\d{1}$/; // Regex para validar o formato do RG
      return regex.test(rg); // Verifica se o RG é válido
    },
    // Valida a data de nascimento
    validarDataNascimento(data) {
      const regex = /^\d{2}\/\d{2}\/\d{4}$/; // Regex para validar o formato da data
      if (!regex.test(data)) return false; // Verifica se a data está no formato correto

      const [dia, mes, ano] = data.split('/').map(Number); // Divide a data em dia, mês e ano
      const dataAtual = new Date(); // Obtém a data atual
      const anoAtual = dataAtual.getFullYear(); // Obtém o ano atual

      if (ano > anoAtual || ano < 1900) return false; // Verifica se o ano é válido
      if (mes < 1 || mes > 12) return false; // Verifica se o mês é válido
      if (dia < 1 || dia > 31) return false; // Verifica se o dia é válido

      return true; // Retorna verdadeiro se a data for válida
    },
    // Valida o formato do telefone
    validarTelefone(telefone) {
      const regex = /^\(\d{2}\)\d{5}-\d{4}$/; // Regex para validar o formato do telefone
      return regex.test(telefone); // Verifica se o telefone é válido
    },
    // Método para realizar o cadastro
    async cadastrar() {
      this.mensagemErro = ''; // Limpa a mensagem de erro
      this.loading = true; // Ativa o estado de carregamento

      try {
        // Validação dos campos obrigatórios
        if (!this.nome || !this.email || !this.password || !this.endereco || !this.cpf || !this.rg || !this.dataNascimento || !this.telefone) {
          this.mensagemErro = 'Preencha todos os campos.'; // Exibe mensagem de erro
          return;
        }

        // Validação do CPF, RG, data de nascimento e telefone
        if (!this.validarCPF(this.cpf)) {
          this.mensagemErro = 'CPF inválido. Formato esperado: XXX.XXX.XXX-XX';
          return;
        }
        if (!this.validarRG(this.rg)) {
          this.mensagemErro = 'RG inválido. Formato esperado: 12.345.678-9';
          return;
        }
        if (!this.validarDataNascimento(this.dataNascimento)) {
          this.mensagemErro = 'Data de nascimento inválida.';
          return;
        }
        if (!this.validarTelefone(this.telefone)) {
          this.mensagemErro = 'Telefone inválido. Formato esperado: (92)98471-3059';
          return;
        }

        // Formata o nome antes de salvar
        this.formatarNome();

        // Cria o usuário no Firebase Authentication
        const authInstance = getAuth(); // Obtém a instância de autenticação
        const userCredential = await createUserWithEmailAndPassword(authInstance, this.email, this.password); // Cria o usuário
        const user = userCredential.user; // Obtém os dados do usuário

        // Salva os dados no Firestore
        await setDoc(doc(db, 'usuarios', user.uid), {
          nome: this.nome, // Nome já formatado
          email: this.email,
          endereco: this.endereco,
          cpf: this.cpf,
          rg: this.rg,
          dataNascimento: this.dataNascimento,
          telefone: this.telefone,
          pedidos: [], // Inicializa o campo "pedidos" como um array vazio
          role: 'morador', // Define o role como "morador"
        });

        alert('Cadastro realizado com sucesso!'); // Exibe mensagem de sucesso
        this.resetForm(); // Reseta o formulário
        this.$router.push('/'); // Redireciona para a página inicial
      } catch (error) {
        console.error('Erro durante o cadastro:', error); // Exibe erro no console
        this.tratarErroFirebase(error); // Trata erros do Firebase
      } finally {
        this.loading = false; // Desativa o estado de carregamento
      }
    },
    // Método para tratar erros do Firebase
    tratarErroFirebase(error) {
      if (error.code) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.mensagemErro = 'Este e-mail já está em uso.';
            break;
          case 'auth/invalid-email':
            this.mensagemErro = 'E-mail inválido.';
            break;
          case 'auth/weak-password':
            this.mensagemErro = 'A senha deve ter pelo menos 6 caracteres.';
            break;
          default:
            this.mensagemErro = 'Ocorreu um erro ao cadastrar. Tente novamente mais tarde.';
            break;
        }
      } else {
        this.mensagemErro = 'Ocorreu um erro inesperado. Tente novamente mais tarde.';
      }
    },
    // Método para resetar o formulário
    resetForm() {
      this.nome = '';
      this.email = '';
      this.password = '';
      this.endereco = '';
      this.cpf = '';
      this.rg = '';
      this.dataNascimento = '';
      this.telefone = '';
    },
  },
};
</script>

<style scoped>
.cadastro {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
}

input {
  padding: 10px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369f6e;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.erro {
  color: red;
  font-size: 14px;
}

p {
  margin-top: 10px;
}
</style>