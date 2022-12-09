<!-- 
	Show Vote
	- Displays the details of a users vote for a proposal.
-->

<script>
  export let proposal;
</script>

{#if proposal.yourVote.position === "for"}
<div class="bg-green-200 border-2 border-green-400 px-4 py-2 rounded shadow">
  You supported this vote with <b>{proposal.yourVote.amount}</b> votes.
</div>
{:else}
<div class="bg-red-200 border-2 border-red-400 px-4 py-2 rounded shadow">
  You opposed this vote with <b>{proposal.yourVote.amount}</b> votes.
</div>
{/if}
This vote cost you {proposal.yourVote.cost} GRPH.<br />
Currently you will earn {Math.round(proposal.proposalValue / proposal.totalVoters,2)} GRPH.