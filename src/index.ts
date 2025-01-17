export default {
	async fetch(request) {
		// someHost is set up to return JSON responses
		const someHost = 'https://jsonplaceholder.typicode.com';
		const url1 = someHost + '/todos/1';
		const url2 = someHost + '/todos/2';

		let results;
		try {
			const resp1 = await fetch(url1);
			const resp2 = await fetch(url2);
			const json1 = await resp1.json();
			const json2 = await resp2.json();
			results = JSON.stringify([json1, json2], null, 2);
		} catch (e: any) {
			results = `${e.message}\n${e.stack}`;
		}
		return new Response(results);
	},
} satisfies ExportedHandler;
