import fastify, { FastifyInstance } from "fastify";
import { Server, ServerResponse, IncomingMessage } from "http";
import { dirname, join } from "path";
import Autoload from "fastify-autoload";
require("dotenv").config();
import connectDb from "./db/index";

const currentVersion = process.env.VERSION;

const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({ logger: true });

const directoryName = dirname(__filename);

server.register(Autoload, {
  dir: join(directoryName, `routes`),
  options: { prefix: `/api/${currentVersion}` },
});

connectDb();

function build(): FastifyInstance {
  return server;
}

module.exports = build;
