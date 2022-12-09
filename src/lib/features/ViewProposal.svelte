<script>
	import SimpleProposal from '$lib/components/SimpleProposal.svelte';
	import SimpleVote from '$lib/components/SimpleVote.svelte';
	import ShowVote from '$lib/components/ShowVote.svelte';

  $: voted = proposal.yourVote.amount;		// if this is not 0 then true

	//this should come from GunJS / API
	let proposal = {
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
	}

</script>

<svelte:head>
	<title>Graphite</title>
</svelte:head>

{#if voted}
	<ShowVote {proposal} />
{/if}
	<SimpleProposal {proposal} />
{#if !voted}
	<SimpleVote />
{/if}