/** @format */

import React, { lazy } from 'react';
import { Block } from './style';
import { Routes, Route, Navigate } from 'react-router-dom';
import Blogs from '../Pages/Blogs';
import Home from '../Pages/Home';
import PlantCare from '../Pages/PlantCare';
import Shop from '../Pages/Shop';
import Header from '../Utils/Header';
import SigIn from '../Pages/SigIn';
import Footer from '../Utils/Footer';






export const Root = () => {


	return (
		<Block>
			<Header />
			<Routes> 
				<>
				<Route path='/' element={<Navigate to='/home' />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/home' element={<Home />} />
				<Route path='/Plantcare' element={<PlantCare />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/login' element={<SigIn />} />
			    <Route path="*" element={<h1>404 EROR NOT FOUND PAGE</h1>} />
				</>
			</Routes>
			<Footer/>
		</Block>
	);
};

export default Root;
