/** @format */

import React, { useEffect, useReducer, useState } from 'react';
import { Block,  Card, Text } from './style';

const FilterBlock = () => {
const [data, setData ]=useState()

useEffect(() => {
	fetch("https://greenshophorizontteam.herokuapp.com/product")
	  .then((res) => res.json())
	  .then((res) => {
		console.log(res,'res');
		setData(res)
	  });
  }, []);


const HousePlants=()=>{
let res =data.filter((item)=>{
return item.type==="houseplants"
})
setData(res)
}




	
	return (
		<Block>
			<Block.Left>
				<Text size='16px' lineHeight='16px' fontWeight='700' color='#3D3D3D'>
					Categories
				</Text>
				<Text onClick={HousePlants}
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
			<Block.Right>  
				{data?.map((value,ind)=>{
					return (
						<Card key={ind}> 
						<img src={value?.img} height={250} width={250} alt="" />
				        </Card>
					)
				})}

			</Block.Right>
		</Block>
	);
};

export default FilterBlock;
