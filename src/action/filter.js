export const setFilter = (filter) => ({
	type: 'SET_FILTER',
	payload: filter,
})

export const setSerchQuery = (value) => ({
	type: 'SET_QUERY',
	payload: value,
})