import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";

import { errorHandler } from "./error-handler";

import { getEventAttendees } from "./routes/get-event-attendees";
import { registerForEvent } from "./routes/register-for-event";
import { getAttendeeBadge } from "./routes/get-attendee-badge";
import { createEvent } from "./routes/create-event";
import { getEvent } from "./routes/get-event";
import { checkIn } from "./routes/check-in";
import fastifyCors from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, {
  origin: "*", //https://meufrontend.com
});

app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description:
        "Especificações da API para o back-end da aplicação pass.in construida durando o NLW Unite",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
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
