# Especificações

# pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos

### Requisitos funcionais

- [ ] O organizador deve poder cadastrar um novo evento;
- [ ] O organizador deve poder visualizar dados de um evento;
- [ ] O organizador deve poser visualizar a lista de participantes;
- [ ] O participante deve poder se inscrever em um evento;
- [ ] O participante deve poder visualizar seu crachá de inscrição;
- [ ] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [ ] O participante só pode se inscrever em um evento uma única vez;
- [ ] O participante só pode se inscrever em eventos com vagas disponíveis;
- [ ] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [ ] O check-in no evento será realizado através de um QRCode;

<p>
``npm init -y``<br>
``npm i typescript @types/node -D`` "-D significa que o ts se manterá apenas durante o desenvolvimento"<br>
``npx tsc -h`` "-h é um help"<br>
``npx tsc --init`` "para iniciar o projeto em ts"<br>

github.com/tsconfig/base -> copia o tsconfig.json<br>

</p>

node 20

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "_version": "20.1.0",

  "compilerOptions": {
    "lib": ["es2023"],
    "module": "node16",
    "target": "es2022",

    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "node16"
  }
}
```

`npm i tsx -D` "para ajudar no desenvolvimento"<br>

```json
  "scripts": {
    "dev": "tsx watch src/server.ts"
  },
```

<p>
Substituir agora para esse script acima para poder rodar à
aplicação com o comando ``npm run dev``<br>

`npm i fastify` mini framework que resolve um unico problema que temos dentro de apis que é a criação de rotas, poderemos ter diferentes end points dentro da aplicação.<br>

</p>

### Metodos HTTP (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, ...)

- Corpo de requisição (Request body)<br>
- Parâmetro de busca (Search Params / Query Params)<br>
- Parâmetro de rota (Route params)<br>
- Cabeçalhos (Headers)<br>

**Driver native** -> forma de conexão mais baixo nivel, escrever as coisas na mao "insert / select / delete ..." bom para otimização(controle de tudo) porem requer conhecimento<br>

**Query Builders** -> a gente usa a sintaxe a linguagem para escrever "exemplo knex.js"<br>

**ORMs** -> Object Relation Mapping "exemplos Hibernate/Doctrine"<br>

`npm i prisma -D` "instalando como uma dependencia de desenvolvimento<br>
`npx prisma init --datasource-provider SQLite` "com ele instalado passaremos está flag<br>

atualizar o package.json para ler nossas variaveis de ambiente antes da execução<br>

```json
"scripts": {
  "dev": "tsx watch --env-file .env src/server.ts"
},
```

`npx prisma migrate dev` "irá fazer uma varredura no prisma detectando as mudanças, pedirá um nome para indentificar essa migração, assim como um _commit_" <br>

`npx prisma studio` "para visualizar na web a table"

`npm i zod`

### Status Code

200 -> Sucesso
300 -> Redirecionamento
400 -> Erro do client (Erro em alguma informação enviada por QUEM está fazendo a chamada para a API)
500 -> Erro do servidor (erro que esta acontecendo idependente do que esta sendo enviado para o servidor)

`npm i fastify-type-provider-zod`

**Table não apareceu no intelli code do prisma** -> ctrl + shift + p "restart ts server"

`npx prisma db seed`
npm i @fastify/swagger -> documentação
npm i @fastify/swagger-ui
npm i @fastify/cors -> quais aplicalçoes poderam consumir minha api

npm i tsup -D -> para buildar
npm run build

npm run start -> iniciar o projeto fora da area de desenvovimento já convertido para js

**_Package.json_**

```json
"scripts": {
  "dev": "tsx watch --env-file .env src/server.ts",
  "build": "tsup src --format esm",
  "start": "node dist/server.mjs",
  "db:migrate": "prisma migrate dev",
  "db:studio": "prisma studio"
},
```
