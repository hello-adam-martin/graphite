<!-- 
	Simple Proposal - Yes or No
	- Displays basic information about a simple proposal.
-->

<i>Contract: <a href="#">{proposal.proposalSmartContract}</a></i>
<h1>{proposal.proposalId} - Proposed by {proposal.proposalAuthor}.</h1>
<h2>{proposal.proposalTitle}</h2>
<p>{proposal.proposalDescription}</p>

<script>

	//proposal data (@todo - this should come from GunJS)
	let proposal = {
		proposalSmartContract: "0x1213133",
		proposalId: "CLIP1",
	  proposalAuthor: "Carbon Labs",
	  proposalTitle: "Lower the GRPH emmision rate for the GRPH / CARB pool to 4 GRPH per block.",
	  proposalDescription: "This is an example of a simple proposal. The equivalent of a yes or no. If you agree with the proposal, then you would choose a positive amount. If you disagree then you would choose a negative amount."
	}

</script>
