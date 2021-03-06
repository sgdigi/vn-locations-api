const fastify = require('fastify')({ logger: true });
const { pad0 } = require('./utils');

require('dotenv').config();

const tinhThanh = require('./data/tinh_tp.json');
const quanHuyen = require('./data/quan_huyen.json');

fastify.get('/', async (request, reply) => {
  reply.code('404').send("What you're looking for is not here.");
});

fastify.get('/ping', async (request, reply) => {
  return { pong: 'It worked!' };
});

fastify.get('/tinh-thanh', async (request, reply) => {
  return tinhThanh;
});

fastify.get('/tinh-thanh/:code', async (request, reply) => {
  try {
    const code = pad0(request.params.code, 2);
    const quanHuyen = require(`./data/quan-huyen/${code}.json`);
    return quanHuyen;
  } catch (err) {
    reply.code('404').send({ message: 'Mã tỉnh thành không tồn tại!' });
  }
});

fastify.get('/quan-huyen', async (request, reply) => {
  return quanHuyen;
});

fastify.get('/quan-huyen/:code', async (request, reply) => {
  try {
    const code = pad0(request.params.code, 3);
    const xaPhuong = require(`./data/xa-phuong/${code}.json`);
    return xaPhuong;
  } catch (err) {
    reply.code('404').send({ message: 'Mã quận huyện không tồn tại!' });
  }
});

const start = async () => {
  try {
    await fastify.listen(
      process.env.PORT || 3000,
      process.env.HOST || '127.0.0.1'
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
