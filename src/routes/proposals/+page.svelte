<script>
//this should come from GunJS / API
	let proposals = [{
		proposalSmartContract: "0x1213133",
		proposalConfidenceTarget: 75,
		proposalId: "CLIP1",
	  proposalAuthor: "Carbon Labs",
	  proposalTitle: "Lower the GRPH emmision rate for the GRPH / CARB pool to 4 GRPH per block.",
	  proposalDescription: "This is an example of a simple proposal. The equivalent of a yes or no. If you agree with the proposal, then you would choose a positive amount. If you disagree then you would choose a negative amount.",
		proposalVotes: {
			for: 11,
			against: 17,
		},
		totalVoters: 79,
		proposalValue: 12417,
		yourVote: {
			position: "against",
			amount: 9,
			cost: 81
		}
	},
  {
		proposalSmartContract: "0x1213133",
		proposalConfidenceTarget: 75,
		proposalId: "CLIP2",
	  proposalAuthor: "Carbon Labs",
	  proposalTitle: "Another proposal.",
	  proposalDescription: "Proposal description.",
		proposalVotes: {
			for: 1,
			against:6,
		},
		totalVoters: 7,
		proposalValue: 124,
		yourVote: {
			position: "against",
			amount: 0,
			cost: 0
		}
	}]
</script>

<svelte:head>
	<title>Proposals</title>
	<meta name="description" content="Graphite Proposals" />
</svelte:head>

<section>
	<h1>Current Proposals</h1>
	<ul>
	{#each proposals as proposal}
		<li><a href="/proposals/{proposal.proposalId}">{proposal.proposalId} - {proposal.proposalTitle.slice(0,40)}&hellip;</a></li>
	{/each}
	</ul>
</section>