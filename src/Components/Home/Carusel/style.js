/** @format */

import styled from 'styled-components';

const Block = styled.div`
	width: 100%;
	height: 450px;
	margin: 12px 0;
	li {
		background: rgba(70, 163, 88, 0.3);
	}
	
`;

const CaruselBox = styled.div`
	width: 100%;
	height: 450px;
	background: linear-gradient(
		97.77deg,
		rgba(245, 245, 245, 0.5) -23.46%,
		rgba(245, 245, 245, 0.5) 107.51%);
	display: grid !important;
	grid-template-columns: 1fr 1fr;

`;

CaruselBox.DescArea = styled.div`
	padding: 68px 43px;
`;
CaruselBox.ImgArea = styled.div`
	display: grid;
	justify-content: center;
	align-items: center;
`;

const Text = styled.div`
	font-size: ${({ size }) => (size ? size : '16px')};
	color: ${({ color }) => (color ? color : '#000')};
	font-weight: ${({ fontW }) => (fontW ? fontW : '400')};
	margin: ${({ margin }) => (margin ? margin : '0 0')};
	line-height: ${({ lineHeight }) => lineHeight ? lineHeight : '400'};
	> span {
		color: #46a358;
	}
`;

const Img = styled.img`
	width: 100%;
`;


export { Block, CaruselBox, Text, Img };
