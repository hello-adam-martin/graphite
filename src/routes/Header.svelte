<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/carblogo.png';
	import github from '$lib/images/github.svg';

	

</script>

<header>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/proposals' ? 'page' : undefined}>
				<a href="/proposals">Proposals</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>

</header>

<style>

	li[aria-current='page'] a {
		color: red
	}

</style>
