import React from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from './components/Detail'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/detail/:id' element={<Detail />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
