<script>
	import SimpleProposal from '$lib/components/SimpleProposal.svelte';
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
	<SimpleProposal />
</section>

<style></style>