import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({ img }) => {
	return (
		<Link to={`/detail/${img.id}`}>
			<div className='m-3'>
				<img src={img.urls.full} alt='' />
			</div>
		</Link>
	)
}

export default Image
