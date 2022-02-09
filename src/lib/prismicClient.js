import * as prismic from '@prismicio/client';

const repoName = `wordle-wall`;
const endpoint = prismic.getEndpoint(repoName);

const routes = [
	{
		type: 'wordlegame',
		path: '/'
	}
];

const createClient = (fetch) => {
	const clientOptions = {
		fetch,
		routes
	};
	const client = prismic.createClient(endpoint, clientOptions);
	return client;
};

export default createClient;
