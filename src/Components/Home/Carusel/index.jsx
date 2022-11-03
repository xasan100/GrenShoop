/** @format */

import React from 'react';
import { Block, CaruselBox, Text, Img } from './style';
import { data } from '../../../Mock/data';
import Button from '../../../Generic/Button';
import { Carousel } from 'antd';

export const Carusel = () => {

	return (
		<Block>
			<Carousel autoplay>
				{data.home.caruselData.map((value, id) => (
					<CaruselBox key={id}>
						<CaruselBox.DescArea>
							<Text size='14px' fontW='500' color='#3D3D3D' lineHeight='16px'>
								{value.topTitle}
							</Text>
							<Text
								size='70px'
								color='#3D3D3D'
								fontW='900'
								lineHeight='70px'
								margin='7px 0'>
								Let’s Make a Better <span>Planet</span>
							</Text>
							<Text size='14px' color='#727272' fontW='400' lineHeight='24px'>
								{value.desc}
							</Text>
							<Button width='140px' marginTop='44px'>
								SHOP NOW
							</Button>
						</CaruselBox.DescArea>
						<CaruselBox.ImgArea>
							<Img src={value.img} />
						</CaruselBox.ImgArea>
					</CaruselBox>
				))}
			</Carousel>
		</Block>
	);
};

export default Carusel;
