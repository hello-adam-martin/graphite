<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/carblogo.png';
  import { browser } from '$app/environment';
	
	$: avatarConnected = false;
	
	if (browser) {
    	if(typeof window.zilPay !== 'undefined') {
			console.log("ZilPay present");
			const zilliqa = window.zilPay;
			console.log(zilliqa.wallet.net);
		} else {
			console.log("ZilPay Not Found");
		}
	}

</script>

<header>
	{#if !avatarConnected}
	<div class="bg-red-300 text-white text-center">Your Avatar Is Not Connected</div>
	{/if}
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/proposals' ? 'page' : undefined}>
				<a href="/proposals">Proposals</a>
			</li>
			<li aria-current={$page.url.pathname === '/addproposal' ? 'page' : undefined}>
				<a href="/addproposal">Add Proposal</a>
			</li>
			<li aria-current={$page.url.pathname === '/claimrewards' ? 'page' : undefined}>
				<a href="/claimrewards">Claim Rewards</a>
			</li>
		</ul>
	</nav>

</header>

<style>

	li[aria-current='page'] a {
		color: red
	}

</style>
