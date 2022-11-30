import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchSingleImg } from '../fetchImg'

const Detail = () => {
	const [img, setImg] = useState([])
	const { id } = useParams()
	// console.log(id)

	useEffect(() => {
		fetchSingleImg(id).then((data) => setImg(data))
	}, [id])

	console.log(img)

	return (
		<div className='w-full h-screen relative bg-black/90 px-8 py-14'>
			<Link to={'/'} className='absolute right-4 top-2'>
				<button className='text-white text-2xl'>X</button>
			</Link>
			<img
				src={img?.urls?.full}
				className='w-full h-full object-contain'
				alt='img'
			/>
		</div>
	)
}

export default Detail
