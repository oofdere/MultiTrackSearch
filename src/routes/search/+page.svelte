<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { providers } from '$lib/providers';

	// add zod or valibot or smth
	const left = $page.url.searchParams.get('left')!;
	const right = $page.url.searchParams.get('right')!;
	const turn = $page.url.searchParams.get('turn')!;
	const query = $page.url.searchParams.get('q')!;

	let redir = '';
	if (query.length < 32) {
		redir = providers[left].url + query;
	} else {
		redir = providers[right].url + query;
	}

	window.location = redir;
</script>

<p>left: {left}</p>
<p>right: {right}</p>
<p>turn: {turn}</p>
<p>query: {query}</p>
<a href={redir}>redir: {redir}</a>
