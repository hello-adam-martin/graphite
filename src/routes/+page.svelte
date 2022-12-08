<script>

	import ViewProposal from '$lib/features/ViewProposal.svelte';

	/*
	import { browser } from '$app/environment';

	if (browser) {
    	if(typeof window.zilPay !== 'undefined') {
			console.log("ZilPay present");
			const zilliqa = window.zilPay;
			console.log(zilliqa.wallet.net);
		}
	}
*/

$: voted = true;		// this needs to be checked via API

</script>

<svelte:head>
	<title>Graphite</title>
</svelte:head>

<section class="flex flex-col flex-1 justify-center items-center">
	<ViewProposal />
</section>