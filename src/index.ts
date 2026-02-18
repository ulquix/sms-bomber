import { main } from './executer';

export default {
  async fetch(request, env, ctx): Promise<Response> {
    if (request.method === 'GET') {

      // 👇 Read from headers instead
      const number = request.headers.get('x-number');
      const loopHeader = request.headers.get('x-loop');
      const loop = parseInt(loopHeader || '1', 10);

      if (!number) {
        return new Response('Missing "number" header', { status: 400 });
      }

      if (isNaN(loop) || loop < 1) {
        return new Response('Invalid "loop" header', { status: 400 });
      }

      for (let i = 0; i < loop; i++) {
        await main(number);

        if (i < loop - 1) {
          await new Promise((resolve) => setTimeout(resolve, 60000));
        }
      }

      return new Response(`Executed ${loop} time(s)!`);
    }

    return new Response('Hello World!');
  },
} satisfies ExportedHandler<Env>;