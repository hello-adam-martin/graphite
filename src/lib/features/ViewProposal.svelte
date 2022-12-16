<script>
	import SimpleProposal from '$lib/components/SimpleProposal.svelte';
	import SimpleVote from '$lib/components/SimpleVote.svelte';
	import ShowVote from '$lib/components/ShowVote.svelte';

  //$: voted = proposal.yourVote.amount;		// if this is not 0 then true
	let voted = false;

	//this is a hack to show the proposals with and without voting option.
	import { page } from '$app/stores';
  if($page.params.proposal == "1") {
		voted = true;
	} else {
		voted = false;
	}

	//this should come from GunJS / API
	let proposal = {
		smart_contract: "0x1213133",
		confidence_target: 75,
		id: 1,
	  _author: {
			"avatar": "Carbon Labs"
		},
	  title: "Lower the GRPH emmision rate for the GRPH / CARB pool to 4 GRPH per block.",
	  description: "This is an example of a simple proposal. The equivalent of a yes or no. If you agree with the proposal, then you would choose a positive amount. If you disagree then you would choose a negative amount.",
		_voting_summary: {
			votes_for: 2,
			votes_against: 4,
		},
		confidence_score: 66.67,
		_totalvoters: 79,
		//proposalValue: 12417,
		
		yourVote: {
			position: "against",
			amount: 3,
			cost: 81
		}
		
	}

</script>

{#if voted}
	<ShowVote {proposal} />
{/if}
	<SimpleProposal {proposal} />
{#if !voted}
	<SimpleVote />
{/if}