<script context="module">
	import createClient from '$lib/prismicClient.js';
	import * as prismicH from '@prismicio/helpers';

	export async function load({ fetch }) {
		const client = createClient(fetch);
		const documents = await client.getAllByType('wordlegame');
		documents.sort((first, next) => {
			return next.data.game_number - first.data.game_number;
		});

		return {
			props: {
				documents
			}
		};
	}
</script>

<script>
	export let documents;

	let streak = 0;

	for (let document of documents) {
		if (document.data.game_won === 'won') {
			streak++;
		} else {
			break;
		}
	}
</script>

<svelte:head>
	<title>Wordle Wall</title>
</svelte:head>

<nav
	class="sticky top-0 z-10 bg-white py-2 px-4 mb-8 border-b border-gray-300 flex justify-between items-center"
>
	<!-- <h1 class="uppercase text-2xl sm:text-4xl font-medium">Wordle Wall</h1> -->
	<img src="logo.png" alt="wordle wall logo" class="w-44 sm:w-72" />

	<div class="ml-auto flex flex-row-reverse items-center gap-4">
		<div>
			<a href="/about">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 text-gray-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</a>
		</div>
		<div class="flex items-center gap-1">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					class="text-green-600"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
				/>
				<path
					class="text-yellow-400"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
				/>
			</svg>
			<span class="font-bold text-xl">
				{streak}
			</span>
		</div>
	</div>
</nav>

<main
	class="grid pb-8 justify-items-center max-w-2xl w-fit mx-auto grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4"
>
	{#each documents as wordle}
		<div
			class="h-52 xs:h-44 group relative flex justify-center items-start aspect-square border-2 {wordle
				.data.game_won
				? 'border-green-600'
				: 'border-gray-500/70'} p-2"
		>
			<!-- Overlay -->
			<div
				class="absolute inset-x-0 h-full -mt-2 items-center justify-center transition-all {wordle
					.data.game_won
					? 'bg-green-700/70'
					: 'bg-gray-500/70'} opacity-0 flex flex-col group-hover:opacity-100"
			>
				<h2 class="font-extrabold text-center text-white select-none">
					Wordle {wordle.data.game_number}
				</h2>
				<p class="font-bold text-center text-6xl mb-2 tracking-widest text-white select-none">
					{wordle.data.num_of_guesses}/6
				</p>
			</div>
			<!-- Screen reader text -->
			<p class="sr-only">
				Wordle Number {wordle.data.game_number}. Guessed in {wordle.data.num_of_guesses} tries out of
				6.
			</p>
			<!-- Emoji grid -->
			<div class="flex flex-col justify-center">
				{@html prismicH.asHTML(wordle.data.game_result)}
			</div>
		</div>
	{/each}
</main>

<footer class="py-2 px-4">
	<span class="font-medium">&copy; Hari PM, 2022</span>
</footer>
