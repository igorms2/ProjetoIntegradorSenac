<template>
  <div class="entrada-encomendas">
    <h3>Cadastrar Nova Encomenda</h3>
    <form @submit.prevent="cadastrarEncomenda">
      <input v-model="nomeCompleto" placeholder="Nome do Morador" required />
      <input v-model="descricao" placeholder="Descrição da Encomenda" required />
      <input v-model="remetente" placeholder="Remetente" required />
      <input v-model="telefone" placeholder="Telefone do Morador (xx)xxxxx-xxxx" v-mask="'(##)#####-####'" required />
      <button type="submit">Cadastrar Encomenda</button>
    </form>

    <h3>Atualizar Status da Encomenda</h3>
    <form @submit.prevent="atualizarStatus">
      <input v-model="codigoRastreioInput" placeholder="Código de Rastreio" required />
      <select v-model="statusInput" :disabled="!codigoRastreioInput">
        <option value="Aguardando retirada">Aguardando retirada</option>
        <option value="Entregue">Entregue</option>
      </select>
      <button type="submit" :disabled="!codigoRastreioInput">Atualizar Status</button>
    </form>
  </div>
</template>

<script>
import { collection, addDoc, query, where, getDocs, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  data() {
    return {
      nomeCompleto: "",
      descricao: "",
      remetente: "",
      telefone: "",
      codigoRastreioInput: "",
      statusInput: "Aguardando retirada",
    };
  },
  methods: {
    gerarCodigoAleatorio() {
      const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let codigo = "";
      for (let i = 0; i < 8; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      }
      return codigo;
    },
    async cadastrarEncomenda() {
      try {
        const codigoRastreio = this.gerarCodigoAleatorio();
        const encomendaRef = await addDoc(collection(db, "encomendas"), {
          nomeCompleto: this.nomeCompleto,
          descricao: this.descricao,
          remetente: this.remetente,
          telefone: this.telefone,
          codigoRastreio: codigoRastreio,
          status: "Aguardando retirada",
          dataEntrada: new Date().toISOString(),
        });

        console.log("Encomenda cadastrada com ID:", encomendaRef.id);
        this.enviarMensagemWhatsApp(this.telefone, codigoRastreio);

        this.nomeCompleto = "";
        this.descricao = "";
        this.remetente = "";
        this.telefone = "";

        this.$emit("entrega-adicionada");
      } catch (error) {
        console.error("Erro ao cadastrar encomenda:", error);
      }
    },
    async atualizarStatus() {
      try {
        const q = query(collection(db, "encomendas"), where("codigoRastreio", "==", this.codigoRastreioInput));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          querySnapshot.forEach(async (doc) => {
            await updateDoc(doc.ref, {
              status: this.statusInput,
            });
            console.log("Status atualizado para:", this.statusInput);
          });
        } else {
          console.error("Encomenda não encontrada com o código de rastreio fornecido.");
        }
      } catch (error) {
        console.error("Erro ao atualizar status:", error);
      }
    },
    enviarMensagemWhatsApp(telefone, codigoRastreio) {
      const numeroWhatsApp = telefone.replace(/\D/g, "");
      const mensagem = `Olá, ${this.nomeCompleto}! Seu pedido chegou! Status: Aguardando retirada. Código: ${codigoRastreio}`;
      const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
      window.open(linkWhatsApp, "_blank");
    },
  },
};
</script>

<style scoped>
.entrada-encomendas {
  margin-bottom: 20px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 1.5rem;
  color: #0074d9;
  margin-bottom: 15px;
}

input, select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #369f6e;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>