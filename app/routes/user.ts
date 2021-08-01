import { FastifyInstance } from "fastify";

import { User } from "../db/entities/User";

export default (fastify: FastifyInstance, opts: Object, done: Function) => {
  fastify.post("/register", async (req, reply) => {
    const user = new User();

    await user.save();
    reply.code(201).send({ userInfo: user });
  });

  done();
};
