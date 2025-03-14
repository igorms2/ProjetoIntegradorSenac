// firebase.js
import { initializeApp } from "firebase/app"; // Importa a função para inicializar o Firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Importa funções de autenticação do Firebase
import { getFirestore } from "firebase/firestore"; // Importa a função para acessar o Firestore

// Configuração do Firebase (obtida do ambiente)
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY, // Chave da API do Firebase
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN, // Domínio de autenticação
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID, // ID do projeto
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET, // Bucket de armazenamento
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID, // ID do remetente de mensagens
  appId: process.env.VUE_APP_FIREBASE_APP_ID, // ID do app
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID, // ID de medição (opcional)
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig); // Inicializa o app do Firebase com a configuração fornecida
const auth = getAuth(app); // Obtém a instância de autenticação vinculada ao app
const db = getFirestore(app); // Obtém a instância do Firestore vinculada ao app

// Função para fazer login
async function fazerLogin(email, senha) {
  try {
    // Tenta fazer login com email e senha
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user; // Obtém os dados do usuário logado
    console.log("Usuário logado:", user); // Exibe os dados do usuário no console
    alert("Login realizado com sucesso!"); // Exibe uma mensagem de sucesso
    return user; // Retorna os dados do usuário
  } catch (error) {
    console.error("Erro ao fazer login:", error.message); // Exibe o erro no console
    alert("Erro ao fazer login: " + error.message); // Exibe uma mensagem de erro
    throw error; // Lança o erro para ser tratado externamente
  }
}

// Exporta as instâncias e funções para uso em outros arquivos
export { auth, db, fazerLogin };