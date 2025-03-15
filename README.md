Estrutura do Projeto
O projeto está organizado da seguinte forma

sistema-condominio/

├── public/

├── src/

│ ├── assets/

│ ├── components/

│ │ ├── ListaMoradores.vue

│ │ ├── TodasEntregas.vue

│ ├── firebase/

│ │ ├── firebaseConfig.js

│ ├── views/

│ ├── App.vue

│ ├── main.js

├── README.md

├── package.json

Componentes
Lista de Moradores
Descrição
Este componente exibe uma lista de moradores do condomínio, permitindo a edição de seus dados e a filtragem por nome ou email.

Funcionalidades
Listagem de Moradores:
Exibe os dados dos moradores, incluindo nome, telefone, email, endereço, CPF, RG e data de nascimento.
Edição de Dados:
Permite a edição dos dados dos moradores diretamente na interface.
Filtro por Nome ou Email:
Filtra a lista de moradores com base no nome ou email digitado.
Todas as Entregas
Descrição
Este componente exibe uma lista de encomendas, permitindo a atualização do status e a exclusão de encomendas.

Funcionalidades
Listagem de Encomendas:
Exibe os dados das encomendas, incluindo código de rastreio, data de entrada, descrição, nome do destinatário, remetente e status.
Atualização de Status:
Permite a atualização do status da encomenda (Aguardando retirada, Em trânsito, Entregue, Cancelada).
Filtro por Status:
Filtra a lista de encomendas com base no status selecionado.
Exclusão de Encomendas:
Permite a exclusão de encomendas após confirmação.
Como Executar o Projeto
Clone o repositório:
git clone https://github.com/igorms2/ProjetoIntegradorSenac
cd sistema-condominio
Project setup
npm install
Compiles and hot-reloads for development
npm run serve
Compiles and minifies for production
npm run build
Lints and fixes files
npm run lint
Tecnologias Utilizadas Vue.js: Framework JavaScript para construção da interface do usuário.

Firebase (Firestore): Banco de dados em tempo real para armazenamento de dados.

HTML/CSS: Para estruturação e estilização da interface.

Contribuição Contribuições são bem-vindas! Siga os passos abaixo:

Faça um fork do projeto.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Commit suas alterações (git commit -m 'Adicionando nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.
