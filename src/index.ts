
/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { main } from './executer';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);
		if (request.method === 'GET' && url.pathname === '/') {
			const number = url.searchParams.get('number');
			const loop = parseInt(url.searchParams.get('loop') || '1', 10);
			if (!number) {
				return new Response('Missing "number" parameter', { status: 400 });
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
 