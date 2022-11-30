export const fetchRandomImg = async (param) => {
	const data = await fetch(
		`https://api.unsplash.com/${param}/?page=&client_id=qy8o5da_4nDh6E1vaNfWXkHbVo9Xn7JpsP1l4pLNJnU`
	)

	return data.json()
}

export const fetchSearchImg = async (input) => {
	const data = await fetch(
		`https://api.unsplash.com/search/photos?page=1&query=${input}&client_id=qy8o5da_4nDh6E1vaNfWXkHbVo9Xn7JpsP1l4pLNJnU`
	)

	return data.json()
}

export const fetchSingleImg = async (id) => {
	const data = await fetch(
		`https://api.unsplash.com/photos/${id}?client_id=qy8o5da_4nDh6E1vaNfWXkHbVo9Xn7JpsP1l4pLNJnU`
	)

	return data.json()
}
