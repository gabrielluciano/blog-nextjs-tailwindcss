# Blog with NextJS and TailwindCSS
Frontend project for blog using NextJS and TailwindCSS. The blog uses the `getStaticProps` and `getStaticPaths` functions to get the posts from requests to the API.

*Leia em português: [Português Brasileiro](README.md).*

## Application Preview
You can see and test the application in [this link](https://blog-nextjs-tailwindcss.vercel.app/)!

## Main Technologies and Libraries used:
- [NextJS](https://nextjs.org/): A React-based Framework to create web applications;
- [TailwindCSS](https://tailwindcss.com/): A library to style web applications with utilities classes;
- [React Icons](https://react-icons.github.io/react-icons/): Icon library for ReactJS;
- [Axios](https://axios-http.com/docs/intro): Isomorphic library (works in both NodeJS and browser) to perform HTTP requests.

## Usage
First, you must have [NodeJS](https://nodejs.org/en/download/) and the [Yarn](https://classic.yarnpkg.com/en/docs/install) package manager installed on your machine.

### Using the JSON Server fake API
The folder `api-example` provides a fake api created with Node [JSON Server](https://www.npmjs.com/package/json-server) module. To install and start the API use the commands below on your terminal:
```bash
cd api-example
yarn && yarn dev
```
After that the API will be working and can be accessed by URL [localhost:3001](http://localhost:3001). By default, two endpoints (`posts` and `categories`) will be created.

To create new endpoints or modify the data, you need do edit the `db.json` file which is located in `api_example/src/db.json`. For more information, visit the JSON Server documentation.

### Installation and use of the blog
To install the necessary packages, enter the project's root folder through the terminal and run the command:
```bash
yarn
```

Next, you need to create the `.env` file that will contain the URL of the API. To do this, on projects root folder, run the command below:
```bash
echo "NEXT_PUBLIC_API_URL=http://localhost:3001" >> .env
```

If you want to use your own API it is necessary to change the URL above.

Finnaly, run the project in development mode using the command:
```bash
yarn dev
```

More details on how to test and build the application can be found in the NextJS documentation

### Using revalidate parameter
As seguintes páginas obtém dados da API apenas no momento do build com as funções `getStaticProps` e `getStaticPaths`:
The following pages fetch data from the API only at built time with `getStaticProps` and `getStaticPaths` functions:
- `src/pages/index.jsx`
- `src/pages/[category].jsx`
- `src/pages/[category]/[slug].jsx`

An additional setting can be used to allow pages to be regenerated, getting the most recent data from the API in a given time range, using the `revalidate` parameter.

To use this setting, add the revalidate parameter to the return of the `getStaticProps`, passing the time in seconds for the page revalidation as a value:

```javascript
export async function getStaticProps(context) {
    // ...

    return {
        props: { /*...*/ },
        revalidate: 30 * 60 // Revalidate every 1800 seconds (30 minutes)
    }
}
```

