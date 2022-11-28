<script>
	import SimpleVote from './SimpleVote.svelte';
	import { browser } from '$app/environment';

	if (browser) {
    	if(typeof window.zilPay !== 'undefined') {
			console.log("ZilPay present");
			const zilliqa = window.zilPay;
			console.log(zilliqa.wallet.net);
		}
	}

</script>

<svelte:head>
	<title>Graphite</title>
</svelte:head>

<section>
	<SimpleVote />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
		padding-bottom: 0;
		margin-bottom: 0
	}

</style>
