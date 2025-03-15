import { createRouter, createWebHistory } from 'vue-router'; // Importa funções para criar o roteador e gerenciar o histórico de navegação
import { getAuth, signOut } from "firebase/auth"; // Importa funções de autenticação do Firebase
import { doc, getDoc, setDoc } from "firebase/firestore"; // Importa funções do Firestore para manipulação de documentos
import { db } from '@/firebase'; // Importa a instância do Firestore

// Importação dos componentes de forma lazy (carregamento sob demanda)
const HomePage = () => import('@/views/HomePage.vue');
const LoginComponent = () => import('@/components/LoginComponent.vue');
const CadastroPage = () => import('@/views/CadastroPage.vue');
const DashboardMorador = () => import('@/components/DashboardMorador.vue');
const GerarCartao = () => import('@/components/GerarCartao.vue');
const LoginFuncionario = () => import('@/components/LoginFuncionario.vue');
const DashboardFuncionario = () => import('@/components/DashboardFuncionario.vue');
const EntradaEncomendas = () => import('@/components/EntradaEncomendas.vue');

// Definição das rotas
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // Rota para a página inicial
  },
  {
    path: '/ProjetoIntegradorSenac/', // Garante que essa rota existe
    name: 'ProjetoIntegrador',
    component: HomePage, // Troque pelo componente correto
  },
  
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent, // Rota para o login de moradores
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: CadastroPage, // Rota para o cadastro de moradores
  },
  {
    path: '/dashboard-morador',
    name: 'DashboardMorador',
    component: DashboardMorador,
    meta: { requiresAuth: true, role: 'morador' }, // Rota protegida para moradores
  },
  {
    path: '/gerar-cartao',
    name: 'GerarCartao',
    component: GerarCartao, // Rota pública para gerar cartão (sem autenticação)
  },
  {
    path: '/loginfuncionario',
    name: 'LoginFuncionario',
    component: LoginFuncionario, // Rota para o login de funcionários
  },
  {
    path: '/dashboardfuncionario',
    name: 'DashboardFuncionario',
    component: DashboardFuncionario,
    meta: { requiresAuth: true, role: 'funcionario' }, // Rota protegida para funcionários
  },
  {
    path: '/entrada-encomendas',
    name: 'EntradaEncomendas',
    component: EntradaEncomendas,
    meta: { requiresAuth: true, role: 'admin' }, // Rota protegida para admin
  },
];

// Criação do roteador
const router = createRouter({
  history: createWebHistory(), // Usa o modo de histórico HTML5
  routes, // Define as rotas
});

// Função para verificar permissões do usuário
async function checkPermissions(to, user) {
  try {
    // Admin tem acesso a todas as rotas
    if (user.email === 'admin@mail.com') {
      return true;
    }

    // Obtém os dados do usuário no Firestore
    const userDoc = await getDoc(doc(db, 'usuarios', user.uid));

    if (!userDoc.exists()) {
      console.log('Dados do usuário não encontrados. Criando novo documento...');
      // Cria um novo documento no Firestore para o usuário
      await setDoc(doc(db, 'usuarios', user.uid), {
        email: user.email,
        role: 'morador', // Define uma role padrão
      });
      return true;
    }

    const userData = userDoc.data();
    console.log('Role do usuário:', userData.role);
    console.log('Role necessária:', to.meta.role);

    // Verifica se a role do usuário corresponde à role necessária
    if (to.meta.role && userData.role !== to.meta.role) {
      alert('Você não tem permissão para acessar esta área.');
      return false;
    }

    return true;
  } catch (error) {
    console.error('Erro ao verificar permissões:', error.message);
    alert('Erro ao verificar permissões. Tente novamente mais tarde.');
    return false;
  }
}

// Middleware de proteção de rotas
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth); // Verifica se a rota requer autenticação

  if (requiresAuth) {
    const authInstance = getAuth();
    const user = authInstance.currentUser;

    // Verifica se o usuário está autenticado
    if (!user) {
      console.log('Usuário não autenticado. Redirecionando para /login.');
      next('/login'); // Redireciona para a página de login
      return;
    }

    // Verifica as permissões do usuário
    const hasPermission = await checkPermissions(to, user);
    if (!hasPermission) {
      console.log('Permissão negada. Redirecionando para /.');
      next('/'); // Redireciona para a página inicial
      return;
    }

    // Verifica se o usuário está saindo do DashboardMorador
    if (from.name === 'DashboardMorador' && to.name !== 'DashboardMorador') {
      await signOut(authInstance); // Desloga o usuário
      console.log('Usuário deslogado ao sair do DashboardMorador.');
    }

    next(); // Permite a navegação
  } else {
    next(); // Permite a navegação para rotas públicas
  }
});

export default router; // Exporta o roteador configurado