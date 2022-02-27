# Blog com NextJS e TailwindCSS
Projeto de frontend para blog usando NextJS e TailwindCSS. O blog utiliza as funções `getStaticProps` e `getStaticPaths` para obter os posts a partir de requisições para API.

*Read this in English: [English](README.en.md).*

## Preview da Aplicação
Você pode ver e testar a aplicação [neste link](link)!

## Principais Tecnologias e Bibliotecas utilizadas:
- [NextJS](https://nextjs.org/): Framework baseasdo em React para criar aplicações web;
- [TailwindCSS](https://tailwindcss.com/): Biblioteca para estilizar aplicações web a partir de classes utilitárias;
- [React Icons](https://react-icons.github.io/react-icons/): Biblioteca de ícones para ReactJS;
- [Axios](https://axios-http.com/docs/intro): Biblioteca isomórfica (funciona tanto no NodeJS como no browser) para realizar requisições HTTP.

## Utilização
Primeiro é necessário ter instalado o [NodeJS](https://nodejs.org/en/download/) e o gerenciador de pacotes [Yarn](https://classic.yarnpkg.com/en/docs/install).

### Utilizando a fake API com JSON Server
A pasta `api-example` disponibiliza uma fake api criada com o módulo do node [JSON Server](https://www.npmjs.com/package/json-server). Para instalar e iniciar a API siga os comandos abaixo:
```bash
cd api-example
yarn && yarn dev
```
Após isso a API já estará em funcionamento e pode ser acessada pela URL: [localhost:3001](http://localhost:3001). Por padrão, dois endpoints (`posts` e `categories`) serão criados.

Para criar novos endpoints ou modificar os dados, modifique o arquivo `db.json` localizado em `api_example/src/db.json`. Mais informações são encontradas na documentação do JSON Server.

### Instalação e utilização do blog
Para instalar os pacotes necessários, entre na pasta raíz do projeto pelo terminal e execute o comando:
```bash
yarn
```
Em seguida, é necessário criar o arquivo `.env` que conterá a url da API. Para isso, ainda na pasta raíz do projeto, execute o comando abaixo:
```bash
echo "NEXT_PUBLIC_API_URL=http://localhost:3001" >> .env
```

Se for utilizar outra API é necessário modificar a URL acima.

Por fim, execute o projeto em modo de desenvolvimento a partir do comando:
```bash
yarn dev
```

Maiores detalhes sobre como realizar e testar o build da aplicação podem ser obtidos na documentação do NextJS.

### Utilizando o revalidate
As seguintes páginas obtém dados da API apenas no momento do build com as funções `getStaticProps` e `getStaticPaths`:
- `src/pages/index.jsx`
- `src/pages/[category].jsx`
- `src/pages/[category]/[slug].jsx`

Uma configuração adicional pode ser utilizada para permitir que as páginas sejam regeneradas, obtendo as informações mais atuais da API em determinado intervalo de tempo, a partir do parâmetro `revalidate`.

Para isso adicione o parâmetro revalidate no retorno da função `getStaticProps`, passando como valor o tempo em segundos para a revalidação da página:

```javascript
export async function getStaticProps(context) {
    // ...

    return {
        props: { /*...*/ },
        revalidate: 30 * 60 // Revalida a cada 1800 segundos (30 minutos)
    }
}
```

