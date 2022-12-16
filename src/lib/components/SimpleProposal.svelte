<!-- 
	Simple Proposal - Yes or No
	- Displays basic information about a simple proposal.
-->

<script>

	export let proposal;

	$: votedFor = proposal._voting_summary.votes_for;
	$: votedAgainst = proposal._voting_summary.votes_against;
	$: totalVotes = votedFor + votedAgainst;


</script>

<i>Contract: <a href="#">{proposal.smart_contract}</a></i>
<h1>CLIP{proposal.id} - Proposed by {proposal._author.avatar}.</h1>
<h2>{proposal.title}</h2>
<p class="py-2">{proposal.description}</p>

<div class="overflow-hidden h-4 w-full">
	<div class="h-full border-r-2 border-dotted border-slate-900 h-4" style="width:{proposal.confidence_target}%"></div>
</div>
<div class="overflow-hidden rounded-full h-5 flex w-full border-2 border-slate-900 bg-slate-100">
	<!-- todo - use logic to set the class rather than loop - avoid DRY-->
	{#if votedFor > votedAgainst}
		<div class="h-full bg-green-300" style="width:{proposal.confidence_score}%"></div>
		<div class="h-full bg-red-300" style="width:{100-proposal.confidence_score}%"></div>
	{:else}
		<div class="h-full bg-red-300" style="width:{proposal.confidence_score}%"></div>
		<div class="h-full bg-green-300" style="width:{100-proposal.confidence_score}%"></div>
	{/if}
</div>
<div class="overflow-hidden h-4 w-full">
	<div class="h-full border-r-2 border-dotted border-slate-900 h-4" style="width:{proposal.confidence_target}%"></div>
</div>