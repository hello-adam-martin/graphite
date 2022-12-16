import { writable, derived } from 'svelte/store';

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const apiData = writable([]);

/** Data transformation.
Here, we'll create a derived store to hold the proposal.
**/
export const proposals = derived(apiData, ($apiData) => {
	if ($apiData) {
		return $apiData.map((proposal) => proposal);
	}
	return [];
});
