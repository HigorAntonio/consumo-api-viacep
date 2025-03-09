# Aplicativo de Cadastro de Usuários com Integração VIACEP

## Descrição

Este projeto é uma aplicação web desenvolvida em ReactJS para cadastro de usuários, com integração à API VIACEP para preenchimento automático de endereço com base no CEP fornecido. A aplicação foi estruturada para oferecer uma experiência de usuário intuitiva e eficiente, incluindo validação de dados e mensagens de erro dinâmicas.

## Funcionalidades

- **Preenchimento automático do endereço:** Ao inserir um CEP válido, os campos de endereço são automaticamente preenchidos.
- **Validação de dados:** Mensagens de erro são exibidas caso o CEP seja inválido ou tenha menos de 8 dígitos.
- **Cadastro de usuário:** Formulário dinâmico para inserção de dados pessoais e endereço.
- **Armazenamento dos dados:** Os usuários cadastrados são armazenados no localStorage, possibilitando sua listagem posteriormente.
- **Mensagem de confirmação:** Após o cadastro, uma mensagem de sucesso é exibida usando um componente toast.
- **Listagem de usuários cadastrados:** Exibição dos usuários cadastrados usando um modal."
- **Navegação entre páginas:** A aplicação é dividida em múltiplas páginas: Início, Cadastro de Usuário e Listagem de Usuários.

## Tecnologias Utilizadas

- **Linguagens:** HTML, CSS, JavaScript
- **Bibliotecas e Frameworks:** ReactJS, Vite, React-Router
- **API Externa:** [VIACEP](https://viacep.com.br/)

## Como Executar o Projeto

1. Clone este repositório:
   ```sh
   git clone https://github.com/HigorAntonio/consumo-api-viacep.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd nome-do-projeto
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor:
   ```sh
   npm run dev
   ```
5. Acesse a aplicação pelo link indicado no terminal.
