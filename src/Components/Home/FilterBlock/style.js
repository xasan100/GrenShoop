import styled from 'styled-components';
import { Pagination } from "antd";

const Box=styled.div`
width: 100%;
max-width: 1440px;
margin: 0 auto;
position: relative;
`

const Block = styled.div`
    width: 100%;
    height: 900px;
    display: grid;
    grid-template-columns: 310px 1fr;

`;
Block.Left = styled.div`
    padding: 14px 18px;

`;
Block.Right = styled.div`
display: grid;
grid-template-columns: 4fr 4fr 4fr;
grid-template-rows: 1fr 1fr 1fr;
padding: 30px 30px;
gap: 30px;
`;

const Card = styled.div`
background: #FBFBFB;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
>h3{
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: #46A358;
padding-left: 20px;

}

>p{
 font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16px;  
padding-left: 20px ;



}


>img {
 width: 270px;
 height: 270px;
 max-width: 100%;
 margin: 0 auto;
 display:  flex;
 justify-content: center;
align-items: center;
cursor: pointer;



    
}
`;

const Text = styled.div`
	font-size: ${({ size }) => (size ? size : '16px')};
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
	color: ${({ color }) => (color ? color : '#000')};
	line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 'none')};
	display: ${({ span }) => (span ? 'inline-block' : 'block')};
	margin: ${({ margin }) => (margin ? margin : '0 0')};
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    :active{
    color: #46A358;
    }
    :hover{
        color: #46A358;

    }
`;


const CenterText=styled.div`

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 16px;
/* identical to box height, or 107% */
color: #46A358;
margin: 30px;
text-align:center ;

`
 
const PaginationAnt=styled(Pagination)`
margin-bottom: 50px;
margin-top:50px ;
margin-left: 30px;

`
const BoxImg=styled.div`
>h3{
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 51px;
line-height: 65px;
color: #46A358;
text-align: center;
}
position: absolute;
top: 550px;
left: 0px;
right: 0px;
bottom: 0px;
width: 27%;

`



export const ImgTop=styled.img`
width: 100%;
`

export { Block,BoxImg, Text,Card ,CenterText,PaginationAnt,Box};