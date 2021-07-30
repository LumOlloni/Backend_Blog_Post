import { FastifyInstance } from "fastify";

export default (fastify: FastifyInstance, opts: Object, next: Function) => {
  fastify.get("/hello", async (req, replay) => {
    replay.code(200).send({ name: "Harbin" });
  });
  next();
};
