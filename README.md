# Especificações

# pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos

### Requisitos funcionais

- [ ]  O organizador deve poder cadastrar um novo evento;
- [ ]  O organizador deve poder visualizar dados de um evento;
- [ ]  O organizador deve poser visualizar a lista de participantes;
- [ ]  O participante deve poder se inscrever em um evento;
- [ ]  O participante deve poder visualizar seu crachá de inscrição;
- [ ]  O participante deve poder realizar check-in no evento;

### Regras de negócio

- [ ]  O participante só pode se inscrever em um evento uma única vez;
- [ ]  O participante só pode se inscrever em eventos com vagas disponíveis;
- [ ]  O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [ ]  O check-in no evento será realizado através de um QRCode;

``npm init -y``;
``npm i typescript @types/node -D`` "-D significa que o ts se manterá apenas durante o desenvolvimento";
``npx tsc -h`` "-h é um help"
``npx tsc --init`` "para iniciar o projeto em ts"

github.com/tsconfig/base -> copia o tsconfig.json

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

``npm i tsx -D`` "para ajudar no desenvolvimento";

```json
  "scripts": {
    "dev": "tsx watch src/server.ts"
  },
```
Substituir agora para esse script acima para poder rodar à
aplicação com o comando ``npm run dev``

``npm i fastify`` mini framework que resolve um unico problema que temos dentro de apis que é a criação de rotas, poderemos ter diferentes end points dentro da aplicação.