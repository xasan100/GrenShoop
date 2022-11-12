import styled from 'styled-components';


const Block = styled.div`
    border: 1px solid red;
    width: 100%;
    height: 900px;
    display: grid;
    grid-template-columns: 310px 1fr;

`;
Block.Left = styled.div`
    border: 1px solid red;
    padding: 14px 18px;

`;
Block.Right = styled.div`
    border: 1px solid red;
display: grid;
grid-template-columns: auto auto auto;
`;

const Card = styled.div`
>img {
    border: 1px solid blue;
    max-width: 250px;
    max-height: 250px;

    
}
`;

const Text = styled.div`
	font-size: ${({ size }) => (size ? size : '16px')};
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
	color: ${({ color }) => (color ? color : '#000')};
	line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 'none')};
	display: ${({ span }) => (span ? 'inline-block' : 'block')};
	margin: ${({ margin }) => (margin ? margin : '0 0')};
`;


export { Block, Text,Card };