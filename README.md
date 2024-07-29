# MTG Card Viewer

Este é um projeto em React que utiliza Next.js e Tailwind CSS para buscar e exibir cartas de Magic: The Gathering. O projeto consome a API do Scryfall para fornecer dados detalhados sobre as cartas.

## Funcionalidades

- **Procurar Cartas por Nome**: Permite que os usuários busquem cartas específicas pelo nome.
- **Exibir Informações de uma Carta**: Exibe detalhes sobre uma carta específica, incluindo imagem, tipo, cor, custo de mana e descrição.
- **Favoritar Cartas**: Os usuários podem favoritar cartas, e essas informações são armazenadas no local storage do navegador.
- **Exibir Cartas Favoritas**: Exibe uma lista das cartas favoritas do usuário.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **Scryfall API**: API para acesso a informações detalhadas sobre cartas de Magic: The Gathering.

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/guiig28/MTG-Card-Viewer
   cd MTG-Card-Viewer

   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install

   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev

   ```

4. Abra o navegador e acesse http://localhost:3000 para ver a aplicação em execução.

## Licença

Este projeto está licenciado sob a [MIT License](https://choosealicense.com/licenses/mit/)
