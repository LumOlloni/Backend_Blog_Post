import fastify, { FastifyInstance } from "fastify";
import { Server, ServerResponse, IncomingMessage } from "http";

const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({ logger: true });

function build() {
  server.get("/ping", async (request, replay) => {
    return "pong";
  });
  return server;
}

module.exports = build;
