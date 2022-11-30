import React from 'react'
import ReactLoading from 'react-loading'

const Loading = () => {
	return (
		<div className='w-full h-full flex items-center justify-center'>
			<ReactLoading
				type={'bubbles'}
				color={'#000000'}
				height={'8%'}
				width={'8%'}
			/>
		</div>
	)
}

export default Loading
