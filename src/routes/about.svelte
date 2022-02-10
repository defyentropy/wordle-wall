<svelte:head>
	<title>About | Wordle Wall</title>
</svelte:head>

<nav class="sticky top-0 z-10 bg-white py-2 px-4 mb-8 border-b border-gray-300 flex items-center">
	<a href="/">
		<img src="logo.png" alt="wordle wall logo" class="w-44 sm:w-72" />
	</a>
</nav>
<main>
	<h1 class="uppercase text-center text-3xl font-medium mb-4">About Wordle Wall</h1>
	<article class="max-w-xl mx-auto px-4 flex flex-col gap-6">
		<p>
			I made Wordle Wall because I wanted a way to share my daily Wordle results with people, but
			more so because I wanted a place to keep my Wordles so I could look back on them all together
			in the future.
		</p>
		<p>
			For those of you who are curious about the page itself, it's dead simple. I made a Prismic CMS
			repo that holds all the data (because it's all public data anyway and working with a CMS
			seemed easier at the time). Whenever I update a new document in the repo, this triggers a
			build on Vercel, which rebuilds the Static-Site Generated SvelteKit app and deploys it.
		</p>
	</article>
</main>

<footer class="flex items-center py-2 px-4 absolute bottom-0">
	<span class="font-medium">&copy; Hari PM, 2022</span>
</footer>
