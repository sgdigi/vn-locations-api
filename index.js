const fastify = require('fastify')({ logger: true });

const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: { type: 'string' }
        }
      }
    }
  }
};

fastify.get('/ping', opts, async (request, reply) => {
  return { pong: 'It worked!' };
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
