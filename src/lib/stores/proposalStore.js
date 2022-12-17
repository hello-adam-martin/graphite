const apiEndpoint = import.meta.env.VITE_PUBLIC_API_BASEURL;

import { writable } from 'svelte/store';

export const proposals = writable([]);

/* Load all proposals */
export const loadProposals = async () => {
	fetch(apiEndpoint + '/proposals')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			proposals.set(data);
		})
		.catch((error) => {
			return console.error(error);
		});
};
loadProposals();

export const getProposal = async (proposalId) => {};

export const addProposal = async (proposalData) => {};

/* move to voteStore */
export const recordVote = async (proposalId, voteData) => {};
export const claimRewards = async (proposalId, avatar) => {};

/* this should be moved to an admin interface (retool) */
export const deleteProposal = async (proposalId) => {};
