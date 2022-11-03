/** @format */

import React from 'react';
import { Block } from './style';
import { Routes, Route, Navigate } from 'react-router-dom';
import Blogs from '../Pages/Blogs';
import Home from '../Pages/Home';
import PlantCare from '../Pages/PlantCare';
import Shop from '../Pages/Shop';
import Header from '../Utils/Header';


export const Root = () => {

	// const navigate = useNavigate();
	// useEffect(() => {
	// 	navigate('/home')
	// }, [])
	

	return (
		<Block>
			<Header />
			<Routes>
				<Route path='/' element={<Navigate to='/home' />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/home' element={<Home />} />
				<Route path='/Plantcare' element={<PlantCare />} />
				<Route path='/shop' element={<Shop />} />
			</Routes>
		</Block>
	);
};

export default Root;
