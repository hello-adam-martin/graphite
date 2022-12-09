<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/carblogo.png';
	import github from '$lib/images/github.svg';

	import { browser } from '$app/environment';

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

	<div class="bg-red-300 text-white text-center">Your Avatar Is Not Connected</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/proposals' ? 'page' : undefined}>
				<a href="/proposals">Proposals</a>
			</li>
		</ul>
	</nav>

</header>

<style>

	li[aria-current='page'] a {
		color: red
	}

</style>
