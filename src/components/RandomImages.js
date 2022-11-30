import React from 'react'
import Masonry from 'react-masonry-css'
import Image from './Image'
const breakpointObj = {
	default: 4,
	3000: 6,
	2000: 5,
	1200: 3,
	1000: 2,
	500: 1,
}

const RandomImages = ({ images, searchImages }) => {
	return (
		<Masonry className='flex mt-10 ' breakpointCols={breakpointObj}>
			{images?.map((img) => (
				<Image img={img} key={img.id} className='w-max' />
			))}
		</Masonry>
	)
}

export default RandomImages
