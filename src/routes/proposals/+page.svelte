<script>
	import GUN from 'gun';
	var gun = GUN();

	/*
	var proposals = gun.get('proposals');
	proposals.set({title: "Proposal 1"});
	proposals.map().on(function (proposal, id) {
		console.log(proposal, id)
	});
	*/
	
	
</script>

<svelte:head>
	<title>Proposals</title>
	<meta name="description" content="Graphite Proposals" />
</svelte:head>

<div class="text-column">
	<h1>Active Proposals</h1>

	<p>
		A unique & fair governance model that encourages participation by paying you to vote.
	</p>
	<p>
		<b>Quadractic Voting</b><br>
		Quadratic voting is a collective decision-making procedure which involves individuals allocating votes to express the degree of their preferences, rather than just the direction of their preferences.
	</p>

</div>
