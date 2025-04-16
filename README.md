# Twitter Clone

Este é um projeto de clone do Twitter desenvolvido com [Next.js](https://nextjs.org), utilizando a estrutura de diretórios `app` para criar uma aplicação moderna e escalável. O projeto foi iniciado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor e geração de sites estáticos.
- **React**: Biblioteca para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **Prisma**: ORM para manipulação de banco de dados.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Turbopack**: Ferramenta de empacotamento de alta performance.

## Funcionalidades

- **Sidebar**: Navegação lateral com links para diferentes seções.
- **Feed**: Exibição de postagens em tempo real.
- **Widgets**: Elementos adicionais, como sugestões de perfis e tendências.
- **Autenticação**: Páginas de login e cadastro.
- **Banco de Dados**: Gerenciado com Prisma para persistência de dados.

## Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter o seguinte instalado:

- Node.js (versão 16 ou superior)
- Gerenciador de pacotes (npm, yarn, pnpm ou bun)

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/twitter-clone.git
   cd twitter-clone
   ```
   
  2. Instale as dependências:
  ```
  npm install
# ou
yarn install
# ou
pnpm install
```
3. Configure o banco de dados no arquivo `prisma/schema.prisma` e gere as migrações:

```npx prisma migrate dev```

4. Inicie o servidor de desenvolvimento:

```
npm run dev
# ou
yarn dev
# ou
pnpm dev
```
5. Abra http://localhost:3000 no navegador para visualizar o projeto.

## Próximos Passos
- Implementar funcionalidades de postagem e curtidas.
- Adicionar suporte a upload de imagens.
- Melhorar a responsividade para dispositivos móveis.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

