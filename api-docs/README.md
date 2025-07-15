## Visualizando e Testando a Documentação da API

Este projeto utiliza o arquivo `api.yaml` para definir a documentação da API utilizando o padrão OpenAPI/Swagger.

### Pré-requisitos

- Node.js instalado
- npm instalado

### Instalação

```bash
npm i -g @nestjs/cli

nest new nestjs-openapi-swagger-example
```

### Executando o Projeto

```bash
nest start
```

### Visualizando a Documentação

Após iniciar o projeto, acesse a documentação Swagger gerada a partir do `api.yaml` em:

```
http://localhost:3000/api
```

### Testando Endpoints

Você pode testar os endpoints diretamente pela interface Swagger, que permite enviar requisições e visualizar respostas em tempo real.

### Importando o `api.yaml` em Ferramentas Externas

Se preferir, importe o arquivo `api.yaml` em ferramentas como [Postman](https://www.postman.com/) ou [Swagger Editor](https://editor.swagger.io/) para explorar e testar a API.
