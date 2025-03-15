
# Sistema de Condomínio

Este é um sistema de gerenciamento de condomínio desenvolvido para facilitar a administração de moradores, encomendas e outras funcionalidades relacionadas ao condomínio. O sistema foi construído utilizando Vue.js para o frontend e Firebase (Firestore) como banco de dados.

## Índice

1. [Visão Geral](#visão-geral)
2. [Funcionalidades](#funcionalidades)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Componentes](#componentes)
   - [Lista de Moradores](#lista-de-moradores)
   - [Todas as Entregas](#todas-as-entregas)
5. [Como Executar o Projeto](#como-executar-o-projeto)
6. [Tecnologias Utilizadas](#tecnologias-utilizadas)
7. [Contribuição](#contribuição)


---

## Visão Geral

O sistema de condomínio foi desenvolvido para atender às necessidades de administradores e moradores de um condomínio. Ele permite o gerenciamento de moradores, encomendas e outras funcionalidades essenciais para a administração do condomínio.

---

## Funcionalidades

- **Gerenciamento de Moradores**:
  - Listagem de moradores.
  - Edição de dados dos moradores (nome, telefone, email, endereço, CPF, RG, data de nascimento).
  - Filtro de moradores por nome ou email.

- **Gerenciamento de Encomendas**:
  - Listagem de encomendas.
  - Atualização do status das encomendas (Aguardando retirada, Em trânsito, Entregue, Cancelada).
  - Filtro de encomendas por status.
  - Exclusão de encomendas.

---

## Estrutura do Projeto

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


---

## Componentes

### Lista de Moradores

#### Descrição
Este componente exibe uma lista de moradores do condomínio, permitindo a edição de seus dados e a filtragem por nome ou email.

#### Funcionalidades
- **Listagem de Moradores**:
  - Exibe os dados dos moradores, incluindo nome, telefone, email, endereço, CPF, RG e data de nascimento.
- **Edição de Dados**:
  - Permite a edição dos dados dos moradores diretamente na interface.
- **Filtro por Nome ou Email**:
  - Filtra a lista de moradores com base no nome ou email digitado.

---

### Todas as Entregas

#### Descrição
Este componente exibe uma lista de encomendas, permitindo a atualização do status e a exclusão de encomendas.

#### Funcionalidades
- **Listagem de Encomendas**:
  - Exibe os dados das encomendas, incluindo código de rastreio, data de entrada, descrição, nome do destinatário, remetente e status.
- **Atualização de Status**:
  - Permite a atualização do status da encomenda (Aguardando retirada, Em trânsito, Entregue, Cancelada).
- **Filtro por Status**:
  - Filtra a lista de encomendas com base no status selecionado.
- **Exclusão de Encomendas**:
  - Permite a exclusão de encomendas após confirmação.

---

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/igorms2/ProjetoIntegrador5
   cd sistema-condominio

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

Tecnologias Utilizadas
Vue.js: Framework JavaScript para construção da interface do usuário.

Firebase (Firestore): Banco de dados em tempo real para armazenamento de dados.

HTML/CSS: Para estruturação e estilização da interface.

Contribuição
Contribuições são bem-vindas! Siga os passos abaixo:
Igor Moura Santos
Filipe André da Fonseca Simões
Daniel Buono
Vitor Hugo Santana Benevides
Pedro Vinícius Oliveira de Medeiros



Faça um fork do projeto.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Commit suas alterações (git commit -m 'Adicionando nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.

