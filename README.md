# Teste Frontend Jr

## Instalando dependências

Para rodar o projeto é necessário ter o Node instalado, assim como o NPM.
Execute o seguinte comando no terminal para instalar as dependências:

```bash

npm install

#ou

yarn

```


## Rodando localmente

Execute o seguinte comando para rodar o projeto localmente:

```bash

npm run dev

#ou

yarn dev

```


### Resolvendo Erros de CORS

Caso você enfrente erros de CORS ao realizar requisições, existem algumas soluções possíveis:

1. **Utilizando uma Extensão do Chrome:** Você pode usar a extensão [Allow CORS: Access-Control-Allow-Origin](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=pt-BR) para dar um bypass temporário nos erros de CORS.

2. **Configurando o Servidor:** Certifique-se de que o servidor esteja configurado com o cabeçalho `Access-Control-Allow-Origin: *`.

3. **Usando um Proxy:** Outra solução é utilizar o [CORS Anywhere](https://cors-anywhere.herokuapp.com/corsdemo) como um proxy. A URL original da requisição é: `https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`. Após o ajuste com o proxy, a URL ficaria assim: `https://cors-anywhere.herokuapp.com/https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`.

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o site.



## Compilar o projeto

Execute o seguinte comando para compilar o projeto:

```bash

npm run build

# ou

yarn build

```

Isso irá gerar os arquivos buildados na pasta `.next`.



## Testar o código

Execute o seguinte comando para testar o código do projeto:

```bash

npm run test

# ou

yarn test

```