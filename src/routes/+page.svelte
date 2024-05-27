<script lang="ts">
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { providers } from '$lib/providers';

	let turn = $state(32);
	let left = $state('ddg');
	let right = $state('pplx');
</script>

<h1>Multi-track Search</h1>
<p>
	Choose your default search engine (or LLM provider) based on the length of your browser queries
</p>

<hr />

<p>
	When my search is less than
	<input type="number" bind:value={turn} />
	characters long, use
	<select bind:value={left}>
		{#each Object.entries(providers) as [id, p]}
			<option value={id}>{p.name}</option>
		{/each}
	</select>
	to search.
</p>

<p>
	Otherwise, if the input is longer than
	<input type="number" bind:value={turn} />
	characters, use
	<select bind:value={right}>
		{#each Object.entries(providers) as [id, p]}
			<option value={id}>{p.name}</option>
		{/each}
	</select>
	instead.
</p>

Set this URL as your default search provider:
<code>{PUBLIC_BASE_URL}/search?left={left}&turn={turn}&right={right}&q=%s</code>

<!-- in the future use browser detection to add instructions here -->

<hr />

<h2>FAQ</h2>

<details>
	<summary>Will you add service X?</summary>

	Probably, if it's a general-purpose search engine or LLM client, open an issue on
	<a href="https://github.com/oofdere/MultiTrackSearch">GitHub</a>
	, or even better, a PR!
</details>
