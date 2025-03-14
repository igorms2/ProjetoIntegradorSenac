import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa o router
import { abilitiesPlugin } from '@casl/vue';
import { buildAbilityFor } from './ability';

// Cria a instância do Vue
const app = createApp(App);

// Usa o router
app.use(router);

// Define a habilidade inicial como "guest"
let currentAbility = buildAbilityFor({ role: 'guest' });

// Usa o plugin CASL para controle de permissões
app.use(abilitiesPlugin, currentAbility);

// Função para atualizar as permissões do usuário
function updateAbility(role) {
  currentAbility.update(buildAbilityFor({ role }));
}

// Expõe a função de atualização de permissões globalmente
app.config.globalProperties.$updateAbility = updateAbility;

// Monta o aplicativo no elemento #app
app.mount('#app');