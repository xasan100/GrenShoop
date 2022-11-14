import styled from 'styled-components';

const Block = styled.div`
	min-width: 100px;
	width: ${({ width }) => (width ?  width : '100px')};
	height: 35px;
	padding: 8px 17px;
	background: #46a358;
	border-radius: 6px;
	display: flex;
	gap: 5px;
	justify-content: center;
	align-items: center;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: ${({ color }) => (color ? color : '#fff')};
	margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0')};
	margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '0')};
	margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '0')};
	margin-right: ${({ marginRgiht }) => (marginRgiht ? marginRgiht : '0')};
	cursor: pointer;
`;


export { Block };