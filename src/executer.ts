import everything from './codes.js';

const execute = async (func: Function) => {
	console.log(`\n[START] Executing: ${func.name}`);
	console.log('━'.repeat(50));

	try {
		const res = await func();
      if(!res.json)
        {
         console.log(`[ERROR] ${func.name} did not return a valid JSON response`);
         console.log('Response:', res);
         console.log('━'.repeat(50));
         return null;
        }
		const data = await res.json();

		console.log(`[SUCCESS] ${func.name} completed`);
		console.log('Response:', JSON.stringify(data, null, 2));
		console.log('━'.repeat(50));

		return data;
	} catch (err: any) {
		console.log(`[ERROR] ${func.name} failed`);
		console.log('Error:', err.message);
		console.log('━'.repeat(50));

		return null;
	}
};

export const main = async (number: string) => {
	const keys = Object.keys(everything);
	console.log(`\nTotal functions to execute: ${keys.length}\n`);

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		console.log(`\n[${i + 1}/${keys.length}] Processing: ${key}`);
		await execute(() => (everything as Record<string, Function>)[key](number));
	}

	console.log('\n✓ All functions executed successfully!');
};
// execute(everything.tvsmotor)
