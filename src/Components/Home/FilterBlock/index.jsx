/** @format */

import React, { useEffect, useState } from 'react';
import { Block, Text } from './style';

const FilterBlock = () => {
const [data, setData ]=useState()
	useEffect(() => {
		fetch(`https://greenshophorizontteam.herokuapp.com/product`)
		  .then((res) => res.json())
		  .then((res) => {
			console.log(data);
			setData(res)
		  });
	  }, []);
	
	return (
		<Block>
			<Block.Left>
				<Text size='16px' lineHeight='16px' fontWeight='700' color='#3D3D3D'>
					Categories
				</Text>
				<Text
					size='15px'
					lineHeight='40px'
					fontWeight='700'
					color='#3D3D3D'
					margin='10px 13px'>
					House Plants
				</Text>
				<Text
					size='15px'
					lineHeight='40px'
					fontWeight='700'
					color='#3D3D3D'
					margin='10px 13px'>
					Potter Plants
				</Text>
				<Text
					size='15px'
					lineHeight='40px'
					fontWeight='700'
					color='#3D3D3D'
					margin='10px 13px'>
					Seeds
				</Text>
				<Text
					size='15px'
					lineHeight='40px'
					fontWeight='700'
					color='#3D3D3D'
					margin='10px 13px'>
					Small Plants
				</Text>
				<Text
					size='15px'
					lineHeight='40px'
					fontWeight='700'
					color='#3D3D3D'
					margin='10px 13px'>
					Big Plants
				</Text>
				<Text
					size='15px'
					lineHeight='40px'
					fontWeight='700'
					color='#3D3D3D'
					margin='10px 13px'>
					Succulents
				</Text>
				<Text
					size='15px'
					lineHeight='40px'
					fontWeight='700'
					color='#3D3D3D'
					margin='10px 13px'>
					Big Plants
				</Text>
				<Text
					size='15px'
					lineHeight='40px'
					fontWeight='700'
					color='#3D3D3D'
					margin='10px 13px'>
					Trerrariums
				</Text>
				<Text
					size='15px'
					lineHeight='40px'
					fontWeight='700'
					color='#3D3D3D'
					margin='10px 13px'>
					Gardening
				</Text>
				<Text
					size='15px'
					lineHeight='40px'
					fontWeight='700'
					color='#3D3D3D'
					margin='10px 13px'>
					Accessories
				</Text>
			</Block.Left>
			<Block.Right></Block.Right>
		</Block>
	);
};

export default FilterBlock;
