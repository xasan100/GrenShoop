import React from 'react';
import { Block } from './style';

const Button = ({
	children,
	img,
	color,
	width,
	marginLeft,
	marginRgiht,
	marginTop,
	marginBottom,
}) => {
	return (
		<Block
			color={color}
			width={width}
			marginLeft={marginLeft}
			marginRgiht={marginRgiht}
			marginTop={marginTop}
			marginBottom={marginBottom}>
			{img && <img src={img} />}
			{children}
		</Block>
	);
};

export default Button;