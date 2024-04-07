import {
  registerForEvent
} from "./chunk-O6M2W3JW.mjs";
import {
  errorHandler
} from "./chunk-57RYAKZ7.mjs";
import {
  checkIn
} from "./chunk-D5FPOH77.mjs";
import {
  createEvent
} from "./chunk-SISXORC3.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAttendeeBadge
} from "./chunk-KWSNIYTB.mjs";
import {
  getEventAttendees
} from "./chunk-H63GB53I.mjs";
import {
  getEvent
} from "./chunk-PG6EKREF.mjs";
import "./chunk-6OJH4T5L.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform
} from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
  //https://meufrontend.com
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in construida durando o NLW Unite",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(getEventAttendees);
app.register(getAttendeeBadge);
app.register(registerForEvent);
app.register(createEvent);
app.register(getEvent);
app.register(checkIn);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running");
});
