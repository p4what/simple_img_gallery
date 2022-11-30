import React, { useEffect, useState } from 'react'
import { fetchRandomImg, fetchSearchImg } from '../fetchImg'
import RandomImages from './RandomImages'
import Loading from './Loading'

const Home = () => {
	const [loading, setLoading] = useState(false)
	const [randomImages, setRandomImages] = useState([])
	const [input, setInput] = useState('')
	const [searchImages, setSearchImages] = useState([])

	useEffect(() => {
		setLoading(true)
		fetchRandomImg('photos').then((data) => {
			setRandomImages(data)
			setLoading(false)
		})
	}, [])

	useEffect(() => {
		setLoading(true)
		fetchSearchImg(`${input}`).then((data) => {
			setSearchImages(data.results)
			setLoading(false)
		})
	}, [input])

	// console.log('search>>', searchImages)
	// console.log('ran>>', randomImages)

	return (
		<div className='p-10 w-full min-h-screen bg-primary-color flex flex-col items-center'>
			<form className='bg-secondary-color w-full max-w-[600px] p-3 rounded-[10px] shadow-md  flex'>
				<input
					onChange={(e) => setInput(e.target.value)}
					value={input}
					type='text'
					className='bg-transparent outline-none flex-1'
					placeholder='Search image'
				/>
				<button type='submit'>🔎</button>
			</form>

			{loading ? (
				<Loading />
			) : searchImages?.length > 0 ? (
				<RandomImages images={searchImages} />
			) : (
				<RandomImages images={randomImages} />
			)}
		</div>
	)
}

export default Home
