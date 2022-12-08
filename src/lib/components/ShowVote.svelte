<!-- 
	Show Vote
	- Displays the users vote for a proposal.
-->

{#if randomBool}
<div class="bg-green-200 border-2 border-green-400 px-4 py-2 rounded shadow">
  You supported this vote with <b>10</b> votes.
</div>
{:else}
<div class="bg-red-200 border-2 border-red-400 px-4 py-2 rounded shadow">
  You opposed this vote with <b>3</b> votes.
</div>
{/if}

<script>
  //emulate the vote
  const randomBool = Math.random() > 0.5 ? true : false;
</script>