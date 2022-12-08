<!-- 
	Simple Proposal - Yes or No
	- Displays basic information about a simple proposal.
-->

<i>Contract: <a href="#">{proposal.proposalSmartContract}</a></i>
<h1>{proposal.proposalId} - Proposed by {proposal.proposalAuthor}.</h1>
<h2>{proposal.proposalTitle}</h2>
<p class="py-2">{proposal.proposalDescription}</p>

<div class="overflow-hidden h-4 w-full">
	<div class="h-full border-r-2 border-dotted border-slate-900 h-4" style="width:{proposal.proposalConfidenceTarget}%"></div>
</div>
<div class="overflow-hidden rounded-full h-5 flex w-full border-2 border-slate-900 bg-slate-100">
	{#if votedFor > votedAgainst}
	<div class="h-full bg-green-300" style="width:{(votedFor / totalVotes)*100}%"></div>
	<div class="h-full bg-red-300" style="width:{(votedAgainst / totalVotes)*100}%"></div>
	{:else}
	<div class="h-full bg-red-300" style="width:{(votedAgainst / totalVotes)*100}%"></div>
	<div class="h-full bg-green-300" style="width:{(votedFor / totalVotes)*100}%"></div>
	{/if}
</div>
<div class="overflow-hidden h-4 w-full">
	<div class="h-full border-r-2 border-dotted border-slate-900 h-4" style="width:{proposal.proposalConfidenceTarget}%"></div>
</div>


<script>

	//proposal data (@todo - this should come from GunJS)
	let proposal = {
		proposalSmartContract: "0x1213133",
		proposalConfidenceTarget: 75,
		proposalId: "CLIP1",
	  proposalAuthor: "Carbon Labs",
	  proposalTitle: "Lower the GRPH emmision rate for the GRPH / CARB pool to 4 GRPH per block.",
	  proposalDescription: "This is an example of a simple proposal. The equivalent of a yes or no. If you agree with the proposal, then you would choose a positive amount. If you disagree then you would choose a negative amount.",
		proposalVotes: {
			for: 13,
			against: 3,
		}
	}

	$: votedFor = proposal.proposalVotes.for;
	$: votedAgainst = proposal.proposalVotes.against;
	$: totalVotes = votedFor + votedAgainst;


</script>
