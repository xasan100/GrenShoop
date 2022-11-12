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
     display: flex;
    flex-wrap: wrap;

`;

const Card = styled.div`
cursor: pointer;
  background-color: #fbfbfb;
  margin-bottom: 40px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  .title {
    padding-top: 5px;
    padding-left: 15px;
  }
  .price {
    color: #46a358;
    font-weight: 700;
    transform: translateY(-20px);
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